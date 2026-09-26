/* ============================================================
   SCELTA GUIDATA - flusso lineare, conversazionale (PickForMe)
   ------------------------------------------------------------
   Ingresso: una barra dove SCRIVI cosa ti serve. A invio, il testo
   viene riconosciuto (parole chiave per categoria) e partono le
   domande, UNA alla volta, in verticale: rispondi, la risposta resta
   sopra come riga, la domanda successiva compare sotto e la pagina
   scorre fin li'. Clicchi, scorre, avanti. Pensato per il pollice.
   Il risultato segue la spec: un vincitore, il perche', gli esclusi,
   le alternative, e SOLO poi il passaggio ad Amazon.
   ============================================================ */
window.Survey = (function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const eur = n => '€' + Number(n).toLocaleString('it-IT', { maximumFractionDigits: 0 });
  const eurc = n => '€' + Number(n).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  /* nome prodotto senza marchio ripetuto (es. "Inofia Inofia Kuhl" -> "Inofia Kuhl") */
  function fullName(p) { const b = (p.brand || '').trim(), n = (p.name || '').trim(); if (!b) return n; const bl = b.toLowerCase(), nl = n.toLowerCase(); if (nl === bl || nl.indexOf(bl + ' ') === 0) return n; const b1 = bl.split(/[\s(]/)[0]; if (b1 && (nl === b1 || nl.indexOf(b1 + ' ') === 0)) return n; return b + ' ' + n; }
  const media = p => p.img ? '<img src="' + esc(p.img) + '" alt="' + esc(fullName(p)) + '" loading="lazy">' : '';
  const stars = p => p.rating ? '<span class="stars"><i>★</i> ' + p.rating.toFixed(1).replace('.', ',') + (p.reviews ? ' <span class="n">(' + p.reviews.toLocaleString('it-IT') + ')</span>' : '') + '</span>' : '';

  /* Tracciamento uso del MOTORE (la funzione principale del sito): quanti
     avviano il finder, cercano, rispondono, arrivano a una raccomandazione.
     gtag esiste solo dopo il consenso ai cookie; in caso contrario, no-op. */
  function track(name, params) {
    try { if (typeof gtag === 'function') gtag('event', name, params || {}); } catch (e) { }
  }

  /* --- riconoscimento del testo: quale categoria? --- */
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  /* categorie davvero disponibili: quelle con almeno un prodotto vendibile.
     Le categorie definite ma ancora senza prodotti non vengono proposte. */
  function liveVerts() { return (window.VERTICALS || []).filter(v => !window.Engine || Engine.products(v.id).length > 0); }
  function detect(text) {
    const t = norm(text); if (t.length < 2) return { v: null, alts: [] };
    const scored = liveVerts().map(v => {
      let sc = 0;
      norm(v.keywords || '').split(',').forEach(k => { k = k.trim(); if (k && t.indexOf(k) >= 0) sc += k.length; });
      if (t.indexOf(norm(v.singular)) >= 0) sc += 20;
      return { v, sc };
    }).filter(x => x.sc > 0).sort((a, b) => b.sc - a.sc);
    return { v: scored[0] ? scored[0].v : null, alts: scored.slice(0, 3).map(x => x.v) };
  }
  /* pre-risposte dal testo: "sotto 300", "con animali", "8 ore" ecc. */
  function preanswers(v, text) {
    const t = norm(text); const a = {};
    v.facets.forEach(f => f.options.forEach(o => {
      const r = norm(o.reason);
      const hits = [norm(o.label), r].filter(x => x.length > 4 && t.indexOf(x) >= 0);
      if (hits.length && !a[f.id]) a[f.id] = o.id;
    }));
    const m = t.match(/(sotto|fino a|massimo|max|meno di)\s*(\d{2,4})/);
    if (m) { const lim = parseInt(m[2], 10); const bf = v.facets[0];
      const opt = bf.options.filter(o => o.must).map(o => ({ o, cap: parseInt((o.label.match(/\d+/) || ['0'])[0], 10) })).filter(x => x.cap >= lim).sort((x, y) => x.cap - y.cap)[0];
      if (opt) a[bf.id] = opt.o.id; }
    return a;
  }

  function verifica(p) { if (!p.checked) return ''; const [y, m, d] = p.checked.split('-'); const n = parseInt(d, 10); return 'verificato ' + ((n === 8 || n === 11) ? "l'" : 'il ') + n + ' ' + Engine.MESI_LUNGHI[parseInt(m, 10) - 1] + ' ' + y; }
  function handoff(p) { const u = window.amazonUrl ? window.amazonUrl(p) : null; return u ? '<a class="btn btn-commerce" href="' + u + '" target="_blank" rel="noopener nofollow sponsored">Vedi su Amazon ↗</a>' : ''; }

  /* --- righe delle risposte gia' date (la "conversazione") --- */
  function conversazione(v, st, opts) {
    let out = '';
    if (st.text) out += '<div class="crow you"><span>' + esc(st.text) + '</span></div>';
    if (v) out += '<div class="crow me"><b>' + esc(v.name) + '</b><span>ok, restringiamo.</span>' + (opts.vid ? '' : '<button data-sv="reset">cambia</button>') + '</div>';
    Object.keys(st.answers || {}).forEach(fid => {
      const f = Engine.facet(v, fid); const o = Engine.option(v, fid, st.answers[fid]);
      out += '<div class="crow me q"><span>' + esc(f.question) + '</span></div>' +
        '<div class="crow you"><span>' + esc(o ? o.label : 'Nessuna preferenza') + '</span><button data-sv="undo" data-f="' + fid + '">cambia</button></div>';
    });
    return out;
  }

  function risultato(v, st, opts) {
    const ev = Engine.evaluate(v, st.answers); const rs = Engine.roles(ev.ranked);
    if (!rs.length) return '<div class="empty"><b>Con tutte queste risposte insieme non resta nessun modello.</b><br>Prova a cambiare l\'ultima risposta.<div class="ffoot" style="justify-content:center"><button data-sv="reset">Ricomincia</button></div></div>';
    const win = rs[0].r, p = win.p;
    const contr = (win.contributions || []).filter(c => c.pts > 0).sort((a, b) => b.pts - a.pts).slice(0, 3);
    const gia = {}; contr.forEach(c => { gia[c.reason] = true; });
    const vincoli = Object.keys(st.answers).map(fid => Engine.option(v, fid, st.answers[fid])).filter(o => o && o.must && !gia[o.reason]).map(o => o.reason);
    let ragioni = contr.map(c => '<div class="reason"><span class="ico">✓</span><div><b>' + esc(cap(c.reason)) + '</b><span>Fra i modelli rimasti, è quello che risponde meglio a questa esigenza.</span></div></div>').join('');
    vincoli.slice(0, 2).forEach(r => { ragioni += '<div class="reason"><span class="ico">✓</span><div><b>' + esc(cap(r)) + '</b><span>Rispetta il vincolo che hai indicato come necessario.</span></div></div>'; });
    if (!ragioni) ragioni = '<div class="reason"><span class="ico">✓</span><div><b>Qualità complessiva</b><span>Non hai posto vincoli stringenti: vince il modello più solido della categoria.</span></div></div>';
    const dietro = ev.ranked.slice(1).filter(r => !rs.some(x => x.r.p.id === r.p.id)).slice(0, 4);
    let whynot = '';
    ev.dropped.slice(0, 5).forEach(d => { whynot += '<div class="excl"><div><b>' + esc(fullName(d.p)) + '</b><span class="r hard">' + esc(d.by.reason) + '</span></div><a href="' + opts.productUrl(d.p) + '">scheda</a></div>'; });
    dietro.forEach(r => { const neg = (r.contributions || []).filter(c => c.pts < 0).sort((a, b) => a.pts - b.pts)[0]; whynot += '<div class="excl"><div><b>' + esc(fullName(r.p)) + '</b><span class="r soft">' + esc(neg ? 'cede su ' + neg.reason : r.p.avoidIf) + '</span></div><a href="' + opts.productUrl(r.p) + '">scheda</a></div>'; });
    const alts = rs.slice(1).map(x => { const q = x.r.p; const diff = q.price - p.price;
      const trade = diff < 0 ? 'Risparmi circa ' + eur(-diff) + ': ' + q.avoidIf.replace(/\.$/, '').toLowerCase() + '.' : diff > 0 ? 'Costa circa ' + eur(diff) + ' in più: ' + q.buyIf.replace(/\.$/, '').toLowerCase() + '.' : q.tagline;
      return '<a class="alt" href="' + opts.productUrl(q) + '"><span class="m">' + media(q) + '</span><span><span class="role">' + esc(x.label) + '</span><span class="n">' + esc(fullName(q)) + '</span>' + stars(q) + '<span class="t">' + esc(trade) + '</span></span></a>'; }).join('');
    return '<div class="crow me"><b>Ecco cosa comprare.</b><span>La scelta migliore per te, più le due alternative che hanno senso.</span></div>' +
      '<article class="winner"><div class="winner-tag">La scelta migliore per te</div><div class="winner-body"><div class="winner-media">' + media(p) + '</div><div>' +
      '<h2 class="winner-name"><a href="' + opts.productUrl(p) + '">' + esc(fullName(p)) + '</a></h2>' + stars(p) +
      '<div class="winner-fit">' + esc(p.tagline) + '</div><div class="why"><h3>Perché questo</h3>' + ragioni + '</div>' +
      '<div class="fitbox yes"><b>Fa per te se</b>' + esc(p.buyIf) + '</div>' +
      '<div class="price-line"><b>' + eurc(p.price) + '</b><span class="sub">' + esc(verifica(p)) + '</span></div>' +
      '<div class="handoff">' + handoff(p) + '<a class="btn btn-quiet" href="' + opts.productUrl(p) + '">Tutta la scheda</a></div>' +
      '<button class="btn-share" type="button" data-share="1" data-n="' + esc(fullName(p)) + '" data-price="' + esc(eurc(p.price)) + '" data-fit="' + esc(p.tagline || '') + '" data-img="' + esc(p.img || '') + '" data-cat="' + esc(v.name) + '"><span class="bs-ic" aria-hidden="true">↗</span> Condividi il tuo match</button></div></div></article>' +
      (alts ? '<div class="alts"><h2>Le altre due scelte</h2><p class="altsub">Se le tue priorità cambiano, sono queste le due che restano valide.</p><div class="altgrid">' + alts + '</div></div>' : '') +
      (whynot ? '<div class="whynot"><h2>Perché non gli altri</h2>' + whynot + '</div>' : '') +
      '<div class="ffoot"><button data-sv="reset">Rifai da capo</button></div>';
  }

  /* VERDETTO sul prodotto della scheda: dopo le domande, dice se QUEL prodotto
     (opts.focusId) fa per te, perche', e mostra alternative + scartati. */
  function verdetto(v, st, opts) {
    const ev = Engine.evaluate(v, st.answers); const rs = Engine.roles(ev.ranked);
    const inR = ev.ranked.find(r => r.p.id === opts.focusId);
    const drop = ev.dropped.find(d => d.p.id === opts.focusId);
    const p = (inR && inR.p) || (drop && drop.p);
    if (!p) return risultato(v, st, opts);
    const winner = rs[0] ? rs[0].r.p : (ev.ranked[0] && ev.ranked[0].p);
    const isWinner = winner && winner.id === p.id;
    const contrPos = inR ? (inR.contributions || []).filter(c => c.pts > 0).sort((a, b) => b.pts - a.pts).slice(0, 3) : [];
    const contrNeg = inR ? (inR.contributions || []).filter(c => c.pts < 0).sort((a, b) => a.pts - b.pts) : [];
    const gia = {}; contrPos.forEach(c => { gia[c.reason] = true; });
    const vincoli = Object.keys(st.answers).map(fid => Engine.option(v, fid, st.answers[fid])).filter(o => o && o.must && !gia[o.reason]).map(o => o.reason);

    let tone, head;
    if (drop) {
      tone = 'no';
      head = '<div class="fv-tag no">Non fa per te</div><h2>No: per come l\'hai descritta, non è la scelta adatta a te.</h2>';
    } else if (isWinner) {
      tone = 'yes';
      head = '<div class="fv-tag yes">Fa per te</div><h2>Sì, è adatta a te: è anzi la scelta migliore per come l\'hai descritta.</h2>';
    } else {
      tone = 'maybe';
      head = '<div class="fv-tag maybe">Può andare</div><h2>Può andare per te, ma non è la scelta migliore per queste esigenze.</h2>';
    }

    let body = '';
    if (drop) {
      body += '<div class="fv-reasons"><div class="reason no"><span class="ico">✕</span><div><b>' + esc(cap(drop.by.reason)) + '</b><span>È il vincolo che hai indicato come necessario, e questo modello non lo rispetta.</span></div></div></div>';
    } else {
      let r = contrPos.map(c => '<div class="reason"><span class="ico">✓</span><div><b>' + esc(cap(c.reason)) + '</b><span>Su questo risponde bene a quello che hai chiesto.</span></div></div>').join('');
      vincoli.slice(0, 2).forEach(x => { r += '<div class="reason"><span class="ico">✓</span><div><b>' + esc(cap(x)) + '</b><span>Rispetta il vincolo che hai indicato come necessario.</span></div></div>'; });
      if (!isWinner && contrNeg.length) { r += '<div class="reason meh"><span class="ico">–</span><div><b>Dove cede: ' + esc(contrNeg[0].reason) + '</b><span>Qui un\'altra scelta risponde meglio alle tue risposte.</span></div></div>'; }
      if (!r) r = '<div class="reason"><span class="ico">✓</span><div><b>Scelta valida</b><span>Non hai posto vincoli stringenti: rientra tra i modelli validi della categoria.</span></div></div>';
      body += '<div class="fv-reasons">' + r + '</div>';
    }

    const card = '<article class="fv-prod ' + tone + '"><div class="fv-media">' + media(p) + '</div><div class="fv-b"><h3><a href="' + opts.productUrl(p) + '">' + esc(fullName(p)) + '</a></h3>' + stars(p) + '<div class="fv-fit">' + esc(p.tagline) + '</div><div class="price-line"><b>' + eurc(p.price) + '</b><span class="sub">' + esc(verifica(p)) + '</span></div><div class="handoff">' + handoff(p) + '<a class="btn btn-quiet" href="' + opts.productUrl(p) + '">Tutta la scheda</a></div></div></article>';

    const altsArr = rs.map(x => x.r.p).filter(q => q.id !== p.id).slice(0, 3);
    const altsHtml = altsArr.map(q => { const diff = q.price - p.price;
      const trade = diff < 0 ? 'Costa meno: ' + q.avoidIf.replace(/\.$/, '').toLowerCase() + '.' : diff > 0 ? (q.buyIf || q.tagline).replace(/\.$/, '') + '.' : q.tagline;
      return '<a class="alt" href="' + opts.productUrl(q) + '"><span class="m">' + media(q) + '</span><span><span class="n">' + esc(fullName(q)) + '</span>' + stars(q) + '<span class="t">' + esc(trade) + '</span></span></a>'; }).join('');

    let whynot = '';
    ev.dropped.filter(d => d.p.id !== p.id).slice(0, 4).forEach(d => { whynot += '<div class="excl"><div><b>' + esc(fullName(d.p)) + '</b><span class="r hard">' + esc(d.by.reason) + '</span></div><a href="' + opts.productUrl(d.p) + '">scheda</a></div>'; });

    const altTitle = drop ? 'Cosa fa per te, allora' : (isWinner ? 'Se le priorità cambiano' : 'La scelta migliore per te');
    return '<div class="fverdict ' + tone + '">' + head + '</div>' + body + '<div class="fv-card">' + card + '</div>' +
      (altsHtml ? '<div class="alts"><h2>' + altTitle + '</h2><div class="altgrid">' + altsHtml + '</div></div>' : '') +
      (whynot ? '<div class="whynot"><h2>Perché non gli altri</h2>' + whynot + '</div>' : '') +
      '<div class="ffoot"><button data-sv="reset">Rifai le domande</button></div>';
  }

  /* una domanda e' gia' si'/no se ha due opzioni vive e una e' negativa */
  function binaria(vive) {
    if (vive.length !== 2) return null;
    const neg = vive.find(o => /^(no\b|non\b|nessun)/i.test(o.label) || /^(no|nessun)/i.test(o.reason || ''));
    if (!neg) return null;
    const si = vive.find(o => o !== neg);
    return si ? { si, no: neg } : null;
  }

  function draw(el, st, opts) {
    const maxQ = opts.maxQ || 3;
    const v = st.vid ? Engine.vertical(st.vid) : null;
    let html = '<div class="finder">';
    /* barra di ricerca conversazionale: sempre in cima */
    if (!v) {
      html += '<form class="ask" data-sv-form><input type="text" name="q" autocomplete="off" enterkeyhint="search" placeholder="' + esc(opts.placeholder || 'Scrivi cosa ti serve, poi premi invio') + '" value="' + esc(st.text || '') + '" aria-label="Cosa ti serve"><button class="btn-orange" type="submit">Cerca</button></form>';
      if (st.miss) {
        const alts = detect(st.text).alts;
        html += '<div class="crow me"><b>Non copriamo ancora questa categoria.</b><span>Per ora scegliamo solo dove sbagliare costa: ' +
          liveVerts().map(x => '<button class="link" data-sv="cat" data-v="' + x.id + '">' + esc(x.name.toLowerCase()) + '</button>').join(', ') + '.</span></div>';
      }
      el.innerHTML = html + '</div>'; return;
    }
    html += conversazione(v, st, opts);
    const asked = Object.keys(st.answers).length;
    const next = asked < maxQ ? Engine.nextQuestionAlways(v, st.answers) : null;
    if (next) {
      const facet = next.facet;
      /* Risposte chiuse a piu' opzioni. Le opzioni che azzererebbero il
         catalogo non vengono proposte; se ne resta meno di due, si mostrano
         comunque tutte (il motore gestisce il caso limite). */
      const vive = facet.options.filter(o => { const t = Object.assign({}, st.answers); t[facet.id] = o.id; return Engine.evaluate(v, t).ranked.length > 0; });
      const opzioni = vive.length >= 2 ? vive : facet.options;
      html += '<div class="cq" id="svNext"><div class="crow me q live"><span>' + esc(facet.question) + '</span></div>' +
        '<div class="fopts multi">' +
        opzioni.map(o => '<button class="fopt" data-sv="ans" data-f="' + facet.id + '" data-o="' + o.id + '">' + esc(o.label) + '</button>').join('') +
        '</div><div class="ffoot"><button data-sv="skipone" data-f="' + facet.id + '">Non ho preferenze</button><button data-sv="skip">Decidi tu</button></div></div>';
    } else {
      html += '<div id="svNext">' + (opts.focusId ? verdetto(v, st, opts) : risultato(v, st, opts)) + '</div>';
      /* engine_result: l'utente e' arrivato a una raccomandazione. Una sola
         volta per flusso (fino a nuovo search/categoria), per non gonfiare. */
      if (!st.__resultSent) { st.__resultSent = true; track('engine_result', { vertical: v.id, questions: Object.keys(st.answers).length, focus: opts.focusId ? 'si' : 'no' }); }
    }
    el.innerHTML = html + '</div>';
  }

  /* CARD CONDIVISIBILE: genera un'immagine brandizzata del risultato ("Il tuo
     match") e la condivide (Web Share API su mobile, download + copia link su
     desktop). Distribuzione gratuita: ogni utente diventa un canale. */
  function makeCard(d) {
    return new Promise((resolve, reject) => {
      const W = 1080, H = 1350;
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const x = c.getContext('2d');
      const CREAM = '#f6efe1', NAVY = '#0f2340', ORANGE = '#ff7a1a', INK = '#1a1a1a', MUTE = '#5b6070';
      const SERIF = 'Georgia, "Times New Roman", serif', SANS = 'Inter, system-ui, sans-serif';
      function rr(px, py, pw, ph, r) { x.beginPath(); x.moveTo(px + r, py); x.arcTo(px + pw, py, px + pw, py + ph, r); x.arcTo(px + pw, py + ph, px, py + ph, r); x.arcTo(px, py + ph, px, py, r); x.arcTo(px, py, px + pw, py, r); x.closePath(); }
      function wrap(text, cx, cy, maxW, lh, font, color) { x.font = font; x.fillStyle = color; x.textAlign = 'center'; const words = String(text).split(' '); let line = '', yy = cy; for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > maxW && line) { x.fillText(line, cx, yy); line = w; yy += lh; } else line = t; } if (line) x.fillText(line, cx, yy); return yy + lh; }
      function paint(img) {
        x.fillStyle = CREAM; x.fillRect(0, 0, W, H);
        x.textAlign = 'left'; x.textBaseline = 'alphabetic';
        x.font = '800 46px ' + SANS; x.fillStyle = NAVY; x.fillText('Pick', 70, 100);
        const pw = x.measureText('Pick').width; x.fillStyle = ORANGE; x.fillText('ForMe', 70 + pw, 100);
        x.textAlign = 'right'; x.font = 'italic 500 26px ' + SERIF; x.fillStyle = MUTE; x.fillText('You need it. We pick it.', W - 70, 96);
        x.strokeStyle = '#d9cfba'; x.lineWidth = 1; x.beginPath(); x.moveTo(70, 128); x.lineTo(W - 70, 128); x.stroke();
        x.textAlign = 'center'; x.font = '800 32px ' + SANS; x.fillStyle = ORANGE; x.fillText('IL TUO MATCH', W / 2, 214);
        if (d.cat) { x.font = '500 26px ' + SANS; x.fillStyle = MUTE; x.fillText(d.cat, W / 2, 254); }
        let y;
        if (img) { const S = 430, IX = (W - S) / 2, IY = 296; x.fillStyle = '#fff'; rr(IX - 14, IY - 14, S + 28, S + 28, 18); x.fill(); const s = Math.min(S / img.width, S / img.height); const iw = img.width * s, ih = img.height * s; x.drawImage(img, IX + (S - iw) / 2, IY + (S - ih) / 2, iw, ih); y = IY + S + 96; }
        else y = 440;
        y = wrap(d.n, W / 2, y, W - 150, 64, '800 54px ' + SERIF, INK);
        x.font = '800 62px ' + SERIF; x.fillStyle = ORANGE; x.textAlign = 'center'; x.fillText(d.price || '', W / 2, y + 24); y += 96;
        if (d.fit) y = wrap('“' + d.fit + '”', W / 2, y + 12, W - 170, 42, 'italic 500 32px ' + SERIF, INK);
        x.fillStyle = NAVY; rr(120, H - 196, W - 240, 100, 22); x.fill();
        x.fillStyle = '#fff'; x.font = '800 36px ' + SANS; x.textAlign = 'center'; x.textBaseline = 'middle';
        x.fillText('Trova il tuo su pickforme.it', W / 2, H - 196 + 52); x.textBaseline = 'alphabetic';
      }
      function toBlob() { try { c.toBlob(b => b ? resolve(b) : fallback(), 'image/png'); } catch (e) { fallback(); } }
      function fallback() { paint(null); try { c.toBlob(b => b ? resolve(b) : reject('noblob'), 'image/png'); } catch (e) { reject(e); } }
      if (d.img) { const img = new Image(); img.crossOrigin = 'anonymous'; img.onload = () => { paint(img); toBlob(); }; img.onerror = () => { paint(null); toBlob(); }; img.src = d.img; }
      else { paint(null); toBlob(); }
    });
  }
  function shareCard(btn) {
    const d = { n: btn.getAttribute('data-n'), price: btn.getAttribute('data-price'), fit: btn.getAttribute('data-fit'), img: btn.getAttribute('data-img'), cat: btn.getAttribute('data-cat') };
    track('engine_share', { vertical: d.cat || '' });
    const old = btn.innerHTML; btn.disabled = true; btn.textContent = 'Preparo la card…';
    makeCard(d).then(blob => {
      btn.disabled = false; btn.innerHTML = old;
      const file = new File([blob], 'pickforme-match.png', { type: 'image/png' });
      const txt = 'Il mio match: ' + d.n + ' — trovato su pickforme.it';
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: 'Il mio match su PickForMe', text: txt }).catch(() => {});
      } else {
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'pickforme-match.png'; document.body.appendChild(a); a.click(); a.remove();
        try { if (navigator.clipboard) navigator.clipboard.writeText('https://www.pickforme.it'); } catch (e) {}
        btn.innerHTML = '✓ Card scaricata';
        setTimeout(() => { btn.innerHTML = old; }, 2600);
      }
    }).catch(() => { btn.disabled = false; btn.innerHTML = old; });
  }

  function mount(el, st, opts) {
    if (!el) return; opts = opts || {};
    if (!opts.productUrl) opts.productUrl = p => '/prodotto/' + p.id + '/';
    if (opts.vid && !st.vid) st.vid = opts.vid;
    if (!el.__svBound) {
      el.__svBound = true;
      /* engine_focus: prima interazione col campo di ricerca (l'utente clicca
         la tastiera per scrivere). Una sola volta per montaggio, no spam. */
      el.addEventListener('focusin', e => {
        if (!e.target.closest('[data-sv-form]')) return;
        if (el.__svFocused) return; el.__svFocused = true;
        track('engine_focus', { vertical: st.vid || opts.vid || '', page_path: location.pathname });
      });
      el.addEventListener('submit', e => {
        const f = e.target.closest('[data-sv-form]'); if (!f) return; e.preventDefault();
        const text = f.querySelector('input').value.trim(); st.text = text; st.miss = false;
        const d = detect(text);
        if (d.v) { st.vid = d.v.id; st.answers = preanswers(d.v, text); } else { st.miss = true; }
        track('engine_search', { matched: d.v ? 'si' : 'no', vertical: d.v ? d.v.id : '', query_length: text.length });
        st.__resultSent = false;
        draw(el, st, opts); scrollNext(el);
      });
      el.addEventListener('click', e => {
        const t = e.target.closest('[data-sv]'); if (!t) return; e.preventDefault();
        const a = t.getAttribute('data-sv');
        if (a === 'cat') { st.vid = t.getAttribute('data-v'); st.answers = {}; st.miss = false; st.__resultSent = false; track('engine_category', { vertical: st.vid }); }
        else if (a === 'ans') { st.answers[t.getAttribute('data-f')] = t.getAttribute('data-o'); st.cur = null; st.ci = 0; track('engine_answer', { vertical: st.vid || '', step: Object.keys(st.answers).length }); }
        else if (a === 'skipone') { st.answers[t.getAttribute('data-f')] = '__skip'; st.cur = null; st.ci = 0; }
        else if (a === 'undo') { delete st.answers[t.getAttribute('data-f')]; st.cur = null; st.ci = 0; }
        else if (a === 'reset') { st.vid = opts.vid || null; st.answers = {}; st.text = ''; st.miss = false; }
        else if (a === 'skip') { const v = Engine.vertical(st.vid); while (Object.keys(st.answers).length < (opts.maxQ || 3)) { const n = Engine.nextQuestionAlways(v, st.answers); if (!n) break; st.answers[n.facet.id] = '__skip'; } }
        draw(el, st, opts); scrollNext(el);
        if (opts.onChange) opts.onChange(st);
      });
      el.addEventListener('click', e => {
        const sb = e.target.closest('[data-share]'); if (!sb) return; e.preventDefault();
        shareCard(sb);
      });
    }
    draw(el, st, opts);
  }
  /* clicchi, scorre, avanti: la domanda nuova finisce in alto nello schermo */
  function scrollNext(el) { const n = el.querySelector('#svNext') || el; setTimeout(() => n.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30); }

  function auto() { document.querySelectorAll('[data-survey]').forEach(el => { const vid = el.getAttribute('data-vertical') || null; const focusId = el.getAttribute('data-focus') || null; mount(el, { vid, answers: {} }, { vid, focusId, maxQ: focusId ? 5 : 4, placeholder: el.getAttribute('data-placeholder') || undefined }); }); }
  if (typeof document !== 'undefined') { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', auto); else auto(); }
  return { mount, auto, detect };
})();
