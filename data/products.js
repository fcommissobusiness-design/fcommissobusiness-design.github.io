/* ============================================================
   DATABASE PRODOTTI (dati di esempio per il prototipo)
   ------------------------------------------------------------
   ATTENZIONE: prezzi e specifiche sono PLAUSIBILI MA NON VERIFICATI.
   Servono a dimostrare il funzionamento del motore, non a consigliare.
   In produzione ogni riga va compilata da scheda tecnica + test reali
   e versionata con data di ultima verifica (campo `checked`).
   ============================================================ */

window.PRODUCTS = [

  /* ---------- ROBOT ASPIRAPOLVERE ---------- */
  {
    id: 'roborock-q7-max', v: 'robot-aspirapolvere', brand: 'Roborock', name: 'Q7 Max',
    price: 299, quality: 8.4, checked: '2026-08-20',
    tagline: 'Il cavallo di battaglia sotto i 300 euro',
    attrs: { pa: 4200, battery: 180, mop: 'passive', dock: 'none', lidar: true, height: 9.6, bin: 470, carpetLift: true, petBrush: true },
    pros: ['Aspirazione da fascia superiore', 'Lidar preciso, mappe multipiano', 'Spazzola in gomma antigroviglio'],
    cons: ['Il lavaggio è un panno trascinato, non lava davvero', 'Niente stazione autosvuotante'],
    buyIf: "Hai 60-120 m², animali in casa e vuoi la migliore aspirazione sotto i 300 €.",
    avoidIf: 'Il tuo problema vero è lavare il pavimento, non aspirare.'
  },
  {
    id: 'dreame-l10s-ultra', v: 'robot-aspirapolvere', brand: 'Dreame', name: 'L10s Ultra',
    price: 549, quality: 9.0, checked: '2026-08-20',
    tagline: 'Stazione completa senza arrivare al prezzo top',
    attrs: { pa: 10000, battery: 210, mop: 'rotating', dock: 'full', lidar: true, height: 9.7, bin: 350, carpetLift: true, petBrush: true },
    pros: ['Doppio panno rotante che lava sul serio', 'Stazione: svuota, lava e asciuga i panni', 'Solleva i panni sui tappeti'],
    cons: ['La stazione è grande e va collegata vicino a una presa', 'Manutenzione periodica del serbatoio sporco'],
    buyIf: 'Vuoi il pacchetto completo aspira + lava + stazione senza spendere oltre 600 €.',
    avoidIf: 'Hai un monolocale o non hai spazio per una base ingombrante.'
  },
  {
    id: 'ecovacs-n20-pro', v: 'robot-aspirapolvere', brand: 'Ecovacs', name: 'Deebot N20 Pro',
    price: 269, quality: 7.9, checked: '2026-08-20',
    tagline: 'Entry level con stazione di svuotamento',
    attrs: { pa: 8000, battery: 300, mop: 'vibrating', dock: 'dust', lidar: true, height: 10.3, bin: 420, carpetLift: false, petBrush: true },
    pros: ['Potenza dichiarata molto alta per il prezzo', 'Stazione autosvuotante inclusa', 'App matura'],
    cons: ['Non solleva il panno sui tappeti', 'Corpo un po alto, passa male sotto i mobili bassi'],
    buyIf: 'Vuoi la stazione autosvuotante spendendo meno di 300 €.',
    avoidIf: 'Hai molti tappeti e useresti spesso la funzione lavaggio.'
  },
  {
    id: 'roborock-s8-maxv', v: 'robot-aspirapolvere', brand: 'Roborock', name: 'S8 MaxV Ultra',
    price: 1099, quality: 9.4, checked: '2026-08-20',
    tagline: 'Il riferimento assoluto, a un prezzo da riferimento assoluto',
    attrs: { pa: 10000, battery: 180, mop: 'rotating', dock: 'full', lidar: true, height: 9.85, bin: 270, carpetLift: true, petBrush: true },
    pros: ['Riconoscimento ostacoli il migliore della categoria', 'Braccetto laterale per bordi e angoli', 'Stazione con acqua calda e asciugatura'],
    cons: ['Costa quanto tre robot decenti', 'Contenitore polvere piccolo a bordo'],
    buyIf: 'Vuoi il massimo e il budget non è il vincolo principale.',
    avoidIf: 'Cerchi il miglior rapporto qualità/prezzo: qui paghi molto le ultime raffinatezze.'
  },
  {
    id: 'xiaomi-e10', v: 'robot-aspirapolvere', brand: 'Xiaomi', name: 'Robot Vacuum E10',
    price: 149, quality: 6.8, checked: '2026-08-20',
    tagline: 'Il minimo sindacale che funziona',
    attrs: { pa: 4000, battery: 130, mop: 'passive', dock: 'none', lidar: false, height: 8.1, bin: 400, carpetLift: false, petBrush: false },
    pros: ['Prezzo bassissimo', 'Molto basso, passa sotto i mobili', 'Aspirazione dignitosa'],
    cons: ['Navigazione a giroscopio: gira a caso rispetto al lidar', 'Spazzola a setole, i capelli si attorcigliano'],
    buyIf: 'Hai un appartamento piccolo e regolare e vuoi spendere il minimo.',
    avoidIf: 'Hai più stanze, animali o vuoi mappe e stanze virtuali.'
  },
  {
    id: 'roomba-combo-j7', v: 'robot-aspirapolvere', brand: 'iRobot', name: 'Roomba Combo j7+',
    price: 599, quality: 8.3, checked: '2026-08-20',
    tagline: 'Il più bravo a evitare i disastri',
    attrs: { pa: 3000, battery: 75, mop: 'passive', dock: 'dust', lidar: false, height: 8.7, bin: 400, carpetLift: true, petBrush: true },
    pros: ['Riconoscimento escrementi animali con garanzia iRobot', 'Panno che si solleva sul tetto sui tappeti', 'Doppia spazzola in gomma ottima sui peli'],
    cons: ['Autonomia bassa, 75 minuti', 'Navigazione a telecamera meno precisa del lidar'],
    buyIf: 'Hai un cane o un gatto e la tua paura numero uno è che il robot spalmi qualcosa.',
    avoidIf: 'Hai una casa grande: con 75 minuti di autonomia fa troppe ricariche.'
  },
  {
    id: 'dreame-d10-plus', v: 'robot-aspirapolvere', brand: 'Dreame', name: 'D10 Plus',
    price: 279, quality: 8.1, checked: '2026-08-20',
    tagline: 'Stazione autosvuotante al prezzo di un robot base',
    attrs: { pa: 6000, battery: 170, mop: 'vibrating', dock: 'dust', lidar: true, height: 9.7, bin: 570, carpetLift: false, petBrush: true },
    pros: ['Sacchetto da 2,5 L: lo tocchi una volta ogni due mesi', 'Lidar con mappatura multipiano', 'Autonomia lunga'],
    cons: ['Il modulo lavaggio è basilare', 'Base rumorosa durante lo svuotamento'],
    buyIf: 'Vuoi dimenticarti del robot per settimane senza spendere oltre 300 €.',
    avoidIf: 'Il lavaggio del pavimento è la funzione che ti interessa di più.'
  },
  {
    id: 'roborock-qrevo-s', v: 'robot-aspirapolvere', brand: 'Roborock', name: 'Qrevo S',
    price: 649, quality: 8.9, checked: '2026-08-20',
    tagline: 'Il compromesso intelligente della fascia alta',
    attrs: { pa: 7000, battery: 190, mop: 'rotating', dock: 'full', lidar: true, height: 9.65, bin: 270, carpetLift: true, petBrush: true },
    pros: ['Panni rotanti con sollevamento da 10 mm', 'Stazione con lavaggio panni ad acqua calda', 'Spazzola antigroviglio molto efficace'],
    cons: ['Riconoscimento ostacoli inferiore ai top di gamma', 'Prezzo che sconfina nel territorio premium'],
    buyIf: 'Vuoi il 90% del top di gamma a poco più della metà del prezzo.',
    avoidIf: 'Puoi stare sotto i 550 €: la differenza reale con la fascia inferiore è sottile.'
  },

  /* ---------- SEDIE ERGONOMICHE ---------- */
  {
    id: 'sihoo-m18', v: 'sedie-ergonomiche', brand: 'Sihoo', name: 'M18',
    price: 159, quality: 7.2, checked: '2026-08-20',
    tagline: "L'ergonomica vera più economica che consiglierei",
    attrs: { lumbar: 'adj', headrest: true, armrests: 2, maxWeight: 150, hMin: 160, hMax: 185, material: 'mesh', recline: 120, footrest: false },
    pros: ['Supporto lombare regolabile, raro a questo prezzo', 'Schienale in rete traspirante', 'Portata dichiarata 150 kg'],
    cons: ['Braccioli solo su e giù', 'Imbottitura seduta sottile dopo 6 ore'],
    buyIf: 'Passi 4-6 ore seduto e vuoi il salto di qualità dalla sedia da 60 €.',
    avoidIf: 'Stai seduto 8+ ore al giorno o sei sopra 1,85 m.'
  },
  {
    id: 'sihoo-doro-c300', v: 'sedie-ergonomiche', brand: 'Sihoo', name: 'Doro C300',
    price: 349, quality: 8.7, checked: '2026-08-20',
    tagline: 'Il miglior rapporto qualità/prezzo della categoria',
    attrs: { lumbar: 'dynamic', headrest: true, armrests: 3, maxWeight: 150, hMin: 160, hMax: 195, material: 'mesh', recline: 128, footrest: false },
    pros: ['Lombare dinamico che segue la schiena mentre ti reclini', 'Braccioli 3D morbidi', 'Costruzione solida, alluminio sulla base'],
    cons: ['Montaggio lungo, circa 40 minuti', 'Estetica ingombrante in un salotto'],
    buyIf: 'Lavori 8 ore al giorno da seduto e hai problemi lombari.',
    avoidIf: 'Ti serve una sedia occasionale: qui paghi ergonomia che non useresti.'
  },
  {
    id: 'songmics-obn', v: 'sedie-ergonomiche', brand: 'Songmics', name: 'OBN Basic',
    price: 129, quality: 6.6, checked: '2026-08-20',
    tagline: 'Sedia da scrivania onesta, non una vera ergonomica',
    attrs: { lumbar: 'fixed', headrest: false, armrests: 2, maxWeight: 120, hMin: 155, hMax: 180, material: 'fabric', recline: 110, footrest: false },
    pros: ['Prezzo contenuto', 'Montaggio semplice', 'Ingombro ridotto'],
    cons: ['Lombare fisso non regolabile', 'Niente poggiatesta', 'Portata 120 kg'],
    buyIf: 'Ti serve una sedia decente per poche ore al giorno.',
    avoidIf: 'Hai mal di schiena o stai seduto più di 4 ore.'
  },
  {
    id: 'hbada-e3', v: 'sedie-ergonomiche', brand: 'Hbada', name: 'E3 Pro',
    price: 249, quality: 8.0, checked: '2026-09-08',
    tagline: 'Regolabile in ogni punto, braccioli 6D',
    attrs: { lumbar: 'dynamic', headrest: true, armrests: 6, maxWeight: 130, hMin: 160, hMax: 188, material: 'mesh', recline: 135, footrest: false },
    pros: ['Supporto lombare dinamico a 3 zone', 'Braccioli 6D, i più regolabili del gruppo', 'Testiera 4D e reclinazione fino a 135°'],
    cons: ['Portata 130 kg', 'Rete della seduta rigida i primi giorni'],
    buyIf: 'Vuoi regolare ogni singola parte finché non trovi la posizione giusta.',
    avoidIf: 'Sei sopra i 110 kg o cerchi la massima solidità.'
  },
  {
    id: 'herman-miller-sayl', v: 'sedie-ergonomiche', brand: 'Herman Miller', name: 'Sayl',
    price: 799, quality: 9.1, checked: '2026-08-20',
    tagline: 'Qualità costruttiva di un altro pianeta',
    attrs: { lumbar: 'dynamic', headrest: false, armrests: 3, maxWeight: 160, hMin: 155, hMax: 195, material: 'mesh', recline: 125, footrest: false },
    pros: ['Garanzia 12 anni', 'Schienale elastomerico che si adatta senza regolazioni', 'Occupa poco spazio visivo'],
    cons: ['Nessun poggiatesta disponibile su questo modello', 'Prezzo fuori scala rispetto alla concorrenza'],
    buyIf: 'Vuoi comprare una sedia sola per i prossimi dieci anni.',
    avoidIf: 'Il poggiatesta è per te irrinunciabile.'
  },
  {
    id: 'diablo-v-basic', v: 'sedie-ergonomiche', brand: 'Diablo', name: 'V-Basic',
    price: 269, quality: 7.4, checked: '2026-08-20',
    tagline: 'Impostazione gaming, seduta avvolgente',
    attrs: { lumbar: 'adj', headrest: true, armrests: 3, maxWeight: 150, hMin: 165, hMax: 195, material: 'pu', recline: 160, footrest: false },
    pros: ['Si reclina fino a 160°, quasi a letto', 'Cuscini lombare e cervicale inclusi', 'Struttura robusta'],
    cons: ['Ecopelle: caldissima in estate', 'Ergonomia da lavoro inferiore a una mesh pari prezzo'],
    buyIf: 'Vuoi una postazione gaming e ti piace la seduta avvolgente.',
    avoidIf: 'Ci lavori 8 ore al giorno e sudi facilmente.'
  },
  {
    id: 'flexispot-bs11', v: 'sedie-ergonomiche', brand: 'Flexispot', name: 'ErgoX Pro',
    price: 399, quality: 8.5, checked: '2026-09-08',
    tagline: 'Costruita per le corporature importanti',
    attrs: { lumbar: 'adj', headrest: true, armrests: 7, maxWeight: 250, hMin: 165, hMax: 200, material: 'mesh', recline: 130, footrest: false },
    pros: ['Portata 250 kg, la più alta del gruppo', 'Altezza regolabile su 12 livelli, adatta oltre 1,90 m', 'Braccioli 7D, lombare 5D e poggiatesta 4D'],
    cons: ['Molto ingombrante', 'Sovradimensionata sotto 1,75 m'],
    buyIf: 'Sei alto oltre 1,85 m o sopra i 110 kg.',
    avoidIf: 'Hai una scrivania piccola o una corporatura media.'
  },

  /* ---------- MATERASSI ---------- */
  {
    id: 'emma-original', v: 'materassi', brand: 'Emma', name: 'Original',
    price: 349, quality: 8.6, checked: '2026-08-20',
    tagline: 'Il memory di riferimento in Italia',
    attrs: { type: 'memory', firmness: 6, cooling: 6, motion: 9, edge: 6, height: 25, maxKg: 110, trial: 100 },
    pros: ['Isolamento del movimento eccellente in coppia', 'Accoglienza equilibrata, adatta a quasi tutti', 'Prova lunga con reso'],
    cons: ['Trattiene un po di calore', 'Bordi cedevoli se ti siedi sul bordo'],
    buyIf: 'Dormi di fianco o in posizione mista e condividi il letto.',
    avoidIf: 'Sudi molto di notte o superi i 110 kg.'
  },
  {
    id: 'marcapiuma-silver-22', v: 'materassi', brand: 'Marcapiuma', name: 'Memory Silver H3 Taglie Forti',
    price: 279, quality: 8.0, checked: '2026-09-08',
    tagline: 'Memory italiano rigido, pensato per corporature importanti',
    attrs: { type: 'memory', firmness: 8, cooling: 5, motion: 8, edge: 7, height: 21, maxKg: 130, trial: 0 },
    pros: ['Portanza H3 rigida, tiene bene le corporature importanti', 'Dispositivo medico ortopedico certificato', 'Rivestimento sfoderabile e antiacaro'],
    cons: ['Nessun periodo di prova esteso', 'Il più caldo del gruppo'],
    buyIf: 'Dormi sulla schiena, pesi oltre 95 kg e vuoi un memory davvero sostenuto.',
    avoidIf: 'Dormi di fianco o sei leggero: lo troveresti troppo duro.'
  },
  {
    id: 'dormeo-memosan', v: 'materassi', brand: 'Dormeo', name: 'Memosan',
    price: 199, quality: 6.9, checked: '2026-08-20',
    tagline: 'Entry level, per stanze degli ospiti',
    attrs: { type: 'memory', firmness: 5, cooling: 4, motion: 7, edge: 4, height: 18, maxKg: 90, trial: 0 },
    pros: ['Prezzo basso', 'Leggero da maneggiare', 'Accoglienza morbida'],
    cons: ['18 cm di spessore sono pochi', 'Portata limitata', 'Bordi molto deboli'],
    buyIf: 'Ti serve un materasso per la camera degli ospiti o un uso saltuario.',
    avoidIf: 'È il materasso su cui dormirai ogni notte per anni.'
  },
  {
    id: 'emma-hybrid-premium', v: 'materassi', brand: 'Emma', name: 'Hybrid Premium',
    price: 649, quality: 9.0, checked: '2026-08-20',
    tagline: 'Molle insacchettate più memory, il compromesso migliore',
    attrs: { type: 'ibrido', firmness: 7, cooling: 8, motion: 8, edge: 9, height: 25, maxKg: 130, trial: 100 },
    pros: ['Molle insacchettate: sostegno e traspirazione', 'Bordi rinforzati, ci si siede senza affondare', 'Regge bene le corporature importanti'],
    cons: ['Prezzo alto', 'Pesante da girare da soli'],
    buyIf: 'Sei sopra i 95 kg, soffri il caldo o hai problemi di schiena.',
    avoidIf: 'Cerchi la sensazione avvolgente tipica del memory puro.'
  },
  {
    id: 'baldiflex-zaffiro', v: 'materassi', brand: 'Baldiflex', name: 'Emporio Duck Memory',
    price: 229, quality: 7.4, checked: '2026-09-08',
    tagline: 'Morbido ed economico, 25 cm di spessore',
    attrs: { type: 'memory', firmness: 4, cooling: 5, motion: 8, edge: 5, height: 25, maxKg: 100, trial: 30 },
    pros: ['Accoglienza morbida, buono per chi dorme di fianco', 'Prezzo aggressivo per 25 cm di spessore', 'Rivestimento Aloe Vera sfoderabile'],
    cons: ['Troppo morbido per chi dorme prono', 'Sostegno lombare limitato'],
    buyIf: 'Dormi di fianco, sei leggero e vuoi spendere poco.',
    avoidIf: 'Dormi a pancia in giù o pesi oltre 95 kg.'
  },
  {
    id: 'perdormire-cool-blue', v: 'materassi', brand: 'Perdormire', name: 'Cool Blue',
    price: 549, quality: 8.4, checked: '2026-08-20',
    tagline: 'Pensato per chi ha sempre caldo',
    attrs: { type: 'ibrido', firmness: 6, cooling: 9, motion: 8, edge: 7, height: 24, maxKg: 120, trial: 60 },
    pros: ['La migliore dissipazione del calore del gruppo', 'Rigidità media, adatta a più posizioni', 'Buon sostegno dei bordi'],
    cons: ['Costa più di un memory equivalente', 'Sensazione meno avvolgente'],
    buyIf: 'Ti svegli sudato e hai già scartato i memory per questo motivo.',
    avoidIf: 'Il caldo non è un tuo problema: pagheresti una funzione inutile.'
  },

  /* ---------- UTENSILI ELETTRICI ---------- */
  {
    id: 'bosch-psb-1800', v: 'utensili-elettrici', brand: 'Bosch', name: 'PSB 1800 LI-2',
    price: 89, quality: 7.1, checked: '2026-08-20',
    tagline: 'Il trapano di casa, con batteria inclusa',
    attrs: { torque: 38, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: true, weight: 1.4, eco: 'Bosch Home' },
    pros: ['Batteria e caricatore inclusi', 'Percussione per forare il muro', 'Leggero e maneggevole'],
    cons: ['Motore con spazzole, meno efficiente', 'Coppia bassa per lavori impegnativi'],
    buyIf: 'Ti serve un trapano per la casa e parti da zero.',
    avoidIf: 'Devi forare cemento armato o lavorarci tutti i giorni.'
  },
  {
    id: 'makita-dhp482z', v: 'utensili-elettrici', brand: 'Makita', name: 'DHP482Z',
    price: 129, quality: 8.5, checked: '2026-08-20',
    tagline: 'Solo corpo macchina, per chi ha già le batterie',
    attrs: { torque: 62, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: false, weight: 1.6, eco: 'Makita LXT' },
    pros: ['Coppia 62 Nm, molto sopra la media domestica', 'Affidabilità Makita', 'Ecosistema LXT enorme'],
    cons: ['Batteria e caricatore NON inclusi', 'Non brushless'],
    buyIf: 'Hai già batterie Makita LXT in casa.',
    avoidIf: 'È il tuo primo utensile: dovresti comprare tutto a parte.'
  },
  {
    id: 'einhell-te-cd', v: 'utensili-elettrici', brand: 'Einhell', name: 'TE-CD 18/2',
    price: 69, quality: 6.7, checked: '2026-08-20',
    tagline: 'Il più economico che vale la pena, ma è solo corpo',
    attrs: { torque: 44, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: false, weight: 1.3, eco: 'Einhell Power X' },
    pros: ['Prezzo minimo del gruppo', 'Molto leggero, 1,3 kg', 'Ecosistema Power X-Change ampio e economico'],
    cons: ['Versione Li-Solo: batteria e caricabatteria non inclusi', 'Qualità costruttiva sotto Bosch e Makita'],
    buyIf: 'Hai già una batteria Power X-Change e ti serve un secondo utensile.',
    avoidIf: 'Prevedi un uso regolare o lavori su materiali duri.'
  },
  {
    id: 'bosch-gsb-18v-55', v: 'utensili-elettrici', brand: 'Bosch Professional', name: 'GSB 18V-55',
    price: 179, quality: 8.8, checked: '2026-08-20',
    tagline: 'Brushless professionale in formato compatto',
    attrs: { torque: 55, volts: 18, percussion: true, sds: false, brushless: true, batteryIncl: false, weight: 1.0, eco: 'Bosch Professional' },
    pros: ['Motore brushless: più autonomia e durata', 'Solo 1 kg, entra ovunque', 'Linea Professional, non hobby'],
    cons: ['Venduto senza batteria', 'Batterie Professional più care'],
    buyIf: 'Ci lavori spesso, hai già batterie Bosch Professional e vuoi un utensile che duri anni.',
    avoidIf: 'Lo useresti tre volte all anno.'
  },
  {
    id: 'dewalt-dcd778', v: 'utensili-elettrici', brand: 'DeWalt', name: 'DCD778N',
    price: 159, quality: 8.4, checked: '2026-08-20',
    tagline: 'La coppia più alta del gruppo, solo corpo',
    attrs: { torque: 65, volts: 18, percussion: true, sds: false, brushless: true, batteryIncl: false, weight: 1.2, eco: 'DeWalt XR' },
    pros: ['Coppia 65 Nm, la più alta tra i trapani qui', 'Motore brushless della linea XR', 'Buon equilibrio tra potenza e peso'],
    cons: ['Sigla N: venduto senza batteria', 'Ecosistema meno diffuso in Italia'],
    buyIf: 'Vuoi la coppia più alta e hai già batterie DeWalt XR.',
    avoidIf: 'Hai già investito in un altro ecosistema di batterie.'
  },
  {
    id: 'blackdecker-bdchd18', v: 'utensili-elettrici', brand: 'Black+Decker', name: 'BDCHD18',
    price: 79, quality: 6.4, checked: '2026-08-20',
    tagline: 'Kit tuttofare da cassetto',
    attrs: { torque: 30, volts: 18, percussion: true, sds: false, brushless: false, batteryIncl: true, weight: 1.5, eco: 'Black+Decker 18V' },
    pros: ['Spesso venduto con set di punte e accessori', 'Prezzo basso', 'Semplice da usare'],
    cons: ['Coppia 30 Nm, la più bassa', 'Materiali plastici'],
    buyIf: 'Vuoi il minimo indispensabile in casa e non hai nulla.',
    avoidIf: 'Devi forare muri portanti o serrare viti lunghe nel legno.'
  },
  {
    id: 'makita-hr2470', v: 'utensili-elettrici', brand: 'Makita', name: 'HR2470',
    price: 189, quality: 8.9, checked: '2026-08-20',
    tagline: 'Tassellatore SDS: categoria diversa, non un trapano',
    attrs: { torque: 0, volts: 0, percussion: true, sds: true, brushless: false, batteryIncl: false, weight: 2.9, eco: 'Rete elettrica' },
    pros: ['SDS-Plus: fora il cemento armato senza fatica', 'Tre funzioni: foratura, percussione, scalpello', 'Costruzione indistruttibile'],
    cons: ['Pesante, 2,9 kg', 'A filo, serve la presa', 'Non è un avvitatore'],
    buyIf: 'Devi forare cemento armato o pietra, non cartongesso.',
    avoidIf: 'Ti serve avvitare: questo non è lo strumento giusto.'
  },

  /* ---------- MACCHINE DA CAFFÈ ---------- */
  {
    id: 'delonghi-dedica-ec685', v: 'macchine-caffe', brand: "De'Longhi", name: 'Dedica EC685',
    price: 179, quality: 8.0, checked: '2026-08-20',
    tagline: 'Manuale strettissima, per chi ha poco spazio',
    attrs: { type: 'manuale', grinder: false, milk: 'pannarello', tank: 1.1, costPerCup: 0.18, minutes: 3, width: 15 },
    pros: ['Larga solo 15 cm', 'Ottimo espresso con macinato buono', 'Riscaldamento rapido'],
    cons: ['Niente macinacaffè integrato', 'Il montalatte richiede pratica'],
    buyIf: 'Hai un piano cucina stretto e ti piace preparare il caffè a mano.',
    avoidIf: 'Vuoi premere un pulsante e avere il cappuccino pronto.'
  },
  {
    id: 'nespresso-vertuo-pop', v: 'macchine-caffe', brand: 'Nespresso', name: 'Vertuo Pop',
    price: 99, quality: 7.0, checked: '2026-08-20',
    tagline: 'Zero pensieri, costo per tazza alto',
    attrs: { type: 'capsule', grinder: false, milk: 'none', tank: 0.6, costPerCup: 0.55, minutes: 1, width: 14 },
    pros: ['Un pulsante e basta', 'Ingombro minimo', 'Prezzo di ingresso basso'],
    cons: ['0,55 € a tazza: il più caro nel lungo periodo', 'Capsule proprietarie, poca scelta'],
    buyIf: 'Bevi 1-2 caffè al giorno e vuoi zero manutenzione.',
    avoidIf: 'Bevete in tanti in casa: il costo capsule diventa insostenibile.'
  },
  {
    id: 'delonghi-magnifica-s', v: 'macchine-caffe', brand: "De'Longhi", name: 'Magnifica S ECAM',
    price: 329, quality: 8.6, checked: '2026-08-20',
    tagline: 'Automatica con macine, il passaggio ai chicchi',
    attrs: { type: 'automatica', grinder: true, milk: 'pannarello', tank: 1.8, costPerCup: 0.14, minutes: 1, width: 24 },
    pros: ['Macina in grani: 0,14 € a tazza', 'Serbatoio grande da 1,8 L', 'Affidabilità collaudata'],
    cons: ['Montalatte manuale con lancia', 'Manutenzione periodica del gruppo infusore'],
    buyIf: 'Bevete 3+ caffè al giorno e volete abbattere il costo per tazza.',
    avoidIf: 'Volete cappuccini automatici senza toccare nulla.'
  },
  {
    id: 'philips-3200-lattego', v: 'macchine-caffe', brand: 'Philips', name: '3200 LatteGo',
    price: 449, quality: 8.8, checked: '2026-08-20',
    tagline: 'Cappuccino automatico, pulizia in 15 secondi',
    attrs: { type: 'automatica', grinder: true, milk: 'auto', tank: 1.8, costPerCup: 0.14, minutes: 1, width: 25 },
    pros: ['Sistema LatteGo: due pezzi, niente tubicini', 'Cappuccino con un tasto', 'Macine in ceramica'],
    cons: ['Ingombro importante', 'Prezzo sopra la Magnifica per la sola parte latte'],
    buyIf: 'In casa bevete cappuccini regolarmente e nessuno vuole montare il latte a mano.',
    avoidIf: 'Bevete solo espresso: paghereste il gruppo latte per niente.'
  },
  {
    id: 'bialetti-gioia', v: 'macchine-caffe', brand: 'Bialetti', name: 'Gioia',
    price: 69, quality: 6.2, checked: '2026-08-20',
    tagline: 'Capsule economiche, macchina essenziale',
    attrs: { type: 'capsule', grinder: false, milk: 'none', tank: 0.5, costPerCup: 0.25, minutes: 1, width: 13 },
    pros: ['La più economica', 'Capsule Bialetti sotto i 0,25 €', 'Minuscola'],
    cons: ['Costruzione plasticosa', 'Serbatoio da 0,5 L da riempire spesso'],
    buyIf: 'Vuoi il caffè in capsule spendendo il minimo possibile.',
    avoidIf: 'Cerchi un espresso di livello o bevi molti caffè.'
  },
  {
    id: 'gaggia-classic-evo', v: 'macchine-caffe', brand: 'Gaggia', name: 'Classic Evo Pro',
    price: 469, quality: 9.0, checked: '2026-08-20',
    tagline: 'Per chi vuole imparare a fare espresso sul serio',
    attrs: { type: 'manuale', grinder: false, milk: 'pannarello', tank: 2.1, costPerCup: 0.14, minutes: 5, width: 24 },
    pros: ['Gruppo E61 commerciale, caldaia in ottone', 'Modificabile e riparabile per anni', 'Portafiltro professionale da 58 mm'],
    cons: ['Serve un macinacaffè a parte, altri 150-250 €', 'Curva di apprendimento ripida'],
    buyIf: "L'espresso è un hobby e ti va di dedicargli tempo.",
    avoidIf: 'Vuoi il caffè pronto in 30 secondi senza pensarci.'
  },
  {
    id: 'delonghi-rivelia', v: 'macchine-caffe', brand: "De'Longhi", name: 'Rivelia',
    price: 799, quality: 9.1, checked: '2026-08-20',
    tagline: 'Il top automatico, due contenitori di chicchi',
    attrs: { type: 'automatica', grinder: true, milk: 'auto', tank: 1.4, costPerCup: 0.14, minutes: 1, width: 24 },
    pros: ['Due contenitori chicchi intercambiabili', 'Display a colori, profili utente', 'Caraffa latte automatica lavabile in lavastoviglie'],
    cons: ['Prezzo molto alto', 'Serbatoio acqua più piccolo della Magnifica'],
    buyIf: 'Volete il massimo dell automatico e più tipi di caffè in casa.',
    avoidIf: 'La Philips 3200 fa il 90% delle stesse cose a 350 € in meno.'
  }
];
