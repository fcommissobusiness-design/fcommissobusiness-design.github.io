/* ============================================================
   PRODOTTI AGGIUNTI DALLA PIPELINE DI INGRESSO (intake.js)
   Un oggetto per prodotto, gia' validato: id univoco, ASIN, prezzo,
   foto verificate, attributi dichiarati (null = non dichiarato),
   stelle lette da Amazon. Viene fuso nei dati all'avvio.
   ============================================================ */
window.EXTRA = [
 {
  "id": "tapo-rv20-max-plus",
  "v": "robot-aspirapolvere",
  "brand": "Tapo (TP-Link)",
  "name": "Tapo RV20 Max Plus",
  "price": 169.99,
  "quality": 6.5,
  "checked": "2026-09-09",
  "tagline": "Il LiDAR con autosvuotamento piu economico tra i marchi noti",
  "attrs": {
   "pa": 5300,
   "battery": null,
   "mop": "passive",
   "dock": "dust",
   "lidar": true,
   "height": 8.3,
   "bin": null,
   "carpetLift": null,
   "petBrush": null
  },
  "pros": [
   "Stazione di autosvuotamento con sacchetto da 3 L (fino a 2 mesi senza svuotare)",
   "Corpo da 8,3 cm: passa sotto la maggior parte di divani e letti bassi",
   "Navigazione LiDAR MagSlim con mappatura e zone vietate da app"
  ],
  "cons": [],
  "buyIf": "Chi vuole dimenticarsi lo svuotamento del cestello spendendo poco e ha mobili bassi.",
  "avoidIf": "Chi cerca un vero lavaggio dei pavimenti o ha tappeti a pelo lungo: il mop e passivo e non si solleva.",
  "asin": "B0DHKM58LV",
  "amazonTitle": "Tapo RV20 Max Plus Robot Aspirapolvere Lavapavimenti 5300Pa LiDAR 83mm",
  "imgs": [
   "https://m.media-amazon.com/images/I/71jEf9a4LnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71a7Nww18hL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71hzDH4wR5L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61j88vVB-3L._AC_SL1500_.jpg"
  ],
  "summary": "Robot 2-in-1 con base che aspira la polvere da sola, cosa rara sotto i 200 euro. Aspirazione 5.300 Pa e navigazione laser sono adeguate per appartamenti medi, il lavaggio e un panno trascinato che va bene per la polvere ma non per lo sporco incrostato. La scheda Amazon non dichiara autonomia ne capacita del contenitore, e le recensioni citano odori dal panno se non lo si lava a mano.",
  "ean": "8885020625219",
  "eanSource": "Produttore: store ufficiale TP-Link Italia (it.store.tapo.com, barcode variante Tapo RV20 Max Plus); checksum EAN-13 valido",
  "rating": 4.2,
  "reviews": 4970,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "irobot-roomba-115-combo-autoempty",
  "v": "robot-aspirapolvere",
  "brand": "iRobot",
  "name": "Roomba 115 Combo + AutoEmpty dock",
  "price": 219,
  "quality": 7,
  "checked": "2026-09-09",
  "tagline": "Il Roomba entry-level con LiDAR e base autosvuotante",
  "attrs": {
   "pa": 15000,
   "battery": null,
   "mop": "passive",
   "dock": "dust",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": false,
   "petBrush": true
  },
  "pros": [
   "Aspirazione dichiarata 15.000 Pa con spazzola gomma+setole e spazzola laterale estesa per i bordi",
   "Stazione AutoEmpty con sacchetto AllergenLock da 2,5 L per circa 3 mesi",
   "Navigazione ClearView LiDAR con mappe multi-piano, zone No-Go e No-Mop"
  ],
  "cons": [],
  "buyIf": "Chi vuole il marchio iRobot, app matura e un robot semplice da gestire in case piccole e medie (fino a 84 mq per carica).",
  "avoidIf": "Chi ha molti tappeti e vuole lavare nello stesso ciclo: senza sollevamento del panno il flusso di lavoro si complica.",
  "asin": "B0GQVYJFF9",
  "amazonTitle": "iRobot Roomba® 115 Combo robot aspirapolvere lavapavimenti, 15.000 Pa",
  "imgs": [
   "https://m.media-amazon.com/images/I/71jueoNXEqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91pp6zS1diL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81by9TulF2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Kc1yQ4y1L._AC_SL1500_.jpg"
  ],
  "summary": "Versione 2026 del Roomba economico: LiDAR al posto della vecchia navigazione a telecamera, 15.000 Pa e stazione che svuota il cestello. Il lavaggio resta un panno in microfibra con SmartScrub, adatto a impronte e polvere, non a macchie secche. iRobot dichiara che il panno non si solleva sui tappeti, quindi per le stanze con moquette conviene usare le No-Mop Zones. Autonomia e altezza del robot non sono dichiarate sulla scheda Amazon.",
  "ean": "0885155054067",
  "eanSource": "Produttore: JSON-LD della scheda ufficiale irobot.de (gtin14 885155054067, codice Y454040 nero); checksum EAN-13 valido",
  "rating": 4.3,
  "reviews": 11162,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "xiaomi-robot-vacuum-s40c",
  "v": "robot-aspirapolvere",
  "brand": "Xiaomi",
  "name": "Robot Vacuum S40C",
  "price": 144.29,
  "quality": 6,
  "checked": "2026-09-09",
  "tagline": "LiDAR Xiaomi essenziale sotto i 150 euro, senza stazione",
  "attrs": {
   "pa": 5000,
   "battery": 100,
   "mop": "passive",
   "dock": "none",
   "lidar": true,
   "height": 9.6,
   "bin": 520,
   "carpetLift": null,
   "petBrush": false
  },
  "pros": [
   "Contenitore polvere da 520 ml e serbatoio acqua da 260 ml, tra i piu capienti della fascia",
   "Navigazione laser LDS con mappatura, zone vietate e app Xiaomi Home",
   "4 livelli di aspirazione e 3 livelli di flusso acqua regolabili"
  ],
  "cons": [],
  "buyIf": "Chi vuole un robot con mappa affidabile al minimo costo e non ha problemi a svuotarlo ogni due o tre cicli.",
  "avoidIf": "Chi ha animali o capelli lunghi in casa, o vuole una base che svuoti e lavi da sola.",
  "asin": "B0F4K1H6X5",
  "amazonTitle": "XIAOMI S40C Robot aspirapolvere con lavaggio, 5000 Pa, controllo App",
  "imgs": [
   "https://m.media-amazon.com/images/I/611F9QAUlHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71JZBh8PYwL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61MPTz26h6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51aeo4nRA0L._AC_SL1500_.jpg"
  ],
  "summary": "Robot base senza base di svuotamento: si compra per la navigazione laser precisa e il cestello grande, che riduce gli svuotamenti manuali. Aspirazione 5.000 Pa e 100 minuti di autonomia bastano per 60-80 mq. Xiaomi dichiara che non ha sistema anti-groviglio, quindi con capelli lunghi la spazzola va pulita spesso. Attenzione: il buybox attuale e di un venditore terzo (PcComponentes), non Amazon.",
  "ean": "6941812701867",
  "eanSource": "3 rivenditori concordanti (Caseking.es, Elesen.lt, Technomarket.bg) per il codice BHR9664EU; checksum EAN-13 valido",
  "rating": 4.3,
  "reviews": 668,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "roborock-qv-35a-set",
  "v": "robot-aspirapolvere",
  "brand": "roborock",
  "name": "QV 35A Set",
  "price": 299.99,
  "quality": 8,
  "checked": "2026-09-09",
  "tagline": "La stazione completa piu economica di roborock, con mop rotanti",
  "attrs": {
   "pa": 8000,
   "battery": 180,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": 9.65,
   "bin": 370,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Stazione tutto-in-uno: svuota la polvere (2,7 L, ~7 settimane), riempie l acqua (4 L), lava e asciuga i panni",
   "Due mop rotanti a 200 giri/min con sollevamento di 10 mm sui tappeti",
   "Spazzola principale in gomma e laterale asimmetrica certificate SGS anti-groviglio"
  ],
  "cons": [],
  "buyIf": "Chi vuole lavaggio serio e manutenzione quasi zero senza superare i 300 euro, anche con animali in casa.",
  "avoidIf": "Chi ha pavimenti pieni di oggetti sparsi o vuole il massimo di aspirazione sui tappeti spessi.",
  "asin": "B0DSLBN5FS",
  "amazonTitle": "roborock QV 35A Set Robot Aspirapolvere Lavapavimenti, Antigroviglio",
  "imgs": [
   "https://m.media-amazon.com/images/I/61nMrPBORNL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XFwQ7IXIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81i71p0wILL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71xvm5Upj6L._AC_SL1500_.jpg"
  ],
  "summary": "Erede diretto del Qrevo S: stessa architettura con due panni rotanti, sollevamento 10 mm e base che lava e asciuga ad aria. Aspirazione 8.000 Pa, nella media della fascia, ma autonomia da 3 ore e mappatura fino a 4 piani. Il riconoscimento ostacoli e Reactive Tech senza telecamera, quindi cavi sottili e calzini possono ingannarlo. A 300 euro e la soluzione hands-free piu accessibile tra i marchi affidabili.",
  "ean": "6936905901064",
  "eanSource": "Produttore: store ufficiale it.roborock.com e es.roborock.com (barcode variante Nero, SKU RRIT-QV35A5-M1-N); checksum EAN-13 valido",
  "rating": 4.5,
  "reviews": 3881,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "dreame-l40-ultra-ae",
  "v": "robot-aspirapolvere",
  "brand": "dreame",
  "name": "L40 Ultra AE",
  "price": 399,
  "quality": 8.5,
  "checked": "2026-09-09",
  "tagline": "Il top di gamma accessibile di Dreame, con lavaggio a 75 gradi",
  "attrs": {
   "pa": 19000,
   "battery": 180,
   "mop": "rotating",
   "dock": "full",
   "lidar": null,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Aspirazione 19.000 Pa e spazzola TriCut che taglia i capelli per evitare grovigli",
   "PowerDock: svuotamento 100 giorni, lavaggio panni con acqua a 75 gradi e asciugatura ad aria calda",
   "MopExtend per pulire lungo bordi e gambe dei mobili, sollevamento mop 10,5 mm, riconoscimento 120 tipi di oggetti (3DAdapt)"
  ],
  "cons": [],
  "buyIf": "Chi ha animali o capelli lunghi in casa e vuole un robot che gestisca da solo grovigli, sporco secco e manutenzione dei panni.",
  "avoidIf": "Chi ha budget stretto o casa piccola: la stazione e alta e ingombrante e la potenza extra si paga.",
  "asin": "B0F53MJY8T",
  "amazonTitle": "dreame L40 Ultra AE Robot Aspirapolvere, Lavaggio Panno 75°C",
  "imgs": [
   "https://m.media-amazon.com/images/I/61Oewwp7QtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91cgalT0LYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91BinusOkCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81zcdFPY4iL._AC_SL1500_.jpg"
  ],
  "summary": "Evoluzione del L10s Pro Ultra Heat: aspirazione molto alta, panni rotanti estendibili e stazione che lava con acqua calda e asciuga. Il rilevamento ostacoli con telecamera RGB e laser doppia linea e un vero passo avanti rispetto ai robot senza camera. Sulla scheda Amazon non sono dichiarati altezza, capacita del cestello ne il tipo di navigazione (la stampa e le schede tecniche esterne indicano LiDAR). A 399 euro compete con i Qrevo di fascia superiore.",
  "ean": "6977328066374",
  "eanSource": "2 rivenditori concordanti (Icecat scheda RLL77SE bianco, Photopoint.ee) per la variante bianca venduta da Amazon; checksum EAN-13 valido",
  "rating": 4.5,
  "reviews": 2420,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "sleephome-niveo",
  "v": "materassi",
  "brand": "Sleephome",
  "name": "Niveo molle insacchettate 22 cm",
  "price": 129.99,
  "quality": 6,
  "checked": "2026-09-09",
  "tagline": "Il materasso a molle indipendenti piu economico con certificazione medica",
  "attrs": {
   "type": "molle",
   "firmness": 6,
   "cooling": 6,
   "motion": 7,
   "edge": null,
   "height": 22,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "350 molle insacchettate a 7 zone con strato di foam premium traspirante",
   "Dispositivo medico classe 1: detraibile al 19% con fattura",
   "Made in Italy, certificato OEKO-TEX e CertiPUR, spedito arrotolato sottovuoto"
  ],
  "cons": [],
  "buyIf": "Chi vuole spendere il minimo su un molle indipendenti certificato per ospiti, casa vacanze o ragazzi.",
  "avoidIf": "Chi supera i 90-100 kg o cerca un materasso principale da usare per dieci anni.",
  "asin": "B0CBQHMNC5",
  "amazonTitle": "Sleephome Materasso Molle Insacchettate 22 cm Matrimoniale 160x190 Niveo | Dispositivo Medico Ortopedico Ergonomico | 100% Made in Italy | Anallergico e Antibatterico | Antiacaro e Traspirante",
  "imgs": [
   "https://m.media-amazon.com/images/I/71-0C7dHTZL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51377r4AvmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71P34neXzEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61qU58eICTL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso a molle insacchettate entry-level: 350 molle per 160 cm e una lastra sottile, quindi un sostegno onesto ma non paragonabile a materassi da 800-1600 molle. Il produttore lo descrive mediamente rigido e dichiara l indipendenza dei movimenti tra i due lati. A 130 euro e una scelta da camera degli ospiti o da seconda casa. Non dichiara peso massimo ne giorni di prova.",
  "ean": null,
  "eanSource": "Nessun EAN pubblicato dal produttore o da rivenditori esterni; venduto solo tramite MatWeb SRL su Amazon",
  "rating": 4.2,
  "reviews": 1061,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "baldiflex-relaxone-20",
  "v": "materassi",
  "brand": "Baldiflex",
  "name": "RelaxOne 20",
  "price": 123.99,
  "quality": 6,
  "checked": "2026-09-09",
  "tagline": "Il memory Baldiflex da battaglia, sotto i 125 euro",
  "attrs": {
   "type": "memory",
   "firmness": 6,
   "cooling": 5,
   "motion": null,
   "edge": null,
   "height": 20,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Lastra in waterfoam con memory trapuntato nel rivestimento, 20 cm di altezza",
   "Rivestimento traspirante e antiacaro con bordatura chiusa",
   "100% Made in Italy con foam certificati OEKO-TEX Standard 100"
  ],
  "cons": [],
  "buyIf": "Chi vuole un memory made in Italy al minimo costo per ospiti, studenti o seconda casa.",
  "avoidIf": "Chi cerca la vera sensazione avvolgente del memory ad alta densita o pesa molto.",
  "asin": "B0FDL57836",
  "amazonTitle": "Baldiflex Materasso Memory 20 cm, Matrimoniale 160x190 cm, RelaxOne 20, Ortopedico e Ergonomico, Anallergico e Antibatterico, 100% Made in Italy",
  "imgs": [
   "https://m.media-amazon.com/images/I/81AU5AMn4RL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Gn9ksmYOL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71bdMw-5ZvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81TGcWhd5KL._AC_SL1500_.jpg"
  ],
  "summary": "Memory economico dove il memory e uno strato sottile cucito nel tessuto sopra una lastra in poliuretano: l accoglienza e leggera e la sensazione e quella di un materasso medio, non avvolgente. Va bene come materasso principale per chi non chiede molto o come letto secondario. Nessun dato su portata e nessuna prova gratuita: si contano solo le 1.300 recensioni a 4,2 e il prezzo. Sul sito Baldiflex lo stesso modello costa 169 euro.",
  "ean": null,
  "eanSource": "Il catalogo Shopify ufficiale baldiflex.it (SKU MT0001468046) non espone barcode; nessuna fonte esterna affidabile",
  "rating": 4.2,
  "reviews": 1302,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "sleepys-grandeur-memory-air",
  "v": "materassi",
  "brand": "Sleepys",
  "name": "Grandeur Memory Air 24 cm",
  "price": 198,
  "quality": 7.5,
  "checked": "2026-09-09",
  "tagline": "Il memory rigido piu recensito di Amazon Italia, con 30 giorni di prova",
  "attrs": {
   "type": "memory",
   "firmness": 8,
   "cooling": 6,
   "motion": null,
   "edge": null,
   "height": 24,
   "maxKg": 140,
   "trial": 30
  },
  "pros": [
   "24 cm reali: 4 cm Memory Air + 14 cm waterfoam HR alta densita + 4 cm Memory Air, ribaltabile",
   "Rigidita dichiarata 8,5/10 e portanza fino a 140 kg per piazza",
   "Fodera in cotone e fibra d argento, 10 anni di garanzia e 30 giorni di prova"
  ],
  "cons": [],
  "buyIf": "Chi dorme supino o a pancia in giu, pesa molto o vuole un memory che non ceda nel tempo.",
  "avoidIf": "Chi dorme sul fianco e cerca accoglienza morbida sulle spalle.",
  "asin": "B07Y8BCW74",
  "amazonTitle": "Materasso in Memory Air matrimoniale 160x190 a portanza differenziata, altezza: 24 cm, rigidità 8.5 su 10. Ortopedico. Fodera in Fibra d'Argento",
  "imgs": [
   "https://m.media-amazon.com/images/I/61H3AIhPNnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71C9-q1sRGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61hSxBaxnPL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XVlF5EZEL._AC_SL1500_.jpg"
  ],
  "summary": "Memory a portanza alta costruito con due strati di memory forato attorno a un nucleo di waterfoam ad alta densita, quindi si puo girare. Con 8,5/10 di rigidita dichiarata e un materasso fermo: chi ama sprofondare lo trovera duro. Portanza 140 kg per piazza e 30 giorni di prova sono rari in questa fascia. Oltre 7.800 recensioni a 4,4 lo rendono la scelta piu collaudata del gruppo.",
  "ean": null,
  "eanSource": "Produttore artigianale (Prato) senza catalogo con EAN pubblico; nessun rivenditore esterno",
  "rating": 4.4,
  "reviews": 7814,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "bedshire-hybrid",
  "v": "materassi",
  "brand": "Bedshire",
  "name": "Hybrid 1200 molle + 5 cm memory",
  "price": 347.99,
  "quality": 8,
  "checked": "2026-09-09",
  "tagline": "L ibrido italiano con 100 notti di prova",
  "attrs": {
   "type": "ibrido",
   "firmness": 7,
   "cooling": 6,
   "motion": null,
   "edge": null,
   "height": 23,
   "maxKg": null,
   "trial": 100
  },
  "pros": [
   "1200 molle insacchettate indipendenti + 5 cm di memory foam HD",
   "Fodera in cotone completamente sfoderabile e lavabile a 30 gradi",
   "100 giorni di prova soddisfatti o rimborsati e 10 anni di garanzia"
  ],
  "cons": [],
  "buyIf": "Chi vuole un ibrido di sostegno con la sicurezza di poterlo restituire dopo averlo provato per tre mesi.",
  "avoidIf": "Chi cerca un materasso morbido o vuole un marchio molto conosciuto.",
  "asin": "B0916D44F6",
  "amazonTitle": "Bedshire Hybrid Materasso Matrimoniale 160x190 a Molle Insacchettate Indipendenti e 5 cm Memory Foam Ortopedico Completamente Sfoderabile H 23 cm con 2 Cuscini Omaggio Made in Italy",
  "imgs": [
   "https://m.media-amazon.com/images/I/61mOdqU6noL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61tTjcxHVlL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61-pwHVFFxL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61CfZ56jagL._AC_SL1500_.jpg"
  ],
  "summary": "Ibrido classico: strato di molle insacchettate per il sostegno e 5 cm di memory ad alta densita per l accoglienza, rigidita dichiarata 7-8/10 quindi tendente al rigido. Il punto forte e la politica commerciale: 100 giorni di prova e 10 anni di garanzia, cose che su Amazon si vedono di rado. Il rivestimento sfoderabile e un plus igienico. Il produttore non dichiara portata massima ne isolamento dei movimenti; spedizione in 3-4 giorni.",
  "ean": "8053307410593",
  "eanSource": "GTIN dichiarato nella scheda Amazon dal venditore Bedshire (produttore che vende in prima persona); checksum EAN-13 valido; nessun secondo rivenditore lo pubblica",
  "rating": 4.7,
  "reviews": 359,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "francegaglia-1600-molle-memory",
  "v": "materassi",
  "brand": "Francegaglia",
  "name": "1600 molle insacchettate & Memory 25 cm",
  "price": 360,
  "quality": 7,
  "checked": "2026-09-09",
  "tagline": "Ibrido ad alta densita di molle con fascia 3D traspirante",
  "attrs": {
   "type": "ibrido",
   "firmness": 6,
   "cooling": 7,
   "motion": null,
   "edge": null,
   "height": 25,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "1600 molle insacchettate indipendenti a 9 zone con 5 cm di memory bugnato",
   "Fascia perimetrale 3D traspirante e fodera sfoderabile",
   "Dispositivo medico detraibile, Made in Italy, 2 cuscini in memory inclusi"
  ],
  "cons": [],
  "buyIf": "Chi vuole un ibrido medio, fresco e alto, con molte molle per un sostegno distribuito.",
  "avoidIf": "Chi vuole prova a domicilio o numeri certificati su portata e durata.",
  "asin": "B098K41RS8",
  "amazonTitle": "Francegaglia® Materasso matrimoniale 1600 Molle Insacchettate & Memory con Fascia 3D Traspirante + 2 Cuscino in Fiocco di Memory - Altezza 25cm - Dispositivo Medico Detraibile 160x190",
  "imgs": [
   "https://m.media-amazon.com/images/I/61ovFE6wvpL._AC_SL1010_.jpg",
   "https://m.media-amazon.com/images/I/71kNwBTh0yL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61ru-RXf6wL._AC_SL1024_.jpg",
   "https://m.media-amazon.com/images/I/615pPgBLRtL._AC_SL1024_.jpg"
  ],
  "summary": "Ibrido a 1600 molle, quindi con una densita di molleggio superiore al Bedshire, con memory bugnato di 5 cm e fascia laterale 3D per far circolare l aria. Rigidita dichiarata media (H3), altezza 25 cm. Laboratorio artigianale italiano che vende direttamente su Amazon: pochi dati tecnici oltre a quelli in scheda, nessun peso massimo dichiarato e nessuna prova gratuita. 263 recensioni a 4,6 sono poche ma buone.",
  "ean": null,
  "eanSource": "Il produttore vende solo tramite il proprio negozio Amazon, nessun EAN pubblicato altrove",
  "rating": 4.6,
  "reviews": 263,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "marcapiuma-sevenlife-18-lattice",
  "v": "materassi",
  "brand": "Marcapiuma",
  "name": "Sevenlife 18 lattice 100%",
  "price": 643.99,
  "quality": 7,
  "checked": "2026-09-09",
  "tagline": "Lattice naturale italiano per chi dorme sul fianco",
  "attrs": {
   "type": "lattice",
   "firmness": 5,
   "cooling": 6,
   "maxKg": 90,
   "motion": null,
   "edge": null,
   "height": 18,
   "trial": 0
  },
  "pros": [
   "Lastra in lattice 100% forata da 16 cm a 7 zone, rigidita 5/10 su entrambi i lati",
   "Rivestimento aloe vera sfoderabile su 3 lati, lavabile a 60 gradi",
   "Certificazioni EuroLatex, LGA, OEKO-TEX classe 1, garanzia 10 anni"
  ],
  "cons": [],
  "buyIf": "Chi dorme sul fianco, vuole un materiale naturale ed elastico e pesa meno di 90 kg.",
  "avoidIf": "Chi supera i 90 kg, vuole un materasso alto o ha fretta di riceverlo.",
  "asin": "B01CK3ZCIE",
  "amazonTitle": "Marcapiuma Materasso Matrimoniale 100% Lattice 160x190 h 18 cm SEVENLIFE 18 Rigidità H2 Medio/Morbido Naturale 7 zone con Rivestimento ALOE VERA sfoderabile Antiacaro Traspirante 100% Made in Italy",
  "imgs": [
   "https://m.media-amazon.com/images/I/51Ln+j+5BpL._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/51KQxpONmxL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61f0mKdqvbL._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/5104FqHDwzL._AC_SL1100_.jpg"
  ],
  "summary": "Unico lattice pieno della selezione: elastico, fresco e reattivo, con rigidita media-morbida dichiarata 5/10 e portata fino a circa 90 kg per piazza, quindi non adatto a corporature pesanti. Spesso solo 18 cm e pesante (32 kg). Il prezzo e alto per uno spessore ridotto, ma il lattice 100% con certificazione EuroLatex costa cosi. Spedizione dichiarata in 13-14 giorni dal venditore Enne Group.",
  "ean": null,
  "eanSource": "Marcapiuma (Enne Group) non pubblica EAN; codice produttore LATT18160190 senza barcode su fonti esterne",
  "rating": 4.2,
  "reviews": 413,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "durrafy-d03-rete",
  "v": "sedie-ergonomiche",
  "brand": "Durrafy",
  "name": "Durrafy D03",
  "price": 94.04,
  "quality": 7,
  "checked": "2026-09-09",
  "tagline": "La rete ergonomica sotto i 100 € con lombare e poggiatesta regolabili",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": null,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 120,
   "footrest": false
  },
  "pros": [
   "Supporto lombare regolabile in altezza (5 cm) e poggiatesta regolabile (7 cm + inclinazione), raro sotto i 100 €",
   "Schienale e seduta in rete di nylon, pistone certificato BIFMA/SGS, portata dichiarata 150 kg",
   "Oltre 1.800 recensioni a 4,4: rapporto qualità/prezzo collaudato"
  ],
  "cons": [],
  "buyIf": "Cerchi una prima sedia ergonomica in rete con lombare e poggiatesta regolabili spendendo meno di 100 €.",
  "avoidIf": "Vuoi braccioli 3D/4D, profondità seduta regolabile o blocco della reclinazione: qui non ci sono.",
  "asin": "B0C3BZHVK8",
  "amazonTitle": "Durrafy Sedia da Ufficio Ergonomica, Poggiatesta & Supporto Lombare Regolabili, Rete Traspirante, 120° Inclinazione（Non bloccabile）, 360° Girevole, 150kg Carico",
  "imgs": [
   "https://m.media-amazon.com/images/I/61NW4QiSthL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81dBQGjDtdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61KWNMsMMBL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/716URNC4kqL._AC_SL1200_.jpg"
  ],
  "summary": "Sedia in rete di fascia economica che copre i fondamentali ergonomici: lombare regolabile, poggiatesta regolabile, altezza seduta e inclinazione 90-120° con tensione regolabile. I braccioli si regolano solo in altezza (8 cm) e l'inclinazione non è bloccabile in posizione reclinata. Non è una sedia da 8-10 ore per chi ha problemi di schiena seri, ma per home office e studio è tra le più solide del segmento.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1839,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "dowinx-gaming-tessuto-rete-poggiapiedi",
  "v": "sedie-ergonomiche",
  "brand": "Dowinx",
  "name": "Dowinx Gaming in tessuto a rete con poggiapiedi",
  "price": 117.6,
  "quality": 6,
  "checked": "2026-09-09",
  "tagline": "La gaming che non fa sudare: tessuto a rete, molle in seduta e poggiapiedi",
  "attrs": {
   "lumbar": "fixed",
   "headrest": true,
   "armrests": null,
   "maxWeight": 136,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 135,
   "footrest": true
  },
  "pros": [
   "Rivestimento in tessuto a rete traspirante invece della classica similpelle da gaming",
   "Poggiapiedi estraibile e schienale reclinabile 90-135°, seduta con cuscino a molle",
   "Oltre 2.200 recensioni a 4,4 e prezzo sotto i 120 €"
  ],
  "cons": [],
  "buyIf": "Vuoi una gaming reclinabile con poggiapiedi che resti fresca in estate, sotto i 120 €.",
  "avoidIf": "Ti serve lombare meccanico regolabile o braccioli 3D/4D per lunghe sessioni di lavoro.",
  "asin": "B0CGX1WVMM",
  "amazonTitle": "Dowinx Sedia Gaming Gamer Ergonomica, Sedia da Ufficio Regolabile in Tessuto Nero con Cuscino a Molle, Supporto per Testa e Poggiapiedi, Nero - Verde/Standard",
  "imgs": [
   "https://m.media-amazon.com/images/I/7179c9nmxLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81eJgjbkeGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Sg5pwbxHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71S+hHjPasL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia gaming dallo stile vintage con rivestimento esterno in tessuto a rete traspirante e cuscino seduta a molle, più poggiapiedi estraibile e reclinazione fino a 135°. Il supporto lombare e il poggiatesta sono cuscini (non meccanismi regolabili) e i braccioli sono collegati allo schienale, non regolabili in modo indipendente. È una poltrona da gioco/relax più che una sedia da lavoro posturale: comoda, robusta (piastre in acciaio, 136 kg) ma con regolazioni limitate.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 2239,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "sihoo-b100-pro-poggiapiedi",
  "v": "sedie-ergonomiche",
  "brand": "SIHOO",
  "name": "SIHOO B100 Pro",
  "price": 219.99,
  "quality": 8,
  "checked": "2026-09-09",
  "tagline": "Rete integrale, lombare adattivo e poggiapiedi a scomparsa: la pausa senza cambiare sedia",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": true,
   "armrests": 4,
   "maxWeight": 136,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 135,
   "footrest": true
  },
  "pros": [
   "Supporto lombare adattivo 4D che segue la postura senza regolazioni manuali",
   "Braccioli 4D ribaltabili: la sedia entra completamente sotto la scrivania",
   "Poggiapiedi pieghevole integrato e 3 angoli di inclinazione (110°/123°/135°)"
  ],
  "cons": [],
  "buyIf": "Vuoi una sedia in rete da lavoro con poggiapiedi vero e braccioli ribaltabili, sotto i 250 €.",
  "avoidIf": "Preferisci un lombare regolabile a mano o hai bisogno di seduta con profondità regolabile.",
  "asin": "B0GHZ52YXJ",
  "amazonTitle": "SIHOO B100 Pro Sedia Ufficio, Poggiapiedi, Supporto Doppio Adattivo, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71tmTx3XKQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/716U6Y6c-rL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7169EKgAN1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81ziC2XEmKL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia da ufficio full-mesh a doppio schienale con supporto lombare adattivo, poggiatesta 3D extra-large e braccioli 4D che si ribaltano. Il poggiapiedi estensibile e i tre blocchi di inclinazione la rendono adatta a chi alterna lavoro concentrato e pause. Portata dichiarata 300 lb (136 kg), certificazioni SGS/BIFMA e 3 anni di garanzia. Manca la regolazione della profondità seduta e l'altezza utente consigliata non è dichiarata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1913,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "sihoo-doro-s100",
  "v": "sedie-ergonomiche",
  "brand": "SIHOO",
  "name": "SIHOO Doro S100",
  "price": 379.99,
  "quality": 7,
  "checked": "2026-09-09",
  "tagline": "La Doro più accessibile: lombare dinamico doppio e braccioli 4D sotto i 400 €",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": true,
   "armrests": 4,
   "maxWeight": 150,
   "hMin": 150,
   "hMax": 190,
   "material": "mesh",
   "recline": 135,
   "footrest": false
  },
  "pros": [
   "Doppio supporto lombare dinamico con 4 molle (regolazione automatica 6D), stessa tecnologia della Doro C300",
   "Braccioli 4D coordinati con lo schienale in reclinazione (7 cm altezza, 3 cm avanti/indietro, 72° rotazione)",
   "Schienale regolabile su 5 livelli e profondità seduta 5 cm: si adatta da 150 a 190 cm dichiarati"
  ],
  "cons": [],
  "buyIf": "Vuoi il lombare dinamico Sihoo in un formato più compatto della C300 e sei tra 155 e 180 cm.",
  "avoidIf": "Sei oltre 185 cm o vuoi poggiapiedi: guarda C300 Pro V2 o B100 Pro.",
  "asin": "B0CTSDG3VD",
  "amazonTitle": "SIHOO Doro S100 Sedia Ergonómica Ufficio, Supporto Lombare Dinamico, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71BXp4eBcmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ER-+0pb-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ncN6M0jjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71S3n0c4ORL._AC_SL1500_.jpg"
  ],
  "summary": "Fascia premium di Sihoo in versione compatta: lombare dinamico a doppia ala con molle, schienale indipendente regolabile su 5 livelli, seduta a cascata con profondità regolabile e braccioli 4D coordinati. Rete ad alta resilienza, certificazioni BIFMA/SGS. Le recensioni segnalano che oltre i 178-185 cm il poggiatesta e lo schienale possono risultare corti nonostante il range dichiarato 150-190 cm. Poche recensioni rispetto alla C300 (236), ma rating 4,3.",
  "ean": "0199284390652",
  "eanSource": "Amazon (UPC 199284390652) + E.Leclerc listing 0199284390652",
  "rating": 4.3,
  "reviews": 236,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "bosch-gsr-12v-15-2x2ah",
  "v": "utensili-elettrici",
  "brand": "Bosch Professional",
  "name": "Bosch GSR 12V-15 (2x2,0 Ah + 39 accessori)",
  "price": 140,
  "quality": 9,
  "checked": "2026-09-09",
  "tagline": "Il 12V professionale compatto con due batterie e tutto il kit, sotto i 150 €",
  "attrs": {
   "torque": 30,
   "volts": 12,
   "percussion": false,
   "sds": false,
   "brushless": null,
   "batteryIncl": true,
   "weight": 0.95,
   "eco": "Bosch Professional 12V System"
  },
  "pros": [
   "Testa da 169 mm e 0,95 kg con batteria: lavora con una mano in spazi stretti e sopra la testa",
   "Kit completo Amazon Exclusive: 2 batterie 2,0 Ah, caricatore, 39 accessori e borsa",
   "Oltre 18.000 recensioni a 4,6: lo standard dei compatti 12V professionali"
  ],
  "cons": [],
  "buyIf": "Ti serve un avvitatore leggero e compatto per montaggi, cartongesso e lavori sopra testa, con kit completo.",
  "avoidIf": "Devi forare muratura o cemento, o vuoi la coppia e l'autonomia di un 18V.",
  "asin": "B015WGDX6E",
  "amazonTitle": "Bosch Professional Sistema 12V Trapano Avvitatore GSR 12V-15, Incl. Batteria 2x2.0 + Caricabatterie, Set Accessori 39 Pz., In Borsa, Amazon Exclusive Set",
  "imgs": [
   "https://m.media-amazon.com/images/I/71BZCpITTYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71MkP56bq+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71wd4-ckoAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61OFe4t+ZXL._AC_SL1500_.jpg"
  ],
  "summary": "Avvitatore compatto 12V Professional con 30 Nm (15 Nm materiale tenero), 2 velocità, mandrino autoserrante 10 mm e foratura fino a 19 mm legno / 10 mm metallo. In confezione due batterie 2,0 Ah, caricabatterie, 39 punte e borsa morbida. Niente percussione né motore brushless dichiarato: è pensato per montaggio, cartongesso, elettricisti e lavori di precisione, non per muratura. Batterie compatibili con tutto l'ecosistema Bosch Professional 12V.",
  "ean": "3165140815871",
  "eanSource": "Amazon GTIN 03165140815871 + guenstiger.de/worldwidevoltage listing 0615990GB0",
  "rating": 4.6,
  "reviews": 18380,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "makita-dhp485rtj-2x5ah",
  "v": "utensili-elettrici",
  "brand": "Makita",
  "name": "Makita DHP485RTJ (2x5,0 Ah, Makpac)",
  "price": 297.97,
  "quality": 9,
  "checked": "2026-09-09",
  "tagline": "Il combi brushless Makita completo: due 5 Ah, caricatore rapido e Makpac",
  "attrs": {
   "torque": 50,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": 1.8,
   "eco": "Makita LXT 18V"
  },
  "pros": [
   "Motore brushless con 50 Nm e percussione: fora legno 38 mm, metallo 13 mm, muratura 13 mm",
   "Due batterie 5,0 Ah BL1850B con caricatore rapido DC18RC e valigetta Makpac",
   "Quasi 2.000 recensioni a 4,7 e piattaforma LXT con centinaia di utensili"
  ],
  "cons": [],
  "buyIf": "Vuoi entrare in Makita LXT con un kit completo brushless a percussione da usare subito.",
  "avoidIf": "Hai già batterie LXT (prendi il DHP485Z) o ti basta un 12V per lavori leggeri.",
  "asin": "B07KWNGNNV",
  "amazonTitle": "DHP485RTJ",
  "imgs": [
   "https://m.media-amazon.com/images/I/71hZdRTGVJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715JbK9uG3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61LE7RyPRfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81HsP3CMDFL._AC_SL1500_.jpg"
  ],
  "summary": "Versione RTJ del DHP485: stesso trapano avvitatore brushless a percussione del DHP485Z ma con due batterie 18V 5,0 Ah, caricabatterie rapido e valigetta Makpac. 50 Nm, 2 velocità (0-500/0-1.900 giri), mandrino 13 mm, 1,8 kg con batteria 5 Ah. È l'entrata seria nell'ecosistema LXT per chi vuole un kit pronto senza comprare batterie a parte. Prezzo intorno ai 300 €, giustificato dalle due 5 Ah.",
  "ean": "0088381866286",
  "eanSource": "Amazon GTIN 00088381866286 + art-tec-tools.de / eBay listing 88381866286",
  "rating": 4.7,
  "reviews": 1954,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "ryobi-r18pd32-1c20g",
  "v": "utensili-elettrici",
  "brand": "RYOBI",
  "name": "Ryobi R18PD32-1C20G (18V ONE+, 1x2,0 Ah)",
  "price": 120.35,
  "quality": 7,
  "checked": "2026-09-09",
  "tagline": "Il percussione 18V con batteria inclusa per chi entra nel mondo ONE+",
  "attrs": {
   "torque": 50,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": 1.7,
   "eco": "Ryobi 18V ONE+"
  },
  "pros": [
   "50 Nm, percussione e mandrino metallico 13 mm a poco più di 100 € con batteria e caricatore",
   "Batteria 18V ONE+ compatibile con oltre 200 utensili casa e giardino",
   "Garanzia 2 anni + 1 con registrazione"
  ],
  "cons": [],
  "buyIf": "Cerchi un percussione 18V economico con batteria inclusa e vuoi un ecosistema ampio per casa e giardino.",
  "avoidIf": "Lavori intensivi o continui: una sola 2,0 Ah non basta e Makita/Bosch 18V reggono meglio.",
  "asin": "B0C1K2D9K9",
  "amazonTitle": "Ryobi R18PD32-1C20G, Trapano a Percussione a Batteria 18V ONE+, 2 Velocità, 24 Posizioni di Coppia, Ideale per Forare Legno e Muratura, Luce LED, 1 Batteria al Litio 2.0Ah e 1 Caricabatterie",
  "imgs": [
   "https://m.media-amazon.com/images/I/71EPlVM+coL._AC_SL1499_.jpg",
   "https://m.media-amazon.com/images/I/61wsUvlZd9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ksxXdinvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71P449-Qq7L._AC_SL1500_.jpg"
  ],
  "summary": "Trapano a percussione 18V con 2 velocità (500-1.800 giri), 24 posizioni di coppia, 50 Nm, mandrino autoserrante 13 mm, luce LED e impugnatura ausiliaria. In confezione una batteria 2,0 Ah e caricabatterie: con una sola batteria l'autonomia è limitata per lavori lunghi. Il motore è brushless secondo le schede Amazon DE/FR e i test francesi, ma la pagina italiana non lo dichiara esplicitamente. Ottimo primo utensile per chi vuole poi aggiungere tagliaerba, soffiatore e altri ONE+.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 208,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "makita-dhr171z-sds-plus",
  "v": "utensili-elettrici",
  "brand": "Makita",
  "name": "Makita DHR171Z (SDS-Plus, solo corpo)",
  "price": 146.51,
  "quality": 8,
  "checked": "2026-09-09",
  "tagline": "Il tassellatore SDS-Plus da una mano: leggero, brushless, LXT",
  "attrs": {
   "torque": null,
   "volts": 18,
   "percussion": true,
   "sds": true,
   "brushless": true,
   "batteryIncl": false,
   "weight": null,
   "eco": "Makita LXT 18V"
  },
  "pros": [
   "Tassellatore SDS-Plus brushless compatto (17 mm cemento), ideale per fori tasselli a soffitto e in spazi stretti",
   "2 modalità (rotazione / rotopercussione), freno elettrico e controllo velocità costante",
   "Oltre 8.400 recensioni a 4,6: il piccolo SDS a batteria più venduto"
  ],
  "cons": [],
  "buyIf": "Hai già batterie Makita LXT e vuoi un SDS leggero per tasselli e piccoli fori in cemento.",
  "avoidIf": "Ti serve la funzione scalpello o fori oltre 17 mm, o non hai batterie LXT (prendi il DHR171RAJ).",
  "asin": "B0759BCVK9",
  "amazonTitle": "Makita DHR171Z - senza batteria / caricabatterie, 18 V, 17mm",
  "imgs": [
   "https://m.media-amazon.com/images/I/714uU9MYTdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71kIlYgTSWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/711Tl3w-j4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71NihNXH97L._AC_SL1500_.jpg"
  ],
  "summary": "Martello perforatore SDS-Plus 18V brushless da 17 mm su cemento, 13 mm legno, 10 mm acciaio, con 0-680 giri e freno elettrico. Versione Z: senza batteria, caricatore né valigetta, quindi ha senso solo se hai già batterie LXT. Non ha la funzione scalpello (solo 2 modalità) e non sostituisce un tassellatore da 2 J+ per fori grandi, ma per tasselli 6-10 mm in serie è imbattibile per peso e maneggevolezza. L'ultimo controllo mostrava disponibilità limitata (solo 10 pezzi).",
  "ean": "0088381848503",
  "eanSource": "Amazon GTIN 00088381848503 + eBay/retailer listing 88381848503",
  "rating": 4.6,
  "reviews": 8435,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "nespresso-essenza-mini-en85b",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "Nespresso Essenza Mini EN85.B",
  "price": 84,
  "quality": 8,
  "checked": "2026-09-09",
  "tagline": "Nespresso Original in formato mini: 19 bar in meno di 11 cm",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "none",
   "tank": 0.6,
   "costPerCup": null,
   "minutes": 1,
   "width": 11
  },
  "pros": [
   "La Nespresso Original più compatta: 11 cm di larghezza dichiarati, sta ovunque",
   "19 bar, riscaldamento in meno di 30 secondi, 2 lunghezze programmabili (Espresso 40 ml / Lungo 110 ml)",
   "7.500+ recensioni a 4,5, Red Dot Design Award"
  ],
  "cons": [],
  "buyIf": "Vuoi entrare nel sistema Nespresso Original con la macchina più piccola ed economica.",
  "avoidIf": "Bevi cappuccini (serve Aeroccino a parte) o consumi molti caffè al giorno (serbatoio 0,6 l).",
  "asin": "B07FM9ZQ4B",
  "amazonTitle": "Nespresso Essenza Mini EN85.B, Macchina da Caffè DeLonghi, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/51tqFe4-HdL._AC_SL1199_.jpg",
   "https://m.media-amazon.com/images/I/71g6I+LjMtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71yv5kpuHJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61IRaLy65kL._AC_SL1500_.jpg"
  ],
  "summary": "La versione De'Longhi della Essenza Mini: pompa 19 bar, serbatoio removibile 0,6 l, contenitore da 6 capsule usate, Eco Mode dopo 3 minuti e spegnimento automatico dopo 9. Prepara solo espresso e lungo, senza montalatte (esiste la variante EN85.BAE con Aeroccino). Ha il minimo ingombro e il prezzo più basso tra le Original attuali. Costo tazza dipende dalle capsule scelte (Nespresso o compatibili) e non è dichiarato in pagina.",
  "ean": "8004399332928",
  "eanSource": "salernocasalinghi.it + imcopex.shop (scheda PDF De'Longhi) concordanti",
  "rating": 4.5,
  "reviews": 7526,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "lavazza-jolie-evo-nera",
  "v": "macchine-caffe",
  "brand": "Lavazza",
  "name": "Lavazza A Modo Mio Jolie Evo",
  "price": 85.99,
  "quality": 9,
  "checked": "2026-09-09",
  "tagline": "A Modo Mio in 12 cm: silenziosa, semplice, dosi a piacere",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "none",
   "tank": 0.6,
   "costPerCup": null,
   "minutes": 1,
   "width": 12
  },
  "pros": [
   "Solo 12 cm di larghezza e 44 dB in erogazione: la più silenziosa del segmento",
   "Pulsante Stop&Go per dosare ogni caffè, griglia small/large per tazza o tazzina",
   "4.100+ recensioni a 4,6 e capsule A Modo Mio con blend Lavazza"
  ],
  "cons": [],
  "buyIf": "Preferisci le miscele Lavazza e vuoi la macchina più compatta e silenziosa del sistema A Modo Mio.",
  "avoidIf": "Vuoi dosi programmabili, montalatte o la vasta scelta di capsule compatibili di Nespresso Original.",
  "asin": "B07VRDYX44",
  "amazonTitle": "Lavazza a Modo Mio, Macchina per Caffé Jolie Evo,10 bar, per capsule Lavazza A Modo Mio Nera",
  "imgs": [
   "https://m.media-amazon.com/images/I/61oFosjxxYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61Q6relvaUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61HkQ7flCdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/716v5DnUxzL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a capsule Lavazza A Modo Mio con pompa 10 bar, serbatoio 0,6 l, cassetto da 5 capsule, tempo preparazione dichiarato ~35 secondi e spegnimento automatico dopo 9 minuti. Un solo pulsante Stop&Go (nessuna dose programmata), nessun sistema latte. È l'alternativa a Nespresso per chi preferisce le miscele Lavazza: capsule proprietarie, quindi meno compatibili economiche rispetto a Nespresso Original. Il costo tazza non è dichiarato in pagina.",
  "ean": "8000070038264",
  "eanSource": "Amazon GTIN 08000070038264 + hwonline.it / elettrovillage.it / onlinestore.it listing",
  "rating": 4.6,
  "reviews": 4171,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "cecotec-cremmaet-cube",
  "v": "macchine-caffe",
  "brand": "Cecotec",
  "name": "Cecotec Cremmaet Cube",
  "price": 169,
  "quality": 6,
  "checked": "2026-09-09",
  "tagline": "Chicco-in-tazza a meno di 170 €: la superautomatica compatta senza fronzoli",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "none",
   "tank": 1.1,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Superautomatica con macinino integrato (5 livelli) e pre-infusione a 169 €",
   "Pressatura 10 g, 19 bar, Thermoblock e pannello touch con memorizzazione delle impostazioni",
   "622 recensioni a 4,3, unica automatica sotto i 300 € sopra la soglia 4,2"
  ],
  "cons": [],
  "buyIf": "Vuoi passare ai chicchi con il budget più basso possibile e bevi solo espresso/lungo.",
  "avoidIf": "Vuoi cappuccino integrato, macinino conico o una marca con assistenza capillare in Italia.",
  "asin": "B0FP2HTVYR",
  "amazonTitle": "Cecotec Macchina da Caffè Superautomatica Compatta Cremmaet Cube. 1350W, Sistema Pressatura 10g, Pre-Infusione, 19 Bar, Sistema Thermoblock, 5 Livelli Macinatura, Pannello Controllo Tattile",
  "imgs": [
   "https://m.media-amazon.com/images/I/71UAkdsAiwL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/513gx-6ZEuL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/61M6IM2OwhL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/61nD+7ZdERL._AC_SL1200_.jpg"
  ],
  "summary": "Macchina automatica compatta con macinacaffè a lame in acciaio (5 livelli), serbatoio 1,1 l, tramoggia 110 g, 2 bevande memorizzabili (intensità, temperatura, volume) e acqua calda per infusi. Nessun sistema latte: niente cappuccino senza un montalatte esterno. È la porta d'ingresso al caffè in grani: qualità in tazza sopra le capsule, sotto le De'Longhi/Philips da 300 €+. La scheda Amazon riporta dimensioni incoerenti (larghezza 34,2 cm), per cui la larghezza non è riportata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 622,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "delonghi-la-specialista-arte-ec9155mb",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "De'Longhi La Specialista Arte EC9155.MB",
  "price": 378.48,
  "quality": 8,
  "checked": "2026-09-09",
  "tagline": "Il bean-to-cup manuale per chi vuole imparare il latte art senza spendere 700 €",
  "attrs": {
   "type": "manuale",
   "grinder": true,
   "milk": "pannarello",
   "tank": 1,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Macinacaffè conico integrato con 8 livelli e dosaggio singolo/doppio",
   "Controllo attivo della temperatura su 3 livelli e lancia vapore MyLatteArt per microschiuma manuale",
   "Kit barista incluso (tamper, imbuto dosatore, bricco) e 1.490 recensioni a 4,2"
  ],
  "cons": [],
  "buyIf": "Vuoi il rituale manuale con macinino integrato e imparare a montare il latte, restando sotto i 400 €.",
  "avoidIf": "Vuoi un caffè a un tasto senza pensieri: prendi un'automatica.",
  "asin": "B09RR1C9FB",
  "amazonTitle": "De'Longhi LA SPECIALISTA ARTE EC9155.MB Macchina da caffè Manuale, 3 Ricette Preimpostate, Controllo Attivo della Temperatura, 8 Livelli di Macinazione, Lancia MyLatte Art, incluso KIT BARISTA, Nera",
  "imgs": [
   "https://m.media-amazon.com/images/I/61hUsrheBFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71pabxIpZQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61VjEfjgf8L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71v+8RV12yL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina manuale con macinino integrato e portafiltro: macina, dosa, pressa e monta il latte a mano con lancia vapore. Tre ricette preimpostate (espresso, long black, acqua calda), 15 bar, 1450 W, serbatoio dichiarato 1 l. Richiede curva di apprendimento (dosaggio, pressatura, montaggio latte) e regolare pulizia del macinino. Meno pressione rispetto a una Gaggia Classic ma con macinino integrato e temperatura attiva: la scelta tra l'automatica e il setup barista serio.",
  "ean": "8004399021921",
  "eanSource": "Amazon GTIN 08004399021921 + eBay / axro.com listing (deg9021921)",
  "rating": 4.2,
  "reviews": 1492,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "dreame-l40s-pro-ultra",
  "v": "robot-aspirapolvere",
  "brand": "dreame",
  "name": "L40s Pro Ultra",
  "price": 499,
  "quality": 8.5,
  "checked": "2026-09-10",
  "tagline": "Top di gamma con stazione completa e mocio che si solleva sui tappeti",
  "attrs": {
   "pa": 19000,
   "battery": 195,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Aspirazione 19.000 Pa tra le piu alte della categoria",
   "Stazione che svuota il cestello, lava e asciuga i panni e rifornisce l'acqua",
   "Mocio rotanti che si estendono ai bordi e si sollevano sui tappeti",
   "195 minuti di autonomia dichiarata, adatti a metrature grandi"
  ],
  "cons": [
   "Stazione ingombrante",
   "Prezzo impegnativo"
  ],
  "buyIf": "Chi ha una casa grande, tappeti e vuole una stazione che faccia tutto da sola.",
  "avoidIf": "Chi ha poco spazio per la stazione o un budget contenuto.",
  "asin": "B0DY8V59LY",
  "amazonTitle": "dreame L40s Pro Ultra Robot Aspirapolvere Lavapavimenti, Aspiraz. 19.000 Pa | Spazzola Anti-Grov. DuoBrush HyperStream, Mocio Estendibile, Evita 180+ Oggetti, Supera Ostac. 4 cm, Auto-Pulizia Mocio 75 °C",
  "imgs": [
   "https://m.media-amazon.com/images/I/71EEs4bU5tL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71aZ5t7MwEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81cxa++usCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81luBW0bvkL._AC_SL1500_.jpg"
  ],
  "summary": "Robot di fascia alta con aspirazione da 19.000 Pa e stazione all-in-one che svuota il cestello, lava e asciuga i panni e rifornisce l'acqua. I due mocio rotanti si estendono verso i bordi e si sollevano sui tappeti, e l'autonomia dichiarata e di 195 minuti. E pensato per case grandi e chi vuole occuparsene il meno possibile, ma l'ingombro della stazione e notevole.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 2980,
  "bsr": 177,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "eufy-x10-pro-omni",
  "v": "robot-aspirapolvere",
  "brand": "eufy",
  "name": "X10 Pro Omni",
  "price": 499,
  "quality": 7.5,
  "checked": "2026-09-10",
  "tagline": "Eufy con stazione all-in-one e spazzola anti-groviglio per i peli",
  "attrs": {
   "pa": 8000,
   "battery": null,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Stazione all-in-one: autosvuotamento, lavaggio e asciugatura dei panni, rabbocco acqua",
   "Spazzola Pro-Detangle che si libera dai peli avvolti",
   "Navigazione laser iPath con mappe e zone vietate",
   "Mocio che si sollevano sui tappeti"
  ],
  "cons": [
   "8.000 Pa, meno di alcuni rivali di pari prezzo",
   "Valutazione media 4,1"
  ],
  "buyIf": "Chi vuole una stazione completa di marca nota con buona gestione dei peli.",
  "avoidIf": "Chi cerca l'aspirazione piu potente della fascia o punteggi recensioni altissimi.",
  "asin": "B0DJR64YJC",
  "amazonTitle": "eufy X10 Pro Omni Aspirapolvere Lavapavimenti, 8.000 Pa, Bianco | Stazione All-in-One con mappatura, Auto-Svuotamento e Riempimento, 2 Auto-Lift-Mops, Evita Gli Ostacoli.",
  "imgs": [
   "https://m.media-amazon.com/images/I/61M5e6igwOL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ZR-cRyqcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61NBnYfQubL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71PSMDTPveL._AC_SL1500_.jpg"
  ],
  "summary": "Il modello omni di eufy unisce 8.000 Pa di aspirazione, navigazione laser iPath e una stazione all-in-one che si svuota da sola, lava e asciuga i due panni e rifornisce l'acqua. La spazzola a rullo si districa da sola dai peli e i mocio si sollevano quando incontra i tappeti. Le recensioni sono buone ma non entusiaste, con media 4,1 su 5.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 817,
  "bsr": 192530,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "dreame-d9-max",
  "v": "robot-aspirapolvere",
  "brand": "dreame",
  "name": "D9 Max",
  "price": 199,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Navigazione laser sotto i 200 euro, senza stazione",
  "attrs": {
   "pa": 4000,
   "battery": 150,
   "mop": "passive",
   "dock": "none",
   "lidar": true,
   "height": 9.6,
   "bin": 570,
   "carpetLift": null,
   "petBrush": null
  },
  "pros": [
   "Navigazione laser LDS con mappe a meno di 200 euro",
   "150 minuti di autonomia dichiarata",
   "Cestello capiente da 570 ml a bordo",
   "Corpo alto 9,6 cm, passa sotto molti mobili"
  ],
  "cons": [
   "Panno passivo, solo trascinato",
   "Nessuna stazione di autosvuotamento",
   "4.000 Pa di aspirazione"
  ],
  "buyIf": "Chi vuole la mappatura laser spendendo poco e non ha bisogno della stazione.",
  "avoidIf": "Chi vuole un vero lavaggio dei pavimenti o l'autosvuotamento.",
  "asin": "B09B9TRPF4",
  "amazonTitle": "Dreame D9 Max Robot 2in1 Aspirapolvere e Lava Pavimenti, Navigazione Intelligente Mappatura Laser, Aspirazione 4000Pa polvere fino 570ml, Auton. 150 minuti, Wi-Fi, App Compatibile Alexa/Google",
  "imgs": [
   "https://m.media-amazon.com/images/I/71-q1SnsnXL._AC_SL1499_.jpg",
   "https://m.media-amazon.com/images/I/615FA7Ef+-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Bw9SpOJgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XVsQYR8sL._AC_SL1500_.jpg"
  ],
  "summary": "Robot 2-in-1 che aspira e trascina un panno, con navigazione laser LDS e mappatura, cosa non scontata in questa fascia di prezzo. Batteria da 5.200 mAh per circa 150 minuti e cestello da 570 ml a bordo. Non ha stazione: il panno e passivo e va lavato a mano, e i 4.000 Pa di aspirazione vanno bene per pavimenti e polvere, meno per lo sporco incrostato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 645,
  "bsr": 585026,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "roborock-q7-l5-plus",
  "v": "robot-aspirapolvere",
  "brand": "roborock",
  "name": "Q7 L5+",
  "price": 259.99,
  "quality": 7.5,
  "checked": "2026-09-10",
  "tagline": "Roborock con stazione che si svuota da sola sotto i 300 euro",
  "attrs": {
   "pa": 8000,
   "battery": 150,
   "mop": "passive",
   "dock": "dust",
   "lidar": true,
   "height": null,
   "bin": 280,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Stazione di svuotamento automatico inclusa",
   "8.000 Pa con auto-boost sui tappeti",
   "Navigazione laser con mappatura",
   "Doppia spazzola anti-groviglio, utile con i peli"
  ],
  "cons": [
   "Panno passivo, non rotante",
   "La stazione svuota ma non lava i panni",
   "Valutazione media 4,0"
  ],
  "buyIf": "Chi vuole un roborock con autosvuotamento e mappatura senza spendere troppo.",
  "avoidIf": "Chi cerca il lavaggio con panni rotanti o una stazione che lavi i panni.",
  "asin": "B0DWMLMRWQ",
  "amazonTitle": "roborock Q7 L5+ Set Robot Aspirapolvere con Stazione Svuotamento Automatico | 8.000 Pa, Quantità d'acqua Regolabile per il Lavaggio, Doppio Anti-groviglio, Auto Boost sui Tappeti, Bianco",
  "imgs": [
   "https://m.media-amazon.com/images/I/611hEcZ5neL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/717JIss-KXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71fG-kvH5zL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71x8S9jiM+L._AC_SL1500_.jpg"
  ],
  "summary": "Versione della serie Q con stazione di svuotamento automatico: il cestello si scarica in un sacchetto e ci si dimentica dello svuotamento per settimane. Aspirazione 8.000 Pa con auto-boost sui tappeti, navigazione laser e superamento di soglie fino a 2 cm. Il lavaggio e affidato a un panno passivo con acqua regolabile, quindi buono per la polvere ma non per lo sporco secco.",
  "ean": null,
  "eanSource": null,
  "rating": 4,
  "reviews": 3216,
  "bsr": 3584,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ecovacs-deebot-t90-pro-omni",
  "v": "robot-aspirapolvere",
  "brand": "ECOVACS",
  "name": "Deebot T90 Pro Omni",
  "price": 529,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Lavaggio a rullo rotante OZMO con stazione completa e 30.000 Pa",
  "attrs": {
   "pa": 30000,
   "battery": null,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Rullo OZMO rotante che si autopulisce con acqua pulita",
   "Stazione OMNI: autosvuotamento, lavaggio e asciugatura del rullo",
   "Aspirazione dichiarata fino a 30.000 Pa",
   "Riconoscimento ostacoli AIVI 3D e spazzola ZeroTangle"
  ],
  "cons": [
   "Prezzo elevato",
   "Base recensioni ancora limitata"
  ],
  "buyIf": "Chi vuole il lavaggio a rullo rotante autopulente e una stazione che fa tutto.",
  "avoidIf": "Chi ha un budget limitato o vuole molte recensioni alle spalle.",
  "asin": "B0GK1RD2T7",
  "amazonTitle": "ECOVACS T90 PRO OMNI Robot Aspirapolvere Lavapavimenti OZMO ROLLER 30000Pa | Ricarica PowerBoost, TruEdge 3.0, Erogazione Automatica della Soluzione Detergente, Pulitura Automatica Istantanea, YIKO AI",
  "imgs": [
   "https://m.media-amazon.com/images/I/81cXtuIXJ2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81fI+tJKZhL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81-PAWuyVIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81xZ7yh-leL._AC_SL1500_.jpg"
  ],
  "summary": "Ammiraglia Ecovacs con lavaggio OZMO ROLLER, un rullo che ruota e si autopulisce con acqua pulita in continuo, piu aspirazione dichiarata fino a 30.000 Pa. La stazione OMNI integrata svuota il cestello, lava e asciuga il rullo. Navigazione AIVI 3D per evitare gli ostacoli e spazzola anti-groviglio ZeroTangle. E un prodotto costoso, con recensioni ancora poche ma positive.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 332,
  "bsr": 627,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "lefant-m3",
  "v": "robot-aspirapolvere",
  "brand": "Lefant",
  "name": "M3",
  "price": 299.99,
  "quality": 7.5,
  "checked": "2026-09-10",
  "tagline": "Doppio mocio rotante e stazione tutto-in-uno a meno di 300 euro",
  "attrs": {
   "pa": 12000,
   "battery": 220,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": 500,
   "carpetLift": true,
   "petBrush": null
  },
  "pros": [
   "Due mocio rotanti a 200 giri per un lavaggio attivo",
   "Stazione multifunzione tutto-in-uno",
   "Fino a 220 minuti di autonomia dichiarata",
   "Mocio sollevabili su tappeti e zone vietate"
  ],
  "cons": [
   "Marchio meno diffuso in assistenza",
   "Ecosistema app meno maturo dei big"
  ],
  "buyIf": "Chi vuole i panni rotanti e la stazione spendendo meno dei marchi top.",
  "avoidIf": "Chi preferisce assistenza e app dei marchi piu diffusi.",
  "asin": "B0GR9K97ZV",
  "amazonTitle": "Lefant M3 Robot Aspirapolvere Lavapavimenti con Mappatura, 12000Pa | Navigazione LiDAR dToF, Evitamento Ostacoli PSD, Svuotamento Riempimento, Lavaggio e Asciugatura Automatici",
  "imgs": [
   "https://m.media-amazon.com/images/I/71AWKjQDqcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71a8RKzNcDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71lkaQJU-7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71YKW3ifTtL._AC_SL1500_.jpg"
  ],
  "summary": "Lefant M3 porta i due mocio rotanti a 200 giri e la stazione multifunzione in una fascia di prezzo aggressiva. Aspirazione 12.000 Pa, autonomia dichiarata fino a 220 minuti e cestello da 500 ml. I mocio si sollevano nelle zone vietate e sui tappeti. Marchio meno blasonato dei big, ma con recensioni numerose e positive, media 4,4 su 5.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 2485,
  "bsr": 3173,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-magnifica-evo-next-ecam312",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "Magnifica Evo Next ECAM312.80.TB",
  "price": 569.9,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Automatica con macinacaffe e caraffa latte automatica",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "auto",
   "tank": 1.8,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Macinacaffe integrato, caffe macinato al momento",
   "Caraffa LatteCrema che monta il latte in automatico",
   "Serbatoio acqua ampio da 1,8 litri",
   "Interfaccia semplice per espresso e bevande al latte"
  ],
  "cons": [
   "Caraffa da pulire e conservare in frigo",
   "Prezzo medio-alto"
  ],
  "buyIf": "Chi vuole cappuccino automatico e macinatura al momento senza fatica.",
  "avoidIf": "Chi cerca il rito manuale o vuole spendere poco.",
  "asin": "B0D4ZNSQ6L",
  "amazonTitle": "De'Longhi Magnifica Evo Next ECAM312.80.TB, Macchina Caffè Automatica con Monta Latte Automatico, Macchina Chicchi per Caffè e Cappuccino con Display Touch Intuitivo, Nero/Titanio",
  "imgs": [
   "https://m.media-amazon.com/images/I/71IbG5nFvpL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71hbJin0UmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71QClxayoDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61x8h7VNjKL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina automatica da chicchi con macinacaffe integrato e caraffa del latte LatteCrema che monta il latte da sola per cappuccino e latte macchiato con un tasto. Serbatoio acqua da 1,8 litri. E la scelta senza pensieri per chi vuole caffe e bevande al latte al volo; la caraffa va risciacquata e riposta in frigo dopo l'uso.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 956,
  "bsr": 14451,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-ecam220-91b",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "ECAM220.91.B",
  "price": 344.2,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Automatica compatta con montalatte LatteCrema automatico",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "auto",
   "tank": null,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Montalatte LatteCrema automatico",
   "Macinacaffe integrato",
   "Corpo compatto",
   "Prezzo piu accessibile tra le automatiche con caraffa"
  ],
  "cons": [
   "Poche personalizzazioni",
   "Valutazione media 4,0"
  ],
  "buyIf": "Chi vuole un'automatica col cappuccino automatico spendendo meno.",
  "avoidIf": "Chi vuole molte ricette memorizzate o un display evoluto.",
  "asin": "B0FDGFJDZH",
  "amazonTitle": "De'Longhi ECAM220.91.B | Macchina Caffè, Montalatte Automatico LatteCrema Caldo, Espresso e Cappuccino, Comandi Touch a Icone Colorate, ECAM220.91.B",
  "imgs": [
   "https://m.media-amazon.com/images/I/61WGuBVcAFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71g6qYdKC9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71R0sMGiRYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71X7LAcpXcL._AC_SL1500_.jpg"
  ],
  "summary": "Automatica da chicchi piu compatta ed economica, con montalatte LatteCrema automatico per cappuccini con un tasto e macinacaffe integrato. Copre le bevande principali occupando poco spazio. Rispetto ai modelli superiori ha meno personalizzazioni e un display essenziale, ma la base di recensioni e ampia, oltre 1.400, con giudizio medio 4,0.",
  "ean": null,
  "eanSource": null,
  "rating": 4,
  "reviews": 1452,
  "bsr": 2335,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "philips-5500-lattego-ep5547",
  "v": "macchine-caffe",
  "brand": "Philips",
  "name": "5500 Series LatteGo EP5547/90",
  "price": 710.46,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Superautomatica con 20 bevande e sistema latte LatteGo",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "auto",
   "tank": 1.8,
   "costPerCup": null,
   "minutes": null,
   "width": 24.6
  },
  "pros": [
   "Sistema latte LatteGo a due pezzi, si lava in fretta",
   "Circa 20 bevande selezionabili",
   "Serbatoio acqua da 1,8 litri",
   "Larghezza contenuta, 24,6 cm"
  ],
  "cons": [
   "Prezzo elevato",
   "Manutenzione periodica del gruppo caffe"
  ],
  "buyIf": "Chi vuole tante bevande automatiche e un sistema latte facile da lavare.",
  "avoidIf": "Chi si accontenta di espresso e cappuccino e vuole spendere meno.",
  "asin": "B0CZ7D5DTQ",
  "amazonTitle": "Philips 5500 series LatteGo EP5547/90 Macchina caffè automatica, 20 bevande, cappuccinatore, 1.8 L, macine in ceramica (Philips EP5547/90 coffee maker Fully-a)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51TAvn-mCDL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/61awU9W2ViL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/51rHs3QQiaL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/512KxtnrOdL._AC_SL1200_.jpg"
  ],
  "summary": "Superautomatica da chicchi della serie 5500 con sistema LatteGo a due soli pezzi, facile da pulire, e circa 20 bevande selezionabili a display. Serbatoio acqua da 1,8 litri e larghezza contenuta di 24,6 cm. Fa la schiuma anche con bevande vegetali. E un gradino sopra la 3200 per numero di bevande e profili, con un prezzo di conseguenza piu alto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 1011,
  "bsr": 786844,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-ec260-bk",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "EC260.BK",
  "price": 99.9,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Manuale a 15 bar per macinato e cialde ESE, sotto i 100 euro",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "pannarello",
   "tank": 1,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Accetta sia macinato sia cialde ESE",
   "Pompa da 15 bar",
   "Lancia a vapore per il latte",
   "Prezzo di ingresso, sotto i 100 euro"
  ],
  "cons": [
   "Montatura del latte manuale",
   "Nessun macinacaffe integrato"
  ],
  "buyIf": "Chi vuole l'espresso col portafiltro spendendo poco e usa macinato o cialde ESE.",
  "avoidIf": "Chi vuole il caffe con un tasto o il cappuccino automatico.",
  "asin": "B085J8LBXF",
  "amazonTitle": "De'Longhi EC260.BK Macchina da Caffè Per Polvere o in Cialde E.S.E., Sistema Latte Manuale, Facile da usare, Serbatoio Estraibile da 1.1 L, Caldaia acciaio inox",
  "imgs": [
   "https://m.media-amazon.com/images/I/71qP14nL2cL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71TO1a+Nc7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71aZw1p4SjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7120moo8h4L._AC_SL1500_.jpg"
  ],
  "summary": "Macchina manuale a pompa da 15 bar che accetta sia caffe macinato sia cialde ESE, con lancia a vapore per montare il latte a mano. Serbatoio da 1 litro e comandi essenziali a una manopola. E la porta d'ingresso economica all'espresso vero: richiede un minimo di pratica per dosaggio e montatura, ma la base di recensioni e molto ampia e positiva.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 2711,
  "bsr": 706,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "lelit-anita-pl042temd",
  "v": "macchine-caffe",
  "brand": "Lelit",
  "name": "Anita PL042TEMD",
  "price": 747,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Prosumer con macinacaffe integrato per chi ama il rito",
  "attrs": {
   "type": "manuale",
   "grinder": true,
   "milk": "pannarello",
   "tank": 2.7,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Macinacaffe integrato",
   "Controllo temperatura TermoPID",
   "Lancia a vapore per il latte",
   "Serbatoio capiente da 2,7 litri"
  ],
  "cons": [
   "Richiede pratica e manutenzione",
   "Prezzo elevato",
   "Ingombro e peso non trascurabili"
  ],
  "buyIf": "Chi ama il rito dell'espresso e vuole macinacaffe e controllo manuale.",
  "avoidIf": "Chi vuole velocita e zero pensieri, o ha un budget contenuto.",
  "asin": "B00BS7RFA2",
  "amazonTitle": "Lelit PL042TEMD Anita, Macchina da caffè prosumer con macinacaffè Integrato e TermoPID, 1200 W, 2 Cups, Acciaio Inossidabile, Argento",
  "imgs": [
   "https://m.media-amazon.com/images/I/71DURKw9LcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61waQhwsOiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61va0KZH8ML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ruVGYh7UL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina manuale prosumer con macinacaffe integrato e controllo temperatura TermoPID, pensata per chi vuole gestire dose, macinatura e montatura del latte come al bar. Serbatoio capiente e lancia a vapore per il cappuccino. Richiede pratica e manutenzione, ma da il pieno controllo sull'estrazione; il prezzo e da appassionati.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 425,
  "bsr": 557751,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "nespresso-vertuo-up",
  "v": "macchine-caffe",
  "brand": "Nespresso",
  "name": "Vertuo Up",
  "price": 179.9,
  "quality": 6.5,
  "checked": "2026-09-10",
  "tagline": "Capsule Vertuo con piu formati tazza, dall'espresso al caffe lungo",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "none",
   "tank": 1.4,
   "costPerCup": null,
   "minutes": 1,
   "width": 12
  },
  "pros": [
   "Piu formati tazza, incluso il caffe lungo",
   "Riscaldamento rapido",
   "Serbatoio da 1,4 litri",
   "Uso immediato, una capsula e via"
  ],
  "cons": [
   "Nessun montalatte incluso",
   "Capsule Vertuo con reperibilita e costo legati a Nespresso",
   "Base recensioni ancora piccola"
  ],
  "buyIf": "Chi vuole caffe lungo oltre all'espresso, con la comodita delle capsule.",
  "avoidIf": "Chi vuole cappuccino integrato o teme il vincolo delle capsule Vertuo.",
  "asin": "B0GKH2LNW4",
  "amazonTitle": "Nespresso Vertuo Up – Macchina da Caffè in Capsule con 7 Formati di Tazza, Tecnologia Centrifusion, Riscaldamento Rapido, Serbatoio 1,4L, Modalità Creazioni, Design Compatto, Bianca (ENV200.W)",
  "imgs": [
   "https://m.media-amazon.com/images/I/719x1Z2S8hL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71whk-0BKLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71gsbWuu2ZL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81frwL7oT2L._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a capsule del sistema Vertuo, che con la tecnologia Centrifusion prepara diversi formati, dall'espresso al caffe lungo, riconoscendo la capsula tramite codice a barre. Serbatoio da 1,4 litri e riscaldamento rapido. Non include un montalatte, quindi per il cappuccino serve un accessorio a parte; le capsule Vertuo si acquistano quasi solo da Nespresso.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 54,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "olimpia-aquaria-slim-10-p",
  "v": "deumidificatori",
  "brand": "Olimpia Splendid",
  "name": "Olimpia Splendid Aquaria Slim 10 P",
  "price": 119,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Compatto e sottile per la stanza singola, con gas ecologico R290.",
  "attrs": {
   "liters": 10,
   "tank": 2,
   "area": null,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": 9.5,
   "wheels": true,
   "hygrostat": true,
   "power": 223
  },
  "pros": [
   "Design sottile e leggero, comodo negli spazi stretti",
   "Gas refrigerante naturale R290 a basso impatto",
   "Predisposizione allo scarico continuo e igrostato che spegne al raggiungimento dell'umidita'",
   "Prezzo sotto i 120 euro"
  ],
  "cons": [
   "Tanica piccola da 2 litri, va svuotata spesso",
   "Copertura dichiarata in m3 e non in m2, difficile da confrontare"
  ],
  "buyIf": "Cerchi un deumidificatore economico e poco ingombrante per una singola stanza o un bagno umido.",
  "avoidIf": "Devi coprire la zona giorno o piu' ambienti: 10 litri e tanica da 2 litri restano stretti.",
  "asin": "B07PN63FKP",
  "amazonTitle": "Olimpia Splendid, Aquaria Slim 10 P, Deumidificatore Portatile, Slim Design, Capacita' 10 l / 24h, Ideale per Ambienti fino a 45 m3, Trattamento dell'Aria, Tanica 2 l Estraibile, Timer 24h",
  "imgs": [
   "https://m.media-amazon.com/images/I/51q3z26+aGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61ek520buuL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61vH--yOlDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61dBVc6W2bL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore da 10 litri al giorno (misurati a 32 gradi e 29 di bulbo umido) pensato per una camera o un bagno. Il corpo sottile da 18,6 cm e le rotelle lo rendono facile da spostare. La tanica e' da 2 litri e c'e' la predisposizione allo scarico continuo. Il dato di copertura e' dichiarato in metri cubi (45 m3), non in metri quadri.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 6124,
  "bsr": 1932,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ariston-deos-evo-12",
  "v": "deumidificatori",
  "brand": "Ariston",
  "name": "Ariston Deos Evo 12",
  "price": 119,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Piccolo compressore da 12 litri con rotelle e funzione asciugatura.",
  "attrs": {
   "liters": 12,
   "tank": 1.85,
   "area": null,
   "noise": null,
   "drain": null,
   "laundry": true,
   "weight": 12,
   "wheels": true,
   "hygrostat": true,
   "power": 210
  },
  "pros": [
   "Umidostato regolabile che spegne al raggiungimento del livello",
   "Rotelle e peso gestibile per gli spostamenti",
   "Funzione asciugatura per il bucato",
   "Sotto i 120 euro"
  ],
  "cons": [
   "Serbatoio da 1,85 litri, autonomia breve senza scarico",
   "Copertura dichiarata in modo incoerente sulla scheda"
  ],
  "buyIf": "Vuoi un compressore vero (non a celle) sotto i 120 euro per una camera o un piccolo soggiorno.",
  "avoidIf": "Ti serve un dato di copertura certo o un serbatoio capiente per lunghe assenze.",
  "asin": "B0D9KKXDZL",
  "amazonTitle": "Ariston DEOS EVO 12 - Deumidificatore Portatile Casa 12L Ambienti Fino 35mq",
  "imgs": [
   "https://m.media-amazon.com/images/I/61iOBLf9ePL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71eQjY8IweL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81vOUXz-Z1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71G7WwzvanL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 12 litri al giorno con serbatoio da 1,85 litri, rotelle per spostarlo e umidostato che permette di impostare la percentuale desiderata. Ha la funzione asciugatura utile per il bucato in inverno. La pagina indica la copertura in modo contraddittorio (31 e 35 metri quadri), quindi il dato non e' riportato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 300,
  "bsr": 1279,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "comfee-mddf-16den7-wf",
  "v": "deumidificatori",
  "brand": "Comfee",
  "name": "Comfee' MDDF-16DEN7 WF 16L",
  "price": 139.9,
  "quality": 9,
  "checked": "2026-09-10",
  "tagline": "Il best seller da 16 litri con WiFi, per la zona giorno fino a 32 mq.",
  "attrs": {
   "liters": 16,
   "tank": 3,
   "area": 32,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": 15,
   "wheels": true,
   "hygrostat": true,
   "power": 430
  },
  "pros": [
   "Ottimo equilibrio tra capacita', prezzo e recensioni (4,5 su oltre 8000 voti)",
   "Controllo WiFi e compatibilita' Alexa",
   "Ruote piroettanti e tanica da 3 litri",
   "Predisposizione allo scarico continuo"
  ],
  "cons": [
   "Il tubo per lo scarico continuo non e' incluso",
   "Ingombro e peso da 15 kg tipici del compressore"
  ],
  "buyIf": "Vuoi il modello piu' collaudato per soggiorno o cucina fino a 32 mq, gestibile da app.",
  "avoidIf": "Ti serve un apparecchio da camera ultra silenzioso o per ambienti oltre i 40 mq.",
  "asin": "B07MQ2MFGC",
  "amazonTitle": "COMFEE' Deumidificatore Casa Muffa 16L/24h, Adatto fino a 32mq, Tanica da 3L, Deumidificazione Smart, Controllo WiFi, Compatibile con Alexa, Ruote Piroettanti, Timer, MDDF-16DEN7 WF",
  "imgs": [
   "https://m.media-amazon.com/images/I/51o1O6UT3DL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71mBh6nFxUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61MfI64ao4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71fTapwjdaL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 16 litri al giorno dichiarato per ambienti fino a 32 metri quadri, con tanica da 3 litri, ruote piroettanti e controllo WiFi compatibile con Alexa. L'igrostato regola in automatico l'umidita' e sono previsti due sistemi di drenaggio per lo scarico continuo. E' uno dei modelli piu' recensiti e ben valutati della categoria.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 8219,
  "bsr": 349,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "comfee-mddf-20den7-wf",
  "v": "deumidificatori",
  "brand": "Comfee",
  "name": "Comfee' MDDF-20DEN7-WF 20L",
  "price": 159.9,
  "quality": 9,
  "checked": "2026-09-10",
  "tagline": "Versione da 20 litri per ambienti fino a 40 mq, sempre con WiFi.",
  "attrs": {
   "liters": 20,
   "tank": 3,
   "area": 40,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": 15,
   "wheels": true,
   "hygrostat": true,
   "power": 440
  },
  "pros": [
   "20 litri al giorno per coprire fino a 40 mq",
   "Controllo WiFi con umidita' impostabile 35-85 per cento",
   "Modalita' asciugatura bucato e ruote piroettanti",
   "Migliaia di recensioni con media 4,4"
  ],
  "cons": [
   "Tubo di scarico continuo non incluso",
   "15 kg di peso, non pensato per spostamenti frequenti in scale"
  ],
  "buyIf": "Devi coprire una zona giorno ampia fino a 40 mq e vuoi gestione da app.",
  "avoidIf": "Ti basta una camera piccola: il 16 litri o un modello sotto i 120 euro bastano.",
  "asin": "B07MSL8YN7",
  "amazonTitle": "COMFEE' Deumidificatore Casa Muffa 20L/24h, Adatto fino a 40mq, Tanica da 3L, Deumidificazione Smart, Controllo WiFi, Compatibile con Alexa, Ruote Piroettanti, Timer, MDDF-20DEN7-WF",
  "imgs": [
   "https://m.media-amazon.com/images/I/51S9W45R-dL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71mBh6nFxUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61GGALucKjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71fTapwjdaL._AC_SL1500_.jpg"
  ],
  "summary": "Fratello maggiore del 16 litri: rimuove fino a 20 litri al giorno ed e' dichiarato per stanze fino a 40 metri quadri. Mantiene tanica da 3 litri, ruote piroettanti, controllo via app con range di umidita' impostabile dal 35 all'85 per cento e modalita' asciugatura per il bucato. Lo scarico continuo e' previsto ma il tubo va acquistato a parte.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 6826,
  "bsr": 349,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ariston-deos-16net",
  "v": "deumidificatori",
  "brand": "Ariston",
  "name": "Ariston Deos 16NET",
  "price": 165.49,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "16 litri con WiFi e funzione lavanderia, coertura dichiarata 44 mq.",
  "attrs": {
   "liters": 16,
   "tank": 3,
   "area": 44,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": 15,
   "wheels": true,
   "hygrostat": true,
   "power": 330
  },
  "pros": [
   "Copertura dichiarata ampia fino a 44 mq",
   "WiFi integrato con telecomando e app",
   "Funzione lavanderia e predisposizione scarico continuo",
   "Media 4,4 su oltre 700 recensioni"
  ],
  "cons": [
   "Tubo di scarico condensa non incluso",
   "Costa piu' del Comfee 16 a pari capacita'"
  ],
  "buyIf": "Vuoi 16 litri con app e telecomando per un soggiorno fino a 44 mq.",
  "avoidIf": "Cerchi il prezzo piu' basso a pari litri o un modello silenzioso da notte.",
  "asin": "B084QW32YT",
  "amazonTitle": "Ariston Deos 16NET - Deumidificatore Portatile Casa 16L Ambienti Fino a 44mq",
  "imgs": [
   "https://m.media-amazon.com/images/I/61hfmY+M4lL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71fyYphN2tL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71F9PhfuYkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Nv16-x8WL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 16 litri al giorno dichiarato fino a 44 metri quadri, con WiFi integrato e controllo da smartphone, telecomando incluso e funzione lavanderia per asciugare il bucato. La tanica e' da 3 litri con predisposizione al tubo di scarico condensa (non incluso). Alternativa italiana ai Comfee per la zona giorno.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 742,
  "bsr": 1279,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-tasciugo-ariadry-multi-ddsx225",
  "v": "deumidificatori",
  "brand": "De'Longhi",
  "name": "De'Longhi Tasciugo AriaDry Multi DDSX225",
  "price": 329.9,
  "quality": 9,
  "checked": "2026-09-10",
  "tagline": "25 litri De'Longhi con scarico continuo e filtro antibatterico.",
  "attrs": {
   "liters": 25,
   "tank": 5,
   "area": null,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": null,
   "wheels": true,
   "hygrostat": true,
   "power": 460
  },
  "pros": [
   "25 litri al giorno, adatto a spazi grandi e umidita' persistente",
   "Scarico continuo dichiarato e serbatoio capiente da 5 litri",
   "Filtro antibatterico certificato per chi soffre di allergie",
   "Marchio De'Longhi con media 4,5"
  ],
  "cons": [
   "Prezzo elevato oltre i 300 euro",
   "Rumorosita' non quantificata in dB, non ideale in camera"
  ],
  "buyIf": "Devi asciugare una taverna, un piano intero o combattere umidita' forte con scarico continuo.",
  "avoidIf": "Ti serve un apparecchio economico o silenzioso per una singola camera.",
  "asin": "B07NH26T31",
  "amazonTitle": "De'Longhi Tasciugo AriaDry Multi - Deumidificatore Casa Portatile, Assorbi Umidita' 25L/Giorno, Asciugabiancheria, Antimuffa, Bassa Rumorosita', Timer, Bianco (DDSX225)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51bmgJ+ZBHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61TYkWcEIOL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71oln--TrvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71cTGxiQKfL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore potente da 25 litri al giorno (misurati a 30 gradi e 80 per cento di umidita') per spazi grandi, taverne e case umide. Ha serbatoio da 5 litri, scarico continuo indicato come caratteristica speciale, ruote, umidostato che spegne l'unita' al livello impostato e filtro certificato Asthma & Allergy Friendly. La rumorosita' e' dichiarata solo come bassa, senza valore in dB.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 1706,
  "bsr": 10502,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "olimpia-aquaria-s1-24-p",
  "v": "deumidificatori",
  "brand": "Olimpia Splendid",
  "name": "Olimpia Splendid Aquaria S1 24 P",
  "price": 249,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "24 litri con tripla filtrazione HEPA e WiFi, per tutta la casa.",
  "attrs": {
   "liters": 24,
   "tank": 5,
   "area": null,
   "noise": null,
   "drain": null,
   "laundry": true,
   "weight": 15,
   "wheels": true,
   "hygrostat": true,
   "power": 196
  },
  "pros": [
   "24 litri al giorno con consumo dichiarato contenuto (196 W)",
   "Tripla filtrazione dell'aria con HEPA",
   "WiFi integrato, display touch e ruote piroettanti",
   "Serbatoio ampio da 5 litri"
  ],
  "cons": [
   "Copertura dichiarata in m3 e non in m2",
   "Media recensioni (4,2) piu' bassa dei Comfee e del De'Longhi"
  ],
  "buyIf": "Vuoi tanta capacita' e filtrazione dell'aria per una casa intera, con gestione da app.",
  "avoidIf": "Cerchi un dato di copertura in metri quadri o la valutazione piu' alta possibile.",
  "asin": "B098T5G96Y",
  "amazonTitle": "Olimpia Splendid, Aquaria S1 24 P, Deumidificatore Portatile, Capacita' 24 l / 24h, Ideale per Ambienti fino a 100 m3, Tripla Filtrazione dell'Aria, Tanica 5 l Estraibile, Timer 24h, Wifi Integrato",
  "imgs": [
   "https://m.media-amazon.com/images/I/51luK5I2-0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Oh9kWhxkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81+ZvcJ2R4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/512VTQHWSwL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore da 24 litri al giorno dichiarato per ambienti fino a 100 metri cubi, con tanica estraibile da 5 litri, ruote piroettanti, WiFi integrato, display touch e umidostato che spegne al raggiungimento del valore. Aggiunge una tripla filtrazione dell'aria (pre-filtro, carboni attivi e HEPA). La copertura e' data in m3, non in m2.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 6124,
  "bsr": 20065,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-tasciugo-ariadry-light-dns65",
  "v": "deumidificatori",
  "brand": "De'Longhi",
  "name": "De'Longhi Tasciugo AriaDry Light DNS65",
  "price": 239.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Zeolite senza compressore: 34 dB(A) dichiarati, il piu' adatto alla camera.",
  "attrs": {
   "liters": 6,
   "tank": 2.8,
   "area": null,
   "noise": 34,
   "drain": null,
   "laundry": true,
   "weight": 6.5,
   "wheels": null,
   "hygrostat": true,
   "power": 520
  },
  "pros": [
   "Rumorosita' dichiarata a 34 dB(A), adatto alla notte in camera",
   "Tecnologia zeolite che lavora bene anche a basse temperature",
   "Ionizzatore, umidostato e funzione asciugabiancheria",
   "Leggero, 6,5 kg"
  ],
  "cons": [
   "Solo 6 litri al giorno, non per spazi grandi",
   "Consumo 520 W piu' alto rispetto a un compressore a pari litri"
  ],
  "buyIf": "Vuoi tenerlo acceso di notte in camera dove il rumore conta piu' della capacita'.",
  "avoidIf": "Devi deumidificare una zona giorno o una taverna: 6 litri sono pochi.",
  "asin": "B07HGC612Y",
  "amazonTitle": "De'Longhi Tasciugo AriaDry Light - Deumidificatore Casa Portatile, Tecnologia Zeolite e Ionizzatore, 6L/Giorno, Asciugabiancheria, Antimuffa, Silenzioso, Funzione Swing, Timer, Grigio (DNS65)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51jFx4wOhJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61D4xZduHNL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71DZEqMXS-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/615upeeLydL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a zeolite (senza compressore) da 6 litri al giorno, dichiarato ultra silenzioso a soli 34 dB(A): e' la scelta pensata per la camera da letto e per l'uso notturno. Include ionizzatore, umidostato con step del 5 per cento, funzione swing, timer e modalita' asciugabiancheria. Leggero (6,5 kg) ma con consumo piu' alto tipico della tecnologia a zeolite.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 3933,
  "bsr": 12025,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "meaco-meacodry-abc-10lb",
  "v": "deumidificatori",
  "brand": "Meaco",
  "name": "Meaco MeacoDry ABC 10LB",
  "price": 169.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Compressore da 10 litri dichiarato a 35 dB, silenzioso e a basso consumo.",
  "attrs": {
   "liters": 10,
   "tank": null,
   "area": null,
   "noise": 35,
   "drain": true,
   "laundry": true,
   "weight": null,
   "wheels": false,
   "hygrostat": true,
   "power": 160
  },
  "pros": [
   "Rumorosita' dichiarata a 35 dB pur essendo a compressore",
   "Umidostato regolabile e modalita' lavanderia a spegnimento automatico",
   "Tubo per scarico continuo incluso",
   "Consumo basso, 160 W"
  ],
  "cons": [
   "Prezzo alto per soli 10 litri al giorno",
   "Nessuna ruota per gli spostamenti"
  ],
  "buyIf": "Vuoi un compressore silenzioso da camera con scarico continuo gia' incluso.",
  "avoidIf": "Cerchi molta capacita' per euro o la comodita' delle ruote.",
  "asin": "B085D5MGX6",
  "amazonTitle": "Meaco MeacoDry ABC 10LB - Deumidificatore Ultra Silenzioso 35 dB, Funzione asciugatrice, Design Compatto, A Basso Consumo Energetico, 160 W, 240 V, Bianco con Pannello superiore Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61sIsv8h0ZL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71GrBf-qeaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61lAa9hVN9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81a2CDFyH8L._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 10 litri al giorno dichiarato ultra silenzioso a 35 dB, con umidostato regolabile tra il 30 e il 70 per cento, modalita' lavanderia che lavora al massimo per sei ore e poi si spegne, e consumo contenuto (160 W). Include il tubo per lo scarico continuo. Non ha ruote ma e' compatto e facile da sollevare. Marchio britannico specializzato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 242,
  "bsr": 952025,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "pro-breeze-20l-intelligente",
  "v": "deumidificatori",
  "brand": "Pro Breeze",
  "name": "Pro Breeze Deumidificatore Intelligente 20L",
  "price": 199.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "20 litri con app, scarico continuo e modalita' notturna.",
  "attrs": {
   "liters": 20,
   "tank": null,
   "area": null,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": 13.5,
   "wheels": true,
   "hygrostat": true,
   "power": null
  },
  "pros": [
   "20 litri al giorno per stanze medio-grandi",
   "Controllo da app e voce (Alexa e Google Home)",
   "Scarico continuo, modalita' notturna e ruote piroettanti",
   "Umidostato impostabile 30-80 per cento"
  ],
  "cons": [
   "Meno recensioni rispetto ai modelli piu' consolidati",
   "Serbatoio e potenza non dichiarati con chiarezza sulla scheda"
  ],
  "buyIf": "Vuoi 20 litri gestibili da app con scarico continuo per una stanza medio-grande.",
  "avoidIf": "Preferisci un modello con piu' storico di recensioni o dati tecnici completi.",
  "asin": "B0F13WH9MZ",
  "amazonTitle": "Deumidificatore Intelligente 20L Pro Breeze con Display Digitale dell'Umidita', Modalita' Notturna, Scarico Continuo, Asciugatura Bucato e Timer 24 Ore - Ideale contro Umidita' e Condensa",
  "imgs": [
   "https://m.media-amazon.com/images/I/61Xxgso9JPL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61uW-PeB8LL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61dEzjnFReL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71cn7dOJVmL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 20 litri al giorno con display digitale, comandi touch, controllo via app Pro Breeze e voce tramite Alexa e Google Home. Ha scarico continuo, ruote piroettanti, modalita' notturna e asciugatura bucato, con umidita' impostabile tra 30 e 80 per cento. Pensato per stanze medio-grandi come alternativa smart ai Comfee.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 424,
  "bsr": 18709,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "songmics-obg71b-direzionale-ecopelle-poggiapiedi",
  "v": "sedie-ergonomiche",
  "brand": "SONGMICS",
  "name": "SONGMICS OBG71B Direzionale con poggiapiedi",
  "price": 115.59,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Poltrona direzionale in ecopelle con schienale alto e poggiagambe estraibile.",
  "attrs": {
   "lumbar": null,
   "headrest": null,
   "armrests": 2,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "pu",
   "recline": 135,
   "footrest": true,
   "seatDepthAdj": false
  },
  "pros": [
   "Schienale alto imbottito e ampio, comodo per le pause lunghe",
   "Poggiagambe estraibile e inclinazione bloccabile fino a 135 gradi",
   "Portata 150 kg con parti certificate BIFMA",
   "Oltre 7000 recensioni, prezzo contenuto"
  ],
  "cons": [
   "Braccioli fissi non regolabili",
   "La similpelle scalda d'estate rispetto alla rete"
  ],
  "buyIf": "Vuoi una poltrona direzionale classica in ecopelle, con schienale alto e possibilita' di reclinare e allungare le gambe.",
  "avoidIf": "Cerchi braccioli regolabili o una seduta traspirante in rete per l'estate.",
  "asin": "B01HAVJUNO",
  "amazonTitle": "SONGMICS Poltrona Girevole con Poggiagambe Sedia Direzionale Ergonomica da Ufficio Studio Regolabile con Rotelle OBG71B",
  "imgs": [
   "https://m.media-amazon.com/images/I/61b+iDqnaHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81premc0cyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XZtCb08EL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71pIGPv+lAL._AC_SL1500_.jpg"
  ],
  "summary": "Poltrona da ufficio con rivestimento in similpelle PU facile da pulire, schienale alto imbottito da 76 cm e seduta regolabile in altezza da 45 a 55 cm. Lo schienale si inclina e si blocca fino a 135 gradi e sotto la seduta c'e' un poggiagambe estraibile per le pause. Portata dichiarata 150 kg con componenti certificati BIFMA.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 7389,
  "bsr": 26281,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "protoarc-ec200-pro-rete-profondita-regolabile",
  "v": "sedie-ergonomiche",
  "brand": "ProtoArc",
  "name": "ProtoArc EC200 Pro in rete",
  "price": 249.99,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Sedia in rete con profondita' della seduta regolabile e braccioli 4D.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 4,
   "maxWeight": 100,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 145,
   "footrest": false,
   "seatDepthAdj": true
  },
  "pros": [
   "Profondita' della seduta regolabile, rara sotto i 250 euro",
   "Braccioli 4D e lombare regolabile in due direzioni",
   "Rete traspirante su seduta e schienale",
   "Poggiatesta 3D regolabile"
  ],
  "cons": [
   "Poche recensioni al momento",
   "Portata dichiarata 100 kg, non per corporature molto robuste"
  ],
  "buyIf": "Passi molte ore alla scrivania e vuoi adattare la profondita' della seduta oltre a braccioli e lombare, restando sotto i 250 euro.",
  "avoidIf": "Pesi oltre 100 kg o preferisci l'imbottitura morbida di una gaming in ecopelle.",
  "asin": "B0GT9F3TZ5",
  "amazonTitle": "ProtoArc EC200 Pro Sedia Ufficio Ergonomica in Rete con Braccioli 4D",
  "imgs": [
   "https://m.media-amazon.com/images/I/61ZXQzuxJDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71t7DVYuCcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/718m-qaqjVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71qJwXkCm4L._AC_SL1500_.jpg"
  ],
  "summary": "Sedia operativa interamente in rete traspirante con seduta regolabile in profondita', braccioli 4D (altezza, avanti-indietro, laterale e rotazione), supporto lombare regolabile in due direzioni e poggiatesta 3D. Lo schienale reclina e si blocca in quattro posizioni fino a 145 gradi. Conforme agli standard BS EN 1335 e BIFMA X5.1 con pistone Classe 4 certificato TUV.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 31,
  "bsr": 228733,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "noblechairs-hero-gaming-ecopelle",
  "v": "sedie-ergonomiche",
  "brand": "noblechairs",
  "name": "noblechairs HERO",
  "price": 439.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Gaming chair premium con seduta ampia e braccioli 4D.",
  "attrs": {
   "lumbar": "adj",
   "headrest": null,
   "armrests": 4,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "pu",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": false
  },
  "pros": [
   "Seduta e schienale ampi, adatti anche a corporature grandi",
   "Braccioli 4D e lombare regolabile integrato",
   "Portata 150 kg e costruzione robusta",
   "Marca nota nel gaming di fascia alta"
  ],
  "cons": [
   "Prezzo elevato",
   "Ecopelle meno traspirante della rete d'estate"
  ],
  "buyIf": "Vuoi una gaming chair di marca riconosciuta, ampia e robusta, da usare anche come poltrona da lavoro.",
  "avoidIf": "Hai un budget contenuto o preferisci una seduta in rete traspirante.",
  "asin": "B079X1RZ56",
  "amazonTitle": "noblechairs HERO Sedia da gaming - Sedia da ufficio - Sedia da scrivania - PU Ecopelle - Design da corsa - Nero / Rosso",
  "imgs": [
   "https://m.media-amazon.com/images/I/51gT3vS56iL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/711BlgDWiWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714WOmNdHsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41SiWt9hkML._AC_SL1000_.jpg"
  ],
  "summary": "Sedia gaming e da ufficio della serie HERO, sviluppata con giocatori eSport, con rivestimento in PU vegan traspirante, seduta e schienale larghi, supporto lombare regolabile integrato e braccioli flessibili 4D. Struttura robusta con portata fino a 150 kg e meccanismo di oscillazione. Marca affermata nel segmento delle sedie da gioco premium.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 191,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "songmics-rete-poggiapiedi-senza-braccioli",
  "v": "sedie-ergonomiche",
  "brand": "SONGMICS",
  "name": "SONGMICS sedia in rete senza braccioli",
  "price": 129.99,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Sedia in rete senza braccioli, compatta, con poggiapiedi regolabile.",
  "attrs": {
   "lumbar": null,
   "headrest": false,
   "armrests": 0,
   "maxWeight": 120,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": true,
   "seatDepthAdj": false
  },
  "pros": [
   "Senza braccioli, entra sotto scrivanie piccole",
   "Poggiapiedi regolabile incluso",
   "Ampia escursione in altezza (20 cm)",
   "Schienale e seduta in rete traspirante"
  ],
  "cons": [
   "Nessun supporto lombare regolabile",
   "Senza braccioli, meno adatta a chi vuole appoggiare gli avambracci"
  ],
  "buyIf": "Hai poco spazio e vuoi una sedia in rete compatta senza braccioli, con poggiapiedi, per scrivanie o piani alti.",
  "avoidIf": "Ti servono braccioli o un supporto lombare regolabile per le ore lunghe.",
  "asin": "B07DB6D62G",
  "amazonTitle": "SONGMICS Sedia da Ufficio, Sedia a Rete Girevole, Altezza Regolabile",
  "imgs": [
   "https://m.media-amazon.com/images/I/714Rgr-RvxL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/719M1ZRz+eL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71m5cBUvY6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Av6W+TuYL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia da ufficio in rete senza braccioli, pensata per infilarsi sotto scrivanie piccole e per chi la usa in cucina, studio o laboratorio. Ha seduta ergonomica in schiuma reflex, poggiapiedi regolabile, rotazione a 360 gradi ed escursione in altezza di 20 cm. Portata dichiarata 120 kg e montaggio in circa 10 minuti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 859,
  "bsr": 8931,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "sundpey-avvitatore-impulsi-21v-2batterie",
  "v": "utensili-elettrici",
  "brand": "Sundpey",
  "name": "Sundpey avvitatore a impulsi 21V",
  "price": 99.99,
  "quality": 6,
  "checked": "2026-09-10",
  "tagline": "Avvitatore a impulsi brushless da 1/2 pollice con due batterie 4.0Ah incluse.",
  "attrs": {
   "torque": 1300,
   "volts": 21,
   "percussion": false,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": null,
   "eco": null,
   "impact": true
  },
  "pros": [
   "Due batterie 4.0Ah e caricabatterie inclusi",
   "Coppia elevata dichiarata (1300 Nm) e motore brushless",
   "Tre velocita', modalita' RSS e luce LED",
   "Cassetta e accessori nel prezzo"
  ],
  "cons": [
   "Marca poco nota, meno recensioni",
   "E' una chiave a impulsi, non un trapano per forare muri"
  ],
  "buyIf": "Vuoi una chiave a impulsi potente gia' completa di due batterie per meccanica, gomme e fissaggi pesanti.",
  "avoidIf": "Ti serve forare muratura o preferisci un ecosistema di batterie di marca affermata.",
  "asin": "B0FX4VL29M",
  "amazonTitle": "Avvitatore a Impulsi 1300Nm, 21V Avvitatore ad Impulsi 1/2\", con2 Batterie 4.0Ah, Motore Brushless e 3 Velocita' + Modalita' RSS, Cassetta & Accessori, Per Auto, Cantieri & Fai da Te",
  "imgs": [
   "https://m.media-amazon.com/images/I/71NO9uWAeFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71-75FHZsiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714SCZWpW-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XicUUQ8KL._AC_SL1500_.jpg"
  ],
  "summary": "Avvitatore a impulsi con attacco da 1/2 pollice, motore brushless e coppia dichiarata fino a 1300 Nm, pensato per bulloni, cambio gomme e lavori pesanti. Il kit include due batterie 21V da 4.0Ah, caricabatterie rapido, tre velocita' con modalita' RSS e luce LED, il tutto in cassetta. Marca non blasonata ma buon valore, con batterie gia' comprese.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 74,
  "bsr": 2497,
  "bsrCat": "Fai da te"
 },
 {
  "id": "bosch-universalimpact-730-filo",
  "v": "utensili-elettrici",
  "brand": "Bosch",
  "name": "Bosch UniversalImpact 730",
  "price": 70.9,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Trapano a percussione a filo Bosch, semplice e affidabile, sotto i 75 euro.",
  "attrs": {
   "torque": 17,
   "volts": 0,
   "percussion": true,
   "sds": false,
   "brushless": false,
   "batteryIncl": false,
   "weight": 2.09,
   "eco": null,
   "impact": false
  },
  "pros": [
   "A filo, sempre pronto senza pensare alle batterie",
   "Marca affidabile e mandrino autoserrante",
   "Preselezione dei giri per materiale",
   "Custodia e impugnatura ausiliaria incluse"
  ],
  "cons": [
   "Coppia contenuta, non per lavori gravosi",
   "Il cavo limita la liberta' di movimento"
  ],
  "buyIf": "Vuoi un trapano a percussione a filo economico e affidabile per forare muri normali, legno e metallo in casa.",
  "avoidIf": "Devi forare cemento armato o cerchi liberta' di movimento a batteria.",
  "asin": "B0CBTZ7F57",
  "amazonTitle": "Bosch Home and Garden Trapano battente elettrico UniversalImpact 730 (foratura di precisione in muratura, legno e acciaio; motore da Watt; custodia per il trasporto)",
  "imgs": [
   "https://m.media-amazon.com/images/I/61U4mbV-tEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81wEpqNOBGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61RcT+iiCAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71UEwj1TwVL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano battente elettrico a filo della linea Universal di Bosch, adatto a forare muratura fino a 14 mm, legno fino a 30 mm e acciaio. Ha preselezione del numero di giri, mandrino autoserrante con Autolock e pesa circa 2 kg. In dotazione impugnatura supplementare, limitatore di profondita' e custodia. Coppia massima dichiarata 17 Nm.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 208,
  "bsr": 6185,
  "bsrCat": "Fai da te"
 },
 {
  "id": "dewalt-dck266p2-combo-2batterie",
  "v": "utensili-elettrici",
  "brand": "DeWalt",
  "name": "DeWalt DCK266P2 combo trapano + impulsi",
  "price": 335.24,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Kit combo 18V XR: trapano a percussione e avvitatore a impulsi con 2 batterie 5Ah.",
  "attrs": {
   "torque": 205,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": 3.5,
   "eco": "DeWalt XR",
   "impact": true
  },
  "pros": [
   "Due utensili brushless (trapano + impulsi) in un solo kit",
   "Due batterie XR da 5.0Ah e valigetta incluse",
   "Avvitatore a impulsi potente (205 Nm)",
   "Ecosistema DeWalt XR molto diffuso"
  ],
  "cons": [
   "Prezzo importante",
   "Il trapano non fora cemento armato come un tassellatore SDS"
  ],
  "buyIf": "Vuoi partire con trapano e avvitatore a impulsi di marca, brushless, gia' con due batterie da 5Ah.",
  "avoidIf": "Ti serve un solo utensile o hai un budget ridotto.",
  "asin": "B01EWNGZ4U",
  "amazonTitle": "DEWALT Kit Combo Brushless 18V XR con 2 Batterie 5Ah, DCK266P2-QW",
  "imgs": [
   "https://m.media-amazon.com/images/I/81RlpzUruvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81x2VkLAClL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81c3T1OuyLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81WUc4Ov5xL._AC_SL1500_.jpg"
  ],
  "summary": "Kit doppio DeWalt 18V XR con trapano a percussione brushless DCD796 e avvitatore a impulsi DCF887 da 205 Nm, fino a 3250 giri e 3800 colpi al minuto. Include due batterie da 5.0Ah, caricabatterie e valigetta. Il trapano ha controllo coppia a 15 posizioni e cambio a due velocita', ideale per chi vuole entrambi gli utensili nell'ecosistema XR.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 707,
  "bsr": 5974,
  "bsrCat": "Fai da te"
 },
 {
  "id": "einhell-te-cd-1844-batteria",
  "v": "utensili-elettrici",
  "brand": "Einhell",
  "name": "Einhell TE-CD 18/44 Li-i",
  "price": 75.64,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Trapano avvitatore a percussione Einhell con batteria inclusa, sotto i 100 euro.",
  "attrs": {
   "torque": 44,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": false,
   "batteryIncl": true,
   "weight": 1.59,
   "eco": "Einhell Power X-Change",
   "impact": false
  },
  "pros": [
   "Batteria 2.5Ah e caricabatterie gia' inclusi",
   "Ecosistema Power X-Change molto ampio",
   "Leggero (1.6 kg) e con luce LED",
   "Ottimo rapporto qualita'-prezzo, tante recensioni"
  ],
  "cons": [
   "Motore con spazzole, non brushless",
   "Coppia adatta al fai da te, non a usi professionali intensi"
  ],
  "buyIf": "Parti da zero e vuoi un trapano avvitatore a batteria economico e affidabile, con la batteria gia' inclusa.",
  "avoidIf": "Cerchi un motore brushless o coppie da uso professionale quotidiano.",
  "asin": "B0DDXZMYF2",
  "amazonTitle": "Einhell Trapano avvitatore percussione a batteria TE-CD 18/44 Li-i (1x2.Ah)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71U0Z8uUW7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81X94uYTzTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71UArC2xhYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71HX-2uzSWL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano avvitatore a percussione della famiglia Einhell Power X-Change, con batteria da 2.5Ah e caricabatterie inclusi. Ha trasmissione a due velocita', 44 Nm di coppia con 21 livelli, mandrino autoserrante in metallo da 13 mm, regolazione elettronica dei giri e luce LED. Pesa circa 1.6 kg e le batterie sono intercambiabili con tutta la gamma PXC.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 1441,
  "bsr": 3060,
  "bsrCat": "Fai da te"
 },
 {
  "id": "marcapiuma-rainbow-h2-memory-160x190",
  "v": "materassi",
  "brand": "Marcapiuma",
  "name": "Marcapiuma Rainbow H2 memory",
  "price": 226.99,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Memory matrimoniale morbido-medio H2, alto 21 cm, made in Italy.",
  "attrs": {
   "type": "memory",
   "firmness": 5,
   "cooling": null,
   "motion": null,
   "edge": null,
   "height": 21,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Accoglienza morbida-media, adatta a chi dorme di fianco",
   "Sfoderabile e reversibile con lato piu' fresco",
   "Certificazioni CertiPur e Oeko-Tex, made in Italy",
   "Oltre 2000 recensioni sotto i 230 euro"
  ],
  "cons": [
   "Altezza 21 cm, non tra i piu' spessi",
   "Nessun sistema di raffrescamento attivo dichiarato"
  ],
  "buyIf": "Vuoi un memory matrimoniale morbido-medio (H2), sfoderabile e certificato, spendendo poco.",
  "avoidIf": "Preferisci un materasso rigido e sostenuto o molto alto.",
  "asin": "B00JQ39GFM",
  "amazonTitle": "Marcapiuma Materasso Matrimoniale Memory 160x190 alto 21 cm RAINBOW H2 Medio Dispositivo Medico Ortopedico Massaggio Relax Rivestimento ALOE VERA Sfoderabile Antiacaro Traspirante 100% Made in Italy",
  "imgs": [
   "https://m.media-amazon.com/images/I/61mfKxErgWL._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/611HUCZud0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51sfWO0huqL._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/51xvUiPOKyL._AC_SL1100_.jpg"
  ],
  "summary": "Materasso matrimoniale in memory foam alto 21 cm, con grado di rigidita' dichiarato 5 su 10 sul lato memory (accogliente, H2) e un lato piu' fresco in waterfoam da 6 su 10. Rivestimento in Aloe Vera sfoderabile su tre lati, antiacaro e traspirante. Dispositivo medico di classe 1, materie prime certificate CertiPur e Oeko-Tex, garanzia 10 anni, prodotto in Italia.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 2138,
  "bsr": 181661,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "vimavi-sirius-blugel-ibrido-160x190",
  "v": "materassi",
  "brand": "vimavì",
  "name": "vimavì Sirius molle e BluGel",
  "price": 438.99,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Ibrido a 800 molle insacchettate con memory BluGel termoregolante.",
  "attrs": {
   "type": "ibrido",
   "firmness": 6,
   "cooling": 8,
   "motion": 8,
   "edge": null,
   "height": 26,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Sistema in gel BluGel per un riposo piu' fresco",
   "800 molle insacchettate, buona indipendenza dei movimenti",
   "Sfoderabile e anallergico, con cuscini omaggio",
   "Fascia media di rigidita', adatta a molti"
  ],
  "cons": [
   "Prezzo piu' alto della media Amazon",
   "Nessun periodo di prova a domicilio dichiarato"
  ],
  "buyIf": "Soffri il caldo di notte e vuoi un ibrido molle piu' memory con gel termoregolante e buona indipendenza di coppia.",
  "avoidIf": "Cerchi la spesa minima o preferisci un memory tradizionale senza molle.",
  "asin": "B0CS3H4XKD",
  "amazonTitle": "vimavì Materasso Matrimoniale Molle Insacchettate e Memory Foam BluGel 160x190 - H26/27 cm - Disp. Medico - Sfoderabile e Anallergico - Coppia Cuscini Omaggio - Termoregolante - Made in Italy - SIRIUS",
  "imgs": [
   "https://m.media-amazon.com/images/I/71iHaFefXCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Yguy6nRHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81TBJKPAmmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81fsLrE0Y+L._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale ibrido con 800 molle insacchettate abbinate a memory foam BluGel, uno strato in gel schiumato ad acqua che dissipa il calore per un microclima piu' fresco. Alto circa 26 cm, con fodera in tessuto Torino sfoderabile, imbottitura anallergica da 300 gr/mq e coppia di cuscini in omaggio. Dispositivo medico, made in Italy.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 162,
  "bsr": 17425,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "cosmos-gamma-30cm-alto-160x190",
  "v": "materassi",
  "brand": "Cosmos",
  "name": "Cosmos Gamma alto 30 cm",
  "price": 249.38,
  "quality": 6,
  "checked": "2026-09-10",
  "tagline": "Materasso alto 30 cm in schiuma ad alta densita', sostegno rigido.",
  "attrs": {
   "type": "memory",
   "firmness": 8,
   "cooling": null,
   "motion": null,
   "edge": null,
   "height": 30,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Spessore generoso di 30 cm",
   "Sostegno rigido e stabile, buona indipendenza di movimento",
   "Sostegno a 7 zone con lattice nel rivestimento",
   "Produzione europea certificata"
  ],
  "cons": [
   "Rigido, poco adatto a chi cerca morbidezza",
   "Nessun sistema di raffrescamento dichiarato"
  ],
  "buyIf": "Vuoi un materasso molto alto e ben sostenuto, con sostegno rigido a 7 zone.",
  "avoidIf": "Dormi di fianco e preferisci un materasso morbido e avvolgente.",
  "asin": "B0CV8RL9CW",
  "amazonTitle": "COSMOS - Matrimoniale Materasso 160x190 cm - Alto 30 cm",
  "imgs": [
   "https://m.media-amazon.com/images/I/81gNlgZRBWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61jfYDAOy0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/815zxSgCLcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ndA2FxTAL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale alto 30 cm con nucleo in schiuma poliuretanica ad alta densita' pensato per un sostegno rigido e stabile, con lattice bialveolare nel rivestimento per un supporto ergonomico a 7 zone. Materasso reversibile, prodotto in Europa con tessuti certificati privi di sostanze nocive e 5 anni di garanzia.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 154,
  "bsr": 26331,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "vesgantti-ibrido-160x190-termoregolante",
  "v": "materassi",
  "brand": "Vesgantti",
  "name": "Vesgantti ibrido 26 cm",
  "price": 255.99,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Ibrido a molle insacchettate con schiuma termoregolante, sostegno a 7 zone.",
  "attrs": {
   "type": "ibrido",
   "firmness": 6,
   "cooling": 7,
   "motion": 8,
   "edge": null,
   "height": 26,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Molle insacchettate per buona indipendenza in coppia",
   "Schiuma termoregolante per un clima piu' equilibrato",
   "Sostegno a 7 zone, rigidita' media",
   "Certificato Oeko-Tex Standard 100"
  ],
  "cons": [
   "Nessun periodo di prova a domicilio dichiarato",
   "Recensioni ancora poco numerose"
  ],
  "buyIf": "Dormi in due e vuoi un ibrido a molle con buona indipendenza dei movimenti e un tocco fresco, a prezzo equilibrato.",
  "avoidIf": "Cerchi un memory tutto schiuma o un periodo di prova a casa.",
  "asin": "B0G2SCQ9MY",
  "amazonTitle": "Vesgantti Materasso Matrimoniale Ibrido 160x190x26cm",
  "imgs": [
   "https://m.media-amazon.com/images/I/711hS07UkhL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/818isfMWOkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71mYIrFAX7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71naTt9TumL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale ibrido alto 26 cm con molle insacchettate indipendenti e strati di schiuma termoregolante, con sostegno mirato a 7 zone per l'allineamento della colonna. Le molle separate riducono vibrazioni e rumori, utile in coppia. Materiali atossici e certificati Oeko-Tex Standard 100, consegna arrotolata sottovuoto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 114,
  "bsr": 18524,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ergear-160x80",
  "v": "scrivanie-regolabili",
  "brand": "ErGear",
  "name": "ErGear 160x80 elettrica",
  "price": 139.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Piano grande 160x80 e oltre 4000 recensioni: l'elettrica economica che fa il suo lavoro.",
  "attrs": {
   "width": 160,
   "depth": 80,
   "motor": "single",
   "maxLoad": 80,
   "hMin": 72,
   "hMax": 118,
   "memory": true,
   "topIncluded": true,
   "noise": 50,
   "antiCollision": null
  },
  "pros": [
   "Piano grande 160x80 cm",
   "4 altezze in memoria",
   "Oltre 4000 recensioni, media 4,6",
   "Portata dichiarata 80 kg"
  ],
  "cons": [
   "Motore singolo, piu' lento e meno stabile del doppio",
   "Altezza massima 118 cm, poco per chi supera 1,90 m"
  ],
  "buyIf": "Vuoi un piano ampio 160x80 per monitor e portatile spendendo poco, e ti bastano un motore e 4 memorie.",
  "avoidIf": "Carichi piu' di 80 kg, alterni in piedi decine di volte al giorno o sei molto alto: motore singolo e 118 cm di altezza massima ti staranno stretti.",
  "asin": "B0FQBQFZR5",
  "amazonTitle": "ErGear Scrivania Regolabile in Altezza, 160x80cm, Bianca",
  "imgs": [
   "https://m.media-amazon.com/images/I/71WHyC4Li6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Yj+IlAOIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81OM0b37YUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81BO59mYwaL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica a motore singolo con piano da 160x80 cm, regolazione da 72 a 118 cm e 4 altezze memorizzabili. Regge fino a 80 kg e lavora sotto i 50 dB. E' una delle piu' recensite della categoria: struttura in acciaio stabile a un prezzo contenuto, pensata per chi vuole iniziare a lavorare in piedi senza spendere troppo.",
  "ean": "0840478843941",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.6,
  "reviews": 4035,
  "bsr": 5766,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "songmics-160x70-lsd026",
  "v": "scrivanie-regolabili",
  "brand": "SONGMICS",
  "name": "SONGMICS 160x70 USB-C",
  "price": 131.39,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "160x70 con ripiano effetto pelle e porta USB-C, tra le best-seller sotto i 150 euro.",
  "attrs": {
   "width": 160,
   "depth": 70,
   "motor": "single",
   "maxLoad": 70,
   "hMin": 72,
   "hMax": 120,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "4 altezze in memoria e porta USB-C",
   "Oltre 4500 recensioni, media 4,5",
   "Prezzo contenuto per un 160 cm"
  ],
  "cons": [
   "Motore singolo",
   "Portata limitata a 70 kg",
   "Piano in quattro pannelli separati"
  ],
  "buyIf": "Cerchi una elettrica completa e molto recensita sotto i 150 euro, con USB-C e memorie, per un uso domestico normale.",
  "avoidIf": "Ti servono carichi oltre 70 kg o un piano monoblocco: qui il piano e' composto da quattro pannelli separati.",
  "asin": "B0C65P5M3D",
  "amazonTitle": "SONGMICS Scrivania Regolabile in Altezza Elettrica, 160 x 70 cm, Scrivania Elettrica, Tavolo con Memoria per 4 Altezze, Porta USB-C, Rovere Naturale e Bianco Opaco LSD026N01",
  "imgs": [
   "https://m.media-amazon.com/images/I/715JwA-fDYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61IRZAjUqNL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51dioKuqRYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81q-KMOTQML._AC_SL1500_.jpg"
  ],
  "summary": "Elettrica Songmics con piano 160x70 cm, regolazione 72-120 cm, 4 memorie e porta USB-C. Motore singolo, portata fino a 70 kg, telaio in acciaio. Il piano arriva in quattro pannelli da unire. Con oltre 4500 recensioni e media 4,5 e' un acquisto collaudato per una prima postazione sit-stand senza spese eccessive.",
  "ean": "0194343185781",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.5,
  "reviews": 4581,
  "bsr": 981,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "sanodesk-qs1-140x60",
  "v": "scrivanie-regolabili",
  "brand": "SANODESK",
  "name": "SANODESK QS1 140x60",
  "price": 161.48,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "140 cm con anticollisione e memoria: la Sanodesk ordinata per spazi medi.",
  "attrs": {
   "width": 140,
   "depth": 60,
   "motor": "single",
   "maxLoad": 60,
   "hMin": 73,
   "hMax": 122,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": true
  },
  "pros": [
   "Sistema anticollisione",
   "Controllo con memoria altezze",
   "Escursione ampia 73-122 cm"
  ],
  "cons": [
   "Portata solo 60 kg",
   "Poche recensioni (circa 100)"
  ],
  "buyIf": "Hai uno spazio medio (140 cm), vuoi la sicurezza dell'anticollisione e le altezze in memoria a un prezzo ragionevole.",
  "avoidIf": "Metti sopra molto peso: i 60 kg di portata sono il limite piu' basso tra le elettriche di questa lista.",
  "asin": "B0CDLBJ1VW",
  "amazonTitle": "SANODESK QS1 140 x 60 cm, scrivania regolabile in altezza, telescopio elettrico a 2 vie con controllo della memoria e tecnologia anticollisione (acero bianco)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71-19oCAB-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81TuOQjNyRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81OyJHyYaWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81EdgP8F81L._AC_SL1500_.jpg"
  ],
  "summary": "Sanodesk QS1 con piano 140x60 cm, regolazione elettrica da 73 a 122 cm, controllo con memoria e sistema anticollisione che ferma il piano se incontra un ostacolo. Portata dichiarata 60 kg. Formato adatto a scrivanie non troppo grandi, con funzionamento silenzioso e montaggio descritto come semplice.",
  "ean": "0810072841575",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.5,
  "reviews": 101,
  "bsr": 1580853,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "maidesite-t2-pro-telaio",
  "v": "scrivanie-regolabili",
  "brand": "MAIDeSITe",
  "name": "MAIDeSITe T2 Pro (telaio)",
  "price": 299.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Telaio doppio motore MAIDeSITe: porti il tuo piano, tieni la meccanica seria.",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "dual",
   "maxLoad": null,
   "hMin": 72,
   "hMax": 120,
   "memory": true,
   "topIncluded": false,
   "noise": 45,
   "antiCollision": null
  },
  "pros": [
   "Doppio motore a questo prezzo",
   "Larghezza adattabile 100-180 cm",
   "Media 4,8 su oltre 1500 recensioni",
   "Silenzioso sotto i 45 dB"
  ],
  "cons": [
   "Piano non incluso (solo struttura)",
   "Portata non dichiarata dal venditore"
  ],
  "buyIf": "Hai gia' un piano da montare e vuoi sotto una meccanica a doppio motore seria, con larghezza adattabile e memorie.",
  "avoidIf": "Vuoi una scrivania pronta all'uso: qui il piano non c'e', devi procurartelo a parte.",
  "asin": "B083T9Z4SG",
  "amazonTitle": "MAIDeSITe Scrivania Regolabile in Altezza, con un' altezza regolabile compresa tra 72 e 120 cm, dotata di 2 motori potenti e 4 tasti di memoria - T2 Pro",
  "imgs": [
   "https://m.media-amazon.com/images/I/71b1g2hZNpL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81nRE3mCiHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71SjTfEFyGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71BIQysGsLL._AC_SL1500_.jpg"
  ],
  "summary": "Struttura (telaio) regolabile MAIDeSITe T2 Pro con due motori e 4 memorie, larghezza regolabile da 100 a 180 cm per adattarsi a un piano che gia' possiedi. Regolazione 72-120 cm, rumore sotto i 45 dB. Il piano NON e' incluso: e' la base giusta per chi vuole riutilizzare un top suo risparmiando, con la solidita' del doppio motore e una media recensioni molto alta.",
  "ean": null,
  "eanSource": null,
  "rating": 4.8,
  "reviews": 1554,
  "bsr": 156075,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "flexispot-qb2-180x80",
  "v": "scrivanie-regolabili",
  "brand": "FLEXISPOT",
  "name": "FLEXISPOT QB2 180x80 doppio motore",
  "price": 349.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Doppio motore Flexispot, piano 180x80 e 120 kg di portata dichiarata.",
  "attrs": {
   "width": 180,
   "depth": 80,
   "motor": "dual",
   "maxLoad": 100,
   "hMin": 65,
   "hMax": 119,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Doppio motore",
   "Piano largo 180x80 cm",
   "Portata elevata (100-120 kg dichiarati)",
   "Marchio diffuso e assistito"
  ],
  "cons": [
   "Ingombro importante",
   "Poche recensioni rispetto ai modelli economici"
  ],
  "buyIf": "Ti serve un piano largo 180 cm stabile per due monitor, doppio motore e un buon margine di carico.",
  "avoidIf": "Hai poco spazio: 180 cm ingombrano parecchio e l'altezza minima di 65 cm e' gia' bassa.",
  "asin": "B0D9B2ST4N",
  "amazonTitle": "FLEXISPOT Scrivania Regolabile in Altezza 180x80 cm Con 2 Motori Potenti, Tavolo Stabile Con Funzione di Memoria (Nero+Marrone)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71XIwv51M+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81s7mrfApTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ob26oefiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81XvKNyBMWL._AC_SL1500_.jpg"
  ],
  "summary": "Flexispot QB2 con piano 180x80 cm, doppio motore, 4 memorie e una portata statica dichiarata di 120 kg (100 kg in movimento). Regolazione 65-119 cm con piano spesso 20 mm. E' la scelta per chi vuole un piano largo e stabile per piu' monitor, con il marchio piu' conosciuto del settore e una meccanica a due motori.",
  "ean": "0810072889256",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.4,
  "reviews": 323,
  "bsr": 72963,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "maidesite-el2-plus",
  "v": "scrivanie-regolabili",
  "brand": "MAIDeSITe",
  "name": "MAIDeSITe EL2 Plus gambe ovali",
  "price": 359.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Gambe ovali, doppio motore ed escursione 62-125 cm: la MAIDeSITe piu' flessibile.",
  "attrs": {
   "width": 180,
   "depth": 70,
   "motor": "dual",
   "maxLoad": null,
   "hMin": 62,
   "hMax": 125,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Escursione ampia 62-125 cm",
   "Doppio motore",
   "4 memorie, USB e cassetti",
   "Media 4,7"
  ],
  "cons": [
   "Prezzo sopra la media della categoria",
   "Portata dichiarata dal venditore in modo poco credibile"
  ],
  "buyIf": "Vuoi un'escursione molto ampia (ottima se sei molto basso o molto alto), doppio motore e dotazione completa.",
  "avoidIf": "Cerchi il prezzo piu' basso: qui paghi la meccanica e la flessibilita' in piu'.",
  "asin": "B0CLDQWFNH",
  "amazonTitle": "MAIDeSITe Scrivania regolabile in altezza elettrica EL2 Plus Art con design delle gambe ovali, scrivania doppio motore regolabile in altezza da 62 a 125 cm, 4 comandi a memoria",
  "imgs": [
   "https://m.media-amazon.com/images/I/61THDAV7PjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61C666qytnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71CSkLbYpjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71qOJKrMFqL._AC_SL1500_.jpg"
  ],
  "summary": "MAIDeSITe EL2 Plus con doppio motore, gambe dal profilo ovale e un'escursione ampia da 62 a 125 cm, tra le piu' generose della lista (utile sia a chi e' basso sia a chi e' alto). 4 memorie, porta USB e due cassetti. Media recensioni alta: una elettrica completa e versatile nella fascia intorno ai 350 euro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 353,
  "bsr": 217046,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "flexispot-l-180x120",
  "v": "scrivanie-regolabili",
  "brand": "FLEXISPOT",
  "name": "FLEXISPOT a L 180x120",
  "price": 294.49,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "A forma di L, 180x120: l'angolare elettrica per chi lavora su piu' fronti.",
  "attrs": {
   "width": 180,
   "depth": 120,
   "motor": null,
   "maxLoad": null,
   "hMin": 70,
   "hMax": 119,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Piano a L ampio 180x120 cm",
   "Montaggio destro o sinistro",
   "4 memorie d'altezza"
  ],
  "cons": [
   "Numero di motori non dichiarato",
   "Ingombro angolare importante",
   "Poche recensioni"
  ],
  "buyIf": "Vuoi sfruttare un angolo con un piano a L ampio per piu' monitor, con regolazione elettrica e memorie.",
  "avoidIf": "Hai una parete dritta o poco spazio: una L da 180x120 cm chiede un angolo dedicato.",
  "asin": "B0DFC3Q3M3",
  "amazonTitle": "FLEXISPOT Scrivania in piedi a forma di L, 180 x 120 cm, angolo elettrico regolabile in altezza, postazione di lavoro per computer con 4 controlli di memoria, configurazione sinistra o destra, nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61S7+xA0OtL._AC_SL1024_.jpg",
   "https://m.media-amazon.com/images/I/7127EetzXgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81uvtFcsO+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81sDieco3ZL._AC_SL1500_.jpg"
  ],
  "summary": "Flexispot angolare a L con piano 180x120 cm montabile a sinistra o a destra, regolazione elettrica 70-119 cm e 4 memorie. Pensata per sfruttare un angolo e tenere piu' monitor, documenti e periferiche su due piani. Elettrica completa con il supporto del marchio; recensioni ancora poche ma media alta.",
  "ean": "0840460404679",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.6,
  "reviews": 42,
  "bsr": 319941,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "flexispot-e6plus-160x80",
  "v": "scrivanie-regolabili",
  "brand": "FLEXISPOT",
  "name": "FLEXISPOT E6+ 160x80 doppio motore",
  "price": 599.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Doppio motore, doppia trave e 125 kg: la Flexispot E6+ da postazione fissa seria.",
  "attrs": {
   "width": 160,
   "depth": 80,
   "motor": "dual",
   "maxLoad": 125,
   "hMin": 58,
   "hMax": 123,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Doppio motore con doppia trave, molto stabile",
   "Escursione 58-123 cm, tra le piu' ampie",
   "Portata 125 kg",
   "Display LED con memorie e blocco bambini"
  ],
  "cons": [
   "Prezzo alto",
   "Recensioni ancora limitate"
  ],
  "buyIf": "Vuoi una struttura molto rigida per uso intensivo, escursione ampia (da 58 cm) e portata fino a 125 kg, e il budget c'e'.",
  "avoidIf": "Cerchi il risparmio: a questo prezzo prendi due elettriche economiche. Si giustifica solo se usi la scrivania tutti i giorni per ore.",
  "asin": "B09V5B293M",
  "amazonTitle": "FLEXISPOT E6+160 * 80cm Scrivania Regolabile in Altezza Standing Desk Elettrica Motorizzata a 3 Stadi a 2 Motore Capacità di carico 125 kg (160x80 cm, Acero+Nero)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71JWI2BqgtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71tINxbx4VL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/6171xx6DwzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/718TP-WFpRL._AC_SL1500_.jpg"
  ],
  "summary": "Flexispot E6+ con telaio a doppio motore e doppia trave, gambe a 3 stadi con escursione da 58 a 123 cm e portata fino a 125 kg. Piano 160x80 cm, schermo tattile a LED con 4 memorie e blocco bambini. E' la fascia alta: piu' rigidita', piu' corsa in basso e in alto, pensata per un uso intensivo e quotidiano.",
  "ean": "0810072810250",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.4,
  "reviews": 67,
  "bsr": 708746,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "maidesite-l-160x120",
  "v": "scrivanie-regolabili",
  "brand": "MAIDeSITe",
  "name": "MAIDeSITe a L 160x120 quattro gambe",
  "price": 429.99,
  "quality": 7,
  "checked": "2026-09-10",
  "tagline": "Angolare a 4 gambe, doppio motore e 160 kg: la L di MAIDeSITe punta sulla stabilita'.",
  "attrs": {
   "width": 160,
   "depth": 120,
   "motor": "dual",
   "maxLoad": 160,
   "hMin": 70,
   "hMax": 120,
   "memory": null,
   "topIncluded": true,
   "noise": 50,
   "antiCollision": null
  },
  "pros": [
   "Struttura a quattro gambe, molto stabile",
   "Doppio motore",
   "Portata dichiarata 160 kg",
   "Piano a L 160x120 cm"
  ],
  "cons": [
   "Poche recensioni (meno di 20)",
   "Spedizione in 2-3 giorni, non immediata",
   "Presenza delle memorie non dichiarata chiaramente"
  ],
  "buyIf": "Vuoi una scrivania a L molto stabile (quattro gambe) per un angolo, con doppio motore e portata alta.",
  "avoidIf": "Ti bastano due gambe o hai poco spazio, o vuoi tante recensioni alle spalle: qui sono ancora poche.",
  "asin": "B0GD78129J",
  "amazonTitle": "MAIDeSITe Scrivania elettrica regolabile in altezza, forma L, 160 x 120 cm, scrivania angolare con doppio motore, 4 gambe stabili, portata 160 kg, porta USB-C, sistema di controllo piano per casa",
  "imgs": [
   "https://m.media-amazon.com/images/I/91Vr0vC1UQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/717PIJei1qL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91MPqfp58JL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7169sJXK3xL._AC_SL1500_.jpg"
  ],
  "summary": "MAIDeSITe angolare a L con piano da 160x120 cm, doppio motore e struttura a quattro gambe pensata per eliminare le oscillazioni tipiche dei tavoli a due gambe. Portata dichiarata 160 kg, regolazione 70-120 cm a circa 50 dB, porta USB-C. Spedizione indicata in 2-3 giorni. Una L robusta per angolo, con poche recensioni ma dotazione completa.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 17,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "flexispot-100x60-compatta",
  "v": "scrivanie-regolabili",
  "brand": "FLEXISPOT",
  "name": "FLEXISPOT 100x60 compatta",
  "price": 179.99,
  "quality": 8,
  "checked": "2026-09-10",
  "tagline": "Solo 100x60 cm: la Flexispot compatta con anticollisione per stanze piccole.",
  "attrs": {
   "width": 100,
   "depth": 60,
   "motor": "single",
   "maxLoad": 100,
   "hMin": 72,
   "hMax": 116.5,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": true
  },
  "pros": [
   "Formato compatto 100x60 cm",
   "Protezione anticollisione",
   "4 memorie d'altezza",
   "Portata fino a 100 kg"
  ],
  "cons": [
   "Piano piccolo, limitato per due monitor",
   "Altezza massima 116,5 cm, poco per i piu' alti"
  ],
  "buyIf": "Hai poco spazio e vuoi una elettrica piccola (100 cm) ma di marca, con memorie e anticollisione.",
  "avoidIf": "Ti servono due monitor affiancati o un piano ampio: 100x60 cm e' piccolo e l'altezza massima si ferma a 116,5 cm.",
  "asin": "B0D41M1CN7",
  "amazonTitle": "FLEXISPOT Scrivania Regolabile In Altezza Elettrica 100x60cm, Scrivania Regolabile In Altezza A 2 Livelli Con Gancio E Promemoria Seduta-Stand (Acero, Struttura Bianca)",
  "imgs": [
   "https://m.media-amazon.com/images/I/61j1uGPIIhL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71e-Y5TeE0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81lv0khaYwL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81FIyIr-EvL._AC_SL1500_.jpg"
  ],
  "summary": "Flexispot elettrica compatta con piano 100x60 cm, pensata per camere, studi piccoli e angoli stretti. Regolazione 72-116,5 cm, 4 memorie su pannello a 6 pulsanti, protezione anticollisione e portata fino a 100 kg. Gambe in acciaio industriale. Quando lo spazio e' poco ma vuoi comunque una elettrica di marca, e' la misura giusta.",
  "ean": "0810072860620",
  "eanSource": "UPC dichiarato nella scheda Amazon (GTIN-12 convertito in EAN-13, checksum verificato)",
  "rating": 4.5,
  "reviews": 208,
  "bsr": 15606,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "trotec-ttk-75-e",
  "v": "deumidificatori",
  "brand": "TROTEC",
  "name": "Trotec TTK 75 E",
  "price": 184.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il classico da 20 litri di un marchio che fa deumidificatori per mestiere.",
  "attrs": {
   "liters": 20,
   "tank": 3,
   "area": 45,
   "noise": null,
   "drain": null,
   "laundry": true,
   "weight": 12.5,
   "wheels": null,
   "hygrostat": true,
   "power": 420
  },
  "pros": [
   "20 l/giorno dichiarati per ambienti fino a 45 m²",
   "Igrostato con impostazione dell'umidità desiderata, timer e spegnimento automatico",
   "Asciugatura della biancheria dichiarata esplicitamente dal produttore",
   "Ricambi garantiti 10 anni secondo la scheda Amazon",
   "4,5 stelle su oltre 1.500 recensioni"
  ],
  "cons": [
   "Rumorosità in dB non dichiarata in pagina: per la camera da letto si compra alla cieca",
   "Serbatoio da 3 litri: su casa molto umida va svuotato più volte al giorno",
   "La scheda Amazon riporta per errore 'volume serbatoio 20 litri', i bullet dicono 3 litri",
   "12,5 kg, nessuna rotella dichiarata in pagina"
  ],
  "buyIf": "Vuoi una macchina seria da 20 litri per una zona giorno umida e ti serve anche asciugare il bucato in casa.",
  "avoidIf": "Devi tenerlo acceso di notte in camera: la rumorosità non è dichiarata e il formato è da 12,5 kg.",
  "asin": "B00FJ6DJLM",
  "amazonTitle": "TROTEC TTK 75 E deumidificatore casa, 20 l/24 h",
  "imgs": [
   "https://m.media-amazon.com/images/I/61DKGQxUurL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51Kqb7SfniL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/416EKH03w1L._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/31zbe0I9fxL._AC_SL1000_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 20 l/giorno per stanze fino a 45 m², con igrostato regolabile, timer e modalità asciugatura biancheria. È l'opzione da comprare se il problema è muffa e condensa vera in una zona giorno o in una taverna asciutta, non un fondo di cantina. Quello che manca è la trasparenza sul rumore: Trotec non dichiara i dB, e il serbatoio da 3 litri è nella media, non generoso.",
  "ean": "4052138007129",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 1520,
  "bsr": 37148,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "trotec-ttk-100-e",
  "v": "deumidificatori",
  "brand": "TROTEC",
  "name": "Trotec TTK 100 E",
  "price": 284.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Da 30 litri per taverne, seminterrati e case con umidità di risalita.",
  "attrs": {
   "liters": 30,
   "tank": 5.5,
   "area": 90,
   "noise": null,
   "drain": true,
   "laundry": null,
   "weight": 15.5,
   "wheels": null,
   "hygrostat": null,
   "power": 530
  },
  "pros": [
   "30 l/giorno dichiarati, per ambienti fino a 90 m² / 230 m³",
   "Serbatoio da 5,5 litri, il più capiente di questa selezione",
   "Funzionamento continuo dichiarato come alternativa al serbatoio",
   "Sbrinamento a gas caldo: lavora anche in cantina fredda, da 5 °C",
   "Due velocità di ventilazione e display digitale con timer"
  ],
  "cons": [
   "Nessun dato di rumorosità dichiarato e igrostato non citato in pagina",
   "530 W di picco: acceso tutto il giorno si vede in bolletta",
   "15,5 kg, nessuna rotella dichiarata nella scheda",
   "La scheda si contraddice sul serbatoio (5,5 litri nei dati, 4,3 litri nella riga riassuntiva)"
  ],
  "buyIf": "Hai una taverna, un seminterrato o una casa con umidità di risalita e ti serve capacità vera, non un elettrodomestico da salotto.",
  "avoidIf": "Devi deumidificare una sola stanza: è sovradimensionato, pesante e costoso da tenere acceso.",
  "asin": "B00AWR5KAG",
  "amazonTitle": "TROTEC TTK 100 E deumidificatore casa e cantina, 30 l/24 h",
  "imgs": [
   "https://m.media-amazon.com/images/I/61FbLSJqZJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/512KnJ0oWxL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51CLd9YDwnL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51o7KmLHR0L._AC_SL1000_.jpg"
  ],
  "summary": "Macchina da 30 l/giorno pensata per volumi grossi: fino a 90 m² o 230 m³, serbatoio da 5,5 litri e funzionamento continuo per non svuotarlo mai. Lo sbrinamento a gas caldo è la ragione per cui regge anche in cantina o in garage freddo, dove i deumidificatori da salotto si ghiacciano. In cambio consuma 530 W, pesa 15,5 kg e la scheda non dice nulla su rumore e igrostato.",
  "ean": "4052138007143",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.3,
  "reviews": 485,
  "bsr": 37146,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "bosch-dry-4000",
  "v": "deumidificatori",
  "brand": "Bosch Thermotechnik",
  "name": "Bosch Dry 4000",
  "price": 221.77,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "L'unico della selezione che dichiara i decibel: 38 dB(A) e modalità notte.",
  "attrs": {
   "liters": 16,
   "tank": 2.5,
   "area": 33,
   "noise": 38,
   "drain": null,
   "laundry": true,
   "weight": 11.1,
   "wheels": true,
   "hygrostat": true,
   "power": 285
  },
  "pros": [
   "38 dB(A) dichiarati: uno dei pochi con il dato scritto nero su bianco",
   "Tre modalità automatiche Auto, Night e Laundry con regolazione in base all'umidità",
   "16 l/giorno con soli 285 W dichiarati",
   "11,1 kg con maniglia integrata e rotelle",
   "Alto in classifica di vendita (BSR 8.870 in Casa e cucina)"
  ],
  "cons": [
   "Serbatoio da 2,5 litri: piccolo per 16 l/giorno, va svuotato spesso",
   "Nessuno scarico continuo dichiarato in pagina",
   "Costa più di modelli con capacità simile, si paga il marchio e il dato di rumore"
  ],
  "buyIf": "Lo terrai in camera da letto o in uno studio e la rumorosità è il criterio numero uno.",
  "avoidIf": "Non vuoi svuotare taniche: 2,5 litri sono pochi e lo scarico continuo non è dichiarato.",
  "asin": "B0DLL2P9ZQ",
  "amazonTitle": "Bosch Dry 4000, Deumidificatore, Per ambienti fino a 33 m²",
  "imgs": [
   "https://m.media-amazon.com/images/I/61WtjdiYeyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81UGtxn+0-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81MkrvEi1jL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81zCyLcjUAL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore da 16 l/giorno per stanze fino a 33 m², con tre modalità automatiche (Auto, Night, Laundry) e 38 dB(A) dichiarati, il dato che quasi nessun concorrente scrive. È la scelta sensata se lo devi tenere acceso in camera o in uno studio dove si lavora. Il limite vero è il serbatoio da 2,5 litri: con 16 litri di capacità di targa lo svuoti più volte al giorno e la pagina non dichiara uno scarico continuo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 556,
  "bsr": 8870,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "okyuk-pd10r-10l",
  "v": "deumidificatori",
  "brand": "OKYUK",
  "name": "OKYUK PD10R 10 litri",
  "price": 119.9,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Compressore da 10 litri sotto i 120 euro, profondo 17 cm.",
  "attrs": {
   "liters": 10,
   "tank": 2.5,
   "area": 30,
   "noise": 36,
   "drain": null,
   "laundry": null,
   "weight": 7.5,
   "wheels": true,
   "hygrostat": null,
   "power": 190
  },
  "pros": [
   "Sotto i 120 euro con compressore vero, non un Peltier da comodino",
   "36 dB dichiarati in modalità sospensione",
   "Solo 17 cm di profondità e 7,5 kg, con quattro ruote a 360°",
   "190 W dichiarati, consumo contenuto",
   "Protezione antigelo e sbrinamento automatico dichiarati"
  ],
  "cons": [
   "La scheda si contraddice sulla capacità: titolo e bullet dicono 10 l/giorno, i dati tecnici 12",
   "Nessuno scarico continuo dichiarato: si svuota il serbatoio da 2,5 litri a mano",
   "Nessuna modalità asciugatura bucato e nessun igrostato dichiarati",
   "Marchio senza storia e senza rete di assistenza in Italia"
  ],
  "buyIf": "Hai una stanza sola da tenere asciutta e un budget sotto i 120 euro.",
  "avoidIf": "Devi asciugare il bucato o coprire più di una stanza: 10 litri non bastano.",
  "asin": "B0F5PZ6M6X",
  "amazonTitle": "OKYUK Deumidificatore Casa Muffa 10 L, deumidificatore bagno, deumidificatore casa 2.5L, 30 m², con spegnimento automatico Timing 24H, ideale per camper, bagno, camera da letto, cantina (10L Bianco)",
  "imgs": [
   "https://m.media-amazon.com/images/I/61FOuWdsZRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61knKgBGmHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71YEKTasxQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61sJ-UzCW8L._AC_SL1500_.jpg"
  ],
  "summary": "È il modello di ingresso della selezione: compressore da 10 l/giorno per stanze fino a 30 m², serbatoio da 2,5 litri, 36 dB dichiarati in modalità notte e appena 17 cm di profondità. Va bene per una camera, un bagno o un camper dove il problema è la condensa sui vetri, non la muffa su tutta la casa. Manca tutto il resto: niente scarico continuo, niente modalità bucato, niente igrostato dichiarato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 998,
  "bsr": 15803,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "knka-16l-pd22sc",
  "v": "deumidificatori",
  "brand": "KNKA",
  "name": "KNKA 16 litri",
  "price": 139.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Il più venduto della fascia 140 euro, con tubo di scarico nella scatola.",
  "attrs": {
   "liters": 16,
   "tank": 3.3,
   "area": null,
   "noise": null,
   "drain": true,
   "laundry": null,
   "weight": 10.3,
   "wheels": true,
   "hygrostat": null,
   "power": 260
  },
  "pros": [
   "Tubo di scarico da 1 metro incluso per il funzionamento continuo",
   "Serbatoio da 3,3 litri, sopra la media a questo prezzo",
   "260 W dichiarati per 16 l/giorno di targa",
   "Modalità notturna che spegne le spie, blocco bambini, sbrinamento automatico",
   "4,6 stelle su oltre 2.100 recensioni e BSR 1.822: si vende parecchio"
  ],
  "cons": [
   "Scheda tecnica incoerente: capacità 16 o 10 l/giorno, serbatoio 3,3 o 2,5 litri, superficie 32 o 45 m² a seconda del punto della pagina",
   "Rumorosità dichiarata solo come intervallo 42-48 dB, non come dato singolo",
   "Niente modalità asciugatura bucato dichiarata",
   "Marchio cinese senza assistenza strutturata in Italia"
  ],
  "buyIf": "Vuoi spendere sui 140 euro e ti interessa soprattutto poterlo collegare a uno scarico e non svuotarlo mai.",
  "avoidIf": "Vuoi dati tecnici certi prima di comprare: questa pagina si contraddice su capacità, serbatoio e superficie.",
  "asin": "B0DZXKLNVL",
  "amazonTitle": "KNKA Deumidificatore, Deumidificatori Casa Muffa, 16L/24H, Serbatoio 3,3L, Basso Rumore, Basso Consumo, Sbrinamento Automatico, Blocco Bambini, Design Anti-Goccia, 4 Modalità, 80m³（32㎡）",
  "imgs": [
   "https://m.media-amazon.com/images/I/619cdHuOH1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81yOJ4TUPTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71PJezLU+SL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81rkyJpaRDL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 16 l/giorno dichiarati con serbatoio da 3,3 litri e tubo di scarico da 1 metro incluso, quindi lo puoi collegare a una pilozza e dimenticartelo. Ha modalità notturna con spie spente, blocco bambini e sbrinamento automatico, ed è uno dei prodotti più venduti della categoria su Amazon.it. Il problema è la scheda: capacità, serbatoio e metri quadri sono dichiarati con numeri diversi in punti diversi della stessa pagina.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 2123,
  "bsr": 1822,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "aktobis-wdh-725dg",
  "v": "deumidificatori",
  "brand": "Aktobis",
  "name": "Aktobis WDH-725DG",
  "price": 228,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "25 litri con umidostato e display, la via di mezzo tra casa e cantiere.",
  "attrs": {
   "liters": 25,
   "tank": 3,
   "area": 50,
   "noise": 50,
   "drain": null,
   "laundry": null,
   "weight": 13.2,
   "wheels": null,
   "hygrostat": true,
   "power": 420
  },
  "pros": [
   "25 l/giorno dichiarati per ambienti fino a 50 m²",
   "Umidostato elettronico con display di temperatura e umidità reale",
   "Timer 1-24 ore sia in spegnimento sia in accensione ritardata",
   "Adatto al funzionamento continuo e allo sbrinamento automatico",
   "Comandabile da presa WiFi esterna se vuoi automatizzarlo"
  ],
  "cons": [
   "50 dB(A) dichiarati come massimo: non è un apparecchio da camera da letto",
   "Serbatoio da soli 3 litri per 25 l/giorno di capacità",
   "Potenza dichiarata in modo incoerente in pagina: 420 W nella scheda tecnica, 320 W nella tabella comparativa",
   "Nessuna modalità asciugatura bucato e nessuna rotella dichiarata"
  ],
  "buyIf": "Devi asciugare 40-50 m² davvero umidi e vuoi impostare una soglia di umidità e lasciarlo lavorare.",
  "avoidIf": "Lo vuoi in camera o in soggiorno mentre guardi la TV: 50 dB(A) si sentono.",
  "asin": "B079FQVVGQ",
  "amazonTitle": "Aktobis WDH-725DG Deumidificatore elettrico | fino a 25 Litri/g e 50 m²",
  "imgs": [
   "https://m.media-amazon.com/images/I/41Crk-S6roL._AC_SL1080_.jpg",
   "https://m.media-amazon.com/images/I/51A3EuWMjyL._AC_SL1080_.jpg",
   "https://m.media-amazon.com/images/I/5194-jwQNDL._AC_SL1080_.jpg",
   "https://m.media-amazon.com/images/I/51eJ6yxX3nL._AC_SL1080_.jpg"
  ],
  "summary": "Deumidificatore da 25 l/giorno per ambienti fino a 50 m², con umidostato elettronico, display di umidità e temperatura reale e timer su accensione e spegnimento. È la scelta per una casa grande e umida o per un piano interrato che va asciugato per davvero, senza arrivare alle macchine da cantiere. In cambio dichiara 50 dB(A) di massimo e un serbatoio da 3 litri che, a pieno regime, va svuotato di continuo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 613,
  "bsr": 72981,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "polti-coffea-s15b",
  "v": "macchine-caffe",
  "brand": "Polti",
  "name": "Polti Coffea S15B",
  "price": 109.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Cialde E.S.E. e basta, in dieci centimetri di larghezza.",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "none",
   "tank": 0.85,
   "costPerCup": null,
   "minutes": 1,
   "width": 10.5
  },
  "pros": [
   "Larga 10,5 cm, sta anche in cucine strette",
   "Espulsione automatica della cialda usata, non tocchi niente con le mani",
   "Temperatura del caffè regolabile su tre livelli e lunghezza programmabile",
   "Si scalda in circa un minuto, nessuna attesa"
  ],
  "cons": [
   "Funziona solo con cialde E.S.E. da 44 mm: niente macinato, niente capsule",
   "Nessun montalatte né lancia vapore, il cappuccino te lo scordi",
   "Serbatoio piccolo (0,85 L), da riempire spesso se siete in più persone"
  ],
  "buyIf": "Bevi solo espresso, hai poco spazio e ti piace l'idea di cialde in carta senza sporcare.",
  "avoidIf": "Vuoi cappuccino, caffè macinato sfuso o capsule del supermercato.",
  "asin": "B0CD7Q87QS",
  "amazonTitle": "Polti Coffea S15B, Macchina per Caffè Espresso a Cialde E.S.E. da 44 mm",
  "imgs": [
   "https://m.media-amazon.com/images/I/61awbXbsSWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/711gEKBMP-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71pJ3YtxkeL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/718t6S1bvqL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina dedicata esclusivamente alle cialde in carta E.S.E. da 44 mm: inserisci la cialda, premi, e quella usata cade da sola nel cassetto. Larga 10,5 cm, è pensata per chi ha pochissimo spazio sul piano e vuole zero manutenzione del portafiltro. In cambio rinuncia a tutto il resto: non accetta macinato né capsule e non ha alcun sistema per il latte.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 1568,
  "bsr": 449,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "beper-duetta-p101caf100",
  "v": "macchine-caffe",
  "brand": "Beper",
  "name": "Beper Duetta P101CAF100",
  "price": 69.9,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Portafiltro vero e lancia vapore sotto i 70 euro.",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "pannarello",
   "tank": 1.2,
   "costPerCup": null,
   "minutes": 3,
   "width": 17
  },
  "pros": [
   "Sotto i 70 euro con portafiltro, lancia vapore e piano scaldatazze",
   "Accetta sia caffè macinato sia cialde, senza vincoli di sistema",
   "Braccio a doppia uscita: due tazze insieme",
   "Serbatoio da 1,2 L, grande per la fascia di prezzo"
  ],
  "cons": [
   "Pompa da 15 bar e caldaia economica: la crema dipende molto da macinatura e pressatura",
   "Vapore manuale, serve pratica per montare il latte",
   "Recensioni ancora poche (471) e disponibilità a magazzino spesso limitata"
  ],
  "buyIf": "Vuoi spendere poco e ti va di imparare a dosare, pressare e montare il latte a mano.",
  "avoidIf": "Cerchi un caffè buono premendo un tasto senza mettere mano a niente.",
  "asin": "B0DCVZM5W7",
  "amazonTitle": "BEPER P101CAF100 Macchina caffè espresso Duetta, 1100W, Adatto a cialde e caffè in polvere, Macchinetta caffè con braccio a doppia uscita, 15bar, Piano scalda tazze, misurino e pressino inclusi, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71S6oBjsZvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71v-k8QHTdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71je2Ni4WBL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71lpx2RMO1L._AC_SL1500_.jpg"
  ],
  "summary": "Espresso manuale d'ingresso con portafiltro a doppia uscita: puoi usare macinato con misurino e pressino inclusi oppure cialde, e c'è una lancia vapore per montare il latte a mano. È la macchina per chi vuole provare il rito dell'espresso spendendo poco, accettando che risultato e costanza dipendano dalla propria manualità. Non è una macchina da hobbisti esigenti: caldaia e materiali sono quelli della fascia economica.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 471,
  "bsr": 136,
  "bsrCat": "Commercio, Industria e Scienza"
 },
 {
  "id": "delonghi-icm14011-americano",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "De'Longhi ICM14011",
  "price": 54.15,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Caffè filtro per cinque tazze, con due tasti e nessun consumabile.",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "none",
   "tank": 0.65,
   "costPerCup": null,
   "minutes": 5,
   "width": null
  },
  "pros": [
   "Prepara fino a 5 tazze in una volta sola",
   "Filtro permanente in nylon: niente filtri di carta da comprare",
   "Caraffa e portafiltro lavabili in lavastoviglie",
   "Spegnimento automatico dopo 40 minuti"
  ],
  "cons": [
   "Non fa espresso: è caffè filtro all'americana, lungo e leggero",
   "Nessun sistema per il latte",
   "La piastra tiene in caldo ma dopo mezz'ora il caffè sa di bruciato"
  ],
  "buyIf": "Bevi caffè lungo in tazza grande e lo vuoi pronto per più persone in una volta.",
  "avoidIf": "Vuoi un espresso corto e cremoso o il cappuccino.",
  "asin": "B00EUWJGQ8",
  "amazonTitle": "De'Longhi ICM14011 Macchina per Caffè Americano con caraffa in vetro per 5 Tazze, Spegnimento Automatico, Serbatoio 0,65L",
  "imgs": [
   "https://m.media-amazon.com/images/I/61glavW3X-L._AC_SL1269_.jpg",
   "https://m.media-amazon.com/images/I/51shAiBja0S._AC_SL1440_.jpg",
   "https://m.media-amazon.com/images/I/61v-jYO4m+L._AC_SL1440_.jpg",
   "https://m.media-amazon.com/images/I/61OYvmhNnEL._AC_SL1440_.jpg"
  ],
  "summary": "Caffettiera a filtro all'americana: metti il macinato nel filtro permanente, l'acqua nel serbatoio da 0,65 L e ottieni fino a cinque tazze di caffè lungo. Serve a chi beve il caffè a mug, magari mentre lavora, e non cerca l'espresso italiano. È spartana per costruzione: due tasti, una piastra scaldacaraffa, nessuna regolazione di temperatura o di estrazione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 886,
  "bsr": 38014,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "melitta-caffeo-solo-e950",
  "v": "macchine-caffe",
  "brand": "Melitta",
  "name": "Melitta Caffeo Solo E950-222",
  "price": 344.17,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Macina e fa l'espresso in venti centimetri di larghezza, senza latte.",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "none",
   "tank": 1.2,
   "costPerCup": null,
   "minutes": 1,
   "width": 20
  },
  "pros": [
   "Superautomatica larga 20 cm, una delle più strette in circolazione",
   "Macinacaffè in acciaio con tre livelli di macinatura e tre di intensità",
   "Pulizia e decalcificazione automatiche, gruppo infusore estraibile",
   "Interruttore a 0 W e spegnimento automatico programmabile"
  ],
  "cons": [
   "Nessun montalatte e nessuna lancia vapore: solo caffè nero",
   "Contenitore chicchi da 125 g, si ricarica spesso",
   "Display a LED spartano, niente schermo né ricette preimpostate"
  ],
  "buyIf": "Vuoi il caffè in grani macinato al momento, bevi espresso nero e hai poco spazio in larghezza.",
  "avoidIf": "In casa qualcuno beve cappuccino o latte macchiato.",
  "asin": "B00I3YL5T0",
  "amazonTitle": "Melitta macchina per caffé automatica, Caffeo Solo, Nero, E950-222",
  "imgs": [
   "https://m.media-amazon.com/images/I/61EZidXtgML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71gzu1ItaDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71qZ6Z4KORL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61znel4iV7L._AC_SL1500_.jpg"
  ],
  "summary": "Superautomatica compatta che macina i chicchi al momento e prepara espresso o caffè lungo premendo un tasto, con macinatura e intensità regolabili su tre livelli. È la scelta per chi vuole il caffè in grani ma ha un piano cucina stretto: larga 20 cm, alta 33, con pulizia e decalcificazione automatizzate. Il limite grosso è che non monta il latte in nessun modo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 2850,
  "bsr": 542571,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "krups-ea5088-harmony",
  "v": "macchine-caffe",
  "brand": "Krups",
  "name": "Krups EA5088 Harmony",
  "price": 422.18,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Superautomatica Krups con vapore manuale e autopulizia integrale.",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "pannarello",
   "tank": 1.7,
   "costPerCup": null,
   "minutes": 1,
   "width": null
  },
  "pros": [
   "Quattro bevande dai chicchi macinati al momento, espresso, lungo e filtro",
   "Lancia vapore manuale per cappuccino e latte",
   "Pulizia automatica completa con una pastiglia, senza smontare nulla",
   "Serbatoio da 1,7 L e due tazze in contemporanea"
  ],
  "cons": [
   "Il latte va montato a mano: nessun sistema one-touch per il cappuccino",
   "Modello recente, poche recensioni accumulate (237)",
   "Macchina ingombrante, non è una compatta"
  ],
  "buyIf": "Vuoi i chicchi macinati al momento e molti caffè al giorno, e il latte non ti dispiace montarlo tu.",
  "avoidIf": "Vuoi il cappuccino con un tasto solo o hai poco spazio sul piano.",
  "asin": "B0GNMW7QRD",
  "amazonTitle": "Krups EA5088 Harmony - Macchina da caffè automatica con ugello di vapore, 4 bevande, pulizia automatica, 2 tazze contemporaneamente, colore nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71Q8RuzAneL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/712wa+i3WTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715K1icmbjL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a chicchi che copre espresso, lungo e caffè filtro con selezione diretta, più cappuccino usando la lancia vapore manuale. Serbatoio da 1,7 L e doppia erogazione la rendono adatta a famiglie che fanno diversi caffè al giorno, e la pulizia automatica riduce la manutenzione a una pastiglia tre volte l'anno. Manca il montalatte automatico, quindi il cappuccino resta un lavoro a mano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 237,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "krups-dolce-gusto-mini-me",
  "v": "macchine-caffe",
  "brand": "Krups",
  "name": "Krups Nescafé Dolce Gusto Mini Me",
  "price": 75.79,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Capsule Dolce Gusto, bevande calde e fredde, ingombro minimo.",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "none",
   "tank": 0.8,
   "costPerCup": null,
   "minutes": 1,
   "width": 16
  },
  "pros": [
   "Cappuccino e latte macchiato con le capsule latte, senza montare niente",
   "Bevande calde e fredde con lo stesso apparecchio",
   "Larga 16 cm e leggera, si sposta facilmente",
   "Oltre 23.000 recensioni con media alta, prodotto molto rodato"
  ],
  "cons": [
   "Funziona solo con capsule Dolce Gusto: sistema chiuso e costo per tazza alto",
   "Il cappuccino richiede due capsule, una di caffè e una di latte",
   "Non è un vero espresso italiano, la pressione lavora sulla capsula"
  ],
  "buyIf": "In casa si bevono bevande diverse, cappuccino compreso, e vuoi zero manutenzione.",
  "avoidIf": "Tieni al costo per tazza o vuoi un espresso da macinato.",
  "asin": "B07GJY9KH9",
  "amazonTitle": "NESCAFÉ DOLCE GUSTO Krups Mini Me, Macchina per Caffè Espresso e Altre bevande in capsula, Automatica, Grigio e Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61ZSfWNiQ-L._AC_SL1427_.jpg",
   "https://m.media-amazon.com/images/I/61kxX-QY3zL._AC_SL1417_.jpg",
   "https://m.media-amazon.com/images/I/61MNfqPBx0L._AC_SL1428_.jpg",
   "https://m.media-amazon.com/images/I/61tTDct2MeL._AC_SL1352_.jpg"
  ],
  "summary": "Macchina a capsule Dolce Gusto pensata per chi vuole variare tra espresso, caffè lungo, cappuccino e bevande fredde senza imparare niente. Il serbatoio da 0,8 L e i 16 cm di larghezza la rendono comoda anche in cucine piccole o in ufficio, e la funzione Play&Select regola la lunghezza in tazza. Il prezzo basso dell'apparecchio si paga sulle capsule, che devono essere Dolce Gusto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 23611,
  "bsr": 539,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "comfy-line-elisir-80x190",
  "v": "materassi",
  "brand": "Comfy Line",
  "name": "Comfy Line Elisir Waterfoam 20 cm 80x190",
  "price": 70,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Singolo waterfoam rigido a 70 euro, con lato estivo e lato invernale.",
  "attrs": {
   "type": "waterfoam",
   "firmness": 8,
   "cooling": 7,
   "motion": 6,
   "edge": null,
   "height": 20,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Prezzo molto basso per un singolo alto 20 cm",
   "Doppia faccia dichiarata: lato invernale più morbido, lato estivo più rigido",
   "Rigidità complessiva dichiarata circa 8, sostegno compatto",
   "Tessuto termoregolatore e fascia perimetrale a nido d'ape dichiarati per l'areazione",
   "Prodotto in Italia, spedito arrotolato sottovuoto"
  ],
  "cons": [
   "Nessun limite di peso dichiarato in scheda: chi supera i 95 kg resta senza riferimento",
   "Nessun periodo di prova a casa",
   "Il rivestimento non è dichiarato sfoderabile"
  ],
  "buyIf": "Ti serve un singolo sodo e traspirante spendendo il minimo.",
  "avoidIf": "Cerchi un materasso accogliente o dormi di fianco e vuoi che la spalla affondi.",
  "asin": "B0DKK4FLZV",
  "amazonTitle": "Comfy Line Materasso singolo 80X190 Cm con nuova TECNOLOGIA DI COMFORT | Materasso ortopedico alto 20 cm contro il mal di schiena che NON SCALDA, anallergico e anti acaro - MOD. ELISIR",
  "imgs": [
   "https://m.media-amazon.com/images/I/91Ewcby2vsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61gxUNpeKjL._AC_SL1208_.jpg",
   "https://m.media-amazon.com/images/I/71CR5IOf0UL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Vn5a42TiL._AC_SL1300_.jpg"
  ],
  "summary": "Materasso singolo 80x190 in schiuma water foam alto 20 cm, con rigidità dichiarata intorno a 8 e due facce (una più morbida per l'inverno, una più rigida per l'estate). Va bene per una cameretta, una stanza degli ospiti o un letto di servizio dove serve un sostegno sodo senza spendere. Manca tutto il resto: niente portata massima dichiarata, niente prova a casa, niente fodera sfoderabile.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 1092,
  "bsr": 418,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "evergreenweb-fashion-waterfoam-80x190",
  "v": "materassi",
  "brand": "EVERGREENWEB",
  "name": "Evergreenweb Fashion Water Foam 20 cm 80x190",
  "price": 149.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Singolo in water foam a rigidità media, dispositivo medico detraibile, con cuscino incluso.",
  "attrs": {
   "type": "waterfoam",
   "firmness": 5,
   "cooling": 5,
   "motion": 6,
   "edge": null,
   "height": 20,
   "maxKg": 120,
   "trial": 0
  },
  "pros": [
   "Rigidità media dichiarata, compromesso tra accoglienza e sostegno",
   "Dispositivo medico di classe I, quindi detraibile al 19%",
   "Lastra a 7 zone differenziate e certificazione Oeko-Tex standard 100 classe 1",
   "Include un guanciale in memory foam e ha 4 maniglie laterali",
   "Made in Italy, garanzia 2 anni"
  ],
  "cons": [
   "La scheda tecnica dichiara 120 kg di limite, i punti elenco parlano di 130 kg: dato non coerente",
   "Nessun periodo di prova a casa",
   "Costa il doppio di altri singoli in water foam della stessa altezza"
  ],
  "buyIf": "Vuoi un singolo di sostegno medio e ti interessa la detrazione fiscale del dispositivo medico.",
  "avoidIf": "Pesi oltre 100 kg o vuoi un materasso decisamente rigido.",
  "asin": "B07N1SQ75M",
  "amazonTitle": "EVERGREENWEB - Materasso Singolo 80x190 con DISPOSITIVO MEDICO Alto 20 cm in Poliuretano ORTOPEDICO lastra Water Bio + CUSCINO Memory Foam INCLUSO Rivestimento Morbido Bianco Anallergico",
  "imgs": [
   "https://m.media-amazon.com/images/I/51ENDw5U2hL._AC_SL1077_.jpg",
   "https://m.media-amazon.com/images/I/61GSPcjxoLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71uPdgOVt6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81B8Y-foDvL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso singolo 80x190 alto 20 cm in poliuretano espanso ad acqua, con lastra a 7 zone e rigidità dichiarata media. È pensato per chi vuole un singolo equilibrato, né duro né avvolgente, e sfrutta la detrazione fiscale del dispositivo medico di classe I. Il punto debole è la portata: la scheda dice 120 kg, i punti elenco 130, e non c'è alcun periodo di prova.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 829,
  "bsr": 13141,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "miasuite-fiocco-120x190",
  "v": "materassi",
  "brand": "MiaSuite",
  "name": "MiaSuite Fiocco Memory 20 cm 120x190",
  "price": 124.95,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Una piazza e mezza in memory con portata dichiarata 140 kg a prezzo da singolo.",
  "attrs": {
   "type": "memory",
   "firmness": 6,
   "cooling": 5,
   "motion": 8,
   "edge": null,
   "height": 20,
   "maxKg": 140,
   "trial": 0
  },
  "pros": [
   "Una piazza e mezza a poco più di 120 euro",
   "Portata dichiarata fino a 140 kg, alta per la fascia di prezzo",
   "Memory a zone differenziate, rigidità dichiarata mediamente rigida",
   "Dispositivo medico di classe I, quindi detraibile",
   "Garanzia produttore dichiarata 15 anni, Made in Italy"
  ],
  "cons": [
   "Strato unico dichiarato: poca stratificazione rispetto a ibridi più costosi",
   "Il memory tende a trattenere calore e la scheda non dichiara trattamenti rinfrescanti",
   "Nessun periodo di prova a casa"
  ],
  "buyIf": "Dormi da solo in un letto a una piazza e mezza e vuoi un memory sodo senza spendere.",
  "avoidIf": "Ti svegli sudato: qui non c'è nessuna soluzione dichiarata contro il calore.",
  "asin": "B0CLDTM7BZ",
  "amazonTitle": "MiaSuite Materasso Una Piazza e Mezza 120x190 Memory, Alto 20 cm, Ortopedico, Automodellante, Traspirante e Antiacaro, Anallergico, Ergonomico, Dispositivo Medico - Made in Italy - Fiocco",
  "imgs": [
   "https://m.media-amazon.com/images/I/71A0MpUi49L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61yLn7-A0bL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/41mBKtHxTML._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/81I+FqLWacL._AC_SL1200_.jpg"
  ],
  "summary": "Materasso 120x190 alto 20 cm in memory foam a zone differenziate, con rigidità dichiarata mediamente rigida e limite di peso a 140 kg. È la misura che manca quasi sempre: buono per chi dorme da solo ma vuole più spazio del singolo, o per una stanza degli ospiti. È a strato unico e non ha trattamenti rinfrescanti dichiarati, quindi chi soffre il caldo ci sta stretto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1721,
  "bsr": 543,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "bmm-ortho-medic-h4-160x200",
  "v": "materassi",
  "brand": "BMM",
  "name": "BMM Ortho Medic H4 molle insacchettate 21 cm 160x200",
  "price": 229.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Molle insacchettate H4 extra rigide fino a 180 kg, con 30 notti di prova.",
  "attrs": {
   "type": "molle",
   "firmness": 9,
   "cooling": 7,
   "motion": 7,
   "edge": null,
   "height": 21,
   "maxKg": 180,
   "trial": 30
  },
  "pros": [
   "Rigidità H4 extra rigida dichiarata, consigliata fino a 180 kg",
   "807 molle insacchettate dichiarate e 7 zone di portanza",
   "Struttura simmetrica: si può girare e capovolgere senza sbagliare lato",
   "Rivestimento in microfibra sfoderabile e lavabile fino a 60 gradi",
   "30 notti di prova dichiarate con ritiro gratuito",
   "Nucleo e rivestimento certificati Oeko-Tex standard 100 classe 1"
  ],
  "cons": [
   "H4 è davvero duro: chi dorme di fianco e pesa poco sente pressione su spalla e anca",
   "Solo 21 cm di altezza, basso per un matrimoniale a molle",
   "Nessuno strato di memory o comfort dichiarato sopra le molle",
   "Pesa 25,7 kg, scomodo da girare da soli"
  ],
  "buyIf": "Pesi oltre 95 kg o hai mal di schiena e ti serve un piano che non ceda.",
  "avoidIf": "Dormi di fianco, pesi meno di 70 kg o cerchi una sensazione avvolgente.",
  "asin": "B0C8ZC12NH",
  "amazonTitle": "BMM Materasso Ortho Medic 160x200 cm con molle insacchettate, grado di rigidità H4 extra rigido/certificato Öko-Tex/materasso ergonomico a 7 zone, altezza 21 cm/Sviluppo prodotti in Germania",
  "imgs": [
   "https://m.media-amazon.com/images/I/61yrmxSUY2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71uyyXj74YL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714JaM6CscL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71U2ZQc2IbL._AC_SL1500_.jpg"
  ],
  "summary": "Matrimoniale 160x200 a 807 molle insacchettate con grado di rigidità H4, il più duro della scala, dichiarato fino a 180 kg per occupante. È la scelta per chi ha mal di schiena e sprofonda negli altri materassi, o per corporature robuste che schiacciano le schiume. In cambio è solo 21 cm, non ha strato comfort in memory e pesa quasi 26 kg da rigirare.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 3172,
  "bsr": 24144,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "naturalex-perfectsleep-160x190",
  "v": "materassi",
  "brand": "Naturalex",
  "name": "Naturalex Perfectsleep Memory e Blue Latex 30 cm 160x190",
  "price": 199.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Matrimoniale da 30 cm con memory e Blue Latex e doppio lato estate/inverno sotto i 200 euro.",
  "attrs": {
   "type": "memory",
   "firmness": 5,
   "cooling": 6,
   "motion": 8,
   "edge": null,
   "height": 30,
   "maxKg": 180,
   "trial": 0
  },
  "pros": [
   "30 cm di altezza, tra i più alti sotto i 200 euro",
   "Due lati dichiarati, uno estivo traspirante e uno invernale più avvolgente",
   "Strato in Blue Latex oltre al memory, per una risposta più elastica",
   "Limite di peso dichiarato 180 kg",
   "Garanzia produttore dichiarata 10 anni, produzione europea",
   "Bassa propagazione del movimento dichiarata, utile in coppia"
  ],
  "cons": [
   "Voto 4,1 su oltre 10.000 recensioni: la soddisfazione è più altalenante della media della categoria",
   "Rigidità solo media: chi pesa oltre 95 kg rischia di affondare nonostante i 180 kg dichiarati",
   "Nessun periodo di prova a casa dichiarato",
   "I punti elenco parlano di 5 anni di garanzia mentre la scheda ne dichiara 10"
  ],
  "buyIf": "Vuoi un matrimoniale alto e adattabile alla stagione con meno di 200 euro.",
  "avoidIf": "Cerchi un sostegno rigido o vuoi poterlo restituire dopo averlo provato.",
  "asin": "B08YQSTP99",
  "amazonTitle": "Naturalex - Matrimoniale Materasso 160x190 cm - Alto 30 cm",
  "imgs": [
   "https://m.media-amazon.com/images/I/81bzw-ZVTtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61A7D8ZSPuL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81BRNSHlRUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ZeahbDRdL._AC_SL1500_.jpg"
  ],
  "summary": "Matrimoniale 160x190 alto 30 cm che combina memory Viscotex e uno strato di Blue Latex, con lato estivo traspirante e lato invernale più accogliente da alternare girandolo. Serve a chi vuole un materasso importante e adattabile alla stagione spendendo poco. Il voto medio 4,1 su più di diecimila recensioni dice però che la costanza qualitativa non è impeccabile, e la rigidità resta media.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 10844,
  "bsr": 8783,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "inofia-kuhl-140x200",
  "v": "materassi",
  "brand": "Inofia",
  "name": "Inofia Kuhl ibrido molle e memory 28 cm 140x200",
  "price": 223.28,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Ibrido fresco in cotone biologico da 28 cm, con 100 notti di prova a casa.",
  "attrs": {
   "type": "ibrido",
   "firmness": 7,
   "cooling": 8,
   "motion": 8,
   "edge": null,
   "height": 28,
   "maxKg": 150,
   "trial": 100
  },
  "pros": [
   "100 notti di prova gratuita dichiarate, raro in questa fascia",
   "Rivestimento in cotone biologico dichiarato rinfrescante e delicato sulla pelle",
   "Ibrido a 4 strati con molle insacchettate e memory, 7 zone ergonomiche",
   "28 cm di altezza e limite di peso dichiarato 150 kg",
   "Isolamento del movimento dichiarato, ogni molla lavora in modo indipendente",
   "Certificato Oeko-Tex"
  ],
  "cons": [
   "Il rivestimento va lavato solo a mano secondo la scheda",
   "Misura 140x200, non entra nelle reti matrimoniali italiane standard da 160x190",
   "Il numero di molle dichiarato (70) è chiaramente un dato di scheda sbagliato o parziale",
   "Vendita di nicchia: 622 recensioni e posizionamento di vendita basso rispetto ai concorrenti"
  ],
  "buyIf": "Soffri il caldo a letto e vuoi poter restituire il materasso dopo averlo provato davvero.",
  "avoidIf": "Hai una rete matrimoniale italiana standard 160x190 o vuoi la fodera in lavatrice.",
  "asin": "B0D295R6L7",
  "amazonTitle": "Inofia Materasso Kuhl 140x200 cm, Spessore materasso 28 cm H3/H4, 7 zone ergonomiche, Certificato Oeko-Tex, Materasso a molle insacchettate in cotone biologico, Prova gratuita 100 notti",
  "imgs": [
   "https://m.media-amazon.com/images/I/81kqHGDyioL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61bhcqvCR1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81PWQBHuDyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71aX4Ci8O5L._AC_SL1500_.jpg"
  ],
  "summary": "Materasso 140x200 ibrido alto 28 cm, con molle insacchettate, strati in memory e rivestimento in cotone biologico presentato come rinfrescante, rigidità dichiarata H3/H4. È la risposta a chi si sveglia sudato e vuole comunque un sostegno sodo, e l'unico della selezione con 100 notti di prova gratuita. Il limite è la misura 140x200 e la fodera lavabile solo a mano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 622,
  "bsr": 218858,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "proscenic-q8-max-plus",
  "v": "robot-aspirapolvere",
  "brand": "Proscenic",
  "name": "Proscenic Q8 Max+",
  "price": 169.99,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Base che si svuota da sola e navigazione LiDAR sotto i 170 euro.",
  "attrs": {
   "pa": 8000,
   "battery": 200,
   "mop": null,
   "dock": "dust",
   "lidar": true,
   "height": 9.6,
   "bin": null,
   "carpetLift": null,
   "petBrush": null
  },
  "pros": [
   "Stazione di svuotamento automatico sotto i 170 euro",
   "LiDAR a 360 gradi con mappe fino a 5 piani e zone vietate",
   "200 minuti di autonomia dichiarati, per circa 230 m2",
   "Alto 9,6 cm: passa sotto parecchi mobili"
  ],
  "cons": [
   "Il panno va montato e lavato a mano: la stazione si occupa solo della polvere",
   "La pagina dichiara il sacchetto sia da 3 sia da 3,5 litri: dato incoerente",
   "Marchio meno diffuso di Roborock o Dreame: ricambi e assistenza meno scontati"
  ],
  "buyIf": "Vuoi la comodità della base autosvuotante restando sotto i 200 euro.",
  "avoidIf": "Il lavaggio del pavimento è la tua priorità: qui è un'aggiunta, non il piatto forte.",
  "asin": "B0H25KY1Q8",
  "amazonTitle": "Proscenic Q8 Max+ Robot Aspirapolvere Lavapavimenti con Mappatura 8000Pa, 200 min, Evitamento Automatico Degli Ostacoli, Robot aspirapolvere con WiFi/Alexa/App, per Tappeti/Pavimenti/Peli",
  "imgs": [
   "https://m.media-amazon.com/images/I/71cygxtnSTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71NyMUXyR9L._AC_SL1493_.jpg",
   "https://m.media-amazon.com/images/I/61ZKpXSzSqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61GzDgQiE7L._AC_SL1500_.jpg"
  ],
  "summary": "Robot due in uno che aspira a 8.000 Pa e passa il panno, con stazione che scarica il contenitore in un sacchetto da 3 litri: circa due mesi senza toccare la polvere. Mappa con LiDAR fino a cinque piani e dichiara 200 minuti di autonomia. Il lavaggio resta la parte debole: panno trascinato, da montare e risciacquare a mano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1337,
  "bsr": 7417,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "lefant-m350",
  "v": "robot-aspirapolvere",
  "brand": "Lefant",
  "name": "Lefant M350",
  "price": 179.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Corpo da 7,9 cm: entra dove i robot da 9-10 cm restano fuori.",
  "attrs": {
   "pa": 6000,
   "battery": 150,
   "mop": null,
   "dock": "dust",
   "lidar": true,
   "height": 7.9,
   "bin": null,
   "carpetLift": false,
   "petBrush": null
  },
  "pros": [
   "Solo 7,9 cm di altezza: tra i più sottili con stazione di svuotamento",
   "Stazione dichiarata per 75 giorni con sacchetto da 2,2 litri",
   "Navigazione laser ToF con percorsi ordinati e ripresa automatica",
   "Filtro HEPA e tre livelli di aspirazione"
  ],
  "cons": [
   "Media di 4,1 stelle su oltre 10.000 recensioni: qualità non costante",
   "6.000 Pa: aspirazione modesta sui tappeti a pelo medio o lungo",
   "Il panno non si solleva, il robot si limita a evitare i tappeti"
  ],
  "buyIf": "Hai mobili bassi e ti serve un robot che ci passi davvero sotto senza rinunciare alla stazione.",
  "avoidIf": "Cerchi un lavaggio serio o tappeti puliti a fondo: 6.000 Pa e panno trascinato non bastano.",
  "asin": "B0FQNR1N75",
  "amazonTitle": "Lefant M350 Robot Aspirapolvere Lavapavimenti con Mappatura, 7.9cm, 6000Pa",
  "imgs": [
   "https://m.media-amazon.com/images/I/61kZt6LfKyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71iZpt3yGWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/818SugdkahL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71CJVtndBSL._AC_SL1500_.jpg"
  ],
  "summary": "L'altezza di 7,9 cm è il vero motivo per sceglierlo: passa sotto letti, divani e mobili bassi dove i robot normali si fermano. Aspira 6.000 Pa, naviga con laser ToF e la stazione raccoglie la polvere per circa 75 giorni dichiarati. Le oltre 10.000 recensioni però si fermano a 4,1 stelle: l'affidabilità non è quella dei marchi maggiori.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 10760,
  "bsr": 32363,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "irobot-roomba-plus-576-combo",
  "v": "robot-aspirapolvere",
  "brand": "iRobot",
  "name": "iRobot Roomba Plus 576 Combo",
  "price": 449,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Stazione AutoWash che lava i panni con acqua a 75 gradi e li asciuga.",
  "attrs": {
   "pa": 25000,
   "battery": null,
   "mop": null,
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Stazione AutoWash: svuota fino a 3 mesi, rabbocca l'acqua e lava i panni a 75 gradi",
   "Solleva automaticamente i panni sui tappeti",
   "25.000 Pa con spazzola in gomma e setole, pensata anche per i peli",
   "3.548 recensioni con media 4,5: storico solido"
  ],
  "cons": [
   "449 euro: modelli cinesi con dotazione simile costano meno",
   "La pagina non dichiara autonomia della batteria né altezza del robot",
   "Ingombro dichiarato 33 x 34 x 48,5 cm: la base vuole il suo spazio"
  ],
  "buyIf": "Vuoi una stazione che si occupi davvero di tutto e preferisci un marchio con assistenza consolidata.",
  "avoidIf": "Stai sotto i 300 euro o ti basta che aspiri e si svuoti da solo.",
  "asin": "B0GXWXK6VF",
  "amazonTitle": "iRobot Roomba® Plus 576 Combo robot aspirapolvere lavapavimenti, 25.000 Pa",
  "imgs": [
   "https://m.media-amazon.com/images/I/71DY4csxM0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81csi-Q2BbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81y8G5o6MML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Rub8kF79L._AC_SL1500_.jpg"
  ],
  "summary": "È il Roomba con la stazione che fa tutto: svuota la polvere fino a tre mesi, rabbocca l'acqua per quaranta giorni, lava i panni a 75 gradi e li asciuga ad aria calda a 45. Aspira 25.000 Pa, naviga con LiDAR più riconoscimento ostacoli e solleva i panni sui tappeti. La scheda Amazon però non dichiara autonomia né altezza del robot.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 3548,
  "bsr": 4048,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "roborock-qrevo-edge-2",
  "v": "robot-aspirapolvere",
  "brand": "roborock",
  "name": "Roborock Qrevo Edge 2",
  "price": 549.99,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Stazione completa in un corpo da 7,98 cm, con laser retrattile.",
  "attrs": {
   "pa": 25000,
   "battery": null,
   "mop": null,
   "dock": "full",
   "lidar": true,
   "height": 7.98,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Solo 7,98 cm grazie al sensore laser che si ritrae negli spazi bassi",
   "Stazione con lavaggio panni a 80 gradi, ammollo e asciugatura a 55 gradi",
   "25.000 Pa con doppio sistema anti-groviglio",
   "Spazzola FlexiArm che si estende fino a 2,48 cm per bordi e angoli"
  ],
  "cons": [
   "Solo 300 recensioni: modello recente, storico di affidabilità ancora corto",
   "La pagina non dichiara autonomia né capacità del contenitore polvere",
   "Stazione grande e pesante: 14,57 kg dichiarati"
  ],
  "buyIf": "Vuoi una stazione completa ma hai mobili bassi che i top di gamma normali non superano.",
  "avoidIf": "Ti basta aspirare bene: a questa cifra stai pagando soprattutto il lavaggio automatico.",
  "asin": "B0GMH56TRH",
  "amazonTitle": "roborock Qrevo Edge 2 Set Robot Aspirapolvere Lavapavimenti 25.000Pa, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/719tR7qrpzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/716fCFW12AL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81JCsoo82CL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71gs1dofTOL._AC_SL1500_.jpg"
  ],
  "summary": "Mette insieme due cose che di solito non convivono: un corpo da 7,98 cm che entra sotto letti e divani, e una stazione completa con lavaggio panni a 80 gradi, ammollo, asciugatura a 55 gradi e svuotamento dichiarato per 65 giorni. Il sensore laser si ritrae quando lo spazio sopra è poco. Amazon non dichiara autonomia né capacità del contenitore.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 300,
  "bsr": 929,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "narwal-flow",
  "v": "robot-aspirapolvere",
  "brand": "NARWAL",
  "name": "Narwal Flow",
  "price": 699,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Mocio a nastro sempre pulito al posto dei soliti dischi rotanti.",
  "attrs": {
   "pa": 22000,
   "battery": 190,
   "mop": "track",
   "dock": "full",
   "lidar": null,
   "height": 9.5,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Mocio a nastro risciacquato in continuo da 16 ugelli con acqua a 45 gradi",
   "Base completa: riempie l'acqua, svuota la polvere e lava i panni a 80 gradi",
   "190 minuti di autonomia dichiarati, fino a 170 m2 in un ciclo",
   "Alto 9,5 cm e si solleva per superare ostacoli fino a 40 mm"
  ],
  "cons": [
   "Nessuna navigazione laser dichiarata: si affida a due telecamere RGB e all'AI",
   "489 recensioni: prodotto nuovo, storico ancora limitato",
   "Il detergente va aggiunto a mano, la stazione non lo dosa da sola"
  ],
  "buyIf": "Il lavaggio del pavimento è la cosa che ti interessa davvero, più dell'aspirazione.",
  "avoidIf": "Vuoi la sicurezza della navigazione laser al buio e in stanze molto piene di oggetti.",
  "asin": "B0FMKJ7GPN",
  "amazonTitle": "NARWAL Flow Robot Aspirapolvere Lavapavimenti con FlowWash Track Mop",
  "imgs": [
   "https://m.media-amazon.com/images/I/61sKezL-C+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71mXrqZNwzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71D6-5fqEzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61xp+CRkMnL._AC_SL1500_.jpg"
  ],
  "summary": "Narwal sostituisce i dischi con un mocio a nastro che sedici ugelli risciacquano di continuo con acqua a 45 gradi mentre pulisce: lo sporco non viene ridistribuito sul pavimento. Aspira 22.000 Pa, è alto 9,5 cm e la base riempie l'acqua, svuota la polvere e lava i panni a 80 gradi. Non dichiara navigazione laser: si muove con telecamere e AI.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 489,
  "bsr": 26642,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "dreame-x60-pro-ultra-complete",
  "v": "robot-aspirapolvere",
  "brand": "dreame",
  "name": "Dreame X60 Pro Ultra Complete",
  "price": 1199,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Bracci estensibili e 42.000 Pa: il massimo quando il budget non è un limite.",
  "attrs": {
   "pa": 42000,
   "battery": null,
   "mop": "rotating",
   "dock": "full",
   "lidar": null,
   "height": null,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "42.000 Pa, il valore di aspirazione più alto della selezione",
   "Bracci UltraExtend: spazzola fino a 12 cm e mocio fino a 18 cm oltre il corpo",
   "Supera soglie doppie fino a 10 cm e gradini singoli fino a 5,2 cm",
   "Lavaggio del mocio a 100 gradi con asciugatura ad aria calda"
  ],
  "cons": [
   "1.199 euro: il prezzo più alto della categoria, di molto",
   "Solo 283 recensioni: modello appena uscito, poco storico",
   "La pagina non dichiara altezza del robot né autonomia in minuti"
  ],
  "buyIf": "Casa grande, soglie fra le stanze e angoli difficili, e nessun limite di budget.",
  "avoidIf": "Vivi in un appartamento piccolo e regolare: spendi il triplo per funzioni che non userai.",
  "asin": "B0GSWYM8Q2",
  "amazonTitle": "dreame X60 Pro Ultra Complete Robot Aspirapolvere, Aspiraz. 42.000 Pa",
  "imgs": [
   "https://m.media-amazon.com/images/I/712Ej-l42sL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Ydjc7RnHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Ty3vFX9UL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81C-AJu--XL._AC_SL1500_.jpg"
  ],
  "summary": "È il modello senza compromessi: 42.000 Pa, doppio braccio che estende spazzola e mocio fino a 18 cm per arrivare davvero negli angoli, superamento di soglie fino a 10 cm e lavaggio del mocio a 100 gradi con asciugatura ad aria calda. La batteria da 5.000 mAh è pensata per case grandi. Amazon non dichiara altezza del robot né autonomia in minuti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 283,
  "bsr": 238,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "vasagle-lsd021-telaio",
  "v": "scrivanie-regolabili",
  "brand": "VASAGLE",
  "name": "VASAGLE LSD021 telaio senza piano",
  "price": 91.79,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Telaio motorizzato senza piano sotto i 100 euro, per riusare la scrivania che hai gia.",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": null,
   "maxLoad": 70,
   "hMin": 72,
   "hMax": 118,
   "memory": true,
   "topIncluded": false,
   "noise": 48,
   "antiCollision": null
  },
  "pros": [
   "Telaio elettrico con memoria sotto i 100 euro",
   "Larghezza regolabile 90-140 cm, accetta piani da 100 a 170 cm",
   "Rumorosita dichiarata sotto i 48 dB",
   "Ruote, ganci e piedini regolabili inclusi"
  ],
  "cons": [
   "Il piano non e incluso e va comprato o recuperato a parte",
   "Carico dichiarato 70 kg, basso se ci monti due monitor e attrezzatura",
   "Numero di motori non dichiarato in pagina",
   "La scheda tecnica indica 118 cm di altezza massima, la descrizione 120 cm"
  ],
  "buyIf": "Hai gia un piano solido e vuoi solo la parte che si alza, spendendo poco.",
  "avoidIf": "Vuoi una scrivania pronta all'uso o devi reggere piu di 70 kg di monitor e attrezzatura.",
  "asin": "B0D83SHD72",
  "amazonTitle": "VASAGLE Scrivania Regolabile in Altezza Elettrica, Struttura per Scrivania, Supporto per Tavolo Senza Piano, con 2 Ganci, Funzione Memory con 3 Altezze, Acciaio, Nero Inchiostro LSD021B01",
  "imgs": [
   "https://m.media-amazon.com/images/I/61GvivT4QpL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81MazvaRMaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81oNlpLbURL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71T6U63uOtL._AC_SL1500_.jpg"
  ],
  "summary": "Struttura motorizzata venduta senza piano: si allunga da 90 a 140 cm e accetta piani da 100 a 170 cm di lunghezza e da 50 a 80 cm di profondita. Sale da 72 a 118 cm con tre altezze memorizzabili, carico dichiarato 70 kg e rumore sotto i 48 dB. Ha ruote e ganci, ma il piano resta a carico tuo e i 70 kg limitano i setup pesanti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 602,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "desktronic-home-pro-telaio",
  "v": "scrivanie-regolabili",
  "brand": "Desktronic",
  "name": "Desktronic Home Pro telaio doppio motore",
  "price": 299.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Telaio a tre stadi che scende a 62 cm e sale a 128, con doppio motore.",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "dual",
   "maxLoad": 160,
   "hMin": 62,
   "hMax": 128,
   "memory": true,
   "topIncluded": false,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Corsa dichiarata 62-128 cm, tra le piu ampie in circolazione",
   "Doppio motore dichiarato, passaggio seduto-in piedi in 12 secondi",
   "Colonne a tre stadi, compatibile con piani da 110 a 220 cm",
   "Touch screen con tre altezze memorizzabili e porte USB/USB-C"
  ],
  "cons": [
   "Costa quanto una scrivania completa di fascia media, ma il piano non c'e",
   "La scheda tecnica indica 100 kg di peso massimo consigliato contro i 160 kg della descrizione",
   "La pagina mostra solo due immagini del prodotto",
   "Rumorosita in dB non dichiarata"
  ],
  "buyIf": "Sei molto alto o molto basso e ti serve una corsa piu lunga del solito, con il piano gia in casa.",
  "avoidIf": "Vuoi spendere poco: a questa cifra, senza piano, ci sono scrivanie complete che costano meno.",
  "asin": "B0BHVYYBV5",
  "amazonTitle": "Desktronic Telaio per scrivania regolabile in altezza – Scrivania elettrica regolabile con doppio motore silenzioso e touch screen – Alta capacità di carico – Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61ImBegOz+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41h1o7yu4zL._AC_.jpg"
  ],
  "summary": "Struttura senza piano con colonne a tre stadi e doppio motore: la corsa dichiarata va da 62 a 128 cm, piu larga della media, quindi copre sia chi sta sotto 1,65 m sia chi supera 1,85 m. Accetta piani da 110 a 220 cm e ha un touch screen con tre altezze memorizzabili. Il limite e il prezzo: 300 euro senza piano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 268,
  "bsr": 449269,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "raplink-htk4540-120x60",
  "v": "scrivanie-regolabili",
  "brand": "Raplink",
  "name": "Raplink HTK-4540 120x60 elettrica",
  "price": 84.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Elettrica completa da 120x60 sotto i 90 euro, per le stanze strette.",
  "attrs": {
   "width": 120,
   "depth": 60,
   "motor": null,
   "maxLoad": 60,
   "hMin": 71,
   "hMax": 116,
   "memory": true,
   "topIncluded": true,
   "noise": 50,
   "antiCollision": null
  },
  "pros": [
   "Sotto i 90 euro con il piano incluso",
   "Ingombro 120x60 cm, sta anche in una stanza piccola",
   "Due altezze memorizzabili",
   "Rumore dichiarato sotto i 50 dB"
  ],
  "cons": [
   "Carico dichiarato 60 kg, il piu basso tra questi modelli",
   "Il piano arriva in tre pannelli separati, non in un pezzo unico",
   "Altezza massima 116 cm, corta per chi supera 1,85 m",
   "152 recensioni e marchio poco noto, storico ancora breve"
  ],
  "buyIf": "Hai una stanza piccola e un budget contenuto, e ci appoggi un portatile o un monitor.",
  "avoidIf": "Devi reggere due monitor pesanti o sei alto piu di 1,85 m.",
  "asin": "B0FYYGGYPZ",
  "amazonTitle": "Scrivania Regolabile in Altezza Elettrica, 120 x 60cm, Scrivania Elettrica Tavolo con 2 Memorie di Altezza, Facile da Assemblare, Scrivania Regolabile in Altezza per Casa e Ufficio",
  "imgs": [
   "https://m.media-amazon.com/images/I/71VTEFVhuCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71dUhCL7o-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/716hdZ5KqlL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61af0qyI9zL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica gia completa di piano 120x60 cm, pensata per chi ha poco spazio e lavora con un portatile o un monitor singolo. Sale da 71 a 116 cm, ha due memorie e rumore dichiarato sotto i 50 dB. I limiti sono il carico fermo a 60 kg e il piano composto da tre pannelli da unire in fase di montaggio.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 152,
  "bsr": 5550,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "offigo-rgb-140x60-gaming",
  "v": "scrivanie-regolabili",
  "brand": "OffiGo",
  "name": "OffiGo LED RGB 140x60",
  "price": 189.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Postazione da gaming che si alza, con prese, USB e luci RGB sul piano.",
  "attrs": {
   "width": 140,
   "depth": 60,
   "motor": null,
   "maxLoad": null,
   "hMin": 72,
   "hMax": 120,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Due prese elettriche e due porte USB integrate nel piano",
   "Illuminazione RGB con dieci modalita statiche e dieci dinamiche",
   "Supporto monitor rialzato, portabicchieri e gancio cuffie inclusi",
   "Tre altezze memorizzabili, corsa 72-120 cm"
  ],
  "cons": [
   "Carico massimo non dichiarato in pagina",
   "La scheda tecnica riporta 57 cm di profondita contro i 60 cm del titolo",
   "Numero di motori e rumorosita non dichiarati",
   "92 recensioni, storico ancora corto"
  ],
  "buyIf": "Vuoi una postazione da gioco regolabile con prese e USB gia sul piano.",
  "avoidIf": "Cerchi una scrivania sobria da ufficio o vuoi sapere in anticipo quanto peso regge.",
  "asin": "B0DZSYJNZF",
  "amazonTitle": "OffiGo Scrivania Regolabile in Altezza con LED RGB, 140×60 cm, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71Wq6eGnhvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Gz1Kqz8OL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/818vcZsytdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71WXaca+cTL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica da 140 cm pensata per il gioco: piano in fibra di carbonio, striscia RGB con venti modalita, due prese di corrente, due porte USB, portabicchieri e gancio per le cuffie. Sale da 72 a 120 cm con tre memorie. In pagina non viene dichiarato il carico massimo, e la profondita reale indicata nelle specifiche e 57 cm invece dei 60 del titolo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 92,
  "bsr": 186116,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "homall-160x80-usb",
  "v": "scrivanie-regolabili",
  "brand": "Homall",
  "name": "Homall 160x80 con porta USB",
  "price": 147.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Piano da 160x80 cm elettrico sotto i 150 euro, con lo storico recensioni piu lungo.",
  "attrs": {
   "width": 160,
   "depth": 80,
   "motor": null,
   "maxLoad": 80,
   "hMin": 72,
   "hMax": 116,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Piano 160x80 cm, spazio per due monitor, sotto i 150 euro",
   "Oltre 2.200 recensioni, uno degli storici piu lunghi della categoria",
   "Tre altezze memorizzabili piu porta USB, ganci e vassoio cavi",
   "Assistenza e ricambi dichiarati per 5 anni"
  ],
  "cons": [
   "Valutazione media 4,3, piu bassa delle alternative qui elencate",
   "Il piano arriva in quattro sezioni da unire",
   "Altezza massima 116 cm, corta per chi supera 1,85 m",
   "La scheda tecnica indica 70 kg di peso massimo consigliato contro gli 80 kg della descrizione"
  ],
  "buyIf": "Ti serve un piano ampio per due monitor senza spendere piu di 150 euro.",
  "avoidIf": "Hai poco spazio o sei alto oltre 1,85 m: 160 cm ingombrano e 116 cm di corsa sono pochi.",
  "asin": "B0CH2KRRS6",
  "amazonTitle": "Homall Scrivania Regolabile in Altezza 160x80 cm con Porta USB, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71oxd6C2FML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71N70wBrpsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71cWXghyWvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61GKv1JCxPL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica completa con piano da 160x80 cm, la piu grande di questo gruppo a fronte di un prezzo sotto i 150 euro. Sale da 72 a 116 cm, ha tre altezze memorizzabili, porta USB, ganci e vassoio per i cavi. Il piano arriva in quattro sezioni da assemblare e la media voti resta a 4,3, quindi qualche pezzo difettoso capita.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 2266,
  "bsr": 4215,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "devoko-140x80-ruote",
  "v": "scrivanie-regolabili",
  "brand": "Devoko",
  "name": "Devoko 140x80 con ruote",
  "price": 159.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "140x80 con ruote, anticollisione e ricarica Type-C sul comando.",
  "attrs": {
   "width": 140,
   "depth": 80,
   "motor": "single",
   "maxLoad": 70,
   "hMin": 72,
   "hMax": 118,
   "memory": true,
   "topIncluded": true,
   "noise": 50,
   "antiCollision": true
  },
  "pros": [
   "Profondita 80 cm con larghezza contenuta a 140 cm",
   "Anticollisione dichiarata e rumore sotto i 50 dB",
   "Ricarica Type-C sul comando e promemoria antisedentarieta a timer",
   "Quattro ruote, due ganci e vassoio cavi inclusi"
  ],
  "cons": [
   "Motore singolo dichiarato, sale a 20 mm/s e si sente sotto carico",
   "Carico dichiarato 70 kg nei punti elenco, mentre la scheda tecnica riporta 80 kg",
   "Il piano e composto da quattro pannelli giuntati",
   "Il numero di memorie e incoerente: 4 nel titolo, 3 nella descrizione"
  ],
  "buyIf": "Vuoi un piano profondo 80 cm ma senza arrivare a 160 cm di larghezza, e ti serve spostarla.",
  "avoidIf": "Carichi due monitor grandi e attrezzatura oltre i 70 kg, o vuoi un doppio motore.",
  "asin": "B0CH8SPXS9",
  "amazonTitle": "Devoko Scrivania Regolabile in Altezza 140x80 cm Nero Ufficio con Ruote",
  "imgs": [
   "https://m.media-amazon.com/images/I/61OtTtwo5cL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71bqk2M3MmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Zglma8iTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71BDtlJ48IL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica completa da 140x80 cm: piano profondo quanto quelli da 160 cm ma meno ingombrante in larghezza. Sale da 72 a 118 cm, dichiara anticollisione, rumore sotto i 50 dB, promemoria antisedentarieta e ricarica Type-C. Monta un motore singolo e il carico dichiarato si ferma a 70 kg, quindi non e la scelta per attrezzatura pesante.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 1747,
  "bsr": 5137,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ticova-m8-rete-lombare",
  "v": "sedie-ergonomiche",
  "brand": "Ticova",
  "name": "Ticova M8 Rete",
  "price": 149.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Il lombare si regola in altezza e in profondità, non solo su e giù.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 3,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 130,
   "footrest": false
  },
  "pros": [
   "Supporto lombare regolabile sia in altezza sia in profondità, raro sotto i 200 euro",
   "Braccioli 3D e poggiatesta regolabile in altezza e inclinazione",
   "Portata dichiarata 150 kg con certificazione BIFMA dichiarata in pagina",
   "Seduta in schiuma ad alta densità da 8,6 cm con bordo a cascata",
   "Quasi 2.000 recensioni: storico di feedback ampio"
  ],
  "cons": [
   "Schienale in rete ma seduta imbottita: d'estate la parte bassa resta più calda",
   "Solo 3 posizioni di blocco della reclinazione, niente regolazione fine della tensione",
   "Nessuna altezza utente dichiarata dal produttore: chi supera 1,90 m non ha garanzie",
   "Niente poggiapiedi"
  ],
  "buyIf": "Hai fastidi lombari e vuoi un supporto che si adatti davvero alla tua curva senza spendere più di 150 euro.",
  "avoidIf": "Cerchi un poggiapiedi per le pause o una seduta totalmente traspirante anche sotto le cosce.",
  "asin": "B09GNPLXMZ",
  "amazonTitle": "Ticova Sedia da Ufficio Ergonomica, Schienale Alto con Supporto Lombare, Poggiatesta & Braccioli 3D in Regolabili, Oscillazione a 130° da Scrivania Sedia da Computer Sedia a Rete",
  "imgs": [
   "https://m.media-amazon.com/images/I/61tCKoGwAUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81apMk1krbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71VsP4VG71L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71sVIdjzTyL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia a rete con schienale alto che a 150 euro porta una regolazione lombare su due assi, altezza e profondità, cosa che di solito si trova molto più in alto di prezzo. Braccioli 3D, poggiatesta orientabile e portata dichiarata 150 kg la rendono adatta a giornate lunghe davanti al monitor. Manca invece qualsiasi indicazione ufficiale sull'altezza dell'utente, e la reclinazione si blocca solo su tre posizioni.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 1991,
  "bsr": 22979,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "holludle-shaper1-braccioli-4d",
  "v": "sedie-ergonomiche",
  "brand": "HOLLUDLE",
  "name": "HOLLUDLE Shaper1",
  "price": 209.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Braccioli 4D e profondità della seduta regolabile, la coppia che manca quasi sempre sotto i 250 euro.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 4,
   "maxWeight": null,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false
  },
  "pros": [
   "Braccioli 4D completi, con regolazione anche laterale e rotazione",
   "Profondità della seduta regolabile: si adatta alla lunghezza delle gambe",
   "Supporto lombare regolabile in altezza e poggiatesta 2D",
   "Conformità dichiarata EN1335 e BIFMA, con 5 anni di garanzia",
   "Oltre 3.600 recensioni con media 4,4: campione molto solido"
  ],
  "cons": [
   "La portata massima in scheda Amazon è indicata come 1136 kg, un errore evidente: il dato reale non è verificabile, quindi chi supera i 110 kg resta senza garanzie",
   "Nessun angolo di reclinazione dichiarato e la scheda riporta \"Inclinato = No\"",
   "Niente poggiapiedi",
   "Prezzo sopra i 200 euro pur senza meccanica di reclinazione documentata"
  ],
  "buyIf": "Passi più di otto ore seduto e vuoi regolare ogni singolo punto di contatto, braccioli e profondità compresi.",
  "avoidIf": "Pesi oltre 110 kg e ti serve una portata dichiarata affidabile, oppure vuoi reclinarti all'indietro per le pause.",
  "asin": "B0BLNHPM3P",
  "amazonTitle": "HOLLUDLE Sedia da Ufficio Ergonomica con Schienale Regolabile, Sedile Regolabile in Profondità, Braccioli 4D, Supporto Lombare e Poggiatesta 2D, Girevole a 360°, Design Moderno, Bianca",
  "imgs": [
   "https://m.media-amazon.com/images/I/71Gt43giOPL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71guNvJVXrL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7126oY3ZB+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61dSXJ+UrhL._AC_SL1080_.jpg"
  ],
  "summary": "È la sedia della lista con più regolazioni effettive: braccioli 4D, profondità del sedile, lombare in altezza e poggiatesta 2D. A 210 euro copre bene chi sta seduto oltre otto ore e vuole tarare la postazione sul proprio corpo invece di adattarsi alla sedia. Il punto debole non è la sedia ma la sua scheda tecnica: la portata massima è indicata in modo palesemente sbagliato e la reclinazione non è documentata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 3655,
  "bsr": 18989,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "melokea-n045-200kg-persone-alte",
  "v": "sedie-ergonomiche",
  "brand": "MELOKEA",
  "name": "MELOKEA N045 Big & Tall",
  "price": 189.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "200 kg di portata e altezza utente dichiarata fino a 2 metri, messe nero su bianco.",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": true,
   "armrests": 4,
   "maxWeight": 200,
   "hMin": 155,
   "hMax": 200,
   "material": "mesh",
   "recline": 140,
   "footrest": false
  },
  "pros": [
   "Portata dichiarata 200 kg con base in acciaio da 3 mm: fra le più alte del catalogo",
   "Altezza utente dichiarata fino a 200 cm, dato che quasi nessun concorrente pubblica",
   "Supporto lombare dinamico con escursione dichiarata fino a 30 gradi",
   "Braccioli 4D e profondità della seduta regolabile di 5 cm",
   "Blocco della reclinazione su quattro posizioni: 90, 120, 130 e 140 gradi"
  ],
  "cons": [
   "Solo 147 recensioni: modello recente, storico di affidabilità ancora corto",
   "Niente poggiapiedi nonostante sia venduta anche come sedia gaming",
   "Prodotto pesante da montare, 17,45 kg dichiarati"
  ],
  "buyIf": "Superi 1,90 m o i 110 kg e sei stufo di sedie che ti stanno strette e cedono dopo pochi mesi.",
  "avoidIf": "Vuoi comprare solo modelli consolidati con migliaia di recensioni alle spalle.",
  "asin": "B0FT2F4Y7T",
  "amazonTitle": "MELOKEA Sedia Ufficio Ergonomica, Sedia Gaming per Persone Alte",
  "imgs": [
   "https://m.media-amazon.com/images/I/71z2nGP52qL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7101IhyiKxL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7118vSXGmUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71-11vJfoLL._AC_SL1500_.jpg"
  ],
  "summary": "Pensata esplicitamente per chi è alto o di corporatura robusta: il produttore dichiara 200 kg di portata e un intervallo di statura da 155 a 200 cm, informazione che la maggior parte dei concorrenti evita di pubblicare. Lombare dinamico, braccioli 4D e seduta regolabile in profondità completano il quadro a un prezzo intorno ai 190 euro. Il limite è il poco storico: è un modello nuovo con meno di 150 recensioni.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 147,
  "bsr": 30216,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "yaheetech-poggiapiedi-reclinabile",
  "v": "sedie-ergonomiche",
  "brand": "Yaheetech",
  "name": "Yaheetech Reclinabile con Poggiapiedi",
  "price": 119.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Il poggiapiedi estraibile a un prezzo dove di solito non c'è.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": null,
   "maxWeight": 136,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 130,
   "footrest": true
  },
  "pros": [
   "Poggiapiedi estraibile incluso a poco più di 100 euro",
   "Cuscino lombare regolabile su quattro direzioni: alto, basso, avanti e indietro",
   "Schienale bloccabile su tre angoli o libero in oscillazione",
   "Schienale in rete traspirante con seduta 52 x 52 cm in schiuma 28D",
   "BSR 2.009 in Casa e cucina: rotazione di vendita molto alta"
  ],
  "cons": [
   "Regolazione dei braccioli non specificata dal produttore: non si sa su quanti assi si muovano",
   "Portata 136 kg, inferiore alle sedie pensate per corporature robuste",
   "Peso dichiarato di soli 8,6 kg: struttura leggera, meno solida dei modelli da 17-20 kg"
  ],
  "buyIf": "Vuoi poterti reclinare e allungare le gambe durante le pause spendendo poco più di 100 euro.",
  "avoidIf": "Pesi oltre 110 kg o vuoi una struttura pesante e dichiaratamente robusta.",
  "asin": "B0HGQV6HQ6",
  "amazonTitle": "Yaheetech Poltrona/Sedia Ufficio Bloccabile Ergonomica con Poggiapiedi Nera",
  "imgs": [
   "https://m.media-amazon.com/images/I/718ROgc31BL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81oueEIq-EL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71bNto6DS-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81A+3H0Vs0L._AC_SL1500_.jpg"
  ],
  "summary": "Sedia in rete con poggiapiedi estraibile e schienale bloccabile su tre posizioni, pensata per chi alterna lavoro e pause senza alzarsi. Il cuscino lombare si muove su quattro direzioni e il poggiatesta è regolabile in altezza e inclinazione, un corredo insolito sotto i 120 euro. Pesa però solo 8,6 kg e il produttore non dichiara su quanti assi si regolino i braccioli.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 437,
  "bsr": 2009,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "corsair-tc100-relaxed-tessuto",
  "v": "sedie-ergonomiche",
  "brand": "Corsair",
  "name": "Corsair TC100 Relaxed Tessuto",
  "price": 315.75,
  "quality": 6,
  "checked": "2026-09-11",
  "tagline": "Gaming chair vera di marca, con seduta allargata e tessuto al posto della similpelle.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": null,
   "maxWeight": 120,
   "hMin": null,
   "hMax": null,
   "material": "fabric",
   "recline": 160,
   "footrest": false
  },
  "pros": [
   "Marchio gaming consolidato con 2 anni di garanzia dichiarati dal produttore",
   "Seduta larga 375 mm della serie Relaxed, più generosa delle gaming chair classiche",
   "Rivestimento in tessuto, più traspirante della similpelle a parità di modello",
   "Pistone a gas di classe 4 in acciaio con 100 mm di escursione",
   "Cuscino lombare e cuscino cervicale in memory foam inclusi"
  ],
  "cons": [
   "I braccioli sono indicati solo come regolabili, senza specificare gli assi: è il limite tipico delle gaming chair rispetto alle ergonomiche da ufficio",
   "Il lombare è un cuscino su cinghia, non un meccanismo integrato nello schienale",
   "Portata 120 kg, la più bassa fra i modelli robusti di questa selezione",
   "La pagina si contraddice sulla reclinazione: un punto dichiara 90-160 gradi e la riga successiva 90-150 gradi",
   "A 315 euro il prezzo di questa inserzione è nettamente sopra il listino abituale del modello"
  ],
  "buyIf": "Giochi diverse ore al giorno e vuoi una sedia da gaming di marca con garanzia e ricambi reperibili.",
  "avoidIf": "Ci lavori otto ore al giorno con problemi lombari: qui servono braccioli e lombare regolabili per assi, non cuscini.",
  "asin": "B0BN4LHDYR",
  "amazonTitle": "Corsair TC100 RELAXED - Sedia da gaming in tessuto, design ispirato alle corse, cuscino lombare in memory foam, cuscino per il collo rimovibile, altezza della seduta regolabile, braccioli regolabili,",
  "imgs": [
   "https://m.media-amazon.com/images/I/71THFpuBvnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71qdO0IQq+L._AC_SL1500_.jpg"
  ],
  "summary": "La TC100 Relaxed è una gaming chair nel senso stretto: scocca ispirata ai sedili sportivi, schienale alto reclinabile e cuscini lombare e cervicale in memory foam. La versione in tessuto è la scelta giusta per chi soffre il caldo, visto che la similpelle della stessa serie scalda parecchio. Resta però una sedia da gioco, non una ergonomica da ufficio: braccioli poco documentati, lombare a cuscino e portata ferma a 120 kg.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 459,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "xbull-gaming-xl-poggiapiedi",
  "v": "sedie-ergonomiche",
  "brand": "X-Bull",
  "name": "X-Bull Gaming XL con Poggiapiedi",
  "price": 148.9,
  "quality": 6,
  "checked": "2026-09-11",
  "tagline": "Sedia da gioco con poggiapiedi e schienale da 86 cm, sotto i 150 euro.",
  "attrs": {
   "lumbar": "fixed",
   "headrest": true,
   "armrests": 1,
   "maxWeight": 113,
   "hMin": null,
   "hMax": null,
   "material": "fabric",
   "recline": 150,
   "footrest": true
  },
  "pros": [
   "Gaming chair con poggiapiedi estraibile sotto i 150 euro",
   "Schienale alto 86 cm reclinabile fino a 150 gradi con blocco in posizione",
   "Schienale e seduta in tessuto oltre al PU: più traspirante della similpelle integrale",
   "Garanzia italiana 3 anni con assistenza telefonica ed email dichiarata",
   "Pistone a gas e ruote da 50 mm certificati BIFMA secondo la scheda"
  ],
  "cons": [
   "Braccioli regolabili solo in altezza: nessun movimento avanti-indietro o laterale",
   "Supporto lombare e poggiatesta sono cuscini removibili, non regolazioni integrate",
   "Portata dichiarata 113 kg: la più bassa della selezione, nonostante il nome XL",
   "La scheda Amazon indica come marca il venditore Piushopping, non X-Bull"
  ],
  "buyIf": "Vuoi una postazione da gioco con poggiapiedi spendendo poco e non ci passi otto ore di lavoro al giorno.",
  "avoidIf": "Pesi oltre 110 kg o hai problemi lombari che richiedono un supporto regolabile e non un cuscino.",
  "asin": "B0BTMCM1JM",
  "amazonTitle": "X-Bull - Sedia Gaming Ergonomica XL, Poltrona Gamer Ideale per Lavorare al PC, Sedia da Ufficio con Supporto Lombare, Reclinabile e Completamente Regolabile, Gaming Chair con Poggiapiedi in Tessuto",
  "imgs": [
   "https://m.media-amazon.com/images/I/51NFYQkrM5L._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61z6EmbgqIL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61NEPanrhyL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61NSgPKy9GL._AC_SL1000_.jpg"
  ],
  "summary": "Gaming chair in stile racing con poggiapiedi estraibile, schienale alto 86 cm reclinabile fino a 150 gradi e rivestimento misto tessuto e PU, che scalda meno della similpelle piena. A 149 euro è il modo più economico di questa selezione per avere seduta da gioco e pausa con gambe sollevate. In cambio l'ergonomia è basica: braccioli solo in altezza, lombare e poggiatesta a cuscino e portata ferma a 113 kg.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 394,
  "bsr": 55727,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "bosch-gbh-2-21-d",
  "v": "utensili-elettrici",
  "brand": "Bosch Professional",
  "name": "Bosch Professional GBH 2-21 D",
  "price": 112.03,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il tassellatore SDS-Plus di fascia media che fora davvero il cemento armato.",
  "attrs": {
   "torque": 21,
   "volts": null,
   "percussion": true,
   "sds": true,
   "brushless": false,
   "batteryIncl": false,
   "weight": 2.3,
   "eco": null
  },
  "pros": [
   "Attacco SDS-Plus: nel cemento fora dove un trapano a percussione si arrende",
   "2,3 kg dichiarati, leggero per la categoria",
   "Tre modalità: foratura, percussione e scalpellatura",
   "Linea Professional, valigetta e impugnatura supplementare incluse"
  ],
  "cons": [
   "A filo: serve una presa o una prolunga",
   "Motore con spazzole, niente brushless a questo prezzo",
   "Foratura nel cemento fino a 21 mm, per fori più grandi serve un modello superiore"
  ],
  "buyIf": "Devi forare cemento armato o pietra e vuoi un SDS-Plus di marca senza spendere da professionista.",
  "avoidIf": "Cerchi libertà di movimento a batteria o ti serve solo montare mobili e avvitare.",
  "asin": "B08XWN9H9N",
  "amazonTitle": "Martello perforatore GBH 2-21 D Bosch Professional (con SDS plus, incl. impugnatura supplementare, panno, asta di profondità, in valigetta)",
  "imgs": [
   "https://m.media-amazon.com/images/I/717k4cGvGbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71y6AlwYjdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51HGcaN9HNL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71ET27iKvKL._AC_SL1500_.jpg"
  ],
  "summary": "Martello perforatore a filo da 720 W con attacco SDS-Plus e 2,0 J di energia d'impatto, tre modalità (foratura, percussione, scalpellatura) e valigetta. È lo strumento giusto quando il trapano a percussione non basta più: cemento armato, pietra, fori per tasselli grossi. Pesa 2,3 kg dichiarati, quindi si regge bene anche in alto. Gli manca il cordless e il motore brushless: resta legato alla presa e ha spazzole da sostituire nel tempo.",
  "ean": "4059952569628",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.6,
  "reviews": 2546,
  "bsr": 2548,
  "bsrCat": "Fai da te"
 },
 {
  "id": "dewalt-dcf887n",
  "v": "utensili-elettrici",
  "brand": "DEWALT",
  "name": "DeWalt DCF887N XR",
  "price": 96.9,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "L'avvitatore a impulsi di riferimento, se hai già le batteria DeWalt 18V XR.",
  "attrs": {
   "torque": 205,
   "volts": 18,
   "percussion": false,
   "sds": false,
   "brushless": true,
   "batteryIncl": false,
   "weight": 1,
   "eco": "DeWalt XR 18V"
  },
  "pros": [
   "205 Nm dichiarati: vite da legno lunga o bullone arrugginito non lo fermano",
   "Motore brushless e tre velocità selezionabili, la più bassa evita di spanare le viti",
   "1 kg dichiarato, si usa a lungo senza affaticare il polso",
   "Oltre 5.000 recensioni con media 4,7, affidabilità documentata"
  ],
  "cons": [
   "Venduto nudo: batteria e caricabatterie non sono inclusi e costano quanto l'utensile",
   "È un avvitatore a impulsi, non fora la muratura: per i muri serve un altro attrezzo",
   "Attacco esagonale 1/4\", niente mandrino autoserrante per punte a gambo tondo"
  ],
  "buyIf": "Hai già batterie DeWalt 18V XR e vuoi il riferimento della categoria a un prezzo onesto.",
  "avoidIf": "Parti da zero senza batterie o ti serve un attrezzo che fori anche i muri.",
  "asin": "B01D4J5JMC",
  "amazonTitle": "DEWALT DCF887N XR Avvitatore a percussione a 3 Velocità, 18 V, 18 W, Unità Multipla",
  "imgs": [
   "https://m.media-amazon.com/images/I/71wrDUnX-RL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/614AuHKemsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71a-zOxMTGL._AC_SL1377_.jpg",
   "https://m.media-amazon.com/images/I/71-JZpZWZjL._AC_SL1500_.jpg"
  ],
  "summary": "Avvitatore a impulsi 18V brushless con 205 Nm di coppia dichiarata e tre modalità di velocità, venduto solo corpo macchina. Serve a chi avvita tutto il giorno: viti lunghe nel legno, tirafondi, bulloneria. Pesa 1 kg dichiarato ed è compatto. Il limite è doppio: niente batteria nella confezione e nessuna funzione di percussione, quindi nel muro non ci entra.",
  "ean": "5035048616130",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.7,
  "reviews": 5081,
  "bsr": 4194,
  "bsrCat": "Fai da te"
 },
 {
  "id": "stanley-fatmax-sfmcd721d2k",
  "v": "utensili-elettrici",
  "brand": "Stanley FatMax",
  "name": "Stanley FatMax V20 SFMCD721D2K",
  "price": 159.5,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Kit 18V brushless con due batterie, per chi parte da zero senza scendere di marca.",
  "attrs": {
   "torque": 80,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": null,
   "eco": "Stanley FatMax V20 18V"
  },
  "pros": [
   "Kit completo: due batterie 18V 2,0 Ah, caricabatterie e valigetta",
   "Motore brushless con 80 Nm dichiarati, coppia alta per la fascia",
   "Due velocità (0-600 e 0-2100 giri) e funzione percussione per i muri normali",
   "Entra nell'ecosistema V20, condiviso con il resto della gamma FatMax"
  ],
  "cons": [
   "Batterie da 2,0 Ah: autonomia corta se lavori a lungo, meglio prevedere una 4,0 Ah",
   "Il peso del solo utensile non è dichiarato (in pagina compare solo il peso del kit, 3,8 kg)",
   "Media 4,4 su 511 recensioni, buona ma non ai livelli di Makita o DeWalt"
  ],
  "buyIf": "Parti da zero e vuoi un kit brushless di marca con due batterie già nella scatola.",
  "avoidIf": "Hai già batterie Makita, Bosch o DeWalt: aggiungere un quarto ecosistema non ha senso.",
  "asin": "B085FY9G6X",
  "amazonTitle": "STANLEY FATMAX, TRAPANO AVVITATORE A PERCUSSIONE BRUSHLESS V20. SFMCD721D2K-QW",
  "imgs": [
   "https://m.media-amazon.com/images/I/81FB5nzGl-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81o085yTVfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81tdIQ0WgsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81eGVmk6mBL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano avvitatore a percussione 18V brushless con 80 Nm dichiarati, due velocità, due batterie 2,0 Ah, caricabatterie e valigetta. È il pacchetto pensato per chi non ha ancora nessuna batteria e vuole partire con un marchio serio invece che con un no-name. Fora legno fino a 40 mm e muratura fino a 13 mm. Le batterie piccole sono il compromesso che tiene basso il prezzo.",
  "ean": "5035048723883",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.4,
  "reviews": 511,
  "bsr": 10436,
  "bsrCat": "Fai da te"
 },
 {
  "id": "bosch-easydrill-18v-40",
  "v": "utensili-elettrici",
  "brand": "Bosch",
  "name": "Bosch EasyDrill 18V-40",
  "price": 88.85,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Il kit due batterie più economico che resta un Bosch vero.",
  "attrs": {
   "torque": 40,
   "volts": 18,
   "percussion": false,
   "sds": false,
   "brushless": false,
   "batteryIncl": true,
   "weight": null,
   "eco": "Bosch Home and Garden 18V"
  },
  "pros": [
   "Due batterie 18V 2,0 Ah e caricabatterie inclusi sotto i 90 euro",
   "Due velocità meccaniche e 20 livelli di frizione, raro in questa fascia",
   "Mandrino autoserrante da 13 mm, accetta anche punte grosse",
   "Batteria condivisa con il sistema 18V Bosch casa e giardino"
  ],
  "cons": [
   "Non ha la percussione: nel mattone pieno o nel cemento non ci fai nulla",
   "40 Nm dichiarati, coppia modesta per viti lunghe o frese a tazza",
   "Motore con spazzole, non brushless"
  ],
  "buyIf": "Devi soprattutto avvitare e forare legno, e vuoi due batterie incluse spendendo poco.",
  "avoidIf": "Devi forare muri in cemento o mattone: senza percussione non ci arrivi.",
  "asin": "B09PLLHS2P",
  "amazonTitle": "Bosch Trapano avvitatore a batteria EasyDrill 18V-40 (2 batterie da 2,0 Ah, sistema 18 volt, in custodia per il trasporto)",
  "imgs": [
   "https://m.media-amazon.com/images/I/61Hj7opVZTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61TYSL8DcDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71G96yUiUnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Eq0EJVMAL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano avvitatore 18V con due batterie 2,0 Ah, caricabatterie e custodia, 40 Nm dichiarati, due velocità e 20 livelli di coppia. È il punto di partenza per chi monta mobili, appende mensole su legno o cartongesso e non vuole un attrezzo usa e getta. Manca però la percussione: sui muri in cemento o mattone pieno non è l'attrezzo giusto, e la coppia resta contenuta.",
  "ean": "4053423232561",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.6,
  "reviews": 1243,
  "bsr": 1366,
  "bsrCat": "Fai da te"
 },
 {
  "id": "bosch-easyimpact-600",
  "v": "utensili-elettrici",
  "brand": "Bosch",
  "name": "Bosch EasyImpact 600",
  "price": 49.95,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il trapano a filo che costa poco e basta per il fai da te occasionale.",
  "attrs": {
   "torque": 15,
   "volts": null,
   "percussion": true,
   "sds": false,
   "brushless": false,
   "batteryIncl": false,
   "weight": 1.7,
   "eco": null
  },
  "pros": [
   "Sotto i 50 euro con valigetta inclusa",
   "600 W e percussione: muratura fino a 12 mm, legno fino a 25 mm",
   "1,7 kg dichiarati e mandrino autoserrante a doppia bussola",
   "Oltre 5.000 recensioni con media 4,5, prodotto molto rodato"
  ],
  "cons": [
   "A filo e senza frizione regolabile: per avvitare è impreciso, rischi di spanare",
   "15 Nm dichiarati e una sola velocità meccanica, niente lavori pesanti",
   "Linea casa e giardino, non pensato per l'uso quotidiano"
  ],
  "buyIf": "Ti serve forare muri normali poche volte all'anno spendendo il minimo indispensabile.",
  "avoidIf": "Devi avvitare spesso o lavorare lontano da una presa di corrente.",
  "asin": "B092ZNHV8K",
  "amazonTitle": "Bosch Home and Garden Bosch Trapano Elettrico a Percussione EasyImpact 600 (600 W, in Valigetta), Verde, 1/2 pollice",
  "imgs": [
   "https://m.media-amazon.com/images/I/51LE8YgJKXL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61bDQD-HBsL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61oGD80w9CL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61DOJNg4UnL._AC_SL1000_.jpg"
  ],
  "summary": "Trapano a percussione a filo da 600 W con mandrino autoserrante da 13 mm e valigetta, sotto i 50 euro. Serve a chi appende mensole, tende e quadri qualche volta all'anno e non vuole pensare alle batterie che si scaricano nel cassetto. Fora muratura fino a 12 mm. Non è un avvitatore: senza frizione e con una sola velocità, per montare mobili resta scomodo.",
  "ean": "4059952576305",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 5041,
  "bsr": 473,
  "bsrCat": "Fai da te"
 },
 {
  "id": "worx-wx352",
  "v": "utensili-elettrici",
  "brand": "WORX",
  "name": "Worx WX352 PowerShare",
  "price": 169.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Kit brushless che condivide la batteria con tosaerba e decespugliatori Worx.",
  "attrs": {
   "torque": 60,
   "volts": 20,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": null,
   "eco": "Worx PowerShare 20V"
  },
  "pros": [
   "Motore brushless con 60 Nm dichiarati e caricatore rapido da un'ora",
   "Due batterie 20V 2,0 Ah, caricabatterie e valigetta nella confezione",
   "Piattaforma PowerShare: la stessa batteria va anche sugli attrezzi da giardino Worx",
   "Due velocità più percussione, copre avvitare, forare e muri normali"
  ],
  "cons": [
   "Costa più di kit equivalenti di marchi più diffusi",
   "Batterie da 2,0 Ah, autonomia limitata sui lavori lunghi",
   "Il peso del solo utensile non è dichiarato in pagina",
   "Ecosistema Worx meno ricco di utensili professionali rispetto a Makita o DeWalt"
  ],
  "buyIf": "Hai già attrezzi Worx 20V da giardino e vuoi riusare le stesse batterie in casa.",
  "avoidIf": "Cerchi il miglior rapporto coppia/prezzo o punti a un ecosistema professionale.",
  "asin": "B08HSGQ7P6",
  "amazonTitle": "WORX WX352 Trapano avvitatore a percussione, 2 batterie e caricabatterie",
  "imgs": [
   "https://m.media-amazon.com/images/I/81sjrD6jTUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51aLp8D7L4L._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61Dnr-ai5XL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51wKa3S8n0L._AC_SL1000_.jpg"
  ],
  "summary": "Trapano avvitatore a percussione 20V brushless con 60 Nm dichiarati, due velocità, due batterie 2,0 Ah, caricatore rapido e valigetta. Ha senso soprattutto se hai o vuoi attrezzi da giardino Worx: la batteria PowerShare è la stessa e non ti ritrovi due caricabatterie diversi. Il prezzo è più alto della concorrenza a parità di coppia, e le batterie incluse sono le più piccole della gamma.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 517,
  "bsr": 3673,
  "bsrCat": "Fai da te"
 },
 {
  "id": "sony-fe-50-f18",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony FE 50mm f/1.8",
  "price": 193.41,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Il fisso luminoso piu economico per entrare nei ritratti su Sony E",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 50,
   "focalMax": 50,
   "apertureMax": 1.8,
   "stabilized": false,
   "macro": false,
   "weight": 186,
   "type": "ritratto"
  },
  "pros": [
   "Fisso f/1.8 luminoso a un prezzo di ingresso, ottimo per ritratti e poca luce",
   "Molto leggero e compatto (186 g), non appesantisce le mirrorless Alpha",
   "Su corpi full frame copre il classico angolo da 50mm, su APS-C diventa un tele corto da ritratto"
  ],
  "cons": [
   "Autofocus non fulmineo e un po' rumoroso rispetto ai fissi piu recenti",
   "Nessuna stabilizzazione propria: conta sullo stabilizzatore del corpo"
  ],
  "buyIf": "Chi ha una Sony Alpha e vuole il primo fisso luminoso per ritratti e foto al chiuso spendendo poco.",
  "avoidIf": "Chi insegue autofocus rapidissimo per soggetti in movimento o vuole la stabilizzazione nell'obiettivo.",
  "asin": "B01DLMD5O6",
  "amazonTitle": "Sony SEL50F18F - 50mm f/1.8 Standard Lens (Full Frame, E-Mount, Bokeh Soft, Ideal for Portrait, Compatible with Alpha 7/7II/7III/7IV)",
  "imgs": [
   "https://m.media-amazon.com/images/I/61stH431xPL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31Veccow7XL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/4139P2YLuKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41M8yJS7ymL._AC_SL1500_.jpg"
  ],
  "summary": "Un 50mm f/1.8 pensato per chi ha una Sony mirrorless e vuole il primo obiettivo luminoso senza spendere tanto. Stacca bene lo sfondo nei ritratti e rende in casa con poca luce, dove uno zoom da kit fatica. Compatto e leggero, resta un obiettivo di fascia base: la messa a fuoco automatica non e la piu rapida e non c'e stabilizzazione integrata.",
  "ean": "4548736033092",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 04548736033092; checksum EAN-13 valido",
  "rating": 4.5,
  "reviews": 7104,
  "bsr": 35469,
  "bsrCat": "Elettronica"
 },
 {
  "id": "tamron-28-75-f28-g2-sony-e",
  "v": "obiettivi-fotografici",
  "brand": "Tamron",
  "name": "Tamron 28-75mm f/2.8 Di III VXD G2",
  "price": 749,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Lo zoom f/2.8 tuttofare che molti scelgono al posto del Sony di serie",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 28,
   "focalMax": 75,
   "apertureMax": 2.8,
   "stabilized": false,
   "macro": false,
   "weight": 540,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Apertura costante f/2.8 su tutta l'escursione, resa e luce da obiettivo serio a un prezzo umano",
   "Seconda generazione con messa a fuoco VXD piu rapida e silenziosa, buona per foto e video",
   "Peso contenuto (540 g) per uno zoom f/2.8, comodo tutto il giorno sulle Alpha"
  ],
  "cons": [
   "Nessuna stabilizzazione ottica: su corpi Sony senza stabilizzazione sul sensore serve attenzione",
   "Escursione 28-75, meno grandangolo di un 24mm all'estremita corta"
  ],
  "buyIf": "Chi ha una Sony full frame o APS-C e vuole un solo zoom luminoso per quasi tutto, senza spendere come il Sony pari classe.",
  "avoidIf": "Chi ha un corpo senza stabilizzazione sul sensore e scatta spesso a mano libera in poca luce, o vuole partire da 24mm.",
  "asin": "B09HL44W23",
  "amazonTitle": "Tamron 28-75mm F/2.8 Di III VXD G2 Lens for Sony E-Mount Black, Single",
  "imgs": [
   "https://m.media-amazon.com/images/I/51fkuAUllyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41IrvKzdw8L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41SwYGUuglL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41CJUhAEL6L._AC_SL1500_.jpg"
  ],
  "summary": "Zoom standard a luminosita costante f/2.8 per Sony E, l'alternativa piu popolare ai corrispondenti Sony che costano molto di piu. Copre dal grandangolo moderato al piccolo tele, quindi va bene per viaggio, reportage, ritratti ambientati e video. La seconda generazione migliora autofocus e resa ai bordi. Non ha stabilizzazione nell'obiettivo, quindi da il meglio su corpi con stabilizzazione sul sensore.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 816,
  "bsr": 38881,
  "bsrCat": "Informatica"
 },
 {
  "id": "tamron-70-300-rxd-sony-e",
  "v": "obiettivi-fotografici",
  "brand": "Tamron",
  "name": "Tamron 70-300mm f/4.5-6.3 Di III RXD",
  "price": 463.3,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il tele 70-300 leggero ed economico per la prima volta a lungo raggio",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 70,
   "focalMax": 300,
   "apertureMax": 4.5,
   "stabilized": false,
   "macro": false,
   "weight": 545,
   "type": "teleobiettivo"
  },
  "pros": [
   "Arriva a 300mm restando leggero (545 g) e non ingombrante per un tele di questa portata",
   "Messa a fuoco RXD silenziosa e regolare, adatta anche al video",
   "Prezzo accessibile per entrare nella fotografia di soggetti lontani su Sony E"
  ],
  "cons": [
   "Buio all'estremita lunga (f/6.3 a 300mm): vuole luce o ISO alti",
   "Senza stabilizzazione ottica, meglio con corpi stabilizzati sul sensore"
  ],
  "buyIf": "Chi ha una Sony e vuole il primo teleobiettivo leggero per soggetti lontani con una spesa contenuta.",
  "avoidIf": "Chi fotografa spesso al tramonto o al chiuso a lunga focale, dove f/6.3 e la mancanza di stabilizzazione pesano.",
  "asin": "B08K3MXZCZ",
  "amazonTitle": "Tamron 70-300mm F/4.5-6.3 Di III RXD for Sony Mirrorless/APS-C E-Mount Full Frame (Tamron 6 Years Limited US Warranty), Black",
  "imgs": [
   "https://m.media-amazon.com/images/I/61vhszHP8aL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31m4fZGoHCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31X4H5jVPHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41PZcPGD2ML._AC_SL1500_.jpg"
  ],
  "summary": "Teleobiettivo 70-300 per Sony E pensato per chi vuole avvicinare sport, animali e scene lontane senza spendere una fortuna. Resta sorprendentemente leggero per la focale e mette a fuoco in modo silenzioso. La luminosita cala a f/6.3 sul lungo, quindi rende di piu con buona luce o alzando gli ISO, e non ha stabilizzazione integrata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 680,
  "bsr": 148209,
  "bsrCat": "Elettronica"
 },
 {
  "id": "canon-rf-24-105-f4-71-stm",
  "v": "obiettivi-fotografici",
  "brand": "Canon",
  "name": "Canon RF 24-105mm f/4-7.1 IS STM",
  "price": 379,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Lo zoom unico da viaggio per le mirrorless Canon R, leggero e versatile",
  "attrs": {
   "mount": "Canon RF",
   "focalMin": 24,
   "focalMax": 105,
   "apertureMax": 4,
   "stabilized": true,
   "macro": false,
   "weight": 395,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Escursione ampia 24-105 che copre grandangolo, ritratto e piccolo tele in un solo obiettivo",
   "Stabilizzatore integrato utile a mano libera e nei video",
   "Leggero (395 g) e compatto, ideale come zoom unico da viaggio su mirrorless Canon R"
  ],
  "cons": [
   "Luminosita modesta e variabile (f/4-7.1): al chiuso e sul tele serve luce o ISO alti",
   "Costruzione economica, non e un obiettivo da poca luce"
  ],
  "buyIf": "Chi ha una Canon EOS R e vuole un solo zoom leggero e versatile per viaggio e uso quotidiano.",
  "avoidIf": "Chi scatta spesso al chiuso o cerca sfocato marcato: l'apertura f/4-7.1 e limitante.",
  "asin": "B084BKXDLD",
  "amazonTitle": "Canon RF24-105mm F4-7.1 is STM",
  "imgs": [
   "https://m.media-amazon.com/images/I/71gGS5cQc0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31tYG5PxVaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51-BxD6i8sL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31wNFYiDhuL._AC_SL1500_.jpg"
  ],
  "summary": "Zoom tuttofare 24-105 per il sistema Canon RF, spesso venduto come obiettivo del kit. Con una sola ottica passi da paesaggi e interni al ritratto e al piccolo tele, quindi e la scelta comoda per chi vuole viaggiare leggero. La luminosita e modesta e cala parecchio sul lungo, ma lo stabilizzatore aiuta a mano libera. Buon compromesso per uso generale, non per la poca luce.",
  "ean": "0013803330250",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00013803330250; checksum EAN-13 valido",
  "rating": 4.4,
  "reviews": 318,
  "bsr": 78613,
  "bsrCat": "Elettronica"
 },
 {
  "id": "canon-rf-100-400-f56-8-usm",
  "v": "obiettivi-fotografici",
  "brand": "Canon",
  "name": "Canon RF 100-400mm f/5.6-8 IS USM",
  "price": 803.7,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Il tele 100-400 leggero per portare le mirrorless Canon R lontano",
  "attrs": {
   "mount": "Canon RF",
   "focalMin": 100,
   "focalMax": 400,
   "apertureMax": 5.6,
   "stabilized": true,
   "macro": false,
   "weight": null,
   "type": "teleobiettivo"
  },
  "pros": [
   "Arriva a 400mm restando leggero e maneggevole rispetto ai tele tradizionali",
   "Stabilizzatore dichiarato fino a 5,5 stop, prezioso a mano libera su focali lunghe",
   "Messa a fuoco USM rapida e silenziosa, buona per animali e sport a distanza"
  ],
  "cons": [
   "Poco luminoso all'estremita lunga (f/8 a 400mm): rende meglio con tanta luce",
   "Compatibile solo con corpi mirrorless Canon RF, non con le reflex EF"
  ],
  "buyIf": "Chi ha una Canon EOS R e vuole un tele lungo, leggero e nitido per animali e sport senza portare un obiettivo enorme.",
  "avoidIf": "Chi scatta molto in condizioni di luce scarsa a lunga focale o ha ancora una reflex Canon EF.",
  "asin": "B09G8J5WNZ",
  "amazonTitle": "Canon 100-400mm F5.6-8 IS USM RF Lens - Zoom Telephoto Lens with 5.5 Stop Optical Stabilizer | Compatible with Canon Cameras EOS R System",
  "imgs": [
   "https://m.media-amazon.com/images/I/61blJ1Ur6eL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/318fDsVb5cL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/417z24crdFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41yg3u1wIOL._AC_SL1500_.jpg"
  ],
  "summary": "Teleobiettivo 100-400 del sistema Canon RF, molto amato perche arriva davvero lontano restando leggero e trasportabile. E la scelta naturale per chi fotografa animali, aerei o sport dalle tribune con una EOS R. Lo stabilizzatore aiuta molto sul lungo, ma l'apertura f/8 a 400mm chiede luce buona o ISO piu alti quando cala il sole.",
  "ean": "4549292186765",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 04549292186765; checksum EAN-13 valido",
  "rating": 4.7,
  "reviews": 744,
  "bsr": 34214,
  "bsrCat": "Elettronica"
 },
 {
  "id": "canon-ef-50-f18-stm",
  "v": "obiettivi-fotografici",
  "brand": "Canon",
  "name": "Canon EF 50mm f/1.8 STM",
  "price": 129.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il fisso luminoso piu venduto: ritratti sfocati con pochi euro su reflex Canon",
  "attrs": {
   "mount": "Canon EF",
   "focalMin": 50,
   "focalMax": 50,
   "apertureMax": 1.8,
   "stabilized": false,
   "macro": false,
   "weight": 160,
   "type": "ritratto"
  },
  "pros": [
   "Fisso f/1.8 luminoso a prezzo molto basso, il classico primo obiettivo per staccare lo sfondo",
   "Leggerissimo (160 g), sta sempre nella borsa",
   "Messa a fuoco STM piu silenziosa e fluida della vecchia versione, comoda anche in video"
  ],
  "cons": [
   "Solo attacco EF per reflex Canon (su mirrorless R serve l'adattatore)",
   "Costruzione plasticosa e nessuna stabilizzazione"
  ],
  "buyIf": "Chi ha una reflex Canon EF e vuole il primo fisso luminoso per ritratti e poca luce spendendo pochissimo.",
  "avoidIf": "Chi ha una mirrorless Canon R e non vuole usare l'adattatore, o cerca una costruzione robusta.",
  "asin": "B00X8MRBCW",
  "amazonTitle": "Canon Ef 50Mm F/1.8 stm, 4.30in. x 4.30in. x 4.20in.",
  "imgs": [
   "https://m.media-amazon.com/images/I/61FX0sONwnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41EWQhI5vvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41EH3vIyOAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31-98tBkvQL._AC_SL1500_.jpg"
  ],
  "summary": "Il classico 50mm f/1.8 Canon, uno degli obiettivi piu venduti di sempre e il primo passo naturale oltre lo zoom del kit su una reflex EOS. Costa poco, pesa niente e con l'apertura f/1.8 regala ritratti con sfondo morbido e buone foto al chiuso. La versione STM mette a fuoco in modo piu silenzioso. Resta un obiettivo economico nella costruzione e senza stabilizzazione.",
  "ean": "0013803256871",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00013803256871; checksum EAN-13 valido",
  "rating": 4.7,
  "reviews": 17992,
  "bsr": 153248,
  "bsrCat": "Elettronica"
 },
 {
  "id": "canon-ef-75-300-f4-56-iii",
  "v": "obiettivi-fotografici",
  "brand": "Canon",
  "name": "Canon EF 75-300mm f/4-5.6 III",
  "price": 229.46,
  "quality": 6,
  "checked": "2026-09-11",
  "tagline": "Il tele 75-300 piu economico per provare la lunga focale su reflex Canon",
  "attrs": {
   "mount": "Canon EF",
   "focalMin": 75,
   "focalMax": 300,
   "apertureMax": 4,
   "stabilized": false,
   "macro": false,
   "weight": 480,
   "type": "teleobiettivo"
  },
  "pros": [
   "Arriva a 300mm a un prezzo di ingresso, il modo piu economico per provare il tele su reflex Canon",
   "Leggero (480 g) e semplice da usare",
   "Enorme base di utenti e disponibilita, un vero standard entry level"
  ],
  "cons": [
   "Nessuna stabilizzazione: sul lungo servono tempi rapidi o cavalletto",
   "Nitidezza e autofocus modesti a 300mm, resa che tradisce il prezzo"
  ],
  "buyIf": "Chi ha una reflex Canon e vuole provare la lunga focale con la spesa minima e tanta luce a disposizione.",
  "avoidIf": "Chi cerca nitidezza seria a 300mm o scatta spesso in poca luce: senza stabilizzazione e a f/5.6 si fatica.",
  "asin": "B00004THD0",
  "amazonTitle": "Canon EF 75-300mm f/4-5.6 III Telephoto lens Zoom",
  "imgs": [
   "https://m.media-amazon.com/images/I/71jaXsf9v0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31IPDW1W6dL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/21tuuAPhVoL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/4142rsG0TEL._AC_SL1500_.jpg"
  ],
  "summary": "Teleobiettivo 75-300 per reflex Canon EF, storicamente l'ottica piu economica per chi vuole avvicinare soggetti lontani senza investire. Va bene per iniziare a fotografare sport, luna o animali con tanta luce. Non ha stabilizzazione e la resa a 300mm e modesta, quindi e un obiettivo da primo tele piu che da risultati esigenti, ma il rapporto tra spesa e portata resta imbattibile.",
  "ean": "0082966214073",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00082966214073; checksum EAN-13 valido",
  "rating": 4.6,
  "reviews": 5401,
  "bsr": 70858,
  "bsrCat": "Elettronica"
 },
 {
  "id": "nikon-z-24-70-f4-s",
  "v": "obiettivi-fotografici",
  "brand": "Nikon",
  "name": "Nikkor Z 24-70mm f/4 S",
  "price": 622.85,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Lo zoom standard di qualita per le mirrorless Nikon Z, compatto e nitido",
  "attrs": {
   "mount": "Nikon Z",
   "focalMin": 24,
   "focalMax": 70,
   "apertureMax": 4,
   "stabilized": false,
   "macro": false,
   "weight": 500,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Apertura costante f/4 e resa nitida e uniforme, qualita superiore a molti zoom da kit",
   "Compatto e leggero (500 g) con costruzione S di buon livello",
   "Escursione 24-70 classica per viaggio, paesaggio e ritratto ambientato"
  ],
  "cons": [
   "f/4 fisso: buono ma non da poca luce spinta come un f/2.8",
   "Nessuna stabilizzazione nell'obiettivo, si appoggia a quella del corpo"
  ],
  "buyIf": "Chi ha una Nikon Z e vuole un solo zoom di qualita, leggero e nitido, per viaggio e uso quotidiano.",
  "avoidIf": "Chi scatta spesso al buio o cerca lo sfocato marcato di un f/2.8.",
  "asin": "B07GPX4HK5",
  "amazonTitle": "NIKON Objectif NIKKOR Z 24-70mm f/4 S",
  "imgs": [
   "https://m.media-amazon.com/images/I/81M8Ai7roKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31YdrMLrzEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31k1O3c3ThL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31KeVBGGbSL._AC_SL1500_.jpg"
  ],
  "summary": "Zoom standard 24-70 a luminosita costante f/4 per il sistema Nikon Z, spesso proposto come obiettivo del kit ma di livello superiore ai classici zoom economici. Copre l'escursione piu usata per viaggio, paesaggio e ritratti ambientati, con resa nitida e uniforme e corpo compatto. Non e un f/2.8 da poca luce, ma per uso generale il compromesso tra qualita, peso e prezzo e ottimo.",
  "ean": "0018208200726",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00018208200726; checksum EAN-13 valido",
  "rating": 4.6,
  "reviews": 237,
  "bsr": 323635,
  "bsrCat": "Elettronica"
 },
 {
  "id": "nikon-z-50-f18-s",
  "v": "obiettivi-fotografici",
  "brand": "Nikon",
  "name": "Nikkor Z 50mm f/1.8 S",
  "price": 575.35,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Un 50mm f/1.8 dalla nitidezza notevole per le mirrorless Nikon Z",
  "attrs": {
   "mount": "Nikon Z",
   "focalMin": 50,
   "focalMax": 50,
   "apertureMax": 1.8,
   "stabilized": false,
   "macro": false,
   "weight": 415,
   "type": "ritratto"
  },
  "pros": [
   "Nitidezza molto alta anche a tutta apertura, tra i migliori 50mm della categoria",
   "f/1.8 luminoso per ritratti con bel distacco dello sfondo e foto al chiuso",
   "Costruzione S curata e messa a fuoco silenziosa, ottimo anche in video"
  ],
  "cons": [
   "Piu grande e caro di un tipico 50mm f/1.8 di altri sistemi",
   "Nessuna stabilizzazione integrata (affidata al corpo)"
  ],
  "buyIf": "Chi ha una Nikon Z e vuole un 50mm nitido e luminoso per ritratti e poca luce, curando la qualita.",
  "avoidIf": "Chi cerca il fisso piu piccolo ed economico possibile o vuole la stabilizzazione nell'obiettivo.",
  "asin": "B07L5B24D9",
  "amazonTitle": "Nikon Nikkor Z 50mm f/1.8 S Mirrorless FX Lens Nital Version",
  "imgs": [
   "https://m.media-amazon.com/images/I/812WiYj9AJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31Z1xSI6y3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31576GZHakL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31IaLF5l2mL._AC_SL1500_.jpg"
  ],
  "summary": "Il 50mm f/1.8 della serie S per Nikon Z e famoso per una nitidezza molto alta gia a tutta apertura, ben oltre quanto ci si aspetta da un f/1.8. E la scelta di riferimento per ritratti e foto al chiuso su corpi Z, con sfocato pulito e messa a fuoco silenziosa. Rispetto ai 50mm f/1.8 di altri marchi e piu grande e costoso, ma la resa ottica lo giustifica.",
  "ean": "8058640140503",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 08058640140503 (barcode distributore Nital); checksum EAN-13 valido",
  "rating": 4.9,
  "reviews": 53,
  "bsr": 37386,
  "bsrCat": "Elettronica"
 },
 {
  "id": "nikon-af-s-50-f14g",
  "v": "obiettivi-fotografici",
  "brand": "Nikon",
  "name": "Nikkor AF-S 50mm f/1.4G",
  "price": 283.75,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il 50mm f/1.4 da ritratto per reflex Nikon, sfocato generoso in poca luce",
  "attrs": {
   "mount": "Nikon F",
   "focalMin": 50,
   "focalMax": 50,
   "apertureMax": 1.4,
   "stabilized": false,
   "macro": false,
   "weight": 280,
   "type": "ritratto"
  },
  "pros": [
   "Apertura f/1.4 molto luminosa, sfocato morbido e ottima resa in poca luce",
   "Motore AF-S: mette a fuoco in automatico anche sulle reflex Nikon piu economiche",
   "Fisso classico da ritratto con migliaia di recensioni alle spalle"
  ],
  "cons": [
   "Autofocus non velocissimo per i canoni odierni",
   "Nessuna stabilizzazione (tipico dei fissi)"
  ],
  "buyIf": "Chi ha una reflex Nikon e vuole un 50mm molto luminoso per ritratti e poca luce, con AF garantito su ogni corpo.",
  "avoidIf": "Chi insegue autofocus rapidissimo per l'azione o e gia passato alle mirrorless Nikon Z senza adattatore.",
  "asin": "B001GCVA0U",
  "amazonTitle": "Nikon AF-S Nikkor 50mm f/1.4G Lens, Black [EU Version]",
  "imgs": [
   "https://m.media-amazon.com/images/I/51mMn9uQNgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41Kj86vSRdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41NVNnpPl8L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51-IE2SrNFL._AC_SL1500_.jpg"
  ],
  "summary": "Fisso 50mm f/1.4 per reflex Nikon con attacco F, un riferimento per ritratti e fotografia in poca luce grazie all'apertura molto ampia. Il motore AF-S lo rende compatibile con la messa a fuoco automatica anche sui corpi Nikon di fascia bassa, cosa che il vecchio 50 f/1.4D non permetteva. Sfocato morbido e resa collaudata, con un autofocus non fulmineo ma affidabile.",
  "ean": "0018208021802",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00018208021802; checksum EAN-13 valido",
  "rating": 4.7,
  "reviews": 2008,
  "bsr": 70824,
  "bsrCat": "Elettronica"
 },
 {
  "id": "fujifilm-xf-18-55-f28-4-ois",
  "v": "obiettivi-fotografici",
  "brand": "Fujifilm",
  "name": "Fujinon XF 18-55mm f/2.8-4 R LM OIS",
  "price": 316,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il kit zoom Fuji che sembra un obiettivo serio: luminoso, metallico, stabilizzato",
  "attrs": {
   "mount": "Fujifilm X",
   "focalMin": 18,
   "focalMax": 55,
   "apertureMax": 2.8,
   "stabilized": true,
   "macro": false,
   "weight": 310,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Molto piu luminoso di un normale zoom da kit (f/2.8-4), buono anche al chiuso",
   "Stabilizzazione OIS integrata, utile a mano libera e in video",
   "Costruzione in metallo e ghiere fluide, resa nitida su tutta l'escursione"
  ],
  "cons": [
   "Escursione 18-55 (circa 27-84mm equivalenti), poco tele per soggetti lontani",
   "Prezzo da solo piu alto di un kit base, conviene se preso col corpo"
  ],
  "buyIf": "Chi ha una Fujifilm X e vuole un tuttofare luminoso e stabilizzato, meglio di un semplice zoom da kit.",
  "avoidIf": "Chi ha bisogno di focali lunghe per soggetti lontani o vuole spendere il minimo indispensabile.",
  "asin": "B0092MD6S0",
  "amazonTitle": "Fujifilm Fujinon XF18-55mmF2.8-4 R LM OIS Zoom Lens",
  "imgs": [
   "https://m.media-amazon.com/images/I/51eM0rHpBGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/419VQAWLh0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31m3Bfd7t1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51aWBLvTVpL._AC_SL1500_.jpg"
  ],
  "summary": "Zoom standard per le mirrorless Fujifilm X, molto piu ambizioso dei classici obiettivi del kit: e luminoso f/2.8-4, ha stabilizzazione OIS e una costruzione metallica solida. Copre dal grandangolo moderato al ritratto corto, quindi e un ottimo tuttofare per viaggio e uso quotidiano. Non arriva sul tele, ma come unica ottica di qualita per iniziare bene su Fuji e difficile da battere.",
  "ean": "0074101017342",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00074101017342; checksum EAN-13 valido",
  "rating": 4.6,
  "reviews": 247,
  "bsr": 448136,
  "bsrCat": "Elettronica"
 },
 {
  "id": "fujifilm-xf-55-200-ois",
  "v": "obiettivi-fotografici",
  "brand": "Fujifilm",
  "name": "Fujinon XF 55-200mm f/3.5-4.8 R LM OIS",
  "price": 629.08,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Il tele Fuji di qualita: luminoso e stabilizzato per arrivare lontano",
  "attrs": {
   "mount": "Fujifilm X",
   "focalMin": 55,
   "focalMax": 200,
   "apertureMax": 3.5,
   "stabilized": true,
   "macro": false,
   "weight": 580,
   "type": "teleobiettivo"
  },
  "pros": [
   "Buona luminosita per un tele (f/3.5-4.8), migliore dei tele economici f/5.6-6.3",
   "Stabilizzazione OIS efficace, aiuta molto sulle focali lunghe a mano libera",
   "Resa nitida e costruzione curata, arriva a 200mm (circa 300mm equivalenti)"
  ],
  "cons": [
   "Ingombro e peso (580 g) maggiori di un tele plasticoso entry level",
   "Prezzo non basso per chi vuole solo provare la lunga focale"
  ],
  "buyIf": "Chi ha una Fujifilm X e vuole un tele luminoso e stabilizzato di qualita per natura, sport e ritratti a distanza.",
  "avoidIf": "Chi cerca il tele piu leggero ed economico solo per provare, o vuole spendere poco.",
  "asin": "B00CE613FE",
  "amazonTitle": "Fujifilm Fujinon Zoom Lens 55-200 mm, F/3.5-4.8, R Lm Ois, X Mount Mount, Black",
  "imgs": [
   "https://m.media-amazon.com/images/I/81G+c+7JiaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/312Ws68LzZL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31i9ix-rhsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31tQ-kSvomL._AC_SL1500_.jpg"
  ],
  "summary": "Teleobiettivo 55-200 per il sistema Fujifilm X, la scelta di riferimento per chi vuole avvicinare soggetti lontani mantenendo qualita e luminosita superiori ai tele economici. Ha stabilizzazione OIS, ghiere fluide e resa nitida, e copre bene ritratti a distanza, sport amatoriale e natura. Pesa e costa piu di un tele base, ma restituisce immagini di un altro livello.",
  "ean": "0074101021950",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00074101021950; checksum EAN-13 valido",
  "rating": 4.4,
  "reviews": 419,
  "bsr": 132231,
  "bsrCat": "Elettronica"
 },
 {
  "id": "panasonic-leica-dg-12-60-f28-4",
  "v": "obiettivi-fotografici",
  "brand": "Panasonic",
  "name": "Leica DG Vario-Elmarit 12-60mm f/2.8-4",
  "price": 663.89,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il tuttofare tropicalizzato di qualita per Micro 4/3, dal grandangolo al tele corto",
  "attrs": {
   "mount": "Micro 4/3",
   "focalMin": 12,
   "focalMax": 60,
   "apertureMax": 2.8,
   "stabilized": true,
   "macro": false,
   "weight": 320,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Escursione 12-60 (24-120mm equivalenti) che copre dal grandangolo al tele corto",
   "Luminoso f/2.8-4 con stabilizzazione Power OIS e tropicalizzazione",
   "Compatto e leggero (320 g) per la qualita che offre, ottimo tuttofare"
  ],
  "cons": [
   "Prezzo alto per la fascia Micro 4/3",
   "Non e un f/2.8 costante su tutta l'escursione"
  ],
  "buyIf": "Chi ha una mirrorless Micro 4/3 e vuole un solo zoom versatile, luminoso e tropicalizzato per viaggio e uso quotidiano.",
  "avoidIf": "Chi ha un budget ridotto o pretende apertura f/2.8 costante su tutta l'escursione.",
  "asin": "B01NCU2H8W",
  "amazonTitle": "Panasonic Lumix G/Leica H-ES12060 Lens, Black",
  "imgs": [
   "https://m.media-amazon.com/images/I/818apl0bEeL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/413taaTE9CS._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41geIWLhQRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41csZCi1mgL._AC_SL1500_.jpg"
  ],
  "summary": "Zoom tuttofare 12-60 a marchio Leica per il sistema Micro 4/3 (Panasonic e OM System), equivalente a un 24-120mm. Copre paesaggio, ritratto e piccolo tele in un solo obiettivo compatto, con luminosita f/2.8-4, stabilizzazione Power OIS e resistenza ad acqua e polvere. E la scelta di qualita per chi vuole una sola ottica versatile e ben costruita, a fronte di un prezzo non da entry level.",
  "ean": "5025232859184",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 05025232859184; checksum EAN-13 valido",
  "rating": 4.4,
  "reviews": 140,
  "bsr": 54571,
  "bsrCat": "Elettronica"
 },
 {
  "id": "olympus-mzuiko-40-150-f4-56-r",
  "v": "obiettivi-fotografici",
  "brand": "OM System (Olympus)",
  "name": "M.Zuiko Digital ED 40-150mm f/4-5.6 R",
  "price": 223.53,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Il tele Micro 4/3 minuscolo ed economico per arrivare a 300mm equivalenti",
  "attrs": {
   "mount": "Micro 4/3",
   "focalMin": 40,
   "focalMax": 150,
   "apertureMax": 4,
   "stabilized": false,
   "macro": false,
   "weight": 190,
   "type": "teleobiettivo"
  },
  "pros": [
   "Molto leggero (190 g) e compatto per un tele che arriva a 150mm (300mm equivalenti)",
   "Prezzo contenuto, ottimo primo teleobiettivo per il sistema Micro 4/3",
   "Resa nitida al centro e messa a fuoco silenziosa, adatto anche al video"
  ],
  "cons": [
   "Nessuna stabilizzazione nell'obiettivo: meglio su corpi con stabilizzazione sul sensore",
   "Luminosita modesta (f/4-5.6), rende con buona luce"
  ],
  "buyIf": "Chi ha una mirrorless Micro 4/3 e vuole un tele leggerissimo ed economico per soggetti lontani da portare sempre.",
  "avoidIf": "Chi scatta spesso in poca luce a lunga focale o ha un corpo senza stabilizzazione sul sensore.",
  "asin": "B0D94RVQBS",
  "amazonTitle": "OM SYSTEM M.Zuiko Digital ED 40-150mm f/4-5.6 R Lens for Micro Four Thirds, Black",
  "imgs": [
   "https://m.media-amazon.com/images/I/819cvidtNQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41JyFmbAHvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51wuVasraJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41VH2cUrwML._AC_SL1500_.jpg"
  ],
  "summary": "Teleobiettivo 40-150 per il sistema Micro 4/3, sorprendentemente piccolo e leggero: arriva a 150mm, cioe circa 300mm equivalenti, restando poco piu grande di un tappo. E il primo tele ideale per chi ha una Olympus/OM System o Panasonic e vuole avvicinare i soggetti spendendo poco. Non ha stabilizzazione propria e la luminosita e modesta, quindi da il meglio con buona luce e su corpi stabilizzati.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 143,
  "bsr": 104299,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sigma-56-f14-dcdn-c-sony-e",
  "v": "obiettivi-fotografici",
  "brand": "Sigma",
  "name": "Sigma 56mm f/1.4 DC DN Contemporary",
  "price": 431.29,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Il fisso da ritratto APS-C piu amato: f/1.4 nitido e a buon prezzo",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 56,
   "focalMax": 56,
   "apertureMax": 1.4,
   "stabilized": false,
   "macro": false,
   "weight": 277,
   "type": "ritratto"
  },
  "pros": [
   "Apertura f/1.4 molto luminosa con sfocato pulito, tra i migliori fissi APS-C da ritratto",
   "Nitidezza elevata gia a tutta apertura e messa a fuoco rapida e silenziosa",
   "Compatto e leggero (277 g), su APS-C equivale a circa 84mm, focale ideale per i volti"
  ],
  "cons": [
   "Pensato per corpi APS-C: su full frame va usato in modalita ritaglio",
   "Nessuna stabilizzazione integrata"
  ],
  "buyIf": "Chi ha una Sony APS-C (serie a6000/ZV-E10) e vuole il fisso da ritratto luminoso di riferimento senza spendere tanto.",
  "avoidIf": "Chi scatta su full frame a piena risoluzione o vuole la stabilizzazione nell'obiettivo.",
  "asin": "B07JZVP6R8",
  "amazonTitle": "Sigma - 56mm-F/1.4(C) AF DC DN,E-Mount (SE System) Mirrorless Lens",
  "imgs": [
   "https://m.media-amazon.com/images/I/61OD5-eQHHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31dA9RUplmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/21m1TnUjjKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41RcakArcqL._AC_SL1500_.jpg"
  ],
  "summary": "Fisso 56mm f/1.4 di Sigma per corpi APS-C Sony E, uno dei fissi da ritratto piu apprezzati della categoria. Su sensore APS-C corrisponde a circa 84mm, la focale classica per i volti, e l'apertura f/1.4 stacca lo sfondo con uno sfocato morbido. Nitido gia a tutta apertura, rapido a mettere a fuoco e compatto, offre una resa da obiettivo molto piu costoso a un prezzo accessibile.",
  "ean": "0085126351656",
  "eanSource": "Scheda tecnica Amazon: Global Trade Identification Number 00085126351656; checksum EAN-13 valido",
  "rating": 4.8,
  "reviews": 1880,
  "bsr": 104110,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sigma-18-50-f28-dcdn-c-fuji-x",
  "v": "obiettivi-fotografici",
  "brand": "Sigma",
  "name": "Sigma 18-50mm f/2.8 DC DN Contemporary",
  "price": 549,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Lo zoom f/2.8 compatto che sta sempre sulla Fuji, luminoso e leggero",
  "attrs": {
   "mount": "Fujifilm X",
   "focalMin": 18,
   "focalMax": 50,
   "apertureMax": 2.8,
   "stabilized": false,
   "macro": false,
   "weight": 285,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Apertura costante f/2.8 in un corpo molto compatto e leggero (285 g)",
   "Copre 18-50 (circa 27-75mm equivalenti), il tuttofare piu usato, con resa nitida",
   "Alternativa piu luminosa e piu economica agli zoom Fuji pari escursione"
  ],
  "cons": [
   "Nessuna stabilizzazione ottica: meglio su corpi Fuji con stabilizzazione sul sensore",
   "Non arriva sul tele, resta uno zoom standard"
  ],
  "buyIf": "Chi ha una Fujifilm X e vuole un tuttofare f/2.8 sempre luminoso in un ingombro minimo, spendendo meno degli zoom Fuji.",
  "avoidIf": "Chi ha un corpo Fuji senza stabilizzazione sul sensore e scatta molto a mano libera al buio, o serve il tele.",
  "asin": "B0BMD377VK",
  "amazonTitle": "Sigma - 18-50mm f/2.8 DC DN Contemporary Fuji X-Mount Lens",
  "imgs": [
   "https://m.media-amazon.com/images/I/61-l5nHoUSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/312U0QvLJhL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/4134bCSIq7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/419XxRXquBL._AC_SL1500_.jpg"
  ],
  "summary": "Zoom standard 18-50 a luminosita costante f/2.8 per le mirrorless Fujifilm X, diventato popolarissimo perche unisce un'apertura luminosa a un corpo minuscolo e leggero. Equivale a circa un 27-75mm e copre l'escursione piu usata per viaggio, strada e uso quotidiano, con resa nitida. Non ha stabilizzazione integrata, quindi da il meglio sui corpi Fuji con stabilizzazione sul sensore, ma il rapporto tra qualita, luminosita e ingombro e notevole.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 296,
  "bsr": 77144,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sigma-18-50-f28-dcdn-c-sony-e",
  "v": "obiettivi-fotografici",
  "brand": "Sigma",
  "name": "Sigma 18-50mm f/2.8 DC DN Contemporary (Sony E)",
  "price": 549,
  "quality": 9,
  "checked": "2026-09-11",
  "tagline": "Lo zoom standard luminoso e compatto piu consigliato per le Sony APS-C come la ZV-E10",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 18,
   "focalMax": 50,
   "apertureMax": 2.8,
   "stabilized": false,
   "macro": false,
   "weight": 290,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Apertura costante f/2.8 in un corpo molto piccolo e leggero (290 g), comoda per foto e video al chiuso e in poca luce",
   "Escursione 18-50 (27-75 equivalente) che copre grandangolo moderato, reportage e ritratto ambientato",
   "Nitido gia da f/2.8 e messa a fuoco silenziosa, ottimo rapporto qualita prezzo per la categoria"
  ],
  "cons": [
   "Non ha stabilizzazione nell'obiettivo: sulla ZV-E10 (senza stabilizzatore sul sensore) a mano libera in poca luce serve attenzione",
   "Escursione corta, non arriva al tele: per soggetti lontani serve un secondo obiettivo"
  ],
  "buyIf": "Chi ha una Sony APS-C come la ZV-E10 e vuole un solo zoom luminoso, piccolo e versatile per tutti i giorni, viaggio e video.",
  "avoidIf": "Chi cerca tanta escursione fino al tele, o chi conta molto sulla stabilizzazione a mano libera senza corpo stabilizzato.",
  "asin": "B09JVBB36L",
  "amazonTitle": "Sigma - Obiettivo 18-50mm F/2.8 DC DN (C) F/SE attacco Sony-E",
  "imgs": [
   "https://m.media-amazon.com/images/I/516w4AjhV5L._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51SgGt38pxL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51kWOBY2HqL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51hesPWTgdL._AC_SL1000_.jpg"
  ],
  "summary": "Zoom standard a luminosita costante f/2.8 pensato per i corpi APS-C Sony E, tra i piu consigliati in assoluto per una fotocamera come la ZV-E10. In un corpo minuscolo e leggero copre dal grandangolo moderato al piccolo tele, quindi va bene per uso quotidiano, viaggio, video e ritratto ambientato. E nitido gia a tutta apertura e mette a fuoco in silenzio. Non ha stabilizzazione ottica, quindi a mano libera in poca luce da il meglio con corpi stabilizzati sul sensore.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 1688,
  "bsr": 10653,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-18-135-f35-56-oss",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 18-135mm f/3.5-5.6 OSS",
  "price": 552.6,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il superzoom da viaggio APS-C: dal grandangolo al tele senza cambiare obiettivo",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 18,
   "focalMax": 135,
   "apertureMax": 3.5,
   "stabilized": true,
   "macro": false,
   "weight": 325,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Escursione ampia 18-135 (27-202 equivalente) che copre paesaggio, ritratto e piccolo tele in un solo obiettivo",
   "Stabilizzazione ottica OSS integrata, utile a mano libera e sulla ZV-E10 che non ha stabilizzatore sul sensore",
   "Leggero (325 g) e nitido su tutta l'escursione, ottimo per viaggio e tutti i giorni"
  ],
  "cons": [
   "Luminosita variabile e modesta (f/3.5-5.6), meno adatto al chiuso e alla poca luce rispetto a uno zoom f/2.8",
   "Sfocato dello sfondo limitato per i ritratti rispetto a un obiettivo luminoso"
  ],
  "buyIf": "Chi vuole un solo obiettivo tuttofare per viaggiare leggero con la sua Sony APS-C, con stabilizzazione e buona escursione.",
  "avoidIf": "Chi scatta spesso in poca luce o cerca sfocato marcato: qui l'apertura non e luminosa.",
  "asin": "B078VPM6WM",
  "amazonTitle": "Sony SEL18135 - 18-135mm f/3.5-5.6 Zoom Versatile (APS-C, Stabilizzato OSS, E-Mount, Ideale per Viaggi, Compatibile con Alpha 6400/6600)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51JM2adf+PL._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/51gIiG83J7L._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/51xet743ZVL._AC_SL1100_.jpg",
   "https://m.media-amazon.com/images/I/41YAhYC9HhL._AC_SL1100_.jpg"
  ],
  "summary": "Superzoom da viaggio per Sony APS-C che copre da 18 a 135 mm, cioe dal grandangolo moderato al piccolo tele, senza dover cambiare obiettivo. E la scelta comoda per chi vuole leggerezza e un solo tuttofare in vacanza o nella vita di tutti i giorni. Ha stabilizzazione ottica OSS integrata, preziosa sulla ZV-E10 che non e stabilizzata sul sensore, ed e nitido e regolare. Il limite e la luminosita variabile f/3.5-5.6, quindi rende meglio con buona luce.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 826,
  "bsr": 62723,
  "bsrCat": "Elettronica"
 },
 {
  "id": "tamron-18-300-f35-63-vc-sony-e",
  "v": "obiettivi-fotografici",
  "brand": "Tamron",
  "name": "Tamron 18-300mm f/3.5-6.3 Di III-A VC VXD (Sony E)",
  "price": 688.78,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Un solo obiettivo dal grandangolo al super tele: il tuttofare estremo da viaggio",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 18,
   "focalMax": 300,
   "apertureMax": 3.5,
   "stabilized": true,
   "macro": false,
   "weight": 620,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Escursione enorme 18-300 (27-450 equivalente): grandangolo, ritratto, sport e animali con un solo obiettivo",
   "Stabilizzazione VC integrata, utile a lunga focale e sulla ZV-E10 priva di stabilizzatore sul sensore",
   "Messa a fuoco VXD rapida e silenziosa, comoda anche in video"
  ],
  "cons": [
   "Luminosita modesta e calante (f/3.5-6.3), da il meglio con buona luce",
   "Compromessi ottici agli estremi dello zoom, tipici di un'escursione cosi ampia",
   "Su Amazon e proposto come import (venduto e spedito da Amazon USA): tempi e assistenza possono variare"
  ],
  "buyIf": "Chi vuole viaggiare con un solo obiettivo che arriva dal grandangolo al super tele, senza pensare al cambio ottica.",
  "avoidIf": "Chi cerca massima qualita ottica o luminosita per la poca luce, o preferisce zoom piu corti e nitidi.",
  "asin": "B09DP27V2S",
  "amazonTitle": "Tamron 18-300mm F/3.5-6.3 Di III-A VC VXD Lens for Sony E APS-C Mirrorless Cameras (Black)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51EccxS3N-L._AC_SL1076_.jpg",
   "https://m.media-amazon.com/images/I/71VPufNq-VL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/51F+YSWxn+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51ZVqOTG4cL._AC_SL1500_.jpg"
  ],
  "summary": "Zoom tuttofare estremo per Sony APS-C che va da 18 a 300 mm, cioe da un buon grandangolo fino a un super tele, con un solo obiettivo sempre montato. E pensato per il viaggio e per chi non vuole cambiare ottica tra un paesaggio e un soggetto lontano. Ha stabilizzazione VC integrata, utile alle focali lunghe e sulla ZV-E10 non stabilizzata, e messa a fuoco VXD veloce. In cambio la luminosita e modesta e ci sono i tipici compromessi ottici agli estremi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 325,
  "bsr": 84286,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-pz-10-20-f4-g",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E PZ 10-20mm f/4 G",
  "price": 729,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il grandangolo power-zoom leggerissimo pensato per il vlog con la ZV-E10",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 10,
   "focalMax": 20,
   "apertureMax": 4,
   "stabilized": false,
   "macro": false,
   "weight": 178,
   "type": "grandangolo"
  },
  "pros": [
   "Grandangolo spinto 10-20 (15-30 equivalente): ampio campo per interni, paesaggi e vlog con la fotocamera a braccio teso",
   "Leggerissimo (178 g) e con power-zoom motorizzato, molto comodo per video e per la ZV-E10",
   "Apertura costante f/4 e buona nitidezza anche ai bordi"
  ],
  "cons": [
   "Prezzo alto per un f/4",
   "Nessuna stabilizzazione ottica: in video a piedi conviene affidarsi allo SteadyShot elettronico, che pero ritaglia l'immagine"
  ],
  "buyIf": "Chi fa vlog, interni o paesaggi con una Sony APS-C e vuole il grandangolo piu ampio e leggero, comodo a braccio teso.",
  "avoidIf": "Chi cerca uno zoom versatile per tutti i giorni o un obiettivo molto luminoso per la poca luce.",
  "asin": "B0B2RYSS32",
  "amazonTitle": "Sony SELP1020G - Zoom grandangolare 10-20 mm F4 G per APS-C (compatto, attacco E, ideale per architettura, vlogging e viaggi, compatibile con ZV-E10, A6400, A6700)",
  "imgs": [
   "https://m.media-amazon.com/images/I/81Rt7pk0zcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/712RI3HHS0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91ch+d87d7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71c5MAUPvYL._AC_SL1500_.jpg"
  ],
  "summary": "Grandangolo power-zoom molto ampio (10-20 mm, cioe 15-30 equivalente) e leggerissimo, pensato proprio per il vlog e i video con le Sony APS-C come la ZV-E10. A braccio teso entra molto piu campo, ed e comodo per interni, architettura e paesaggi. Lo zoom motorizzato e fluido aiuta in video. Non ha stabilizzazione ottica e l'apertura f/4 non e luminosa, quindi non e uno zoom da tutti i giorni ma uno strumento specialistico per il grandangolo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 119,
  "bsr": 100973,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-15-f14-g",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 15mm f/1.4 G",
  "price": 732,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il fisso grandangolare luminoso per vlog e street, sfondo sfocato e poca luce",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 15,
   "focalMax": 15,
   "apertureMax": 1.4,
   "stabilized": false,
   "macro": false,
   "weight": 219,
   "type": "grandangolo"
  },
  "pros": [
   "Apertura f/1.4 molto luminosa: ottima in poca luce e capace di staccare lo sfondo anche da grandangolo",
   "Angolo ampio (15 mm, 22,5 equivalente) adatto a vlog a braccio teso, interni e street",
   "Compatto e leggero (219 g), con ghiere per apertura e controllo video"
  ],
  "cons": [
   "Focale fissa: niente zoom, la composizione si cambia spostandosi",
   "Prezzo alto e nessuna stabilizzazione ottica, da tenere presente sulla ZV-E10 non stabilizzata"
  ],
  "buyIf": "Chi fa vlog, street o interni e vuole un grandangolo fisso luminoso per la poca luce e per un po' di sfocato.",
  "avoidIf": "Chi preferisce la comodita di uno zoom o non ha budget alto per un obiettivo a focale fissa.",
  "asin": "B0B2S1LRTY",
  "amazonTitle": "Sony SEL15F14G - Obiettivo grandangolare a focale fissa 15 mm F1.4 G per full frame e APS-C (attacco E-mount, ideale per street photography, viaggi, compatibile con serie A7, ZV-E10, A6400, A6700)",
  "imgs": [
   "https://m.media-amazon.com/images/I/81o7W-DeI7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51rXBKtgJ2L._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/8130B1yCSGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71itFGga7AL._AC_SL1500_.jpg"
  ],
  "summary": "Obiettivo a focale fissa da 15 mm (22,5 equivalente su APS-C) con apertura molto luminosa f/1.4, una scelta apprezzata per il vlog, la street e gli interni con le Sony come la ZV-E10. L'angolo ampio funziona bene a braccio teso, mentre l'apertura f/1.4 aiuta tanto in poca luce e permette un po' di sfocato inatteso per un grandangolo. E compatto e leggero, con ghiere dedicate al video. Il limite e la focale fissa e il prezzo, oltre all'assenza di stabilizzazione ottica.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 94,
  "bsr": 180995,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-55-210-f45-63-oss",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 55-210mm f/4.5-6.3 OSS",
  "price": 263.81,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Il primo teleobiettivo economico e leggero per avvicinare sport e natura",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 55,
   "focalMax": 210,
   "apertureMax": 4.5,
   "stabilized": true,
   "macro": false,
   "weight": 345,
   "type": "teleobiettivo"
  },
  "pros": [
   "Arriva a 210 mm (315 equivalente) restando leggero (345 g) e poco ingombrante",
   "Stabilizzazione ottica OSS integrata, utile a mano libera e sulla ZV-E10 non stabilizzata sul sensore",
   "Prezzo contenuto per entrare nel tele: ottimo primo teleobiettivo"
  ],
  "cons": [
   "Buio all'estremita lunga (f/6.3): vuole buona luce o ISO alti",
   "Costruzione e resa da fascia economica, autofocus meno rapido dei modelli recenti"
  ],
  "buyIf": "Chi ha una Sony APS-C e vuole il primo teleobiettivo leggero ed economico per sport, animali e scene lontane.",
  "avoidIf": "Chi fotografa spesso al chiuso o in poca luce a lunga focale, dove f/6.3 diventa un limite.",
  "asin": "B00HV9TB4O",
  "amazonTitle": "Sony SEL55210B - 55-210mm f/4.5-6.3 Zoom Teleobiettivo (APS-C, Stabilizzato OSS, E-Mount, Ideale per Sport e Natura, Compatibile con serie Alpha 6000)",
  "imgs": [
   "https://m.media-amazon.com/images/I/61+vXPpS5AL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/81BUQfagPpL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61Z4t-IQ6IL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/61dO40knuyL._AC_SL1200_.jpg"
  ],
  "summary": "Teleobiettivo 55-210 per Sony APS-C pensato per chi vuole avvicinare sport, animali e scene lontane con una spesa contenuta. Arriva a 210 mm (315 equivalente) restando leggero e maneggevole, e ha la stabilizzazione ottica OSS integrata, comoda a mano libera e sulla ZV-E10 che non e stabilizzata sul sensore. E un ottimo primo tele per iniziare. La luminosita cala a f/6.3 sul lungo, quindi rende di piu con buona luce o alzando gli ISO.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 3876,
  "bsr": 21831,
  "bsrCat": "Elettronica"
 },
 {
  "id": "dreame-d20-pro-plus",
  "v": "robot-aspirapolvere",
  "brand": "dreame",
  "name": "D20 Pro Plus",
  "price": 199,
  "quality": 8.3,
  "checked": "2026-09-11",
  "tagline": "Stazione con sacchetto da 5 L sotto i 200 euro",
  "attrs": {
   "pa": 13000,
   "battery": 285,
   "mop": "passive",
   "dock": "dust",
   "lidar": null,
   "height": null,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Sacchetto da 5 L: lo tocchi una volta ogni pochi mesi",
   "Spazzola Duo antigroviglio adatta ai peli",
   "13.000 Pa e 285 minuti di autonomia dichiarati"
  ],
  "cons": [
   "Il modulo lavaggio è un panno passivo",
   "Ingombro della stazione da mettere in conto"
  ],
  "buyIf": "Vuoi la stazione autosvuotante e una buona aspirazione spendendo meno di 200 €.",
  "avoidIf": "Cerchi un lavaggio vero: qui il panno è trascinato, non rotante.",
  "asin": "B0FBGXW79K",
  "amazonTitle": "dreame D20 Pro Plus Robot Aspirapolvere Lavapavimenti, DuoBrush per Peli | 13.000 Pa, Pulizia Angoli, Stazione Svuotamento Automatico 150 gg, Navigazione LDS e Aggiramento Ostacoli Laser,Aspira e Lava",
  "imgs": [
   "https://m.media-amazon.com/images/I/61AWpU4EwAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71sP2ROgf2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81LMFPuGFXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/810VTbvc+GL._AC_SL1500_.jpg"
  ],
  "summary": "Robot con 13.000 Pa di aspirazione, spazzola Duo in gomma e setole contro i grovigli e stazione con sacchetto da 5 L che raccoglie la polvere per settimane. Aspira e passa il panno in una sola volta, con serbatoio d'acqua da 350 ml. Autonomia dichiarata di 285 minuti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 988,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "lefant-m210p",
  "v": "robot-aspirapolvere",
  "brand": "Lefant",
  "name": "M210P",
  "price": 89.98,
  "quality": 7.6,
  "checked": "2026-09-11",
  "tagline": "Ultra sottile da 7,8 cm per passare sotto i mobili",
  "attrs": {
   "pa": 2200,
   "battery": 120,
   "mop": "passive",
   "dock": "none",
   "lidar": false,
   "height": 7.8,
   "bin": 500,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Corpo da 7,8 cm: passa dove gli altri non arrivano",
   "Design anti-groviglio per peli e capelli",
   "Prezzo tra i più bassi con oltre 4.000 recensioni"
  ],
  "cons": [
   "Solo 2.200 Pa di aspirazione",
   "Navigazione a giroscopio, senza lidar né mappe"
  ],
  "buyIf": "Hai un appartamento piccolo con mobili bassi e vuoi spendere il minimo.",
  "avoidIf": "Hai casa grande, tappeti spessi o vuoi mappe multipiano: la navigazione è basilare.",
  "asin": "B0FNWFJ8KK",
  "amazonTitle": "Lefant M210P Robot Aspirapolvere Ultra Sottile 7,8cm Anti-Groviglio | 2200Pa, design senza spazzola centrale e pulizia intelligente. Raggiunge facilmente gli spazi sotto mobili e letti bassi",
  "imgs": [
   "https://m.media-amazon.com/images/I/61x4w8Rw5cL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71IDIEbVp6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Yun+CXyHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714xjlPayRL._AC_SL1500_.jpg"
  ],
  "summary": "Robot alto solo 7,8 cm e largo 28 cm, pensato per infilarsi sotto letti e divani bassi. Navigazione a giroscopio Freemove, design anti-groviglio senza spazzola centrale e serbatoio da 500 ml. Aspirazione di 2.200 Pa: fa il suo su pavimenti duri, meno sui tappeti a pelo lungo.",
  "ean": "0850074159377",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.4,
  "reviews": 4592,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "eufy-c10",
  "v": "robot-aspirapolvere",
  "brand": "eufy",
  "name": "C10",
  "price": 189.05,
  "quality": 7.6,
  "checked": "2026-09-11",
  "tagline": "Il più piatto della gamma, con stazione autosvuotante",
  "attrs": {
   "pa": 4000,
   "battery": null,
   "mop": null,
   "dock": "dust",
   "lidar": true,
   "height": 7.2,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Corpo ultra piatto da 7,2 cm",
   "Stazione con svuotamento automatico da 3 L",
   "Spazzola adatta ai peli di animali"
  ],
  "cons": [
   "Non lava il pavimento",
   "4.000 Pa: nella media, non di più"
  ],
  "buyIf": "Vuoi la stazione autosvuotante e un corpo bassissimo, senza pensare al lavaggio.",
  "avoidIf": "Ti serve anche il lavapavimenti: questo modello solo aspira.",
  "asin": "B0DRFRJPWY",
  "amazonTitle": "eufy C10 Robot Aspirapolvere con Stazione Aspirazione Automatica | Design ultra piatto 7,2 cm, Pulizia tappeti, Spazzola estensibile angoli, Svuotamento auto, Navigazione laser.",
  "imgs": [
   "https://m.media-amazon.com/images/I/61ekuPTHXWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61ftyzFJWUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61HqngSaPkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61R85lF72rL._AC_SL1500_.jpg"
  ],
  "summary": "Robot da 7,2 cm di altezza con stazione di svuotamento automatico e sacchetto da 3 L. Navigazione laser a punti con multi-infrarossi, 4.000 Pa e spazzola pensata per le case con animali. È un aspiratore puro: non lava il pavimento.",
  "ean": "0194644230708",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.1,
  "reviews": 460,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "eufy-c20-omni",
  "v": "robot-aspirapolvere",
  "brand": "eufy",
  "name": "C20 Omni",
  "price": 369,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Stazione tutto in uno con panno rotante",
  "attrs": {
   "pa": 7000,
   "battery": 132,
   "mop": "rotating",
   "dock": "full",
   "lidar": null,
   "height": 8.5,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Stazione che svuota, lava e asciuga il panno",
   "Panno rotante a 180 giri/min per un lavaggio vero",
   "Sistema Pro-Detangle contro i grovigli"
  ],
  "cons": [
   "Alimentazione a 110 V da verificare sulla versione",
   "Solo Wi-Fi 2,4 GHz supportato"
  ],
  "buyIf": "Vuoi aspira, lava e stazione completa restando sotto i 400 €.",
  "avoidIf": "Hai poco spazio: la stazione all-in-one è ingombrante.",
  "asin": "B0DBVMD8Z8",
  "amazonTitle": "eufy C20 Omni Robot Aspirapolvere Lavapavimenti con Mappatura | Stazione Tutto in Uno, Svuotamento Auto, Lavaggio e Asciugatura, 8,5 cm Ultra Piatto, Potente 7.000 Pa.",
  "imgs": [
   "https://m.media-amazon.com/images/I/61jL8sTFE3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/612FGdjAzlL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71THh1EN-uL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61rPWUinJxL._AC_SL1500_.jpg"
  ],
  "summary": "Robot lavapavimenti con stazione all-in-one che svuota la polvere in un sacchetto da 3,1 L, lava e asciuga il panno. Aspirazione da 7.000 Pa, panno rotante Mop Master a 180 giri/min con 6 N di pressione e pettine Pro-Detangle contro i grovigli. Corpo da 8,5 cm.",
  "ean": "0194644209216",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.1,
  "reviews": 643,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "tapo-rv50-pro-omni",
  "v": "robot-aspirapolvere",
  "brand": "Tapo (TP-Link)",
  "name": "RV50 Pro Omni",
  "price": 399.99,
  "quality": 8.4,
  "checked": "2026-09-11",
  "tagline": "Base Omni con lavaggio ad acqua calda a un prezzo contenuto",
  "attrs": {
   "pa": 15000,
   "battery": 210,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Base Omni: lava ad acqua calda, asciuga e svuota",
   "15.000 Pa e taglio automatico dei capelli sulla spazzola",
   "Solleva i mop sui tappeti"
  ],
  "cons": [
   "Stazione ingombrante da collegare a una presa",
   "Manutenzione periodica dei serbatoi"
  ],
  "buyIf": "Vuoi una stazione Omni completa con lavaggio ad acqua calda sotto i 400 €.",
  "avoidIf": "Non ti serve la base che lava e asciuga: pagheresti funzioni che non usi.",
  "asin": "B0GCF4MPD5",
  "amazonTitle": "Tapo RV50 Pro Omni Robot Aspirapolvere Lavapavimenti 15000Pa Base Omni | Per Case con Animali, Anti-groviglio, Mocio Estensibile, Lavaggio/Rimozione/Asciugatura Auto, Ricarica Detergente, Alexa",
  "imgs": [
   "https://m.media-amazon.com/images/I/718eDOLVkLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81rTcFbAWdL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71s2lczL5GL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715akQE+laL._AC_SL1500_.jpg"
  ],
  "summary": "Robot con 15.000 Pa, doppio laser di precisione e base Omni che lava i panni ad acqua calda a 60 °C, li asciuga ad aria calda a 50 °C e svuota la polvere. Spazzola antigroviglio con taglio automatico dei capelli e rimozione automatica dei mop sui tappeti. Autonomia dichiarata di 210 minuti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 6897,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "narwal-freo-s",
  "v": "robot-aspirapolvere",
  "brand": "NARWAL",
  "name": "Freo S",
  "price": 159,
  "quality": 7.7,
  "checked": "2026-09-11",
  "tagline": "Narwal d'ingresso con svuotamento automatico",
  "attrs": {
   "pa": 8000,
   "battery": 210,
   "mop": "rotating",
   "dock": "dust",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Navigazione laser LDS con mappatura",
   "Stazione con svuotamento automatico da 3,5 L",
   "Aspirazione dichiarata piuttosto silenziosa"
  ],
  "cons": [
   "La stazione non lava né asciuga i panni",
   "Va comunque svuotato il serbatoio d'acqua a mano"
  ],
  "buyIf": "Vuoi un Narwal con mappatura laser e svuotamento automatico spendendo poco.",
  "avoidIf": "Vuoi la base che lava e asciuga i panni: qui la stazione solo svuota.",
  "asin": "B0FCSG2WHN",
  "amazonTitle": "NARWAL Freo S Robot Aspirapolvere e Lavapavimenti, Svuotamento Automatico | Aspirazione 8000 Pa, Lavaggio Efficace, Navigazione Laser Lds e Controllo Tramite App",
  "imgs": [
   "https://m.media-amazon.com/images/I/51djwXEJp3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714kXgF6lKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71D8vTvxTbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71o5nskwiGL._AC_SL1500_.jpg"
  ],
  "summary": "Robot lavapavimenti con navigazione laser LDS, 8.000 Pa e stazione compatta con sacchetto da 3,5 L per lo svuotamento automatico. Serbatoio d'acqua da 300 ml e 8 N di pressione sul panno, spazzola ibrida contro i peli. Autonomia dichiarata di 210 minuti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 641,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "roborock-qrevo-curv-2-pro",
  "v": "robot-aspirapolvere",
  "brand": "roborock",
  "name": "Qrevo Curv 2 Pro",
  "price": 1099,
  "quality": 9,
  "checked": "2026-09-11",
  "tagline": "Telaio che si solleva e lidar retrattile, da 7,98 cm",
  "attrs": {
   "pa": 25000,
   "battery": null,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": 7.98,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "25.000 Pa e telaio che scavalca ostacoli fino a 4 cm",
   "Lidar retrattile: corpo di soli 7,98 cm",
   "Base 3.0 con acqua calda, asciugatura e svuotamento"
  ],
  "cons": [
   "Prezzo da ammiraglia",
   "Base grande, va sistemata con cura"
  ],
  "buyIf": "Vuoi il top: massima aspirazione, superamento ostacoli e base completa.",
  "avoidIf": "Il budget conta: la fascia sotto costa la metà e pulisce già benissimo.",
  "asin": "B0FFGQ7L2T",
  "amazonTitle": "roborock Qrevo Curv 2 Pro Robot Aspirapolvere Lavapavimenti, LDS Retrattile | 7,98 cm, 25.000 Pa, Telaio AdaptiLift, Zero-Grovigli, Acqua 100°C, Evita Ostacoli, Stazione Multifunzionale, Hello Rocky",
  "imgs": [
   "https://m.media-amazon.com/images/I/61lhiSiiW9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81F38awzD9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ljJ99yf-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/814t-MpOx7L._AC_SL1500_.jpg"
  ],
  "summary": "Ammiraglia con 25.000 Pa, lidar retrattile per un corpo di soli 7,98 cm e telaio AdaptiLift che supera ostacoli fino a 4 cm. Base multifunzione 3.0 con lavaggio ad acqua calda, asciugatura e svuotamento, riconoscimento ostacoli ReactiveAI con telecamera RGB. Doppio sistema anti-groviglio.",
  "ean": "0810125544613",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.3,
  "reviews": 1086,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "narwal-freo-x10-pro",
  "v": "robot-aspirapolvere",
  "brand": "NARWAL",
  "name": "Freo X10 Pro",
  "price": 329,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Mop triangolare e base tutto in uno",
  "attrs": {
   "pa": 11000,
   "battery": 220,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Mop triangolare con estensione per gli angoli",
   "Doppio sistema anti-groviglio",
   "Stazione base all-in-one"
  ],
  "cons": [
   "Serbatoi della base da mantenere",
   "Aspirazione buona ma non ai vertici della categoria"
  ],
  "buyIf": "Vuoi un lavaggio che arriva negli angoli e una base completa sotto i 350 €.",
  "avoidIf": "Ti bastano l'aspirazione e lo svuotamento: qui paghi anche il lavaggio evoluto.",
  "asin": "B0FL6PWX3F",
  "amazonTitle": "NARWAL Freo X10 Pro Robot Aspirapolvere e Lavapavimenti, Anti-Groviglio | Mop Triangolare per Angoli, Autopulizia e Asciugatura, 11.000 Pa, Navigazione Lidar, 220 Min Autonomia, Ideale Peli Animali",
  "imgs": [
   "https://m.media-amazon.com/images/I/61dGjssKoSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81FTZEYaYbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71T57LnCy2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71OtOzC0s6L._AC_SL1500_.jpg"
  ],
  "summary": "Robot con 11.000 Pa, mop triangolare con tecnologia MopExtend per gli angoli e doppio sistema anti-groviglio per i peli di animali. Stazione base all-in-one che riduce la manutenzione e navigazione laser LDS con rilevamento ostacoli. Protezione dei tappeti in aspirazione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 382,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "roborock-q10-s5-set",
  "v": "robot-aspirapolvere",
  "brand": "roborock",
  "name": "Q10 S5 Set",
  "price": 129.99,
  "quality": 7.9,
  "checked": "2026-09-11",
  "tagline": "Panno vibrante sollevabile a poco più di 100 euro",
  "attrs": {
   "pa": 10000,
   "battery": 150,
   "mop": "vibrating",
   "dock": "none",
   "lidar": true,
   "height": null,
   "bin": 200,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "10.000 Pa con panno vibrante VibraRise 2.0",
   "Solleva il panno da solo sui tappeti",
   "Doppia spazzola anti-groviglio"
  ],
  "cons": [
   "Nessuna stazione autosvuotante",
   "Serbatoio della polvere piccolo, da svuotare spesso"
  ],
  "buyIf": "Vuoi aspirazione forte, panno vibrante e sollevamento sui tappeti spendendo poco.",
  "avoidIf": "Vuoi la stazione che svuota e lava da sola: qui non è inclusa.",
  "asin": "B0DSZJKXBC",
  "amazonTitle": "roborock Q10 S5 Set Robot Aspirapolvere 10.000Pa, Panno Sollevabile, Nero | Pulizia VibraRise 2.0(3000 volte/min), Anti-groviglio, Evitamento degli Ostacoli, Strategie Tappeti, Controllo APP",
  "imgs": [
   "https://m.media-amazon.com/images/I/61CbfKNys6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715anZgPHRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71CBzWHc+aL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71yjeNuiIoL._AC_SL1500_.jpg"
  ],
  "summary": "Robot con 10.000 Pa, sistema di lavaggio vibrante VibraRise 2.0 che solleva il panno da solo quando incontra un tappeto e doppio design anti-groviglio JawScrapers. Riconoscimento ostacoli Reactive Tech a luce strutturata e autonomia dichiarata di 150 minuti.",
  "ean": "0810125543852",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.1,
  "reviews": 2866,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "narwal-freo-z10-ultra",
  "v": "robot-aspirapolvere",
  "brand": "NARWAL",
  "name": "Freo Z10 Ultra",
  "price": 549,
  "quality": 8.6,
  "checked": "2026-09-11",
  "tagline": "Doppio chip IA e base che si gestisce per mesi",
  "attrs": {
   "pa": 18000,
   "battery": null,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Lavaggio adattivo con doppio chip IA",
   "Sollevamento del mop di 12 mm sui tappeti",
   "Autosvuotamento della base fino a 120 giorni"
  ],
  "cons": [
   "Prezzo da fascia alta",
   "Stazione voluminosa"
  ],
  "buyIf": "Vuoi lavaggio adattivo, ottimo aggiramento ostacoli e minima manutenzione.",
  "avoidIf": "Cerchi il prezzo più basso: qui paghi l'automazione della fascia alta.",
  "asin": "B0DTJSF5LX",
  "amazonTitle": "NARWAL Freo Z10 Ultra Robot Aspirapolvere Lavapavimenti,Pulizia Adattiva IA | Mocio Estensibile per Angoli, Aspirazione 18.000 Pa, Antigroviglio, Autopulizia Mocio a 75°C, Autosvuotamento per 120 Giorni",
  "imgs": [
   "https://m.media-amazon.com/images/I/710Y82uE9iL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71vcl7B4qCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81jM5SoIpTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71OiuSPWfOL._AC_SL1500_.jpg"
  ],
  "summary": "Robot con 18.000 Pa e doppio chip IA che riconosce il tipo di sporco per adattare il lavaggio, con riconoscimento di oltre 200 oggetti tramite il sistema NarMind Pro. Sollevamento del mop di 12 mm sui tappeti, lavaggio del mop ad acqua calda e stazione all-in-one con autosvuotamento fino a 120 giorni.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 184,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "philips-2200-series-ep2220",
  "v": "macchine-caffe",
  "brand": "Philips",
  "name": "Serie 2200 EP2220",
  "price": 282.81,
  "quality": 8.4,
  "checked": "2026-09-11",
  "tagline": "L'automatica in grani d'ingresso, con montalatte classico",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "pannarello",
   "tank": 1.8,
   "costPerCup": null,
   "minutes": null,
   "width": 24.6
  },
  "pros": [
   "Macinacaffè in ceramica integrato",
   "Montalatte con solo due parti lavabili in lavastoviglie",
   "Filtro AquaClean e oltre 25.000 recensioni"
  ],
  "cons": [
   "Il latte va montato a mano con la lancia",
   "Una sola bevanda alla volta"
  ],
  "buyIf": "Vuoi il caffè in grani macinato al momento spendendo meno di 300 €.",
  "avoidIf": "Vuoi il cappuccino automatico con un tasto: qui il latte lo monti a mano.",
  "asin": "B07MMSHC4R",
  "amazonTitle": "PHILIPS 2200 Macchina Caffè Automatica, 2 bevande, Montalatte | Macinacaffè in ceramica, Display touch, 2 tazze in una volta, ideale per cappuccino, nero opaco (EP2220/10)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51JWaHgqWbL._AC_SL1080_.jpg",
   "https://m.media-amazon.com/images/I/51ZxMhn7nGL._AC_SL1080_.jpg",
   "https://m.media-amazon.com/images/I/71qbGYx5YDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71t6EjXjt5L._AC_SL1500_.jpg"
  ],
  "summary": "Macchina automatica con macinacaffè in ceramica e montalatte classico a lancia per la schiuma. Controllo one-touch per espresso e caffè, macinatura e intensità regolabili e filtro AquaClean contro il calcare. Serbatoio da 1,8 L: il passaggio ai chicchi senza spendere una fortuna.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 25566,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "delonghi-lattissima-one-en510",
  "v": "macchine-caffe",
  "brand": "Nespresso De'Longhi",
  "name": "Lattissima One EN510",
  "price": 199,
  "quality": 8.2,
  "checked": "2026-09-11",
  "tagline": "Capsule con cappuccino a un tasto e caraffa fresca",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "auto",
   "tank": null,
   "costPerCup": null,
   "minutes": null,
   "width": 15
  },
  "pros": [
   "Latte montato in automatico con caraffa fresca",
   "Compatta: larga solo 15 cm",
   "Caraffa e serbatoio lavabili in lavastoviglie"
  ],
  "cons": [
   "Costo per tazza alto tipico delle capsule",
   "Serbatoio e caraffa di capacità contenuta"
  ],
  "buyIf": "Vuoi il cappuccino con un tasto senza montare il latte a mano, e poco ingombro.",
  "avoidIf": "Bevete in tanti: il costo delle capsule nel tempo sale in fretta.",
  "asin": "B07TX8MT4F",
  "amazonTitle": "De'Longhi Lattissima One - Macchina da Caffè a Capsule con Montalatte Automatico, Caffè Monodose con Cappuccino Maker, 19 bar, Riscaldamento Rapido, Compatta, Dark Sage (EN510.GR)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71F98kgaPaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71wOobhUBBL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71QBMs4p8rL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71WGBZSYinL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a capsule Nespresso Original con sistema latte fresco one-touch: prepara espresso, cappuccino e latte macchiato con una caraffa lavabile in lavastoviglie. Pompa da 19 bar, corpo compatto largo 15 cm. La comodità della capsula con il latte montato in automatico.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 1355,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "nespresso-citiz-milk-en267",
  "v": "macchine-caffe",
  "brand": "Nespresso De'Longhi",
  "name": "Citiz & Milk EN267",
  "price": 202.8,
  "quality": 8.1,
  "checked": "2026-09-11",
  "tagline": "Capsule Original con montalatte Aeroccino incluso",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "auto",
   "tank": 1,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Montalatte Aeroccino automatico incluso",
   "Pompa da 19 bar, sistema Nespresso Original",
   "Serbatoio da 1 L"
  ],
  "cons": [
   "Il latte si prepara a parte, non nella tazza",
   "Costo capsule nel tempo"
  ],
  "buyIf": "Vuoi le capsule Original con un montalatte automatico separato.",
  "avoidIf": "Vuoi tutto integrato in un tasto solo: qui il latte lo prepari con l'Aeroccino.",
  "asin": "B01ITICQR4",
  "amazonTitle": "Nespresso Citiz & Milk con Aeroccino EN267.WAE, Macchina da caffè di De'Longhi, Sistema Capsule Nespresso, Serbatoio acqua 1L, colore White",
  "imgs": [
   "https://m.media-amazon.com/images/I/61S0IECxWLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71q8kPCYjOL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/716SgM1tRCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61w6YxdO4CL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a capsule Nespresso Original con pompa da 19 bar e montalatte automatico Aeroccino in dotazione per cappuccini e latte macchiato. Serbatoio da 1 L, due lunghezze in tazza. Design compatto per chi vuole espresso e bevande al latte senza montarlo a mano.",
  "ean": "8004399331396",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.3,
  "reviews": 3066,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "nespresso-inissia-en80",
  "v": "macchine-caffe",
  "brand": "Nespresso De'Longhi",
  "name": "Inissia EN80",
  "price": 99.9,
  "quality": 7.8,
  "checked": "2026-09-11",
  "tagline": "Capsule essenziale, tra le più compatte",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "none",
   "tank": 0.7,
   "costPerCup": null,
   "minutes": null,
   "width": 12
  },
  "pros": [
   "Tra le più strette, larga 12 cm",
   "Pompa da 19 bar, due lunghezze programmabili",
   "Spesso in bundle con capsule incluse"
  ],
  "cons": [
   "Nessun montalatte",
   "Serbatoio piccolo da 0,7 L"
  ],
  "buyIf": "Vuoi la capsula Original al minimo ingombro e senza fronzoli.",
  "avoidIf": "Ti serve cappuccino o latte: non ha montalatte.",
  "asin": "B0BXYK15H2",
  "amazonTitle": "Nespresso MACCHINA INISSIA E 100 CAPSULE – Inissia EN80B Macchina Caffè di De’Longhi con 100 Capsule Caffè Selezione Ispirazione Italiana, Riciclabile, Linea Original",
  "imgs": [
   "https://m.media-amazon.com/images/I/81r1+7jVw4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/610m96JXioL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71bGcSn4VFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715m+zbMIcL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a capsule Nespresso Original con pompa da 19 bar, due lunghezze in tazza programmabili e serbatoio removibile da 0,7 L. Larga solo 12 cm e spesso venduta con una selezione di capsule inclusa. Solo espresso e lungo: niente montalatte.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 2069,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "delonghi-ec201-cd-b",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "EC201.CD.B",
  "price": 69.9,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Manuale a portafiltro tra le più economiche",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "pannarello",
   "tank": 1,
   "costPerCup": null,
   "minutes": null,
   "width": 25
  },
  "pros": [
   "Portafiltro per polvere e cialde",
   "Cappuccino System per il latte a mano",
   "Prezzo basso, moltissime recensioni"
  ],
  "cons": [
   "Serve pratica con la lancia del latte",
   "Niente macinacaffè"
  ],
  "buyIf": "Vuoi imparare l'espresso a portafiltro spendendo il minimo.",
  "avoidIf": "Vuoi premere un tasto e avere il caffè pronto senza pensarci.",
  "asin": "B00W506FIY",
  "amazonTitle": "De'Longhi EC201.CD.B Macchina manuale da Caffè Espresso e Cappuccino, Caffè in Polvere o in Cialde E.S.E., Montalatte classico per Cappuccini, Serbatoio Estraibile da 1.1 L, Caldaia acciaio inox",
  "imgs": [
   "https://m.media-amazon.com/images/I/71DPXiGu2wL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/814O-KYj48L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71SdqC-HPkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71u3i3OcUmL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina manuale a pompa (15 bar) con portafiltro per caffè in polvere o cialde e Cappuccino System a lancia per montare il latte a mano. Una sola manopola per tutte le funzioni, spegnimento automatico dopo nove minuti e serbatoio estraibile da 1 L. Con oltre 12.000 recensioni.",
  "ean": "8004399328723",
  "eanSource": "GTIN scheda prodotto Amazon.it",
  "rating": 4.2,
  "reviews": 12494,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "beko-ceg7304x",
  "v": "macchine-caffe",
  "brand": "Beko",
  "name": "CEG7304X",
  "price": 299,
  "quality": 7.8,
  "checked": "2026-09-11",
  "tagline": "Automatica in grani con lattiera integrata e touch",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "auto",
   "tank": 2,
   "costPerCup": null,
   "minutes": null,
   "width": 40.5
  },
  "pros": [
   "Macinacaffè e lattiera integrata CreamyPro",
   "Display touch con 10 bevande",
   "Serbatoio ampio da 2 L"
  ],
  "cons": [
   "Ingombrante, oltre 40 cm di larghezza",
   "Recensioni ancora poche rispetto ai leader"
  ],
  "buyIf": "Vuoi grani e cappuccino automatico con lattiera integrata sotto i 300 €.",
  "avoidIf": "Hai poco spazio: è larga oltre 40 cm.",
  "asin": "B0D98GL8P2",
  "amazonTitle": "BEKO CEG7304X - Macchina Caffè Automatica Caffe in Grani con Macina Caffè e Chicchi Integrato - Macchinetta con Lattiera per Espresso e Cappuccino, Display Touch, Pressione 19 Bar 27,5x40,5xh34 - Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71rFMI1nliL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71loo2FdtcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/713C2swvrhL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71zi2ze36UL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina automatica con macinacaffè integrato e lattiera CreamyPro per una schiuma di latte personalizzabile. Tecnologia BrewSense a 19 bar, display touch con 10 opzioni di bevanda e grado di macinatura regolabile. Serbatoio da 2 L per chi vuole cappuccino automatico da una marca alternativa alle solite.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 139,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "gaggia-eg2115-evolution",
  "v": "macchine-caffe",
  "brand": "Gaggia",
  "name": "Evolution EG2115",
  "price": 139,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Manuale italiana con carrozzeria in acciaio",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": null,
   "tank": 1.2,
   "costPerCup": null,
   "minutes": null,
   "width": 19.9
  },
  "pros": [
   "Progettata e prodotta in Italia",
   "Carrozzeria con dettagli in acciaio inox",
   "Serbatoio da 1,2 L"
  ],
  "cons": [
   "Richiede manualità con il portafiltro",
   "Scheda prodotto avara di dettagli"
  ],
  "buyIf": "Vuoi una manuale italiana costruita bene senza arrivare alla fascia alta.",
  "avoidIf": "Vuoi il caffè pronto con un tasto: questa richiede manualità.",
  "asin": "B0D5BDGGJ9",
  "amazonTitle": "EG2115/03 EU GAG.ESPR.EVOLUTION RED",
  "imgs": [
   "https://m.media-amazon.com/images/I/71lazNP2ymL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81JFlaqs0mL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81sHjuii4yL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/8150UOiDfuL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina manuale a portafiltro progettata e prodotta in Italia, con carrozzeria in ABS e dettagli in acciaio inox e serbatoio da 1,2 L. Un gradino sopra le manuali di plastica più economiche, per chi vuole preparare l'espresso a mano con una macchina costruita meglio.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 571,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "delonghi-stilosa-ec235",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "Stilosa EC235.BK",
  "price": 79,
  "quality": 7.3,
  "checked": "2026-09-11",
  "tagline": "Manuale compatta per polvere e cialde ESE",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "pannarello",
   "tank": 1,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Portafiltro per polvere e cialde ESE",
   "Caldaia in acciaio, 15 bar",
   "Prezzo d'ingresso"
  ],
  "cons": [
   "Latte da montare a mano",
   "Niente macinacaffè"
  ],
  "buyIf": "Vuoi provare l'espresso a portafiltro, anche con cialde ESE, spendendo poco.",
  "avoidIf": "Vuoi macinatura fresca o cappuccino automatico.",
  "asin": "B086RF6YJQ",
  "amazonTitle": "De'Longhi Stilosa EC235.BK Macchina manuale da Caffè Espresso e Cappuccino, Caffè in Polvere o in Cialde E.S.E., Montalatte classico per Cappuccini, serbatoio 1L, 1100W, Caldaia Acciaio Inox, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/714SyCliAIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71kingcvK9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71UtVzOzP2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71rgrnMq2uL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina manuale a pompa con pressione a 15 bar e caldaia in acciaio, portafiltro per caffè in polvere o cialde ESE e Cappuccino System a lancia per il latte. Serbatoio estraibile da 1 L. Un'entrata a portafiltro economica per chi vuole provare l'espresso fatto a mano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 1203,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "probreeze-omnidry-12l",
  "v": "deumidificatori",
  "brand": "Pro Breeze",
  "name": "OmniDry 12L",
  "price": 159.99,
  "quality": 8.6,
  "checked": "2026-09-11",
  "tagline": "12 L al giorno, certificato Quiet Mark",
  "attrs": {
   "liters": 12,
   "tank": 2,
   "noise": null,
   "hygrostat": true,
   "laundry": null,
   "drain": null,
   "wheels": null,
   "weight": null
  },
  "pros": [
   "Sensore di umidità automatico",
   "Certificato Quiet Mark per la silenziosità",
   "Timer 24 ore e display LED"
  ],
  "cons": [
   "Serbatoio da 2 L, da svuotare spesso senza scarico",
   "Copertura limitata a una stanza"
  ],
  "buyIf": "Vuoi tenere l'umidità sotto controllo in una stanza con un modello silenzioso.",
  "avoidIf": "Devi coprire tutta la casa o una taverna grande: qui bastano ~15 m².",
  "asin": "B09BNZWPZY",
  "amazonTitle": "Pro Breeze OmniDry Deumidificatore 12L/giorno con serbatoio d'acqua da 2L, sensore e display di umidità auto, asciugatura della biancheria, modalità Sleep e timer 24H - Umidità, muffa e condensa",
  "imgs": [
   "https://m.media-amazon.com/images/I/71VkBimGL2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/611ZddOqIKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71T8L5RBFtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714NDEyzX5L._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 12 L al giorno con sensore di umidità automatico, serbatoio da 2 L, display LED e timer 24 ore. Certificazione Quiet Mark per il funzionamento silenzioso e copertura consigliata di circa 15 m². Adatto a una stanza o a un ambiente umido di casa.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 4720,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "knka-25l-pd25",
  "v": "deumidificatori",
  "brand": "KNKA",
  "name": "25L PD25",
  "price": 189.99,
  "quality": 8.4,
  "checked": "2026-09-11",
  "tagline": "25 L al giorno per gli ambienti grandi",
  "attrs": {
   "liters": 25,
   "tank": 4,
   "noise": null,
   "hygrostat": null,
   "laundry": null,
   "drain": true,
   "wheels": null,
   "weight": null
  },
  "pros": [
   "25 L al giorno, copertura fino a 50 m²",
   "Tre opzioni di drenaggio, scarico continuo incluso",
   "Serbatoio ampio da 4 L"
  ],
  "cons": [
   "Ingombrante per una singola stanza",
   "Rumorosità non dichiarata in dB"
  ],
  "buyIf": "Devi deumidificare un ambiente grande, oltre 50 m², o una taverna.",
  "avoidIf": "Ti serve solo per una camera: è sovradimensionato.",
  "asin": "B0H5MMVQGB",
  "amazonTitle": "KNKA Deumidificatore 25L/giorno Dehumidifier Tre Modalità di Funzionamento | Deumidificatore Elettrico Serbatoio 4,0L, deumidificazione potente e silenziosa, copre fino a 125 m³ (50 m²). Bianco.",
  "imgs": [
   "https://m.media-amazon.com/images/I/61HoixyWqTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Bl4fZrpJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71rc1bH2RaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71CuER7zglL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore da 25 L al giorno con serbatoio da 4 L, pannello touch con tre modalità e tre opzioni di drenaggio, incluso lo scarico continuo. Copertura dichiarata fino a 50 m²: pensato per zona giorno ampia, taverna o più stanze insieme.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 2123,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "beko-bdp010-10l",
  "v": "deumidificatori",
  "brand": "Beko",
  "name": "BDP010",
  "price": 89.99,
  "quality": 7.8,
  "checked": "2026-09-11",
  "tagline": "10 L al giorno, 39 dB, marca affidabile sotto i 100 euro",
  "attrs": {
   "liters": 10,
   "tank": 2.2,
   "noise": 39,
   "hygrostat": null,
   "laundry": null,
   "drain": null,
   "wheels": null,
   "weight": null
  },
  "pros": [
   "Marca affidabile a prezzo contenuto",
   "Solo 39 dB dichiarati",
   "Timer 24 ore e filtro lavabile"
  ],
  "cons": [
   "Capacità di 10 L adatta a una sola stanza",
   "Serbatoio da 2,2 L da svuotare a mano"
  ],
  "buyIf": "Vuoi un deumidificatore di marca, silenzioso e per una stanza, sotto i 100 €.",
  "avoidIf": "Devi coprire più stanze o una zona giorno ampia: 10 L bastano per poco spazio.",
  "asin": "B0CNDHRSNG",
  "amazonTitle": "BEKO Deumidificatore BDP010, 10L/giorno | Gas R290, Timer 24h, Pannello di Controllo Touch, Serbatoio Acqua 2,2L, Funzione Asciugabiancheria, Bianco",
  "imgs": [
   "https://m.media-amazon.com/images/I/51gYUfhc9NL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61fKCJPeKqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61X+-DrWoRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51O6ogFRO9L._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore Beko da 10 L al giorno con gas R290, timer 24 ore, pannello di controllo LED e serbatoio da 2,2 L. Funzionamento dichiarato a 39 decibel e filtro lavabile: un modello di marca per una stanza, a un prezzo contenuto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 673,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "comfee-30l-mddf",
  "v": "deumidificatori",
  "brand": "Comfee'",
  "name": "30L",
  "price": 279.9,
  "quality": 8.2,
  "checked": "2026-09-11",
  "tagline": "30 L al giorno per case fino a 73 m²",
  "attrs": {
   "liters": 30,
   "tank": 3,
   "noise": null,
   "hygrostat": null,
   "laundry": null,
   "drain": null,
   "wheels": null,
   "weight": null
  },
  "pros": [
   "30 L al giorno, tra i più capienti",
   "Copertura fino a 73 m²",
   "Buona portata d'aria (191 m³/h)"
  ],
  "cons": [
   "Assorbimento elevato (640 W)",
   "Sovradimensionato per una stanza singola"
  ],
  "buyIf": "Devi deumidificare una casa o una taverna fino a circa 70 m².",
  "avoidIf": "Ti serve per una camera: consuma e ingombra più del necessario.",
  "asin": "B0D9Q5P1BL",
  "amazonTitle": "COMFEE' Deumidificatore 30L/giorno, Deumidificatore casa muffa adatto fino a 73㎡,Tanica da 3L, Ruote Piroettanti, Modalità Asciugatuta, Ridotta Rumorosità, CDDAE-30DEN7-QA3",
  "imgs": [
   "https://m.media-amazon.com/images/I/61PZq+LmqgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61AsD3oN64L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/712XcpvKesL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71fenZlFxsL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore Comfee' da 30 L al giorno con serbatoio da 3 L e copertura dichiarata fino a 73 m². Portata d'aria elevata (191 m³/h) e due velocità. Una delle capacità più alte del gruppo, per chi deve asciugare ambienti grandi o tutta la casa.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 225,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "beko-bdpm030-30l",
  "v": "deumidificatori",
  "brand": "Beko",
  "name": "BDPM030",
  "price": 205.72,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "30 L al giorno con ruote e modalità bucato",
  "attrs": {
   "liters": 30,
   "tank": null,
   "noise": null,
   "hygrostat": null,
   "laundry": true,
   "drain": null,
   "wheels": true,
   "weight": null
  },
  "pros": [
   "30 L al giorno con ruote per spostarlo",
   "Modalità asciugatura biancheria",
   "Deumidifica e purifica l'aria"
  ],
  "cons": [
   "Rumorosità non dichiarata in dB",
   "Capacità del serbatoio non chiara in scheda"
  ],
  "buyIf": "Devi asciugare il bucato e spostare spesso il deumidificatore tra le stanze.",
  "avoidIf": "Cerchi il modello più silenzioso per la camera da letto.",
  "asin": "B0G4RLDKB6",
  "amazonTitle": "BEKO Deumidificatore BDPM030, 30L/giorno | Gas R290, Timer 24h, Pannello di Controllo Touch, Serbatoio Acqua 4,2L, Ruote Piroettanti, Funzione Asciugabiancheria",
  "imgs": [
   "https://m.media-amazon.com/images/I/71mICOe0omL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71v9KvN0DeL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714KMgbLTTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71SWbcwCcTL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore Beko da 30 L al giorno con gas R290, pannello touch, timer, ruote e maniglie laterali per spostarlo tra le stanze. Combina deumidificazione e purificazione dell'aria e include una modalità per l'asciugatura della biancheria. Filtro aria in dotazione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 673,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "probreeze-40l-wifi",
  "v": "deumidificatori",
  "brand": "Pro Breeze",
  "name": "40L WiFi",
  "price": 279.99,
  "quality": 8.3,
  "checked": "2026-09-11",
  "tagline": "40 L al giorno con controllo via app",
  "attrs": {
   "liters": 40,
   "tank": 5.3,
   "noise": 49,
   "hygrostat": true,
   "laundry": null,
   "drain": null,
   "wheels": null,
   "weight": 16.36
  },
  "pros": [
   "40 L al giorno con serbatoio da 5,3 L",
   "Controllo via app e comandi vocali",
   "Sotto i 49 dB dichiarati"
  ],
  "cons": [
   "Pesa oltre 16 kg",
   "Sovradimensionato per una stanza"
  ],
  "buyIf": "Hai un ambiente grande o molto umido e vuoi gestirlo dall'app.",
  "avoidIf": "Ti serve per una piccola camera: 40 L sono troppi.",
  "asin": "B0FBMCD3W6",
  "amazonTitle": "Pro Breeze Deumidificatore 40L WiFi Potente per Casa, Copertura fino a 50m², Antimuffa Bagno Armadio Camera da Letto, Silenzioso e Portatile, Sensore Umidità Automatico, Display Digitale, Timer 24h",
  "imgs": [
   "https://m.media-amazon.com/images/I/61iRzwQgYzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71HpFg8-q5L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71lW0D4b2fL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71aaoHuqUUL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 40 L al giorno con serbatoio da 5,3 L, controllo tramite app Pro Breeze e comandi vocali, e copertura fino a circa 50 m². Rumorosità dichiarata sotto i 49 dB e compressore ad alta efficienza. Per ambienti grandi o molto umidi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 120,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "comfee-12l-doppio-drenaggio",
  "v": "deumidificatori",
  "brand": "Comfee'",
  "name": "12L Doppio Drenaggio",
  "price": 129.9,
  "quality": 7.9,
  "checked": "2026-09-11",
  "tagline": "12 L al giorno con modalità asciuga-bucato e scarico",
  "attrs": {
   "liters": 12,
   "tank": null,
   "noise": null,
   "hygrostat": null,
   "laundry": true,
   "drain": true,
   "wheels": null,
   "weight": 10.7
  },
  "pros": [
   "Doppio drenaggio, scarico continuo incluso",
   "Modalità dryer per asciugare i vestiti",
   "Sbrinamento automatico e antitrabocco"
  ],
  "cons": [
   "Capacità adatta a una sola stanza",
   "Rumorosità non dichiarata in dB"
  ],
  "buyIf": "Asciughi il bucato in casa e vuoi poterlo collegare a uno scarico.",
  "avoidIf": "Devi coprire una zona giorno ampia: 12 L bastano per una stanza.",
  "asin": "B0D9Q5C41T",
  "amazonTitle": "COMFEE' Deumidificatore Casa 12L/24h, Doppio Drenaggio",
  "imgs": [
   "https://m.media-amazon.com/images/I/61wwMZGKOEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71BltsRoS3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/712ClcbWQLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/815x630+IPL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore Comfee' da 12 L al giorno con doppio sistema di drenaggio (serbatoio e scarico continuo), modalità dryer per asciugare i vestiti, protezione antitrabocco e sbrinamento automatico. Copertura consigliata di circa 20 m²: adatto a una stanza in cui asciughi anche il bucato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 615,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "meaco-arete-two-25l",
  "v": "deumidificatori",
  "brand": "Meaco",
  "name": "Dry Arete Two 25L",
  "price": 590,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "25 L al giorno con purificatore HEPA H13 integrato",
  "attrs": {
   "liters": 25,
   "tank": null,
   "noise": null,
   "hygrostat": true,
   "laundry": null,
   "drain": null,
   "wheels": null,
   "weight": 16
  },
  "pros": [
   "Deumidifica e purifica con filtro HEPA H13",
   "Controllo regolabile dell'umidità",
   "Marca specializzata, pensato per il basso consumo"
  ],
  "cons": [
   "Prezzo elevato",
   "Recensioni ancora limitate"
  ],
  "buyIf": "Vuoi un deumidificatore silenzioso che purifica anche l'aria, per ambienti grandi.",
  "avoidIf": "Hai un budget contenuto: è tra i più cari della categoria.",
  "asin": "B0CTKS4TGW",
  "amazonTitle": "Meaco Deumidificatore Dry Arete® Two da 25 litri e purificatore d'aria HEPA H13, basso consumo energetico, basso rumore, app Wi-Fi, modalità umidità intelligente, modalità lavanderia",
  "imgs": [
   "https://m.media-amazon.com/images/I/61924d9Fm4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81w+t1WzhvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61zUUrdudeL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81GcjZAMMkL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore e purificatore d'aria 2 in 1 da 25 L al giorno con filtro HEPA H13, controllo regolabile dell'umidità e gestione via app o comandi vocali. Progettato per il basso consumo e la silenziosità, con copertura dichiarata fino a 86 m². Marca specializzata, fascia alta.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 79,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "vesgantti-molle-160x200-h25",
  "v": "materassi",
  "brand": "Vesgantti",
  "name": "Vesgantti Materasso a Molle 160x200 H25",
  "price": 225.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Molle insacchettate per chi divide il letto",
  "attrs": {
   "type": "molle",
   "firmness": 6,
   "cooling": null,
   "motion": 7,
   "edge": null,
   "height": 25,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Molle insacchettate con 7 zone di portanza, indicate per chi dorme in coppia",
   "Rivestimento traspirante rimovibile e lavabile",
   "Oltre 1700 recensioni con media 4,5, rara base di riscontri per la fascia"
  ],
  "cons": [
   "Rigidita dichiarata solo media, poco adatta a chi cerca un piano deciso"
  ],
  "buyIf": "Dormi in coppia e vuoi molle indipendenti che isolino i movimenti senza spendere troppo.",
  "avoidIf": "Cerchi un materasso rigido o l'accoglienza avvolgente del memory.",
  "asin": "B0BVD7ZH1W",
  "amazonTitle": "Vesgantti Materasso Matrimoniale a Molle 160x200 Alto 25 cm",
  "imgs": [
   "https://m.media-amazon.com/images/I/81bLm9XjCAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/818WnbKRwxL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71x6cjF+R5L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81IhO5iq7SL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso a molle insacchettate 160x200 alto 25 cm con 7 zone differenziate, pensato per ridurre il trasferimento di movimento tra i due lati del letto. La rigidita dichiarata e media, quindi un compromesso piu che un piano rigido. La base di recensioni e molto ampia e la media resta alta, elemento che da' solidita alla scelta nella fascia intorno ai 226 euro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 1782,
  "bsr": 19673,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "vesgantti-pocket-memory-160x200",
  "v": "materassi",
  "brand": "Vesgantti",
  "name": "Vesgantti Molle Insacchettate + Memory 160x200 H24",
  "price": 229.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Ibrido molle e memory a prezzo contenuto",
  "attrs": {
   "type": "ibrido",
   "firmness": 6,
   "cooling": null,
   "motion": 7,
   "edge": null,
   "height": 24,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Struttura ibrida molle insacchettate piu memory, unisce sostegno e accoglienza",
   "Molle indipendenti che limitano il trasferimento di movimento nella coppia",
   "Media 4,6 su quasi 900 recensioni, riscontro robusto per il prezzo"
  ],
  "cons": [
   "Rigidita media: chi pesa molto o dorme prono potrebbe volere un piano piu deciso"
  ],
  "buyIf": "Vuoi il sostegno delle molle ma anche un po' di accoglienza del memory, in coppia.",
  "avoidIf": "Pesi parecchio o dormi a pancia in giu e ti serve un materasso rigido.",
  "asin": "B08CTSK42X",
  "amazonTitle": "Vesgantti Materasso Matrimoniale 160x200cm Molle Insacchettate & Memory Foam",
  "imgs": [
   "https://m.media-amazon.com/images/I/71HxUFLpTsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/719GlpFmJmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/617FMf87iCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81RyAG01K5L._AC_SL1500_.jpg"
  ],
  "summary": "Ibrido 160x200 alto 24 cm che combina molle insacchettate e uno strato di memory: le molle danno sostegno e areazione, il memory aggiunge accoglienza sul contatto. Rigidita dichiarata media, quindi equilibrato piu che rigido. A circa 230 euro e una delle opzioni ibride con piu recensioni positive verificabili in questa fascia.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 888,
  "bsr": 23993,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "geemma-hybrid-h27-160x200",
  "v": "materassi",
  "brand": "GEEMMA",
  "name": "GEEMMA Memory + Molle Insacchettate H27 Hybrid 160x200",
  "price": 249,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Ibrido alto 27 cm con 7 zone",
  "attrs": {
   "type": "ibrido",
   "firmness": 6,
   "cooling": null,
   "motion": 7,
   "edge": null,
   "height": 27,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Altezza 27 cm con struttura ibrida memory e molle insacchettate",
   "Molle indipendenti a 7 zone, utili per chi dorme in coppia",
   "Posizionamento di vendita molto alto nella categoria (BSR 2501)"
  ],
  "cons": [
   "Base recensioni ancora contenuta (77), meno consolidata di altri ibridi"
  ],
  "buyIf": "Vuoi un ibrido alto e strutturato con molle a zone, a un prezzo intorno ai 250 euro.",
  "avoidIf": "Preferisci affidarti solo a prodotti con migliaia di recensioni gia consolidate.",
  "asin": "B0GY15YLL7",
  "amazonTitle": "GEEMMA Materasso Matrimoniale 160x200 Memory Molle insacchettate H27 HYBRID",
  "imgs": [
   "https://m.media-amazon.com/images/I/717mHFk80JL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61HWPNtSriL._AC_SL1174_.jpg",
   "https://m.media-amazon.com/images/I/61N0MDOcEmL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/71ywa4UNQ0L._AC_SL1500_.jpg"
  ],
  "summary": "Ibrido matrimoniale 160x200 alto 27 cm che unisce memory e molle insacchettate a 7 zone. L'altezza generosa e il posizionamento di vendita molto alto nella categoria indicano un prodotto richiesto, anche se la base di recensioni resta piu ridotta rispetto ai Vesgantti. Rigidita dichiarata media. Scelta sensata per chi vuole un profilo alto senza salire troppo di prezzo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 77,
  "bsr": 2501,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "twirest-ibrido-memory-molle-160x200",
  "v": "materassi",
  "brand": "Twirest",
  "name": "Twirest Materasso Ibrido Memory + Molle Insacchettate 160x200 H22",
  "price": 177.62,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Ibrido con bordi rinforzati sotto i 180 euro",
  "attrs": {
   "type": "ibrido",
   "firmness": 6,
   "cooling": null,
   "motion": 7,
   "edge": 7,
   "height": 22,
   "maxKg": null,
   "trial": 0
  },
  "pros": [
   "Ibrido memory e molle insacchettate con rinforzi laterali sul perimetro",
   "Molle indipendenti a 7 zone che contengono il trasferimento di movimento",
   "Prezzo sotto i 180 euro con media 4,4 su oltre 500 recensioni"
  ],
  "cons": [
   "Altezza 22 cm piu contenuta rispetto agli ibridi da 25-27 cm",
   "Rigidita dichiarata media, non un piano rigido"
  ],
  "buyIf": "Cerchi un ibrido economico con bordi rinforzati e molle indipendenti per la coppia.",
  "avoidIf": "Vuoi un materasso alto e avvolgente o un piano decisamente rigido.",
  "asin": "B0DK6TFBPD",
  "amazonTitle": "Twirest Materasso 160 x 200 x 22 cm, materasso ibrido in memory foam con molle insacchettate",
  "imgs": [
   "https://m.media-amazon.com/images/I/81wIzElty3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Enva5y26L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71F1kPvuG7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71afCnmXenL._AC_SL1500_.jpg"
  ],
  "summary": "Ibrido 160x200 alto 22 cm che abbina memory e molle insacchettate a 7 zone, con rinforzi laterali dichiarati sul perimetro, utili a chi usa spesso il bordo del letto. E l'opzione piu economica del gruppo, sotto i 180 euro, con una base di recensioni ampia e media buona. L'altezza e un po' inferiore rispetto ad altri ibridi della selezione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 543,
  "bsr": 12561,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "clouvou-cleverseat-lombare-adattivo",
  "v": "sedie-ergonomiche",
  "brand": "CLOUVOU",
  "name": "CLOUVOU CleverSeat lombare adattivo 4D",
  "price": 219.99,
  "quality": 9,
  "checked": "2026-09-11",
  "tagline": "La rete premium con regolazioni complete",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": true,
   "armrests": 4,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Supporto lombare adattivo che segue la schiena",
   "Braccioli 4D e poggiatesta 3D regolabili in piu' direzioni",
   "Rating molto alto su oltre 3000 recensioni"
  ],
  "cons": [
   "Prezzo nella fascia alta del segmento rete",
   "Seduta in poliuretano, non interamente in rete"
  ],
  "buyIf": "Vuoi il massimo delle regolazioni (4D+3D+lombare) e non ti spaventa spendere oltre 200 euro.",
  "avoidIf": "Hai un budget contenuto o cerchi una seduta interamente in rete.",
  "asin": "B0BGZB6VZM",
  "amazonTitle": "CLOUVOU Sedia Ufficio Ergonomica con Supporto Lombare Adattivo | con Ruote",
  "imgs": [
   "https://m.media-amazon.com/images/I/81TpUJ-uT1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/718ihNc4u-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71BZlXEnwjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71u2ZOqDS5L._AC_SL1500_.jpg"
  ],
  "summary": "Sedia in rete di fascia medio-alta con lombare adattivo, braccioli 4D e poggiatesta 3D: e' il modello con piu' regolazioni del gruppo. La seduta e' in schiuma poliuretanica mentre lo schienale resta traspirante. Portata dichiarata 150 kg (330 lb). Le oltre 3000 recensioni a 4.8 sono il punto di forza principale; in cambio chiede il prezzo piu' alto della selezione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.8,
  "reviews": 3254,
  "bsr": 11550,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "sihoo-m102c-rete-braccioli-3d",
  "v": "sedie-ergonomiche",
  "brand": "SIHOO",
  "name": "SIHOO M102C rete braccioli 3D",
  "price": 159.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "La SIHOO completa a prezzo medio",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 3,
   "maxWeight": 136,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Supporto lombare regolabile in modo indipendente",
   "Braccioli 3D ribaltabili e poggiatesta regolabile",
   "Schienale alto e seduta ampia fino a 136 kg"
  ],
  "cons": [
   "Nessun angolo di reclinazione dichiarato",
   "Rating 4.3, nella media del gruppo"
  ],
  "buyIf": "Cerchi una rete completa e regolabile intorno ai 160 euro di un marchio noto.",
  "avoidIf": "Ti serve un angolo di reclinazione certo o pesi oltre 136 kg.",
  "asin": "B0CLLRNFB8",
  "amazonTitle": "SIHOO M102C Sedia Ufficio Ergonomicamente Rete, Braccioli 3D, Schienale Alto",
  "imgs": [
   "https://m.media-amazon.com/images/I/61LwJGI55jL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71l0s2dW4TL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61oCaDndPIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71v0IBLkM3L._AC_SL1500_.jpg"
  ],
  "summary": "Modello SIHOO interamente in rete con schienale alto, lombare regolabile separato, braccioli 3D ribaltabili e poggiatesta regolabile. Portata 136 kg e certificazioni TUV/BIFMA citate. E' una scelta equilibrata per chi vuole tutte le regolazioni principali senza salire alla fascia premium. Le recensioni sono numerose (oltre 2500) ma il rating resta sul 4.3.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 2542,
  "bsr": 9334,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "durrafy-budget-poggiatesta-lombare",
  "v": "sedie-ergonomiche",
  "brand": "Durrafy",
  "name": "Durrafy rete poggiatesta e lombare regolabili",
  "price": 94.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Budget con poggiatesta e lombare regolabili",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": null,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 120,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Poggiatesta (7 cm) e lombare (5 cm) entrambi regolabili sotto i 100 euro",
   "Portata dichiarata 150 kg con molla a gas certificata BIFMA/SGS",
   "Schienale inclinabile 90-120 gradi"
  ],
  "cons": [
   "Braccioli regolabili solo in altezza (8 cm), non 3D/4D",
   "Inclinazione non bloccabile"
  ],
  "buyIf": "Vuoi poggiatesta e lombare regolabili spendendo meno di 100 euro.",
  "avoidIf": "Ti servono braccioli 3D/4D o un'inclinazione bloccabile in posizione.",
  "asin": "B0H26GXR6L",
  "amazonTitle": "Durrafy Sedia da Ufficio Ergonomica, Poggiatesta & Supporto Lombare Regolabili, Rete Traspirante, 120 Inclinazione, 360 Girevole, 150kg Carico",
  "imgs": [
   "https://m.media-amazon.com/images/I/61Qwpng18aL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61sxCCEB2mL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/71o2UJJG3cL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/71U4koGVr3L._AC_SL1200_.jpg"
  ],
  "summary": "Sedia economica in rete che a meno di 100 euro offre sia poggiatesta regolabile (7 cm) sia supporto lombare regolabile (5 cm), combinazione rara in questa fascia. Schienale inclinabile da 90 a 120 gradi ma non bloccabile, braccioli regolabili solo in altezza, portata 150 kg. Buon compromesso per chi vuole le regolazioni chiave spendendo poco.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1839,
  "bsr": 9533,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "naspaluro-lombare-c-poggiatesta",
  "v": "sedie-ergonomiche",
  "brand": "naspaluro",
  "name": "naspaluro rete lombare a C poggiatesta regolabile",
  "price": 89.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Rete economica con lombare a C",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": true,
   "armrests": null,
   "maxWeight": null,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Supporto lombare adattativo a forma di C che si conforma alla schiena",
   "Poggiatesta regolabile incluso sotto i 90 euro",
   "Braccioli ribaltabili a 90 gradi per infilare la sedia sotto la scrivania"
  ],
  "cons": [
   "Portata massima non dichiarata",
   "Meno recensioni (760) rispetto ai best seller"
  ],
  "buyIf": "Cerchi una rete economica con lombare avvolgente e poggiatesta.",
  "avoidIf": "Hai bisogno di una portata massima certa o di braccioli multidirezionali.",
  "asin": "B0D4F5X7DS",
  "amazonTitle": "naspaluro Sedia Da Ufficio Ergonomica Con Supporto Lombare Adattativo a Forma Di C, Poggiatesta Regolabile, Braccioli Ribaltabili, a Rete Traspirante",
  "imgs": [
   "https://m.media-amazon.com/images/I/616YqgM5MVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71PY0kNFvAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81NQxsATnwL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71C2kP3YKWL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia in rete sotto i 90 euro con supporto lombare adattativo a forma di C e poggiatesta regolabile. I braccioli sono ribaltabili a 90 gradi, utili per riporre la sedia sotto il tavolo. Il BSR basso indica buona rotazione di vendita, anche se la portata massima non e' dichiarata e le recensioni sono meno numerose dei modelli piu' popolari.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 760,
  "bsr": 2375,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "sihoo-b100-lombare-dinamico",
  "v": "sedie-ergonomiche",
  "brand": "SIHOO",
  "name": "SIHOO B100 rete lombare dinamico",
  "price": 169.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Rete dinamica molto venduta",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": false,
   "armrests": null,
   "maxWeight": 136,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 135,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Supporto lombare dinamico a doppio schienale che segue i movimenti",
   "Tre angoli di reclinazione regolabili (110, 123, 135 gradi)",
   "Interamente in rete, BSR molto alto nella categoria"
  ],
  "cons": [
   "Senza poggiatesta",
   "Braccioli non specificati in dettaglio"
  ],
  "buyIf": "Vuoi un lombare dinamico e reclinazione multi-angolo in una rete di marca.",
  "avoidIf": "Ti serve il poggiatesta per appoggiare la testa durante le pause.",
  "asin": "B0GHZ85MY1",
  "amazonTitle": "SIHOO B100 Sedia da Ufficio Rete, Supporto Lombare Adattivo, 136kg, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71+LRBjct0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Iw+PLxt3L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Gymtz8fiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71gwXKvSqDL._AC_SL1500_.jpg"
  ],
  "summary": "SIHOO B100 e' una rete con schienale elastico a doppio strato e supporto lombare dinamico che accompagna i movimenti della schiena. Offre tre angoli di reclinazione (110/123/135 gradi) e portata 136 kg. E' un modello senza poggiatesta, pensato per chi lavora in appoggio attivo piu' che per il relax a testa reclinata. Il BSR molto basso conferma l'alto volume di vendite.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1922,
  "bsr": 1502,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "melokea-f008-direzionale-en1335",
  "v": "sedie-ergonomiche",
  "brand": "MELOKEA",
  "name": "MELOKEA F008 direzionale schienale alto EN 1335",
  "price": 149.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Direzionale certificata EN 1335",
  "attrs": {
   "lumbar": "fixed",
   "headrest": true,
   "armrests": null,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Conforme alla norma europea EN 1335 per sedie professionali",
   "Poggiatesta regolabile di 6 cm e schienale con curva a S",
   "Due modalita' di inclinazione (libera o bloccata), carico 150 kg"
  ],
  "cons": [
   "Supporto lombare a S fisso, non regolabile",
   "Poche recensioni (228) e BSR alto"
  ],
  "buyIf": "Dai valore alla certificazione EN 1335 e a un look direzionale classico.",
  "avoidIf": "Vuoi un supporto lombare regolabile o preferisci prodotti molto recensiti.",
  "asin": "B0993SRSPV",
  "amazonTitle": "MELOKEA F008 Sedia da Ufficio Ergonomica Direzionale Schienale Alto in Rete, Supporto Lombare a S Certificato EN 1335 e Poggiatesta 6cm Regolabile, Carico 150kg",
  "imgs": [
   "https://m.media-amazon.com/images/I/612wIktEWGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61+dsNQurZL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61bVcaJ3LVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61POMi6eFkL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia direzionale con schienale alto in rete e lombare a S di profilo ergonomico fisso, certificata EN 1335. Il poggiatesta e' regolabile di 6 cm e la seduta imbottita 10 cm in tessuto; portata 150 kg e doppia modalita' di inclinazione (libera o bloccata). La certificazione e' il punto distintivo, ma il lombare non e' regolabile e le recensioni sono ancora poche.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 228,
  "bsr": 44429,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "devaise-lombare-regolabile-poggiatesta-3d",
  "v": "sedie-ergonomiche",
  "brand": "DEVAISE",
  "name": "DEVAISE rete lombare regolabile poggiatesta 3D",
  "price": 72.19,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Il prezzo piu' basso con lombare e poggiatesta regolabili",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": null,
   "maxWeight": null,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Supporto lombare regolabile in profondita' al prezzo piu' basso del gruppo",
   "Poggiatesta 3D regolabile in altezza, profondita' e rotazione",
   "Funzione dondolante e schienale segmentato a C"
  ],
  "cons": [
   "Portata massima non dichiarata",
   "Braccioli solo ribaltabili a 90 gradi, non multidirezionali"
  ],
  "buyIf": "Vuoi lombare regolabile e poggiatesta 3D spendendo il minimo possibile.",
  "avoidIf": "Hai bisogno di una portata massima dichiarata o di braccioli regolabili in piu' assi.",
  "asin": "B0F66ZB6DL",
  "amazonTitle": "DEVAISE Sedia Ufficio Ergonomica con Supporto Lombare Regolabile, Funzione dondolante, Poggiatesta 3D Regolabile, Braccioli Ribaltabili a 90, Schienale in Rete",
  "imgs": [
   "https://m.media-amazon.com/images/I/71sK1BJY7QL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/719LUW5SSkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ep32WnXQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71kiYNHpnJL._AC_SL1500_.jpg"
  ],
  "summary": "A poco piu' di 70 euro la DEVAISE offre schienale segmentato a C regolabile in profondita', lombare regolabile e poggiatesta 3D (altezza, profondita' e rotazione fino a 55 gradi), piu' funzione dondolante. Schienale e seduta in rete 3D, pistone a gas certificato SGS classe 3 e TUV. Ottimo rapporto funzioni/prezzo; la portata massima non e' pero' indicata e i braccioli sono solo ribaltabili.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 258,
  "bsr": 17642,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "songmics-obn041b-doppia-rete-lombare-adattivo",
  "v": "sedie-ergonomiche",
  "brand": "SONGMICS",
  "name": "SONGMICS OBN041B doppia rete lombare adattivo",
  "price": 76.79,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Rete economica con lombare auto-adattivo",
  "attrs": {
   "lumbar": "dynamic",
   "headrest": true,
   "armrests": null,
   "maxWeight": null,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": null,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Supporto lombare adattivo che risponde automaticamente ai movimenti",
   "Schienale in rete a doppio strato con poggiatesta regolabile",
   "BSR tra i piu' bassi della categoria, sotto gli 80 euro"
  ],
  "cons": [
   "Portata massima non dichiarata",
   "Braccioli solo ribaltabili a 90 gradi"
  ],
  "buyIf": "Cerchi un lombare che si adatta da solo e un poggiatesta regolabile spendendo poco.",
  "avoidIf": "Ti serve una portata massima dichiarata o braccioli regolabili in piu' assi.",
  "asin": "B0DZF9B1C3",
  "amazonTitle": "SONGMICS Sedia Ergonomica da Ufficio, Tessuto Rete a Doppio Strato, Braccioli Sollevabili, Supporto Lombare Adattabile, Poggiatesta Regolabile, OBN041B01",
  "imgs": [
   "https://m.media-amazon.com/images/I/71IGruWmItL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Dp+qdHL0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Z-oG7VhDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71K3NIOFX9L._AC_SL1500_.jpg"
  ],
  "summary": "Modello SONGMICS sotto gli 80 euro con schienale in tessuto a rete a doppio strato, supporto lombare indipendente che si adatta automaticamente ai movimenti e poggiatesta regolabile in altezza e angolo. Include funzione oscillante e braccioli ribaltabili a 90 gradi. Il BSR molto basso segnala forte rotazione; manca pero' l'indicazione della portata massima e i braccioli non sono multidirezionali.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 773,
  "bsr": 675,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "sony-e-30-f35-macro",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 30mm f/3.5 Macro",
  "price": 220.95,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "La via economica alla macro su Sony APS-C.",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 30,
   "focalMax": 30,
   "apertureMax": 3.5,
   "stabilized": false,
   "macro": true,
   "weight": 138,
   "type": "macro"
  },
  "pros": [
   "Ingrandimento 1:1 per vera macro",
   "Molto leggero e compatto (138 g)",
   "Prezzo contenuto per entrare nel macro"
  ],
  "cons": [
   "Apertura f/3.5 non adatta a poca luce",
   "Distanza di lavoro molto corta col soggetto"
  ],
  "buyIf": "Vuoi iniziare la macro su Sony APS-C con poca spesa e ti basta un uso occasionale.",
  "avoidIf": "Fotografi insetti timidi o lavori con poca luce: servono piu' distanza e apertura.",
  "asin": "B0057XC3A0",
  "amazonTitle": "Sony SEL-30M35 Obiettivo Macro a Focale Fissa 30 mm F3.5, Mirrorless APS-C, Attacco E, SEL30M35",
  "imgs": [
   "https://m.media-amazon.com/images/I/61T6mf69LfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61glg5R831L._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/61Wi4oXAq1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61XgZxGLj7L._AC_SL1500_.jpg"
  ],
  "summary": "E' l'obiettivo macro piu' accessibile del sistema Sony E APS-C e copre il rapporto 1:1. Resta compatto e leggero, adatto a chi vuole provare piccoli soggetti e still life senza spendere molto. La luminosita' f/3.5 e la distanza di lavoro ridotta sono i suoi limiti reali.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 515,
  "bsr": 87887,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-35-f18-oss",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 35mm f/1.8 OSS",
  "price": 378.04,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il tuttofare luminoso e stabilizzato per APS-C.",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 35,
   "focalMax": 35,
   "apertureMax": 1.8,
   "stabilized": true,
   "macro": false,
   "weight": 154,
   "type": "ritratto"
  },
  "pros": [
   "Luminoso f/1.8 con stabilizzazione OSS",
   "Angolo 35mm (52mm equiv.) versatile tutti i giorni",
   "Leggero, adatto a vlog e street"
  ],
  "cons": [
   "Prezzo alto rispetto ad alternative di terze parti",
   "Non e' un vero tele per ritratto stretto"
  ],
  "buyIf": "Cerchi una focale normale luminosa e stabilizzata su Sony APS-C, anche per video a mano.",
  "avoidIf": "Hai budget limitato o vuoi una focale piu' lunga per i ritratti.",
  "asin": "B0096W1P5W",
  "amazonTitle": "Sony SEL35F18 – 35mm f/1.8 Obiettivo Grandangolare (APS-C, Stabilizzato OSS, E-Mount, Ideale per Street e Vlog, Compatibile con Alpha 6000/6100/6400/6600)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71HJdwWwTlL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/717zyrUDrcL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61EC1bb2aWL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/619IjXFW9BL._AC_SL1500_.jpg"
  ],
  "summary": "Un 35mm f/1.8 con stabilizzatore OSS, utile dove il corpo non stabilizza. La focale equivalente vicina al 50mm lo rende una scelta da tutti i giorni per street, reportage e video. Luminoso e leggero, ma oggi il prezzo e' alto a fronte di molte alternative di terze parti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 1950,
  "bsr": 110009,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-11-f18",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 11mm f/1.8",
  "price": 481.58,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il grandangolo luminoso pensato per vlog e paesaggi.",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 11,
   "focalMax": 11,
   "apertureMax": 1.8,
   "stabilized": false,
   "macro": false,
   "weight": 181,
   "type": "grandangolo"
  },
  "pros": [
   "Grandangolo spinto 11mm (16.5mm equiv.)",
   "Molto luminoso f/1.8",
   "Compatto e adatto al vlog a braccio teso"
  ],
  "cons": [
   "Focale fissa poco versatile per altri usi",
   "Non stabilizzato"
  ],
  "buyIf": "Fai vlog, interni stretti o paesaggi e vuoi un grandangolo luminoso e leggero.",
  "avoidIf": "Cerchi un obiettivo versatile: l'11mm e' molto specifico.",
  "asin": "B0B2RZZBPN",
  "amazonTitle": "Sony SEL11F18 – Obiettivo grandangolare 11 mm F1.8 per APS-C (compatto e luminoso, attacco E-Mount, ideale per vlogging, paesaggi e architettura, compatibile con A6400, A6700, ZV-E10)",
  "imgs": [
   "https://m.media-amazon.com/images/I/512LPj2paJL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51cGkixlDmL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/41g-BxgTMOL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51r8Bx6rJAL._AC_SL1000_.jpg"
  ],
  "summary": "Un 11mm f/1.8 dedicato a chi riprende a braccio teso o fotografa paesaggi e architettura su APS-C. Compatto e luminoso, si sposa bene con corpi come la ZV-E10. E' una focale fissa molto larga, quindi poco adatta fuori dal suo scopo e senza stabilizzazione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 357,
  "bsr": 51208,
  "bsrCat": "Elettronica"
 },
 {
  "id": "viltrox-35-f17-sony-e",
  "v": "obiettivi-fotografici",
  "brand": "Viltrox",
  "name": "Viltrox 35mm f/1.7 (Sony E)",
  "price": 193.9,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Il luminoso economico per chi parte su Sony E.",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 35,
   "focalMax": 35,
   "apertureMax": 1.7,
   "stabilized": false,
   "macro": false,
   "weight": 170,
   "type": "ritratto"
  },
  "pros": [
   "Luminoso f/1.7 a meno di 200 euro",
   "Autofocus su attacco Sony E",
   "Leggero (170 g) e compatto"
  ],
  "cons": [
   "Costruzione economica rispetto alle ottiche Sony",
   "Non stabilizzato"
  ],
  "buyIf": "Vuoi il tuo primo obiettivo luminoso su Sony APS-C spendendo poco.",
  "avoidIf": "Pretendi costruzione premium o stabilizzazione integrata.",
  "asin": "B0DP75SP1N",
  "amazonTitle": "VILTROX 35mm f1.7 E, AF 35mm F1.7 E Mount Lens per Sony E, Auto Fcous APS-C Obiettivo Prime di grande apertura per Sony a6500 ZV-E10 A6700 a7RⅡ a7SⅢ a7Ⅳ a9 ZVE1",
  "imgs": [
   "https://m.media-amazon.com/images/I/71IPovg9RXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71IEnzbfpuL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71-bbjCRGqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71DgsYJxJnL._AC_SL1500_.jpg"
  ],
  "summary": "Un 35mm f/1.7 autofocus a prezzo basso, utile per chi vuole sfocato e resa in poca luce senza spendere. La focale equivalente vicina al 50mm e' comoda per tutti i giorni e ritratti ambientati. Materiali e messa a fuoco sono da fascia entry, ma il rapporto qualita'-prezzo e' ottimo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 130,
  "bsr": 107663,
  "bsrCat": "Elettronica"
 },
 {
  "id": "sony-e-70-350-g-oss",
  "v": "obiettivi-fotografici",
  "brand": "Sony",
  "name": "Sony E 70-350mm f/4.5-6.3 G OSS",
  "price": 809.79,
  "quality": 8.5,
  "checked": "2026-09-11",
  "tagline": "Il super-tele APS-C per sport e natura.",
  "attrs": {
   "mount": "Sony E",
   "focalMin": 70,
   "focalMax": 350,
   "apertureMax": 4.5,
   "stabilized": true,
   "macro": false,
   "weight": 625,
   "type": "teleobiettivo"
  },
  "pros": [
   "Escursione lunga 70-350mm (105-525mm equiv.)",
   "Stabilizzazione OSS e qualita' serie G",
   "Buona resa per sport, natura e viaggi"
  ],
  "cons": [
   "Apertura massima modesta al tele",
   "Prezzo e ingombro sopra la media APS-C"
  ],
  "buyIf": "Ti servono soggetti lontani, sport o animali con la qualita' serie G.",
  "avoidIf": "Scatti spesso al chiuso o con poca luce, o cerchi qualcosa di leggero ed economico.",
  "asin": "B07X5DGGMQ",
  "amazonTitle": "Sony SEL70350G – 70–350 mm F4.5–6.3 G OSS Super teleobiettivo zoom per APS-C (con stabilizzazione immagine, attacco E-Mount, ideale per natura, sport e viaggi, compatibile con ZV-E10, A6400, A6700)",
  "imgs": [
   "https://m.media-amazon.com/images/I/71hC9C1we1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71OC4L0jfSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71X-gopjYAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71legCI01ZL._AC_SL1500_.jpg"
  ],
  "summary": "Uno zoom tele di serie G che arriva a 350mm (525mm equivalenti) con stabilizzazione OSS. E' la scelta di riferimento per sport, fauna e viaggi su corpi APS-C come la ZV-E10. L'apertura cala a f/6.3 al tele, quindi serve buona luce o ISO piu' alti, e il prezzo non e' contenuto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 1512,
  "bsr": 87136,
  "bsrCat": "Elettronica"
 },
 {
  "id": "canon-rf-50-f18-stm",
  "v": "obiettivi-fotografici",
  "brand": "Canon",
  "name": "Canon RF 50mm f/1.8 STM",
  "price": 209,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il 50mm luminoso per entrare nel sistema Canon RF.",
  "attrs": {
   "mount": "Canon RF",
   "focalMin": 50,
   "focalMax": 50,
   "apertureMax": 1.8,
   "stabilized": false,
   "macro": false,
   "weight": 160,
   "type": "ritratto"
  },
  "pros": [
   "Luminoso f/1.8 a prezzo accessibile",
   "Molto compatto e leggero (160 g)",
   "Ottimo per ritratti e poca luce su EOS R"
  ],
  "cons": [
   "Autofocus STM rumoroso in video",
   "Non stabilizzato"
  ],
  "buyIf": "Hai una Canon EOS R e vuoi un ritratto luminoso spendendo poco.",
  "avoidIf": "Ti serve autofocus silenziosissimo per video o una focale zoom.",
  "asin": "B08MQBVFVW",
  "amazonTitle": "Canon Obiettivo RF 50mm F1.8 STM – Obiettivo Fotografico Compatto e Leggero per Fotocamere EOS Serie R, Ampia Apertura, Messa a Fuoco Fluida - Ideale per Ritratti e Fotografia Creativa",
  "imgs": [
   "https://m.media-amazon.com/images/I/61+GHKzo+4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71-mH9X0mJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81YeY8VeSYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71LfGNzFwCL._AC_SL1500_.jpg"
  ],
  "summary": "Il classico cinquantino luminoso declinato per l'attacco RF. Compatto e leggero, offre buono sfocato e resa in poca luce a un prezzo abbordabile, ideale per ritratti su full frame o come normale su APS-C. La messa a fuoco STM non e' la piu' silenziosa e manca la stabilizzazione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 1843,
  "bsr": 9382,
  "bsrCat": "Elettronica"
 },
 {
  "id": "nikon-z-24-200-vr",
  "v": "obiettivi-fotografici",
  "brand": "Nikon",
  "name": "Nikkor Z 24-200mm f/4-6.3 VR",
  "price": 783.79,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Un solo obiettivo da viaggio per full frame Nikon Z.",
  "attrs": {
   "mount": "Nikon Z",
   "focalMin": 24,
   "focalMax": 200,
   "apertureMax": 4,
   "stabilized": true,
   "macro": false,
   "weight": 570,
   "type": "zoom-tuttofare"
  },
  "pros": [
   "Escursione 24-200mm copre quasi tutto",
   "Stabilizzazione VR integrata",
   "Ideale da viaggio, un solo obiettivo in borsa"
  ],
  "cons": [
   "Apertura variabile che chiude a f/6.3",
   "Prezzo non basso per uno zoom tuttofare"
  ],
  "buyIf": "Vuoi un unico obiettivo versatile per viaggi sul sistema Nikon Z.",
  "avoidIf": "Cerchi massima luminosita' costante o lo sfocato da ottica fissa.",
  "asin": "B084PVXX73",
  "amazonTitle": "NIKON Objectif NIKKOR Z 24-200mm f/4-6.3 VR",
  "imgs": [
   "https://m.media-amazon.com/images/I/51WIvRLF5pL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/81m8pAg9xGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51oywZjHgaL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/517Ha5MLUIL._AC_SL1000_.jpg"
  ],
  "summary": "Uno zoom tuttofare 24-200mm per il sistema Nikon Z, pensato per chi vuole coprire dal grandangolo al tele senza cambiare ottica. La stabilizzazione VR aiuta a mano libera ed e' perfetto in viaggio. L'apertura variabile che arriva a f/6.3 limita in poca luce e per lo sfocato spinto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 355,
  "bsr": 383093,
  "bsrCat": "Elettronica"
 },
 {
  "id": "viltrox-56-f14-fuji-x",
  "v": "obiettivi-fotografici",
  "brand": "Viltrox",
  "name": "Viltrox 56mm f/1.4 (Fujifilm X)",
  "price": 269,
  "quality": 7.5,
  "checked": "2026-09-11",
  "tagline": "Il ritratto luminoso per Fujifilm X senza spendere troppo.",
  "attrs": {
   "mount": "Fujifilm X",
   "focalMin": 56,
   "focalMax": 56,
   "apertureMax": 1.4,
   "stabilized": false,
   "macro": false,
   "weight": 290,
   "type": "ritratto"
  },
  "pros": [
   "Apertura f/1.4 per sfocato marcato",
   "56mm (85mm equiv.) focale classica da ritratto",
   "Autofocus su attacco Fujifilm X a buon prezzo"
  ],
  "cons": [
   "Non stabilizzato",
   "Focale specifica, poco adatta ad altri usi"
  ],
  "buyIf": "Hai una Fujifilm X e vuoi un ritratto luminoso a prezzo onesto.",
  "avoidIf": "Cerchi un obiettivo versatile o la stabilizzazione integrata.",
  "asin": "B08JPDWW87",
  "amazonTitle": "VILTROX 56mm F1.4 XF Obiettivo per Fuji x,Autofocus Obiettivo APS-C Prime Ritratto Lente Compatibile con Fujifilm X-Mount Fotocamera X-T4 X-T3 X-T2 X-T30 X-T20 X-PRO2 X-H1 X-M1 X-E3 X-A",
  "imgs": [
   "https://m.media-amazon.com/images/I/71zf1ISEjZS._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71BfiH+pQaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71NWFoxELhL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Gq6WJ9odS._AC_SL1500_.jpg"
  ],
  "summary": "Un 56mm f/1.4 autofocus per attacco Fujifilm X, con la focale equivalente all'85mm tipica del ritratto. L'apertura f/1.4 da' forte separazione dal fondo a un prezzo molto competitivo. E' un'ottica mirata: non stabilizzata e poco utile fuori dal ritratto e dalla poca luce.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 70,
  "bsr": 65098,
  "bsrCat": "Elettronica"
 },
 {
  "id": "olympus-45-f18-mft",
  "v": "obiettivi-fotografici",
  "brand": "Olympus",
  "name": "Olympus M.Zuiko 45mm f/1.8 (Micro 4/3)",
  "price": 298.72,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il ritratto leggero e luminoso per Micro 4/3.",
  "attrs": {
   "mount": "Micro 4/3",
   "focalMin": 45,
   "focalMax": 45,
   "apertureMax": 1.8,
   "stabilized": false,
   "macro": false,
   "weight": 116,
   "type": "ritratto"
  },
  "pros": [
   "Luminoso f/1.8 per ritratti su Micro 4/3",
   "90mm equivalente, focale da ritratto",
   "Molto leggero (116 g) e compatto"
  ],
  "cons": [
   "Non stabilizzato nell'obiettivo",
   "Paraluce non incluso"
  ],
  "buyIf": "Hai una mirrorless Micro 4/3 e vuoi un ritratto luminoso e tascabile.",
  "avoidIf": "Ti serve una focale piu' corta o uno zoom versatile.",
  "asin": "B00CPLQ7GI",
  "amazonTitle": "Olympus M.Zuiko Digital 45mm F1.8 Obiettivo per Mirrorless MFT, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71igNwsS+hL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Ygx4vRZDL._AC_SL1201_.jpg",
   "https://m.media-amazon.com/images/I/61NxCMzuM9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81+ohwvcz1L._AC_SL1500_.jpg"
  ],
  "summary": "Un classico 45mm f/1.8 per il sistema Micro 4/3, equivalente a un 90mm, pensato per i ritratti. Leggerissimo e luminoso, da' buono sfocato e resa in poca luce su corpi Olympus e Panasonic. Non stabilizza di suo, ma su molti corpi la stabilizzazione e' nel sensore.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 1718,
  "bsr": 185902,
  "bsrCat": "Elettronica"
 },
 {
  "id": "vasagle-compact-80x50-elettrica",
  "v": "scrivanie-regolabili",
  "brand": "VASAGLE",
  "name": "VASAGLE LSD308 Scrivania Elettrica 80 x 50 cm",
  "price": 61.59,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "La piccola elettrica per spazi ridotti",
  "attrs": {
   "width": 80,
   "depth": 50,
   "motor": "single",
   "maxLoad": 70,
   "hMin": 72,
   "hMax": 120,
   "memory": true,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Piano compatto 80 x 50 cm adatto a postazioni strette e angoli",
   "Regolazione elettrica 72-120 cm con 4 altezze in memoria e tasto rapido",
   "Prezzo tra i piu' bassi della categoria elettrica (sotto i 65 euro)",
   "554 recensioni con media 4,5, base di giudizio ampia"
  ],
  "cons": [
   "Portata 70 kg, sufficiente per un monitor ma non per setup multi-schermo pesanti",
   "Piano da 50 cm di profondita' stretto per chi tiene monitor grande e tastiera davanti"
  ],
  "buyIf": "Hai poco spazio e vuoi una elettrica economica per monitor singolo o portatile.",
  "avoidIf": "Ti serve un piano ampio per due monitor o appoggi molti accessori pesanti.",
  "asin": "B0H3KNXHHS",
  "amazonTitle": "VASAGLE Scrivania Regolabile in Altezza Elettrica, Scrivania per Computer, Promemoria per Sedentarietà, Funzione Memoria con 4 Altezze, per Ufficio, 80 x 50 cm, Marrone Vintage LSD308KD03",
  "imgs": [
   "https://m.media-amazon.com/images/I/71cE7MLgNwL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81hoZtzrHiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71zMe252yJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XwE1xE46L._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica a motore singolo da 80 x 50 cm, pensata per postazioni compatte dove una 120 o 140 non entra. Regolazione 72-120 cm con 4 memorie e promemoria anti-sedentarieta'. Portata 70 kg: copre monitor singolo, portatile e accessori, meno indicata per carichi multipli. Il prezzo basso e le 554 recensioni a 4,5 la rendono una scelta sensata per cameretta, studio piccolo o seconda postazione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 554,
  "bsr": 2890,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "vasagle-lsd-120x80-usbc-elettrica",
  "v": "scrivanie-regolabili",
  "brand": "VASAGLE",
  "name": "VASAGLE Scrivania Elettrica 120 x 80 cm con Porta USB-C",
  "price": 119.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Piano profondo e USB-C sul tavolo",
  "attrs": {
   "width": 120,
   "depth": 80,
   "motor": "single",
   "maxLoad": 80,
   "hMin": 72,
   "hMax": 120,
   "memory": true,
   "topIncluded": true,
   "noise": 48,
   "antiCollision": null
  },
  "pros": [
   "Profondita' 80 cm, piu' generosa dello standard 60 cm per monitor grandi",
   "Porta USB-C con ricarica fino a 20W integrata nel piano",
   "3 memorie di altezza, blocco bambini e promemoria sedentarieta'",
   "Regolazione silenziosa sotto i 48 dB, portata 80 kg"
  ],
  "cons": [
   "Motore singolo: sollevamento un po' piu' lento rispetto ai doppio motore",
   "Nessuna funzione anti-collisione dichiarata"
  ],
  "buyIf": "Vuoi un piano profondo 80 cm a prezzo contenuto e la comodita' della USB-C integrata.",
  "avoidIf": "Cerchi sollevamento rapido con doppio motore o la sicurezza dell'anti-collisione.",
  "asin": "B0GR99D6LM",
  "amazonTitle": "VASAGLE Scrivania Regolabile in Altezza, 120 x 80 cm, Porta USB-C",
  "imgs": [
   "https://m.media-amazon.com/images/I/71AsAJ7quoL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81+J5jmO+YL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61KWdbowimL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714ueIGmRCL._AC_SL1500_.jpg"
  ],
  "summary": "Elettrica a motore singolo 120 x 80 cm con un vantaggio concreto: la profondita' da 80 cm, che lascia spazio a monitor grande e tastiera senza avere lo schermo addosso. Regolazione 72-120 cm con 3 memorie, blocco bambini e una porta USB-C da 20W integrata. Portata 80 kg e rumore sotto i 48 dB. Il motore singolo e l'assenza di anti-collisione dichiarata sono i limiti, compensati da 514 recensioni e un prezzo sotto i 120 euro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 514,
  "bsr": 1828,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "songmics-lsd134-140x60-elettrica",
  "v": "scrivanie-regolabili",
  "brand": "SONGMICS",
  "name": "SONGMICS LSD134 Scrivania Elettrica 140 x 60 cm USB-C",
  "price": 120.59,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "La larga da 140 con tante conferme",
  "attrs": {
   "width": 140,
   "depth": 60,
   "motor": "single",
   "maxLoad": 70,
   "hMin": 72,
   "hMax": 120,
   "memory": true,
   "topIncluded": true,
   "noise": 48,
   "antiCollision": null
  },
  "pros": [
   "Piano largo 140 cm, buono per monitor piu' portatile o doppio schermo affiancato",
   "4 altezze in memoria con regolazione silenziosa sotto i 48 dB",
   "Porta USB-C integrata nel piano",
   "4589 recensioni a 4,5: tra le piu' validate della categoria"
  ],
  "cons": [
   "Portata 70 kg, nella media ma non per carichi molto pesanti",
   "Motore singolo e nessuna anti-collisione dichiarata"
  ],
  "buyIf": "Vuoi un piano largo 140 cm collaudato da migliaia di recensioni a prezzo medio.",
  "avoidIf": "Ti serve profondita' oltre i 60 cm o la sicurezza dell'anti-collisione.",
  "asin": "B0F8N2515G",
  "amazonTitle": "SONGMICS Scrivania Regolabile in Altezza Elettrica, 140 x 60 cm, Scrivania Elettrica, Tavolo con Memoria per 4 Altezze, Porta USB-C, Rovere Dorato LSD134YA01",
  "imgs": [
   "https://m.media-amazon.com/images/I/71FgWxTGV1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61A4DW-WvKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81KL7z49FBL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71SQ2mMqOGL._AC_SL1500_.jpg"
  ],
  "summary": "Elettrica a motore singolo 140 x 60 cm con un piano ampio che regge bene monitor piu' portatile o due schermi affiancati. Regolazione 72-120 cm, 4 memorie, USB-C integrata e rumore sotto i 48 dB. La portata di 70 kg e' nella media e manca l'anti-collisione, ma con oltre 4500 recensioni a 4,5 e' una delle scelte piu' documentate a poco piu' di 120 euro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 4589,
  "bsr": 1240,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "vosatron-telaio-elettrico-cavi",
  "v": "scrivanie-regolabili",
  "brand": "VOSATRON",
  "name": "VOSATRON Telaio Elettrico Regolabile con Vassoio Cavi",
  "price": 100.27,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Telaio elettrico da abbinare al tuo piano",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "single",
   "maxLoad": 80,
   "hMin": 71,
   "hMax": 118,
   "memory": true,
   "topIncluded": false,
   "noise": 45,
   "antiCollision": true
  },
  "pros": [
   "Telaio elettrico economico con 2 memorie e anti-collisione, sotto i 105 euro",
   "Gestione cavi inclusa (vassoio piu' 2 ganci) per una postazione ordinata",
   "Motore testato 50.000 cicli, rumore sotto i 45 dB",
   "Garanzia dichiarata 6 anni struttura e 4 anni motore"
  ],
  "cons": [
   "Solo telaio: il piano va acquistato a parte (accetta top 100-180 x 60-80 cm)",
   "72 recensioni, base di giudizio ancora limitata rispetto ai modelli VASAGLE/SONGMICS"
  ],
  "buyIf": "Hai gia' un piano o vuoi sceglierlo tu e cerchi un telaio elettrico economico con anti-collisione.",
  "avoidIf": "Vuoi una scrivania pronta all'uso col piano incluso senza doverlo comprare a parte.",
  "asin": "B0F5CTTY1R",
  "amazonTitle": "Struttura della scrivania regolabile in altezza con vassoio per cavi, struttura del tavolo elettrica regolabile in altezza con motore potente, controller di memoria e funzione di protezione",
  "imgs": [
   "https://m.media-amazon.com/images/I/51RmY3YPXXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71vH4UerjzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71iDvm5Ha+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71E7TFpjBML._AC_SL1500_.jpg"
  ],
  "summary": "Solo struttura elettrica, senza piano, per chi ha gia' un top o vuole sceglierlo su misura: accetta piani larghi da 100 a 180 cm e profondi 60-80 cm. Motore singolo con anti-collisione, 2 memorie, gestione cavi inclusa, portata 80 kg e rumore sotto i 45 dB. Le 72 recensioni a 4,4 sono meno numerose dei best seller ma la garanzia lunga e il prezzo sotto i 105 euro lo rendono una base interessante per un fai-da-te.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 72,
  "bsr": 200522,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "jummico-telaio-elettrico-ruote",
  "v": "scrivanie-regolabili",
  "brand": "JUMMICO",
  "name": "JUMMICO Telaio Scrivania Elettrico Regolabile con Ruote",
  "price": 74.99,
  "quality": 6,
  "checked": "2026-09-11",
  "tagline": "Telaio elettrico mobile a basso costo",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "single",
   "maxLoad": 70,
   "hMin": 72,
   "hMax": 118,
   "memory": true,
   "topIncluded": false,
   "noise": 50,
   "antiCollision": null
  },
  "pros": [
   "Telaio elettrico economico (sotto i 75 euro) con 4 ruote incluse",
   "Fino a 3 altezze programmabili in memoria",
   "Accetta piani da 120 a 180 cm di larghezza, buona flessibilita'",
   "Velocita' di sollevamento 20 mm/s, rumore sotto i 50 dB"
  ],
  "cons": [
   "Solo 25 recensioni: base di giudizio ridotta, valutare con prudenza",
   "Solo telaio senza piano; portata 70 kg e testato 10.000 cicli (meno di altri modelli)"
  ],
  "buyIf": "Vuoi un telaio elettrico spostabile su ruote al prezzo piu' basso e hai gia' un piano.",
  "avoidIf": "Vuoi tante recensioni a conferma o una scrivania completa col piano incluso.",
  "asin": "B0DXFGWDS5",
  "amazonTitle": "JUMMICO Scrivania elettrica regolabile in altezza Potenti Motori, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/81s2h1+RJGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81dfcLJPctL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61P0SIeQIvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71B-sZHwt9L._AC_SL1500_.jpg"
  ],
  "summary": "Struttura elettrica a motore singolo con 4 ruote, senza piano, per chi vuole una postazione spostabile a basso costo. Accetta top larghi 120-180 cm, regolazione 72-118 cm, fino a 3 memorie e portata 70 kg. Le ruote e il prezzo sotto i 75 euro sono il punto di forza; i limiti sono il motore singolo testato su 10.000 cicli e appena 25 recensioni, quindi va scelto sapendo che i dati di affidabilita' sono ancora pochi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 25,
  "bsr": 38660,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "maidesite-t2-pro-plus-doppio-motore",
  "v": "scrivanie-regolabili",
  "brand": "MAIDeSITe",
  "name": "MAIDeSITe T2 Pro Plus Telaio Doppio Motore",
  "price": 349.99,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Doppio motore per carichi pesanti",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "dual",
   "maxLoad": 160,
   "hMin": 62,
   "hMax": 125,
   "memory": true,
   "topIncluded": false,
   "noise": 45,
   "antiCollision": true
  },
  "pros": [
   "Doppio motore con portata dichiarata fino a 160 kg, adatto a setup pesanti",
   "Telaio a 3 segmenti con escursione ampia 62-125 cm",
   "4 memorie, anti-collisione e funzionamento sotto i 45 dB",
   "1808 recensioni a 4,7: affidabilita' molto ben documentata"
  ],
  "cons": [
   "Prezzo elevato intorno ai 350 euro, molto sopra i modelli a motore singolo",
   "Solo telaio: il piano non e' incluso"
  ],
  "buyIf": "Hai un setup pesante o un piano grande e vuoi stabilita' e carico elevato col doppio motore.",
  "avoidIf": "Hai un budget contenuto o ti basta un monitor singolo: il motore singolo costa molto meno.",
  "asin": "B087JLXWJT",
  "amazonTitle": "MAIDeSITe Scrivania Regolabile in Altezza con 2 Potenti Motori, 3 Livelli Telaio della Scrivania Elettrica Regolabile in Altezza e 4 Memorie e Funzione di Protezione Anti-collisione -T2 Pro Plus",
  "imgs": [
   "https://m.media-amazon.com/images/I/710sDMhpYfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/712N+0Z8PbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71RG2w4oAqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71werZFZNDL._AC_SL1500_.jpg"
  ],
  "summary": "Telaio top di gamma a doppio motore per chi vuole stabilita' e carico elevato: portata dichiarata fino a 160 kg, escursione 62-125 cm su struttura a 3 segmenti, 4 memorie, anti-collisione e rumore sotto i 45 dB. Il piano non e' incluso e il prezzo intorno ai 350 euro e' ben sopra le elettriche a motore singolo, ma 1808 recensioni a 4,7 confermano un'affidabilita' solida per setup con piu' monitor o piani grandi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 1808,
  "bsr": 146443,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "milwaukee-m18-bpd",
  "v": "utensili-elettrici",
  "brand": "Milwaukee",
  "name": "Milwaukee M18 BPD-0 trapano a percussione compatto",
  "price": 186,
  "quality": 8,
  "checked": "2026-09-11",
  "tagline": "Il biglietto d'ingresso nell'ecosistema Milwaukee M18",
  "attrs": {
   "torque": 60,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": false,
   "batteryIncl": false,
   "weight": null,
   "eco": "Milwaukee M18",
   "impact": false
  },
  "pros": [
   "Entra nell'ecosistema M18 di Milwaukee, batterie condivise con decine di altri utensili",
   "Motore da 60 Nm con percussione: fora legno, metallo e muratura leggera",
   "Struttura robusta e oltre 500 recensioni con media 4,7"
  ],
  "cons": [
   "Venduto a solo corpo: batteria e caricabatterie vanno acquistati a parte",
   "Motore con spazzole, meno efficiente dei brushless di pari fascia"
  ],
  "buyIf": "Hai gia' batterie Milwaukee M18 o vuoi costruire un parco utensili attorno a quel sistema",
  "avoidIf": "Parti da zero e cerchi una soluzione pronta all'uso con batterie incluse a basso costo",
  "asin": "B00VWQA3TY",
  "amazonTitle": "Milwaukee trapano a percussione compatto M18 - M18BPD-0, rosa",
  "imgs": [
   "https://m.media-amazon.com/images/I/81YvIXHjvgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41Tyvs3bl-L._AC_.jpg",
   "https://m.media-amazon.com/images/I/41pCH08KKIL._AC_.jpg",
   "https://m.media-amazon.com/images/I/41qCMh2eUQL._AC_.jpg"
  ],
  "summary": "Trapano a percussione compatto pensato per chi e' gia' dentro il sistema M18 o vuole entrarci. Motore a spazzole da 60 Nm con modalita' percussione per muratura leggera. Il prezzo si riferisce al solo corpo, quindi il conto reale sale quando aggiungi batteria e caricabatterie: ha senso se prevedi di usare altri utensili M18.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 501,
  "bsr": 167401,
  "bsrCat": "Fai da te"
 },
 {
  "id": "bosch-gsb-12v-15-kit",
  "v": "utensili-elettrici",
  "brand": "Bosch Professional",
  "name": "Bosch Professional GSB 12V-15 kit con percussione",
  "price": 161.51,
  "quality": 9,
  "checked": "2026-09-11",
  "tagline": "Il 12V con percussione da comprare e usare subito",
  "attrs": {
   "torque": 30,
   "volts": 12,
   "percussion": true,
   "sds": false,
   "brushless": false,
   "batteryIncl": true,
   "weight": null,
   "eco": "Bosch Professional 12V System",
   "impact": false
  },
  "pros": [
   "Kit completo: due batterie 2.0 Ah, caricabatterie, punte e borsa inclusi",
   "Compatto e leggero, arriva dove un 18V non passa, con percussione per muratura",
   "Oltre 10.000 recensioni a 4,6 e ottimo posizionamento di vendita (BSR 14k)"
  ],
  "cons": [
   "Coppia da 30 Nm: non e' adatto a fori grandi o viti molto lunghe nel duro",
   "Motore a spazzole, niente elettronica brushless"
  ],
  "buyIf": "Vuoi un kit compatto, completo e affidabile per casa e piccoli lavori, senza pensieri",
  "avoidIf": "Ti servono coppia elevata e autonomia per cantiere o forature impegnative in continuo",
  "asin": "B00YYBBUBY",
  "amazonTitle": "Bosch Professional Sistema 12V Trapano Avvitatore Con Percussione GSB 12V-15, Incl. Batteria 2x2.0 Ah + Caricabatterie, 2x Set Di Trapani, 1x Set Di Punte, In Borsa, Amazon Exclusive Set",
  "imgs": [
   "https://m.media-amazon.com/images/I/81a5+zxxQEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/611CKrngsFL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/81lu8gBQAzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Lg9js-inL._AC_SL1500_.jpg"
  ],
  "summary": "Soluzione pronta all'uso per chi parte da zero: due batterie, caricabatterie e accessori nella borsa. La linea 12V System di Bosch e' compatta e maneggevole, con modalita' percussione per muratura leggera. I 30 Nm bastano per montaggi, forature in legno e lavori domestici, ma non e' l'utensile per carichi pesanti continuativi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 10071,
  "bsr": 14086,
  "bsrCat": "Fai da te"
 },
 {
  "id": "dewalt-dcd706-12v-xr-kit",
  "v": "utensili-elettrici",
  "brand": "DeWalt",
  "name": "DeWalt DCD706D2 12V XR trapano a percussione (kit)",
  "price": 166.06,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Compatto DeWalt 12V per chi gia' usa XR",
  "attrs": {
   "torque": 57,
   "volts": 12,
   "percussion": true,
   "sds": false,
   "brushless": false,
   "batteryIncl": true,
   "weight": null,
   "eco": "DeWalt XR 12V",
   "impact": false
  },
  "pros": [
   "Kit con due batterie 2.0 Ah e caricabatterie, ecosistema DeWalt XR 12V",
   "Compatto a due velocita' con percussione per muratura leggera",
   "Buona coppia per la taglia (circa 57 Nm) in un corpo contenuto"
  ],
  "cons": [
   "Motore a spazzole, non brushless",
   "Recensioni ancora poche (77) rispetto ai concorrenti piu' diffusi"
  ],
  "buyIf": "Sei gia' utente DeWalt XR o vuoi un 12V compatto con percussione in kit completo",
  "avoidIf": "Cerchi il massimo numero di recensioni e riscontri o una coppia da 18V per lavori gravosi",
  "asin": "B07YZPKGL6",
  "amazonTitle": "DEWALT Trapano Avvitatore Compatto 2 Velocita' con percussione, DCD706D2-QW",
  "imgs": [
   "https://m.media-amazon.com/images/I/71Nkxrr+AfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81-Omd40q1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91yTbtvQVQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71zazbwO2AL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano a percussione compatto della linea XR 12V, venduto in kit con due batterie e caricabatterie. Due velocita' e circa 57 Nm lo rendono versatile per montaggi e forature leggere, percussione inclusa per muratura. Ha senso soprattutto se sei gia' nell'ecosistema DeWalt o lo vuoi avviare; le recensioni sono ancora limitate.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 77,
  "bsr": 54008,
  "bsrCat": "Fai da te"
 },
 {
  "id": "trapano-brushless-119nm-kit",
  "v": "utensili-elettrici",
  "brand": "Generico",
  "name": "Trapano avvitatore a percussione brushless 119 Nm (kit 2x4.0Ah)",
  "price": 86.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Tanta coppia e batterie 4.0 Ah a prezzo basso",
  "attrs": {
   "torque": 119,
   "volts": null,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": null,
   "eco": null,
   "impact": false
  },
  "pros": [
   "Motore brushless dichiarato con coppia alta (119 Nm) a un prezzo contenuto",
   "Kit con due batterie 4.0 Ah incluse: autonomia generosa senza spese aggiuntive",
   "Mandrino metallico 13 mm, due velocita' e modalita' percussione"
  ],
  "cons": [
   "Marca generica senza ecosistema: ricambi e batterie legati a quel venditore",
   "Voltaggio non dichiarato in modo chiaro, assistenza post-vendita incerta"
  ],
  "buyIf": "Vuoi spendere poco avendo batterie capienti e percussione per lavori occasionali",
  "avoidIf": "Dai valore a un marchio noto, assistenza e compatibilita' con altri utensili",
  "asin": "B0H3PTJPDC",
  "amazonTitle": "119Nm Trapano Avvitatore a Batteria Brushless, Trapano Percussione, 2x4,0Ah",
  "imgs": [
   "https://m.media-amazon.com/images/I/71IybOQSjmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Uw8tUyHnL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/817pe1HnmRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71e0ra-9IGL._AC_SL1500_.jpg"
  ],
  "summary": "Kit di marca generica che punta sul rapporto prezzo-dotazione: motore brushless, 119 Nm dichiarati, due batterie 4.0 Ah, percussione e mandrino metallico. Per lavori occasionali e hobbistici offre molto per la spesa, ma manca un ecosistema riconosciuto e il voltaggio non e' dichiarato chiaramente: valutalo come acquisto usa-e-getta piu' che investimento a lungo termine.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 432,
  "bsr": 1362,
  "bsrCat": "Fai da te"
 },
 {
  "id": "dong-cheng-20v-50nm-kit",
  "v": "utensili-elettrici",
  "brand": "Dong Cheng",
  "name": "Dong Cheng 20V 50 Nm trapano a percussione brushless (kit)",
  "price": 79.99,
  "quality": 7,
  "checked": "2026-09-11",
  "tagline": "Brushless con batterie incluse al prezzo di un entry-level",
  "attrs": {
   "torque": 50,
   "volts": 20,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": null,
   "eco": "Dong Cheng 20V",
   "impact": false
  },
  "pros": [
   "Motore brushless a un prezzo molto basso, raro in questa fascia",
   "Kit con due batterie 2.0 Ah e caricabatterie inclusi",
   "Valutazione alta (4,7) su quasi 500 recensioni, percussione presente"
  ],
  "cons": [
   "Marchio poco diffuso in Italia: rete di assistenza e ricambi limitata",
   "50 Nm adeguati solo a lavori leggeri e medi, non gravosi"
  ],
  "buyIf": "Vuoi un brushless completo spendendo il minimo per lavori domestici leggeri e medi",
  "avoidIf": "Ti serve coppia elevata per lavori gravosi o un marchio con assistenza capillare",
  "asin": "B0CWQVZ9BK",
  "amazonTitle": "Dong Cheng Trapano Percussione a Batteria 20V 50 Nm, 2x2,0Ah, brushless",
  "imgs": [
   "https://m.media-amazon.com/images/I/71-3YWO3xKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71DtJ85SuXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71aGovIIx-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81zjzwF-62L._AC_SL1500_.jpg"
  ],
  "summary": "Kit economico che porta un motore brushless sotto gli 80 euro, con due batterie 2.0 Ah, caricabatterie e percussione. I 50 Nm bastano per montaggi e forature leggere in legno, metallo e muratura tenera. Il punto debole e' il marchio poco presente da noi: ottimo per iniziare spendendo poco, meno rassicurante su assistenza e continuita' dei ricambi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 473,
  "bsr": 6450,
  "bsrCat": "Fai da te"
 },
 {
  "id": "ardes-eldorada-maxi-ar1k33",
  "v": "friggitrici-aria",
  "brand": "Ardes",
  "name": "Ardes Eldorada Maxi AR1K33",
  "price": 39.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "L'ingresso economico da 5 litri, con un numero di recensioni che dà un minimo di garanzia.",
  "attrs": {
   "capacity": 5,
   "baskets": 1,
   "power": 1450,
   "maxTemp": 200,
   "programs": 7,
   "window": null,
   "dishwasher": true,
   "weight": 3.7
  },
  "pros": [
   "Prezzo sotto i 40 euro con 5 litri dichiarati",
   "4,5 stelle su oltre 2.200 recensioni: campione ampio, non due opinioni",
   "Cestello dichiarato lavabile in lavastoviglie",
   "3,7 kg dichiarati: si sposta e si ripone senza fatica"
  ],
  "cons": [
   "La scheda Amazon si contraddice sulla potenza: 1450 W in una riga, 1000 W in un'altra",
   "Nessun oblò dichiarato: per controllare la cottura devi estrarre il cestello",
   "Comandi e programmi essenziali, niente sincronizzazione o funzioni avanzate"
  ],
  "buyIf": "Vuoi una prima friggitrice ad aria per due o tre persone spendendo il minimo.",
  "avoidIf": "Cucini per quattro o più persone o vuoi cuocere due pietanze diverse insieme.",
  "asin": "B08V95YX3D",
  "amazonTitle": "Ardes Eldorada Maxi AR1K33 - Friggitrice ad aria 5 litri - Airfryer con tecnologia Rapid Air - Air fryer 7 in 1, temperatura e timer regolabili, display digitale touch",
  "imgs": [
   "https://m.media-amazon.com/images/I/61QRZOzKX-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71MlFaBBZTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71FX4vE2G8L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71bUEzQPmgL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria a cestello singolo da 5 litri con display touch, temperatura regolabile 80-200 °C e 7 modalità dichiarate. Serve a chi vuole provare la categoria spendendo poco e cucina per due o tre persone. Quello che manca è la trasparenza: la potenza dichiarata in pagina è incoerente e non c'è oblò per guardare dentro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 2216,
  "bsr": 858,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "russell-hobbs-27421-56-panoramica",
  "v": "friggitrici-aria",
  "brand": "Russell Hobbs",
  "name": "Russell Hobbs Panoramica 27421-56",
  "price": 47.85,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Il 5 litri economico che ti fa vedere dentro mentre cuoce.",
  "attrs": {
   "capacity": 5,
   "baskets": 1,
   "power": 1500,
   "maxTemp": 200,
   "programs": 10,
   "window": true,
   "dishwasher": true,
   "weight": 5.35
  },
  "pros": [
   "Oblò in vetro con luce interna: controlli la cottura senza aprire",
   "10 programmi preimpostati dichiarati e temperatura 80-200 °C",
   "Cestello dichiarato lavabile in lavastoviglie",
   "Sotto i 50 euro per un marchio storico del piccolo elettrodomestico"
  ],
  "cons": [
   "4,3 stelle: media buona ma non eccellente per la fascia",
   "Forma rotonda con oblò: il cestello utile è meno sfruttabile di uno rettangolare a pari litri",
   "5,35 kg dichiarati, più pesante di altri 5 litri della stessa fascia"
  ],
  "buyIf": "Vuoi spendere meno di 50 euro e ti interessa davvero vedere il cibo durante la cottura.",
  "avoidIf": "Cucini porzioni grandi o piatte, tipo teglie di verdure per quattro.",
  "asin": "B0D93WK4JX",
  "amazonTitle": "Russell Hobbs Friggitrice ad aria Panoramica, 5 L,no olio, 10 programmi di cottura, lavabile in lavastoviglie, friggere, grigliare, cuocere al forno, 200°C, Crema, 27421-56",
  "imgs": [
   "https://m.media-amazon.com/images/I/61TDtRhGkQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/617P2t56OdL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51TF1HozQ-L._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/619mNMkEGFL._AC_SL1000_.jpg"
  ],
  "summary": "Friggitrice ad aria da 5 litri a cestello singolo con oblò illuminato, 10 programmi e cestello lavabile in lavastoviglie. È pensata per chi cucina per due o tre persone e non sopporta di aprire il cassetto ogni due minuti per capire a che punto è la cottura. Il limite è la forma rotonda, che a parità di litri rende meno di un cestello rettangolare.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 639,
  "bsr": 17644,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "princess-slimfry-182256",
  "v": "friggitrici-aria",
  "brand": "Princess",
  "name": "Princess SlimFry 182256",
  "price": 59.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Otto litri veri in una sagoma stretta, per cucine dove lo spazio in larghezza non c'è.",
  "attrs": {
   "capacity": 8,
   "baskets": 1,
   "power": 2000,
   "maxTemp": 200,
   "programs": 8,
   "window": null,
   "dishwasher": true,
   "weight": 3.9
  },
  "pros": [
   "8 litri dichiarati a 60 euro, capacità da famiglia a prezzo da entry level",
   "Formato stretto (26,7 cm di larghezza dichiarati) per piani di lavoro corti",
   "Cestello e griglia dichiarati lavabili in lavastoviglie",
   "Promemoria di scuotimento e 8 programmi preimpostati"
  ],
  "cons": [
   "Stretta ma profonda: 46,5 cm dichiarati, sotto un pensile va misurato prima",
   "Nessun oblò dichiarato",
   "Cestello unico: gli 8 litri non si dividono in due cotture diverse"
  ],
  "buyIf": "Ti serve capacità da famiglia ma hai poco spazio in larghezza sul piano di lavoro.",
  "avoidIf": "Il piano è poco profondo o vuoi cuocere due pietanze separate contemporaneamente.",
  "asin": "B0DHVWLCMW",
  "amazonTitle": "Princess Friggitrice senza olio SlimFry - Design salvaspazio - Senza BPA - 8 L - 8 programmi - Temperatura e timer regolabili - 2 000 W - 182256",
  "imgs": [
   "https://m.media-amazon.com/images/I/619oItms8LL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/617H2pj9FHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/619M8YsS6bL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71cnYPUnbIL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria a cestello singolo da 8 litri con corpo stretto e profondo, 8 programmi e promemoria di scuotimento. Va bene se cucini per quattro persone ma hai poco fronte libero sul piano di lavoro. Il rovescio è la profondità di quasi mezzo metro dichiarata e l'assenza di oblò: la cottura si controlla solo estraendo il cestello.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 560,
  "bsr": 306,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ariete-4618-airy-fryer-xxl",
  "v": "friggitrici-aria",
  "brand": "Ariete",
  "name": "Ariete 4618 Airy Fryer XXL",
  "price": 65.6,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Il grosso cestello singolo da 1800 W, con il riscontro d'uso più ampio della fascia media.",
  "attrs": {
   "capacity": 7,
   "baskets": 1,
   "power": 1800,
   "maxTemp": 200,
   "programs": null,
   "window": null,
   "dishwasher": false,
   "weight": 4
  },
  "pros": [
   "4,6 stelle su oltre 3.300 recensioni: uno dei riscontri più solidi della fascia",
   "1800 W dichiarati con 7 litri: scalda in fretta e regge quantità grandi",
   "Interno e corpo in acciaio inox dichiarati",
   "2,5 kg di patatine dichiarati in una sola infornata"
  ],
  "cons": [
   "La scheda dichiara esplicitamente che non è lavabile in lavastoviglie: si lava a mano",
   "Capacità dichiarata ambigua: 7 litri nel titolo, cestello da 5,5 litri nei bullet",
   "Numero di programmi non dichiarato in modo chiaro nella pagina",
   "Nessun oblò"
  ],
  "buyIf": "Cucini spesso quantità grandi in una sola infornata e vuoi spendere meno di 70 euro.",
  "avoidIf": "Non vuoi lavare il cestello a mano o ti serve cuocere due cose a temperature diverse.",
  "asin": "B085WMRLJJ",
  "amazonTitle": "Ariete 4618 Airy Fryer XXL- Friggitrice ad Aria - Frigge 2,5 kg di Patatine Fritte - 7 Litri - Cottura Senza Olio e Grassi - 1800 Watt - Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71uYRTcZ9-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71a7jrsOVJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71saw+MUrTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/6106UeiOpgL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria a cestello unico da 7 litri dichiarati, 1800 W e struttura in acciaio inox, pensata per chi cucina quantità grandi in una sola volta. È l'opzione da prendere se ti interessa la capienza e non ti spaventa lavare a mano. I punti deboli sono proprio quelli: niente lavastoviglie dichiarata, niente oblò e una capacità dichiarata in modo incoerente fra titolo e descrizione.",
  "ean": "8003705118416",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.6,
  "reviews": 3352,
  "bsr": 822,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "cecotec-cecofry-advance-9000",
  "v": "friggitrici-aria",
  "brand": "Cecotec",
  "name": "Cecotec Cecofry Advance 9000",
  "price": 66.9,
  "quality": 6,
  "checked": "2026-09-12",
  "tagline": "Il doppio cestello più economico che si trova, con i compromessi che il prezzo comporta.",
  "attrs": {
   "capacity": 9,
   "baskets": 2,
   "power": 2800,
   "maxTemp": 200,
   "programs": null,
   "window": null,
   "dishwasher": false,
   "weight": 7.29
  },
  "pros": [
   "Doppio cestello da 4,5 litri sotto i 70 euro: il prezzo più basso della categoria a due zone",
   "Sincronizzazione della fine cottura fra le due zone",
   "2800 W dichiarati e finitura in acciaio inox",
   "Ricambi dichiarati disponibili 10 anni"
  ],
  "cons": [
   "4,2 stelle su 324 recensioni: il riscontro più debole fra i prodotti di questa selezione",
   "Dichiarata non lavabile in lavastoviglie",
   "Numero di programmi non dichiarato in pagina e nessun oblò su questa versione",
   "7,29 kg: ingombrante da spostare"
  ],
  "buyIf": "Vuoi provare il doppio cestello spendendo il meno possibile e non ti pesa lavare a mano.",
  "avoidIf": "Cerchi rifiniture curate e un riscontro d'uso ampio: qui le recensioni sono poche e la media modesta.",
  "asin": "B0BPZTWV6W",
  "amazonTitle": "Cecotec Cecofry Advance 9000 Air Fryer One Size",
  "imgs": [
   "https://m.media-amazon.com/images/I/71fywOQcH7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81e-765BItL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61I4u68A+3L._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61GT4N5mrjL._AC_SL1000_.jpg"
  ],
  "summary": "Friggitrice a due cestelli da 4,5 litri ciascuno con sincronizzazione di fine cottura, 2800 W e corpo in acciaio inox. Serve a chi vuole cuocere contorno e secondo insieme senza spendere più di 70 euro. I compromessi sono reali: media recensioni la più bassa del gruppo, lavaggio a mano dichiarato e scheda tecnica avara di dettagli sui programmi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 324,
  "bsr": 3922,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "moulinex-easy-fry-max-ez2458",
  "v": "friggitrici-aria",
  "brand": "Moulinex",
  "name": "Moulinex Easy Fry Max EZ2458",
  "price": 69.99,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Il 5 litri con il riscontro d'uso migliore della fascia sotto i 70 euro.",
  "attrs": {
   "capacity": 5,
   "baskets": 1,
   "power": 1500,
   "maxTemp": 200,
   "programs": 10,
   "window": null,
   "dishwasher": true,
   "weight": 3.65
  },
  "pros": [
   "4,7 stelle su oltre 4.500 recensioni: il miglior riscontro sotto i 70 euro",
   "10 programmi preimpostati dichiarati e touchscreen",
   "Cestello e componenti rimovibili dichiarati lavabili in lavastoviglie",
   "3,65 kg dichiarati: la più leggera della selezione"
  ],
  "cons": [
   "Nessun oblò: la cottura si controlla solo estraendo il cassetto",
   "Temperatura massima 200 °C dichiarata, contro i 230-240 °C dei modelli di fascia alta",
   "Rivestimento interno in PTFE dichiarato, non ceramica"
  ],
  "buyIf": "Cucini per due-quattro persone e vuoi il modello più collaudato della fascia media.",
  "avoidIf": "Ti serve cuocere due pietanze separate o vuoi arrivare oltre i 200 °C.",
  "asin": "B0CG6C26QW",
  "amazonTitle": "Moulinex Easy Fry Max, Friggitrice ad Aria 5 L, EZ2458",
  "imgs": [
   "https://m.media-amazon.com/images/I/61hddsGcPOL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61v2wrE9CML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715QNlObGyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71gdyeigGeL._AC_SL1200_.jpg"
  ],
  "summary": "Friggitrice ad aria a cestello singolo da 5 litri, 1500 W, 10 programmi e cestello lavabile in lavastoviglie. È la scelta da fare se vuoi una macchina per due-quattro persone che funzioni e basta, senza funzioni doppie. Quello che non ha: nessun oblò, temperatura massima ferma a 200 °C e rivestimento PTFE invece che ceramico.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 4589,
  "bsr": 875,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "cosori-dual-8-5l-caf-r903",
  "v": "friggitrici-aria",
  "brand": "Cosori",
  "name": "Cosori Dual Zone 8,5 L CAF-R903",
  "price": 126.34,
  "quality": 9,
  "checked": "2026-09-12",
  "tagline": "Doppio cestello con oblò su entrambe le zone e 35-230 °C, senza salire sopra i 130 euro.",
  "attrs": {
   "capacity": 8.5,
   "baskets": 2,
   "power": 1750,
   "maxTemp": 230,
   "programs": 8,
   "window": true,
   "dishwasher": true,
   "weight": 9
  },
  "pros": [
   "Due zone da 4,25 litri con finestra e luce interna su entrambe",
   "Intervallo 35-230 °C dichiarato, il più ampio della selezione insieme ai Ninja",
   "Funzioni Sync Cook e Sync Finish per far finire insieme due cotture diverse",
   "Cestelli dichiarati lavabili in lavastoviglie",
   "4,7 stelle su oltre 2.400 recensioni"
  ],
  "cons": [
   "44 cm di larghezza dichiarati: occupa parecchio fronte sul piano di lavoro",
   "9 kg dichiarati, non è un apparecchio che sposti tutti i giorni",
   "Le funzioni complete passano dall'app VeSync, con account da creare"
  ],
  "buyIf": "Cucini due pietanze diverse in contemporanea e vuoi controllarle senza aprire i cassetti.",
  "avoidIf": "Hai un piano di lavoro stretto: 44 cm di larghezza sono tanti.",
  "asin": "B0DMWC7QHW",
  "amazonTitle": "Cosori Friggitrice ad Aria Doppio Cestello 8,5 Litri, Con Finestra, Oro",
  "imgs": [
   "https://m.media-amazon.com/images/I/61m0LtJ-nNL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81tLMqMiBeL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91xmazKtrgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81pnN2CqERL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice a due zone indipendenti da 4,25 litri ciascuna, con finestra illuminata su entrambi i cassetti, 8 programmi e sincronizzazione della fine cottura. È l'acquisto sensato per una famiglia di quattro che vuole contorno e secondo pronti insieme e vuole vedere cosa succede dentro. Il prezzo da pagare è l'ingombro: 44 cm di fronte e 9 kg dichiarati.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 2416,
  "bsr": 10332,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ninja-max-pro-af180eucp",
  "v": "friggitrici-aria",
  "brand": "Ninja",
  "name": "Ninja MAX PRO AF180EUCP",
  "price": 148.53,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Cestello unico da 6,2 litri che arriva a 240 °C, quando la croccantezza conta più della doppia zona.",
  "attrs": {
   "capacity": 6.2,
   "baskets": 1,
   "power": 2000,
   "maxTemp": 240,
   "programs": 6,
   "window": null,
   "dishwasher": true,
   "weight": 5.8
  },
  "pros": [
   "240 °C dichiarati con funzione Max Crisp: la doratura più aggressiva del gruppo",
   "6,2 litri in un solo vano, utili per un pollo intero o teglie piene",
   "Parti antiaderenti dichiarate lavabili in lavastoviglie",
   "Riscontro enorme: 4,7 stelle su oltre 15.000 recensioni"
  ],
  "cons": [
   "Cestello unico: a questo prezzo molti concorrenti danno due zone",
   "La pagina si contraddice sul peso: 5,8 kg nella scheda, 6,4 kg nei bullet",
   "Nessun oblò, il controllo è solo estraendo il cestello",
   "Prezzo alto per un singolo cassetto"
  ],
  "buyIf": "Cucini pezzi grandi interi e vuoi la temperatura più alta per la doratura.",
  "avoidIf": "Ti interessa cuocere due pietanze separate: a questo prezzo trovi doppi cestelli.",
  "asin": "B0CZXXVKS7",
  "amazonTitle": "Ninja MAX PRO, Friggitrice ad Aria, Formato Famiglia, Nero/Rame",
  "imgs": [
   "https://m.media-amazon.com/images/I/71AOR9W3vjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61oNQ+1OkKL._AC_SL1400_.jpg",
   "https://m.media-amazon.com/images/I/71PBGNYrdzL._AC_SL1400_.jpg",
   "https://m.media-amazon.com/images/I/71mueZ+v6nL._AC_SL1400_.jpg"
  ],
  "summary": "Friggitrice ad aria a vano singolo da 6,2 litri, 2000 W e temperatura massima dichiarata di 240 °C con modalità Max Crisp. Ha senso per chi cucina pezzi grandi interi, dove un doppio cestello diviso in due vani sarebbe un limite. Va detto che a questa cifra la concorrenza offre due zone indipendenti, e qui non c'è né seconda zona né oblò.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 15473,
  "bsr": 5360,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "philips-airfryer-4000-na460",
  "v": "friggitrici-aria",
  "brand": "Philips",
  "name": "Philips Airfryer 4000 NA460/00",
  "price": 189.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Dieci litri su due piani in 23 cm di larghezza, per chi vuole la doppia zona senza cedere il piano di lavoro.",
  "attrs": {
   "capacity": 10,
   "baskets": 2,
   "power": 2750,
   "maxTemp": 180,
   "programs": 6,
   "window": true,
   "dishwasher": true,
   "weight": 8.98
  },
  "pros": [
   "Due cestelli da 5 litri impilati: 10 litri occupando solo 23,3 cm di larghezza dichiarati",
   "Rivestimento in ceramica dichiarato senza PFAS",
   "Funzione Sync per far finire insieme le due cotture, con finestrelle su entrambi i vani",
   "Cestelli dichiarati lavabili in lavastoviglie"
  ],
  "cons": [
   "Temperatura massima dichiarata 180 °C: la più bassa della selezione, la doratura spinta non è il suo mestiere",
   "423 recensioni: modello recente, storico d'uso ancora corto",
   "46,9 cm di profondità dichiarati: sotto un pensile va misurata",
   "Il cestello superiore, essendo impilato, richiede attenzione quando si estrae"
  ],
  "buyIf": "Vuoi due zone di cottura ma hai un fronte di piano di lavoro molto stretto.",
  "avoidIf": "Cerchi la doratura aggressiva: 180 °C dichiarati sono pochi rispetto ai 230-240 °C della concorrenza.",
  "asin": "B0FNYCH1VL",
  "amazonTitle": "Philips Airfryer 4000 - Friggitrice ad aria Verticale 10L (5+5L)",
  "imgs": [
   "https://m.media-amazon.com/images/I/519gEwF2AZL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51o5QUsuDZL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/6135ZbjtCvL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51gkE-js0XL._AC_SL1010_.jpg"
  ],
  "summary": "Friggitrice a doppio cestello impilato da 5+5 litri, con finestrelle, rivestimento ceramico senza PFAS e funzione di sincronizzazione. È la risposta di Philips al problema dei doppi cestelli affiancati, che sono larghissimi: qui la larghezza dichiarata è di 23,3 cm. Il limite serio è la temperatura massima dichiarata di 180 °C, sotto a tutti gli altri modelli di pari fascia.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 423,
  "bsr": 566,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "bosch-serie-6-mafd661b0",
  "v": "friggitrici-aria",
  "brand": "Bosch",
  "name": "Bosch Serie 6 MAFD661B0",
  "price": 223.89,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Dodici litri su due piani con resistenza e ventola dedicate per cestello, e ricambi garantiti dieci anni.",
  "attrs": {
   "capacity": 12,
   "baskets": 2,
   "power": 2800,
   "maxTemp": 230,
   "programs": 6,
   "window": null,
   "dishwasher": true,
   "weight": 10.4
  },
  "pros": [
   "12 litri totali in due vani verticali da 6 litri: la capacità più alta della selezione",
   "Ventola e resistenza dedicate per ogni cestello, fino a 230 °C dichiarati",
   "Rivestimento 100% ceramica dichiarato senza PFAS, PFOS, PFOA e PTFE",
   "Resistenza integrata nell'interno in metallo, si pulisce con un panno",
   "Ricambi dichiarati disponibili 10 anni"
  ],
  "cons": [
   "La pagina si contraddice sulla lavastoviglie: la scheda dice no, i bullet dicono che cestelli e griglie sono lavabili",
   "206 recensioni soltanto: modello nuovo, poco storico d'uso",
   "10,4 kg e 46,2 cm di altezza dichiarati: è un mobile, non un elettrodomestico da riporre",
   "Prezzo alto e solo 6 programmi preimpostati"
  ],
  "buyIf": "Cucini regolarmente per quattro o più persone e vuoi ceramica senza PFAS e ricambi a lungo termine.",
  "avoidIf": "Hai poco spazio in altezza o vuoi un prodotto con uno storico di recensioni ampio.",
  "asin": "B0GTRD1MM6",
  "amazonTitle": "Bosch Friggitrice ad Aria Serie 6, XXL Doppio Cestello 12L, 2 Cestelli da 6L con Funzione SYNC, 6 Programmi Preimpostati, Rivestimento 100% Ceramica Non Tossico, Interno In Metallo, Nero, MAFD661B0",
  "imgs": [
   "https://m.media-amazon.com/images/I/61eDtjPn2SL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71apLnxvDUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81leTr2dExL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81oAPNuE5vL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria a doppio cestello verticale da 6+6 litri, con circuito di riscaldamento indipendente per ogni vano, 230 °C dichiarati e rivestimento interamente ceramico. Ha senso per famiglie numerose che cucinano spesso due portate insieme e vogliono un marchio con ricambi garantiti nel tempo. I contro sono il prezzo, le poche recensioni disponibili e l'ingombro da 10,4 kg.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 206,
  "bsr": 15373,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ninja-foodi-flexdrawer-af500eucp",
  "v": "friggitrici-aria",
  "brand": "Ninja",
  "name": "Ninja Foodi FlexDrawer AF500EUCP",
  "price": 258.53,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "L'unico della selezione che passa da due zone a un cassettone unico da 10,4 litri togliendo un divisorio.",
  "attrs": {
   "capacity": 10.4,
   "baskets": 2,
   "power": 2470,
   "maxTemp": 240,
   "programs": 7,
   "window": null,
   "dishwasher": true,
   "weight": 9.38
  },
  "pros": [
   "Divisorio rimovibile: 10,4 litri in un unico vano oppure due zone indipendenti",
   "240 °C dichiarati, il massimo della selezione insieme al MAX PRO",
   "7 funzioni dichiarate, inclusa la lievitazione",
   "Cestello e piastre dichiarati lavabili in lavastoviglie",
   "4,7 stelle su un pool di oltre 15.000 recensioni"
  ],
  "cons": [
   "49,4 cm di larghezza dichiarati: va trovato il posto prima di comprarla",
   "Il peso dichiarato non è coerente: 9,38 kg nella scheda, 11,3 kg nei bullet",
   "Nessun oblò a questo prezzo",
   "Le recensioni sono condivise con altri modelli Ninja della stessa pagina, non sono tutte di questo esatto apparecchio"
  ],
  "buyIf": "Ti serve sia il doppio cestello sia, all'occorrenza, un unico vano molto grande per un pezzo intero.",
  "avoidIf": "Il piano di lavoro è stretto o non vuoi spendere oltre 250 euro per una friggitrice.",
  "asin": "B0CJVNGMFL",
  "amazonTitle": "Ninja Foodi FlexDrawer, Friggitrice ad Aria Ampia, 10,4L, Nero/Rame",
  "imgs": [
   "https://m.media-amazon.com/images/I/71qem+rNjjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81d8b5A12FL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81KgA-zDYbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Z1V9ehXvL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria da 10,4 litri con cassetto unico e divisorio rimovibile: la usi come doppia zona per due pietanze diverse o come un solo vano gigante per una teglia intera. È il modello giusto per chi alterna cene per due e pranzi per otto persone. Quello che non offre, a questa cifra, è l'oblò, e serve mezzo metro di piano di lavoro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 15473,
  "bsr": 5360,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "aoc-24g42e",
  "v": "monitor-scrivania",
  "brand": "AOC",
  "name": "AOC 24G42E",
  "price": 86.49,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Il 180 Hz piu' economico con pannello IPS e DisplayPort vero.",
  "attrs": {
   "size": 24,
   "resolution": "1920x1080",
   "refresh": 180,
   "panel": "IPS",
   "responseTime": 1,
   "curved": false,
   "heightAdjust": null,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": null
  },
  "pros": [
   "180 Hz e pannello IPS sotto i 90 euro",
   "DisplayPort 1.4 oltre all'HDMI, quindi 180 Hz raggiungibili anche da PC",
   "Adaptive Sync dichiarato compatibile G-Sync",
   "Garanzia produttore 3 anni dichiarata"
  ],
  "cons": [
   "La pagina non dichiara regolazione in altezza: solo inclinazione",
   "Nessun altoparlante e nessun attacco VESA dichiarati in scheda",
   "1080p su 24 pollici: densita' bassa per chi lavora con testo tutto il giorno"
  ],
  "buyIf": "Vuoi la frequenza alta spendendo il minimo e il monitor sta su una scrivania gia' alta il giusto.",
  "avoidIf": "Passi la giornata su fogli e documenti: 1080p su 24 pollici e supporto solo inclinabile stancano.",
  "asin": "B0DS2PMMWD",
  "amazonTitle": "AOC Gaming Monitor 24G42E 24 pollici 1920x1080, FHD, 180Hz, Fast IPS Panel, 1ms GtG, (HDMI1x 2.0 DP 1x 1.4) HDR10, G-Sync Compatible, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71oKxc7WIoL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/714fyppJ1NL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Hdc3ABhaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/510ajqdmxeL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor gaming da 24 pollici Full HD con pannello IPS a 180 Hz e ingresso DisplayPort 1.4, venduto sotto i 90 euro. Serve a chi gioca a titoli competitivi con budget minimo e non vuole rinunciare agli angoli di visione dell'IPS. Gli manca tutto il resto: niente regolazione in altezza dichiarata, niente casse, niente USB-C.",
  "ean": "4038986642583",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.7,
  "reviews": 288,
  "bsr": 2032,
  "bsrCat": "Informatica"
 },
 {
  "id": "philips-27e1n1100a",
  "v": "monitor-scrivania",
  "brand": "Philips",
  "name": "Philips 27E1N1100A",
  "price": 94.9,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Un 27 pollici IPS con casse e VESA a meno di 100 euro.",
  "attrs": {
   "size": 27,
   "resolution": "1920x1080",
   "refresh": 120,
   "panel": "IPS",
   "responseTime": 4,
   "curved": false,
   "heightAdjust": null,
   "usbc": false,
   "usbcPower": null,
   "speakers": true,
   "vesa": true
  },
  "pros": [
   "27 pollici IPS sotto i 100 euro, con oltre 3.000 recensioni alle spalle",
   "Altoparlanti 2x2 W e uscita cuffie integrati",
   "Attacco VESA 100x100 e supporto rimovibile dichiarati",
   "Flicker Free e Low Blue Light dichiarati"
  ],
  "cons": [
   "Un solo HDMI 1.4 piu' un D-Sub: connettivita' minima",
   "Regolazione in altezza non dichiarata",
   "1080p distribuiti su 27 pollici: i caratteri restano grossi e poco nitidi",
   "La pagina dichiara 4 ms nel titolo e 1 ms nella tabella: dato incoerente"
  ],
  "buyIf": "Ti serve tanta superficie a poco prezzo e colleghi un solo computer via HDMI.",
  "avoidIf": "Lavori su testo fine o fotoritocco: 1080p su 27 pollici mostra i pixel da vicino.",
  "asin": "B0CX9CVS9Q",
  "amazonTitle": "PHILIPS Monitor 27E1N1100A 27 pollici 1920x1080, FHD, 120Hz, IPS Panel, 4ms GtG, Speakers, (HDMI1x 1.4) Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/71+5xZyoyFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71sbiIfnqVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61oKWTwSXTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/616sWH+dxRL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da ufficio da 27 pollici Full HD con pannello IPS a 120 Hz, altoparlanti integrati e attacco VESA. Va bene come schermo principale economico per navigare, scrivere e guardare video, o come secondo schermo affiancato a un portatile. Gli manca la connettivita': un solo HDMI 1.4 e un D-Sub, niente USB-C e niente regolazione in altezza.",
  "ean": "8712581804282",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 3214,
  "bsr": 38,
  "bsrCat": "Informatica"
 },
 {
  "id": "koorui-g2711v",
  "v": "monitor-scrivania",
  "brand": "KOORUI",
  "name": "KOORUI G2711V",
  "price": 109.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "27 pollici a 180 Hz con VESA, ma il supporto non sale.",
  "attrs": {
   "size": 27,
   "resolution": "1920x1080",
   "refresh": 180,
   "panel": "IPS",
   "responseTime": 5,
   "curved": false,
   "heightAdjust": false,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "180 Hz su 27 pollici IPS attorno ai 110 euro",
   "VESA 100x100 dichiarato, quindi si sposta su braccio articolato",
   "Riduzione luce blu hardware e anti-sfarfallio dichiarati",
   "Consumo dichiarato 12 W"
  ],
  "cons": [
   "La scheda dichiara esplicitamente che la regolazione in altezza non e' supportata",
   "Nessun DisplayPort: solo HDMI, secondo i punti elenco",
   "5 ms GtG dichiarati, piu' lenti dei rivali a 1 ms",
   "La pagina si contraddice su contrasto (1000:1 in tabella, 1500:1 nei bullet) e porte"
  ],
  "buyIf": "Vuoi 27 pollici e 180 Hz sotto i 120 euro e pensi di montarlo su braccio VESA.",
  "avoidIf": "Ti serve alzare lo schermo all'altezza degli occhi senza comprare altro.",
  "asin": "B0DPHFYNY4",
  "amazonTitle": "KOORUI Monitor Gaming 27 Pollici 180Hz IPS FHD Schermo PC Piatto G2711V",
  "imgs": [
   "https://m.media-amazon.com/images/I/71PkfIVMCjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81ioPLEqESL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71+TnrlhyTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81WMJhTIKHL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici Full HD con pannello IPS a 180 Hz, pensato per chi vuole frequenza alta e schermo grande spendendo poco. Adatto a gaming casalingo e uso misto lavoro-svago su una scrivania gia' della giusta altezza. Gli manca un supporto regolabile e il DisplayPort, e i 5 ms dichiarati non sono da monitor competitivo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 835,
  "bsr": 3069,
  "bsrCat": "Informatica"
 },
 {
  "id": "ktc-h24t7-qhd-180hz",
  "v": "monitor-scrivania",
  "brand": "KTC",
  "name": "KTC H24T7 24\" QHD 180Hz",
  "price": 153.41,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "QHD e 180 Hz su 24 pollici, con supporto che sale e ruota.",
  "attrs": {
   "size": 23.8,
   "resolution": "2560x1440",
   "refresh": 180,
   "panel": "IPS",
   "responseTime": 1,
   "curved": false,
   "heightAdjust": true,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "QHD su 24 pollici: densita' alta, testo nitido senza scalare",
   "Supporto con altezza, rotazione e pivot 90 gradi dichiarati",
   "400 cd/m² e HDR 400 dichiarati, luminosita' sopra la media della fascia",
   "Tre ingressi video (1 DP 1.4, 2 HDMI 2.0) e VESA 100x100"
  ],
  "cons": [
   "Marchio poco noto in Italia, assistenza meno immediata dei grandi brand",
   "Nessun altoparlante dichiarato",
   "La tabella tecnica indica genericamente LCD: il Fast-IPS e' dichiarato solo nel titolo e nei bullet"
  ],
  "buyIf": "Vuoi un solo schermo che faccia gaming veloce e lavoro su testo senza occupare mezza scrivania.",
  "avoidIf": "Preferisci un marchio con assistenza capillare o ti serve collegare il portatile con un cavo solo.",
  "asin": "B0DT42R6NM",
  "amazonTitle": "KTC Monitor Gaming, 180Hz / 144Hz 2K QHD (2560 x 1440) Monitor 24 Pollici con pannello Fast-IPS 1ms, HDR 400, Adaptive Sync, 400 cd/m² di luminosità, supporto regolabile per rotazione e sollevamento",
  "imgs": [
   "https://m.media-amazon.com/images/I/71gQOdmzDyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71kHZ2MP4jL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71W2-unS3dL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71EBrn21swL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 23,8 pollici con risoluzione 2560x1440 a 180 Hz e supporto regolabile in altezza e rotazione, sotto i 160 euro. Va bene sia per giocare sia per lavorare, perche' la densita' alta rende il testo nitido e il pivot permette di metterlo in verticale per il codice. Gli mancano altoparlanti e USB-C, e il marchio non ha la rete di assistenza dei grandi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 818,
  "bsr": 2458,
  "bsrCat": "Informatica"
 },
 {
  "id": "msi-mag-27c6f",
  "v": "monitor-scrivania",
  "brand": "MSI",
  "name": "MSI MAG 27C6F",
  "price": 163.56,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "VA curvo 1500R con contrasto vero, per chi gioca al buio.",
  "attrs": {
   "size": 27,
   "resolution": "1920x1080",
   "refresh": 180,
   "panel": "VA",
   "responseTime": 1,
   "curved": true,
   "heightAdjust": false,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "Pannello VA con contrasto nativo dichiarato 3000:1: neri piu' profondi degli IPS di pari prezzo",
   "Curvatura 1500R e cornici sottili, buono per postazione singola ravvicinata",
   "180 Hz con Adaptive-Sync su DP 1.2a e HDMI 2.0b",
   "Garanzia produttore 3 anni dichiarata"
  ],
  "cons": [
   "Supporto dichiarato regolabile solo in inclinazione",
   "1080p su 27 pollici curvi: poca superficie utile per lavorare",
   "La pagina dichiara 1 ms in tabella e 0,5 ms nei bullet: dato non univoco",
   "Nessun altoparlante dichiarato"
  ],
  "buyIf": "Giochi soprattutto a titoli scuri o cinematografici e il contrasto ti interessa piu' della densita'.",
  "avoidIf": "Usi il monitor per lavorare su piu' finestre affiancate o ti serve alzarlo.",
  "asin": "B0CS3W1DMF",
  "amazonTitle": "MSI MAG 27C6F Monitor Gaming Curvo 27\" - FHD (1920 x 1080), 180Hz/0,5 ms, pannello VA 1500R - Adaptive-Sync, connettività DisplayPort 1.2a, HDMI",
  "imgs": [
   "https://m.media-amazon.com/images/I/71vdDjKJ7aL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/619Bv+vRnpL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ftjVCPx2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71ICC3kZyHL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor gaming curvo da 27 pollici Full HD a 180 Hz con pannello VA dichiarato a 3000:1 di contrasto nativo. Serve a chi gioca in stanza poco illuminata e vuole neri profondi invece della resa uniforme di un IPS. Gli manca ergonomia: il supporto si inclina e basta, e la risoluzione 1080p su 27 pollici resta il limite piu' evidente.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 919,
  "bsr": 5629,
  "bsrCat": "Informatica"
 },
 {
  "id": "lenovo-legion-r27qe-gen2",
  "v": "monitor-scrivania",
  "brand": "Lenovo",
  "name": "Lenovo Legion R27qe Gen 2",
  "price": 199,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "QHD 200 Hz con due HDMI 2.1 e supporto completo, a 200 euro.",
  "attrs": {
   "size": 27,
   "resolution": "2560x1440",
   "refresh": 200,
   "panel": "IPS",
   "responseTime": 0.5,
   "curved": false,
   "heightAdjust": true,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "QHD a 200 Hz su 27 pollici IPS attorno ai 200 euro",
   "Due HDMI 2.1: utile per PS5 e Xbox Series X oltre al PC",
   "Supporto regolabile in altezza, inclinazione e rotazione dichiarato",
   "Cavo DisplayPort incluso e garanzia 3 anni dichiarata"
  ],
  "cons": [
   "Nessun altoparlante e nessun USB-C dichiarati",
   "Poco piu' di 200 recensioni: modello recente, storico ancora corto",
   "Il DisplayPort e' 1.2, non 1.4"
  ],
  "buyIf": "Alterni PC e console di ultima generazione e vuoi un solo schermo che regga entrambi a frequenza alta.",
  "avoidIf": "Vuoi collegare il portatile con un cavo unico o ti servono casse integrate.",
  "asin": "B0FDGCNTZ2",
  "amazonTitle": "Lenovo Legion R27qe Gen 2 | Monitor Gaming 27\" QHD (2560x1440), 200Hz, 0.5ms, IPS, 2x HDMI 2.1 e DisplayPort 1.2, Cavo DisplayPort incluso - Ideale per Esport, FPS e Console",
  "imgs": [
   "https://m.media-amazon.com/images/I/71sFFYDmqVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81JDg+YyIgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Y6E2SDV4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71q2r+RFfLL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor gaming da 27 pollici QHD con pannello IPS a 200 Hz, doppio HDMI 2.1 e supporto regolabile in altezza e rotazione. E' la scelta sensata per chi gioca su PC e console e vuole anche uno schermo usabile per lavorare, grazie alla densita' del 1440p. Gli mancano audio integrato e USB-C, e lo storico recensioni e' ancora limitato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 230,
  "bsr": 1242,
  "bsrCat": "Informatica"
 },
 {
  "id": "samsung-odyssey-g5-c34g55",
  "v": "monitor-scrivania",
  "brand": "Samsung",
  "name": "Samsung Odyssey G5 C34G55",
  "price": 246,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "L'ultrawide 3440x1440 a 165 Hz che costa come un 27 pollici QHD.",
  "attrs": {
   "size": 34,
   "resolution": "3440x1440",
   "refresh": 165,
   "panel": "VA",
   "responseTime": 1,
   "curved": true,
   "heightAdjust": null,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "Ultrawide 21:9 3440x1440 a 165 Hz sotto i 250 euro",
   "Curvatura 1000R aggressiva, avvolgente alla distanza da scrivania",
   "Contrasto dichiarato 3000:1 e funzione PBP per due sorgenti affiancate",
   "Oltre 2.000 recensioni: modello con storico lungo"
  ],
  "cons": [
   "Luminosita' dichiarata 250 cd/m² e gamma cromatica 72%: resa colore modesta",
   "Solo 1 HDMI e 1 DisplayPort, nessun USB-C",
   "Regolazione in altezza e altoparlanti non dichiarati in scheda"
  ],
  "buyIf": "Ti serve superficie orizzontale per lavorare e vuoi anche giocare senza comprare un secondo schermo.",
  "avoidIf": "Fai fotoritocco o video color-critical: 250 cd/m² e 72% di gamma non bastano.",
  "asin": "B0BRL8B5L5",
  "amazonTitle": "Samsung Monitor Gaming Odyssey G5 (C34G55), Curvo (1000R), 34\", 3440x1440 (Ultra WQHD), 21:9, HDR10, VA, 165 Hz, 1 ms, FreeSync Premium, HDMI, Display Port, PBP, Flicker Free",
  "imgs": [
   "https://m.media-amazon.com/images/I/71j7quVjlJL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81j+BTnADNL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81uBMNyffkL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/819RauQUkfL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor curvo da 34 pollici in formato 21:9 con risoluzione 3440x1440 a 165 Hz e pannello VA. Serve a chi vuole sostituire due schermi con uno solo, per lavorare su timeline, fogli larghi o codice e poi giocare. Gli mancano luminosita' e copertura colore da monitor creativo, e la scheda non dichiara altezza regolabile ne' audio.",
  "ean": "8806094796315",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.4,
  "reviews": 2105,
  "bsr": 966,
  "bsrCat": "Informatica"
 },
 {
  "id": "dell-s2725qc",
  "v": "monitor-scrivania",
  "brand": "Dell",
  "name": "Dell 27 Plus USB-C S2725QC",
  "price": 338.13,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "4K a 120 Hz con USB-C da 65 W: docking e console nello stesso schermo.",
  "attrs": {
   "size": 27,
   "resolution": "3840x2160",
   "refresh": 120,
   "panel": "IPS",
   "responseTime": 4,
   "curved": false,
   "heightAdjust": true,
   "usbc": true,
   "usbcPower": 65,
   "speakers": true,
   "vesa": true
  },
  "pros": [
   "4K a 120 Hz: raro a questo prezzo, utile sia per lavoro sia per console",
   "USB-C con 65 W di ricarica: un cavo solo per video, dati e alimentazione del portatile",
   "Supporto con regolazione in altezza e inclinazione dichiarata",
   "Altoparlanti 5 W x2 dichiarati, piu' 2 HDMI, 2 USB-C e 2 USB-A"
  ],
  "cons": [
   "65 W bastano per un ultrabook, non per un portatile da lavoro pesante",
   "La scheda tecnica dichiara 8 ms mentre il titolo dichiara 4 ms: dato incoerente",
   "1500:1 di contrasto: i neri restano grigi rispetto a un VA o a un OLED"
  ],
  "buyIf": "Lavori con un portatile USB-C e vuoi docking, 4K e 120 Hz in un unico prodotto.",
  "avoidIf": "Il tuo portatile chiede piu' di 65 W o ti servono neri profondi per film e foto.",
  "asin": "B0F29RSLHP",
  "amazonTitle": "Dell 27 Plus USB-C Monitor - S2725QC, 4K UHD (3840x2160), 120Hz, IPS, 4ms",
  "imgs": [
   "https://m.media-amazon.com/images/I/71c1wWvuKbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81HZjKNc01L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/713TZ5eAooL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Y-7nTIZ5L._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici 4K con pannello IPS a 120 Hz, USB-C che eroga 65 W e supporto regolabile in altezza. E' il compromesso piu' equilibrato per chi lavora da portatile durante il giorno e collega una console la sera, con un solo cavo per tutto. Gli manca potenza di ricarica per macchine esigenti e il contrasto e' quello tipico di un IPS.",
  "ean": "5397184962367",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.4,
  "reviews": 591,
  "bsr": 1692,
  "bsrCat": "Informatica"
 },
 {
  "id": "asus-proart-pa279cv",
  "v": "monitor-scrivania",
  "brand": "ASUS",
  "name": "ASUS ProArt PA279CV",
  "price": 339.9,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "4K da lavoro con USB-C e hub, senza pretese di fluidita'.",
  "attrs": {
   "size": 27,
   "resolution": "3840x2160",
   "refresh": 60,
   "panel": "IPS",
   "responseTime": 5,
   "curved": false,
   "heightAdjust": null,
   "usbc": true,
   "usbcPower": null,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "4K IPS con design senza cornice, pensato per lavoro su immagini e layout",
   "USB-C oltre a DisplayPort e due HDMI, piu' hub USB 3.0 dichiarato",
   "Garanzia produttore 3 anni dichiarata",
   "Oltre 800 recensioni su un modello in catalogo da anni"
  ],
  "cons": [
   "Solo 60 Hz: inadatto a gaming e meno fluido nello scorrimento rispetto ai 120 Hz",
   "La pagina non dichiara i watt erogati dall'USB-C ne' la regolazione in altezza",
   "5 ms dichiarati e contrasto 1000:1: numeri da monitor da ufficio, non da intrattenimento",
   "La scheda Amazon contiene voci evidentemente errate (contenuto confezione di un altro prodotto)"
  ],
  "buyIf": "Il tuo lavoro e' su immagini o documenti e la fluidita' non ti interessa.",
  "avoidIf": "Giochi o guardi sport: 60 Hz e 5 ms si notano subito rispetto ai rivali a 120 Hz.",
  "asin": "B08JH7KQKV",
  "amazonTitle": "ASUS PROART DISPLAY PA279CV, Monitor Professionale da 27” 4K UHD IPS, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/81W71VaDIPL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/812IyCksHRS._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Ae4UaB7iL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/8153J3qwEyL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor professionale da 27 pollici 4K con pannello IPS, USB-C e hub USB integrato, allo stesso prezzo di un 4K gaming ma con un'impostazione diversa. Serve a chi monta video, impagina o lavora su fotografia e vuole una superficie ampia e stabile collegata al portatile con un cavo. Gli mancano frequenza di aggiornamento e dati chiari sulla potenza USB-C.",
  "ean": "4718017853200",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.4,
  "reviews": 831,
  "bsr": 1087,
  "bsrCat": "Informatica"
 },
 {
  "id": "lg-ultragear-oled-34gx900a",
  "v": "monitor-scrivania",
  "brand": "LG",
  "name": "LG UltraGear OLED 34GX900A",
  "price": 799.99,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "OLED ultrawide a 240 Hz: il salto di qualita' d'immagine, a prezzo pieno.",
  "attrs": {
   "size": 34,
   "resolution": "3440x1440",
   "refresh": 240,
   "panel": "OLED",
   "responseTime": 0.03,
   "curved": true,
   "heightAdjust": true,
   "usbc": true,
   "usbcPower": 65,
   "speakers": true,
   "vesa": null
  },
  "pros": [
   "Pannello OLED ultrawide: contrasto dichiarato 1.500.000:1 e 0,03 ms",
   "240 Hz con G-Sync e HDMI 2.1, adatto anche alle console recenti",
   "USB-C da 65 W e altoparlanti stereo 14 W dichiarati",
   "Supporto regolabile in altezza, inclinazione e swivel dichiarato"
  ],
  "cons": [
   "Luminosita' dichiarata 275 cd/m²: in stanza molto illuminata l'OLED fatica",
   "Finitura lucida dichiarata: riflette le fonti di luce alle spalle",
   "Rating 4,3, il piu' basso del gruppo, su un prodotto da 800 euro",
   "La scheda non dichiara l'attacco VESA"
  ],
  "buyIf": "Hai una scheda video capace e vuoi la migliore resa d'immagine possibile in ultrawide.",
  "avoidIf": "La tua postazione ha finestre alle spalle o luci forti: 275 cd/m² e superficie lucida sono un problema.",
  "asin": "B0FH2TYX4M",
  "amazonTitle": "LG UltraGear OLED 34GX900A Monitor Gaming 34 Pollici Curvo per Gaming, Risoluzione WQHD (3440x1440) 21:9, 240Hz, 0.03ms (GtG), G-Sync, USB-C, HDMI 2.1, Speaker Stereo 14W, Stand regolabile, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/81k8nGl+bqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81pYm-U0DyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Nm-Nt5UUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81yWhbSVZiL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor gaming OLED curvo da 34 pollici in 3440x1440 a 240 Hz, con USB-C da 65 W, HDMI 2.1 e supporto completamente regolabile. E' per chi ha gia' un PC di fascia alta e vuole il salto vero su neri, tempo di risposta e fluidita'. Gli manca luminosita' per ambienti pieni di luce e ha una superficie lucida che riflette.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 763,
  "bsr": 2779,
  "bsrCat": "Informatica"
 },
 {
  "id": "ultenic-d10",
  "v": "robot-aspirapolvere",
  "brand": "Ultenic",
  "name": "Ultenic D10",
  "price": 149.98,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "LiDAR vero e 8.000 Pa a meno di 150 euro, senza stazione.",
  "attrs": {
   "pa": 8000,
   "battery": 180,
   "mop": null,
   "dock": "none",
   "lidar": true,
   "height": 9.7,
   "bin": 340,
   "carpetLift": null,
   "petBrush": null
  },
  "pros": [
   "Navigazione LiDAR con mappe fino a 5 piani sotto i 150 euro",
   "8.000 Pa dichiarati con aumento automatico della potenza sui tappeti",
   "180 minuti di autonomia dichiarati e rientro automatico alla ricarica",
   "Alto 9,7 cm: passa sotto buona parte di divani e letti"
  ],
  "cons": [
   "Nessuna stazione: il contenitore da 340 ml va svuotato a mano",
   "La scheda non descrive il sistema di lavaggio, quindi il panno resta tutto a carico tuo",
   "279 recensioni e marchio poco diffuso in Italia: assistenza e ricambi meno scontati"
  ],
  "buyIf": "Vuoi la mappatura laser spendendo poco e non ti pesa svuotare il contenitore a mano.",
  "avoidIf": "Cerchi una stazione che si occupi di polvere e panno al posto tuo.",
  "asin": "B0GFWBQXCX",
  "amazonTitle": "Ultenic Robot Aspirapolvere Lavapavimenti con LiDAR, 8000Pa, 180Min, Design Ultracompatto, Mappe Multilivello, Auto-Boost Tappeti, Controllo App/Alexa",
  "imgs": [
   "https://m.media-amazon.com/images/I/71-auPLebHL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81MfgC3Yj0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71xQu5F0v2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81s3zEP1LPL._AC_SL1500_.jpg"
  ],
  "summary": "Robot di fascia economica con navigazione laser LiDAR, mappe multipiano e 8.000 Pa dichiarati, quindi non naviga a caso come i modelli giroscopici allo stesso prezzo. Va bene come primo robot in un appartamento con pavimenti duri e qualche tappeto. Manca tutto il resto: nessuna base che svuota, contenitore da 340 ml da vuotare spesso e nessun dettaglio sul lavaggio.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 279,
  "bsr": 130343,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "proscenic-q10",
  "v": "robot-aspirapolvere",
  "brand": "Proscenic",
  "name": "Proscenic Q10",
  "price": 147.99,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "10.000 Pa e LiDAR sotto i 150 euro, il rapporto potenza/prezzo più aggressivo.",
  "attrs": {
   "pa": 10000,
   "battery": 200,
   "mop": "passive",
   "dock": null,
   "lidar": true,
   "height": 9.7,
   "bin": 350,
   "carpetLift": null,
   "petBrush": null
  },
  "pros": [
   "10.000 Pa dichiarati, cifra da fascia superiore per meno di 150 euro",
   "LiDAR a 360 gradi, mappa la casa in 15 minuti e salva fino a 5 piani",
   "200 minuti di autonomia dichiarati su circa 230 m2",
   "Alto 9,7 cm, con 15 sensori per l'aggiramento degli ostacoli"
  ],
  "cons": [
   "La pagina elenca la raccolta automatica della polvere fra le caratteristiche ma non descrive nessuna stazione: dato incoerente, meglio darlo per assente",
   "Panno trascinato con serbatoio 2 in 1 da 250 ml: lava in superficie e va risciacquato a mano",
   "Marchio meno diffuso di Roborock o Dreame: ricambi e assistenza meno scontati"
  ],
  "buyIf": "Ti serve potenza di aspirazione e mappatura laser spendendo meno di 150 euro.",
  "avoidIf": "Vuoi un lavaggio serio dei pavimenti o una stazione che gestisca polvere e panno.",
  "asin": "B0H151LS58",
  "amazonTitle": "Proscenic Q10 Robot Aspirapolvere Lavapavimenti con Mappatura, Robot Pavimenti 10000Pa 200min, LiDAR Intelligente, Controllo APP/Alexa/WiFi/Siri/IFTTT, Ideale per Pulizia Domestica/Peli Animali",
  "imgs": [
   "https://m.media-amazon.com/images/I/81fZni5YXeL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/811Ae87ChaL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71W9qLsewvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71rxhHqJi9L._AC_SL1500_.jpg"
  ],
  "summary": "Aspira forte per la fascia, con 10.000 Pa dichiarati, mappatura LiDAR multipiano e 200 minuti di autonomia. Ha senso in case con animali dove conta soprattutto l'aspirazione e il budget è sotto i 150 euro. Il lavaggio è il solito panno trascinato da lavare a mano, e la pagina non chiarisce se esista una base che svuota da sola.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1338,
  "bsr": 9638,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "switchbot-k11-plus",
  "v": "robot-aspirapolvere",
  "brand": "SwitchBot",
  "name": "SwitchBot K11+",
  "price": 209.99,
  "quality": 7.5,
  "checked": "2026-09-12",
  "tagline": "Nove centimetri di altezza e stazione mini, con Matter di serie.",
  "attrs": {
   "pa": 6000,
   "battery": 150,
   "mop": null,
   "dock": "dust",
   "lidar": true,
   "height": 9,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Robot alto 9 cm e stazione più piccola di un foglio A4: ingombro minimo",
   "Svuotamento automatico in un sacchetto da 4 litri, dichiarato per 90 giorni",
   "Compatibile Matter: si comanda da Apple Casa, Alexa e Google Home senza hub",
   "Spazzola a rullo e doppia spazzola laterale anti-groviglio"
  ],
  "cons": [
   "161 recensioni: base di giudizio ancora stretta rispetto ai modelli più venduti",
   "80 dB dichiarati di rumorosità, sopra la media della categoria",
   "La stazione svuota solo la polvere: il panno va montato e lavato a mano"
  ],
  "buyIf": "Hai mobili bassi e poco spazio per la base, e usi Apple Casa o una smart home Matter.",
  "avoidIf": "Cerchi il massimo dell'aspirazione o una stazione che lavi e asciughi il panno.",
  "asin": "B0FDFCSMJR",
  "amazonTitle": "SwitchBot K11+ Robot aspirapolvere e lavapavimenti con Matter, 6.000 Pa, svuotamento automatico per 90 giorni, sistema LDS, ultra-sottile con 9 cm, compatibile con Apple Casa, Alexa e Google Home",
  "imgs": [
   "https://m.media-amazon.com/images/I/61TR3fa2l8L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71CFnROiS-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81p1EMZ1vYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/918OkHap0GL._AC_SL1500_.jpg"
  ],
  "summary": "Robot pensato per stare basso e occupare poco: 9 cm di corpo per passare sotto i mobili e una base autosvuotante grande quanto un foglio A4, con sacchetto da 4 litri dichiarato per 90 giorni. Il pezzo forte è Matter, che lo fa entrare in Apple Casa oltre che in Alexa e Google. In cambio aspira 6.000 Pa, fa rumore (80 dB dichiarati) e il lavaggio resta manuale.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 161,
  "bsr": 31769,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "xiaomi-x20-plus",
  "v": "robot-aspirapolvere",
  "brand": "XIAOMI",
  "name": "Robot Vacuum X20+",
  "price": 299.99,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Stazione che lava e asciuga i panni a 300 euro, con doppio mocio rotante.",
  "attrs": {
   "pa": 6000,
   "battery": 140,
   "mop": "rotating",
   "dock": "full",
   "lidar": true,
   "height": null,
   "bin": null,
   "carpetLift": true,
   "petBrush": null
  },
  "pros": [
   "Stazione completa: svuota la polvere, lava e asciuga i panni, serbatoio da 4 litri",
   "Doppio panno rotante a 180 giri/min, con sollevamento automatico sui tappeti",
   "Navigazione LDS a 360 gradi più luce strutturata per gli ostacoli bassi",
   "Oltre 5.000 recensioni: prodotto molto diffuso, ricambi facili da trovare"
  ],
  "cons": [
   "6.000 Pa dichiarati: sulla carta meno di diversi concorrenti allo stesso prezzo",
   "140 minuti di autonomia dichiarati, fra i più bassi della fascia",
   "La pagina non dichiara né l'altezza del robot né la capacità del contenitore"
  ],
  "buyIf": "Vuoi una stazione che lavi e asciughi i panni senza superare i 300 euro.",
  "avoidIf": "Hai casa grande o molti tappeti: autonomia e aspirazione qui sono il punto debole.",
  "asin": "B0CTCXKL52",
  "amazonTitle": "XIAOMI X20+ Robot aspirapolvere con lavaggio e panno sollevabile, 6000 Pa",
  "imgs": [
   "https://m.media-amazon.com/images/I/61+Y7BWWOlL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61TMVPisCxL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61X4gFPnFML._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61pJLT14k3L._AC_SL1000_.jpg"
  ],
  "summary": "È il modo più economico per avere una stazione che fa davvero tutto: svuota la polvere in 10 secondi, lava i panni e li asciuga, con serbatoio d'acqua da 4 litri. Il lavaggio usa due panni rotanti che si alzano da soli sui tappeti. Il compromesso sta nei numeri: 6.000 Pa e 140 minuti di autonomia sono i più modesti fra i robot con base completa.",
  "ean": "6941812768556",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.2,
  "reviews": 5437,
  "bsr": 983,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "roborock-qrevo-s-pro",
  "v": "robot-aspirapolvere",
  "brand": "roborock",
  "name": "Qrevo S Pro",
  "price": 369.99,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Lavaggio dei panni ad acqua calda a 75 gradi, sotto i 400 euro.",
  "attrs": {
   "pa": 18500,
   "battery": null,
   "mop": null,
   "dock": "full",
   "lidar": null,
   "height": 9.65,
   "bin": null,
   "carpetLift": true,
   "petBrush": true
  },
  "pros": [
   "Lavaggio dei panni a 75 gradi e asciugatura ad aria calda a 45 gradi",
   "18.500 Pa dichiarati, con sacchetto sigillato da 2,7 litri per 7-9 settimane",
   "Sollevamento del panno di 10 mm sui tappeti",
   "Spazzola principale in gomma e spazzola laterale anti-groviglio, alto 9,65 cm"
  ],
  "cons": [
   "La scheda non dichiara l'autonomia della batteria né il tipo di lavaggio",
   "Sacchetti da ricomprare: la stazione non è senza sacco",
   "Nome quasi identico al Qrevo S base: facile sbagliare modello in fase d'ordine"
  ],
  "buyIf": "Passi il panno ogni giorno e vuoi che sia la stazione a lavarlo e asciugarlo con acqua calda.",
  "avoidIf": "Vuoi una stazione senza sacco o ti serve un'autonomia dichiarata nero su bianco.",
  "asin": "B0GHN39ZGJ",
  "amazonTitle": "roborock Qrevo S Pro Robot Aspirapolvere Lavapavimenti, Lavaggio Panno 75°C",
  "imgs": [
   "https://m.media-amazon.com/images/I/61UmiO9S3wL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81bpLBVYqAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81BeyM2DqbL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81RrDnLJ1DL._AC_SL1500_.jpg"
  ],
  "summary": "Qui la stazione lava i panni a 75 gradi e li asciuga con aria calda a 45, cosa che di solito si paga ben oltre i 400 euro: serve a chi il panno lo usa davvero tutti i giorni e non vuole odore di stantio. Aspira 18.500 Pa dichiarati e solleva il panno di 10 mm sui tappeti. La pagina però tace su autonomia e capacità del contenitore, e i sacchetti sono un costo ricorrente.",
  "ean": "0810125545092",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.3,
  "reviews": 345,
  "bsr": 2499,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "dreame-l50s-pro-ultra",
  "v": "robot-aspirapolvere",
  "brand": "dreame",
  "name": "L50s Pro Ultra",
  "price": 599,
  "quality": 8.5,
  "checked": "2026-09-12",
  "tagline": "Stazione che lava i panni a 100 gradi e 30.000 Pa dichiarati.",
  "attrs": {
   "pa": 30000,
   "battery": 171,
   "mop": null,
   "dock": "full",
   "lidar": null,
   "height": null,
   "bin": null,
   "carpetLift": null,
   "petBrush": true
  },
  "pros": [
   "Stazione completa: lava i panni a 100 gradi, li asciuga, svuota la polvere, rabbocca l'acqua e dosa il detergente",
   "30.000 Pa dichiarati, il valore più alto di questa selezione",
   "Doppia spazzola anti-groviglio in gomma, pensata per peli e capelli lunghi",
   "Braccio estensibile per bordi e angoli e superamento di ostacoli da 4 cm"
  ],
  "cons": [
   "La pagina non dichiara altezza del robot, tipo di navigazione né capacità del contenitore",
   "Stazione ingombrante: 45,7 x 34 cm dichiarati, serve un angolo dedicato",
   "599 euro: ha senso solo se sfrutti davvero lavaggio ad acqua calda e manutenzione automatica"
  ],
  "buyIf": "Vuoi che la manutenzione sia praticamente tutta automatica e hai spazio per una base grande.",
  "avoidIf": "Cerchi il miglior rapporto qualità/prezzo: a 599 euro paghi la stazione, non solo il robot.",
  "asin": "B0GD79DTS7",
  "amazonTitle": "dreame L50s Pro Ultra Robot Aspirapolvere, Aspirazione 30.000 Pa",
  "imgs": [
   "https://m.media-amazon.com/images/I/71j4ammqiSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81SciSlCG5L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81UeocPGNUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Abk-rHpeL._AC_SL1500_.jpg"
  ],
  "summary": "Il modello di fascia alta di questa tornata: la base lava i panni ad acqua calda a 100 gradi, li asciuga, svuota la polvere, rabbocca l'acqua e miscela il detergente, quindi per settimane non la tocchi. Aspira 30.000 Pa dichiarati e supera ostacoli da 4 cm. Da valutare solo se hai spazio per una base da 45 x 34 cm e ti serve davvero l'automazione completa.",
  "ean": null,
  "eanSource": null,
  "rating": 4.8,
  "reviews": 638,
  "bsr": 237,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-perfetto-magnifica-s-ecam11-112b",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "De'Longhi Perfetto Magnifica S ECAM11.112.B",
  "price": 299.9,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "L'automatica con macine al prezzo più basso della gamma De'Longhi.",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "pannarello",
   "tank": null,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Macinacaffè integrato con 13 livelli di macinatura regolabili",
   "Accetta sia chicchi sia caffè già macinato, con vano dedicato",
   "Programmi automatici di risciacquo e decalcificazione, gruppo infusore estraibile",
   "È la porta d'ingresso più economica alle automatiche De'Longhi con macine"
  ],
  "cons": [
   "Voto medio 4,0 su 7.747 recensioni: le lamentele ricorrenti riguardano rumorosità e assistenza",
   "Montalatte manuale a pannarello: il cappuccino lo monti tu, non esce premendo un tasto",
   "Nessun display, solo manopole e tasti: le regolazioni sono poche",
   "Capacità del serbatoio non dichiarata nella scheda Amazon"
  ],
  "buyIf": "Vuoi la prima automatica con macinacaffè spendendo il meno possibile e bevi soprattutto espresso.",
  "avoidIf": "Vuoi cappuccino e latte macchiato premendo un solo tasto, senza montare il latte a mano.",
  "asin": "B0BWSFGQ49",
  "amazonTitle": "De'Longhi Perfetto Magnifica S ECAM11.112.B, Macchina da caffè Automatica per Espresso e Cappuccino, Chicchi macinati al momento, 4 Bevande One Touch, Montalatte classico, Spegnimento Automatico",
  "imgs": [
   "https://m.media-amazon.com/images/I/61qzcWG1ooL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Yw7JHsqtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61OnK7d9TQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71s5e2whuzL._AC_SL1500_.jpg"
  ],
  "summary": "Automatica base: macina i chicchi al momento, eroga espresso e caffè lungo con un tasto e monta il latte con il pannarello manuale. Va bene a chi vuole smettere con le capsule senza spendere oltre 400 euro e accetta di fare la schiuma a mano. Le manca tutto il resto: niente display, niente bevande latte automatiche, niente caraffa.",
  "ean": null,
  "eanSource": null,
  "rating": 4,
  "reviews": 7747,
  "bsr": 1618,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-dinamica-ecam350-15b",
  "v": "macchine-caffe",
  "brand": "De'Longhi",
  "name": "De'Longhi Dinamica ECAM350.15.B",
  "price": 389.55,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Automatica con serbatoio da 1,8 L e dosi memorizzabili, latte ancora a mano.",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "pannarello",
   "tank": 1.8,
   "costPerCup": null,
   "minutes": null,
   "width": null
  },
  "pros": [
   "Serbatoio da 1,8 L estraibile frontalmente, si riempie senza spostare la macchina",
   "Display LCD e 4 tasti diretti, più memorizzazione delle dosi con la funzione My",
   "Macinacaffè a 13 livelli, funziona anche con caffè già macinato",
   "Spegnimento programmabile a timer e programmi automatici di decalcificazione"
  ],
  "cons": [
   "Il sistema latte è manuale a pannarello, non una caraffa automatica: per il cappuccino lavori tu",
   "La pagina Amazon dà solo due foto e riporta le dimensioni in modo incoerente",
   "Ingombro da automatica piena: profonda oltre 40 cm, va misurato il piano"
  ],
  "buyIf": "Bevi molti caffè al giorno e vuoi dosi memorizzate e un serbatoio capiente senza salire oltre i 400 euro.",
  "avoidIf": "Il cappuccino automatico con caraffa del latte è il motivo per cui compri una macchina.",
  "asin": "B01FOAFWLW",
  "amazonTitle": "De'Longhi DINAMICA ECAM 350.15.B Macchina da caffè automatica in chicchi e polvere, Spegnimento programmabile, Display LCD one touch, Cappuccino System,Serbatoio estraibile da 1.8 L, Funzione MY, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61Ph0r3UWfL._AC_SL1200_.jpg",
   "https://m.media-amazon.com/images/I/41oc5EJoHSL._AC_.jpg"
  ],
  "summary": "Gradino sopra le automatiche base: display, quattro bevande a tasto diretto e la funzione My per salvare aroma e quantità di ogni caffè. Il serbatoio da 1,8 L estraibile davanti riduce le ricariche ed è comodo se siete in tre o quattro. Il limite è il latte: pannarello manuale, quindi cappuccino e latte macchiato restano un lavoro a mano.",
  "ean": "8004399331143",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.3,
  "reviews": 2138,
  "bsr": 52087,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "philips-ep2331-10-latte-go",
  "v": "macchine-caffe",
  "brand": "Philips",
  "name": "Philips EP2331/10 LatteGo",
  "price": 419.13,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Automatica compatta con caraffa latte automatica in due pezzi.",
  "attrs": {
   "type": "automatica",
   "grinder": true,
   "milk": "automatic",
   "tank": 1.8,
   "costPerCup": null,
   "minutes": null,
   "width": 24.6
  },
  "pros": [
   "Caraffa LatteGo automatica in due soli pezzi, senza tubetti, lavabile in lavastoviglie",
   "Macine in ceramica e filtro AquaClean dichiarato fino a 5.000 tazze senza decalcificare",
   "Larga 24,6 cm: sta in uno spazio stretto nonostante sia un'automatica completa",
   "Comandi a touchscreen e funzione SilentBrew per ridurre il rumore"
  ],
  "cons": [
   "Solo 134 recensioni: modello recente, poca storia di affidabilità nel tempo",
   "Il filtro AquaClean va ricomprato periodicamente, altrimenti il vantaggio decade",
   "La scheda Amazon non dichiara quante bevande preimpostate offre"
  ],
  "buyIf": "Vuoi latte montato in automatico senza il rito quotidiano di smontare e lavare tubetti.",
  "avoidIf": "Compri solo prodotti con migliaia di recensioni alle spalle e non vuoi rischiare su un modello nuovo.",
  "asin": "B0CRDM9HY1",
  "amazonTitle": "PHILIPS EP2331/10 Macchina per caffè espresso completamente automatica",
  "imgs": [
   "https://m.media-amazon.com/images/I/61MLHcZNwfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/612p4Ti08hL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/610feRWrFTL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61S9gFXl3TL._AC_SL1500_.jpg"
  ],
  "summary": "Automatica Philips con macine in ceramica e sistema LatteGo: la caraffa è fatta di due soli pezzi senza tubi, si stacca e va in lavastoviglie, quindi cappuccino e latte escono premendo un tasto e la pulizia dura poco. Larga meno di 25 cm, è adatta a cucine strette. Il punto debole è la poca storia: 134 recensioni sono poche per giudicarne la tenuta.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 134,
  "bsr": 364188,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "hibrew-h10b-lite",
  "v": "macchine-caffe",
  "brand": "HiBREW",
  "name": "HiBREW H10B Lite",
  "price": 179.99,
  "quality": 8,
  "checked": "2026-09-12",
  "tagline": "Controlli da barista (temperatura, pre-infusione, timer) in tredici centimetri.",
  "attrs": {
   "type": "manuale",
   "grinder": false,
   "milk": "pannarello",
   "tank": 1.3,
   "costPerCup": null,
   "minutes": null,
   "width": 13
  },
  "pros": [
   "Temperatura di estrazione regolabile fra 90 e 96 °C e pre-infusione da 1 a 10 secondi",
   "Display LED con timer di estrazione e manometro: vedi cosa sta succedendo mentre esce il caffè",
   "Volume erogato programmabile da 35 a 300 ml",
   "Larga 13 cm, corpo in acciaio inox, lancia vapore con temperatura regolabile"
  ],
  "cons": [
   "Portafiltro da 51 mm con cestello pressurizzato: chi vuole fare sul serio dovrà cambiare cestello",
   "Nessun macinacaffè integrato, va comprato a parte per sfruttare le regolazioni",
   "Marchio poco noto in Italia, rete di assistenza da verificare",
   "Tempo di riscaldamento non dichiarato nella scheda"
  ],
  "buyIf": "Vuoi smanettare su temperatura e pre-infusione e sei disposto ad aggiungere un macinacaffè.",
  "avoidIf": "Cerchi il caffè pronto premendo un tasto, senza dosare e pressare ogni volta.",
  "asin": "B0H31Z6LB5",
  "amazonTitle": "HIBREW H10B Lite Macchina da Caffè Espresso Programmabile con Display LED",
  "imgs": [
   "https://m.media-amazon.com/images/I/713iIloaVDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81fKxrwyHmL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7142+DL64+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81LiRR9A6GL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a portafiltro con le regolazioni che di solito si trovano molto più in alto: temperatura 90-96 °C, pre-infusione 1-10 s, volume programmabile, manometro e timer sul display. Ha senso per chi vuole imparare l'estrazione senza spendere oltre 300 euro. Le manca il macinacaffè, e il cestello in dotazione è pressurizzato, quindi il salto di qualità vero arriva solo comprando macinino e cestello non pressurizzato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 333,
  "bsr": 459977,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "kotlie-em308a-4in1",
  "v": "macchine-caffe",
  "brand": "KOTLIE",
  "name": "KOTLIE EM-308A 4 in 1",
  "price": 99.99,
  "quality": 6,
  "checked": "2026-09-12",
  "tagline": "Una sola macchina per cialde ESE, macinato, Nespresso e Dolce Gusto.",
  "attrs": {
   "type": "cialde",
   "grinder": false,
   "milk": "none",
   "tank": 0.8,
   "costPerCup": null,
   "minutes": null,
   "width": 11
  },
  "pros": [
   "Accetta cialde ESE da 44 mm, caffè macinato, capsule Nespresso Original e Dolce Gusto",
   "Preriscaldamento dichiarato in 25 secondi, pompa Ulka da 19 bar",
   "Larga 11 cm con serbatoio removibile da 800 ml",
   "Comandi ridotti a tre pulsanti, con dose d'acqua programmabile"
  ],
  "cons": [
   "Nessun sistema per il latte: niente lancia vapore, niente montalatte",
   "Gli adattatori multipli vanno cambiati a mano a ogni tipo di caffè",
   "Marchio senza storia in Italia e 254 recensioni: dati di affidabilità scarsi",
   "Con quattro sistemi diversi nessuno è ottimizzato al meglio"
  ],
  "buyIf": "In casa girano cialde e capsule di sistemi diversi e non vuoi due macchine sul piano.",
  "avoidIf": "Bevi cappuccino tutte le mattine o vuoi il massimo da un singolo sistema di caffè.",
  "asin": "B0F8J3TPP1",
  "amazonTitle": "KOTLIE Macchina da caffè 4 in 1 per NES/DG/caffè/ESE (44 mm), 19 bar, 800 ml",
  "imgs": [
   "https://m.media-amazon.com/images/I/71DdmRco80L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71y2DkBXzoL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71R7pTsYj+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61-t3xkV2xL._AC_SL1500_.jpg"
  ],
  "summary": "Macchina pensata per chi in casa ha gusti diversi: con gli adattatori in dotazione passa da cialde ESE da 44 mm a caffè macinato, capsule Nespresso Original e Dolce Gusto. Sotto i 100 euro e larga 11 cm, risolve il problema di chi non vuole legarsi a un sistema solo. In cambio non ha alcun dispositivo per il latte e la qualità in tazza resta quella di una macchina economica.",
  "ean": null,
  "eanSource": null,
  "rating": 4.1,
  "reviews": 254,
  "bsr": 52724,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "illy-iperespresso-y33-bianca",
  "v": "macchine-caffe",
  "brand": "illy",
  "name": "illy Iperespresso Y3.3",
  "price": 62.9,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "La capsule illy più stretta, con dose e temperatura programmabili.",
  "attrs": {
   "type": "capsule",
   "grinder": false,
   "milk": "none",
   "tank": null,
   "costPerCup": null,
   "minutes": null,
   "width": 10
  },
  "pros": [
   "Larga 10 cm: fra le capsule più strette in circolazione",
   "Volume e temperatura delle bevande programmabili, con arresto automatico",
   "Doppio tasto espresso e caffè all'americana, con griglia poggiatazza regolabile",
   "Confezione con 14 capsule incluse"
  ],
  "cons": [
   "Sistema chiuso Iperespresso: le capsule si comprano quasi solo da illy, costo per tazza alto",
   "Nessun montalatte: cappuccino e latte vanno preparati a parte",
   "Capacità del serbatoio non dichiarata nella scheda Amazon",
   "Il prezzo delle capsule non è indicato in pagina, quindi il costo a tazza resta da verificare"
  ],
  "buyIf": "Bevi caffè illy, hai poco spazio e vuoi la stessa tazza tutte le mattine senza regolazioni.",
  "avoidIf": "Ti interessa spendere poco per tazza o vuoi scegliere fra decine di marche di capsule compatibili.",
  "asin": "B085235RMW",
  "amazonTitle": "illy Caffè, Macchina da Caffè a Capsule Iperespresso Y3.3 Bianca",
  "imgs": [
   "https://m.media-amazon.com/images/I/61wvwVBDMHS._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61bJVOX4stS._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61j9XQHJk7S._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61HWLkeK9wS._AC_SL1500_.jpg"
  ],
  "summary": "Macchina a capsule del sistema Iperespresso illy, disegnata da Piero Lissoni e larga appena 10 cm. Fa espresso e caffè all'americana con volume e temperatura programmabili, e si spegne da sola a fine erogazione. Va bene a chi beve già illy e vuole costanza in tazza senza pensieri. Il vincolo vero è il sistema chiuso: le capsule le detta illy, e non c'è nulla per il latte.",
  "ean": null,
  "eanSource": null,
  "rating": 4.2,
  "reviews": 282,
  "bsr": 15097,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ariete-1358-moka-aroma",
  "v": "macchine-caffe",
  "brand": "Ariete",
  "name": "Ariete 1358 Moka Aroma",
  "price": 39,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "La moka senza fornello, con base cordless e spegnimento automatico.",
  "attrs": {
   "type": "moka",
   "grinder": false,
   "milk": "none",
   "tank": null,
   "costPerCup": null,
   "minutes": null,
   "width": 13.5
  },
  "pros": [
   "Base cordless: la caraffa si stacca e si porta in tavola",
   "Autospegnimento e mantenimento in temperatura dichiarato per 30 minuti",
   "Fa 2 o 4 tazze con l'adattatore incluso, senza fornello",
   "Pesa 1,14 kg e costa meno di 40 euro"
  ],
  "cons": [
   "È una moka, non una macchina espresso: nessuna crema, nessuna pressione",
   "Corpo in plastica e non lavabile in lavastoviglie",
   "Solo tre foto sulla scheda e nessuna indicazione sui tempi di preparazione"
  ],
  "buyIf": "Vuoi il caffè della moka dove non hai un fornello e ti serve che si spenga da sola.",
  "avoidIf": "Cerchi l'espresso con la crema: questa è una moka, il risultato è un altro caffè.",
  "asin": "B00WS9912Y",
  "amazonTitle": "Ariete 1358 Moka Aroma - Moka elettrica 2/4 tazze - Base cordless - Autospegnimento - Mantenimento temperatura per 30' - 400 Watt - Bianco",
  "imgs": [
   "https://m.media-amazon.com/images/I/51IOMU4UE8L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/31Zbq4eOS6L._AC_.jpg",
   "https://m.media-amazon.com/images/I/21ngCGFRfoL._AC_.jpg"
  ],
  "summary": "Moka elettrica da 400 W per 2 o 4 tazze: si riempie come una moka normale ma si attacca alla corrente, si spegne da sola e tiene il caffè caldo per mezz'ora. È la scelta di chi vuole il caffè di casa in ufficio, in camera o dove non c'è un fornello. Non è un'alternativa all'espresso: niente pompa, niente crema, e il corpo in plastica va lavato a mano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 2096,
  "bsr": 1926,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "naspaluro-h04-big-tall-200kg",
  "v": "sedie-ergonomiche",
  "brand": "naspaluro",
  "name": "naspaluro H04 Big & Tall",
  "price": 149.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Portata 200 kg e poggiapiedi retrattile, per corporature che le sedie normali non reggono.",
  "attrs": {
   "lumbar": "fixed",
   "headrest": true,
   "armrests": null,
   "maxWeight": 200,
   "hMin": null,
   "hMax": null,
   "material": "pelle",
   "recline": 135,
   "footrest": true,
   "seatDepthAdj": null
  },
  "pros": [
   "Portata dichiarata 200 kg, fra le più alte della categoria",
   "Poggiapiedi retrattile integrato e reclinazione fino a 135 gradi",
   "Schienale alto da 140 cm totali, pensato per chi supera le misure standard",
   "Cilindro a gas classe 3 certificato SGS e certificazione BIFMA dichiarate in pagina",
   "Poggiatesta regolabile e base in metallo rinforzato"
  ],
  "cons": [
   "Braccioli solo imbottiti: nessuna direzione di regolazione dichiarata dal produttore",
   "Il supporto lombare è un cuscino, non è dichiarato regolabile in altezza o profondità",
   "Rivestimento in pelle PU: d'estate scalda più di una rete",
   "29 kg di peso, spostarla da soli non è comodo",
   "Nessuna altezza utente dichiarata: le misure vanno confrontate a mano"
  ],
  "buyIf": "Sei di corporatura robusta o alta e le sedie da ufficio standard ti sembrano sempre strette e instabili.",
  "avoidIf": "Lavori molte ore e vuoi regolare braccioli e lombare al millimetro, oppure soffri il caldo sulla seduta.",
  "asin": "B0HGXF6YZP",
  "amazonTitle": "naspaluro Sedia Ufficio, Sedia Ergonomica in Pelle PU per Persone Grandi e Alte, Sedia Gaming con Schienale Alto Regolabile 200kg, Supporto Lombare e Poggiatesta Regolabile per Casa/Ufficio",
  "imgs": [
   "https://m.media-amazon.com/images/I/71Tbv79HLVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71EQQVuaGQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71s5jX3jM6L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71dg8cEUhOL._AC_SL1500_.jpg"
  ],
  "summary": "Poltrona direzionale in pelle PU costruita per chi è alto o pesante: 200 kg di portata dichiarata, schienale da 140 cm e poggiapiedi retrattile per le pause. La reclinazione arriva a 135 gradi e il cilindro a gas è certificato SGS. In cambio rinuncia alla regolazione fine: i braccioli non hanno direzioni di regolazione dichiarate e il lombare è un cuscino fisso.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 219,
  "bsr": 146426,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "devaise-poggiapiedi-180kg-rete",
  "v": "sedie-ergonomiche",
  "brand": "DEVAISE",
  "name": "DEVAISE Rete con Poggiapiedi",
  "price": 119.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Rete integrale, poggiapiedi e 180 kg di portata sotto i 120 euro.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 3,
   "maxWeight": 180,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 135,
   "footrest": true,
   "seatDepthAdj": null
  },
  "pros": [
   "Seduta e schienale entrambi in rete: niente imbottitura che trattiene il calore",
   "Poggiapiedi integrato e blocco della reclinazione su 90, 110 e 135 gradi",
   "Braccioli 3D e poggiatesta 3D regolabile fino a 10 cm in altezza",
   "Portata dichiarata 180 kg con pistone SGS classe 4 e TÜV",
   "Sotto i 120 euro con poggiapiedi, combinazione rara"
  ],
  "cons": [
   "Solo 81 recensioni: storico di feedback ancora corto per giudicare la durata",
   "La rete sulla seduta è meno accogliente della schiuma per chi sta seduto senza pause",
   "Nessuna altezza utente dichiarata dal produttore",
   "Reclinazione bloccabile solo su tre posizioni fisse, niente regolazione continua"
  ],
  "buyIf": "Vuoi una poltrona che ti lasci anche reclinare e appoggiare i piedi, senza rinunciare alla traspirazione.",
  "avoidIf": "Vuoi comprare un modello con anni di recensioni alle spalle o preferisci una seduta imbottita.",
  "asin": "B0F66SQHS7",
  "amazonTitle": "DEVAISE Sedia da Ufficio Ergonomica con Poggiapiedi, dotata di schienale a sezioni, poggiatesta e supporto lombare regolabili, Braccioli 3D, funzione Dondolo, Max 180 kg, schienale alto, per l’ufficio",
  "imgs": [
   "https://m.media-amazon.com/images/I/81kb0Ume40L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/812sImRrymL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81xDU6eUb0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81uAuqaO14L._AC_SL1500_.jpg"
  ],
  "summary": "Sedia interamente in rete 3D con poggiapiedi estraibile e reclinazione bloccabile a 90, 110 e 135 gradi, pensata per chi alterna lavoro e pause sulla stessa poltrona. Portata dichiarata 180 kg, braccioli 3D e poggiatesta a doppio snodo. Il limite è lo storico: poco più di ottanta recensioni, quindi sulla tenuta nel tempo si va per fiducia.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 81,
  "bsr": 25637,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "brthory-6908-esecutiva-200kg",
  "v": "sedie-ergonomiche",
  "brand": "BRTHORY",
  "name": "BRTHORY 6908 Esecutiva",
  "price": 229.99,
  "quality": 6,
  "checked": "2026-09-12",
  "tagline": "Molle insacchettate nella seduta e 200 kg di portata, per chi sfonda le sedie normali.",
  "attrs": {
   "lumbar": "adj",
   "headrest": false,
   "armrests": null,
   "maxWeight": 200,
   "hMin": null,
   "hMax": null,
   "material": "pelle",
   "recline": 135,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Portata dichiarata 200 kg con base metallica e pistone a gas classe 4",
   "Seduta a molle insacchettate, non solo schiuma: cede meno nel tempo sotto carico alto",
   "Dondolo regolabile in tensione fra 90 e 135 gradi",
   "Zona lombare in pelle perforata, dichiarata traspirante",
   "Ruote in gomma, adatte anche al parquet senza tappetino"
  ],
  "cons": [
   "Nessun poggiatesta: lo schienale finisce all'altezza delle spalle",
   "Braccioli imbottiti senza direzioni di regolazione dichiarate",
   "133 recensioni e posizionamento di vendita basso: marchio poco conosciuto in Italia",
   "230 euro sono tanti per una sedia senza braccioli regolabili"
  ],
  "buyIf": "Superi i 120 kg e hai già visto cedere la seduta di più di una sedia da ufficio economica.",
  "avoidIf": "Ti serve il poggiatesta o vuoi braccioli che si regolino in altezza e profondità.",
  "asin": "B0DLMYF8M2",
  "amazonTitle": "Sedia da Ufficio Esecutiva 200 kg con Supporto Lombare, Schienale Alto, Imbottitura Spessa, Robusta Base in Metallo, Ruote Silenziose, Sedia da Scrivania Ergonomica",
  "imgs": [
   "https://m.media-amazon.com/images/I/71H1uM-akrL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71g-ry3cHCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71UEL+T7z7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81v4NStGNpL._AC_SL1500_.jpg"
  ],
  "summary": "Poltrona direzionale in pelle sintetica dichiarata fino a 200 kg, con base in metallo, pistone classe 4 e seduta a molle insacchettate invece della sola schiuma: è la differenza che conta quando il peso alto schiaccia il cuscino in pochi mesi. Dondola fra 90 e 135 gradi con tensione regolabile. Mancano però poggiatesta e braccioli regolabili, e a 230 euro si sente.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 133,
  "bsr": 487102,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "durrafy-d02-rete-150kg",
  "v": "sedie-ergonomiche",
  "brand": "Durrafy",
  "name": "Durrafy D02 Rete",
  "price": 139.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Il lombare imbottito e regolabile su 5 cm è la parte che di solito si taglia a questo prezzo.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 1,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 130,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Quasi 800 recensioni: fra le più collaudate della fascia sotto i 150 euro",
   "Supporto lombare regolabile su 5 cm, imbottito e non solo un rilievo della rete",
   "Seduta con schiuma da 7 cm e bordo a cascata, meno pressione sotto le cosce",
   "Portata dichiarata 150 kg con certificazioni BIFMA e SGS in pagina",
   "Poggiatesta regolabile in altezza e angolo"
  ],
  "cons": [
   "Braccioli regolabili solo in altezza (6 cm): niente profondità né rotazione",
   "Seduta imbottita sotto lo schienale in rete: la parte bassa resta più calda",
   "Reclinazione ferma a 130 gradi e bloccabile su tre posizioni",
   "Nessuna altezza utente dichiarata dal produttore"
  ],
  "buyIf": "Vuoi una rete affidabile per otto ore al giorno e ti fidi solo di modelli con molte recensioni.",
  "avoidIf": "Digiti molto e hai bisogno di braccioli che si regolino anche in profondità e rotazione.",
  "asin": "B0BW8Z7Q8H",
  "amazonTitle": "Durrafy Sedia Ufficio Ergonomica, Sedia Scrivania con 2D Poggiatesta, Supporto Lombare Regolabile und Braccioli, 90°-130° Reclinabile Poltrona Ufficio in Rete Traspirante per la Casa, Ufficio e Gaming",
  "imgs": [
   "https://m.media-amazon.com/images/I/61z9pngMwBL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71cnn-yhK1L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71JnKnQzuUL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71wrR5WSMLL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia a rete da 140 euro con quasi ottocento recensioni alle spalle, quindi con uno storico d'uso vero. Il supporto lombare è imbottito e scorre su 5 cm, la seduta ha 7 cm di schiuma con bordo a cascata e la portata dichiarata è 150 kg. Il compromesso sta nei braccioli, che si alzano e si abbassano ma non si spostano avanti o lateralmente.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 798,
  "bsr": 49058,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "naspaluro-f03-rete-135-gradi",
  "v": "sedie-ergonomiche",
  "brand": "naspaluro",
  "name": "naspaluro F03 Rete",
  "price": 94.99,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Braccioli 3D e 135 gradi di reclinazione sotto i 100 euro.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 3,
   "maxWeight": 150,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 135,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Braccioli 3D che scorrono avanti e indietro e ruotano, sotto i 100 euro",
   "Reclinazione dichiarata fino a 135 gradi su tre posizioni (90, 105, 135)",
   "Solo 13,4 kg: si sposta e si monta senza aiuto",
   "Schienale in rete e supporto lombare regolabile",
   "Ricambi dichiarati disponibili 2 anni, indicazione rara in questa fascia"
  ],
  "cons": [
   "Portata dichiarata in modo incoerente: il titolo dice 150 kg, la descrizione 180 kg",
   "Schienale interno da 50 cm: chi è molto alto resta scoperto sulle spalle",
   "158 recensioni, storico ancora medio",
   "Niente poggiapiedi e nessuna altezza utente dichiarata"
  ],
  "buyIf": "Hai meno di 100 euro di budget e non vuoi rinunciare ai braccioli regolabili su più assi.",
  "avoidIf": "Sei molto alto o pesante: lo schienale è corto e la portata è dichiarata in modo contraddittorio.",
  "asin": "B0H6ZYNKT4",
  "amazonTitle": "naspaluro Sedia Ufficio Ergonomica, Supporto Lombare, 150KG",
  "imgs": [
   "https://m.media-amazon.com/images/I/71+19Wa1p7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71SvUAfVKDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Jo2pfyukL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71UQK8UwTSL._AC_SL1500_.jpg"
  ],
  "summary": "Sedia a rete leggera che a meno di 100 euro porta braccioli 3D, lombare regolabile e reclinazione fino a 135 gradi, dotazione che in questa fascia di prezzo si trova raramente insieme. Pesa 13,4 kg, quindi si monta e si sposta da soli. Attenzione però alla portata, dichiarata 150 kg nel titolo e 180 kg nella descrizione: due numeri diversi sulla stessa pagina.",
  "ean": "1789201357029",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 158,
  "bsr": 53240,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "huanuo-msoc10b-rete-economica",
  "v": "sedie-ergonomiche",
  "brand": "HUANUO",
  "name": "HUANUO MSOC10B",
  "price": 81.21,
  "quality": 7,
  "checked": "2026-09-12",
  "tagline": "Lombare su due assi e braccioli 3D per poco più di 80 euro.",
  "attrs": {
   "lumbar": "adj",
   "headrest": true,
   "armrests": 3,
   "maxWeight": 136,
   "hMin": null,
   "hMax": null,
   "material": "mesh",
   "recline": 120,
   "footrest": false,
   "seatDepthAdj": null
  },
  "pros": [
   "Lombare che si sposta su due assi: 3 cm avanti e indietro, 5,5 cm in altezza",
   "Braccioli 3D con 5 cm di scorrimento e 15 gradi di rotazione, ribaltabili a 90 gradi",
   "Poggiatesta regolabile in 2D",
   "Poco più di 80 euro con 229 recensioni e valutazione 4,5",
   "I braccioli alzati permettono di infilare la sedia sotto la scrivania"
  ],
  "cons": [
   "Reclinazione ferma a 120 gradi: non è una sedia da pausa reclinata",
   "Portata dichiarata 136 kg, la più bassa di questa selezione",
   "Nessun poggiapiedi e nessuna altezza utente dichiarata",
   "Schienale in rete ma seduta in schiuma: sotto le cosce non traspira"
  ],
  "buyIf": "Ti serve una seconda postazione o una prima sedia decente spendendo il minimo indispensabile.",
  "avoidIf": "Pesi più di 130 kg o vuoi reclinarti davvero all'indietro durante le pause.",
  "asin": "B0FQ4LCBY5",
  "amazonTitle": "HUANUO Sedia Ufficio Ergonomica, Sedia Scrivania Schienale Alto e Supporto Lombare e Poggiatesta Regolabili, Comoda Sedia Ufficio Braccioli 3D, Sedia Ergonomica Ufficio Domestico, Carico Max 136kg",
  "imgs": [
   "https://m.media-amazon.com/images/I/81oBQHm8zqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71t4RgHKtML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Q8TyasdSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71UjYFDpu0L._AC_SL1500_.jpg"
  ],
  "summary": "La sedia da mettere in casa quando il budget è ottanta euro e non si vuole scendere sotto la soglia della regolabilità vera: lombare che si muove sia in altezza sia in profondità e braccioli 3D ribaltabili, cose che a questo prezzo di solito spariscono. Resta una sedia da lavoro, non da relax: si reclina solo fino a 120 gradi e la portata dichiarata si ferma a 136 kg.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 229,
  "bsr": 40518,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "dewalt-dcd791d2-kit",
  "v": "utensili-elettrici",
  "brand": "DeWalt",
  "name": "DeWalt DCD791D2 (2x2,0 Ah, valigetta)",
  "price": 216.88,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Trapano avvitatore brushless da cantiere, compatto, con due batterie XR incluse.",
  "attrs": {
   "torque": 70,
   "volts": 18,
   "percussion": false,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": 1.5,
   "eco": "DeWalt XR 18V",
   "impact": false
  },
  "pros": [
   "Motore brushless e 70 Nm dichiarati in un corpo compatto",
   "Due batterie XR 18V e caricabatterie nel kit",
   "Trasmissione a due velocità in metallo, 15 posizioni di coppia",
   "Batterie compatibili con tutta la gamma DeWalt XR 18V"
  ],
  "cons": [
   "Senza percussione: nel cemento e nei mattoni pieni fa fatica",
   "Batterie da 2,0 Ah: per lavori lunghi serve una terza batteria o tagli più grandi",
   "Rating 4,3, un gradino sotto altri kit della fascia"
  ],
  "buyIf": "Avviti e fori legno e metallo con continuità e vuoi entrare nell'ecosistema DeWalt XR 18V.",
  "avoidIf": "Devi forare spesso muri in cemento o mattoni pieni: qui manca la percussione.",
  "asin": "B01BU0GEXK",
  "amazonTitle": "DEWALT XR 18V Trapano Avvitatore Brushless, Ultra Compatto, 2x Batterie 2Ah & Caricabatterie, Coppia 70Nm, Luce LED da Lavoro, Valigetta Heavy Duty, Utensile Professionale – DCD791D2-QW",
  "imgs": [
   "https://m.media-amazon.com/images/I/719snUksSEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Ae3EtlyCL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71tb6bjdBfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91tYdnA1ZvL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano avvitatore 18V brushless della serie XR, venduto in kit con due batterie da 2,0 Ah, caricabatterie e valigetta. Dichiara 70 Nm e 1,5 kg: adatto a chi monta strutture, arreda o lavora legno e metallo tutti i giorni. Non ha la percussione, quindi per forare il cemento serve un altro utensile, e le batterie da 2,0 Ah durano poco sotto carico pesante.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 1205,
  "bsr": 10945,
  "bsrCat": "Fai da te"
 },
 {
  "id": "bosch-professional-gsb-18v-45-kit",
  "v": "utensili-elettrici",
  "brand": "Bosch Professional",
  "name": "Bosch Professional GSB 18V-45 (2x2,0 Ah, L-Case)",
  "price": 209.9,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Kit Bosch Professional brushless con percussione, compatto e con due batterie.",
  "attrs": {
   "torque": 45,
   "volts": 18,
   "percussion": true,
   "sds": false,
   "brushless": true,
   "batteryIncl": true,
   "weight": 1,
   "eco": "Bosch Professional 18V",
   "impact": false
  },
  "pros": [
   "Motore brushless con percussione, testa lunga 174 mm",
   "Due batterie da 2,0 Ah, caricabatterie, accessori e L-Case",
   "Batterie compatibili con Bosch Professional 18V e il sistema AMPShare",
   "Mandrino in metallo da 13 mm"
  ],
  "cons": [
   "45 Nm dichiarati: meno spinta dei kit brushless di fascia più alta",
   "Batterie da 2,0 Ah, autonomia limitata sui lavori pesanti",
   "Set esclusivo Amazon: dotazione diversa dal kit L-BOXX venduto in negozio"
  ],
  "buyIf": "Vuoi un kit professionale leggero con percussione ed entrare nel sistema Bosch 18V AMPShare.",
  "avoidIf": "Ti servono coppie alte per viti lunghe o foretti grossi: meglio un modello da 60 Nm in su.",
  "asin": "B0BC963C58",
  "amazonTitle": "Bosch Professional 18V System Trapano avvitatore con percussione a batt. GSB 18V-45 (velocità di rotazione di 1.900 giri/min, 2 batt. da 2.0 Ah, accessori, GAL 18V-20, L-Case) - Amazon Exclusive Set",
  "imgs": [
   "https://m.media-amazon.com/images/I/71665yoxvvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71HW+Em1mAS._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51hejjX4jtL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61NzSVbKqNL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano avvitatore a percussione 18V con motore brushless, in kit con due batterie da 2,0 Ah, caricabatterie GAL 18V-20, accessori e valigetta. Dichiara 45 Nm e circa 1 kg: pensato per installatori e manutentori che vogliono un utensile leggero e un sistema batterie professionale. La coppia è inferiore ai modelli di punta, quindi su punte grandi o viti lunghe nel legno duro rallenta.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 859,
  "bsr": 3936,
  "bsrCat": "Fai da te"
 },
 {
  "id": "dewalt-d25133k-sds-plus",
  "v": "utensili-elettrici",
  "brand": "DeWalt",
  "name": "DeWalt D25133K tassellatore SDS-Plus",
  "price": 144.45,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Tassellatore SDS-Plus a filo da 800 W per chi fora cemento con regolarità.",
  "attrs": {
   "torque": null,
   "volts": null,
   "percussion": true,
   "sds": true,
   "brushless": null,
   "batteryIncl": false,
   "weight": null,
   "eco": null,
   "impact": false
  },
  "pros": [
   "Attacco SDS-Plus, 2,6 J e 800 W: fori per tasselli fino a 26 mm nel calcestruzzo",
   "Tre modalità: foratura, percussione, scalpellatura leggera",
   "Frizione meccanica di sicurezza contro i contraccolpi",
   "Valigetta TSTAK, impugnatura laterale e stop di profondità inclusi"
  ],
  "cons": [
   "A filo: serve sempre una presa o una prolunga",
   "Peso e coppia in scheda non affidabili, quindi non riportati",
   "Più costoso dei tassellatori a filo di fascia hobby"
  ],
  "buyIf": "Fori spesso calcestruzzo o pietra e vuoi un SDS-Plus di marca con frizione di sicurezza.",
  "avoidIf": "Cerchi un utensile a batteria o fori solo legno e cartongesso.",
  "asin": "B00WB1OSPO",
  "amazonTitle": "DEWALT Tassellatore SDS-Plus 3 modalità 26mm 2.6J 800W, D25133K-QS",
  "imgs": [
   "https://m.media-amazon.com/images/I/81i3834OVgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71wtDxg9yQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61bYSgubzvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81NjApCaiRL._AC_SL1500_.jpg"
  ],
  "summary": "Tassellatore a filo con attacco SDS-Plus, 800 W e 2,6 J di energia d'impatto, tre modalità di lavoro e valigetta TSTAK. Serve a chi deve fissare tasselli nel calcestruzzo, aprire tracce leggere o forare pietra, dove un trapano a percussione rallenta molto. Resta legato alla presa e il peso dichiarato su Amazon non è coerente con il prodotto, quindi va considerato un utensile da tenere con due mani.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 424,
  "bsr": 5513,
  "bsrCat": "Fai da te"
 },
 {
  "id": "makita-dtd153z",
  "v": "utensili-elettrici",
  "brand": "Makita",
  "name": "Makita DTD153Z avvitatore a impulsi (solo corpo)",
  "price": 92.88,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Avvitatore a impulsi LXT da 170 Nm, per chi ha già batterie Makita.",
  "attrs": {
   "torque": 170,
   "volts": 18,
   "percussion": false,
   "sds": false,
   "brushless": null,
   "batteryIncl": false,
   "weight": 0.9,
   "eco": "Makita LXT",
   "impact": true
  },
  "pros": [
   "170 Nm dichiarati: viti lunghe e bulloni da M5 a M14",
   "Circa 0,9 kg senza batteria, si usa bene anche in alto",
   "Batterie Makita LXT 18V, una delle gamme più diffuse",
   "Oltre 3.400 recensioni con media 4,7"
  ],
  "cons": [
   "Solo corpo: batteria e caricabatterie si comprano a parte",
   "Attacco esagonale da 1/4: non sostituisce un trapano per forare",
   "Scheda Amazon povera di dettagli su velocità e modalità"
  ],
  "buyIf": "Hai già batterie Makita LXT e avviti spesso viti lunghe, bulloni o strutture in legno.",
  "avoidIf": "Non hai batterie Makita o ti serve un solo utensile per forare e avvitare.",
  "asin": "B01LQUIGL2",
  "amazonTitle": "Makita DTD153Z Avvitatore ad Impulsi LXT Batteria 18V Solo Corpo",
  "imgs": [
   "https://m.media-amazon.com/images/I/61w++Fsvj9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Cz9FQrirL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/512+O6xbqRL._AC_SL1000_.jpg"
  ],
  "summary": "Avvitatore a impulsi 18V della gamma Makita LXT venduto senza batteria né caricabatterie. Dichiara 170 Nm e fino a 3.600 giri/min: serve per viti lunghe nel legno, bulloni e lavori ripetitivi dove un trapano avvitatore stanca il polso. Conviene solo a chi possiede già batterie LXT, altrimenti il costo totale sale parecchio. Non fora: va affiancato a un trapano.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 3495,
  "bsr": 3543,
  "bsrCat": "Fai da te"
 },
 {
  "id": "einhell-tc-id-650-e",
  "v": "utensili-elettrici",
  "brand": "Einhell",
  "name": "Einhell TC-ID 650 E",
  "price": 32.6,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Trapano a percussione a filo economico per appendere e montare in casa.",
  "attrs": {
   "torque": null,
   "volts": null,
   "percussion": true,
   "sds": false,
   "brushless": null,
   "batteryIncl": false,
   "weight": 1.9,
   "eco": null,
   "impact": false
  },
  "pros": [
   "Prezzo basso per un trapano a percussione di marca",
   "650 W, mandrino autoserrante da 13 mm, reversibile",
   "Arresto di profondità e gancio da cintura",
   "Oltre 4.400 recensioni con media 4,5"
  ],
  "cons": [
   "A filo e senza frizione: poco adatto ad avvitare con precisione",
   "Una sola velocità meccanica, fori nel calcestruzzo fino a 13 mm",
   "Nessuna valigetta inclusa"
  ],
  "buyIf": "Ti serve un trapano per qualche foro all'anno in casa e vuoi spendere il minimo.",
  "avoidIf": "Vuoi anche avvitare mobili con precisione o lavorare lontano da una presa.",
  "asin": "B00V3HTTWO",
  "amazonTitle": "Einhell Trapano a percussione TC-ID 650 E",
  "imgs": [
   "https://m.media-amazon.com/images/I/71u8iFJhkiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71shj5wAJKL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61PWFnnsClL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61eTOB6IoLL._AC_SL1500_.jpg"
  ],
  "summary": "Trapano a percussione a filo da 650 W con mandrino autoserrante da 13 mm, regolazione elettronica dei giri e rotazione reversibile. È pensato per l'uso occasionale in casa: appendere mensole, quadri, tende, qualche foro nel muro. Costa poco e non ha batterie da mantenere. Gli mancano la frizione per avvitare con controllo e la potenza per fori grandi nel cemento armato.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 4418,
  "bsr": 4077,
  "bsrCat": "Fai da te"
 },
 {
  "id": "blackdecker-beh710sa32",
  "v": "utensili-elettrici",
  "brand": "Black+Decker",
  "name": "Black+Decker BEH710 con 32 accessori",
  "price": 68.07,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Trapano a percussione a filo classico, con impugnatura laterale e set di accessori.",
  "attrs": {
   "torque": 23.3,
   "volts": null,
   "percussion": true,
   "sds": false,
   "brushless": null,
   "batteryIncl": false,
   "weight": null,
   "eco": null,
   "impact": false
  },
  "pros": [
   "710 W e fino a 47.600 colpi/min dichiarati per muratura",
   "Velocità variabile fino a 2.800 giri/min e pulsante di blocco",
   "Impugnatura laterale, 32 accessori e borsa inclusi",
   "Foratura dichiarata fino a 25 mm nel legno e 13 mm nel metallo"
  ],
  "cons": [
   "Mandrino a chiave: cambiare punta è più lento di un autoserrante",
   "A filo, legato alla presa",
   "Peso dichiarato in scheda non attendibile, quindi non riportato"
  ],
  "buyIf": "Fori spesso muri in casa e vuoi un trapano a filo con accessori già inclusi.",
  "avoidIf": "Ti serve un utensile senza fili o cambi punta di continuo e non vuoi la chiave del mandrino.",
  "asin": "B07KYQH55Y",
  "amazonTitle": "BLACK+DECKER Trapano a percussione a filo 710W azione martellante ad alte prestazioni per muratura metallo e legno velocità variabile per precisione include 32 accessori in borsa morbida BEH710SA32-QS",
  "imgs": [
   "https://m.media-amazon.com/images/I/61XW0o6vOrL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71gQ6l7ZNsL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71efDG2GhQL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71dUuxKF2nL._AC_SL1000_.jpg"
  ],
  "summary": "Trapano a percussione a filo da 710 W con velocità variabile, blocco dell'interruttore per uso continuo, impugnatura laterale e 32 accessori in borsa. Va bene per chi fa lavori di casa più frequenti su muratura, legno e metallo e vuole un kit pronto all'uso. Il mandrino a chiave rallenta i cambi punta e, senza batteria, serve sempre una presa vicina.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 1301,
  "bsr": 1353,
  "bsrCat": "Fai da te"
 },
 {
  "id": "trotec-ttk-66-e",
  "v": "deumidificatori",
  "brand": "TROTEC",
  "name": "Trotec TTK 66 E",
  "price": 204.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "24 litri al giorno per taverna, cantina o casa grande, con igrostato",
  "attrs": {
   "liters": 24,
   "tank": 3,
   "area": 50,
   "noise": null,
   "drain": null,
   "laundry": true,
   "weight": 15,
   "wheels": null,
   "hygrostat": true,
   "power": 440
  },
  "pros": [
   "24 litri al giorno dichiarati, per ambienti fino a 50 m²",
   "Igrostato con impostazione dell'umidità e timer",
   "Funzione asciugatura bucato",
   "Oltre mille recensioni con media 4,5"
  ],
  "cons": [
   "Serbatoio da 3 litri: a pieno regime va svuotato spesso se non si usa uno scarico",
   "Rumorosità e scarico continuo non dichiarati in pagina",
   "15 kg, ruote non dichiarate"
  ],
  "buyIf": "Devi asciugare una taverna, una cantina o una zona giorno ampia e ti serve capacità vera.",
  "avoidIf": "Lo vuoi in camera da letto di notte o ti serve la certezza dello scarico continuo.",
  "asin": "B06Y5PTJFN",
  "amazonTitle": "TROTEC TTK 66 E deumidificatore casa e cantina, 24 l/24 h",
  "imgs": [
   "https://m.media-amazon.com/images/I/61A68GMjm+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/41JyqqECHoL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/414+zfAwYRL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/418UIw5YhNL._AC_SL1000_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 24 litri al giorno per ambienti fino a 50 m², pensato per casa e cantina. Ha igrostato, timer e modalità bucato. Pesa 15 kg e il serbatoio è di soli 3 litri, quindi in una taverna molto umida va svuotato più volte al giorno; rumorosità e scarico continuo non sono dichiarati.",
  "ean": "4052138015117",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 1047,
  "bsr": 34184,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "meaco-arete-one-12l",
  "v": "deumidificatori",
  "brand": "Meaco",
  "name": "Meaco Arete One 12L",
  "price": 362.52,
  "quality": 7.5,
  "checked": "2026-09-13",
  "tagline": "Compressore da 35 dB dichiarati con filtro HEPA, fatto per dormirci accanto",
  "attrs": {
   "liters": 12,
   "tank": 2.5,
   "area": 50,
   "noise": 35,
   "drain": null,
   "laundry": true,
   "weight": 11,
   "wheels": true,
   "hygrostat": null,
   "power": 136
  },
  "pros": [
   "35 dB dichiarati, adatto alla camera da letto",
   "Consumo dichiarato di 136 W",
   "Filtro HEPA H13 per purificare l'aria",
   "Modalità notte e modalità lavanderia, ruote nascoste"
  ],
  "cons": [
   "Prezzo alto per 12 litri al giorno",
   "Scarico continuo non dichiarato in pagina",
   "Pochissime vendite recenti su Amazon.it (BSR oltre il milione)"
  ],
  "buyIf": "Cerchi un deumidificatore da tenere acceso di notte in camera e sei disposto a pagare il silenzio.",
  "avoidIf": "Hai una taverna o una casa molto umida: 12 litri al giorno a questo prezzo non convengono.",
  "asin": "B09TBKCCSS",
  "amazonTitle": "Meaco Dry Arete One - Deumidificatore doppio da 12 l e purificatore d'aria HEPA per case di dimensioni normali, previene l'umidità e la condensa, ultra silenzioso, modalità lavanderia a basso consumo",
  "imgs": [
   "https://m.media-amazon.com/images/I/51wrN5ETsQL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71sfjLlZ4KL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61BIV95r1dL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/715O2DipD2L._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 12 litri al giorno con filtro HEPA H13, dichiarato a 35 dB e 136 W. Va bene in camera da letto o in un appartamento di dimensioni normali, dove silenzio e consumi contano più della capacità. Costa molto per i litri che toglie e la pagina non dichiara lo scarico continuo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 710,
  "bsr": 1004591,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "delonghi-tasciugo-ariadry-light-dns80",
  "v": "deumidificatori",
  "brand": "De'Longhi",
  "name": "De'Longhi Tasciugo AriaDry Light DNS80",
  "price": 335.49,
  "quality": 6.5,
  "checked": "2026-09-13",
  "tagline": "Zeolite da 7,5 L al giorno per ambienti freddi, dove il compressore rende poco",
  "attrs": {
   "liters": 7.5,
   "tank": null,
   "area": null,
   "noise": 34,
   "drain": true,
   "laundry": true,
   "weight": 6.5,
   "wheels": null,
   "hygrostat": null,
   "power": 700
  },
  "pros": [
   "Zeolite senza compressore: lavora anche a basse temperature",
   "34 dB(A) dichiarati",
   "Leggero, 6,5 kg, con tubo di scarico incluso",
   "Ionizzatore, flusso d'aria oscillante e funzione asciugabiancheria"
  ],
  "cons": [
   "Consumo dichiarato di 700 W, molto più di un compressore a pari litri",
   "Costa circa 95 euro più del DNS65 per 1,5 litri al giorno in più",
   "Le recensioni sono condivise con il DNS65 e la pagina ha dati contraddittori su serbatoio e superficie"
  ],
  "buyIf": "Devi deumidificare una stanza fredda o non riscaldata e vuoi un apparecchio leggero e silenzioso.",
  "avoidIf": "La stanza è riscaldata: un compressore toglie più acqua con meno corrente e meno soldi.",
  "asin": "B07HGFBXT8",
  "amazonTitle": "De'Longhi Tasciugo AriaDry Light - Deumidificatore Casa Portatile, Tecnologia Zeolite e Ionizzatore, 7.5L/Giorno, Asciugabiancheria, Antimuffa, Silenzioso, Funzione Swing, Timer, Grigio (DNS80)",
  "imgs": [
   "https://m.media-amazon.com/images/I/51gxPyhmWFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/618HkpFCliL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61YQ6VKAPBL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61ITuA1d5gL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a zeolite senza compressore da 7,5 litri al giorno, dichiarato a 34 dB(A). Serve in ambienti non riscaldati come taverne fredde, cantine o case al mare d'inverno, dove un compressore perde efficienza. Consuma 700 W e costa sensibilmente più del DNS65, con cui condivide le recensioni; serbatoio e superficie in pagina non sono coerenti.",
  "ean": "8004399481039",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.3,
  "reviews": 3933,
  "bsr": 6846,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "probreeze-pb-d-27-12l",
  "v": "deumidificatori",
  "brand": "Pro Breeze",
  "name": "Pro Breeze 12L compressore (PB-D-27)",
  "price": 105.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Compressore da 12 L al giorno con scarico continuo a poco più di 100 euro",
  "attrs": {
   "liters": 12,
   "tank": 2,
   "area": 20,
   "noise": 42,
   "drain": true,
   "laundry": true,
   "weight": null,
   "wheels": true,
   "hygrostat": true,
   "power": null
  },
  "pros": [
   "Compressore da 12 litri al giorno sotto i 110 euro",
   "Umidità impostabile dal 30 al 90%, con display",
   "Tubo per scarico continuo incluso",
   "Compatto, con 4 ruote e timer 24 ore"
  ],
  "cons": [
   "Rumore dichiarato fino a 42 dB, non adatto a chi dorme leggero",
   "Serbatoio da 2 litri",
   "Peso e potenza non dichiarati; la scheda tecnica riporta anche un valore di 20 litri in contraddizione con il titolo"
  ],
  "buyIf": "Vuoi un compressore vero per una stanza sola spendendo poco più di 100 euro.",
  "avoidIf": "Ti serve silenzio in camera di notte o devi coprire più stanze.",
  "asin": "B0D1RBCYZ5",
  "amazonTitle": "Pro Breeze Deumidificatore a Compressore 12L/Giorno, Copertura fino a 20 m², Serbatoio 2L, Antimuffa Casa, Bagno e Camera da Letto, Portatile, Silenzioso, Sensore Umidità Auto, Bucato, Timer 24H",
  "imgs": [
   "https://m.media-amazon.com/images/I/51QkZGU5f4L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71181RwrYqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71LYTuzfqVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71XhstL9W5L._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore compatto da 12 litri al giorno per stanze fino a 20 m², con igrostato, timer, modalità bucato e tubo per lo scarico continuo. È una scelta economica per bagno, studio o una camera piccola. Il rumore dichiarato arriva a 42 dB e il serbatoio è da 2 litri; peso e potenza non sono indicati.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 808,
  "bsr": 3596,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "shinco-10l-yd",
  "v": "deumidificatori",
  "brand": "Shinco",
  "name": "Shinco 10L",
  "price": 99.99,
  "quality": 7.5,
  "checked": "2026-09-13",
  "tagline": "Compressore da 10 L al giorno con igrostato e scarico continuo sotto i 100 euro",
  "attrs": {
   "liters": 10,
   "tank": 1.7,
   "area": 15,
   "noise": null,
   "drain": true,
   "laundry": true,
   "weight": 9.5,
   "wheels": true,
   "hygrostat": true,
   "power": 200
  },
  "pros": [
   "Compressore da 10 litri al giorno sotto i 100 euro",
   "Igrostato dal 30 all'80% a passi del 5%",
   "Scarico continuo con tubo incluso e modalità lavanderia",
   "Sbrinamento automatico, dichiarato fino a 5 °C"
  ],
  "cons": [
   "Serbatoio piccolo da 1,7 litri",
   "Rumorosità non dichiarata",
   "Pagina incoerente: un punto elenco parla di 16 litri al giorno contro i 10 del titolo"
  ],
  "buyIf": "Hai una stanza piccola umida e vuoi un compressore con scarico continuo spendendo meno di 100 euro.",
  "avoidIf": "Devi deumidificare più di una stanza o ti serve un rumore dichiarato basso per la notte.",
  "asin": "B09Q24NSNK",
  "amazonTitle": "SHINCO Deumidificatore d'aria Silenzioso 10L/Giorno, Per Max 15㎡, Funzione di Deumidificazione, Purificazione, Asciugatura Biancheria, Timer 24 ore, Serbatoio dell'acqua Trasparente",
  "imgs": [
   "https://m.media-amazon.com/images/I/51duBISmmGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71LsvaBtcoL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71JqfxHQJfL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71KkGdZ1ACL._AC_SL1500_.jpg"
  ],
  "summary": "Deumidificatore a compressore da 10 litri al giorno per stanze fino a 15 m², con igrostato, timer 24 ore, modalità lavanderia, ruote e scarico continuo. Adatto a un bagno, una lavanderia o una camera piccola con budget stretto. Il serbatoio è da 1,7 litri, la rumorosità non è dichiarata e la pagina ha un dato di capacità contraddittorio.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 898,
  "bsr": 31376,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "zinus-green-tea-memory-160x190",
  "v": "materassi",
  "brand": "Zinus",
  "name": "Zinus Green Tea Memory 15 cm matrimoniale 160x190",
  "price": 114.99,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Matrimoniale in memory a basso costo, con portata dichiarata alta ma spessore minimo.",
  "attrs": {
   "type": "memory",
   "firmness": 6,
   "cooling": 5,
   "motion": 7,
   "edge": null,
   "height": 15,
   "maxKg": 230,
   "trial": null
  },
  "pros": [
   "Matrimoniale 160x190 sotto i 120 euro",
   "Portata dichiarata fino a 230 kg in questa misura",
   "Memory infuso con tè verde e carbone contro gli odori",
   "Garanzia dichiarata di 10 anni"
  ],
  "cons": [
   "Alto solo 15 cm: poco spessore per chi pesa molto o dorme di fianco",
   "Nessun periodo di prova dichiarato",
   "Circa 200 recensioni, meno di altri modelli economici"
  ],
  "buyIf": "Vuoi un matrimoniale in memory sotto i 120 euro per una camera ospiti o un primo arredo.",
  "avoidIf": "Pesi molto o dormi di fianco e ti serve uno strato spesso che non faccia sentire la rete.",
  "asin": "B0D4M2SX4L",
  "amazonTitle": "Zinus Materasso Matrimoniale 160x190 cm Memory Foam Infusa Con Tè Verde - Altezza 15 cm - Media Rigidità - Certificato OEKO-TEX - Materasso Ortopedico Ventilato e Anti-Umidità",
  "imgs": [
   "https://m.media-amazon.com/images/I/81R3eEKahLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81ReXzyw8oL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51wxDqMc2cL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71hQlxPLVSL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale 160x190 in memory foam alto 15 cm, rigidità media, con schiuma infusa di tè verde e carbone e fodera OEKO-TEX. Serve a chi deve arredare una camera spendendo poco o cerca un materasso per una stanza ospiti. Lo spessore è ridotto e non c’è prova a casa: per un uso quotidiano da parte di persone robuste conviene guardare modelli più alti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 218,
  "bsr": 11351,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "farmarelax-ecoroyal-90x190",
  "v": "materassi",
  "brand": "Farmarelax",
  "name": "Farmarelax Ecoroyal Waterfoam 16 cm singolo 90x190",
  "price": 92.99,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Singolo waterfoam economico e collaudato, per camerette e letti di servizio.",
  "attrs": {
   "type": "waterfoam",
   "firmness": 6,
   "cooling": 6,
   "motion": 5,
   "edge": null,
   "height": 16,
   "maxKg": null,
   "trial": null
  },
  "pros": [
   "Singolo 90x190 sotto i 100 euro",
   "Oltre 2000 recensioni con media 4,3",
   "Waterfoam a celle aperte, traspirante",
   "Prodotto in Italia, certificato OEKO-TEX"
  ],
  "cons": [
   "Alto 16 cm: sostegno sottile per adulti pesanti",
   "Portata massima non dichiarata",
   "Nessun periodo di prova dichiarato",
   "La scheda indica anche una larghezza di 80 cm: verificare la misura prima di ordinare"
  ],
  "buyIf": "Ti serve un singolo semplice e traspirante sotto i 100 euro per una cameretta o gli ospiti.",
  "avoidIf": "È il letto principale di un adulto robusto che cerca sostegno spesso e duraturo.",
  "asin": "B01702H4I6",
  "amazonTitle": "Farmarelax - Materasso singolo 90x190, Altezza 16 cm, Waterfoam, Made in Italy, Ortopedico, Indeformabile, Anallergico, Antibatterico, Antiacaro e Traspirante, Modello: Ecoroyal",
  "imgs": [
   "https://m.media-amazon.com/images/I/51dWjKPyRQL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51ouCpRHPJL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51A-5vAVWGL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/41uwI9RPeyL._AC_SL1000_.jpg"
  ],
  "summary": "Materasso singolo 90x190 in waterfoam alto 16 cm, rigidità media, fodera ipoallergenica, prodotto in Italia e spedito sottovuoto. Va bene per la cameretta di un ragazzo, una stanza ospiti o un letto usato poco. È sottile, non dichiara la portata massima e non ha prova a casa: per un adulto che ci dorme ogni notte ci sono opzioni più spesse.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 2154,
  "bsr": 32935,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "bmm-comfort-23-lattice-160x190",
  "v": "materassi",
  "brand": "BMM",
  "name": "BMM Comfort 23 schiuma di lattice H4 160x190",
  "price": 359.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Lattice rigido H4 con prova di 30 notti e portata 150 kg dichiarata.",
  "attrs": {
   "type": "lattice",
   "firmness": 9,
   "cooling": 6,
   "motion": 7,
   "edge": null,
   "height": 23,
   "maxKg": 150,
   "trial": 30
  },
  "pros": [
   "Schiuma di lattice a 7 zone con zona spalle dedicata",
   "Rigidità H4 e portata dichiarata fino a 150 kg",
   "30 notti di prova con ritiro gratuito dichiarato",
   "Oltre 2100 recensioni con media 4,5",
   "Fodera sfoderabile e lavabile"
  ],
  "cons": [
   "H4 molto solido: troppo duro per chi cerca accoglienza",
   "Prezzo alto per un materasso in schiuma",
   "È schiuma di lattice, non lattice naturale 100%"
  ],
  "buyIf": "Cerchi un lattice rigido che regga fino a 150 kg e vuoi la sicurezza di 30 notti di prova.",
  "avoidIf": "Preferisci un materasso morbido e avvolgente in cui la spalla affondi.",
  "asin": "B08WLYVPNB",
  "amazonTitle": "BMM Materasso Comfort 23 160x190 cm, H4 molto solido, materasso in schiuma di lattice certificato Öko-Tex, 7 zone ortopediche, altezza 23 cm, prodotti in Germania",
  "imgs": [
   "https://m.media-amazon.com/images/I/81MM-kU8GVL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81Jqn4LVo5L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71aQM8PW-LL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7166il+gFQL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale 160x190 in schiuma di lattice alto 23 cm, rigidità H4, 7 zone con zona ShoulderPLUS, nucleo e fodera OEKO-TEX, sviluppato in Germania. Fa per chi vuole un piano sodo ed elastico, anche con peso fino a 150 kg, e vuole poterlo restituire entro 30 notti. Chi dorme di fianco e preferisce un materasso morbido lo troverà duro.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 2106,
  "bsr": 25012,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "amazon-basics-molle-insacchettate-160x190",
  "v": "materassi",
  "brand": "Amazon Basics",
  "name": "Amazon Basics Molle Insacchettate 7 zone H3 160x190",
  "price": 259.99,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Molle insacchettate a media rigidità, fodera lavabile a 60 gradi.",
  "attrs": {
   "type": "molle",
   "firmness": 6,
   "cooling": 7,
   "motion": 7,
   "edge": null,
   "height": 21.5,
   "maxKg": null,
   "trial": null
  },
  "pros": [
   "1160 molle insacchettate a 7 zone",
   "Strato di schiuma fredda a celle aperte e fascia 3D traspirante",
   "Fodera sfoderabile lavabile fino a 60 °C",
   "Certificato OEKO-TEX, conforme EN 597-1"
  ],
  "cons": [
   "Nessuno strato in memory: poca sensazione di accoglienza",
   "Portata massima non dichiarata",
   "Nessun periodo di prova dichiarato"
  ],
  "buyIf": "Dormi caldo e vuoi molle insacchettate con fodera lavabile a un prezzo medio.",
  "avoidIf": "Cerchi l’effetto avvolgente del memory o hai bisogno di una portata dichiarata alta.",
  "asin": "B07CSS7ND2",
  "amazonTitle": "Amazon Basics Materasso Matrimoniale a molle insacchettate a 7 zone, Medio-rigido (H3), 160 x 190 x 21.5 cm, Bianco",
  "imgs": [
   "https://m.media-amazon.com/images/I/71uQAVdZxDL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81yYeNsjhgL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71qMCZ57oSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71yuxzYDUUL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale 160x190 a molle insacchettate (1160 molle, 7 zone) alto 21,5 cm, rigidità H3, con schiuma fredda sopra e fascia 3D traspirante. È per chi dorme caldo e vuole un piano elastico che trasmetta poco i movimenti del partner. Non ha memory, non dichiara la portata massima e non offre prova a casa.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 590,
  "bsr": 22460,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "italymaterassi-tek-160x190",
  "v": "materassi",
  "brand": "ITALYMATERASSI",
  "name": "ITALYMATERASSI TEK molle e memory 24 cm 160x190",
  "price": 314,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Ibrido rigido italiano detraibile, con portata 150 kg e cuscini inclusi.",
  "attrs": {
   "type": "ibrido",
   "firmness": 8,
   "cooling": 7,
   "motion": 7,
   "edge": null,
   "height": 24,
   "maxKg": 150,
   "trial": null
  },
  "pros": [
   "Molle insacchettate con strato di memory bugnato",
   "Portata dichiarata fino a 150 kg",
   "Dispositivo medico di classe 1, detraibile al 19%",
   "Fodera Cool Sensation sfoderabile",
   "2 cuscini in fiocco di memory inclusi"
  ],
  "cons": [
   "Numero di molle incoerente in pagina (1600 in scheda, 660 nel testo)",
   "Nessun periodo di prova dichiarato",
   "Rigido: poco adatto a chi cerca morbidezza"
  ],
  "buyIf": "Vuoi un ibrido rigido detraibile che regga fino a 150 kg, con cuscini inclusi.",
  "avoidIf": "Vuoi poterlo restituire dopo averlo provato qualche notte.",
  "asin": "B08ZJL3NS8",
  "amazonTitle": "ITALYMATERASSI Materasso Matrimoniale TEK 160x190 cm in Memory Foam e Molle Insacchettate con 2 Cuscini, Alto 24 cm, Dispositivo Medico Detraibile, Made in Italy",
  "imgs": [
   "https://m.media-amazon.com/images/I/61rSLA5nGyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71-yPmDEQ+L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/617BssufkiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61f5cYIFesL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso matrimoniale 160x190 alto 24 cm con molle insacchettate e strato superiore in memory bugnato, rigido, fodera Cool Sensation sfoderabile, prodotto in Italia. È registrato come dispositivo medico, quindi detraibile, e include due cuscini. Adatto a chi vuole un ibrido sodo fino a 150 kg; manca una prova a casa e la pagina non è chiara sul numero di molle.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 990,
  "bsr": 61695,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "inofia-original-ibrido-135x190",
  "v": "materassi",
  "brand": "Inofia",
  "name": "Inofia Original ibrido molle e memory 25 cm 135x190",
  "price": 311.43,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Ibrido di media rigidità con 100 notti di prova, in misura 135x190.",
  "attrs": {
   "type": "ibrido",
   "firmness": 5,
   "cooling": 7,
   "motion": 8,
   "edge": 7,
   "height": 25,
   "maxKg": null,
   "trial": 100
  },
  "pros": [
   "100 notti di prova a casa dichiarate",
   "Molle insacchettate con memory multistrato",
   "Bordi rinforzati dichiarati, meno effetto rotolamento",
   "Media 4,5 su oltre 600 recensioni"
  ],
  "cons": [
   "Misura 135x190, non standard per le reti italiane",
   "Altezza indicata sia 25 sia 26 cm in pagina",
   "Portata massima non dichiarata",
   "Testi della pagina tradotti male e pensati per il Regno Unito"
  ],
  "buyIf": "Hai un letto da 135x190 e vuoi un ibrido medio con 100 notti per ripensarci.",
  "avoidIf": "La tua rete è 140 o 160 cm: questa misura resta stretta e non si adatta.",
  "asin": "B0C28379JD",
  "amazonTitle": "Inofia Materasso doppio in memory foam a molle, 130 cm, ibrido da 25 cm",
  "imgs": [
   "https://m.media-amazon.com/images/I/81AHyBoB4YL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81F+GEVygML._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71q17j4E6pL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/8110k3S09lL._AC_SL1500_.jpg"
  ],
  "summary": "Materasso ibrido 135x190 alto circa 25 cm con molle insacchettate e memory foam multistrato, rigidità media, bordi rinforzati e schiume certificate CertiPUR-US ed EuroPUR. Serve a chi ha un letto da una piazza e mezza abbondante e vuole provarlo fino a 100 notti prima di decidere. La misura 135 cm è poco diffusa in Italia e la portata massima non è dichiarata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 648,
  "bsr": 2022237,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "albatros-lift-s5w-telaio",
  "v": "scrivanie-regolabili",
  "brand": "Albatros",
  "name": "Albatros LIFT S5W telaio doppio motore",
  "price": 264,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Telaio a due motori con anti-collisione per chi ha già un piano o ne vuole uno grande.",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "dual",
   "maxLoad": 120,
   "hMin": 70,
   "hMax": 118,
   "memory": true,
   "topIncluded": false,
   "noise": null,
   "antiCollision": true
  },
  "pros": [
   "Due motori e portata dichiarata di 120 kg",
   "Sensore anti-collisione e blocco bambini sul display",
   "3 memorie di altezza con display digitale",
   "Accetta piani da 120 a 200 cm di larghezza e fino a 100 cm di profondità"
  ],
  "cons": [
   "Solo telaio: il piano va comprato a parte",
   "Escursione 70-118 cm, meno ampia dei telai a tre stadi",
   "La scheda parla sia di 2 sia di 3 motori; il titolo dice 2",
   "Rumorosità non dichiarata"
  ],
  "buyIf": "Hai già un piano grande o vuoi sceglierlo tu e cerchi un telaio a due motori con anti-collisione.",
  "avoidIf": "Vuoi una scrivania completa pronta da montare o sei molto alto e ti serve oltre 118 cm.",
  "asin": "B08MKVT7DF",
  "amazonTitle": "Albatros Supporto per scrivania LIFT, bianco, 2x motori, regolabile elettricamente in altezza con funzione di memoria",
  "imgs": [
   "https://m.media-amazon.com/images/I/61z2mAI2rIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Wn-7qvMqL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81pOR6fuHGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71awb3IssiL._AC_SL1500_.jpg"
  ],
  "summary": "Telaio elettrico bianco a due motori, senza piano, con larghezza regolabile da 106 a 180 cm e altezza da 70 a 118 cm. Ha 3 memorie, anti-collisione e blocco bambini. Va bene per chi vuole montare un piano proprio fino a 200x100 cm; chi supera 1,85 m potrebbe trovare corta l'altezza massima.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 614,
  "bsr": 2284939,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "huanuo-telaio-4-gambe-doppio-motore",
  "v": "scrivanie-regolabili",
  "brand": "HUANUO",
  "name": "HUANUO telaio a 4 gambe doppio motore",
  "price": 299.99,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Telaio a quattro gambe e due motori, pensato per piani lunghi fino a 180 cm.",
  "attrs": {
   "width": null,
   "depth": null,
   "motor": "dual",
   "maxLoad": 100,
   "hMin": 72,
   "hMax": 118,
   "memory": true,
   "topIncluded": false,
   "noise": 55,
   "antiCollision": null
  },
  "pros": [
   "Quattro gambe invece delle solite due, per piani larghi",
   "Due motori, portata dichiarata 100 kg",
   "4 memorie di altezza",
   "Compatibile con piani da 126 a 180 cm di larghezza"
  ],
  "cons": [
   "Solo 70 recensioni: storico ancora breve",
   "Solo telaio, il piano non è incluso",
   "Anti-collisione non dichiarata",
   "Prezzo alto per un telaio con escursione 72-118 cm"
  ],
  "buyIf": "Vuoi montare un piano lungo fino a 180 cm e preferisci l'appoggio su quattro gambe.",
  "avoidIf": "Cerchi un prodotto con molte recensioni alle spalle o ti serve la protezione anti-collisione.",
  "asin": "B0DFPSB1FQ",
  "amazonTitle": "HUANUO Telaio da scrivania regolabile in altezza, a doppio motore, regolabile in altezza, per casa e ufficio, gambe del tavolo regolabili in altezza con acciaio resistente, controller di memoria, solo",
  "imgs": [
   "https://m.media-amazon.com/images/I/61RBcs53+oL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71GpovTI6sL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71EzvYjkpsL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/711JYp6pVIL._AC_SL1500_.jpg"
  ],
  "summary": "Telaio elettrico senza piano con quattro gambe in acciaio e due motori, portata 100 kg e altezza da 72 a 118 cm con 4 memorie. Serve a chi vuole un piano lungo e stabile ai lati. Non dichiara anti-collisione e le recensioni sono ancora poche per giudicarne la durata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 70,
  "bsr": 163635,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "jummico-100x60-compatta",
  "v": "scrivanie-regolabili",
  "brand": "JUMMICO",
  "name": "JUMMICO 100x60 elettrica compatta",
  "price": 95.37,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Scrivania elettrica piccola a meno di 100 euro, con USB e memorie.",
  "attrs": {
   "width": 100,
   "depth": 60,
   "motor": null,
   "maxLoad": null,
   "hMin": 73,
   "hMax": 118,
   "memory": true,
   "topIncluded": true,
   "noise": 55,
   "antiCollision": true
  },
  "pros": [
   "Piano 100x60 cm, entra in camere e angoli stretti",
   "Porta USB e avviso di pausa sul pannello",
   "Protezione antiurto e da surriscaldamento dichiarate",
   "Quasi 5.000 recensioni"
  ],
  "cons": [
   "Piano composto da più parti unite, non monoblocco",
   "Portata massima non dichiarata",
   "La scheda indica sia 118 sia 120 cm di altezza massima, e sia 2 sia 4 memorie",
   "Piano sottile da 1,5 cm"
  ],
  "buyIf": "Hai poco spazio e ti basta un portatile o un monitor sulla scrivania.",
  "avoidIf": "Devi reggere due monitor pesanti o vuoi un piano in un unico pezzo.",
  "asin": "B0B6CVPSMV",
  "amazonTitle": "JUMMICO Scrivania Regolabile In Altezza Elettrica,100 x 60 cm,Pannello 6 Tasti Con 4 Memorie Di Altezza E Porta USB,Scrivania Da Computer Bianca,Avviso Di Pausa Per Sedentarietà",
  "imgs": [
   "https://m.media-amazon.com/images/I/617o6ceWsOL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71+o-bKw5vL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71rD-LE55oL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61mMr-YBdiL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica completa con piano 100x60 cm, altezza da 73 a 118 cm, pannello con memorie, porta USB e avviso di sedentarietà. Adatta a studenti e a chi lavora con un solo monitor in poco spazio. Il piano è in più pezzi e sottile, e la portata non è dichiarata.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 4856,
  "bsr": 3810,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "dripex-l-180x110-angolare",
  "v": "scrivanie-regolabili",
  "brand": "Dripex",
  "name": "Dripex angolare a L 180x110",
  "price": 239.99,
  "quality": 6,
  "checked": "2026-09-13",
  "tagline": "Scrivania angolare a L elettrica sotto i 250 euro, con piano incluso.",
  "attrs": {
   "width": 180,
   "depth": 110,
   "motor": null,
   "maxLoad": 80,
   "hMin": 72,
   "hMax": 117,
   "memory": true,
   "topIncluded": true,
   "noise": 45,
   "antiCollision": true
  },
  "pros": [
   "Forma a L 180x110 cm su quattro gambe",
   "Piano incluso, spazio per più monitor",
   "Memoria e arresto quando incontra un ostacolo",
   "Quasi 600 recensioni"
  ],
  "cons": [
   "Scheda incoerente: il titolo dice doppio motore, un punto elenco parla di motore singolo e di piano 110x60",
   "Piano in due pezzi",
   "Portata dichiarata 80 kg, modesta per una scrivania di questa superficie",
   "Altezza massima 117 cm"
  ],
  "buyIf": "Vuoi una postazione ad angolo regolabile e completa senza superare i 250 euro.",
  "avoidIf": "Ti serve la certezza del doppio motore o devi caricare molto peso sul piano.",
  "asin": "B0CBS65ZNK",
  "amazonTitle": "Dripex Scrivania regolabile in altezza 180x110cm, Scrivania ad angolo con doppio motore, Standing Desk con 4 gambe per una super stabilità, nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61H3BygIObL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/716tNBTydvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71FsoyMszrL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/8145fvfF3NL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania elettrica ad angolo 180x110 cm con piano incluso, quattro gambe e altezza da 72 a 117 cm con memoria. Serve a chi vuole una postazione a L per più monitor senza comprare telaio e piano separati. La scheda Amazon mescola dati diversi sul motore e sul piano, quindi va controllata prima dell'acquisto.",
  "ean": null,
  "eanSource": null,
  "rating": 4.4,
  "reviews": 598,
  "bsr": 328361,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "winuptime-manovella-122x61",
  "v": "scrivanie-regolabili",
  "brand": "Win Up Time",
  "name": "Win Up Time a manovella 122x61",
  "price": 426,
  "quality": 5,
  "checked": "2026-09-13",
  "tagline": "Scrivania a manovella senza motore, con piano monoblocco e ruote.",
  "attrs": {
   "width": 121.9,
   "depth": 61,
   "motor": "manual",
   "maxLoad": 68,
   "hMin": 74.9,
   "hMax": 113.5,
   "memory": null,
   "topIncluded": true,
   "noise": null,
   "antiCollision": null
  },
  "pros": [
   "Regolazione a manovella: nessuna presa elettrica né motore da guastarsi",
   "Piano in un unico pezzo da 1,8 cm",
   "Ruote con freno incluse",
   "Traversa tra le gambe per la stabilità"
  ],
  "cons": [
   "Prezzo alto: costa più di molte scrivanie elettriche",
   "Cambiare altezza richiede diversi giri di manovella",
   "Portata 68 kg",
   "Solo 174 recensioni, altezze dichiarate in pollici"
  ],
  "buyIf": "Vuoi una scrivania regolabile senza elettricità e cambi altezza poche volte al giorno.",
  "avoidIf": "Alterni spesso seduto e in piedi o vuoi spendere il giusto per la funzione.",
  "asin": "B0CJVH5RN3",
  "amazonTitle": "Scrivania in piedi manuale con altezza regolabile, con manovella, scrivania con telaio e scrivania, scrivania per computer in acero, 121,9 x 61 cm",
  "imgs": [
   "https://m.media-amazon.com/images/I/61N053s5dyL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81VkNY79WSL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/91jPn7H9+GL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71m4nxiYYhL._AC_SL1500_.jpg"
  ],
  "summary": "Scrivania manuale con piano in un pezzo da 122x61 cm, regolata a manovella da circa 75 a 113 cm, con ruote frenate. Utile a chi non vuole cavi o motori, per esempio in una stanza senza presa vicina. Al prezzo richiesto una scrivania elettrica offre di più, e cambiare altezza spesso diventa scomodo.",
  "ean": null,
  "eanSource": null,
  "rating": 4.3,
  "reviews": 174,
  "bsr": null,
  "bsrCat": null
 },
 {
  "id": "philips-5000-dual-steam-na550",
  "v": "friggitrici-aria",
  "brand": "Philips",
  "name": "Philips Airfryer 5000 Doppio Cestello con Vapore NA550/00",
  "price": 209.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Doppio cestello Philips con cottura a vapore e autopulizia",
  "attrs": {
   "capacity": 9,
   "baskets": 2,
   "power": 2750,
   "maxTemp": 200,
   "programs": null,
   "window": null,
   "dishwasher": false,
   "weight": 8.8
  },
  "pros": [
   "Due cestelli da 6 L e 3 L con fine cottura sincronizzata",
   "Funzione vapore abbinabile alla frittura ad aria",
   "Pulizia automatica a vapore SteamClean del cestello grande",
   "Rivestimento ceramico dichiarato senza PFAS"
  ],
  "cons": [
   "La scheda Amazon indica che non va in lavastoviglie",
   "Pesa 8,8 kg e occupa 44 cm di larghezza",
   "Prezzo alto rispetto al Philips 3000 doppio cestello senza vapore"
  ],
  "buyIf": "Cucini per 3-5 persone e vuoi anche la cottura a vapore in un solo apparecchio.",
  "avoidIf": "Hai poco spazio sul piano o vuoi mettere tutto in lavastoviglie.",
  "asin": "B0DKKL9152",
  "amazonTitle": "Philips Airfryer 5000 - Friggitrice ad aria Doppio Cestello 9L, Vapore",
  "imgs": [
   "https://m.media-amazon.com/images/I/51WvrAcA+aL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51au-vmSIlL._AC_SL1080_.jpg",
   "https://m.media-amazon.com/images/I/61Gn6uRDsnL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61+TngAAbZL._AC_SL1000_.jpg"
  ],
  "summary": "Friggitrice ad aria a due cestelli (6 L + 3 L, 9 L totali) con generatore di vapore: si può friggere ad aria, cuocere a vapore o combinare le due cose. Pensata per famiglie che vogliono preparare piatto e contorno insieme. Costa parecchio, è ingombrante e secondo la scheda i cestelli non vanno in lavastoviglie.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 1280,
  "bsr": 589,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "cosori-twinfry-compact-caf-tf801",
  "v": "friggitrici-aria",
  "brand": "Cosori",
  "name": "Cosori Twinfry Compact 8,6 L CAF-TF801",
  "price": 169.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Vano unico o doppia zona con resistenze sopra e sotto",
  "attrs": {
   "capacity": 8.6,
   "baskets": 2,
   "power": 2700,
   "maxTemp": 240,
   "programs": 6,
   "window": null,
   "dishwasher": true,
   "weight": 8
  },
  "pros": [
   "Due zone da 4,3 L o un unico vano da 8,6 L togliendo il separatore",
   "Resistenze sopra e sotto: meno bisogno di girare il cibo",
   "Temperatura fino a 240 gradi, più alta della media",
   "Cestelli e accessori lavabili in lavastoviglie"
  ],
  "cons": [
   "Le due zone nascono da un separatore rimovibile, non da due cassetti indipendenti",
   "Solo 6 funzioni di cottura",
   "Pesa 8 kg"
  ],
  "buyIf": "Vuoi alternare pezzi grandi (un pollo intero) e cotture su due zone nello stesso apparecchio.",
  "avoidIf": "Cerchi due cassetti separati da estrarre in modo indipendente.",
  "asin": "B0GBXY2YKK",
  "amazonTitle": "Cosori Twinfry Compact Friggitrice ad Aria 8,6 Litri, Air Fryer Ceramico",
  "imgs": [
   "https://m.media-amazon.com/images/I/61xWeEU9H7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/7164NM4iXAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/816UTWc5hYL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81ESpPlC6UL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria da 8,6 L che si usa come vano unico oppure divisa in due zone da 4,3 L con un separatore rimovibile, con modalità SYNC e MATCH. Le resistenze su entrambi i lati cuociono in modo più uniforme. Adatta a famiglie che vogliono flessibilità, meno a chi cerca tante funzioni preimpostate.",
  "ean": null,
  "eanSource": null,
  "rating": 4.8,
  "reviews": 17127,
  "bsr": 4081,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "russell-hobbs-satisfry-dual-27681",
  "v": "friggitrici-aria",
  "brand": "Russell Hobbs",
  "name": "Russell Hobbs Satisfry Doppio Cestello 9 L 27681-56",
  "price": 148.91,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Doppio cassetto da 4,5 L con avvio ritardato a prezzo medio",
  "attrs": {
   "capacity": 9,
   "baskets": 2,
   "power": 2800,
   "maxTemp": 200,
   "programs": 9,
   "window": null,
   "dishwasher": true,
   "weight": 7.7
  },
  "pros": [
   "Due cassetti uguali da 4,5 L con funzioni Sync e Match",
   "Avvio ritardato, mantenimento in caldo e promemoria per scuotere",
   "Cestelli e piastra lavabili in lavastoviglie",
   "Prezzo più basso dei doppi cestelli Philips e Cosori"
  ],
  "cons": [
   "Per funzionare devono essere inseriti entrambi i cassetti, anche se ne usi uno",
   "Temperatura massima 200 gradi",
   "Scocca in plastica e 44 cm di profondità"
  ],
  "buyIf": "Vuoi due cassetti uguali per piatto e contorno spendendo meno di 150 euro.",
  "avoidIf": "Ti servono temperature oltre i 200 gradi o un apparecchio poco profondo.",
  "asin": "B0DWNFDWWS",
  "amazonTitle": "Russell Hobbs Friggitrice ad Aria Doppio cestello, 9L – Zone Indipendenti, 9 Programmi, 200℃, Silenziosa, Touchscreen, Cottura Senza Olio, Basso Consumo, Lavastoviglie ok, 2800W – Satisfry 27681-56",
  "imgs": [
   "https://m.media-amazon.com/images/I/410fKIi1WRL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/6156QzOGSRL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71+GNS08jDL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/511YDk0tjnL._AC_SL1000_.jpg"
  ],
  "summary": "Friggitrice ad aria con due cassetti indipendenti da 4,5 L (9 L totali), 2800 W e 9 programmi, con sincronizzazione della fine cottura. Buona per famiglie che vogliono il doppio cestello senza arrivare ai prezzi dei marchi più cari. Ha la scocca in plastica e richiede entrambi i cassetti inseriti anche per usarne uno.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 910,
  "bsr": 848,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "philips-airfryer-2000-na230",
  "v": "friggitrici-aria",
  "brand": "Philips",
  "name": "Philips Airfryer 2000 6,2 L con finestrella NA230/00",
  "price": 108.25,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Cestello da 6,2 L con finestrella illuminata",
  "attrs": {
   "capacity": 6.2,
   "baskets": 1,
   "power": 1700,
   "maxTemp": 200,
   "programs": 13,
   "window": true,
   "dishwasher": true,
   "weight": 5.35
  },
  "pros": [
   "Finestrella con luce per controllare la cottura senza aprire",
   "Cestello da 6,2 L adatto a una famiglia di 3-4 persone",
   "Componenti lavabili in lavastoviglie",
   "Molte recensioni con media alta"
  ],
  "cons": [
   "Un solo cestello: niente cotture separate",
   "Temperatura massima 200 gradi",
   "40 cm di profondità sul piano"
  ],
  "buyIf": "Vuoi un cestello unico capiente e la finestrella per seguire la cottura.",
  "avoidIf": "Vuoi cuocere due pietanze diverse insieme.",
  "asin": "B0CWP7M17B",
  "amazonTitle": "Philips Airfryer 2000 - Friggitrice ad aria 6.2L, Finestrella, 13 modalità",
  "imgs": [
   "https://m.media-amazon.com/images/I/51EASto3heL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71-V66ktVIL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/51TpnK3qyML._AC_SL1068_.jpg",
   "https://m.media-amazon.com/images/I/51BYZpmvPEL._AC_SL1000_.jpg"
  ],
  "summary": "Friggitrice ad aria Philips con cestello unico da 6,2 L, 1700 W, touchscreen con 13 modalità e finestrella illuminata sul cassetto. Si rivolge a famiglie di 3-4 persone che vogliono controllare la doratura senza interrompere la cottura. Non ha il doppio cestello e resta a 200 gradi massimi.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 5232,
  "bsr": 602,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "moulinex-easy-fry-grill-vision-ez5068",
  "v": "friggitrici-aria",
  "brand": "Moulinex",
  "name": "Moulinex Easy Fry & Grill Vision 4,2 L EZ5068",
  "price": 79.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Compatta con finestra e griglia, sotto gli 80 euro",
  "attrs": {
   "capacity": 4.2,
   "baskets": 1,
   "power": 1550,
   "maxTemp": 200,
   "programs": 8,
   "window": true,
   "dishwasher": true,
   "weight": 5.2
  },
  "pros": [
   "Finestra di controllo rimovibile per la pulizia",
   "Griglia in dotazione per carne e verdure",
   "Componenti lavabili in lavastoviglie",
   "Ricambi dichiarati disponibili per 15 anni"
  ],
  "cons": [
   "Con 4,2 L il fino a 6 persone dichiarato è ottimistico: realistico per 2-3",
   "La scheda tecnica riporta 4,6 L mentre titolo e descrizione dicono 4,2 L",
   "Un solo cestello"
  ],
  "buyIf": "Cucini per 2-3 persone e vuoi finestra e griglia in poco spazio.",
  "avoidIf": "Cucini spesso per 4 o più persone.",
  "asin": "B0CG6DL1RL",
  "amazonTitle": "Moulinex Easy Fry & Grill Vision, Friggitrice ad Aria 4.2 L, EZ5068",
  "imgs": [
   "https://m.media-amazon.com/images/I/71tadxeAXrL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/810rYZHjGiL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/819N7bvDCzL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81iFIQjxNSL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria da 4,2 L con finestra di controllo e griglia inclusa, 1550 W e 8 programmi automatici più 2 manuali. Pensata per coppie o famiglie piccole che vogliono vedere la cottura e grigliare senza accendere il forno. La capacità basta per 2-3 persone, non per le 6 indicate nella descrizione.",
  "ean": null,
  "eanSource": null,
  "rating": 4.7,
  "reviews": 1463,
  "bsr": 3518,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "cosori-2l-caf-li211",
  "v": "friggitrici-aria",
  "brand": "Cosori",
  "name": "Cosori Friggitrice ad Aria 2 L CAF-LI211",
  "price": 59.99,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Mini friggitrice da 2 L per chi vive da solo",
  "attrs": {
   "capacity": 2,
   "baskets": 1,
   "power": 900,
   "maxTemp": 205,
   "programs": 4,
   "window": null,
   "dishwasher": true,
   "weight": 3
  },
  "pros": [
   "Ingombro minimo: circa 26 x 21 cm di base",
   "900 W, consuma poco e si usa anche con impianti deboli",
   "Rumore dichiarato sotto i 48 dB",
   "Cestello ceramico senza PFAS lavabile in lavastoviglie"
  ],
  "cons": [
   "2 L bastano per una persona, al massimo due porzioni piccole",
   "Solo 4 funzioni preimpostate",
   "Prezzo simile a modelli da 5 L di altre marche"
  ],
  "buyIf": "Vivi da solo o hai pochissimo spazio e vuoi scaldare o dorare piccole porzioni.",
  "avoidIf": "Cucini abitualmente per due o più persone.",
  "asin": "B0DJH83G29",
  "amazonTitle": "Cosori Friggitrice ad Aria 2 Litri, 97% Meno Olio, 30 Ricette Online, 205℃",
  "imgs": [
   "https://m.media-amazon.com/images/I/612PvqjLo9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81NGjjGW4rL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71i4fuIQrlL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71dpaxw5BRL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria da 2 L e 900 W, grande come una macchina da caffè a capsule, con cestello in ceramica senza PFAS e 4 funzioni. Adatta a single, studenti o a chi ha una cucina minuscola. Per due persone è già stretta e a questo prezzo altre marche offrono il doppio di capacità.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 4208,
  "bsr": 14664,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "ariete-airy-fryer-digital-4616",
  "v": "friggitrici-aria",
  "brand": "Ariete",
  "name": "Ariete Airy Fryer Digital 4616 3,5 L",
  "price": 50.32,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Compatta digitale per una o due persone, sui 50 euro",
  "attrs": {
   "capacity": 3.5,
   "baskets": 1,
   "power": 1300,
   "maxTemp": 200,
   "programs": 7,
   "window": null,
   "dishwasher": false,
   "weight": 3.63
  },
  "pros": [
   "Compatta, adatta a una o due persone",
   "Touchscreen con 7 modalità e timer da 60 minuti",
   "Prezzo contenuto per un marchio con assistenza in Italia",
   "Garanzia di 2 anni dichiarata"
  ],
  "cons": [
   "La scheda tecnica indica 2,6 L utili a fronte dei 3,5 L del titolo",
   "Secondo la scheda non va in lavastoviglie",
   "1300 W: tempi un po' più lunghi dei modelli più potenti"
  ],
  "buyIf": "Cucini per una o due persone e vuoi spendere intorno ai 50 euro.",
  "avoidIf": "Vuoi lavare il cestello in lavastoviglie o cucinare per più di due persone.",
  "asin": "B07Q7LJX9X",
  "amazonTitle": "Ariete Airy Fryer Digital 4616, Friggitrice ad Aria 3,5 Litri, Timer da 60 Minuti, LCD e Touchscreen con 7 Modalità di Cottura, Temperatura Massima 200° C, 1300W, Nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/61RCpQpkXvL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61sKOBsyBPL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/61ewso6ekLL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61taIS33ukL._AC_SL1500_.jpg"
  ],
  "summary": "Friggitrice ad aria compatta da 3,5 L (2,6 L utili secondo la scheda), 1300 W, touchscreen con 7 modalità e temperatura fino a 200 gradi. Va bene per una o due persone che vogliono una friggitrice semplice a poco prezzo. Il cestello non va in lavastoviglie e la capacità reale è inferiore a quella del titolo.",
  "ean": "8003705117495",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.6,
  "reviews": 2754,
  "bsr": 6523,
  "bsrCat": "Casa e cucina"
 },
 {
  "id": "lg-27up650k",
  "v": "monitor-scrivania",
  "brand": "LG",
  "name": "LG UltraFine 27UP650K",
  "price": 200,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Il 4K IPS piu' economico del listino con supporto regolabile in altezza.",
  "attrs": {
   "size": 27,
   "resolution": "3840x2160",
   "refresh": 60,
   "panel": "IPS",
   "responseTime": 5,
   "curved": false,
   "heightAdjust": true,
   "usbc": false,
   "usbcPower": null,
   "speakers": null,
   "vesa": null
  },
  "pros": [
   "4K IPS da 27 pollici a circa 200 euro",
   "Supporto regolabile in altezza, inclinazione e pivot dichiarato",
   "95% DCI-P3 e HDR 400 dichiarati: buona base per foto e grafica",
   "Due HDMI e una DisplayPort"
  ],
  "cons": [
   "Niente USB-C: con un portatile servono cavo HDMI o DisplayPort e alimentatore a parte",
   "60 Hz: fluido per ufficio, non per il gaming veloce",
   "Altoparlanti non dichiarati, solo uscita jack audio"
  ],
  "buyIf": "Vuoi un 4K nitido per lavoro e foto con un PC fisso o un portatile con uscita HDMI.",
  "avoidIf": "Vuoi collegare e caricare il portatile con un solo cavo USB-C.",
  "asin": "B0DQ588LYC",
  "amazonTitle": "LG Monitor 27UP650K, 27\" Ultra HD 4K, IPS, HDR 400 per lavoro e creatività",
  "imgs": [
   "https://m.media-amazon.com/images/I/81A9f8Pk9CL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71f3t9TBa2L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71CP3uABF0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71W2yQOOtTL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici 4K con pannello IPS, copertura DCI-P3 al 95% e supporto regolabile in altezza, inclinazione e pivot. Serve a chi vuole testo nitido e colori corretti per lavoro e fotoritocco senza spendere troppo. Gli mancano USB-C e altoparlanti, e i 60 Hz non bastano per giocare a titoli veloci.",
  "ean": "8806096366660",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 255,
  "bsr": 634,
  "bsrCat": "Informatica"
 },
 {
  "id": "dell-s2725dc",
  "v": "monitor-scrivania",
  "brand": "Dell",
  "name": "Dell 27 Plus QHD USB-C S2725DC",
  "price": 267.24,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "27 pollici QHD da ufficio con docking USB-C da 65 W e supporto completo.",
  "attrs": {
   "size": 27,
   "resolution": "2560x1440",
   "refresh": 144,
   "panel": "IPS",
   "responseTime": 1,
   "curved": false,
   "heightAdjust": true,
   "usbc": true,
   "usbcPower": 65,
   "speakers": true,
   "vesa": null
  },
  "pros": [
   "USB-C con 65 W di ricarica: un cavo per video, dati e alimentazione del portatile",
   "Regolazione in altezza, inclinazione, rotazione e pivot dichiarata",
   "QHD a 144 Hz: piu' spazio di lavoro del Full HD e movimento fluido",
   "Altoparlanti 3 W x2 e garanzia 3 anni dichiarati"
  ],
  "cons": [
   "188 recensioni: base di giudizio ancora ridotta",
   "Contrasto 1500:1 da IPS: neri grigiastri al buio",
   "65 W bastano per un ultrabook, non per un portatile da lavoro pesante"
  ],
  "buyIf": "Lavori da portatile USB-C e vuoi un 27 pollici QHD ergonomico con un solo cavo.",
  "avoidIf": "Il tuo portatile chiede piu' di 65 W o ti serve la nitidezza del 4K.",
  "asin": "B0FQ5B9BB1",
  "amazonTitle": "Dell 27 Plus USB-C Monitor - S2725DC, QHD (2560x1440), 144Hz, IPS, 1ms MPRT",
  "imgs": [
   "https://m.media-amazon.com/images/I/71hzOPhFUXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81HTWuZGv7L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71neAWDyn9L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/712o7lsuz-L._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici QHD a 144 Hz con pannello IPS, USB-C che eroga 65 W e supporto regolabile in altezza, inclinazione e pivot. E' pensato per chi lavora da portatile e vuole una postazione con un solo cavo, senza pagare il 4K. Ha poche recensioni per ora e la ricarica non basta ai portatili piu' esigenti.",
  "ean": null,
  "eanSource": null,
  "rating": 4.5,
  "reviews": 188,
  "bsr": 1867,
  "bsrCat": "Informatica"
 },
 {
  "id": "philips-346e2cuae",
  "v": "monitor-scrivania",
  "brand": "Philips",
  "name": "Philips 346E2CUAE",
  "price": 284.99,
  "quality": 7,
  "checked": "2026-09-13",
  "tagline": "Ultrawide curvo da ufficio con USB-C e supporto regolabile sotto i 300 euro.",
  "attrs": {
   "size": 34,
   "resolution": "3440x1440",
   "refresh": 100,
   "panel": "VA",
   "responseTime": 1,
   "curved": true,
   "heightAdjust": true,
   "usbc": true,
   "usbcPower": null,
   "speakers": true,
   "vesa": true
  },
  "pros": [
   "Ultrawide 34 pollici 3440x1440 curvo sotto i 300 euro",
   "USB-C con funzione docking e ricarica del portatile dichiarata",
   "Altezza regolabile di 100 mm, altoparlanti 5 W x2 e VESA 100x100 dichiarati",
   "Pannello VA con contrasto 3000:1"
  ],
  "cons": [
   "Potenza di ricarica USB-C non indicata in pagina",
   "100 Hz: adatto al lavoro, non al gaming competitivo",
   "Scheda Amazon incoerente: indica forma piatta mentre titolo e descrizione dichiarano curvatura 1500R"
  ],
  "buyIf": "Lavori con fogli di calcolo o timeline lunghe e vuoi un ultrawide con docking USB-C.",
  "avoidIf": "Ti serve sapere che il monitor carica un portatile potente, o giochi a titoli competitivi.",
  "asin": "B08MQLFVMX",
  "amazonTitle": "Philips Monitors Philips 346E2CUAE/00 Monitor 34\" VA WLED 3440 x 1440 HDMI/DP Curved, Nero, 34\"",
  "imgs": [
   "https://m.media-amazon.com/images/I/71tHNQlGjAL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61u64y13WRL._AC_SL1143_.jpg",
   "https://m.media-amazon.com/images/I/51jze+x0nXL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/61260M8lieL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor ultrawide curvo da 34 pollici 3440x1440 con pannello VA, USB-C con ricarica del portatile, altezza regolabile e altoparlanti. Serve a chi lavora con molte finestre affiancate e vuole sostituire un doppio monitor a un prezzo contenuto. La potenza di ricarica non e' dichiarata e i 100 Hz lo tengono lontano dal gaming veloce.",
  "ean": "8712581770662",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.4,
  "reviews": 730,
  "bsr": 379,
  "bsrCat": "Informatica"
 },
 {
  "id": "benq-ew2790u",
  "v": "monitor-scrivania",
  "brand": "BenQ",
  "name": "BenQ EW2790U",
  "price": 319.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "4K da casa e ufficio con audio 2.1 integrato e tre ingressi HDMI.",
  "attrs": {
   "size": 27,
   "resolution": "3840x2160",
   "refresh": 60,
   "panel": "IPS",
   "responseTime": 5,
   "curved": false,
   "heightAdjust": true,
   "usbc": true,
   "usbcPower": null,
   "speakers": true,
   "vesa": true
  },
  "pros": [
   "4K IPS con 98% P3 dichiarato",
   "Altoparlanti 2.1 con woofer integrati: utili per film e video senza casse esterne",
   "Supporto regolabile in altezza, inclinazione e rotazione",
   "Tre HDMI, USB-C e telecomando in dotazione"
  ],
  "cons": [
   "Potenza di ricarica USB-C non indicata in pagina",
   "60 Hz: non adatto al gaming veloce",
   "Niente DisplayPort"
  ],
  "buyIf": "Vuoi un 4K da scrivania che faccia anche da piccolo schermo multimediale con audio decente.",
  "avoidIf": "Devi caricare un portatile esigente via USB-C o ti serve la DisplayPort.",
  "asin": "B0DXJYYCLQ",
  "amazonTitle": "BenQ EW2790U 27\" 4K con copertura cromatica P3 pari al 98%, esclusivo AI Contrast, altoparlanti integrati a 2.1 canali con woofer, 1 USB Type-C, 3 porte HDMI, design ergonomico e tecnologia Eye-Care",
  "imgs": [
   "https://m.media-amazon.com/images/I/61JLcRt84IL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/71Gi+RsOYFL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71Tczekb-SL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/713ibYe+P3L._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici 4K con pannello IPS, copertura P3 al 98%, altoparlanti 2.1 con woofer e supporto regolabile in altezza. E' pensato per chi usa lo stesso schermo per lavorare di giorno e guardare film o collegare una console la sera. La potenza di ricarica USB-C non e' dichiarata e manca la DisplayPort.",
  "ean": "4718755094804",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.6,
  "reviews": 214,
  "bsr": 25136,
  "bsrCat": "Informatica"
 },
 {
  "id": "dell-u2724d",
  "v": "monitor-scrivania",
  "brand": "Dell",
  "name": "Dell UltraSharp U2724D",
  "price": 344.27,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "QHD professionale con IPS Black e colori da ufficio creativo, non un docking.",
  "attrs": {
   "size": 27,
   "resolution": "2560x1440",
   "refresh": 120,
   "panel": "IPS",
   "responseTime": 5,
   "curved": false,
   "heightAdjust": null,
   "usbc": true,
   "usbcPower": 15,
   "speakers": null,
   "vesa": null
  },
  "pros": [
   "Pannello IPS Black con contrasto 2000:1 dichiarato, sopra la media degli IPS",
   "98% DCI-P3 e sensore di luce ambientale integrato",
   "QHD a 120 Hz con PiP e PbP per due PC",
   "Garanzia 3 anni con sostituzione anticipata"
  ],
  "cons": [
   "L'USB-C eroga solo 15 W: non alimenta un portatile",
   "Regolazione in altezza e altoparlanti non dichiarati in pagina",
   "Prezzo alto per un QHD rispetto ai modelli consumer"
  ],
  "buyIf": "Lavori molte ore su documenti o grafica e vuoi un QHD con contrasto e colori curati.",
  "avoidIf": "Vuoi alimentare il portatile dal monitor con un solo cavo.",
  "asin": "B0CMXGDK5S",
  "amazonTitle": "Dell U2724D UltraSharp 27\" QHD (2560x1440) Monitor, 120Hz, IPS Black, 5ms, 98% DCI-P3, 2x USB-C, 2x DisplayPort, HDMI, 3x USB, 3 Anni di Garanzia, Argento",
  "imgs": [
   "https://m.media-amazon.com/images/I/71b5BOqqn0L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/8193Lh4kBjL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/718OCyJHaGL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/718xTrnuQ+L._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici QHD a 120 Hz della linea UltraSharp, con pannello IPS Black da 2000:1, 98% DCI-P3 e sensore di luce ambientale. Serve a chi passa molte ore davanti allo schermo e vuole resa dei grigi e dei neri migliore del solito IPS. Non e' un monitor docking: la porta USB-C eroga solo 15 W.",
  "ean": "5397184821442",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.5,
  "reviews": 317,
  "bsr": 7961,
  "bsrCat": "Informatica"
 },
 {
  "id": "lg-34wr55qk-b",
  "v": "monitor-scrivania",
  "brand": "LG",
  "name": "LG UltraWide 34WR55QK-B",
  "price": 349,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "Ultrawide curvo da lavoro con un solo cavo USB-C da 65 W.",
  "attrs": {
   "size": 34,
   "resolution": "3440x1440",
   "refresh": 100,
   "panel": null,
   "responseTime": 5,
   "curved": true,
   "heightAdjust": true,
   "usbc": true,
   "usbcPower": 65,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "Ultrawide curvo 3440x1440 con USB-C da 65 W dichiarati",
   "Supporto regolabile in altezza e inclinazione",
   "Picture-by-Picture per due sorgenti affiancate",
   "Contrasto 3000:1 e 99% sRGB dichiarati"
  ],
  "cons": [
   "Tipo di pannello non dichiarato in pagina",
   "Luminosita' 300 cd/m2: HDR10 solo nominale",
   "100 Hz: pensato per il lavoro, non per il gaming"
  ],
  "buyIf": "Lavori da portatile USB-C e vuoi un ultrawide ordinato con ricarica dichiarata.",
  "avoidIf": "Cerchi un ultrawide per giocare ad alta frequenza o con HDR vero.",
  "asin": "B0DQF8LRGZ",
  "amazonTitle": "LG 34WR55QK-B - Monitor curvo per computer UltraWide WQHD (3440 x 1440), 100 Hz, 5 ms, HDR10, modalità lettore, HDMI, DisplayPort, USB Type-C, supporto regolabile in inclinazione/altezza, nero",
  "imgs": [
   "https://m.media-amazon.com/images/I/81AZLPN6SEL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81mhFLiU5dL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/811CgdtYFRL._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/71+3UCjT2ML._AC_SL1500_.jpg"
  ],
  "summary": "Monitor ultrawide curvo da 34 pollici 3440x1440 a 100 Hz, con USB-C che eroga 65 W, supporto regolabile in altezza e funzione Picture-by-Picture. Serve a chi lavora da portatile e vuole lo spazio di due monitor su una sola scrivania, con un cavo. Il tipo di pannello non e' dichiarato e la luminosita' limita l'HDR.",
  "ean": null,
  "eanSource": null,
  "rating": 4.6,
  "reviews": 235,
  "bsr": 25449,
  "bsrCat": "Informatica"
 },
 {
  "id": "benq-pd2705u",
  "v": "monitor-scrivania",
  "brand": "BenQ",
  "name": "BenQ PD2705U",
  "price": 379.99,
  "quality": 8,
  "checked": "2026-09-13",
  "tagline": "4K calibrato per grafica e foto con USB-C 65 W e switch KVM.",
  "attrs": {
   "size": 27,
   "resolution": "3840x2160",
   "refresh": 60,
   "panel": "IPS",
   "responseTime": 5,
   "curved": false,
   "heightAdjust": null,
   "usbc": true,
   "usbcPower": 65,
   "speakers": null,
   "vesa": true
  },
  "pros": [
   "4K IPS calibrato in fabbrica, 99% sRGB e Rec.709 con Delta E<=3 dichiarati",
   "USB-C con 65 W di ricarica per il portatile",
   "Switch KVM: due PC con una sola tastiera e un solo mouse",
   "Quasi mille recensioni"
  ],
  "cons": [
   "Regolazione in altezza e altoparlanti non dichiarati in pagina",
   "Copre sRGB, non la gamma P3 dei modelli piu' recenti",
   "60 Hz e scheda Amazon incoerente (una voce indica 1440p, la risoluzione nativa e' 3840x2160)"
  ],
  "buyIf": "Fai grafica o foto per il web e vuoi un 4K calibrato che carichi il portatile.",
  "avoidIf": "Lavori su video o stampa in gamma P3 o ti serve un pannello oltre i 60 Hz.",
  "asin": "B096B3PBFZ",
  "amazonTitle": "BenQ PD2705U da 27\" 4K Monitor con 99% sRGB e calibrazione del colore",
  "imgs": [
   "https://m.media-amazon.com/images/I/61Pvf1fZAgL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/51zPJhfN0cL._AC_SL1000_.jpg",
   "https://m.media-amazon.com/images/I/810nNQii5-L._AC_SL1500_.jpg",
   "https://m.media-amazon.com/images/I/81GjM3Ah7eL._AC_SL1500_.jpg"
  ],
  "summary": "Monitor da 27 pollici 4K con pannello IPS calibrato in fabbrica, copertura sRGB e Rec.709 al 99%, USB-C da 65 W e switch KVM per due computer. E' pensato per grafici e fotografi che lavorano da portatile e vogliono colori affidabili per il web. Copre solo sRGB e la pagina non dichiara l'altezza regolabile.",
  "ean": "4718755086458",
  "eanSource": "pagina prodotto amazon.it",
  "rating": 4.4,
  "reviews": 962,
  "bsr": 3028,
  "bsrCat": "Informatica"
 }
];
