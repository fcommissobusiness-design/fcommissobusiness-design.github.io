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
    price: 545.94, quality: 8.8, checked: '2026-09-29',
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
    price: 551.06, quality: 9.1, checked: '2026-09-29',
    tagline: 'Rivelia: automatica a chicchi con due contenitori intercambiabili',
    attrs: { type: 'automatica', grinder: true, milk: 'auto', tank: 1.4, costPerCup: 0.14, minutes: 1, width: 24 },
    pros: ['Rivelia macina i chicchi al momento, con due contenitori intercambiabili (es. normale e decaffeinato)', 'Display touch a colori e profili utente', 'Caraffa latte automatica lavabile in lavastoviglie'],
    cons: ['Prezzo alto', 'Serbatoio acqua da 1,4 L, più piccolo della Magnifica', 'Non usa capsule: funziona solo con caffè in grani'],
    buyIf: "Volete il massimo dell'automatico e più tipi di caffè in casa.",
    avoidIf: 'Ti basta il cappuccino automatico: la Philips 3200 LatteGo lo fa, con meno ricette e senza il secondo contenitore di chicchi.'
  },

  /* ---------- SICUREZZA CASA SMART (brand Imou) ----------
     Catalogo partner: link primario via Awin (store.imou.com), link
     secondario Amazon.it dove disponibile. Prodotti selezionati fra i 55
     dello shop ufficiale Imou IT, bilanciati per budget e scenario d'uso. */
  {
    id: 'imou-aov-dual', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV Dual 3K',
    asin: 'B0H8PLP5PN', rating: 4.3, reviews: 128,
    img: '/assets/imou/aov-dual.jpg',
    price: 149.99, quality: 8.6, checked: '2026-10-11',
    tagline: 'Doppia lente e SIM 4G: la copri anche se internet casa cade',
    attrs: { posizione: 'esterno', quattroG: true, batteria: true, solare: true, lenti: 2, mp: '5+5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 11 },
    pros: ['Due obiettivi affiancati che coprono un angolo largo senza zone cieche', 'SIM 4G integrata: continua a funzionare anche se il router di casa va giù', 'Si può alimentare con pannello solare opzionale, zero cavi'],
    cons: ['Serve una SIM 4G aggiuntiva per sfruttare la ridondanza (costo a parte)', "Non supporta ONVIF: non la integri in un NVR di terze parti"],
    buyIf: "Vuoi sorvegliare un ingresso o un giardino senza dipendere solo dal Wi-Fi di casa.",
    avoidIf: "Hai già Wi-Fi stabile fin lì: paghi il 4G che non useresti mai.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-dual'
  },
  {
    id: 'imou-aov-air', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV Air 5MP',
    img: '/assets/imou/aov-air.jpg',
    price: 46.99, quality: 7.8, checked: '2026-10-11',
    tagline: 'La 4G più economica del catalogo Imou',
    attrs: { posizione: 'esterno', quattroG: true, batteria: true, solare: true, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 11 },
    pros: ['Meno di 50 euro con 4G integrato: raro trovarlo a questo prezzo', 'Si attacca con pannello solare opzionale, zero cavi', 'Visione notturna a colori (non solo bianco e nero)'],
    cons: ["Risoluzione 5MP singola: ampio quello che inquadra una lente sola, non tutto l'angolo", "Non supporta ONVIF né NVR terzi"],
    buyIf: "Vuoi mettere una telecamera dove non c'è né Wi-Fi né corrente, spendendo poco.",
    avoidIf: "Devi coprire un'area ampia: una singola lente non basta.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-air-5mp-3k'
  },
  {
    id: 'imou-aov-pt', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV PT 3K',
    img: '/assets/imou/aov-pt.jpg',
    price: 119.99, quality: 8.3, checked: '2026-10-11',
    tagline: 'Si gira da sola per seguire chi passa',
    attrs: { posizione: 'esterno', quattroG: true, batteria: true, solare: true, lenti: 1, mp: '5', zoom: 'si', notte: 'colore', storage: 'cloud+local', pt: true, width: 12 },
    pros: ['Motorizzata: si ruota da sola per inseguire persone e veicoli in movimento', 'Zoom digitale per avvicinare chi è lontano senza perdere la scena', '4G e Wi-Fi dual band, va dove vuoi tu'],
    cons: ['Fare la panoramica consuma più batteria', 'Il meccanismo è una parte in più che può guastarsi nel tempo'],
    buyIf: "Vuoi inseguire chi entra nel cortile invece di coprirlo con due telecamere fisse.",
    avoidIf: "Ti basta sorvegliare un punto preciso (porta d'ingresso, box auto): una fissa costa meno.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-it'
  },
  {
    id: 'imou-aov-track-plus', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'AOV Track Plus',
    img: '/assets/imou/aov-track-plus.jpg',
    price: 89.99, quality: 8.1, checked: '2026-10-11',
    tagline: 'Due lenti e tracking automatico sotto i 90 euro',
    attrs: { posizione: 'esterno', quattroG: false, batteria: true, solare: true, lenti: 2, mp: '6', zoom: 'si', notte: 'colore', storage: 'cloud+local', width: 11 },
    pros: ['Doppia lente con tracking automatico: segue chi si muove nell\'inquadratura', 'Pannello solare opzionale: una volta montata la dimentichi', 'Rapporto qualità-prezzo molto buono per il doppio sensore'],
    cons: ['Solo Wi-Fi, niente SIM 4G: serve copertura dove la metti', 'Compatibile con app Imou, non con sistemi terzi (ONVIF assente)'],
    buyIf: "Vuoi il tracking automatico con Wi-Fi casa e un budget sotto i 100 euro.",
    avoidIf: "Il Wi-Fi non arriva fin lì: ti serve una AOV Dual con il 4G.",
    imouUrl: 'https://store.imou.com/it-it/products/aov-track-plus-6mp-8mp'
  },
  {
    id: 'imou-cell-3c', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Cell 3C',
    img: '/assets/imou/cell-3c.jpg',
    price: 39.99, quality: 7.5, checked: '2026-10-11',
    tagline: 'Wireless al 100%, meno di 40 euro',
    attrs: { posizione: 'universale', quattroG: false, batteria: true, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 7 },
    pros: ["Davvero senza cavi: funziona solo a batteria, la ricarichi quando serve", 'Piccola e leggera, si piazza praticamente ovunque', 'Prezzo entry level: ne compri due senza spendere 100 euro'],
    cons: ['Batteria va ricaricata ogni 2-4 mesi a seconda di quanto viene attivata', 'Niente pannello solare in questo modello'],
    buyIf: "Vuoi mettere una telecamera in un posto senza prese, per poco tempo o come dissuasore.",
    avoidIf: "Ti serve registrazione continua: la batteria non regge.",
    imouUrl: 'https://store.imou.com/it-it/products/cell-3c-100-wireless-3mp-2k'
  },
  {
    id: 'imou-cruiser-se-kit', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Cruiser SE+ Kit (2 pz)',
    img: '/assets/imou/cruiser-se-kit.jpg',
    price: 105.99, quality: 7.9, checked: '2026-10-11',
    tagline: 'Due telecamere in un colpo per coprire casa',
    attrs: { posizione: 'esterno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 10, kitPz: 2 },
    pros: ['Due telecamere nella stessa confezione a circa 50 euro l\'una', 'Visione notturna a colori con faretto incorporato', 'Resistenti a pioggia e sole prolungato'],
    cons: ['Alimentazione a filo: serve una presa vicino a ciascuna', 'Niente batteria né 4G: solo cablate su Wi-Fi casa'],
    buyIf: "Devi coprire due punti della casa (davanti + retro) con il minimo esborso.",
    avoidIf: "Non hai presa di corrente a portata: queste vanno collegate.",
    imouUrl: 'https://store.imou.com/it-it/products/2pcs-cruiser-se-4mp-kit'
  },
  {
    id: 'imou-bullet-3', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Bullet 3',
    asin: 'B08BY1C655', rating: 4.3, reviews: 2800,
    img: '/assets/imou/bullet-3.jpg',
    price: 54.99, quality: 7.6, checked: '2026-10-11',
    tagline: 'Il classico bullet esterno di Imou, bene su Amazon da anni',
    attrs: { posizione: 'esterno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 8 },
    pros: ['Modello storico Imou con quasi tremila recensioni Amazon', 'Impermeabile IP67: pioggia e polvere non la fermano', 'Notte a colori con faretto incorporato, non il solito bianco e nero sgranato'],
    cons: ['Serve corrente a filo (nessuna versione a batteria)', "Angolo di visione singolo: se vuoi coprire 180° ne servono due"],
    buyIf: "Vuoi una bullet esterna solida di un brand noto senza spendere oltre 60 euro.",
    avoidIf: "Hai bisogno di 4G o batteria: cerca nella serie AOV.",
    imouUrl: 'https://store.imou.com/it-it/products/imou-bullet-2c-outdoor-wifi-surveillance-security-smart-camera-waterproof'
  },
  {
    id: 'imou-bulb-cam', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Bulb Cam',
    img: '/assets/imou/bulb-cam.jpg',
    price: 39.99, quality: 7.4, checked: '2026-10-11',
    tagline: 'Telecamera dentro una lampadina a vite',
    attrs: { posizione: 'interno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '5', zoom: 'no', notte: 'colore', storage: 'cloud+local', width: 7 },
    pros: ["Si avvita in un portalampada normale (E26/E27): zero montaggio, zero cavi aggiuntivi", "Fa anche luce: a tutti gli effetti è una lampadina smart con dentro una camera", 'Si nasconde a vista: nessuno capisce che è una telecamera'],
    cons: ["Il posizionamento dipende dalla lampada: se la lampada punta in alto, la camera guarda in alto", "Angolo di visione limitato dall'orientamento della lampada"],
    buyIf: "Vuoi una telecamera invisibile in un ingresso o corridoio dove c'è già una lampada.",
    avoidIf: "La lampada è in un punto scomodo per inquadrare quello che vuoi vedere.",
    imouUrl: 'https://store.imou.com/it-it/products/bulb-cam'
  },
  {
    id: 'imou-pet-pf1', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Pet PF1',
    img: '/assets/imou/pet-pf1.jpg',
    price: 99.99, quality: 7.7, checked: '2026-10-11',
    tagline: 'Dispenser cibo per gatti con telecamera 360°',
    attrs: { posizione: 'interno', quattroG: false, batteria: false, solare: false, lenti: 1, mp: '4', zoom: 'no', notte: 'colore', storage: 'cloud', width: 20, serbatoio: '4L' },
    pros: ['Due funzioni in uno: distribuisce il cibo e ti fa guardare il gatto quando sei fuori', 'Serbatoio da 4 litri: 2-3 settimane di autonomia per un gatto medio', 'Vista 360° della stanza, non solo la ciotola'],
    cons: ["Solo per crocchette (non cibo umido)", "Funziona solo con corrente a filo"],
    buyIf: "Lavori fuori casa e vuoi controllare che il gatto mangi e stia bene.",
    avoidIf: "Hai cani grandi o più animali che litigano al cibo: non è pensato per quello.",
    imouUrl: 'https://store.imou.com/it-it/products/distributore-intelligente-per-animali-pf1'
  },
  {
    id: 'imou-cruiser-dual-kit', v: 'sicurezza-casa-smart', brand: 'Imou', name: 'Cruiser Dual Kit (2 pz)',
    img: '/assets/imou/cruiser-dual-kit.jpg',
    price: 151.99, quality: 8.4, checked: '2026-10-11',
    tagline: 'Due telecamere doppia-lente per coprire tutta la casa',
    attrs: { posizione: 'esterno', quattroG: false, batteria: false, solare: false, lenti: 2, mp: '5+3', zoom: 'si', notte: 'colore', storage: 'cloud+local', width: 11, kitPz: 2 },
    pros: ['Due telecamere a doppia lente: campo visivo largo e dettaglio sui soggetti vicini', 'Il kit da due costa meno di comprarle separate', 'Visione notturna a colori con faretti'],
    cons: ['Vanno alimentate a filo (serve corrente a entrambe le postazioni)', "Niente SIM 4G: dove non c'è Wi-Fi non funzionano"],
    buyIf: "Vuoi la copertura ampia della doppia lente su due punti di casa.",
    avoidIf: "Ti serve mobilità o batteria: queste restano fisse e cablate.",
    imouUrl: 'https://store.imou.com/it-it/products/kit-duale-cruiser-2-pezzi-5mp-3mp-3mp-3mp'
  },

  /* ============================ UFFICIO PICCOLA ATTIVITA' (B2B seed) ============================
     Prodotti selezionati per piccole PMI, partite IVA e home office.
     ASIN non ancora popolati: l'agente giornaliero (crescita-quotidiana) li aggancia
     a Amazon via PA-API nella prossima run, poi aggiorna anche img/price/rating. */

  { id: 'brother-mfc-l2800dw', v: 'ufficio-piccola-attivita', brand: 'Brother', name: 'MFC-L2800DW',
    price: 229.00, quality: 8.3, checked: '2026-10-13',
    tagline: 'Multifunzione laser bianco e nero che dura anni senza farti pensare',
    attrs: { tipo: 'stampante', tecnologia: 'laser', colore: false, duplex: true, adf: true, wifi: true, workload: 'medium' },
    pros: ['Toner da 3000 pagine di serie: cost-per-page basso sul lungo', 'ADF per scansioni multipagina senza stare dietro al vetro', 'Driver stabile per Mac e Windows, zero sorprese ad ogni aggiornamento'],
    cons: ['Solo bianco e nero: se ti serve stampare brochure a colori, guarda altrove', 'Rumore in stampa non pensato per open space silenzioso'],
    buyIf: 'Stampi fatture, contratti, documenti in b/n ogni giorno e vuoi dimenticarti del toner per mesi.',
    avoidIf: 'Ti serve il colore o stampi meno di 50 pagine al mese: una inkjet costa meno.' },

  { id: 'hp-officejet-pro-9120e', v: 'ufficio-piccola-attivita', brand: 'HP', name: 'OfficeJet Pro 9120e',
    price: 189.00, quality: 7.9, checked: '2026-10-13',
    tagline: 'Multifunzione a colori per chi stampa poco ma vuole qualita\' buona',
    attrs: { tipo: 'stampante', tecnologia: 'inkjet', colore: true, duplex: true, adf: true, wifi: true, workload: 'light' },
    pros: ['Stampa a colori senza passare al laser costoso', 'Instant Ink opzionale: cartucce consegnate quando servono', 'Scanner fronte-retro automatico'],
    cons: ['Cost-per-page a colori piu\' alto del laser se stampi tanto', 'Richiede connessione cloud HP per sfruttare tutto'],
    buyIf: 'Stampi occasionalmente foto, grafici, documenti a colori per clienti.',
    avoidIf: 'Stampi 500 pagine al mese: il laser ti conviene subito.' },

  { id: 'canon-maxify-gx4050', v: 'ufficio-piccola-attivita', brand: 'Canon', name: 'MAXIFY GX4050',
    price: 429.00, quality: 8.4, checked: '2026-10-13',
    tagline: 'Multifunzione a serbatoio: paghi di piu\' oggi, risparmi tanto in inchiostro',
    attrs: { tipo: 'stampante', tecnologia: 'ink-tank', colore: true, duplex: true, adf: true, wifi: true, workload: 'heavy' },
    pros: ['Serbatoi d\'inchiostro ricaricabili: migliaia di pagine prima di ricomprare', 'Costo per pagina tra i piu\' bassi sul mercato', 'ADF e fronte-retro inclusi'],
    cons: ['Investimento iniziale alto rispetto alle cartucce classiche', 'Ingombra piu\' di una multifunzione standard'],
    buyIf: 'Ufficio piccolo che stampa quotidianamente e vuole smettere di spendere in cartucce.',
    avoidIf: 'Stampi raramente: non ammortizzi l\'investimento iniziale.' },

  { id: 'apc-back-ups-pro-br900gi', v: 'ufficio-piccola-attivita', brand: 'APC', name: 'Back-UPS Pro BR900GI',
    price: 189.00, quality: 8.5, checked: '2026-10-13',
    tagline: 'Gruppo di continuita\' per postazione singola o NAS piccolo',
    attrs: { tipo: 'ups', vaWatt: '900VA/540W', autonomia: '15min', uscite: 6, workload: 'light' },
    pros: ['Marchio di riferimento mondiale per UPS, assistenza seria', 'Protezione contro sbalzi e fulmini, non solo blackout', 'Software di spegnimento automatico incluso'],
    cons: ['540W reali: non alimenta un rack con piu\' server', 'Batteria da sostituire ogni 3-5 anni (costo a parte)'],
    buyIf: 'Hai un NAS, un desktop critico o un modem/router che non devono mai spegnersi.',
    avoidIf: 'Devi proteggere un rack con 3+ server: ti serve un UPS da 1500VA minimo.' },

  { id: 'apc-smart-ups-smt1500ic', v: 'ufficio-piccola-attivita', brand: 'APC', name: 'Smart-UPS SMT1500IC',
    price: 679.00, quality: 9.0, checked: '2026-10-13',
    tagline: 'UPS line-interactive per piccolo server room o rack ufficio',
    attrs: { tipo: 'ups', vaWatt: '1500VA/1000W', autonomia: '20min', uscite: 8, workload: 'heavy', managed: true },
    pros: ['Line-interactive con AVR: regola la tensione senza passare in batteria', 'Scheda di rete opzionale per monitoraggio remoto', 'Compatibile VMware/Hyper-V per shutdown pulito'],
    cons: ['Fascia prezzo medio-alta', 'Ventola rumorosa sotto carico: non in sala riunioni'],
    buyIf: 'Hai server, switch e NAS in un piccolo rack e serve shutdown automatico su tutta la fila.',
    avoidIf: 'Serve solo per un PC: paghi funzioni che non useresti.' },

  { id: 'synology-ds224plus', v: 'ufficio-piccola-attivita', brand: 'Synology', name: 'DiskStation DS224+',
    price: 319.00, quality: 9.1, checked: '2026-10-13',
    tagline: 'NAS 2 bay che si installa in un pomeriggio e serve 5-15 persone',
    attrs: { tipo: 'nas', bays: 2, ram: '2GB', workload: 'medium' },
    pros: ['DSM e\' il sistema operativo NAS piu\' maturo in commercio', 'App ufficiali per backup Mac/PC, hosting documenti, VPN, Docker', 'Supporto software 5+ anni dal lancio modello'],
    cons: ['CPU Intel Celeron: va bene fino a 10-15 utenti, non per editing video pesante', 'Dischi da comprare separati (metti RAID 1 per sicurezza)'],
    buyIf: 'Vuoi un server file condiviso in ufficio senza assumere un sistemista.',
    avoidIf: 'Ti serve storage per studio video 4K multi-utente: punta a modelli piu\' potenti.' },

  { id: 'qnap-ts-464', v: 'ufficio-piccola-attivita', brand: 'QNAP', name: 'TS-464',
    price: 579.00, quality: 8.6, checked: '2026-10-13',
    tagline: 'NAS 4 bay con porte 2.5GbE: per uffici che devono crescere',
    attrs: { tipo: 'nas', bays: 4, ram: '4GB', workload: 'heavy', mgE: '2.5' },
    pros: ['Due porte 2.5GbE: velocita\' di rete dove conta', 'Slot NVMe per cache SSD, utile sotto carico', 'Virtualizzazione container e VM supportata'],
    cons: ['QTS meno user-friendly di DSM Synology all\'inizio', 'Serve switch 2.5GbE per sfruttare la banda'],
    buyIf: 'Vuoi 4 dischi in RAID e banda vera per 10+ utenti.',
    avoidIf: 'Non hai mai gestito un NAS: Synology e\' piu\' semplice.' },

  { id: 'brother-ads-1800w', v: 'ufficio-piccola-attivita', brand: 'Brother', name: 'ADS-1800W',
    price: 289.00, quality: 8.7, checked: '2026-10-13',
    tagline: 'Scanner documenti compatto Wi-Fi: digitalizza 1000 pagine in un\'ora',
    attrs: { tipo: 'scanner', duplex: true, adf: 20, wifi: true, speed: '30ppm' },
    pros: ['ADF da 20 fogli con fronte-retro automatico', 'Scansione diretta a cloud/email senza PC', 'Driver OCR incluso: PDF ricercabili dal primo giorno'],
    cons: ['Non scansiona libri rilegati o foto fragili (solo fogli sciolti)', 'Pulizia rulli richiesta ogni 1000 pagine'],
    buyIf: 'Vuoi archiviare contratti, fatture, documenti cliente in digitale senza stampante multifunzione dedicata.',
    avoidIf: 'Scansioni solo 10 pagine al mese: lo scanner della multifunzione basta.' },

  { id: 'epson-workforce-ds-c330', v: 'ufficio-piccola-attivita', brand: 'Epson', name: 'WorkForce DS-C330',
    price: 349.00, quality: 8.4, checked: '2026-10-13',
    tagline: 'Scanner documenti A4 compatto per uffici con tanta carta',
    attrs: { tipo: 'scanner', duplex: true, adf: 20, wifi: true, speed: '35ppm' },
    pros: ['35 pagine al minuto fronte-retro: piu\' veloce del Brother equivalente', 'Rilevamento automatico pagine doppie prelevate', 'Software Document Capture Pro incluso'],
    cons: ['Software Epson a volte lento al primo avvio', 'Alimentatore esterno ingombra sulla scrivania'],
    buyIf: 'Studio commercialista, legale o consulenza con alti volumi di scansione quotidiana.',
    avoidIf: 'Scansioni occasionali: il Brother ADS-1800W costa meno a parita\' di qualita\'.' },

  { id: 'fellowes-powershred-99ci', v: 'ufficio-piccola-attivita', brand: 'Fellowes', name: 'Powershred 99Ci',
    price: 379.00, quality: 8.6, checked: '2026-10-13',
    tagline: 'Distruggidocumenti micro-cut GDPR compliant per studi professionali',
    attrs: { tipo: 'shredder', livello: 'P-4', foglio: 18, cestino: 34, workload: 'medium' },
    pros: ['Taglio micro-cut livello P-4: compliant GDPR per dati sensibili', '18 fogli per passata, cestino 34 litri', 'SilentShred: tacitamente adatto a stanza condivisa'],
    cons: ['Investimento alto per singola scrivania', 'Micro-cut genera cestino pieno in fretta'],
    buyIf: 'Tratti dati sensibili (studio medico, legale, risorse umane) e devi distruggere documenti ogni giorno.',
    avoidIf: 'Distruggi 10 fogli a settimana: un modello cross-cut da 50 euro basta.' },

  { id: 'bonsaii-c237-c', v: 'ufficio-piccola-attivita', brand: 'Bonsaii', name: 'C237-C',
    price: 169.00, quality: 7.8, checked: '2026-10-13',
    tagline: 'Distruggidocumenti cross-cut per piccolo ufficio o home office',
    attrs: { tipo: 'shredder', livello: 'P-4', foglio: 14, cestino: 23, workload: 'light' },
    pros: ['Cross-cut P-4 a un terzo del prezzo dei top di gamma', '60 minuti di runtime continuo', 'Taglia graffette e carte di credito'],
    cons: ['Meccanica meno robusta dei Fellowes nel lungo periodo', 'Rumoroso durante l\'uso'],
    buyIf: 'Partita IVA o home office con volumi medi di documenti da distruggere.',
    avoidIf: 'Studio con 10+ persone che distruggono quotidianamente: va in crisi.' },

  { id: 'ubiquiti-dream-router', v: 'ufficio-piccola-attivita', brand: 'Ubiquiti', name: 'UniFi Dream Router',
    price: 229.00, quality: 8.9, checked: '2026-10-13',
    tagline: 'Router aziendale di ingresso: scala quando l\'ufficio cresce',
    attrs: { tipo: 'router', wifi: 'WiFi 6', ethernet: 4, workload: 'medium', managed: true },
    pros: ['Interfaccia UniFi: aggiungi access point e switch senza cambiare sistema', 'VPN WireGuard e Teleport integrate (smart working sicuro)', 'Statistiche di rete serie, non da router consumer'],
    cons: ['Prima configurazione richiede 1-2 ore di studio', 'Firmware da aggiornare manualmente ogni tanto'],
    buyIf: 'Ufficio che vuole gestione centralizzata di Wi-Fi e sicurezza, senza passare al listino business IT.',
    avoidIf: 'Vuoi plug and play: prendi un router consumer top di gamma e basta.' },

  { id: 'tplink-er605', v: 'ufficio-piccola-attivita', brand: 'TP-Link', name: 'Omada ER605',
    price: 59.00, quality: 7.9, checked: '2026-10-13',
    tagline: 'Router aziendale economico con VPN e load balancing',
    attrs: { tipo: 'router', wifi: 'nessuno', ethernet: 5, workload: 'medium', managed: true },
    pros: ['Supporta due connessioni WAN in load balancing o failover', 'VPN OpenVPN, IPsec, PPTP integrata', 'Prezzo imbattibile per le funzioni offerte'],
    cons: ['Non ha Wi-Fi: serve access point separato', 'Interfaccia Omada meno curata di UniFi'],
    buyIf: 'Hai due connessioni Internet (fibra + 4G backup) e vuoi fallback automatico.',
    avoidIf: 'Hai una sola connessione e serve Wi-Fi integrato: non e\' il prodotto giusto.' },

  { id: 'logitech-brio-500', v: 'ufficio-piccola-attivita', brand: 'Logitech', name: 'Brio 500',
    price: 149.00, quality: 8.7, checked: '2026-10-13',
    tagline: 'Webcam 1080p per videochiamate di lavoro che fai sul serio',
    attrs: { tipo: 'webcam', risoluzione: '1080p', autofocus: true, mic: true, workload: 'medium' },
    pros: ['Autofocus veloce e inquadratura automatica centrata sul viso', 'Microfoni dual con riduzione rumore', 'Montaggio sopra il monitor stabile anche con monitor sottili'],
    cons: ['1080p (non 4K): a questo prezzo ci sono alternative 4K', 'Richiede app Logi Options+ per sfruttare tutto'],
    buyIf: 'Fai videochiamate quotidiane con clienti e vuoi apparire bene senza studiare illuminazione.',
    avoidIf: 'Fai streaming professionale su YouTube/Twitch: punta a webcam 4K dedicate.' },

  { id: 'jabra-evolve2-65', v: 'ufficio-piccola-attivita', brand: 'Jabra', name: 'Evolve2 65',
    price: 249.00, quality: 8.9, checked: '2026-10-13',
    tagline: 'Cuffie wireless professionali: 37 ore di autonomia, microfono asta',
    attrs: { tipo: 'headset', wireless: true, autonomia: 37, mic: 'boom', anc: false, workload: 'heavy' },
    pros: ['Microfono a asta pieghevole: la voce arriva pulita come al telefono fisso', '37 ore di autonomia reale: una ricarica a settimana', 'Certificate per Microsoft Teams, Zoom, Google Meet'],
    cons: ['No noise cancelling attivo (c\'e\' su Evolve2 75 piu\' caro)', 'Design professionale, non piacciono a chi vuole cuffie neutre'],
    buyIf: 'Fai 3+ ore di call al giorno e vuoi che il cliente dall\'altra parte senta ogni parola.',
    avoidIf: 'Usi le cuffie soprattutto per musica: suono bilanciato per voce, non per basso.' }
];
