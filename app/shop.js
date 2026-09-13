/* ============================================================
   VETRINA - isole della pagina principale (PickForMe)
   ------------------------------------------------------------
   1. Ricerca categoria nella sidebar.
   2. Filtri generali (prezzo, marca) su tutte le file.
   3. CAROSELLI: lo scorrimento e' un'animazione CSS (@keyframes pfm-scroll
      in rightpick.css), non un ciclo JS che ricalcola la posizione ad ogni
      fotogramma. E' piu' robusto (parte anche se lo script e' in ritardo,
      non dipende da requestAnimationFrame che i browser rallentano nelle
      schede in secondo piano) e la pausa al passaggio del mouse e' pura CSS
      (.carousel:hover). Qui in JS: si duplicano le schede per il giro senza
      cuciture, si misura la larghezza per calcolare la durata, si aggiunge
      la pausa al TOCCO (mobile e desktop, non solo hover) e le frecce
      spostano avanti/indietro il tempo della stessa animazione (Web
      Animations API), senza sostituirla con un movimento manuale.
   4. Pagina Guide: filtro per categoria (mostra/nasconde le sezioni).
   ============================================================ */
(function () {
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  /* --- ricerca categoria --- */
  const box = document.getElementById('catSearch'), out = document.getElementById('catSugg');
  const live = () => (window.VERTICALS || []).filter(v => !window.Engine || Engine.products(v.id).length > 0);
  if (box && out && window.VERTICALS) {
    box.addEventListener('input', () => {
      const t = norm(box.value.trim()); if (t.length < 2) { out.innerHTML = ''; return; }
      const hits = live().filter(v => norm(v.name + ' ' + v.singular + ' ' + (v.keywords || '')).indexOf(t) >= 0);
      out.innerHTML = hits.length ? hits.map(v => '<a href="/categoria/' + v.id + '/">' + v.name + '</a>').join('')
        : '<span class="miss">Questa categoria non è ancora presente. Copriamo: ' + live().map(v => v.name.toLowerCase()).join(', ') + '.</span>';
    });
  }

  /* --- caroselli: scorrimento nativo, robusto ---
     La fila e' un contenitore che scorre in orizzontale (overflow-x). Le frecce
     scorrono davvero il contenitore (funzionano SEMPRE, anche con "riduci
     movimento" attivo). L'avanzamento automatico e' un timer che scorre di una
     scheda ogni ~3,2s e, arrivato in fondo, torna dolcemente all'inizio; si
     ferma appena tocchi, trascini o passi sopra la striscia, e riprende dopo un
     attimo. Con "riduci movimento" l'automatico resta spento ma frecce e
     trascinamento continuano a funzionare, cosi' il carosello non e' mai fermo
     per forza. Nessuna dipendenza da variabili CSS o animazioni. */
  const remeasure = [];
  function carousel(root) {
    const track = root.querySelector('.ctrack'); if (!track) return;
    if (!track.querySelector('.pcard')) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = () => { const c = track.querySelector('.pcard'); return c ? c.getBoundingClientRect().width + 16 : 240; };
    const nx = root.querySelector('.cnext'), pv = root.querySelector('.cprev');
    if (nx) nx.addEventListener('click', () => track.scrollBy({ left: step() * 1.2, behavior: 'smooth' }));
    if (pv) pv.addEventListener('click', () => track.scrollBy({ left: -step() * 1.2, behavior: 'smooth' }));

    /* pausa: mouse sopra, dito/mouse premuto, o mentre si scorre a mano la fila.
       Vale sia da desktop che da mobile. */
    let paused = false, releaseTimer = null;
    const pause = () => { paused = true; clearTimeout(releaseTimer); };
    const resumeSoon = (ms) => { clearTimeout(releaseTimer); releaseTimer = setTimeout(() => { paused = false; }, ms || 1500); };
    root.addEventListener('mouseenter', pause);
    root.addEventListener('mouseleave', () => resumeSoon(300));
    root.addEventListener('pointerdown', pause);
    track.addEventListener('touchstart', pause, { passive: true });
    root.addEventListener('pointerup', () => resumeSoon());
    root.addEventListener('touchend', () => resumeSoon());
    track.addEventListener('scroll', () => { pause(); resumeSoon(); }, { passive: true });

    /* avanzamento automatico SEMPRE attivo (anche con "riduci movimento"):
       una scheda ogni 3s, si ferma appena l'utente interagisce (hover, dito,
       trascinamento, frecce) e riprende dopo un attimo. */
    {
      const timer = setInterval(() => {
        if (paused || document.visibilityState !== 'visible') return;
        const max = track.scrollWidth - track.clientWidth - 4;
        if (max <= 0) return;
        if (track.scrollLeft >= max) track.scrollTo({ left: 0, behavior: 'smooth' });
        else track.scrollBy({ left: step(), behavior: 'smooth' });
      }, 3000);
      root.__stop = () => clearInterval(timer);
    }
  }
  document.querySelectorAll('.carousel').forEach(carousel);

  /* --- filtri --- */
  const filt = document.getElementById('filters');
  if (filt) {
    const state = { price: null, brand: null };
    function apply() {
      let visible = 0;
      document.querySelectorAll('.pcard[data-price]').forEach(c => {
        const p = parseFloat(c.getAttribute('data-price')); const b = c.getAttribute('data-brand'); let ok = true;
        if (state.price) { const [lo, hi] = state.price.split('-').map(Number); ok = ok && p >= lo && (hi === 0 || p <= hi); }
        if (state.brand) ok = ok && b === state.brand;
        c.classList.toggle('hidden', !ok); if (ok) visible++;
      });
      document.querySelectorAll('[data-rail]').forEach(r => { r.classList.toggle('hidden', !r.querySelector('.pcard:not(.hidden)')); });
      filt.querySelectorAll('[data-f]').forEach(b => b.classList.toggle('on', state[b.getAttribute('data-f')] === b.getAttribute('data-v')));
      const n = document.getElementById('filtCount'); if (n) n.textContent = (state.price || state.brand) ? visible + ' prodotti corrispondono' : '';
      remeasure.forEach(m => m());
    }
    filt.addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (!b) return; const k = b.getAttribute('data-f'), v = b.getAttribute('data-v'); state[k] = state[k] === v ? null : v; apply(); });
  }

  /* --- filtro categorie nella pagina Guide --- */
  const gf = document.querySelector('[data-guidefilter]');
  if (gf) {
    gf.addEventListener('click', e => {
      const b = e.target.closest('button[data-cat]'); if (!b) return;
      const cat = b.getAttribute('data-cat');
      gf.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      document.querySelectorAll('.gsec[data-cat]').forEach(sec => {
        sec.hidden = !(cat === 'all' || sec.getAttribute('data-cat') === cat);
      });
    });
  }

  /* --- consenso cookie: le statistiche anonime (GA4) partono SOLO dopo l'accetto.
     Consent Mode e' gia' impostato su "denied" di default nell'head; qui aggiorniamo
     a "granted" se l'utente accetta. La scelta e' ricordata in localStorage. */
  try {
    const bar = document.getElementById('cookiebar');
    const grant = () => { try { if (typeof gtag === 'function') gtag('consent', 'update', { analytics_storage: 'granted' }); } catch (e) { } };
    const decide = (val) => { try { localStorage.setItem('pfm_consent', val); } catch (e) { } if (val === 'granted') grant(); if (bar) bar.hidden = true; };
    if (bar && !localStorage.getItem('pfm_consent')) {
      bar.hidden = false;
      const ok = document.getElementById('cookieOk');
      const no = document.getElementById('cookieNo');
      if (ok) ok.addEventListener('click', () => decide('granted'));
      if (no) no.addEventListener('click', () => decide('denied'));
    }
  } catch (e) { /* storage bloccato (es. navigazione privata): l'avviso resta nascosto */ }

  /* --- tracciamento clic verso Amazon per GA4. Ogni clic su un link amazon.it
     invia l'evento "amazon_click" (con l'ASIN se presente). gtag esiste solo se
     GA e' caricato, e il Consent Mode invia il dato solo dopo il consenso: se
     l'utente non ha accettato, l'evento non parte. E' il segnale pre-vendita. */
  document.addEventListener('click', function (e) {
    const a = e.target.closest ? e.target.closest('a[href*="amazon."]') : null;
    if (!a) return;
    try {
      if (typeof gtag !== 'function') return;
      const m = a.href.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/) || a.href.match(/ASIN\.1=([A-Z0-9]{10})/);
      gtag('event', 'amazon_click', { asin: m ? m[1] : '', link_url: a.href, page_path: location.pathname });
    } catch (err) { /* il clic prosegue comunque */ }
  }, true);

  /* --- ricerca prodotti (secondaria): per chi sa gia' cosa cerca. Cerca nel
     catalogo per nome/marca e mostra i risultati come link alle schede. Non
     sostituisce la ricerca guidata: e' un aiuto rapido. --- */
  (function () {
    const inp = document.getElementById('prodSearch'), out = document.getElementById('prodResults');
    if (!inp || !out || !window.PRODUCTS) return;
    const cat = window.VERTICALS ? Object.fromEntries(window.VERTICALS.map(v => [v.id, v.name])) : {};
    const items = window.PRODUCTS.filter(p => !p.unavailable).map(p => ({ id: p.id, t: norm(p.brand + ' ' + p.name), label: p.brand + ' ' + p.name, cat: cat[p.v] || '' }));
    inp.addEventListener('input', () => {
      const q = norm(inp.value.trim());
      if (q.length < 2) { out.hidden = true; out.innerHTML = ''; return; }
      const hits = items.filter(x => x.t.indexOf(q) >= 0).slice(0, 8);
      out.hidden = false;
      out.innerHTML = hits.length
        ? hits.map(x => '<a href="/prodotto/' + x.id + '/"><b>' + x.label + '</b><span>' + x.cat + '</span></a>').join('')
        : '<div class="qs-miss">Nessun prodotto con questo nome. Prova la ricerca guidata qui sopra: ti aiutiamo a scegliere.</div>';
    });
    document.addEventListener('click', e => { if (!e.target.closest('.quicksearch')) { out.hidden = true; } });
  })();

  /* --- lista "metti da parte" (carrello): l'utente accumula prodotti mentre
     sceglie e poi li apre tutti su Amazon in una volta (link col nostro tag).
     Stato in localStorage; niente dati sensibili, solo ASIN/nome/prezzo/foto. --- */
  (function () {
    const KEY = 'pfm_cart', TAG = 'pickforme26-21';
    const get = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } };
    const set = a => { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) { } };
    const amazonCartUrl = a => { if (!a.length) return '#'; let u = 'https://www.amazon.it/associates/addtocart?AssociateTag=' + TAG; a.forEach((it, i) => { u += '&ASIN.' + (i + 1) + '=' + encodeURIComponent(it.asin) + '&Quantity.' + (i + 1) + '=1'; }); return u; };

    const fab = document.createElement('button');
    fab.className = 'cartfab'; fab.type = 'button'; fab.hidden = true;
    fab.innerHTML = '<svg class="cartfab-i" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.2l2.2 12.2a1.5 1.5 0 0 0 1.5 1.2h8.9a1.5 1.5 0 0 0 1.5-1.2L21 7H5.3"/></svg><span class="cartfab-n">0</span>';
    const panel = document.createElement('div'); panel.className = 'cartpanel'; panel.hidden = true;
    document.body.appendChild(fab); document.body.appendChild(panel);

    const pulse = () => { fab.classList.add('pulse'); setTimeout(() => fab.classList.remove('pulse'), 600); };
    function render() {
      const a = get();
      fab.hidden = a.length === 0; fab.querySelector('.cartfab-n').textContent = a.length;
      if (a.length === 0) { panel.hidden = true; }
      panel.innerHTML = '<div class="cartpanel-h"><b>I tuoi prodotti</b><button data-cart-close type="button" aria-label="Chiudi">✕</button></div>' +
        (a.length ? '<div class="cartpanel-list">' + a.map(it => '<div class="cart-item"><span class="cart-im">' + (it.img ? '<img src="' + it.img + '" alt="">' : '') + '</span><span class="cart-t">' + it.name + (it.price ? '<span class="cart-p">€' + Number(it.price).toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '</span>' : '') + '</span><button class="cart-x" data-cart-remove="' + it.asin + '" type="button" aria-label="Togli">✕</button></div>').join('') + '</div>' +
          '<a class="cartpanel-go" href="' + amazonCartUrl(a) + '" target="_blank" rel="noopener nofollow sponsored">Apri i tuoi prodotti su Amazon</a>' +
          '<p class="cartpanel-note">Si aprono nel carrello Amazon col nostro codice affiliato. Confermi l\'acquisto su Amazon; per te il prezzo non cambia.</p>' +
          '<button class="cartpanel-clear" data-cart-clear type="button">Svuota la lista</button>'
          : '<p class="cartpanel-empty">Metti da parte i prodotti che ti piacciono con il tasto +, poi aprili tutti insieme su Amazon.</p>');
    }
    function openPanel() { render(); panel.hidden = false; }

    document.addEventListener('click', e => {
      const add = e.target.closest('[data-cart]');
      if (add) {
        e.preventDefault();
        const el = add.closest('[data-asin]') || add;
        const asin = el.getAttribute('data-asin'); if (!asin) return;
        const a = get();
        if (a.some(x => x.asin === asin)) { openPanel(); return; }
        a.push({ asin: asin, name: el.getAttribute('data-name') || 'Prodotto', price: el.getAttribute('data-price') || '', img: el.getAttribute('data-img') || '' });
        set(a); render(); pulse();
        return;
      }
      if (e.target.closest('[data-cart-open]')) { openPanel(); return; }
      if (e.target.closest('[data-resume-close]')) { const r = document.querySelector('.cartresume'); if (r) r.remove(); return; }
      if (e.target === fab || e.target.closest('.cartfab')) { openPanel(); return; }
      if (e.target.closest('[data-cart-close]')) { panel.hidden = true; return; }
      const rm = e.target.closest('[data-cart-remove]');
      if (rm) { set(get().filter(x => x.asin !== rm.getAttribute('data-cart-remove'))); render(); return; }
      if (e.target.closest('[data-cart-clear]')) { set([]); render(); return; }
    });
    render();

    /* --- ritorno sul sito con prodotti salvati: popup "Riprendi da dove hai
       lasciato" (una volta per sessione). La lista vive in localStorage, quindi
       persiste sullo stesso dispositivo/browser anche a sito chiuso e riaperto. */
    try {
      const a0 = get();
      if (a0.length && !sessionStorage.getItem('pfm_resume_seen')) {
        sessionStorage.setItem('pfm_resume_seen', '1');
        const rz = document.createElement('div'); rz.className = 'cartresume';
        rz.innerHTML = '<div class="cartresume-b"><b>Riprendi da dove hai lasciato</b><span>Hai ' + a0.length + (a0.length === 1 ? ' prodotto' : ' prodotti') + ' nella tua lista.</span></div><button class="cartresume-go" data-cart-open type="button">Vedi la lista</button><button class="cartresume-x" data-resume-close type="button" aria-label="Chiudi">✕</button>';
        document.body.appendChild(rz);
        setTimeout(() => { const r = document.querySelector('.cartresume'); if (r) r.remove(); }, 12000);
      }
    } catch (e) { }
  })();
})();
