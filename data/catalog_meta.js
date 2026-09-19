/* ============================================================
   METADATI CATALOGO
   ------------------------------------------------------------
   ASIN e immagini reali di amazon.it, raccolti e verificati a parte.
   Il link prodotto è https://www.amazon.it/dp/<ASIN> (link diretto,
   non una ricerca). L'immagine è quella ufficiale del listing.

   Se un prodotto non ha ASIN, la scheda lo dichiara e non finge:
   niente immagine inventata, niente link che porta altrove.
   ============================================================ */

/* TAG DI AFFILIAZIONE AMAZON — punto unico di modifica.
   Vuoto = i link vanno su Amazon SENZA tracciamento: funzionano lo stesso
   ma nessun acquisto genera commissione. Appena l'account Associates da'
   il tag (formato tipo "pickforme0d-21"), va scritto QUI UNA SOLA VOLTA:
   lo raccoglie sia il generatore statico (build.js) sia le pagine con la
   ricerca guidata (amazonUrl qui sotto), quindi ogni link del sito — schede
   prodotto, bottoni "Vedi su Amazon", risultato della ricerca guidata,
   rimpiazzi dei prodotti fuori produzione — lo eredita insieme. */
window.AMAZON_TAG = 'pickforme26-21';

window.ASINS = {
  /* --- ROBOT ASPIRAPOLVERE --- verificati su amazon.it l'8 set 2026.
     Tre modelli hanno ASIN valido ma NESSUNA OFFERTA attiva: restano
     in catalogo marcati come fuori produzione, con il sostituto indicato.
     Non li vendiamo e non li consigliamo, ma non li cancelliamo: chi cerca
     quel modello deve sapere che cosa è successo. */
  'dreame-l10s-ultra': { asin: 'B0DCVYS9FQ', price: 349.00, img: 'https://m.media-amazon.com/images/I/61-5+1poAHL._AC_SL1500_.jpg', title: 'dreame L10s Ultra Gen 2, aspirazione 10.000 Pa' },
  'ecovacs-n20-pro': { asin: 'B0D2KCXHZF', price: 329.99, img: 'https://m.media-amazon.com/images/I/61GYQGY5XmL._AC_SL1500_.jpg', title: 'ECOVACS N20 PRO Plus, 8000 Pa, autonomia 300 min' },
  'roborock-s8-maxv': { asin: 'B0CRV7F37B', price: 702.46, img: 'https://m.media-amazon.com/images/I/71ZCXAWP1uL._AC_SL1500_.jpg', title: 'roborock S8 MaxV Ultra, RockDock Ultra 8 in 1' },
  'dreame-d10-plus': { asin: 'B0D3RGFSRB', price: 217.05, img: 'https://m.media-amazon.com/images/I/61ROXsVBLiL._AC_SL1500_.jpg', title: 'dreame D10 Plus Gen 2, 6.000 Pa' },
  'roborock-qrevo-s': { asin: 'B0CYC4KZP9', price: 599.99, img: 'https://m.media-amazon.com/images/I/616DSsrrqpL._AC_SL1500_.jpg', title: 'roborock Qrevo S, 7000 Pa, stazione autopulente' },

  'roborock-q7-max': {
    asin: 'B09R49LPG1', img: 'https://m.media-amazon.com/images/I/51OQq2Wp9OL._AC_SL1500_.jpg',
    unavailable: 'Fuori catalogo: tutte e sette le varianti risultano non disponibili su amazon.it.',
    repName: 'roborock Q7 L5+', repAsin: 'B0DWK8GJZX', repPrice: 189.98
  },
  'xiaomi-e10': {
    asin: 'B07W684TNQ', img: 'https://m.media-amazon.com/images/I/418bn7MhR9L._AC_SL1000_.jpg',
    unavailable: 'Nessuna offerta in evidenza: resta solo un listing paneuropeo residuale, senza prezzo.',
    repName: 'Xiaomi Robot Vacuum S40C', repAsin: 'B0F4K1H6X5', repPrice: 144.29
  },
  'roomba-combo-j7': {
    asin: 'B0C74JP6KZ', img: 'https://m.media-amazon.com/images/I/51ISjXVTKgL._AC_SL1000_.jpg',
    unavailable: 'Nessuna offerta in evidenza: iRobot ha rinnovato la gamma con la serie Roomba Plus.',
    repName: 'iRobot Roomba Combo 2 Essential', repAsin: 'B0DK5NGL5N', repPrice: 279.56
  },

  /* --- SEDIE ERGONOMICHE --- */
  'sihoo-m18': { asin: 'B07GNDDNMW', price: 179.99, img: 'https://m.media-amazon.com/images/I/61nb9ErcVpL._AC_SL1500_.jpg', title: 'SIHOO M18, lombare regolabile, portata 150 kg, braccioli 2D' },
  'sihoo-doro-c300': { asin: 'B0C3T865C2', price: 326.99, img: 'https://m.media-amazon.com/images/I/71ir96hzGeL._AC_SL1500_.jpg', title: 'SIHOO Doro C300, supporto lombare dinamico, braccioli 3D' },
  'songmics-obn': { asin: 'B07ZCM9YH1', price: 67.99, img: 'https://m.media-amazon.com/images/I/81pA0ACpAPL._AC_SL1500_.jpg', title: 'SONGMICS OBN37BK, rete, braccioli pieghevoli, seduta 53 cm' },
  'diablo-v-basic': { asin: 'B079BSRV7P', price: 299.99, img: 'https://m.media-amazon.com/images/I/81k619uc-7L._AC_SL1500_.jpg', title: 'Diablo V-Basic, rete traspirante, braccioli regolabili' },
  'hbada-e3': { asin: 'B0CQXHJCD2', price: 399.99, img: 'https://m.media-amazon.com/images/I/71QeOXteBgL._AC_SL1500_.jpg', title: 'Hbada E3 Pro, lombare dinamico a 3 zone, testiera 4D, braccioli 6D' },
  'flexispot-bs11': { asin: 'B0G2L3DJ9R', price: 399.99, img: 'https://m.media-amazon.com/images/I/81g0YajLOmL._AC_SL1500_.jpg', title: 'FLEXISPOT ErgoX Pro, braccioli 7D, lombare 5D, poggiatesta 4D, 250 kg' },
  'herman-miller-sayl': {
    unavailable: 'Su amazon.it si trovano solo accessori di ricambio, non la sedia.',
    repName: 'FLEXISPOT ErgoX Pro', repAsin: 'B0G2L3DJ9R', repPrice: 399.99
  },

  /* --- MATERASSI ---
     Qui c'è il buco vero del catalogo: Emma, Dormeo e PerDormire in Italia
     vendono in diretta (sito proprio, TV), non su Amazon. Non è un limite
     della ricerca, è la loro strategia distributiva. */
  'marcapiuma-silver-22': { asin: 'B0C6V6TWX5', price: 606.99, img: 'https://m.media-amazon.com/images/I/61HOGUZj%2BGL._AC_SL1100_.jpg', title: 'Marcapiuma Memory 160x190 h21 TAGLIE FORTI H3 Rigido, rivestimento Silver' },
  'baldiflex-zaffiro': { asin: 'B09V2XLQPH', price: 189.00, img: 'https://m.media-amazon.com/images/I/81N8Wpgks%2BL._AC_SL1500_.jpg', title: 'Baldiflex Emporio Duck Memory 160x190x25, rivestimento Aloe Vera' },
  'emma-original': { unavailable: 'Emma non vende materassi su amazon.it: distribuzione diretta dal proprio sito.' },
  'emma-hybrid-premium': { unavailable: 'Emma non vende materassi su amazon.it: distribuzione diretta dal proprio sito.' },
  'dormeo-memosan': { unavailable: 'Dormeo non è presente su amazon.it: vende in diretta e via TV.' },
  'perdormire-cool-blue': { unavailable: 'Di PerDormire su amazon.it ci sono solo cuscini e reti, nessun materasso.' },

  /* --- UTENSILI ELETTRICI --- verificati su amazon.it l'8 set 2026 */
  'bosch-psb-1800': { asin: 'B00Z6IJ7MS', price: 118.63, img: 'https://m.media-amazon.com/images/I/71iVWKvBoIL._AC_SL1500_.jpg', title: 'Bosch PSB 1800 LI-2 Trapano Avvitatore con Percussione, doppia batteria 1.5 Ah, 18 V' },
  'makita-dhp482z': { asin: 'B01C85KSVU', price: 98.28, img: 'https://m.media-amazon.com/images/I/51YqsgWM+aL._AC_SL1000_.jpg', title: 'Makita DHP482Z Trapano Avvitatore Percussione 18V, solo corpo' },
  'einhell-te-cd': { asin: 'B07XTMZPFK', price: 78.94, img: 'https://m.media-amazon.com/images/I/61MxfkX67bL._AC_SL1422_.jpg', title: 'Einhell TE-CD 18/2 Li-Solo Power X-Change, 44 Nm, senza batteria' },
  'bosch-gsb-18v-55': { asin: 'B0822295DF', price: 173.74, img: 'https://m.media-amazon.com/images/I/81yJHKQ5Q1L._AC_SL1500_.jpg', title: 'Bosch Professional GSB 18V-55 Trapano a percussione, senza batteria' },
  'dewalt-dcd778': { asin: 'B07YSH4N1H', price: 123.88, img: 'https://m.media-amazon.com/images/I/31n1jUKlcuL._AC_.jpg', title: 'DeWalt DCD778N Trapano a percussione XR 18V, 65 Nm' },
  'blackdecker-bdchd18': { asin: 'B01D9WA47O', price: 83.29, img: 'https://m.media-amazon.com/images/I/61bccjQhx6L._AC_SL1000_.jpg', title: 'BLACK+DECKER BDCHD18-QW Trapano/Avvitatore' },
  'makita-hr2470': { asin: 'B00969LJ38', price: 162.00, img: 'https://m.media-amazon.com/images/I/51atbHdFJ+L._AC_SL1000_.jpg', title: 'Makita HR2470 Tassellatore Rotostop SDS-Plus' },

  /* --- MACCHINE DA CAFFÈ --- */
  'delonghi-dedica-ec685': { asin: 'B06X3Z9MF3', price: 148.99, img: 'https://m.media-amazon.com/images/I/61Ts+cIZ1CL._AC_SL1500_.jpg', title: "De'Longhi Dedica Style EC685.BK, larghezza 15 cm" },
  'nespresso-vertuo-pop': { asin: 'B0B8DS337Z', price: 99.00, img: 'https://m.media-amazon.com/images/I/51qxVAQcHoL._AC_SL1000_.jpg', title: "De'Longhi Nespresso Vertuo Pop ENV90.B" },
  'delonghi-magnifica-s': { asin: 'B00400OMU0', price: 319.99, img: 'https://m.media-amazon.com/images/I/61h6VSbbKRL._AC_SL1500_.jpg', title: "De'Longhi Magnifica S ECAM22.110.B" },
  'philips-3200-lattego': { asin: 'B08TCC68DW', price: 528.49, img: 'https://m.media-amazon.com/images/I/61kRSNznnWL._AC_SL1266_.jpg', title: 'Philips 3200 Series EP3546/70, montalatte LatteGo' },
  'bialetti-gioia': { asin: 'B0DZY1KFCC', price: 79.90, img: 'https://m.media-amazon.com/images/I/71IhqbB3nYL._AC_SL1500_.jpg', title: 'Bialetti Gioia, macchina espresso a capsule' },
  'gaggia-classic-evo': { asin: 'B0BZW9RVPF', price: 549.00, img: 'https://m.media-amazon.com/images/I/61jhadThMGL._AC_SL1500_.jpg', title: 'Gaggia Classic Evo Pro RI9481/14' },
  'delonghi-rivelia': { asin: 'B0CDCL53KW', price: 591.49, img: 'https://m.media-amazon.com/images/I/613IBmDZnOL._AC_SL1500_.jpg', title: "De'Longhi Rivelia Perfetto EXAM440.55.G" }
};

/* ============================================================
   VALIDAZIONE EAN-13
   ------------------------------------------------------------
   L'EAN è la chiave con cui lo stesso prodotto si riconosce fra
   negozi diversi. Un EAN sbagliato non è un dato mancante: è un
   dato che associa il prodotto sbagliato, ed è esattamente il
   difetto che sui comparatori grandi mette le unità di import
   parallelo nella stessa scheda di quelle europee.

   L'ultima delle 13 cifre è una cifra di controllo calcolata
   dalle altre dodici: un codice inventato o con un refuso quasi
   sempre non la rispetta. Qui lo verifichiamo a ogni caricamento
   e un codice che non torna viene SCARTATO, non usato con riserva.
   ============================================================ */
window.eanChecksumOk = function (ean) {
  if (typeof ean !== 'string' || !/^\d{13}$/.test(ean)) return false;
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(ean[i], 10) * (i % 2 === 0 ? 1 : 3);
  }
  return ((10 - (sum % 10)) % 10) === parseInt(ean[12], 10);
};


window.applyCatalogMeta = function () {
  /* fusione dei prodotti aggiunti dalla pipeline (data/extra.js) */
  (window.EXTRA || []).forEach(e => {
    if (window.PRODUCTS.some(p => p.id === e.id)) return;
    window.PRODUCTS.push({ id: e.id, v: e.v, brand: e.brand, name: e.name, price: e.price, quality: e.quality, checked: e.checked,
      tagline: e.tagline, attrs: Object.assign({}, e.attrs), pros: e.pros, cons: e.cons || [], buyIf: e.buyIf, avoidIf: e.avoidIf });
    window.ASINS[e.id] = { asin: e.asin, price: e.price, img: e.imgs[0], title: e.amazonTitle };
    window.GALLERIES = window.GALLERIES || {}; window.GALLERIES[e.id] = e.imgs;
    window.SUMMARIES = window.SUMMARIES || {}; window.SUMMARIES[e.id] = e.summary;
    if (e.ean) { window.EANS = window.EANS || {}; window.EANS[e.id] = { ean: e.ean, status: 'doppia-fonte', source: e.eanSource || '' }; }
    if (e.rating) { window.RATINGS = window.RATINGS || {}; window.RATINGS[e.id] = { rating: e.rating, reviews: e.reviews, bsr: e.bsr, bsrCat: e.bsrCat, fetched: e.checked }; }
  });
  window.PRODUCTS.forEach(p => {
    /* NON DICHIARATO -> NaN: cosi' nessun confronto numerico lo scambia per zero
       (null <= 1.4 in JavaScript e' vero, e un utensile senza peso dichiarato
       risulterebbe "leggero"). NaN fallisce ogni confronto, che e' il comportamento giusto. */
    Object.keys(p.attrs || {}).forEach(k => { if (p.attrs[k] === null) p.attrs[k] = NaN; });
    const m = window.ASINS[p.id] || {};
    p.asin = m.asin || null;
    /* galleria: se abbiamo più scatti verificati li usiamo tutti,
       altrimenti resta la sola immagine principale. Nessuna foto inventata. */
    p.imgs = (window.GALLERIES && window.GALLERIES[p.id]) ? window.GALLERIES[p.id].slice(0, 4) : [];
    p.img = m.img || p.imgs[0] || null;
    if (p.img && p.imgs.indexOf(p.img) < 0) p.imgs.unshift(p.img);
    p.imgs = p.imgs.slice(0, 4);
    if (m.price) p.price = m.price;
    if (m.title) p.amazonTitle = m.title;
    p.verified = !!m.asin;
    p.unavailable = m.unavailable || null;
    p.rep = m.repAsin ? { name: m.repName, asin: m.repAsin, price: m.repPrice } : null;

    /* EAN: entra nel catalogo solo se la cifra di controllo torna */
    const e = (window.EANS && window.EANS[p.id]) || null;
    p.ean = null; p.eanNote = null; p.eanAlias = [];
    p.mpn = (window.MPNS && window.MPNS[p.id]) || null;
    if (e && e.ean) {
      if (window.eanChecksumOk(e.ean)) {
        p.ean = e.ean;
        p.eanSource = e.source || null;
        p.eanStatus = e.status || 'verificato';
        p.eanNoteFonte = e.note || null;
        p.eanAlias = (e.alias || []).filter(window.eanChecksumOk);
      } else {
        p.eanNote = 'codice scartato: cifra di controllo non valida';
        if (typeof console !== 'undefined') {
          console.warn('EAN scartato per ' + p.id + ': ' + e.ean + ' (checksum non valido)');
        }
      }
    }

    /* STELLE: solo se lette davvero dalla pagina Amazon (data/ratings.js).
       Niente segnaposto: dove il dato non c'e', la scheda non mostra stelle. */
    const rt = (window.RATINGS && window.RATINGS[p.id]) || null;
    p.rating = rt && rt.rating ? rt.rating : null;
    p.reviews = rt && rt.reviews ? rt.reviews : null;
    p.bsr = rt && rt.bsr ? rt.bsr : null;
    p.bsrCat = rt && rt.bsrCat ? rt.bsrCat : null;
  });
};

/* URL prodotto: diretto all'ASIN, mai una ricerca, con il tag di
   affiliazione (window.AMAZON_TAG qui sopra) quando c'è. */
window.amazonUrl = function (p) {
  if (!p.asin) return null;
  return 'https://www.amazon.it/dp/' + p.asin + (window.AMAZON_TAG ? '?tag=' + window.AMAZON_TAG : '');
};
