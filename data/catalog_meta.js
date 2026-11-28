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
  'philips-3200-lattego': { asin: 'B08TCC68DW', price: 545.94, img: 'https://m.media-amazon.com/images/I/61kRSNznnWL._AC_SL1266_.jpg', title: 'Philips 3200 Series EP3546/70, montalatte LatteGo' },
  'bialetti-gioia': { asin: 'B0DZY1KFCC', price: 79.90, img: 'https://m.media-amazon.com/images/I/71IhqbB3nYL._AC_SL1500_.jpg', title: 'Bialetti Gioia, macchina espresso a capsule' },
  'gaggia-classic-evo': { asin: 'B0BZW9RVPF', price: 549.00, img: 'https://m.media-amazon.com/images/I/61jhadThMGL._AC_SL1500_.jpg', title: 'Gaggia Classic Evo Pro RI9481/14' },
  'delonghi-rivelia': { asin: 'B0CDCL53KW', price: 551.06, img: 'https://m.media-amazon.com/images/I/613IBmDZnOL._AC_SL1500_.jpg', title: "De'Longhi Rivelia Perfetto EXAM440.55.G" }
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
    /* FONDE invece di sovrascrivere: una voce gia' dichiarata in window.ASINS per un
       prodotto di intake (es. unavailable, repAsin) altrimenti verrebbe scartata qui
       in silenzio. Le chiavi dal file extra.js restano prioritarie sui dati di base. */
    window.ASINS[e.id] = Object.assign({}, window.ASINS[e.id] || {},
      { asin: e.asin, price: e.price, img: e.imgs[0], title: e.amazonTitle });
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
    /* Preserva asin/img definiti inline nel prodotto se non arrivano da ASINS
       (serve per prodotti aggiunti a mano con dati gia' completi, es. brand
       non-Amazon come Imou dove il link primario e' via Awin ma esiste comunque
       l'ASIN Amazon come alternativa). */
    p.asin = m.asin || p.asin || null;
    p.imgs = (window.GALLERIES && window.GALLERIES[p.id]) ? window.GALLERIES[p.id].slice(0, 4) : [];
    p.img = m.img || p.img || p.imgs[0] || null;
    if (p.img && p.imgs.indexOf(p.img) < 0) p.imgs.unshift(p.img);
    p.imgs = p.imgs.slice(0, 4);
    if (m.price) p.price = m.price;
    if (m.title) p.amazonTitle = m.title;
    p.verified = !!(m.asin || p.asin);
    p.unavailable = m.unavailable || p.unavailable || null;
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
       Niente segnaposto: dove il dato non c'e', la scheda non mostra stelle.
       Preservato il valore inline del prodotto come fallback (es. prodotti
       aggiunti a mano con rating gia' noto). */
    const rt = (window.RATINGS && window.RATINGS[p.id]) || null;
    p.rating = (rt && rt.rating) || p.rating || null;
    p.reviews = (rt && rt.reviews) || p.reviews || null;
    p.bsr = (rt && rt.bsr) || p.bsr || null;
    p.bsrCat = rt && rt.bsrCat ? rt.bsrCat : null;
  });
};

/* URL prodotto: diretto all'ASIN, mai una ricerca, con il tag di
   affiliazione (window.AMAZON_TAG qui sopra) quando c'è. */
window.amazonUrl = function (p) {
  if (!p.asin) return null;
  return 'https://www.amazon.it/dp/' + p.asin + (window.AMAZON_TAG ? '?tag=' + window.AMAZON_TAG : '');
};

/* === B2B ASIN hookup 2026-10-14 === */
/* B2B ufficio-piccola-attivita - meta Amazon.it verificati 2026-10-14
   10/15 agganciati. Scartati: hp-officejet-pro-9120e (ASIN variant family roll-up su 8135e/9125e, nessun 9120e standalone affidabile),
   apc-back-ups-pro-br900gi (su amazon.it esiste solo BR900G-GR Schuko, non BR900GI IEC),
   epson-workforce-ds-c330 (modello non in catalogo amazon.it),
   bonsaii-c237-c (modello non in catalogo amazon.it),
   ubiquiti-dream-router (UDR originale non su amazon.it, disponibile solo UDR7 WiFi7, non 1:1).
*/
Object.assign(window.ASINS, {
  'brother-mfc-l2800dw':   { asin: 'B0CK2PVJSR', price: 199.00, img: 'https://m.media-amazon.com/images/I/61ki4lrzAQL._AC_SL1000_.jpg', title: 'Brother MFCL2800DW, Multifunzione Laser Monocromatica (B/N), 32 ppm', rating: 4.0, reviews: 1076 },
  'canon-maxify-gx4050':   { asin: 'B0BN949RQ1', price: 387.93, img: 'https://m.media-amazon.com/images/I/51IzS3mOEHL._AC_SL1500_.jpg', title: 'Canon MAXIFY GX4050 Stampante A4 Economica con Serbatoio Ricaricabile', rating: 5.0, reviews: 299 },
  'apc-smart-ups-smt1500ic': { asin: 'B07BVM36R7', price: 840.49, img: 'https://m.media-amazon.com/images/I/81w7FvDZgvL._AC_SL1500_.jpg', title: 'APC Smart-UPS SMT-SmartConnect SMT1500IC, Gruppo di Continuita 1500VA, 8 Uscite IEC-C13', rating: 3.9, reviews: 50 },
  'synology-ds224plus':    { asin: 'B0CBYZWF3Z', price: 444.10, img: 'https://m.media-amazon.com/images/I/61m-yQG2alL._AC_SL1280_.jpg', title: 'Synology NAS DS224+ 2-bay', rating: 4.6, reviews: 645 },
  'qnap-ts-464':           { asin: 'B0BPHN39SL', price: 670.34, img: 'https://m.media-amazon.com/images/I/61T6fMypJsL._AC_SL1500_.jpg', title: 'QNAP TS-464 NAS Server 4-bay SATA', rating: 4.2, reviews: 6548 },
  'brother-ads-1800w':     { asin: 'B0CYTKGLRP', price: 304.75, img: 'https://m.media-amazon.com/images/I/61tjNkRXClL._AC_SL1200_.jpg', title: 'Brother ADS1800W, Scanner compatto e portatile A4, 30 ppm, ADF 20 fogli', rating: 4.0, reviews: 182 },
  'fellowes-powershred-99ci': { asin: 'B005SO4O3C', price: 455.00, img: 'https://m.media-amazon.com/images/I/71DrVpXXtzL._AC_SL1500_.jpg', title: 'Fellowes Powershred 99Ci distruggidocumenti a frammento, 18 fogli, piccolo ufficio', rating: 4.4, reviews: 154 },
  'tplink-er605':          { asin: 'B08MH4VLR3', price: 65.99, img: 'https://m.media-amazon.com/images/I/41a47e4SRjL._AC_SL1000_.jpg', title: 'TP-Link Omada ER605 Router VPN WAN doppia/multipla, 5 porte, fino a 4 WAN Gigabit', rating: 4.4, reviews: 1933 },
  'logitech-brio-500':     { asin: 'B07W5JKKFJ', price: 63.16, img: 'https://m.media-amazon.com/images/I/61+9FV3bNwL._AC_SL1500_.jpg', title: 'Logitech Brio 500 Webcam Full HD Correzione Luce - Grafite', rating: 4.6, reviews: 105 },
  'jabra-evolve2-65':      { asin: 'B086M57V71', price: 163.68, img: 'https://m.media-amazon.com/images/I/61xWY7Q+-FL._AC_SL1400_.jpg', title: 'Jabra Evolve2 65 Cuffie Wireless con Microfono, USB-A, UC, Nero', rating: 3.0, reviews: 1214 },
});

/* === B2B 5 varianti recupero 2026-10-14 === */
/* B2B ufficio-piccola-attivita - recupero varianti verificati 2026-10-14
   5/5 agganciati come varianti di famiglia (seed id invariato, meta puntano a variante disponibile su amazon.it).
   - hp-officejet-pro-9120e → HP OfficeJet Pro 9125e (B0CT917KXW): successore diretto A4 B2B, 22 ppm, duplex, Wi-Fi
   - apc-back-ups-pro-br900gi → APC BR900G-GR (B006VWYD40): variante Schuko 900VA stessa famiglia Back-UPS Pro
   - epson-workforce-ds-c330 → Epson WorkForce ES-580W (B08P7J227J): scanner A4 duplex compatto B2B stesso target
   - bonsaii-c237-c → Bonsaii C149-C (B0C7JYHKK4): cross-cut P-4 stessa gamma piccolo ufficio
   - ubiquiti-dream-router → Ubiquiti UDR7 (B0FD52SKFM): Dream Router 7, successore diretto WiFi 7
*/
Object.assign(window.ASINS, {
  'hp-officejet-pro-9120e':   { asin: 'B0CT917KXW', price: 198.94, img: 'https://m.media-amazon.com/images/I/618os2Ri7JL._AC_SL1500_.jpg', title: 'HP OfficeJet Pro 9125e, Stampante Multifunzione a Getto d\'Inchiostro A4 a Colori, Fronte e Retro Automatico, 22 ppm, Wi-Fi', rating: 4.0, reviews: 81 },
  'apc-back-ups-pro-br900gi': { asin: 'B006VWYD40', price: 265.01, img: 'https://m.media-amazon.com/images/I/51WxXBlkyXL._AC_SL1080_.jpg', title: 'APC Power-Saving Back-UPS PRO BR900G-GR, Gruppo di Continuita (UPS) 900VA, AVR, 5 Uscite Schuko, USB', rating: 4.0, reviews: 261 },
  'epson-workforce-ds-c330':  { asin: 'B08P7J227J', price: 394.08, img: 'https://m.media-amazon.com/images/I/61CpnscvSHL._AC_SL1500_.jpg', title: 'Epson WorkForce ES-580W, Scanner A4 Documentale Wi-Fi, scansione senza PC, fino a 70 ipm, duplex automatico', rating: 4.1, reviews: 282 },
  'bonsaii-c237-c':           { asin: 'B0C7JYHKK4', price: 85.49, img: 'https://m.media-amazon.com/images/I/61sAxNWkqVL._AC_SL1500_.jpg', title: 'Bonsaii C149-C Distruggidocumenti 12 Fogli, Cross-Cut P-4, 60 min funzionamento continuo, cestino 23L', rating: 4.7, reviews: 4426 },
  'ubiquiti-dream-router':    { asin: 'B0FD52SKFM', price: 398.57, img: 'https://m.media-amazon.com/images/I/31uFt4U7COL._AC_SL1000_.jpg', title: 'Ubiquiti UDR7 UniFi Dream Router 7, WiFi 7, 2.5 GB SFP+ WAN', rating: 4.7, reviews: 474 },
});

/* === IMOU sicurezza-casa-smart ASIN hookup 2026-10-19 === */
/* 4/8 agganciati dopo ricerca su amazon.it. Scartati:
   - imou-aov-air: solo 2 immagini in gallery (minimo 4 richiesto), rimandato
   - imou-aov-pt: solo 2 immagini + match ASIN non 1:1 (il "Kit" include accessori, non 2 cam), rimandato
   - imou-bulb-cam: unico ASIN su amazon.it non disponibile, zero buybox
   - imou-cruiser-dual-kit: nessun pack "Kit" 2pz esistente su amazon.it, solo Cruiser Dual singole
   Agganciati con 4 immagini verificate HTTP 200, match 1:1 con il nome del prodotto. */
Object.assign(window.ASINS, {
  'imou-aov-track-plus':   { asin: 'B0H2Z19Q41', price: 89.99,  img: 'https://m.media-amazon.com/images/I/51QlVqrFzOL._AC_SL1200_.jpg',  title: 'Imou AOV Track Plus Kit 6MP, telecamera outdoor 4G/Wi-Fi batteria, pannello solare incluso' },
  'imou-cell-3c':          { asin: 'B0FPQZT7FJ', price: 59.90,  img: 'https://m.media-amazon.com/images/I/51YKn0PuwRL._AC_SL1500_.jpg',  title: 'Imou Cell 3C All in One 5MP, telecamera outdoor batteria+solare, SIM 4G integrata' },
  'imou-cruiser-se-kit':   { asin: 'B0D7HKRDKH', price: 112.99, img: 'https://m.media-amazon.com/images/I/61iMwKZQu0L._AC_SL1500_.jpg',  title: 'Imou Cruiser SE+ 5MP, telecamera outdoor Pan Tilt Wi-Fi 2 pezzi' },
  'imou-pet-pf1':          { asin: 'B0DZB9Z166', price: 90.99,  img: 'https://m.media-amazon.com/images/I/61MKmJmPFHL._AC_SL1500_.jpg',  title: 'Imou Pet PF1 Video Pet Feeder 4L, telecamera dispenser automatico cibo per cani e gatti' },
});

/* --- STUFE ELETTRICHE --- ASIN/img/prezzo verificati via Creators API il 2026-11-23 */
Object.assign(window.ASINS, {
  'dreo-atom-one-silenzioso-1500': { asin: 'B0FNRNF57H', price: 49.99, img: 'https://m.media-amazon.com/images/I/41mnmHRDo7L._SL500_.jpg', title: 'Dreo Termoventilatore a Risparmio Energetico 34 dB Silenzioso, 1500W PTC Ceramica Elettrico con Termostato, Protezione Surriscaldamento e Ribaltamento, Timer 12' },
  'pro-breeze-ceramica-1800-oscillante': { asin: 'B09BNYKKLN', price: 44.64, img: 'https://m.media-amazon.com/images/I/41C5DXFsY1L._SL500_.jpg', title: 'Pro Breeze Stufetta Elettrica a Basso Consumo in Ceramica 1800 W – Oscillazione Automatica, 2 Impostazioni di Calore e Modalità Solo Ventola. Stanze, uffici, ba' },
  'rowenta-instant-comfort-compact': { asin: 'B00MFEHQMO', price: 41.22, img: 'https://m.media-amazon.com/images/I/41U3cE7-guL._SL500_.jpg', title: 'Rowenta Instant Comfort Compact Termoventilatore personale, Modalità 2Power, Silenzioso, Compatto, Facile da trasportare e riporre, Spegnimento automatico di si' },
  'dreo-riscaldatore-telecomando-termostato': { asin: 'B096ZZS5HL', price: 109.99, img: 'https://m.media-amazon.com/images/I/31wgPTpYMJL._SL500_.jpg', title: 'Dreo Riscaldatore per interni, riscaldatore portatile telecomando e termostato, 3 modalità, protezione da surriscaldamento e ribaltamento, riscaldatori elettric' },
  'taurus-new-gobi-2000': { asin: 'B0935ZLBLQ', price: 23.99, img: 'https://m.media-amazon.com/images/I/31ewfwrXbaL._SL500_.jpg', title: 'Taurus New Gobi Termoventilatore 2000W, 2 Potenze, Termostato, Nero | Funzione ventilatore, protezione surriscaldamento, maniglia; fino a 20 m²' },
  'olimpia-splendid-caldo-pop-a': { asin: 'B08BCPBN2P', price: 17.9, img: 'https://m.media-amazon.com/images/I/41-GeYqEMBL._SL500_.jpg', title: 'Olimpia Splendid 99292 Caldo Pop A Termoventilatore 2000 W, Aquamarina, ‎21 x 14.3 x 25.1 cm; 1 Kg' },
  'philips-torre-5000-2000': { asin: 'B0CDQJVJ8Q', price: 73.49, img: 'https://m.media-amazon.com/images/I/31zPBmz2gML._SL500_.jpg', title: 'Philips Termoventilatore a Torre Serie 5000, 2000W, 40,5 dB*, potente | Risparmio energetico 50%, display, 4 modalità, 5 funzioni di sicurezza, oscillazione 60°' },
  'imetec-compact-air-2000': { asin: 'B0987D6J4J', price: 29.34, img: 'https://m.media-amazon.com/images/I/41wR-Q4QYxL._SL500_.jpg', title: 'Imetec Compact Air – Termoventilatore 2000W | Stufetta elettrica compatta con maniglia | Temperatura regolabile | Funzione antigelo | Protezione surriscaldament' },
  'delonghi-capsule-hfx30': { asin: 'B0742H5CX6', price: 34.99, img: 'https://m.media-amazon.com/images/I/31zAEvfYn7L._SL500_.jpg', title: 'De\'Longhi HFX30C18.AG Termoventilatore Capsule da Tavolo, Tecnologia Ceramica, 2 Livelli di Potenza, Ventilazione Estiva, Maniglia e Piedino di Supporto, Luce, ' },
  'midea-nty15-verticale': { asin: 'B09JS3C24H', price: 20.9, img: 'https://m.media-amazon.com/images/I/41JW1xb3ouL._SL500_.jpg', title: 'Midea NTY15-19CAE Termoventilatore Verticale, Termoventilatore PTC Ceramico, Stufetta Elettrica Basso Consumo, 2 Livelli di Potenza, 1500W, Termostato, Bianco N' },
  'amazon-basics-ceramica-1800': { asin: 'B07D3F336H', price: 21.46, img: 'https://m.media-amazon.com/images/I/41uGlpgq-sL._SL500_.jpg', title: 'Amazon Basics Termoventilatore in ceramica da 1800 Watt con termostato regolabile - Nero' },
  'dreo-stufa-torre-2000-silenziosa': { asin: 'B0FF9S4T3C', price: 114.35, img: 'https://m.media-amazon.com/images/I/41Rw78q5LNL._SL500_.jpg', title: 'DREO Stufa a Torre 23 Pollici 2000W Silenziosa, Riscaldatore Portatile con Telecomando, Oscillazione 70°, Timer 12H, 5 Modalità, Termoventilatore in Ceramica PT' },
  'orbegozo-fhr-3050-3000': { asin: 'B00PFN052U', price: 57.99, img: 'https://m.media-amazon.com/images/I/51thXoTIJbL._SL500_.jpg', title: 'Orbegozo FHR 3050 A,termoventilatore, ceramica professionale, 3000 W, 2 potenze di calore, controllo della temperatura regolabile, protezione da surriscaldament' },
  'stufetta-1000-bagno-ptc': { asin: 'B0FPRHMH1S', price: 28.49, img: 'https://m.media-amazon.com/images/I/41Hf6COAEdL._SL500_.jpg', title: 'Stufa Elettrica Basso Consumo,1000W Stufetta Elettrica da Bagno Portatile con 2 Livelli, Protezione Surriscaldamento e Ribaltamento, per Bagno, Casa, Ufficio, C' },
  'gaiatop-mini-500': { asin: 'B0FX3RR76B', price: 26.83, img: 'https://m.media-amazon.com/images/I/41uENoswE2L._SL500_.jpg', title: 'Gaiatop Mini termoventilatore a risparmio energetico, 500 W, piccolo con riscaldamento in ceramica PTC, con protezione da surriscaldamento e ribaltamento, risca' },
  'ardes-sound-ar4p03-1500': { asin: 'B08GFVQQGS', price: 40.67, img: 'https://m.media-amazon.com/images/I/418a2qOy+PL._SL500_.jpg', title: 'ARDES SOUND AR4P03 Termoventilatore ceramico 1500 W a basso consumo | 750/1500 W, ventilazione aria fredda, termostato e protezione anti-ribaltamento per uso su' },
  'midea-ceramico-2000-scrivania': { asin: 'B0HCPRS43Z', price: 23.99, img: 'https://m.media-amazon.com/images/I/51aFTa2+gHL._SL500_.jpg', title: 'Midea Termoventilatore Ceramico 2000W PTC, Riscaldatore Portatile da Scrivania' },
  'delonghi-trrs0920-olio-9': { asin: 'B00ZUUEBOQ', price: 87.91, img: 'https://m.media-amazon.com/images/I/31c-jU1FEML._SL500_.jpg', title: 'De\'Longhi TRRS0920 Radiatore Ad Olio Elettrico, 9 Elementi, Risparmio Energetico, Calore A Lungo, Manopole Intuitive, Per Ambienti Fino A 55m³, Silenzioso, 3 Li' },
  'vonhaus-olio-2500-11': { asin: 'B0CKRH5QVX', price: 84.99, img: 'https://m.media-amazon.com/images/I/41jU39+ewAL._SL500_.jpg', title: 'Vonhaus Radiatore ad Olio 2500W, Stufa Electtrica 11 Elementi, Radiatore ad Olio Basso Consumo Timer 24 Ore, Termostato Regolabile, 3 Livelli di Calore, Termosi' },
  'orbegozo-cv2300-convettore': { asin: 'B00O9S7MBE', price: 33.17, img: 'https://m.media-amazon.com/images/I/31AvmR6693L._SL500_.jpg', title: 'Orbegozo CV 2300, termoconvettore elettrico, termoconvettore, 2000 W, 3 livelli di potenza, termostato regolabile, interruttore luce, protezione surriscaldament' },
  'pro-breeze-olio-2500-11': { asin: 'B09513FJRM', price: 116.99, img: 'https://m.media-amazon.com/images/I/41l0blw3ckL._SL500_.jpg', title: 'Pro Breeze Radiatore ad Olio 2500W, 11 Elementi - Riscaldatore Elettrico Portatile - Timer Incorporato, 3 Livelli di Calore, Termostato e Spegnimento Automatico' },
  'imetec-rapid-comfort-convettore': { asin: 'B0987CNV93', price: 69.99, img: 'https://m.media-amazon.com/images/I/41K-uBoAg9L._SL500_.jpg', title: 'Imetec Rapid Comfort, Termoconvettore 2000W, Risparmio energetico fino al 40%*' },
  'dreo-oh310-olio-smart': { asin: 'B0CC4MF77V', price: 139.99, img: 'https://m.media-amazon.com/images/I/412WDGKNl-L._SL500_.jpg', title: 'Dreo OH310 - Radiatore ad olio a risparmio energetico, 2000 W, con 9 nervature con telecomando, 3 livelli di riscaldamento, 4 modalità, timer 24 ore, protezione' },
  'rowenta-vectissimo-convettore-2400': { asin: 'B008P6YDN6', price: 87.24, img: 'https://m.media-amazon.com/images/I/41bNVBghzwL._SL500_.jpg', title: 'Termoconvettore 2400W Vectissimo turbo 2400 Rowenta CO3035 | Stufa Elettrica Veloce, Potente, Ampia Diffusione dell\'Aria, Funzione Turbo, Uso quotidiano semplic' },
  'delonghi-nano-trns0808-olio': { asin: 'B01LZRFWVN', price: 103.8, img: 'https://m.media-amazon.com/images/I/41-3Ww5LhiL._SL500_.jpg', title: 'De\'Longhi Serie Nano TRNS0808M Radiatore ad Olio Elettrico, 8 Elementi, Calore a Lungo, Manopole Intuitive, per Ambienti fino a 25m³, Silenzioso, 800watt, Manig' },
  'blumfeldt-infrarossi-2000-terra': { asin: 'B0773H71G8', price: 149.81, img: 'https://m.media-amazon.com/images/I/31Ryd-VtHvL._SL500_.jpg', title: 'Blumfeldt Stufa Elettrica a Infrarossi 2000W da Terra, Riscaldatore per Interno ed Esterno, IP34, Fibra di Carbonio, 3 Livelli, Telecomando, Argento e Nero' },
  'olimpia-splendid-solaria-alogena': { asin: 'B07GSGV6QW', price: 34.9, img: 'https://m.media-amazon.com/images/I/41MSD+9HP+L._SL500_.jpg', title: 'Olimpia Splendid 99396 Solaria Evo S Stufa Alogena 1200 W con Base Oscillante , Grigio' },
  'ardes-tizzo-carbonio-oscillante': { asin: 'B01M0GPL6G', price: 37.99, img: 'https://m.media-amazon.com/images/I/418k+sElESL._SL500_.jpg', title: 'Ardes Ar4B01 Stufa Carbonio Oscillante Tizzo 900W, Stufa Carbonio, Argento Nero' },
  'kesser-infrarossi-2000-terra': { asin: 'B07KFP1Y5D', price: 62.8, img: 'https://m.media-amazon.com/images/I/51d9xvuUzRL._SL500_.jpg', title: 'KESSER® Riscaldamento radiante 2000 Watt, infrarossi, da terra, terrazza, radiante, regolabile in altezza,' },
  'dreo-parete-2000-oscillante': { asin: 'B0D819MVKF', price: 101.99, img: 'https://m.media-amazon.com/images/I/31PRH4FtlOL._SL500_.jpg', title: 'Dreo Intelligente Termoventilatore da Parete, Oscillazione a 30°, 2000W Termoventilatore da Bagno, Termostato Regolabile, Telecomando, 24H Timer, Installazione ' },
  'olimpia-splendid-caldo-up-t-parete': { asin: 'B0BC8GTZ95', price: 69.9, img: 'https://m.media-amazon.com/images/I/21ouQcGQd2L._SL500_.jpg', title: 'Olimpia Splendid 99261 Caldo Up T WiFi - Termoventilatore Ceramico a Parete con Telecomando e Timer settimanale 2000 W, 220-240 V, Bianco - Esclusiva Amazon' },
  'delonghi-capsule-desk-360': { asin: 'B0FT9Z473B', price: 54.99, img: 'https://m.media-amazon.com/images/I/41ysdeyM0aL._SL500_.jpg', title: 'De\'Longhi Capsule Desk - Termoventilatore Ceramico da Scrivania 360W | Stufetta Elettrica Portatile, Silenziosa 39 dB, Termostato Regolabile, Flusso d\'Aria Orie' },
  'delonghi-hvy1020-young': { asin: 'B003UV9XD6', price: 22.99, img: 'https://m.media-amazon.com/images/I/31vSC4E-vaL._SL500_.jpg', title: 'De\'Longhi HVY1020 Termoventilatore verticale Young, Silenzioso e leggero, Protezione antigoccia, Maniglia, Dispositivo di sicurezza, Luce, Protezione antigelo, ' },
});

/* --- UMIDIFICATORI --- ASIN/img/prezzo via Creators API 2026-11-23 */
Object.assign(window.ASINS, {
  'dreo-smart-4l-camera': { asin: 'B0CCVX6FSD', price: 53.99, img: 'https://m.media-amazon.com/images/I/41KcTSyDR0L._SL500_.jpg', title: 'Dreo Umidificatore Smart per la Camera da Letto, Riempimento Superiore da 4L con Nebbia Fredda e Diffusore di Olio e Luce Notturna, Autonomia di 32 ore, Umidifi' },
  'levoit-neoclassic-450s': { asin: 'B0GXVQVRKC', price: 47.99, img: 'https://m.media-amazon.com/images/I/41hYpv9l2BL._SL500_.jpg', title: 'Levoit NeoClassic 450S Umidificatore Ambiente Smart 4,2L, Durata 42H | Silenzioso 21dB，Controllato APP, Top Fill，270 ml/h, fino a 40㎡, Modalità Luce e Musica' },
  'levoit-lv600s-6l': { asin: 'B0B744C8LB', price: 79.98, img: 'https://m.media-amazon.com/images/I/41yYReUHwiL._SL500_.jpg', title: 'LEVOIT LV600S Umidificatore Ambiente Ultrasuoni 6L, Smart Controllo | NNebbia Calda e Fredda con Top-Fill Design, Timer, Umidità Personalizzata, Aromaterapia pe' },
  'levoit-classic-3l-25h': { asin: 'B09QKVB8BB', price: 37.98, img: 'https://m.media-amazon.com/images/I/41NCJ+Q4T4L._SL500_.jpg', title: 'Levoit Umidificatore Ambiente, 3L/25H di Durata, Luce e Aromaterapia | 28dB Silenzioso, Auto Spegnimento, Ugello a 360°, Facile Pulizia della Lavastoviglie, per' },
  'levoit-4-5l-45h-caldo-freddo': { asin: 'B0FZK91FS5', price: 79.99, img: 'https://m.media-amazon.com/images/I/41eOmPxNx6L._SL500_.jpg', title: 'Levoit Umidificatore Ambiente Intelligente 4,5L per 45 ore e 40 m², Timer | Nebbia Calda e Fredda, Modalità Auto, Luce Personalizzata, Silenzioso a 26 dB per Ne' },
  'clarston-2l-camera': { asin: 'B0H4ZGL8C2', price: 35.99, img: 'https://m.media-amazon.com/images/I/41HI4EAWzOL._SL500_.jpg', title: 'Clarston Umidificatore Ambiente Camera, 2L Nebbia Fredda, 24dB Silenzioso | 25H, Riempimento dall\'Alto & Facile da Pulire, Umidificatore Bambini & Piante, Ugell' },
  'megawise-3-5l-nebbia-fredda': { asin: 'B09KL6SPJM', price: 50.72, img: 'https://m.media-amazon.com/images/I/31nkqlEL5FL._SL500_.jpg', title: 'Umidificatore a nebbia fredda MegaWise da 3,5 l per camera da letto, vaporizzatore d\'aria a ultrasuoni da 24 dB con filtro ad acqua per neonati, luce notturna c' },
  'megawise-1-5l-piccolo': { asin: 'B08F2BT6N9', price: 21.72, img: 'https://m.media-amazon.com/images/I/31B2CiXwgVL._SL500_.jpg', title: 'MEGAWISE - Umidificatore per camera da letto, stanza dei bambini, ufficio e piante, 1,5 L, diffusore di oli essenziali, con nebulizzazione regolabile, ultrasoni' },
  'aroeve-6l-igrometro': { asin: 'B0FNX72RPL', price: 48.79, img: 'https://m.media-amazon.com/images/I/31X07eAogYL._SL500_.jpg', title: 'AROEVE 6L Ultrasuoni Umidificatore Ambiente 60h Autonomia Silenzioso 25dB | Controllo Umidità Intelligente, Diffusore di Oli Essenziali, Umidificatore a Ultrasu' },
  'homvana-4l-bambini': { asin: 'B0DKJF1B47', price: 42.86, img: 'https://m.media-amazon.com/images/I/41kBYTckpPL._SL500_.jpg', title: 'Homvana Umidificatore Ambiente Bambini, Vaporizzatore Oli (4L,Bianco) | Humidifier 40H Runtime, Quiet, Diffusore Oli Essenziali, Easy to Clean Ultrasuoni, Plant' },
  'homvana-3-6l-bambini': { asin: 'B09JT679BX', price: 34.19, img: 'https://m.media-amazon.com/images/I/313y1QKagdL._SL500_.jpg', title: 'Homvana Umidificatore Ambiente Bambini, Vaporizzatore Oli (3.6L, Grigio) | 23dB Silenzioso, 360° Girevole, 36H Autonomia, BPA Free, Ricarica Alto, Pulizia Facil' },
  'dreo-3l-bambini-26db': { asin: 'B0DJVFX2KY', price: 36.09, img: 'https://m.media-amazon.com/images/I/41-Pa+KoZuL._SL500_.jpg', title: 'Dreo 3L Umidificatore Ambiente Bambini Silenzioso 26dB con Sensore di Umidità, Ultrasuoni Nebbia Fresca, Ugello 360°, 30h Autonomia, Diffusore Oli Essenziali, L' },
  'megawise-topfill-3-5l-kids': { asin: 'B0B8S1GJQ8', price: 59.99, img: 'https://m.media-amazon.com/images/I/318eNnO4bKL._SL500_.jpg', title: 'MegaWise Topfill 7-colour Night light humidifier for Kid bedroom with 3.5L Large Capacity, No leakage Design Fine Mist Output Auto Shutoff, Essential Oil Safe T' },
  'babymoov-hygro-plus': { asin: 'B01M66YXJA', price: 66.4, img: 'https://m.media-amazon.com/images/I/418JC-xFITL._SL500_.jpg', title: 'Babymoov Umidificatore digitale Hygro Plus | con luce notturna (7 colori), controllo automatico dell\'umidità, diffusore di oli essenziali | multicolore' },
  'bear-5l-topfill-28db': { asin: 'B09SKZJ5MH', price: 43.69, img: 'https://m.media-amazon.com/images/I/41A6d377BcL._SL500_.jpg', title: 'BEAR Umidificatore 5L a Riempimento Dall\'alto, 28dB Ultra Silenzioso, Adatto a Bambini e Piante, 35 Ore Di Funzionamento, con Vassoio per Aromi, Ugello Rotante ' },
  'bear-6l-topfill': { asin: 'B0BY4MMZG5', price: 44.26, img: 'https://m.media-amazon.com/images/I/41JbArkYsFL._SL500_.jpg', title: 'Bear 6L Umidificatore A Riempimento Dall\'Alto, 28db Ultra Silenzioso Per Bambini E Piante, 35 Ore Di Funzionamento, Con Vassoio Per Aromaterapia, Ugello Per Vap' },
  'dreo-6l-camera': { asin: 'B0CB4CK3ZS', price: 99.99, img: 'https://m.media-amazon.com/images/I/41jNJslHvoL._SL500_.jpg', title: 'Dreo 6L umidificatore per camera da letto, intelligente per grandi ambienti, bruma calda/fredda, per piante e bambini, riempimento superiore, 60 ore autonomia, ' },
  'megawise-topfill-3-5l-fredda': { asin: 'B0BVPY6D5Y', price: 68.21, img: 'https://m.media-amazon.com/images/I/41nL3p6srGL._SL500_.jpg', title: 'Umidificatori a nebbia fredda MegaWise da 3,5 l (confezione da 2) – Ultrasuoni silenziosi, riempimento dall\'alto, diffusore di oli essenziali, spegnimento autom' },
  'livatro-3l-vapore-caldo': { asin: 'B0FCFYS1BJ', price: 123.49, img: 'https://m.media-amazon.com/images/I/31OiVvcEkKL._SL500_.jpg', title: 'Livatro Umidificatore Ambiente Top Fill,3L Umidificatore a Vapore Caldo in Acciaio Inox, Riduce del 99,97% dei Batteri, Timer e Modalità Sonno, per Bambini, Uff' },
  'cecotec-breezecare-3500-warm': { asin: 'B08NJSJPWJ', price: 52.99, img: 'https://m.media-amazon.com/images/I/317YRjz9UOL._SL500_.jpg', title: 'Cecotec Umidificatore Cecotec BreezeCare 3500 Warm Serbatoio 5,5 litri, Umidificazione 400 ml/h, Filtro ceramico, Copertura fino a 35 m2, Autonomia fino a 22h, ' },
  'miko-nebbia-fresca-calda': { asin: 'B09DHK9P3P', price: 121.99, img: 'https://m.media-amazon.com/images/I/31SPRLl9isL._SL500_.jpg', title: 'MIKO Umidificatore con nebbia fresca e calda, umidificatori ad ultrasuoni per ambienti grandi - Filtro dell\'acqua, modalità automatica, design senza perdite, mo' },
  'ac-infinity-cloudforge-t3': { asin: 'B0BXQW2NF6', price: 109, img: 'https://m.media-amazon.com/images/I/31ca+Js6MzL._SL500_.jpg', title: 'AC Infinity CLOUDFORGE T3, umidificatore per piante 4,5 l con controlli VPD, vaporizzatore a 10 livelli, tubo estendibile e guarnizione senza perdite' },
  'ac-infinity-cloudforge-t7': { asin: 'B0BXRR5QFV', price: 235.16, img: 'https://m.media-amazon.com/images/I/31M2DkOrR7L._SL500_.jpg', title: 'AC Infinity CLOUDFORGE T7, umidificatore per piante, 15 l, con controllo | Vaporizzatore di precisione a 10 livelli, tubo estensibile, tubo flessibile e fisso, ' },
  'vivosun-5l-piante': { asin: 'B0DHGP2JQ8', price: 79.99, img: 'https://m.media-amazon.com/images/I/41xlDxAf5JL._SL500_.jpg', title: 'VIVOSUN Umidificatore per Piante 5L Smart Humidifier AeroStream H05 24dB Silenzioso Nebbia Fredda 360° 50h Top Fill Ultrasuoni Ideale per Grow Tent e Grow Box' },
  'vivosun-9l-piante': { asin: 'B0DJV658NX', price: 119.99, img: 'https://m.media-amazon.com/images/I/31bHftvDO5L._SL500_.jpg', title: 'VIVOSUN Umidificatore per Piante 9L Smart Humidifier AeroStream H09 24dB Silenzioso Nebbia Fredda 360° 60h Fill Ultrasuoni per Tenda da Coltivazione' },
  'philips-3000-45mq': { asin: 'B089LSTV2Q', price: 89.99, img: 'https://m.media-amazon.com/images/I/31r8KZBXLvL._SL500_.jpg', title: 'Philips Umidificatore Ambiente 3000, 300 ml/h, 45m², 33 dB* | Serbatoio acqua da 2L, 3 velocità, modalità Sleep, silenzioso, 33db, ideale per la casa, Nero (HU3' },
  'philips-hu4803-nanocloud': { asin: 'B00FOIRFMO', price: 143.95, img: 'https://m.media-amazon.com/images/I/31K5R75PypL._SL500_.jpg', title: 'Philips HU4803/01 Umidificatore d\'Aria, Tecnologia NanoCloud, Evaporazione Naturale, 2 L, 220 ml/h, Per stanze fino a 25 m², Metallico/Bianco' },
  'maxcio-2-5l-smart': { asin: 'B092VK8WZW', price: 43.69, img: 'https://m.media-amazon.com/images/I/31UmCDCElcL._SL500_.jpg', title: '2,5L Umidificatore ad Ultrasuoni Maxcio Nebbia Regolabile Funzione Timer Humidifier Super-Silenzioso 28dB Sicuro per Bambini Umidificatore Piante Arredamente Ca' },
  'xiaomi-humidifier-2-lite': { asin: 'B0BKS2WPC1', price: 30.39, img: 'https://m.media-amazon.com/images/I/31MIerdK6RL._SL500_.jpg', title: 'Xiaomi Humidifier 2 Lite, Umidificatore Nebbia Fredda per Camera, 4L | Nebbia fine 300mL/h, fino a 30h, ugello 360°, 38dB, riempimento dall\'alto, spegnimento au' },
  'vankaa-5l-bambini-topfill': { asin: 'B0DFLL96KJ', price: 35.49, img: 'https://m.media-amazon.com/images/I/41r7kYj6d1L._SL500_.jpg', title: 'Umidificatore Ambiente Bambini 5L, Vankarr Ultrasuoni Umidificatori Casa 28dB Silenzioso Top-Fill Umidificatore Ambiente Grande per Camera da Letto, Piante, Neo' },
  'raydrop-3l-camera': { asin: 'B0FJ1PNQPG', price: 39.99, img: 'https://m.media-amazon.com/images/I/211nP414OhL._SL500_.jpg', title: 'raydrop Umidificatore per camera da letto, 3 l, a ultrasuoni, per ambienti di grandi dimensioni e casa, umidificatore per neonati e piante, diffusore di aromi c' },
  'chivalz-6l-topfill': { asin: 'B0H8FCSGSL', price: 42.86, img: 'https://m.media-amazon.com/images/I/41YtYJJyYsL._SL500_.jpg', title: 'CHIVALZ YZY6001 Umidificatore Ambiente 6 L con Manopola, Bianco | Manopola Manuale e Ugello Orientabile, Ricarica dall\'Alto, Fino a 50 h al Minimo, Rumorosità ≤' },
});

/* === FUORI MERCATO, verificato il 24/11/2026 ===
   Questi ASIN non tornano piu' dalla PA-API dal 3-4 ottobre 2026 (50+ giorni, con
   due passate di refresh al giorno). Verificati uno per uno su amazon.it:
   28 dicono "Attualmente non disponibile", 2 rispondono 404.
   Altri 10 ASIN erano altrettanto stantii ma risultano VENDIBILI sulla pagina:
   quelli NON sono marcati, perche' li' il problema e' la PA-API che non li rende.
   Marcati e non cancellati: chi cerca il modello deve sapere cosa e' successo.
   Nessun rimpiazzo (repAsin) indicato ancora: da scegliere a mano, categoria per categoria.
   Si fonde per chiave invece di sovrascrivere, per non perdere asin/img/price. */
(function () {
  const fuoriMercato = {
    "olimpia-aquaria-slim-10-p": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "knka-16l-pd22sc": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "sigma-56-f14-dcdn-c-sony-e": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "knka-25l-pd25": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "beko-bdpm030-30l": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "vasagle-compact-80x50-elettrica": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "cosori-2l-caf-li211": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "lefant-a1-pro": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "dewalt-dcd701d2": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "sony-fe-200-600-g-oss": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "olimpia-aquaria-slim-14-p": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "lenovo-loq-24-10": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "oral-b-io-10": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "dr-prepare-dap02-15db": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "airthereal-agh400-pet": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "emphsism-forno-friggitrice-aria-23l": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "bosch-air-4000i": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "winix-zero": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "songmics-lsd138-180x80-bianco-nuvola": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "philips-sonicare-diamondclean-9000-rosa": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "marshall-minor-iv": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "aeropress-original-a80": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "bose-soundlink-revolve-plus-ii": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "xiaomi-smart-air-purifier-6": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "lubluelu-sl60d": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "jbl-flip-6": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "monsga-8000pa-robot": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "msi-mag-275qf": "Attualmente non disponibile su amazon.it: nessuna offerta in evidenza, e dal 3 ottobre 2026 il prodotto non torna piu' dalle API Amazon.",
    "mova-v50-ultra": "Inserzione ritirata da amazon.it: la pagina del prodotto non esiste piu'.",
    "ninja-crispi-fn101eugy-3-8l": "Inserzione ritirata da amazon.it: la pagina del prodotto non esiste piu'.",
  };
  for (const id of Object.keys(fuoriMercato)) {
    window.ASINS[id] = Object.assign({}, window.ASINS[id] || {}, { unavailable: fuoriMercato[id] });
  }
})();

/* Termocoperte - ASIN/immagini/prezzi reali da Creators API (PA-API), 26/11/2026 */
Object.assign(window.ASINS, {
  'imetec-scaldasonno-adapto-singolo-cotone': { asin: 'B07Y8GR1WS', price: 69.99, img: 'https://m.media-amazon.com/images/I/41b443s6AfL._SL500_.jpg', title: "Imetec Scaldasonno Adapto – Scaldaletto singolo 150x80 cotone | 100% cotone | Basso consumo | Riscaldamento rapido | Comando con 6 temperature | Made in Italy" },
  'imetec-scaldasonno-adapto-matrimoniale-lana': { asin: 'B07Y8GCMLG', price: 139.99, img: 'https://m.media-amazon.com/images/I/41egb2zJ+oL._SL500_.jpg', title: "Imetec Scaldasonno Adapto – Scaldaletto matrimoniale 150x160 lana merino | 100% lana e merino | 2 zone di riscaldamento separate | Timer autospegnimento | Made in Italy" },
  'imetec-scaldasonno-adapto-maxi-195x165': { asin: 'B08HR23S41', price: 169.99, img: 'https://m.media-amazon.com/images/I/41xIjjpaAkL._SL500_.jpg', title: "Imetec Scaldasonno Adapto – Scaldaletto matrimoniale maxi 195x165 | Coprimaterasso anallergico trapuntato | Basso consumo | Doppio comando | 6 temperature" },
  'medisana-hu-665-coprimaterasso': { asin: 'B00N5TOVAS', price: 24.95, img: 'https://m.media-amazon.com/images/I/31oR1ql2J2L._SL500_.jpg', title: "medisana HU 665 coperta riscaldante elettrica, coprimaterasso termica | spegnimento automatico, protezione da surriscaldamento, 3 livelli di calore, 150 x 80 cm, lavabile, scaldamaterasso" },
  'innoliving-inn-767-scaldaletto': { asin: 'B076PN3LSY', price: 31.25, img: 'https://m.media-amazon.com/images/I/31g6kCv5+1L._SL500_.jpg', title: "Coperta Elettrica Termica Innoliving, INN-767 Scaldaletto in Materiale Sintetico, Bianco, a Una Piazza E Mezza, 150x122x8 cm" },
  'tlgreen-scaldaletto-matrimoniale-100w': { asin: 'B0D7PZBTDT', price: 47.49, img: 'https://m.media-amazon.com/images/I/31pxk87xLNL._SL500_.jpg', title: "TLGREEN Scaldaletto Matrimoniale 100W, 187x139 cm Sottocoperta | Riscaldato Elettricha Lavabile in Lavatrice Con 6 Temperature Spegnimento Automatic Termocoperta Coperte Da Letto Elettriche" },
  'redkey-scaldaletto-matrimoniale-7-temp': { asin: 'B0C7BJ5JRV', price: 48.44, img: 'https://m.media-amazon.com/images/I/41NtuAQgTlL._SL500_.jpg', title: "REDKEY Scaldaletto Elettrica Matrimoniale,170x150 cm Sottocoperta,7 Temperature,Coperta Termica con Spegnimento Automatico,Termoforo,Lavabile" },
  'cecotec-thermalunder-doppio': { asin: 'B0DJ313QDX', price: 47.9, img: 'https://m.media-amazon.com/images/I/31y8pd6Y0CL._SL500_.jpg', title: "Cecotec Fodera Elettrica HeatConfort ThermalUnder Doppio (160 x 140). Coperta Termica con Spegnimento Automatico e 6 Livelli di Temperatura Regolabili per un comfort personalizzato." },
  'imetec-caldoplaid-velvet-square': { asin: 'B08J8Z15M1', price: 59.99, img: 'https://m.media-amazon.com/images/I/517MjLZe5JL._SL500_.jpg', title: "Imetec CaldoPlaid Velvet Square – Coperta riscaldante 150x95 cm | 6 temperature | Riscaldamento rapido | Timer spegnimento | Bassi consumi | Lavabile in lavatrice" },
  'imetec-caldoplaid-elegance-180x140': { asin: 'B0BLCXY3J8', price: 79.97, img: 'https://m.media-amazon.com/images/I/51zSuhSjsML._SL500_.jpg', title: "Imetec CaldoPlaid Elegance – Coperta riscaldante 180x140 cm | Tessuto double face | 6 temperature | Riscaldamento rapido | Risparmio energetico | Lavabile" },
  'beurer-termocoperta-waffle': { asin: 'B0HK9C5FT2', price: 44.99, img: 'https://m.media-amazon.com/images/I/511IP5ZPrZL._SL500_.jpg', title: "Beurer termocoperta Waffle Sage Green, leggera termocoperta made in Europe | Coperta riscaldante dal design a nido d'ape con 3 livelli di temperatura e sistema di sicurezza, lavabile a 30 °C, verde" },
  'coperta-riscaldante-matrimoniale-130x160': { asin: 'B0FGXTNV5J', price: 32.99, img: 'https://m.media-amazon.com/images/I/41N-NvmYk-L._SL500_.jpg', title: "Coperta Riscaldante, Termocoperta Matrimoniale 130x160 cm, Grigia | Plaid Matrimoniale con 4 impostazioni di tempo e temperatura, spegnimento automatico, adatta per divano, letto o ufficio" },
});
