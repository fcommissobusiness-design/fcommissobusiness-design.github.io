/* ============================================================
   MOTORE DI RACCOMANDAZIONE - DETERMINISTICO, ZERO AI
   ------------------------------------------------------------
   Tre sole idee:

   1. FILTRI DURI  (must)   escludono prodotti incompatibili
   2. PUNTEGGI SOFT (score) riordinano quelli rimasti
   3. DOMANDA DINAMICA      la prossima domanda è quella che
                            cambia davvero la risposta finale

   Il punto 3 è la parte interessante: non chiediamo le domande
   in ordine fisso. Ad ogni passo simuliamo tutte le domande
   ancora aperte e scegliamo quella che produce il maggior
   numero di classifiche finali DIVERSE. Quando nessuna domanda
   cambierebbe più il podio, smettiamo di chiedere.
   ============================================================ */

const Engine = (function () {

  const BASE_WEIGHT = 2;      // quanto pesa la qualità editoriale di base
  const MAX_QUESTIONS = 6;

  function vertical(vid) {
    return window.VERTICALS.find(v => v.id === vid) || null;
  }

  /* I prodotti fuori catalogo restano nel database ma non entrano
     né in vetrina né nei consigli: consigliare qualcosa che non si può
     comprare è il modo più veloce di bruciare la fiducia. */
  function products(vid) {
    return window.PRODUCTS.filter(p => p.v === vid && !p.unavailable);
  }

  function allProducts(vid) {
    return window.PRODUCTS.filter(p => p.v === vid);
  }

  function product(pid) {
    return window.PRODUCTS.find(p => p.id === pid) || null;
  }

  function facet(v, fid) {
    return v.facets.find(f => f.id === fid) || null;
  }

  function option(v, fid, oid) {
    const f = facet(v, fid);
    if (!f) return null;
    return f.options.find(o => o.id === oid) || null;
  }

  /* --- risposte: { facetId: optionId }. '__skip' = indifferente --- */
  function answeredOptions(v, answers) {
    const out = [];
    Object.keys(answers || {}).forEach(fid => {
      if (answers[fid] === '__skip') return;
      const o = option(v, fid, answers[fid]);
      if (o) out.push({ facetId: fid, opt: o });
    });
    return out;
  }

  /* ============ VALUTAZIONE ============ */
  function evaluate(v, answers) {
    const chosen = answeredOptions(v, answers);
    const pool = products(v.id);

    const kept = [];
    const dropped = [];

    pool.forEach(p => {
      let killedBy = null;
      for (let i = 0; i < chosen.length; i++) {
        const o = chosen[i].opt;
        if (o.must && !o.must(p)) { killedBy = o; break; }
      }
      if (killedBy) { dropped.push({ p: p, by: killedBy }); return; }

      let score = p.quality * BASE_WEIGHT;
      const contributions = [];
      chosen.forEach(c => {
        if (!c.opt.score) return;
        const pts = c.opt.score(p);
        if (pts) contributions.push({ reason: c.opt.reason, pts: pts });
        score += pts;
      });
      kept.push({ p: p, score: score, contributions: contributions });
    });

    /* tetto teorico, serve per la percentuale di compatibilità */
    let ceiling = 10 * BASE_WEIGHT;
    chosen.forEach(c => {
      if (!c.opt.score) return;
      let best = 0;
      pool.forEach(p => { const s = c.opt.score(p); if (s > best) best = s; });
      ceiling += best;
    });

    kept.forEach(r => {
      r.pct = Math.max(40, Math.min(99, Math.round((r.score / ceiling) * 100)));
    });

    kept.sort((a, b) => b.score - a.score || a.p.price - b.p.price);
    return { ranked: kept, dropped: dropped, ceiling: ceiling, answersUsed: chosen.length };
  }

  /* ============ DOMANDA SUCCESSIVA (la parte "dinamica") ============ */
  function podiumSignature(v, answers) {
    const r = evaluate(v, answers).ranked;
    return r.slice(0, 3).map(x => x.p.id).join('|') || 'VUOTO';
  }

  function discriminatingPower(v, fid, answers) {
    const f = facet(v, fid);
    const seen = {};
    let n = 0;
    f.options.forEach(o => {
      const trial = Object.assign({}, answers);
      trial[fid] = o.id;
      const sig = podiumSignature(v, trial);
      if (!seen[sig]) { seen[sig] = true; n++; }
    });
    return n;
  }

  function nextQuestion(v, answers) {
    const asked = Object.keys(answers || {});
    if (asked.length >= MAX_QUESTIONS) return null;

    let best = null;
    v.facets.forEach(f => {
      if (answers.hasOwnProperty(f.id)) return;
      const power = discriminatingPower(v, f.id, answers);
      if (power <= 1) return;                       // domanda inutile: non cambia nulla
      if (!best || power > best.power) best = { facet: f, power: power };
    });
    return best;
  }

  /* Variante per il survey della barra di ricerca, che deve porre un numero
     FISSO di domande (3-4). Prima cerca quella che cambia di più il risultato;
     se il catalogo è troppo piccolo perché una domanda sposti il podio,
     ripiega sulla prima ancora aperta invece di chiudere in anticipo. */
  function nextQuestionAlways(v, answers) {
    const best = nextQuestion(v, answers);
    if (best) return best;
    for (let i = 0; i < v.facets.length; i++) {
      const f = v.facets[i];
      if (answers.hasOwnProperty(f.id)) continue;
      /* scartiamo le domande che non lascerebbero nessun prodotto in nessun caso */
      const alive = f.options.some(o => {
        const t = Object.assign({}, answers); t[f.id] = o.id;
        return evaluate(v, t).ranked.length > 0;
      });
      if (alive) return { facet: f, power: 1 };
    }
    return null;
  }

  /* quante domande restano potenzialmente utili (per la barra di avanzamento) */
  function remainingUseful(v, answers) {
    let n = 0;
    v.facets.forEach(f => {
      if (answers.hasOwnProperty(f.id)) return;
      if (discriminatingPower(v, f.id, answers) > 1) n++;
    });
    return n;
  }

  /* ============ RUOLI DEL PODIO ============ */
  function roles(ranked) {
    if (!ranked.length) return [];
    const out = [];
    const used = {};

    const best = ranked[0];
    out.push({ role: 'best', label: 'Migliore per te', icon: '🥇', r: best });
    used[best.p.id] = true;

    /* qualità/prezzo: miglior punteggio per euro speso, tra chi non è già scelto */
    let value = null;
    ranked.forEach(r => {
      if (used[r.p.id]) return;
      const ratio = r.score / Math.sqrt(r.p.price);
      if (!value || ratio > value.ratio) value = { ratio: ratio, r: r };
    });
    if (value) { out.push({ role: 'value', label: 'Miglior rapporto qualità/prezzo', icon: '💰', r: value.r }); used[value.r.p.id] = true; }

    /* economico: il più a buon mercato che resta decente (entro il 25% dal top) */
    let cheap = null;
    ranked.forEach(r => {
      if (used[r.p.id]) return;
      if (r.score < best.score * 0.72) return;
      if (!cheap || r.p.price < cheap.p.price) cheap = r;
    });
    if (cheap) out.push({ role: 'budget', label: 'Se vuoi spendere meno', icon: '💸', r: cheap });

    return out;
  }

  /* ============ STAGIONALITÀ ============
     La domanda di ogni categoria non è piatta nell'anno. Sapere quando
     sale serve a due cose: ordinare la vetrina e decidere quando
     pubblicare i contenuti (che hanno bisogno di mesi per posizionarsi). */
  const MESI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
  const MESI_LUNGHI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

  function nowMonth() { return new Date().getMonth() + 1; }

  /* 2 = mese di picco, 1 = mese caldo, 0 = fuori stagione */
  function seasonLevel(v, month) {
    month = month || nowMonth();
    if (!v.season) return 0;
    if (v.season.peak.indexOf(month) >= 0) return 2;
    if (v.season.warm.indexOf(month) >= 0) return 1;
    return 0;
  }

  /* quanti mesi mancano al prossimo picco: dice cosa scrivere ADESSO */
  function monthsToPeak(v, month) {
    month = month || nowMonth();
    if (!v.season) return null;
    let best = 99;
    v.season.peak.forEach(p => {
      let d = p - month; if (d < 0) d += 12;
      if (d < best) best = d;
    });
    return best;
  }

  function nextPeakName(v, month) {
    month = month || nowMonth();
    const d = monthsToPeak(v, month);
    if (d === null) return null;
    return MESI_LUNGHI[((month - 1 + d) % 12)];
  }

  function inSeason(v) { return seasonLevel(v) === 2; }

  /* ============ ALBERO SEO A TRE LIVELLI ============
     L1  categoria                          /robot-aspirapolvere
     L2  categoria + 1 attributo            .../per-animali
     L3  categoria + budget + 1 attributo   .../sotto-300-euro-per-animali
     L4  categoria + budget + 2 attributi   .../sotto-600-euro-per-animali-per-tappeti

     La profondità è la difesa: le pagine L1 sono un bagno di sangue,
     le L3 e L4 hanno concorrenza quasi nulla e intenzione altissima. */
  const treeCache = {};

  function seoPages(v) {
    if (treeCache[v.id]) return treeCache[v.id];
    const pages = [];
    const seen = {};

    function push(slug, title, answers, facet, level) {
      if (seen[slug]) return;
      if (!evaluate(v, answers).ranked.length) return;   // niente pagina senza prodotti
      seen[slug] = true;
      pages.push({ slug: slug, title: title, answers: answers, intent: facet.seoIntent, level: level });
    }

    const budget = v.facets[0];
    const others = v.facets.slice(1);

    /* L2: un attributo solo */
    v.facets.forEach(f => {
      f.options.forEach(o => {
        if (!o.slug) return;
        const a = {}; a[f.id] = o.id;
        push(o.slug, o.seoTitle || (v.name + ' ' + o.label), a, f, 2);
      });
    });

    /* L3: budget x attributo */
    budget.options.forEach(bo => {
      if (!bo.slug || !bo.must) return;
      others.forEach(f => {
        f.options.forEach(o => {
          if (!o.slug || !o.seoTitle) return;
          const a = {}; a[budget.id] = bo.id; a[f.id] = o.id;
          push(bo.slug + '-' + o.slug, o.seoTitle + ' ' + bo.label.toLowerCase().replace('fino a', 'sotto i'), a, f, 3);
        });
      });
    });

    /* L4: budget x due attributi. Solo le coppie che restano popolate. */
    budget.options.forEach(bo => {
      if (!bo.slug || !bo.must) return;
      for (let i = 0; i < others.length; i++) {
        for (let j = i + 1; j < others.length; j++) {
          others[i].options.forEach(o1 => {
            if (!o1.slug || !o1.seoTitle) return;
            others[j].options.forEach(o2 => {
              if (!o2.slug || !o2.seoTitle) return;
              const a = {}; a[budget.id] = bo.id; a[others[i].id] = o1.id; a[others[j].id] = o2.id;
              const r = evaluate(v, a).ranked;
              if (r.length < 2) return;                    // sotto 2 modelli la pagina è inutile
              /* La coda viene dallo slug, non dal seoTitle: il seoTitle ripete
                 il nome della categoria e produceva titoli come
                 "Migliori sedie ergonomiche ... sedie gaming ergonomiche". */
              const tail = o2.slug.replace(/-/g, ' ');
              push(bo.slug + '-' + o1.slug + '-' + o2.slug,
                o1.seoTitle + ' ' + tail + ' ' + bo.label.toLowerCase().replace('fino a', 'sotto i'),
                a, others[i], 4);
            });
          });
        }
      }
    });

    /* ---- DEDUPLICA: una pagina per ogni risposta DIVERSA ----
       Con 27 prodotti, generare tutte le combinazioni produceva 176 guide
       di cui il 95% mostrava gli stessi prodotti nello stesso ordine:
       contenuto quasi-duplicato che un motore di ricerca penalizza.
       Teniamo una sola pagina per ogni ordinamento distinto. A parità,
       vince il livello più basso, e fra due pagine dello stesso livello
       quella che parla di una CARATTERISTICA batte quella che parla solo
       di budget: "per animali" è una richiesta, "sotto 350 euro" un filtro. */
    const budgetSlugs = {};
    v.facets[0].options.forEach(o => { if (o.slug) budgetSlugs[o.slug] = true; });
    const gruppi = {};
    pages.forEach(pg => {
      const sig = evaluate(v, pg.answers).ranked.map(r => r.p.id).join('|');
      (gruppi[sig] = gruppi[sig] || []).push(pg);
    });
    const kept = [];
    Object.keys(gruppi).forEach(sig => {
      const g = gruppi[sig].slice().sort((a, b) =>
        (a.level - b.level) ||
        ((budgetSlugs[a.slug] ? 1 : 0) - (budgetSlugs[b.slug] ? 1 : 0)) ||
        (a.slug.length - b.slug.length));
      const win = g[0];
      win.absorbed = g.slice(1).map(x => x.slug);   // le richieste che questa pagina copre
      kept.push(win);
    });
    /* ordine stabile: per livello, poi per posizione originale */
    const ordine = {}; pages.forEach((pg, i) => { ordine[pg.slug] = i; });
    kept.sort((a, b) => (a.level - b.level) || (ordine[a.slug] - ordine[b.slug]));

    treeCache[v.id] = kept;
    return kept;
  }

  function seoPage(v, slug) {
    return seoPages(v).find(p => p.slug === slug) || null;
  }

  /* ============ RICERCA ============ */
  function search(q) {
    q = (q || '').toLowerCase().trim();
    if (q.length < 2) return [];
    const out = [];
    window.VERTICALS.forEach(v => {
      if ((v.name + ' ' + v.short).toLowerCase().indexOf(q) >= 0) out.push({ type: 'vertical', v: v, label: v.name });
      seoPages(v).forEach(pg => {
        if (pg.title.toLowerCase().indexOf(q) >= 0) out.push({ type: 'guide', v: v, pg: pg, label: pg.title });
      });
    });
    window.PRODUCTS.forEach(p => {
      if ((p.brand + ' ' + p.name).toLowerCase().indexOf(q) >= 0) out.push({ type: 'product', p: p, label: p.brand + ' ' + p.name });
    });
    return out.slice(0, 12);
  }

  /* ============ VETRINA ============
     Ordinamento della griglia. Il default tiene conto della stagione:
     a settembre le sedie da ufficio salgono, a marzo i trapani. */
  function shelf(filter, sort) {
    filter = filter || {};
    let list = window.PRODUCTS.filter(p => !p.unavailable);

    if (filter.dept && filter.dept !== 'all') {
      list = list.filter(p => vertical(p.v).dept === filter.dept);
    }
    if (filter.season) list = list.filter(p => seasonLevel(vertical(p.v)) === 2);
    if (filter.top) list = list.filter(p => p.quality >= 8.5);
    if (filter.cheap) list = list.filter(p => p.price <= 300);

    const key = {
      rilevanza: p => p.quality * 10 + seasonLevel(vertical(p.v)) * 6,
      prezzoasc: p => -p.price,
      prezzodesc: p => p.price,
      voto: p => p.quality
    }[sort || 'rilevanza'];

    list.sort((a, b) => key(b) - key(a) || a.price - b.price);
    return list;
  }

  function depts() {
    const out = [];
    window.VERTICALS.forEach(v => { if (out.indexOf(v.dept) < 0) out.push(v.dept); });
    return out;
  }

  return {
    vertical: vertical, products: products, product: product,
    facet: facet, option: option,
    evaluate: evaluate, nextQuestion: nextQuestion, nextQuestionAlways: nextQuestionAlways,
    remainingUseful: remainingUseful,
    discriminatingPower: discriminatingPower, roles: roles,
    seoPages: seoPages, seoPage: seoPage, search: search,
    shelf: shelf, depts: depts, allProducts: allProducts,
    seasonLevel: seasonLevel, inSeason: inSeason, nowMonth: nowMonth,
    monthsToPeak: monthsToPeak, nextPeakName: nextPeakName, MESI: MESI, MESI_LUNGHI: MESI_LUNGHI,
    MAX_QUESTIONS: MAX_QUESTIONS
  };
})();
