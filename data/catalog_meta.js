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
