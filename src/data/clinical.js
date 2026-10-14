// GLPMost – klinikai és magyar piaci adatok (kutatási szintézis)
// Forrás- és módszertani leírás: docs/research.md
// Minden számadat elsődleges forrásból (PubMed-absztrakt, EMA alkalmazási előírás, NEAK EÜ-lista,
// magyar gyógyszertári árlisták) származik; ahol nem sikerült ellenőrizni, verified:false / 'ellenőrizendő' jelöli.

export const meta = {
  asOf: '2026-10-14',
  disclaimer:
    'Ez az oldal általános egészségügyi tájékoztatást nyújt, nem helyettesíti az orvosi vizsgálatot és a személyre szabott orvosi tanácsot. ' +
    'A GLP-1-receptor-agonista gyógyszerek vényköteles készítmények: alkalmazásukról, dózisukról és a kezelés folytatásáról kizárólag kezelőorvos dönthet. ' +
    'Az árak és a támogatási feltételek tájékoztató jellegűek, a 2026. októberi állapotot tükrözik, és gyógyszertáranként, illetve időben változhatnak. ' +
    'Egyik készítmény sem pótolja az étrend megváltoztatását és a rendszeres testmozgást.',
  priceNote:
    'A feltüntetett bruttó fogyasztói árak a PHARMINDEX (2026. 10. 01.) és a PatikaRadar (2026. 10. 14.) adatbázisából, valamint egyes gyógyszertárak webáruházából származnak. ' +
    'A támogatás nélküli (szabadáras) készítmények ára patikánként eltérhet.',
};

export const compounds = [
  // ───────────────────────────── SZEMAGLUTID ─────────────────────────────
  {
    id: 'semaglutid',
    name: 'Szemaglutid',
    inn: 'semaglutide',
    summary:
      'A szemaglutid heti egyszer adott GLP-1-receptor-agonista, amely az étvágy csökkentésén és a gyomorürülés lassításán keresztül segíti a fogyást, és javítja a vércukorszintet. ' +
      'Magyarországon három márkanéven kapható: az Ozempic (injekció) és a Rybelsus (tabletta) 2-es típusú cukorbetegségre, a Wegovy (injekció) testsúlykezelésre engedélyezett. ' +
      'A STEP-vizsgálatokban a heti 2,4 mg-os adag 68 hét alatt átlagosan a testtömeg kb. 15%-ának elvesztését hozta cukorbetegség nélküli, elhízással élő felnőtteknél, a placebo kb. 2,4%-ával szemben.',
    mechanism:
      'A szemaglutid a természetes GLP-1 bélhormon hosszú hatású másolata. Fokozza az inzulinelválasztást, ha magas a vércukor, gátolja a glukagon felszabadulását, lassítja a gyomor kiürülését, ' +
      'és az agy étvágyközpontjain hatva csökkenti az éhségérzetet és az energiabevitelt. Az albuminhoz kötődve kb. egyhetes felezési idővel ürül, ezért elég hetente egyszer adni (a Rybelsus tabletta napi adagolású).',
    brands: [
      {
        name: 'Wegovy',
        form: 'előretöltött toll, heti 1× s.c. injekció (FlexTouch: 4 adag/toll); 2026 júliusától az EU-ban napi tabletta is engedélyezett',
        indication: 'testsúlykezelés (felnőtt: BMI ≥ 30, vagy BMI 27–30 legalább egy súlyfüggő kísérőbetegséggel; 12 év feletti serdülők elhízás és > 60 kg esetén)',
        marketedInHu: true,
        rx: true,
        reimbursement:
          'Nem támogatott: a NEAK 2026. 10. 01-i EÜ emelt és kiemelt támogatási listáin nem szerepel, a PatikaRadar 0% támogatást mutat. Teljes áron, szabadáras készítményként kapható. ' +
          'Elhízásra önmagában (cukorbetegség nélkül) Magyarországon semmilyen GLP-1-készítmény nem támogatott.',
        prices: [
          { label: '0,25 mg FlexTouch toll (4 heti adag, indító dózis)', amountHuf: 51762, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/wegovy-025-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65526', verified: true },
          { label: '0,5 mg FlexTouch toll (4 heti adag)', amountHuf: 51762, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/wegovy-05-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65527', verified: true },
          { label: '1 mg FlexTouch toll (4 heti adag)', amountHuf: 51762, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/wegovy-1-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65528', verified: true },
          { label: '1,7 mg FlexTouch toll (4 heti adag)', amountHuf: 61137, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/wegovy-17-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65529', verified: true },
          { label: '2,4 mg FlexTouch toll (4 heti adag, fenntartó dózis)', amountHuf: 70391, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/wegovy-2-4-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1adag-893839b8534b/', verified: true },
          { label: 'Wegovy tabletta (1,5 / 4 / 9 / 25 mg, napi 1×) – magyar ár', amountHuf: null, rangeHuf: null, unit: 'havi adag', asOf: '2026-10', source: 'https://ec.europa.eu/health/documents/community-register/2026/20260714170033/dec_170033_en.pdf', verified: false, status: 'ellenőrizendő', note: 'Az EU-ban 2026. 07. 14-én engedélyezték; magyar forgalmazásról és árról 2026. októberben nem találtunk megerősített adatot.' },
        ],
        notes:
          'Dózisemelés 16 hét alatt: 0,25 → 0,5 → 1 → 1,7 → 2,4 mg hetente. 2026 februárjától az EU-ban heti 7,2 mg-os fenntartó dózis is engedélyezett BMI ≥ 30 esetén (STEP UP vizsgálat). ' +
          'Hasonló, nem hivatalos „havi adag” árbecslések (pl. 2,4 mg: 100–110 ezer Ft) keringenek magyar oldalakon, ezek a hivatalos listaárnál magasabbak és nem ellenőrzöttek.',
      },
      {
        name: 'Ozempic',
        form: 'előretöltött toll, heti 1× s.c. injekció (0,25 / 0,5 / 1 / 2 mg)',
        indication: '2-es típusú diabétesz (nem megfelelően kontrollált T2DM felnőtteknél, diéta és testmozgás mellett)',
        marketedInHu: true,
        rx: true,
        reimbursement:
          'EÜ 70% emelt támogatás az EÜ70 1/b. pont szerint: dokumentált 2-es típusú cukorbetegségben, ha életmód-terápia és legalább 3 hónapos metformin-kezelés mellett a HbA1c nem érte el a 7% alatti célt ÉS a beteg BMI-je 30 feletti ' +
          '(vagy SGLT2-gátló sikertelensége/mellékhatása, vagy akut ischaemiás esemény a kórelőzményben, vagy már legalább 3 hónapja kezelt). Szakorvosi javaslat (diabetológia, belgyógyászat, endokrinológia, kardiológia) 12 hónapra; háziorvos javaslatra írhatja. BNO: E11. ' +
          'Fogyás céljára (cukorbetegség nélkül) nem támogatott, csak teljes áron.',
        prices: [
          { label: '0,25 / 0,5 / 1 mg toll (4 heti adag) – teljes ár', amountHuf: 34094, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/ozempic-1-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1x3ml-e5106318ea5d/', verified: true },
          { label: '0,25 / 0,5 / 1 mg toll – térítési díj EÜ 70% emelt támogatással', amountHuf: 10228, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/ozempic-1-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1x3ml-e5106318ea5d/', verified: true },
          { label: '2 mg toll', amountHuf: null, rangeHuf: null, unit: 'tollanként', asOf: '2026-10', source: '', verified: false, status: 'ellenőrizendő' },
        ],
        notes: 'A 0,25 mg nem fenntartó dózis. Az Ozempic testsúlykezelésre nem engedélyezett (off-label), bár a hatóanyag azonos a Wegovyval.',
      },
      {
        name: 'Rybelsus',
        form: 'tabletta, napi 1× (új, nagyobb biohasznosulású generáció: 1,5 / 4 / 9 / 25 / 50 mg; régi: 3 / 7 / 14 mg)',
        indication: '2-es típusú diabétesz (glikémiás kontroll javítása felnőtteknél)',
        marketedInHu: true,
        rx: true,
        reimbursement:
          'EÜ 70% emelt támogatás az EÜ70 1/b. pont szerint (azonos feltételek az Ozempickel: T2DM, HbA1c ≥ 7% metformin mellett, BMI > 30 stb.). A 1,5 / 3 / 4 / 7 / 9 / 14 mg-os kiszerelések a NEAK 2026. 10. 01-i listáján szerepelnek. Fogyásra nem támogatott.',
        prices: [
          { label: '4 mg × 30 tabletta – teljes ár', amountHuf: 37530, rangeHuf: null, unit: 'havi adag', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/rybelsus-4-mg-tabletta-30db-c505bde4e1dc/', verified: true },
          { label: '4 mg × 30 tabletta – térítési díj EÜ 70% támogatással', amountHuf: 11259, rangeHuf: null, unit: 'havi adag', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/rybelsus-4-mg-tabletta-30db-c505bde4e1dc/', verified: true },
          { label: '7 / 9 / 14 mg × 30 tabletta – teljes ár', amountHuf: 39407, rangeHuf: null, unit: 'havi adag', asOf: '2025-10-27', source: 'https://econsilium.hu/2025/10/27/megerkezett-a-rybelsus-tablettak-masodik-generacioja/', verified: false, status: 'ellenőrizendő', note: '2025. októberi forrás; 2026-ban a 4 mg ára 39 407-ről 37 530 Ft-ra változott, a nagyobb hatáserősségek aktuális ára ellenőrizendő.' },
        ],
        notes: 'Éhgyomorra, kevés vízzel, legalább 30 perccel étkezés előtt kell bevenni. A felszívódás egyénenként nagyon változó.',
      },
    ],
    dosing:
      'Wegovy (testsúlykezelés): heti 1× s.c. injekció, 0,25 mg-gal indul, 4 hetenként emelve 0,5 → 1 → 1,7 → 2,4 mg fenntartó dózisig (16 hét). BMI ≥ 30 esetén legalább 4 hét 2,4 mg után 7,2 mg-ra emelhető. ' +
      'Ozempic (T2DM): 0,25 mg 4 hétig, majd 0,5 mg; szükség esetén 1, majd 2 mg hetente. Rybelsus (T2DM): napi 1,5 mg egy hónapig, majd 4 mg; szükség szerint 9, 25 vagy 50 mg. ' +
      'Jelentős emésztőrendszeri tünetek esetén a dózisemelés késleltethető vagy visszalépés javasolt.',
    commonSideEffects: [
      'Nagyon gyakori (≥ 1/10): hányinger, hasmenés, székrekedés, hányás, fejfájás, kimerültség (Wegovy SmPC, 4.8)',
      'Gyakori (1–10%): hasi fájdalom, gyomorhurut, reflux, emésztési zavar, böfögés, puffadás, hasfeszülés, szédülés, ízérzés zavara, hajhullás, epekő, injekció helyi reakciók, hipoglikémia 2-es típusú cukorbetegeknél',
      'A tünetek főként a dózisemelési időszakban jelentkeznek, többnyire enyhék-közepesek és idővel mérséklődnek',
    ],
    seriousRisks: [
      'Akut hasnyálmirigy-gyulladás (pancreatitis): gyanú esetén a kezelést azonnal fel kell függeszteni, igazolt esetben nem szabad újrakezdeni',
      'Epekőbetegség és epehólyag-gyulladás: a STEP-vizsgálatokban a szemaglutiddal kezeltek 1,6%-ánál jelentettek epekövet (gyors fogyás is hajlamosít)',
      'Pajzsmirigy C-sejtes daganat: rágcsálókban figyelték meg; embernél a jelentőség nem ismert, a kezelés során a kalcitoninszint emelkedhet. Az EU-s SmPC-ben nem ellenjavallat, de MTC/MEN2 kórelőzmény esetén az orvossal mérlegelendő',
      'Diabéteszes retinopátia romlása 2-es típusú cukorbetegeknél, különösen inzulinnal együtt; nem-arteritises elülső ischaemiás opticus neuropathia (NAION, hirtelen látásvesztés) ritka kockázata',
      'Kiszáradás és akut veseelégtelenség súlyos hányás/hasmenés következtében; hipoglikémia szulfonilureával vagy inzulinnal kombinálva',
      'Tüdőaspiráció altatás vagy mély szedáció alatt (a lassult gyomorürülés miatt) – műtét előtt jelezni kell a kezelést',
    ],
    contraindications: [
      'Túlérzékenység a hatóanyagra vagy bármely segédanyagra (az egyetlen formális ellenjavallat az EU-s SmPC-ben)',
      'Terhesség: nem alkalmazható. Tervezett terhesség előtt legalább 2 hónappal le kell állítani a hosszú felezési idő miatt; fogamzóképes nőknek fogamzásgátlás javasolt a kezelés alatt',
      'Szoptatás: nem alkalmazható (a kockázat a csecsemőre nem zárható ki)',
      'Nem javasolt: 1-es típusú diabétesz, súlyos vese- (eGFR < 30) vagy májkárosodás, NYHA IV. szívelégtelenség, súlyos gastroparesis, kontrollálatlan diabéteszes retinopátia, más GLP-1-agonistával együtt; a 7,2 mg és a 2,4 mg feletti dózis serdülőknél nem javasolt',
      'Nem helyettesíti az inzulint 2-es típusú cukorbetegeknél; nem pótolja az életmódváltást (csökkentett kalóriabevitel + több mozgás mellett alkalmazandó)',
    ],
    afterStopping:
      'A STEP 1 egyéves utánkövetésében a résztvevők a 68. héten elért 17,3%-os fogyásból a 120. hétre átlagosan 11,6 százalékpontot visszahíztak (nettó −5,6%), vagyis a leadott súly kb. kétharmada visszajött, és a kardiometabolikus javulás is a kiindulás felé tért vissza. ' +
      'A STEP 4-ben a 2,4 mg-ról placebóra váltók 48 hét alatt +6,9%-ot híztak, míg a folytatók további 7,9%-ot fogytak. Az elhízás krónikus állapot: a hatás fenntartásához a kezelés folytatása szükséges, erről a kezdés előtt érdemes beszélni.',
    studies: [
      {
        id: 'step1',
        acronym: 'STEP 1',
        title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
        journal: 'New England Journal of Medicine',
        year: 2021,
        registry: 'NCT03548935',
        n: 1961,
        durationWeeks: 68,
        population: 'Felnőttek elhízással (BMI ≥ 30) vagy túlsúllyal (BMI ≥ 27) legalább egy súlyfüggő kísérőbetegséggel, 2-es típusú cukorbetegség NÉLKÜL; 2:1 randomizáció',
        design: 'Kettős vak, randomizált, placebokontrollos III. fázisú vizsgálat, életmód-intervencióval mindkét karon',
        arms: ['szemaglutid 2,4 mg heti 1×', 'placebo'],
        resultHu:
          'Átlagos testtömegváltozás a 68. héten: −14,9% vs −2,4% (különbség −12,4 százalékpont; 95% CI −13,4 – −11,5). Legalább 5% fogyás: 86,4% vs 31,5%; ≥ 10%: 69,1% vs 12,0%; ≥ 15%: 50,5% vs 4,9%. Kilogrammban: −15,3 kg vs −2,6 kg.',
        safetyHu:
          'Leggyakoribb mellékhatás a hányinger és hasmenés, többnyire átmeneti, enyhe-közepes. Emésztőrendszeri panaszok miatt a szemaglutid-csoport 4,5%-a, a placebocsoport 0,8%-a hagyta abba a kezelést.',
        summaryHu:
          'A STEP 1 a Wegovy alapvizsgálata: közel 2000, cukorbetegséggel nem élő, elhízott felnőtt 68 hét alatt átlagosan testtömege 15%-át adta le a gyógyszer plusz életmódváltás mellett, szemben az életmódváltás önmagában elért 2,4%-ával. ' +
          'A résztvevők fele legalább 15%-ot fogyott. A hányinger és hasmenés gyakori volt, de ritkán vezetett a kezelés feladásához.',
        weightChange: { endpointWeek: 68, arms: [{ label: 'szemaglutid 2,4 mg', drugPct: -14.9, placeboPct: -2.4 }] },
        doi: '10.1056/NEJMoa2032183',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33567185/',
      },
      {
        id: 'step2',
        acronym: 'STEP 2',
        title: 'Semaglutide 2·4 mg once a week in adults with overweight or obesity, and type 2 diabetes (STEP 2)',
        journal: 'The Lancet',
        year: 2021,
        registry: 'NCT03552757',
        n: 1210,
        durationWeeks: 68,
        population: 'Felnőttek 2-es típusú cukorbetegséggel (HbA1c 7–10%) és BMI ≥ 27; 1:1:1 randomizáció',
        design: 'Kettős vak, double-dummy, randomizált, placebokontrollos III. fázisú vizsgálat',
        arms: ['szemaglutid 2,4 mg heti 1×', 'szemaglutid 1,0 mg heti 1×', 'placebo'],
        resultHu:
          'Testtömegváltozás a 68. héten: −9,6% (2,4 mg) vs −3,4% (placebo), különbség −6,2 százalékpont (95% CI −7,3 – −5,2). Legalább 5% fogyás: 68,8% vs 28,5% (esélyhányados 4,88).',
        safetyHu:
          'Nemkívánatos esemény: 87,6% (2,4 mg), 81,8% (1,0 mg), 76,9% (placebo). Emésztőrendszeri mellékhatás – többnyire enyhe-közepes – 63,5% vs 57,5% vs 34,3%.',
        summaryHu:
          'Cukorbetegséggel élőknél a szemaglutid kisebb fogyást hoz, mint cukorbetegség nélkül: a STEP 2-ben a 2,4 mg-os adag 68 hét alatt átlagosan 9,6%-os fogyást eredményezett a placebo 3,4%-ával szemben. ' +
          'Ez fontos, reális elvárás 2-es típusú diabétesszel élő olvasóknak. A mellékhatásprofil a többi STEP-vizsgálathoz hasonló volt.',
        weightChange: { endpointWeek: 68, arms: [{ label: 'szemaglutid 2,4 mg (T2DM)', drugPct: -9.6, placeboPct: -3.4 }] },
        doi: '10.1016/S0140-6736(21)00213-0',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33667417/',
      },
      {
        id: 'step4',
        acronym: 'STEP 4',
        title: 'Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance in Adults With Overweight or Obesity: The STEP 4 Randomized Clinical Trial',
        journal: 'JAMA',
        year: 2021,
        registry: 'NCT03548987',
        n: 803,
        durationWeeks: 68,
        population: 'Felnőttek elhízással/túlsúllyal, cukorbetegség nélkül, akik 20 hetes bevezető szakaszban elérték a 2,4 mg-ot (902-ből 803 fő randomizálva); 79% nő, átlagéletkor 46 év',
        design: 'Randomizált, kettős vak megvonási (withdrawal) vizsgálat: 20 hét nyílt bevezetés, majd 48 hét folytatás vs placebóra váltás (2:1)',
        arms: ['szemaglutid 2,4 mg folytatása', 'placebóra váltás'],
        resultHu:
          'A bevezető szakasz átlagos fogyása 10,6% volt. A 20. és 68. hét között a folytatók további −7,9%-ot fogytak, a placebóra váltók +6,9%-ot híztak (különbség −14,8 százalékpont; 95% CI −16,0 – −13,5).',
        safetyHu:
          'Emésztőrendszeri esemény 49,1% (folytatás) vs 26,1% (placebo). Mellékhatás miatti leállás hasonló: 2,4% vs 2,2%. A vizsgálatot 98% fejezte be.',
        summaryHu:
          'A STEP 4 azt vizsgálta, mi történik, ha a már elért fogyás után valaki abbahagyja a szemaglutidot: a placebóra váltók egy év alatt a leadott súly jelentős részét visszahízták, ' +
          'míg a gyógyszert folytatók tovább fogytak. Ez a vizsgálat mutatja meg legtisztábban, hogy a hatás a folyamatos kezeléshez kötött.',
        weightChange: { endpointWeek: 68, baselineWeek: 20, arms: [{ label: 'szemaglutid 2,4 mg folytatva (20.→68. hét)', drugPct: -7.9, placeboPct: 6.9 }] },
        doi: '10.1001/jama.2021.3224',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33755728/',
      },
      {
        id: 'step5',
        acronym: 'STEP 5',
        title: 'Two-year effects of semaglutide in adults with overweight or obesity: the STEP 5 trial',
        journal: 'Nature Medicine',
        year: 2022,
        registry: 'NCT03693430',
        n: 304,
        durationWeeks: 104,
        population: 'Felnőttek elhízással vagy túlsúllyal (≥ 1 kísérőbetegség), cukorbetegség nélkül; 77,6% nő, átlagéletkor 47 év, átlagos BMI 38,5',
        design: 'Kettős vak, randomizált, placebokontrollos III. fázisú vizsgálat, 2 éves kezelés, viselkedésterápiával mindkét karon',
        arms: ['szemaglutid 2,4 mg heti 1×', 'placebo'],
        resultHu:
          'Testtömegváltozás a 104. héten: −15,2% vs −2,6% (különbség −12,6 százalékpont; 95% CI −15,3 – −9,8). Legalább 5% fogyás: 77,1% vs 34,4%.',
        safetyHu: 'Emésztőrendszeri mellékhatás, többnyire enyhe-közepes: 82,2% (szemaglutid) vs 53,9% (placebo).',
        summaryHu:
          'A STEP 5 két évig követte a résztvevőket, és azt mutatta, hogy a szemaglutid mellett elért kb. 15%-os fogyás a második évben is megmaradt, ' +
          'tehát a hatás a folyamatos kezelés mellett tartós. A résztvevők túlnyomó többsége nő volt, az átlagéletkor 47 év – ez a célközönségünkhöz közeli populáció.',
        weightChange: { endpointWeek: 104, arms: [{ label: 'szemaglutid 2,4 mg', drugPct: -15.2, placeboPct: -2.6 }] },
        doi: '10.1038/s41591-022-02026-4',
        url: 'https://pubmed.ncbi.nlm.nih.gov/36216945/',
      },
      {
        id: 'select',
        acronym: 'SELECT',
        title: 'Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes',
        journal: 'New England Journal of Medicine',
        year: 2023,
        registry: 'NCT03574597',
        n: 17604,
        durationWeeks: 173,
        population: '45 éves vagy idősebb felnőttek meglévő szív-érrendszeri betegséggel és BMI ≥ 27, cukorbetegség NÉLKÜL; átlagos követés 39,8 hónap',
        design: 'Multicentrikus, kettős vak, randomizált, placebokontrollos, eseményvezérelt szuperioritási vizsgálat',
        arms: ['szemaglutid 2,4 mg heti 1×', 'placebo'],
        resultHu:
          'Elsődleges kardiovaszkuláris végpont (CV-halál, nem halálos infarktus vagy stroke): 6,5% vs 8,0%; hazárd arány 0,80 (95% CI 0,72–0,90; p < 0,001), azaz 20%-os relatív kockázatcsökkenés.',
        safetyHu: 'Mellékhatás miatti végleges leállás: 16,6% (szemaglutid) vs 8,2% (placebo), p < 0,001 – főként emésztőrendszeri panaszok miatt.',
        summaryHu:
          'A SELECT az első nagy vizsgálat, amely igazolta, hogy egy fogyasztószer cukorbetegség nélkül is csökkenti az infarktus, a stroke és a szív-érrendszeri halálozás kockázatát elhízott, már szívbeteg felnőtteknél. ' +
          'A résztvevők idősebbek voltak a mi célközönségünknél és mindnek volt már szív-érrendszeri betegsége, ezért az eredmény fiatal, egészséges szívű nőkre közvetlenül nem vihető át.',
        weightChange: null,
        doi: '10.1056/NEJMoa2307563',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37952131/',
      },
    ],
    relatedEvidence: [
      {
        id: 'step1-extension',
        acronym: 'STEP 1 kiterjesztés',
        title: 'Weight regain and cardiometabolic effects after withdrawal of semaglutide: The STEP 1 trial extension',
        journal: 'Diabetes, Obesity and Metabolism',
        year: 2022,
        registry: 'NCT03548935',
        n: 327,
        noteHu: 'Egy évvel a kezelés leállítása után a résztvevők a leadott súly kétharmadát visszahízták (17,3% fogyás → nettó 5,6% a 120. héten).',
        doi: '10.1111/dom.14725',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35441470/',
      },
      {
        id: 'step8',
        acronym: 'STEP 8',
        title: 'Effect of Weekly Subcutaneous Semaglutide vs Daily Liraglutide on Body Weight in Adults With Overweight or Obesity Without Diabetes',
        journal: 'JAMA',
        year: 2022,
        registry: 'NCT04074161',
        n: 338,
        noteHu: 'Közvetlen összehasonlítás: 68 hét alatt szemaglutid 2,4 mg −15,8% vs liraglutid 3,0 mg −6,4% (összevont placebo −1,9%). Leállás bármely okból: 13,5% vs 27,6%.',
        doi: '10.1001/jama.2021.23619',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35015037/',
      },
    ],
  },

  // ───────────────────────────── LIRAGLUTID ─────────────────────────────
  {
    id: 'liraglutid',
    name: 'Liraglutid',
    inn: 'liraglutide',
    summary:
      'A liraglutid az első, testsúlykezelésre engedélyezett GLP-1-agonista; naponta egyszer kell injekcióban adni. Saxenda néven (napi 3,0 mg) fogyásra, Victoza néven (max. 1,8 mg) 2-es típusú cukorbetegségre engedélyezett. ' +
      'Hatása szerényebb a heti készítményeknél: a SCALE-vizsgálatban 56 hét alatt kb. 8 kg (a placebo kb. 3 kg-jával szemben), a STEP 8 közvetlen összehasonlításban −6,4% vs a szemaglutid −15,8%-a.',
    mechanism:
      'Hosszú hatású GLP-1-analóg (zsírsavlánccal módosítva, kb. 13 órás felezési idő, ezért napi adagolás). Glükózfüggően serkenti az inzulin-, gátolja a glukagonelválasztást, lassítja a gyomorürülést és az agyi étvágyközpontokon át csökkenti az éhséget.',
    brands: [
      {
        name: 'Saxenda',
        form: 'előretöltött toll (6 mg/ml, 3 ml), napi 1× s.c. injekció; 1, 3 vagy 5 tollas csomag',
        indication: 'testsúlykezelés (felnőtt: BMI ≥ 30, vagy 27–30 kísérőbetegséggel; 12 év feletti serdülők elhízás és > 60 kg esetén; 6–12 éves gyermekek szakorvosi indításra)',
        marketedInHu: true,
        rx: true,
        reimbursement: 'Nem támogatott (a NEAK 2026. 10. 01-i EÜ-listáin nem szerepel), teljes áron kapható.',
        prices: [
          { label: '3 × 3 ml toll (54 mg liraglutid)', amountHuf: 37995, rangeHuf: null, unit: 'csomagonként (3 toll)', asOf: '2026-10-14', source: 'https://kohegy.hu/aruhaz/hu/gyogyszerek/4102-saxenda-6-mg-ml-oldatos-inj-et-inj-tollban-3x3ml.html', verified: true, note: 'Egy gyógyszertár webáruházának ára; szabadáras készítmény.' },
          { label: 'Havi költség 3,0 mg fenntartó dózison (kb. 5 toll/hó)', amountHuf: null, rangeHuf: [60000, 70000], unit: 'havi adag', asOf: '2026-10', source: 'https://kohegy.hu/aruhaz/hu/gyogyszerek/4102-saxenda-6-mg-ml-oldatos-inj-et-inj-tollban-3x3ml.html', verified: false, status: 'ellenőrizendő', note: 'Számított becslés: 1 toll 18 mg = 6 nap 3,0 mg-on; a 3 tollas csomag árából (≈ 12 665 Ft/toll) extrapolálva.' },
        ],
        notes: 'Ha 12 hét 3,0 mg mellett a fogyás nem éri el a 5%-ot, a kezelést le kell állítani (SmPC 4.1).',
      },
      {
        name: 'Victoza',
        form: 'előretöltött toll (6 mg/ml, 2 × 3 ml), napi 1× s.c. injekció (0,6 → 1,2 → 1,8 mg)',
        indication: '2-es típusú diabétesz (felnőttek és 10 év feletti gyermekek)',
        marketedInHu: true,
        rx: true,
        reimbursement: 'EÜ 70% emelt támogatás az EÜ70 1/b. pont szerint (T2DM, HbA1c ≥ 7% legalább 3 hónapos metformin mellett ÉS BMI > 30, vagy a pont további feltételei). Fogyásra nem támogatott.',
        prices: [
          { label: '2 × 3 ml toll – teljes ár', amountHuf: 28410, rangeHuf: null, unit: 'csomagonként (1,8 mg-on kb. 20 nap)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/victoza-6-mg-ml-oldatos-injekcio-eloretoltott-injekcios-tollban-2x3ml-673b31d81aed/', verified: true },
          { label: '2 × 3 ml toll – térítési díj EÜ 70% támogatással', amountHuf: 8523, rangeHuf: null, unit: 'csomagonként', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/victoza-6-mg-ml-oldatos-injekcio-eloretoltott-injekcios-tollban-2x3ml-673b31d81aed/', verified: true },
        ],
        notes: '',
      },
      {
        name: 'Generikus liraglutid',
        form: '—',
        indication: '—',
        marketedInHu: false,
        rx: true,
        reimbursement: 'A PHARMINDEX ATC A10BJ02 listáján 2026. 10. 01-én csak a Saxenda és a Victoza szerepel; Magyarországon forgalomban lévő generikus/biohasonló liraglutidot nem találtunk.',
        prices: [],
        notes: 'Az EU-ban több generikus liraglutid kapott engedélyt, de magyar forgalmazásuk 2026 októberében nem igazolt (ellenőrizendő).',
      },
    ],
    dosing:
      'Saxenda: napi 0,6 mg-gal indul, hetente 0,6 mg-os lépésekben emelve 3,0 mg fenntartó dózisig (4 hét). Ha két egymást követő héten a következő lépés nem tolerálható, a leállítás mérlegelendő; 3,0 mg felett nem adható. ' +
      'Victoza: 0,6 mg legalább 1 hétig, majd 1,2 mg, szükség esetén 1,8 mg. Más GLP-1-agonistával nem kombinálható.',
    commonSideEffects: [
      'Nagyon gyakori: hányinger, hányás, hasmenés, székrekedés, fejfájás (Saxenda SmPC 4.8; emésztőrendszeri mellékhatás a betegek 67,9%-ánál)',
      'Gyakori: szájszárazság, emésztési zavar, gyomorhurut, reflux, felhasi fájdalom, puffadás, böfögés, hasfeszülés, epekő, szédülés, ízérzés zavara, álmatlanság, bőrkiütés, hipoglikémia (T2DM-ben), injekció helyi reakciók, fáradtság',
    ],
    seriousRisks: [
      'Akut pancreatitis: gyanú esetén le kell állítani, igazolt esetben nem újrakezdhető',
      'Epehólyag-gyulladás és epekő (nem gyakori, de gyakoribb, mint placebóval)',
      'Szívfrekvencia-emelkedés: rendszeres ellenőrzés javasolt, tartós, klinikailag jelentős nyugalmi pulzusemelkedés esetén leállítás',
      'Pajzsmirigy: rágcsálókban C-sejtes tumorokat észleltek; emberben pajzsmirigybetegeknél óvatosság (strúma, kalcitonin-emelkedés jelentve)',
      'Kiszáradás, veseelégtelenség súlyos emésztőrendszeri tünetek mellett; hipoglikémia szulfonilurea/inzulin mellett',
    ],
    contraindications: [
      'Túlérzékenység a liraglutidra vagy segédanyagra',
      'Terhesség: nem alkalmazható; terhesség tervezésekor vagy bekövetkeztekor le kell állítani (rövidebb felezési idő, nincs előírt 2 hónapos várakozás)',
      'Szoptatás: nem alkalmazható (tapasztalat hiánya)',
      'Nem javasolt: 1-es típusú diabétesz, inzulin helyett, más GLP-1-agonistával együtt; gyulladásos bélbetegség és gastroparesis esetén óvatosság; 75 év felett és súlyos vese-/májkárosodásban korlátozott adat',
      'Kiegészítő kezelés: csökkentett kalóriabevitel és fokozott testmozgás mellett alkalmazandó',
    ],
    afterStopping:
      'A liraglutid hatása is a kezelés alatt áll fenn. A SCALE Diabetes vizsgálatban a 56 hetes kezelést 12 hetes gyógyszer nélküli megfigyelés követte, és a SCALE 3 éves vizsgálatában is volt gyógyszermentes utánkövetés; ' +
      'a testsúly ezekben a szakaszokban a leállítás után ismét emelkedni kezdett (a számszerű visszahízás mértékét a vizsgálati absztraktokból nem tudtuk ellenőrizni – ellenőrizendő). ' +
      'Az általános elv a szemaglutidnál leírtakkal azonos: tartós eredményhez tartós kezelés és életmódváltás kell.',
    studies: [
      {
        id: 'scale-obesity-prediabetes',
        acronym: 'SCALE Obesity and Prediabetes',
        title: 'A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management',
        journal: 'New England Journal of Medicine',
        year: 2015,
        registry: 'NCT01272219',
        n: 3731,
        durationWeeks: 56,
        population: 'Felnőttek BMI ≥ 30, vagy ≥ 27 kezelt/kezeletlen diszlipidémiával vagy magas vérnyomással, 2-es típusú cukorbetegség NÉLKÜL (61% prediabéteszes); 78,5% nő, átlagéletkor 45 év',
        design: 'Kettős vak, randomizált (2:1), placebokontrollos III. fázisú vizsgálat életmód-tanácsadással',
        arms: ['liraglutid 3,0 mg napi 1×', 'placebo'],
        resultHu:
          'A 56. héten a liraglutid-csoport átlagosan 8,4 kg-ot, a placebocsoport 2,8 kg-ot fogyott (különbség −5,6 kg; 95% CI −6,0 – −5,1). Legalább 5% fogyás: 63,2% vs 27,1%; több mint 10%: 33,1% vs 10,6%.',
        safetyHu: 'Leggyakoribb mellékhatás az enyhe-közepes hányinger és hasmenés. Súlyos nemkívánatos esemény: 6,2% vs 5,0%.',
        summaryHu:
          'A SCALE a Saxenda alapvizsgálata, több mint 3700 résztvevővel, akik négyötöde nő volt, átlagosan 45 évesek. A napi 3,0 mg liraglutid egy év alatt kb. 8 kg fogyást hozott az életmódváltás 3 kg-jával szemben, ' +
          'és a résztvevők kétharmada elérte az 5%-os fogyást. Ez szerényebb hatás, mint a későbbi heti készítményeké, de jól dokumentált.',
        weightChange: { endpointWeek: 56, unit: 'kg', arms: [{ label: 'liraglutid 3,0 mg', drugPct: -8.0, placeboPct: -2.6, drugKg: -8.4, placeboKg: -2.8 }], verified: false, note: 'A százalékos értékek (−8,0% vs −2,6%) a teljes közleményből származnak, az absztrakt kg-ban közöl; ellenőrizendő.' },
        doi: '10.1056/NEJMoa1411892',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26132939/',
      },
      {
        id: 'scale-diabetes',
        acronym: 'SCALE Diabetes',
        title: 'Efficacy of Liraglutide for Weight Loss Among Patients With Type 2 Diabetes: The SCALE Diabetes Randomized Clinical Trial',
        journal: 'JAMA',
        year: 2015,
        registry: 'NCT01272232',
        n: 846,
        durationWeeks: 56,
        population: 'Felnőttek 2-es típusú cukorbetegséggel (HbA1c 7–10%, 0–3 orális antidiabetikum), BMI ≥ 27; 2:1:1 randomizáció, 12 hetes gyógyszermentes utánkövetéssel',
        design: 'Kettős vak, randomizált, placebokontrollos vizsgálat, napi 500 kcal deficit és ≥ 150 perc/hét mozgás mellett',
        arms: ['liraglutid 3,0 mg', 'liraglutid 1,8 mg', 'placebo'],
        resultHu:
          'Fogyás a 56. héten: 6,0% (6,4 kg) 3,0 mg-mal, 4,7% (5,0 kg) 1,8 mg-mal, 2,0% (2,2 kg) placebóval; különbség 3,0 mg vs placebo −4,0% (95% CI −5,1 – −2,9). Legalább 5% fogyás: 54,3% / 40,4% / 21,4%; több mint 10%: 25,2% / 15,9% (placebo: a különbség 18,5%).',
        safetyHu: 'Több emésztőrendszeri panasz 3,0 mg-mal, mint 1,8 mg-mal vagy placebóval. Pancreatitist nem jelentettek.',
        summaryHu:
          '2-es típusú cukorbetegeknél a napi 3,0 mg liraglutid egy év alatt átlagosan 6%-os fogyást eredményezett, a placebo 2%-ával szemben; a cukorbetegségre engedélyezett 1,8 mg-os dózis hatása kisebb volt. ' +
          'Cukorbetegséggel élőknél a fogyás mértéke itt is elmarad a cukorbetegség nélküli populációban mérttől.',
        weightChange: { endpointWeek: 56, arms: [{ label: 'liraglutid 3,0 mg (T2DM)', drugPct: -6.0, placeboPct: -2.0 }, { label: 'liraglutid 1,8 mg (T2DM)', drugPct: -4.7, placeboPct: -2.0 }] },
        doi: '10.1001/jama.2015.9676',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26284720/',
      },
      {
        id: 'scale-maintenance',
        acronym: 'SCALE Maintenance',
        title: 'Weight maintenance and additional weight loss with liraglutide after low-calorie-diet-induced weight loss: the SCALE Maintenance randomized study',
        journal: 'International Journal of Obesity',
        year: 2013,
        registry: 'NCT00781937',
        n: 422,
        durationWeeks: 56,
        population: 'Felnőttek BMI ≥ 30 (vagy ≥ 27 kísérőbetegséggel), cukorbetegség nélkül, akik alacsony kalóriás diétával már legalább 5%-ot fogytak (átlag 6,0%) a randomizáció előtt',
        design: 'Randomizált, kettős vak, placebokontrollos III. fázisú vizsgálat diéta- és mozgástanácsadással',
        arms: ['liraglutid 3,0 mg napi 1×', 'placebo'],
        resultHu:
          'A randomizációtól a 56. hétig további −6,2% fogyás liraglutiddal vs −0,2% placebóval (különbség −6,1%; 95% CI −7,5 – −4,6). A diétával elért ≥ 5% fogyást 81,4% vs 48,9% tartotta meg (esélyhányados 4,8).',
        safetyHu: 'Emésztőrendszeri panaszok gyakoribbak liraglutiddal, többnyire átmenetiek, enyhe-közepesek.',
        summaryHu:
          'Ez a vizsgálat azoknak érdekes, akik diétával már fogytak, és a visszahízástól félnek: a liraglutid mellett a résztvevők nemcsak megtartották a korábban leadott súlyt, hanem további 6%-ot fogytak, ' +
          'miközben a placebocsoport stagnált. A diétával elért eredményt a gyógyszeresek 81%-a, a placebósok 49%-a tartotta meg.',
        weightChange: { endpointWeek: 56, arms: [{ label: 'liraglutid 3,0 mg (diéta utáni fenntartás)', drugPct: -6.2, placeboPct: -0.2 }] },
        doi: '10.1038/ijo.2013.120',
        url: 'https://pubmed.ncbi.nlm.nih.gov/23812094/',
      },
      {
        id: 'scale-3year',
        acronym: 'SCALE Obesity and Prediabetes – 3 év',
        title: '3 years of liraglutide versus placebo for type 2 diabetes risk reduction and weight management in individuals with prediabetes',
        journal: 'The Lancet',
        year: 2017,
        registry: 'NCT01272219',
        n: 2254,
        durationWeeks: 160,
        population: 'Prediabéteszes felnőttek BMI ≥ 30 (vagy ≥ 27 kísérőbetegséggel); a SCALE Obesity and Prediabetes vizsgálat 3 éves kiterjesztése, 2:1 randomizáció',
        design: 'Randomizált, kettős vak, placebokontrollos vizsgálat; elsődleges végpont a 2-es típusú diabétesz kialakulásáig eltelt idő 160 hét alatt',
        arms: ['liraglutid 3,0 mg napi 1×', 'placebo'],
        resultHu:
          'A 160. hétig a liraglutid-csoport 2%-ánál (26/1472), a placebocsoport 6%-ánál (46/738) alakult ki diabétesz; hazárd arány 0,21 (95% CI 0,13–0,34). Fogyás a 160. héten: −6,1% vs −1,9% (különbség −4,3%; 95% CI −4,9 – −3,7).',
        safetyHu: 'Súlyos nemkívánatos esemény: 15% (liraglutid) vs 13% (placebo). A kilépőket a leállítás után nem követték.',
        summaryHu:
          'Három év alatt a liraglutid a prediabéteszes, elhízott felnőtteknél kb. 80%-kal csökkentette a 2-es típusú cukorbetegség kialakulásának kockázatát, és a fogyás egy része (kb. 6%) a harmadik évben is megmaradt. ' +
          'Ez a leghosszabb placebokontrollos liraglutid-vizsgálat testsúlykezelésben; a hatás a kezelés alatt tartós, de az évek során kisebb, mint az első évben.',
        weightChange: { endpointWeek: 160, arms: [{ label: 'liraglutid 3,0 mg (prediabétesz)', drugPct: -6.1, placeboPct: -1.9 }] },
        doi: '10.1016/S0140-6736(17)30069-7',
        url: 'https://pubmed.ncbi.nlm.nih.gov/28237263/',
      },
      {
        id: 'leader',
        acronym: 'LEADER',
        title: 'Liraglutide and Cardiovascular Outcomes in Type 2 Diabetes',
        journal: 'New England Journal of Medicine',
        year: 2016,
        registry: 'NCT01179048',
        n: 9340,
        durationWeeks: 198,
        population: '2-es típusú cukorbetegek magas kardiovaszkuláris kockázattal; medián követés 3,8 év',
        design: 'Kettős vak, randomizált, placebokontrollos kardiovaszkuláris kimeneteli vizsgálat (nem-inferioritás, majd szuperioritás)',
        arms: ['liraglutid (cukorbetegségre engedélyezett dózis, max. 1,8 mg)', 'placebo'],
        resultHu:
          'Elsődleges végpont (CV-halál, nem halálos infarktus vagy stroke): 13,0% vs 14,9%; hazárd arány 0,87 (95% CI 0,78–0,97; p = 0,01 szuperioritás). CV-halál: 4,7% vs 6,0% (HR 0,78); összhalálozás: 8,2% vs 9,6% (HR 0,85).',
        safetyHu: 'A leállás leggyakoribb oka emésztőrendszeri esemény volt. A pancreatitis előfordulása nem volt gyakoribb liraglutiddal (nem szignifikánsan ritkább).',
        summaryHu:
          'A LEADER cukorbetegeknél igazolta, hogy a liraglutid 13%-kal csökkenti a súlyos szív-érrendszeri események, és 22%-kal a szív-érrendszeri halálozás kockázatát. ' +
          'A vizsgálat idősebb, szívbetegségre nagy kockázatú cukorbetegeken készült, ezért fiatal, egészséges nőkre nem vonatkoztatható közvetlenül; a biztonsági profil megnyugtató volt.',
        weightChange: null,
        doi: '10.1056/NEJMoa1603827',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27295427/',
      },
    ],
    relatedEvidence: [],
  },

  // ───────────────────────────── DULAGLUTID ─────────────────────────────
  {
    id: 'dulaglutid',
    name: 'Dulaglutid',
    inn: 'dulaglutide',
    summary:
      'A dulaglutid (Trulicity) heti egyszer adott GLP-1-agonista, amely kizárólag 2-es típusú cukorbetegségre engedélyezett – testsúlykezelésre nem. ' +
      'Fogyasztó hatása mérsékelt (a vizsgálatokban kb. 3–5 kg egy év alatt), igazoltan csökkenti a szív-érrendszeri eseményeket cukorbetegeknél (REWIND), és Magyarországon támogatott T2DM-ben. ' +
      'Őszintén: aki elsősorban fogyni szeretne, annak a dulaglutid nem a megfelelő eszköz, és off-label fogyásra való felírása nem indokolt.',
    mechanism:
      'GLP-1-analóg, amelyet módosított IgG4 Fc-fragmenshez kapcsoltak, így kb. 5 napos felezési idővel heti egyszer adható. Glükózfüggő inzulinfokozás, glukagongátlás, lassult gyomorürülés és csökkent étvágy a hatásmechanizmusa.',
    brands: [
      {
        name: 'Trulicity',
        form: 'előretöltött, egyadagos toll, heti 1× s.c. injekció (0,75 / 1,5 / 3 / 4,5 mg); 2 toll/csomag',
        indication: '2-es típusú diabétesz (10 éves kortól)',
        marketedInHu: true,
        rx: true,
        reimbursement:
          'EÜ 70% emelt támogatás az EÜ70 1/b. pont szerint (T2DM, HbA1c ≥ 7% legalább 3 hónapos metformin mellett ÉS BMI > 30, vagy SGLT2-gátló sikertelensége/mellékhatása, vagy akut ischaemiás esemény a kórelőzményben). ' +
          'Mind a négy hatáserősség a NEAK 2026. 10. 01-i listáján szerepel. Fogyásra nem támogatott és nem engedélyezett.',
        prices: [
          { label: '1,5 mg × 2 toll (2 hét) – teljes ár', amountHuf: 17903, rangeHuf: null, unit: 'csomagonként (2 heti adag)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/trulicity-1-5-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-2x0-5ml-2250af4d3796/', verified: true },
          { label: '1,5 mg × 2 toll – térítési díj EÜ 70% támogatással', amountHuf: 5371, rangeHuf: null, unit: 'csomagonként (2 heti adag)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/trulicity-1-5-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-2x0-5ml-2250af4d3796/', verified: true },
          { label: '3 mg × 2 toll – teljes ár', amountHuf: 17903, rangeHuf: null, unit: 'csomagonként (2 heti adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/trulicity-3-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-64382', verified: true },
          { label: 'Havi teljes ár (2 csomag)', amountHuf: 35806, rangeHuf: null, unit: 'havi adag (számított: 2 × 17 903 Ft)', asOf: '2026-10-14', source: 'https://www.patikaradar.hu/termekek/trulicity-1-5-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-2x0-5ml-2250af4d3796/', verified: false, status: 'ellenőrizendő', note: 'Számított érték a csomagárból.' },
        ],
        notes: 'Egy korábbi PatikaRadar-adat 18 798 Ft-os bruttó árat és 5 639 Ft-os térítési díjat mutatott; a 2026. 10. 14-én lekért oldal 17 903 / 5 371 Ft-ot – az árak változhatnak.',
      },
    ],
    dosing:
      'Monoterápiában heti 0,75 mg; kiegészítő kezelésként heti 1,5 mg, amely legalább 4 hét után 3 mg-ra, majd további 4 hét után 4,5 mg-ra emelhető (max. 4,5 mg/hét). A nap bármely időpontjában, étkezéstől függetlenül adható.',
    commonSideEffects: [
      'Nagyon gyakori: hányinger, hasmenés, hányás, hasi fájdalom; hipoglikémia inzulinnal, glimepiriddel vagy metforminnal kombinálva (Trulicity SmPC 4.8)',
      'Gyakori: étvágycsökkenés, emésztési zavar, székrekedés, puffadás, hasfeszülés, reflux, öklendezés, fáradtság, szívfrekvencia-emelkedés, injekció helyi reakciók',
      'Nemkívánatos esemény miatti leállás 52 hétig: 6,0% (1,5 mg), 7,0% (3 mg), 8,5% (4,5 mg) – főként hányinger, hasmenés miatt',
    ],
    seriousRisks: [
      'Akut pancreatitis (nem gyakori): gyanú esetén leállítás, igazolt esetben nem újrakezdhető',
      'Kiszáradás, akut veseelégtelenség súlyos emésztőrendszeri tünetek mellett, különösen a kezelés elején',
      'Diabéteszes retinopátia átmeneti romlása a gyors vércukorjavulás miatt',
      'Pajzsmirigy C-sejtes daganat rágcsálókban (humán relevanciája nem ismert); túlérzékenységi/anafilaxiás reakció ritkán',
      'Hipoglikémia szulfonilureával vagy inzulinnal kombinálva',
    ],
    contraindications: [
      'Túlérzékenység a hatóanyagra vagy segédanyagra',
      'Terhesség: nem ajánlott; szoptatás: nem alkalmazható',
      'Nem javasolt: 1-es típusú diabétesz, diabéteszes ketoacidózis, súlyos emésztőrendszeri betegség (gastroparesis), végstádiumú vesebetegség; más GLP-1-agonistával nem kombinálható',
      'Testsúlykezelésre nincs engedélye – fogyásra való alkalmazása off-label',
    ],
    afterStopping:
      'A dulaglutid fogyasztó hatását megvonási vizsgálatban nem tanulmányozták, ezért a visszahízás mértéke közvetlenül nem ismert. A hatóanyag kb. 5 napos felezési idejével a hatás a leállítás után 1–2 héten belül megszűnik; ' +
      'a GLP-1-agonistáknál általánosan megfigyelt visszahízás itt is várható.',
    studies: [
      {
        id: 'award11',
        acronym: 'AWARD-11',
        title: 'Efficacy and Safety of Dulaglutide 3.0 mg and 4.5 mg Versus Dulaglutide 1.5 mg in Metformin-Treated Patients With Type 2 Diabetes in a Randomized Controlled Trial (AWARD-11)',
        journal: 'Diabetes Care',
        year: 2021,
        registry: 'NCT03495102',
        n: 1842,
        durationWeeks: 52,
        population: '2-es típusú cukorbetegek, akiknek metformin mellett nem volt megfelelő a vércukra; kiindulási HbA1c 8,6%, BMI 34,2',
        design: 'Randomizált, kettős vak, dóziskontrollos III. fázisú vizsgálat; elsődleges végpont a 36. heti HbA1c',
        arms: ['dulaglutid 1,5 mg', 'dulaglutid 3,0 mg', 'dulaglutid 4,5 mg (heti 1×)'],
        resultHu:
          'A 36. héten a 4,5 mg szignifikánsan nagyobb HbA1c-csökkenést (−1,87% vs −1,53%, hatásossági becslés) és fogyást adott, mint az 1,5 mg: −4,6 kg vs −3,0 kg (különbség −1,6 kg; p < 0,001). Százalékos testtömegváltozást az absztrakt nem közöl.',
        safetyHu: 'Hányinger 36 hétig: 13,4% (1,5 mg), 15,6% (3 mg), 16,4% (4,5 mg); hányás 5,6% / 8,3% / 9,3%. Hasonló biztonsági profil a dózisok között.',
        summaryHu:
          'Az AWARD-11 a dulaglutid nagyobb dózisait vizsgálta: a heti 4,5 mg kb. 1,6 kg-mal több fogyást hozott, mint a szokásos 1,5 mg – összesen 4,6 kg-ot 36 hét alatt. ' +
          'Ez a dulaglutid legnagyobb dokumentált fogyasztó hatása, és jól mutatja, hogy a szemaglutid vagy tirzepatid 15–20%-os eredményeihez nem mérhető.',
        weightChange: { endpointWeek: 36, unit: 'kg', arms: [{ label: 'dulaglutid 4,5 mg (vs 1,5 mg komparátor)', drugPct: null, placeboPct: null, drugKg: -4.6, comparatorKg: -3.0, comparatorLabel: 'dulaglutid 1,5 mg' }], note: 'Nincs placebokar; a közlemény kg-ban adja meg a változást.' },
        doi: '10.2337/dc20-1473',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33397768/',
      },
      {
        id: 'rewind',
        acronym: 'REWIND',
        title: 'Dulaglutide and cardiovascular outcomes in type 2 diabetes (REWIND): a double-blind, randomised placebo-controlled trial',
        journal: 'The Lancet',
        year: 2019,
        registry: 'NCT01394952',
        n: 9901,
        durationWeeks: 281,
        population: '50 év feletti 2-es típusú cukorbetegek korábbi kardiovaszkuláris eseménnyel vagy kockázati tényezőkkel; 46,3% nő, átlagéletkor 66 év, medián HbA1c 7,2%; medián követés 5,4 év',
        design: 'Multicentrikus, randomizált, kettős vak, placebokontrollos kardiovaszkuláris kimeneteli vizsgálat',
        arms: ['dulaglutid 1,5 mg heti 1×', 'placebo'],
        resultHu:
          'Elsődleges végpont (nem halálos infarktus, nem halálos stroke vagy CV-halál): 12,0% vs 13,4%; hazárd arány 0,88 (95% CI 0,79–0,99; p = 0,026). Összhalálozás: 10,8% vs 12,0% (HR 0,90; nem szignifikáns).',
        safetyHu: 'Emésztőrendszeri nemkívánatos esemény a követés alatt: 47,4% (dulaglutid) vs 34,1% (placebo).',
        summaryHu:
          'A REWIND a dulaglutid legfontosabb vizsgálata: több mint 5 év alatt 12%-kal csökkentette a súlyos szív-érrendszeri események kockázatát cukorbetegeknél, köztük olyanoknál is, akiknek még nem volt szívbetegsége. ' +
          'A fogyás nem volt elsődleges végpont, és az absztrakt nem közöl testtömegadatot. A populáció idős volt, így fiatal nőkre csak korlátozottan vonatkoztatható.',
        weightChange: null,
        doi: '10.1016/S0140-6736(19)31149-3',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31189511/',
      },
      {
        id: 'award6',
        acronym: 'AWARD-6',
        title: 'Once-weekly dulaglutide versus once-daily liraglutide in metformin-treated patients with type 2 diabetes (AWARD-6): a randomised, open-label, phase 3, non-inferiority trial',
        journal: 'The Lancet',
        year: 2014,
        registry: 'NCT01624259',
        n: 599,
        durationWeeks: 26,
        population: '2-es típusú cukorbetegek metformin (≥ 1500 mg/nap) mellett, HbA1c 7–10%, BMI ≤ 45',
        design: 'Randomizált, nyílt, párhuzamos csoportos III. fázisú nem-inferioritási vizsgálat',
        arms: ['dulaglutid 1,5 mg heti 1×', 'liraglutid 1,8 mg napi 1×'],
        resultHu:
          'HbA1c-csökkenés a 26. héten: −1,42% (dulaglutid) vs −1,36% (liraglutid); különbség −0,06% (95% CI −0,19 – 0,07), nem-inferior. A testtömegváltozást az absztrakt számszerűen nem közli (a teljes közlemény szerint a liraglutid mellett valamivel nagyobb volt – ellenőrizendő).',
        safetyHu: 'Hányinger 20% vs 18%, hasmenés 12% vs 12%, emésztési zavar 8% vs 6%, hányás 7% vs 8%; hasonló arányú leállás mellékhatás miatt.',
        summaryHu:
          'Az AWARD-6 közvetlenül hasonlította a heti dulaglutidot a napi liraglutiddal cukorbetegeknél: a vércukorcsökkentés egyenértékű volt, a mellékhatások hasonlóak. ' +
          'A vizsgálat a cukorbetegségre engedélyezett dózisokat hasonlította, a fogyás másodlagos szempont volt.',
        weightChange: null,
        doi: '10.1016/S0140-6736(14)60976-4',
        url: 'https://pubmed.ncbi.nlm.nih.gov/25018121/',
      },
      {
        id: 'award5',
        acronym: 'AWARD-5',
        title: 'Efficacy and safety of dulaglutide versus sitagliptin after 52 weeks in type 2 diabetes in a randomized controlled trial (AWARD-5)',
        journal: 'Diabetes Care',
        year: 2014,
        registry: 'NCT00734474',
        n: 1098,
        durationWeeks: 52,
        population: '2-es típusú cukorbetegek metformin mellett; átlagéletkor 54 év, HbA1c 8,1%, testtömeg 86,4 kg, diabétesz-tartam 7 év (104 hetes vizsgálat, 52 heti elsődleges végpont)',
        design: 'Multicentrikus, adaptív, kettős vak, párhuzamos karú randomizált vizsgálat',
        arms: ['dulaglutid 1,5 mg', 'dulaglutid 0,75 mg', 'szitagliptin 100 mg', 'placebo (26 hétig)'],
        resultHu:
          'HbA1c a 52. héten: −1,10% (1,5 mg), −0,87% (0,75 mg), −0,39% (szitagliptin). Testtömegváltozás: −3,03 kg (1,5 mg), −2,60 kg (0,75 mg) vs −1,53 kg (szitagliptin); p < 0,001.',
        safetyHu: 'Leggyakoribb emésztőrendszeri mellékhatás: hányinger, hasmenés, hányás. Súlyos hipoglikémia nem fordult elő.',
        summaryHu:
          'Egy év alatt a heti 1,5 mg dulaglutid kb. 3 kg fogyást hozott cukorbetegeknél, 1,5 kg-mal többet, mint a tablettás szitagliptin. ' +
          'Ez jól mutatja a dulaglutid valós léptékét: hasznos vércukorcsökkentő, mérsékelt testsúlyelőnnyel, nem fogyasztószer.',
        weightChange: { endpointWeek: 52, unit: 'kg', arms: [{ label: 'dulaglutid 1,5 mg (vs szitagliptin)', drugPct: null, placeboPct: null, drugKg: -3.03, comparatorKg: -1.53, comparatorLabel: 'szitagliptin 100 mg' }, { label: 'dulaglutid 0,75 mg (vs szitagliptin)', drugPct: null, placeboPct: null, drugKg: -2.6, comparatorKg: -1.53, comparatorLabel: 'szitagliptin 100 mg' }], note: 'Aktív komparátor (szitagliptin), kg-ban közölt változás.' },
        doi: '10.2337/dc13-2761',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24742660/',
      },
      {
        id: 'award3',
        acronym: 'AWARD-3',
        title: 'Efficacy and safety of dulaglutide monotherapy versus metformin in type 2 diabetes in a randomized controlled trial (AWARD-3)',
        journal: 'Diabetes Care',
        year: 2014,
        registry: null,
        n: 807,
        durationWeeks: 52,
        population: 'Korai 2-es típusú cukorbetegek (HbA1c 6,5–9,5%) diéta/testmozgás vagy alacsony dózisú orális monoterápia mellett',
        design: 'Randomizált, kettős vak, 52 hetes vizsgálat; elsődleges végpont a 26. heti HbA1c',
        arms: ['dulaglutid 1,5 mg', 'dulaglutid 0,75 mg', 'metformin'],
        resultHu:
          'HbA1c a 26. héten: −0,78% (1,5 mg), −0,71% (0,75 mg), −0,56% (metformin); mindkét dulaglutid-dózis szuperior. A fogyás az 1,5 mg-mal a metforminéhoz hasonló, a 0,75 mg-mal kisebb volt (számszerű érték az absztraktban nincs).',
        safetyHu: 'Hányinger, hasmenés, hányás a leggyakoribb mellékhatás, a metforminéhoz hasonló gyakorisággal. Súlyos hipoglikémia nem volt.',
        summaryHu:
          'Frissen diagnosztizált cukorbetegeknél a dulaglutid önmagában kissé jobban csökkentette a vércukrot, mint a metformin, a fogyás viszont nem volt nagyobb a metforminénál. ' +
          'Ez is megerősíti, hogy a dulaglutid elsősorban cukorbetegség-gyógyszer, nem testsúlycsökkentő.',
        weightChange: null,
        doi: '10.2337/dc13-2759',
        url: 'https://pubmed.ncbi.nlm.nih.gov/24842985/',
      },
    ],
    relatedEvidence: [],
  },

  // ───────────────────────────── TIRZEPATID ─────────────────────────────
  {
    id: 'tirzepatid',
    name: 'Tirzepatid',
    inn: 'tirzepatide',
    summary:
      'A tirzepatid (Mounjaro) az első kettős hatású, GIP- és GLP-1-receptor-agonista; heti egyszer adott injekció, amely 2-es típusú cukorbetegségre és testsúlykezelésre is engedélyezett. ' +
      'A SURMOUNT-1 vizsgálatban cukorbetegség nélküli, elhízott felnőttek 72 hét alatt a legnagyobb dózison átlagosan testtömegük 20,9%-át adták le (placebo: 3,1%), és a SURMOUNT-5 közvetlen összehasonlításban hatékonyabb volt a szemaglutidnál (−20,2% vs −13,7%). ' +
      'Magyarországon 2024 óta forgalomban, nem támogatott, a legdrágább GLP-1-alapú kezelés.',
    mechanism:
      'Egyetlen molekula, amely a GIP- és a GLP-1-receptort is aktiválja. A GLP-1-hatások (glükózfüggő inzulinfokozás, glukagongátlás, lassult gyomorürülés, csökkent étvágy) mellett a GIP-hatás tovább javítja az inzulinérzékenységet és a zsíranyagcserét; kb. 5 napos felezési idővel heti egyszer adható.',
    brands: [
      {
        name: 'Mounjaro (KwikPen)',
        form: 'előretöltött többadagos KwikPen (4 heti adag/toll: 2,5 / 5 / 7,5 / 10 / 12,5 / 15 mg) és egyadagos injekciós üveg; heti 1× s.c.',
        indication: '2-es típusú diabétesz (10 éves kortól) ÉS testsúlykezelés felnőtteknél (BMI ≥ 30, vagy 27–30 legalább egy súlyfüggő társbetegséggel)',
        marketedInHu: true,
        rx: true,
        reimbursement:
          'Nem támogatott: a NEAK 2026. 10. 01-i EÜ emelt és kiemelt listáin nem szerepel; PatikaRadar és BENU: normatív támogatás 0% / „Nem”. Sem cukorbetegségre, sem fogyásra nincs TB-támogatás, teljes áron, szabadáras készítményként kapható.',
        prices: [
          { label: '2,5 mg/adag KwikPen (4 heti adag, indító dózis)', amountHuf: 70550, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/mounjaro-25-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66362', verified: true },
          { label: '5 mg/adag KwikPen (4 heti adag)', amountHuf: 95845, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/mounjaro-5-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66363', verified: true },
          { label: '7,5 mg/adag KwikPen (4 heti adag)', amountHuf: 133787, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/mounjaro-75-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66364', verified: true },
          { label: '10 mg/adag KwikPen (4 heti adag)', amountHuf: 156700, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-14', source: 'https://kohegy.hu/aruhaz/hu/gyogyszerek/7189-mounjaro-10-mg-adag-kwikpen-old-inj-et-inj-toll-1x2-4ml.html', verified: true, note: 'Egy gyógyszertár webáruházának ára.' },
          { label: '12,5 mg/adag KwikPen (4 heti adag)', amountHuf: 171729, rangeHuf: null, unit: 'tollanként (= havi adag)', asOf: '2026-10-14', source: 'https://www.egeszsegkalauz.hu/gyogyszerkereso/termek/mounjaro-125-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban/66360', verified: false, status: 'ellenőrizendő', note: 'Tájékoztató ár; azonos a PHARMINDEX 15 mg-os árával, ezért ellenőrizendő.' },
          { label: '15 mg/adag KwikPen (4 heti adag, max. dózis)', amountHuf: 171729, rangeHuf: [171729, 188240], unit: 'tollanként (= havi adag)', asOf: '2026-10-01', source: 'https://www.pharmindex-online.hu/termekek/mounjaro-15-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66361', verified: false, status: 'ellenőrizendő', note: 'PHARMINDEX: 171 729 Ft; egy BENU-találat 188 240 Ft-ot mutatott – a patikák árazása eltér.' },
        ],
        notes:
          'A KwikPen Magyarországon 2024. 05. 29-én kapott forgalomba hozatali engedélyt (OGYÉI adatbázis), forgalomban van. Fenntartó dózison a havi költség kb. 96–190 ezer Ft között mozog a dózistól függően.',
      },
    ],
    dosing:
      'Heti 1× 2,5 mg-gal indul, 4 hét után 5 mg; szükség esetén legalább 4 hetenként 2,5 mg-os lépésekben emelhető. Ajánlott fenntartó dózis 5, 10 vagy 15 mg; maximum heti 15 mg. A nap bármely időpontjában, étkezéstől függetlenül adható; hasba, combba vagy felkarba.',
    commonSideEffects: [
      'Nagyon gyakori: hányinger, hasmenés, hányás, hasi fájdalom, székrekedés; hipoglikémia szulfonilureával vagy inzulinnal együtt; étvágycsökkenés (T2DM-ben) (Mounjaro SmPC 4.8, 15 169 beteg adatai)',
      'Gyakori: emésztési zavar, puffadás, böfögés, reflux, szédülés, alacsony vérnyomás, fáradtság, hajhullás, injekció helyi reakciók, szívfrekvencia-emelkedés, lipáz-/amiláz-/kalcitoninszint-emelkedés, túlérzékenységi reakciók',
      'A hányinger, hasmenés, hányás a dózisemelésnél gyakoribb, idővel csökken; a SURMOUNT-1-ben mellékhatás miatt 4,3–7,1% hagyta abba (placebo 2,6%)',
    ],
    seriousRisks: [
      'Akut pancreatitis (nem gyakori): gyanú esetén leállítás, igazolt esetben nem újrakezdhető; pancreatitis-kórelőzmény esetén óvatosság',
      'Epekő és epehólyag-gyulladás (nem gyakori; a testsúlyvizsgálatokban gyakoribb, a fogyás mértékével összefügg)',
      'Pajzsmirigy: patkányban minden dózisnál több C-sejtes tumor; emberi relevanciája nem ismert, a kalcitoninszint emelkedhet. MTC/MEN2 kórelőzmény esetén az orvossal mérlegelendő (az EU-s SmPC-ben nem formális ellenjavallat)',
      'Kiszáradás, akut veseelégtelenség súlyos emésztőrendszeri tünetek mellett; diabéteszes retinopátia átmeneti romlása; szívfrekvencia-emelkedés (átlag 3–5 ütés/perc)',
      'Tüdőaspiráció altatás/mély szedáció alatt; hipoglikémia szulfonilurea/inzulin mellett; ritkán anafilaxia, angioödéma',
    ],
    contraindications: [
      'Túlérzékenység a hatóanyagra vagy segédanyagra',
      'Terhesség: nem ajánlott; tervezett terhesség előtt legalább 1 hónappal le kell állítani; fogamzóképes nőknek fogamzásgátlás javasolt a kezelés alatt',
      'Szájon át szedett fogamzásgátló: a tirzepatid egyszeri adagja csökkentette a kombinált tabletta szintjét (etinilösztradiol Cmax −59%), az EU-s SmPC szerint ez klinikailag nem releváns és dózismódosítás nem szükséges. Az amerikai előírás óvatosabb: a kezelés kezdetén és minden dózisemelés után 4 hétig nem hormonális kiegészítő védekezést javasol – erről érdemes a kezelőorvossal beszélni',
      'Szoptatás: az anyatejben alig kimutatható, de a szoptatás alatti alkalmazásról az orvossal kell dönteni (korlátozott adat)',
      'Nem javasolt: 1-es típusú diabétesz, súlyos gastroparesis/súlyos emésztőrendszeri betegség, 18 év alatt testsúlykezelésre; más GLP-1-agonistával nem kombinálható; nem helyettesíti az inzulint',
      'Kizárólag csökkentett kalóriabevitel és több mozgás mellett alkalmazandó – nem pótolja az életmódváltást',
    ],
    afterStopping:
      'A SURMOUNT-4 vizsgálatban 36 hét tirzepatid után (átlag −20,9%) a placebóra váltók 52 hét alatt +14,0%-ot visszahíztak, míg a folytatók további 5,5%-ot fogytak; a leadott súly legalább 80%-át a folytatók 89,5%-a, a leállítók 16,6%-a tartotta meg. ' +
      'A tirzepatid tehát a szemaglutidhoz hasonlóan csak folyamatos kezelés mellett tartja meg a hatását; a leállítás előtt érdemes orvossal fenntartási tervet készíteni.',
    studies: [
      {
        id: 'surmount1',
        acronym: 'SURMOUNT-1',
        title: 'Tirzepatide Once Weekly for the Treatment of Obesity',
        journal: 'New England Journal of Medicine',
        year: 2022,
        registry: 'NCT04184622',
        n: 2539,
        durationWeeks: 72,
        population: 'Felnőttek BMI ≥ 30, vagy ≥ 27 legalább egy súlyfüggő szövődménnyel, cukorbetegség NÉLKÜL; átlagos testtömeg 104,8 kg, BMI 38,0; 1:1:1:1 randomizáció',
        design: 'Kettős vak, randomizált, placebokontrollos III. fázisú vizsgálat, 20 hetes dózisemeléssel',
        arms: ['tirzepatid 5 mg', 'tirzepatid 10 mg', 'tirzepatid 15 mg (heti 1×)', 'placebo'],
        resultHu:
          'Testtömegváltozás a 72. héten: −15,0% (5 mg), −19,5% (10 mg), −20,9% (15 mg) vs −3,1% (placebo). Legalább 5% fogyás: 85% / 89% / 91% vs 35%; legalább 20%: 50% (10 mg), 57% (15 mg) vs 3%.',
        safetyHu: 'Leggyakoribb mellékhatás emésztőrendszeri, többnyire enyhe-közepes, főként dózisemelés alatt. Mellékhatás miatti leállás: 4,3% / 7,1% / 6,2% vs 2,6%.',
        summaryHu:
          'A SURMOUNT-1 a Mounjaro alapvizsgálata fogyásra: cukorbetegség nélküli, elhízott felnőttek a legnagyobb dózison 72 hét alatt átlagosan testtömegük 21%-át adták le, és több mint felük legalább 20%-ot fogyott – ' +
          'ez a legnagyobb hatás, amit gyógyszerrel placebokontrollos vizsgálatban mértek. Az emésztőrendszeri panaszok gyakoriak, de ritkán vezettek leálláshoz.',
        weightChange: { endpointWeek: 72, arms: [{ label: 'tirzepatid 5 mg', drugPct: -15.0, placeboPct: -3.1 }, { label: 'tirzepatid 10 mg', drugPct: -19.5, placeboPct: -3.1 }, { label: 'tirzepatid 15 mg', drugPct: -20.9, placeboPct: -3.1 }] },
        doi: '10.1056/NEJMoa2206038',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35658024/',
      },
      {
        id: 'surmount2',
        acronym: 'SURMOUNT-2',
        title: 'Tirzepatide once weekly for the treatment of obesity in people with type 2 diabetes (SURMOUNT-2): a double-blind, randomised, multicentre, placebo-controlled, phase 3 trial',
        journal: 'The Lancet',
        year: 2023,
        registry: 'NCT04657003',
        n: 938,
        durationWeeks: 72,
        population: 'Felnőttek 2-es típusú cukorbetegséggel (HbA1c 7–10%) és BMI ≥ 27; 51% nő, átlagéletkor 54 év, BMI 36,1',
        design: 'Kettős vak, randomizált (1:1:1), placebokontrollos, multicentrikus III. fázisú vizsgálat',
        arms: ['tirzepatid 10 mg', 'tirzepatid 15 mg (heti 1×)', 'placebo'],
        resultHu:
          'Testtömegváltozás a 72. héten: −12,8% (10 mg), −14,7% (15 mg) vs −3,2% (placebo); különbség −9,6 és −11,6 százalékpont (p < 0,0001). Legalább 5% fogyás: 79–83% vs 32%.',
        safetyHu: 'Leggyakoribb mellékhatás hányinger, hasmenés, hányás, többnyire enyhe-közepes; mellékhatás miatti leállás < 5%.',
        summaryHu:
          'Cukorbetegeknél a tirzepatid 72 hét alatt 13–15%-os fogyást hozott – kevesebbet, mint cukorbetegség nélkül, de többet, mint bármely korábbi GLP-1-készítmény ebben a populációban. ' +
          'A résztvevők fele nő volt, átlagosan 54 évesek; a mellékhatásprofil a SURMOUNT-1-hez hasonló.',
        weightChange: { endpointWeek: 72, arms: [{ label: 'tirzepatid 10 mg (T2DM)', drugPct: -12.8, placeboPct: -3.2 }, { label: 'tirzepatid 15 mg (T2DM)', drugPct: -14.7, placeboPct: -3.2 }] },
        doi: '10.1016/S0140-6736(23)01200-X',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37385275/',
      },
      {
        id: 'surmount3',
        acronym: 'SURMOUNT-3',
        title: 'Tirzepatide after intensive lifestyle intervention in adults with overweight or obesity: the SURMOUNT-3 phase 3 trial',
        journal: 'Nature Medicine',
        year: 2023,
        registry: 'NCT04657016',
        n: 579,
        durationWeeks: 72,
        population: 'Felnőttek BMI ≥ 30 (vagy ≥ 27 szövődménnyel), cukorbetegség nélkül, akik 12 hetes intenzív életmód-programban legalább 5%-ot fogytak',
        design: 'Kettős vak, randomizált (1:1), placebokontrollos III. fázisú vizsgálat az életmód-program után',
        arms: ['tirzepatid maximálisan tolerált dózis (10 vagy 15 mg)', 'placebo'],
        resultHu:
          'További testtömegváltozás a randomizációtól a 72. hétig: −18,4% (tirzepatid) vs +2,5% (placebo); különbség −20,8 százalékpont (95% CI −23,2 – −18,5). További ≥ 5% fogyás: 87,5% vs 16,5%.',
        safetyHu: 'Leggyakoribb mellékhatás emésztőrendszeri, többnyire enyhe-közepes.',
        summaryHu:
          'A SURMOUNT-3 azt mutatta, hogy aki életmódváltással már fogyott, az a tirzepatid mellett további 18%-ot ad le, míg életmódváltás önmagában a visszahízás kezdetét hozta (+2,5%). ' +
          'Jó példa arra, hogy a gyógyszer és az életmódváltás egymást erősíti, nem helyettesíti.',
        weightChange: { endpointWeek: 72, arms: [{ label: 'tirzepatid 10/15 mg (életmód-program után)', drugPct: -18.4, placeboPct: 2.5 }] },
        doi: '10.1038/s41591-023-02597-w',
        url: 'https://pubmed.ncbi.nlm.nih.gov/37840095/',
      },
      {
        id: 'surmount4',
        acronym: 'SURMOUNT-4',
        title: 'Continued Treatment With Tirzepatide for Maintenance of Weight Reduction in Adults With Obesity: The SURMOUNT-4 Randomized Clinical Trial',
        journal: 'JAMA',
        year: 2024,
        registry: 'NCT04660643',
        n: 670,
        durationWeeks: 88,
        population: 'Felnőttek BMI ≥ 30 (vagy ≥ 27 szövődménnyel), cukorbetegség nélkül; 783 fő 36 hetes nyílt bevezetés után 670 randomizálva; 71% nő, átlagéletkor 48 év',
        design: 'Randomizált megvonási vizsgálat: 36 hét nyílt tirzepatid (10/15 mg), majd 52 hét kettős vak folytatás vs placebo (1:1)',
        arms: ['tirzepatid folytatása (10 vagy 15 mg)', 'placebóra váltás'],
        resultHu:
          'A bevezető 36 hét alatt átlagosan −20,9%. A 36.–88. hét között: −5,5% (folytatás) vs +14,0% (placebo); különbség −19,4 százalékpont. Teljes változás 0–88. hét: −25,3% vs −9,9%. A leadott súly ≥ 80%-át megtartotta: 89,5% vs 16,6%.',
        safetyHu: 'Leggyakoribb mellékhatás enyhe-közepes emésztőrendszeri panasz, gyakoribb tirzepatiddal, mint placebóval.',
        summaryHu:
          'A SURMOUNT-4 a tirzepatid leállításának következményeit mutatja: a placebóra váltók egy év alatt a leadott súly nagy részét visszahízták (+14%), míg a folytatók tovább fogytak, összesen 25%-ra. ' +
          'A kezelés megszakítása tehát a hatás jelentős részének elvesztésével jár – ez a vizsgálat az őszinte tájékoztatás egyik alapja.',
        weightChange: { endpointWeek: 88, baselineWeek: 36, arms: [{ label: 'tirzepatid folytatva (36.→88. hét)', drugPct: -5.5, placeboPct: 14.0 }] },
        doi: '10.1001/jama.2023.24945',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38078870/',
      },
      {
        id: 'surmount5',
        acronym: 'SURMOUNT-5',
        title: 'Tirzepatide as Compared with Semaglutide for the Treatment of Obesity',
        journal: 'New England Journal of Medicine',
        year: 2025,
        registry: 'NCT05822830',
        n: 751,
        durationWeeks: 72,
        population: 'Felnőttek elhízással, 2-es típusú cukorbetegség nélkül; 1:1 randomizáció',
        design: 'Nyílt, randomizált, aktív kontrollos IIIb fázisú vizsgálat; mindkét szer maximálisan tolerált dózison',
        arms: ['tirzepatid 10 vagy 15 mg heti 1×', 'szemaglutid 1,7 vagy 2,4 mg heti 1×'],
        resultHu:
          'Testtömegváltozás a 72. héten: −20,2% (tirzepatid) vs −13,7% (szemaglutid); p < 0,001. Derékkörfogat: −18,4 cm vs −13,0 cm. A ≥ 10/15/20/25% fogyást elérők aránya tirzepatiddal nagyobb volt.',
        safetyHu: 'Mindkét karon emésztőrendszeri mellékhatások voltak a leggyakoribbak, többnyire enyhe-közepesek, főként dózisemelés alatt.',
        summaryHu:
          'A SURMOUNT-5 az első közvetlen összehasonlítás a két legerősebb fogyasztószer között: a tirzepatid 72 hét alatt átlagosan 20%-os, a szemaglutid 14%-os fogyást hozott. ' +
          'A vizsgálat nyílt elrendezésű volt (a résztvevők tudták, mit kapnak), ami némi torzítást okozhat, de a különbség egyértelmű és klinikailag jelentős.',
        weightChange: { endpointWeek: 72, arms: [{ label: 'tirzepatid 10/15 mg', drugPct: -20.2, placeboPct: null, comparatorPct: -13.7, comparatorLabel: 'szemaglutid 1,7/2,4 mg' }] },
        doi: '10.1056/NEJMoa2416394',
        url: 'https://pubmed.ncbi.nlm.nih.gov/40353578/',
      },
    ],
    relatedEvidence: [
      {
        id: 'surpass2',
        acronym: 'SURPASS-2',
        title: 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes',
        journal: 'New England Journal of Medicine',
        year: 2021,
        registry: 'NCT03987919',
        n: 1879,
        noteHu: '40 hét, T2DM: a tirzepatid 5/10/15 mg HbA1c-ben és testtömegben is felülmúlta a szemaglutid 1 mg-ot (testtömegkülönbség −1,9 / −3,6 / −5,5 kg). Hányinger 17–22% vs 18%.',
        doi: '10.1056/NEJMoa2107519',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34170647/',
      },
      {
        id: 'surpass-cvot',
        acronym: 'SURPASS-CVOT',
        title: 'Cardiovascular Outcomes with Tirzepatide versus Dulaglutide in Type 2 Diabetes',
        journal: 'New England Journal of Medicine',
        year: 2025,
        registry: 'NCT04255433',
        n: 13299,
        noteHu: 'T2DM + ateroszklerotikus szív-érrendszeri betegség: a tirzepatid nem volt rosszabb a dulaglutidnál (MACE 12,2% vs 13,1%; HR 0,92; 95,3% CI 0,83–1,01; szuperioritás nem igazolt, p = 0,09). Több emésztőrendszeri mellékhatás tirzepatiddal.',
        doi: '10.1056/NEJMoa2505928',
        url: 'https://pubmed.ncbi.nlm.nih.gov/41406444/',
      },
    ],
  },
];

// Újabb szerek: EU-/magyar státusz 2026. október 14-én
export const pipeline = [
  {
    id: 'oral-wegovy',
    name: 'Wegovy tabletta (orális szemaglutid 1,5 / 4 / 9 / 25 mg)',
    status: 'EU-ban engedélyezett (Európai Bizottság, 2026. 07. 14., C(2026) 5102; CHMP pozitív vélemény 2026. 05. 21.)',
    huStatus: 'Magyar forgalmazás és ár 2026. októberben nem igazolt – ellenőrizendő',
    noteHu: 'Az első szájon át szedhető GLP-1-agonista testsúlykezelésre, az OASIS fázis 3 program alapján. A 25 mg-os napi tabletta a Wegovy SmPC szerint heti 2,4 mg injekcióra váltható.',
    verified: true,
    source: 'https://ec.europa.eu/health/documents/community-register/2026/20260714170033/dec_170033_en.pdf',
  },
  {
    id: 'wegovy-7-2',
    name: 'Wegovy 7,2 mg heti fenntartó dózis',
    status: 'EU-ban engedélyezett (Európai Bizottság, 2026. február; CHMP vélemény 2025. 12. 12.); a Wegovy magyar SmPC-jében már szerepel',
    huStatus: 'Egyadagos 7,2 mg-os toll magyar elérhetősége ellenőrizendő',
    noteHu: 'BMI ≥ 30 esetén legalább 4 hét 2,4 mg után emelhető 7,2 mg-ra (STEP UP vizsgálat).',
    verified: true,
    source: 'https://ec.europa.eu/health/documents/community-register/2026/20260216169057/anx_169057_hu.pdf',
  },
  {
    id: 'orforglipron',
    name: 'Orforglipron (napi 1× szájon át szedhető, nem peptid GLP-1-agonista, Lilly)',
    status: 'EU-ban NEM engedélyezett: a CHMP 2026. október 12–15-i ülésének napirendjén szerepel véleményadásra (elhízás és 2-es típusú diabétesz felnőtteknél; EMEA/H/C/006632). USA-ban és az Egyesült Királyságban Foundayo néven engedélyezett.',
    huStatus: 'Magyarországon nem kapható',
    noteHu: 'Ha a CHMP pozitív véleményt ad, az Európai Bizottság döntése kb. 2 hónappal később várható; magyar bevezetés korábban nem reális.',
    verified: true,
    source: 'https://www.ema.europa.eu/en/documents/agenda/agenda-chmp-meeting-12-15-october-2026_en.pdf',
  },
  {
    id: 'cagrisema',
    name: 'CagriSema (kagrilintid + szemaglutid, Novo Nordisk)',
    status: 'EU-ban NEM engedélyezett; nyilvánosan megerősített EMA-beadványt nem találtunk. Az FDA-hoz 2025. 12. 18-án nyújtották be (ellenőrizendő).',
    huStatus: 'Magyarországon nem kapható',
    noteHu: 'Amilin-analóg és GLP-1-agonista kombinációja, fázis 3 (REDEFINE) programban.',
    verified: false,
    source: '',
  },
  {
    id: 'generic-liraglutid',
    name: 'Generikus / biohasonló liraglutid',
    status: 'EU-ban több generikum engedélyezett; a PHARMINDEX magyar listáján (ATC A10BJ02) 2026. 10. 01-én csak Saxenda és Victoza szerepel',
    huStatus: 'Magyar forgalmazás nem igazolt',
    noteHu: '',
    verified: true,
    source: 'https://www.pharmindex-online.hu/gyogyszerek/atc/A10BJ02',
  },
];

export const sources = [
  // Klinikai vizsgálatok (PubMed-rekordok, E-utilities)
  { id: 'pm-step1', title: 'Wilding JPH et al. STEP 1. N Engl J Med 2021;384:989-1002. PMID 33567185', url: 'https://pubmed.ncbi.nlm.nih.gov/33567185/', accessed: '2026-10-14' },
  { id: 'pm-step2', title: 'Davies M et al. STEP 2. Lancet 2021;397:971-984. PMID 33667417', url: 'https://pubmed.ncbi.nlm.nih.gov/33667417/', accessed: '2026-10-14' },
  { id: 'pm-step4', title: 'Rubino D et al. STEP 4. JAMA 2021;325:1414-1425. PMID 33755728', url: 'https://pubmed.ncbi.nlm.nih.gov/33755728/', accessed: '2026-10-14' },
  { id: 'pm-step5', title: 'Garvey WT et al. STEP 5. Nat Med 2022;28:2083-2091. PMID 36216945', url: 'https://pubmed.ncbi.nlm.nih.gov/36216945/', accessed: '2026-10-14' },
  { id: 'pm-select', title: 'Lincoff AM et al. SELECT. N Engl J Med 2023;389:2221-2232. PMID 37952131', url: 'https://pubmed.ncbi.nlm.nih.gov/37952131/', accessed: '2026-10-14' },
  { id: 'pm-step1ext', title: 'Wilding JPH et al. STEP 1 extension. Diabetes Obes Metab 2022;24:1553-1564. PMID 35441470', url: 'https://pubmed.ncbi.nlm.nih.gov/35441470/', accessed: '2026-10-14' },
  { id: 'pm-step8', title: 'Rubino DM et al. STEP 8. JAMA 2022;327:138-150. PMID 35015037', url: 'https://pubmed.ncbi.nlm.nih.gov/35015037/', accessed: '2026-10-14' },
  { id: 'pm-scale-op', title: 'Pi-Sunyer X et al. SCALE Obesity and Prediabetes. N Engl J Med 2015;373:11-22. PMID 26132939', url: 'https://pubmed.ncbi.nlm.nih.gov/26132939/', accessed: '2026-10-14' },
  { id: 'pm-scale-dm', title: 'Davies MJ et al. SCALE Diabetes. JAMA 2015;314:687-699. PMID 26284720', url: 'https://pubmed.ncbi.nlm.nih.gov/26284720/', accessed: '2026-10-14' },
  { id: 'pm-scale-maint', title: 'Wadden TA et al. SCALE Maintenance. Int J Obes 2013;37:1443-1451. PMID 23812094', url: 'https://pubmed.ncbi.nlm.nih.gov/23812094/', accessed: '2026-10-14' },
  { id: 'pm-scale-3y', title: 'le Roux CW et al. SCALE 3-year. Lancet 2017;389:1399-1409. PMID 28237263', url: 'https://pubmed.ncbi.nlm.nih.gov/28237263/', accessed: '2026-10-14' },
  { id: 'pm-leader', title: 'Marso SP et al. LEADER. N Engl J Med 2016;375:311-322. PMID 27295427', url: 'https://pubmed.ncbi.nlm.nih.gov/27295427/', accessed: '2026-10-14' },
  { id: 'pm-surmount1', title: 'Jastreboff AM et al. SURMOUNT-1. N Engl J Med 2022;387:205-216. PMID 35658024', url: 'https://pubmed.ncbi.nlm.nih.gov/35658024/', accessed: '2026-10-14' },
  { id: 'pm-surmount2', title: 'Garvey WT et al. SURMOUNT-2. Lancet 2023;402:613-626. PMID 37385275', url: 'https://pubmed.ncbi.nlm.nih.gov/37385275/', accessed: '2026-10-14' },
  { id: 'pm-surmount3', title: 'Wadden TA et al. SURMOUNT-3. Nat Med 2023;29:2909-2918. PMID 37840095', url: 'https://pubmed.ncbi.nlm.nih.gov/37840095/', accessed: '2026-10-14' },
  { id: 'pm-surmount4', title: 'Aronne LJ et al. SURMOUNT-4. JAMA 2024;331:38-48. PMID 38078870', url: 'https://pubmed.ncbi.nlm.nih.gov/38078870/', accessed: '2026-10-14' },
  { id: 'pm-surmount5', title: 'Aronne LJ et al. SURMOUNT-5. N Engl J Med 2025;393:26-36. PMID 40353578', url: 'https://pubmed.ncbi.nlm.nih.gov/40353578/', accessed: '2026-10-14' },
  { id: 'pm-surpass2', title: 'Frías JP et al. SURPASS-2. N Engl J Med 2021;385:503-515. PMID 34170647', url: 'https://pubmed.ncbi.nlm.nih.gov/34170647/', accessed: '2026-10-14' },
  { id: 'pm-surpass-cvot', title: 'Nicholls SJ et al. SURPASS-CVOT. N Engl J Med 2025;393:2409-2420. PMID 41406444', url: 'https://pubmed.ncbi.nlm.nih.gov/41406444/', accessed: '2026-10-14' },
  { id: 'pm-award11', title: 'Frias JP et al. AWARD-11. Diabetes Care 2021;44:765-773. PMID 33397768', url: 'https://pubmed.ncbi.nlm.nih.gov/33397768/', accessed: '2026-10-14' },
  { id: 'pm-rewind', title: 'Gerstein HC et al. REWIND. Lancet 2019;394:121-130. PMID 31189511', url: 'https://pubmed.ncbi.nlm.nih.gov/31189511/', accessed: '2026-10-14' },
  { id: 'pm-award6', title: 'Dungan KM et al. AWARD-6. Lancet 2014;384:1349-1357. PMID 25018121', url: 'https://pubmed.ncbi.nlm.nih.gov/25018121/', accessed: '2026-10-14' },
  { id: 'pm-award5', title: 'Nauck M et al. AWARD-5. Diabetes Care 2014;37:2149-2158. PMID 24742660', url: 'https://pubmed.ncbi.nlm.nih.gov/24742660/', accessed: '2026-10-14' },
  { id: 'pm-award3', title: 'Umpierrez G et al. AWARD-3. Diabetes Care 2014;37:2168-2176. PMID 24842985', url: 'https://pubmed.ncbi.nlm.nih.gov/24842985/', accessed: '2026-10-14' },
  { id: 'ctgov-award11', title: 'ClinicalTrials.gov NCT03495102 (AWARD-11)', url: 'https://clinicaltrials.gov/study/NCT03495102', accessed: '2026-10-14' },
  { id: 'ctgov-award5', title: 'ClinicalTrials.gov NCT00734474 (AWARD-5, LY2189265 vs szitagliptin)', url: 'https://clinicaltrials.gov/study/NCT00734474', accessed: '2026-10-14' },
  // Alkalmazási előírások (EMA, magyar nyelvű)
  { id: 'smpc-wegovy', title: 'Wegovy – alkalmazási előírás (EMA EPAR, HU)', url: 'https://www.ema.europa.eu/hu/documents/product-information/wegovy-epar-product-information_hu.pdf', accessed: '2026-10-14' },
  { id: 'smpc-ozempic', title: 'Ozempic – alkalmazási előírás (EMA EPAR, HU)', url: 'https://www.ema.europa.eu/hu/documents/product-information/ozempic-epar-product-information_hu.pdf', accessed: '2026-10-14' },
  { id: 'smpc-rybelsus', title: 'Rybelsus – alkalmazási előírás (EMA EPAR, HU)', url: 'https://www.ema.europa.eu/hu/documents/product-information/rybelsus-epar-product-information_hu.pdf', accessed: '2026-10-14' },
  { id: 'smpc-saxenda', title: 'Saxenda – alkalmazási előírás (EMA EPAR, HU)', url: 'https://www.ema.europa.eu/hu/documents/product-information/saxenda-epar-product-information_hu.pdf', accessed: '2026-10-14' },
  { id: 'smpc-trulicity', title: 'Trulicity – alkalmazási előírás (EMA EPAR, HU)', url: 'https://www.ema.europa.eu/hu/documents/product-information/trulicity-epar-product-information_hu.pdf', accessed: '2026-10-14' },
  { id: 'smpc-mounjaro', title: 'Mounjaro – alkalmazási előírás (EMA EPAR, HU)', url: 'https://www.ema.europa.eu/hu/documents/product-information/mounjaro-epar-product-information_hu.pdf', accessed: '2026-10-14' },
  // Szabályozói státusz
  { id: 'ema-wegovy', title: 'EMA – Wegovy EPAR oldal', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/wegovy', accessed: '2026-10-14' },
  { id: 'ema-chmp-may2026', title: 'EMA CHMP meeting highlights 18–21 May 2026 (Wegovy tabletta pozitív vélemény)', url: 'https://www.ema.europa.eu/en/news/meeting-highlights-committee-medicinal-products-human-use-chmp-18-21-may-2026', accessed: '2026-10-14' },
  { id: 'ec-wegovy-tablet', title: 'Európai Bizottság határozat C(2026) 5102, 2026. 07. 14. (Wegovy tabletta)', url: 'https://ec.europa.eu/health/documents/community-register/2026/20260714170033/dec_170033_en.pdf', accessed: '2026-10-14' },
  { id: 'ec-wegovy-72', title: 'Európai Bizottság – Wegovy melléklet (HU), 2026. 02. 16. (7,2 mg)', url: 'https://ec.europa.eu/health/documents/community-register/2026/20260216169057/anx_169057_hu.pdf', accessed: '2026-10-14' },
  { id: 'ema-chmp-oct2026', title: 'EMA CHMP agenda 12–15 October 2026 (orforglipron vélemény napirenden)', url: 'https://www.ema.europa.eu/en/documents/agenda/agenda-chmp-meeting-12-15-october-2026_en.pdf', accessed: '2026-10-14' },
  { id: 'ema-chmp-sep2026', title: 'EMA CHMP meeting highlights 14–17 September 2026', url: 'https://www.ema.europa.eu/en/news/meeting-highlights-committee-medicinal-products-human-use-chmp-14-17-september-2026', accessed: '2026-10-14' },
  { id: 'ogyei-mounjaro', title: 'OGYÉI gyógyszeradatbázis – Mounjaro 5 mg/adag KwikPen (engedély 2024. 05. 29.)', url: 'https://ogyei.gov.hu/gyogyszeradatbazis&action=show_details&item=244892', accessed: '2026-10-14' },
  { id: 'ogyei-wegovy', title: 'OGYÉI gyógyszeradatbázis – Wegovy 0,25 mg FlexTouch', url: 'https://ogyei.gov.hu/gyogyszeradatbazis&action=show_details&item=228315', accessed: '2026-10-14' },
  // NEAK támogatás
  { id: 'neak-eu70-2026-10', title: 'NEAK – EÜ emelt támogatási lista 2026. 10. 01. (EÜ70 1/b. pont: Ozempic, Rybelsus, Trulicity, Victoza)', url: 'https://neak.gov.hu/letoltheto/ATFO_dok/gyogyszer/ind', accessed: '2026-10-14' },
  { id: 'neak-kiemelt-2026-10', title: 'NEAK – EÜ kiemelt támogatási lista 2026. 10. 01. (GLP-1-készítmény nem szerepel)', url: 'https://neak.gov.hu/letoltheto/ATFO_dok/gyogyszer/ind', accessed: '2026-10-14' },
  // Árak
  { id: 'pr-ozempic1', title: 'PatikaRadar – Ozempic 1 mg (34 094 Ft; emelt 70%: 10 228 Ft)', url: 'https://www.patikaradar.hu/termekek/ozempic-1-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1x3ml-e5106318ea5d/', accessed: '2026-10-14' },
  { id: 'pr-ozempic05', title: 'PatikaRadar – Ozempic 0,5 mg (34 094 Ft)', url: 'https://www.patikaradar.hu/termekek/ozempic-0-5-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1x3ml-b40d0efda9fc/', accessed: '2026-10-14' },
  { id: 'pr-ozempic025', title: 'PatikaRadar – Ozempic 0,25 mg (34 094 Ft)', url: 'https://www.patikaradar.hu/termekek/ozempic-0-25-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1x1-5ml-f7f991b06691/', accessed: '2026-10-14' },
  { id: 'pr-rybelsus4', title: 'PatikaRadar – Rybelsus 4 mg 30x (37 530 Ft; emelt: 11 259 Ft)', url: 'https://www.patikaradar.hu/termekek/rybelsus-4-mg-tabletta-30db-c505bde4e1dc/', accessed: '2026-10-14' },
  { id: 'econsilium-rybelsus', title: 'Econsilium – Rybelsus 2. generáció Magyarországon (2025. 10. 27.; árak)', url: 'https://econsilium.hu/2025/10/27/megerkezett-a-rybelsus-tablettak-masodik-generacioja/', accessed: '2026-10-14' },
  { id: 'pr-wegovy24', title: 'PatikaRadar – Wegovy 2,4 mg (70 391 Ft; támogatás 0%)', url: 'https://www.patikaradar.hu/termekek/wegovy-2-4-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1adag-893839b8534b/', accessed: '2026-10-14' },
  { id: 'pi-wegovy025', title: 'PHARMINDEX – Wegovy 0,25 mg FlexTouch (51 762 Ft)', url: 'https://www.pharmindex-online.hu/termekek/wegovy-025-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65526', accessed: '2026-10-14' },
  { id: 'pi-wegovy05', title: 'PHARMINDEX – Wegovy 0,5 mg FlexTouch (51 762 Ft)', url: 'https://www.pharmindex-online.hu/termekek/wegovy-05-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65527', accessed: '2026-10-14' },
  { id: 'pi-wegovy1', title: 'PHARMINDEX – Wegovy 1 mg FlexTouch (51 762 Ft)', url: 'https://www.pharmindex-online.hu/termekek/wegovy-1-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65528', accessed: '2026-10-14' },
  { id: 'pi-wegovy17', title: 'PHARMINDEX – Wegovy 1,7 mg FlexTouch (61 137 Ft)', url: 'https://www.pharmindex-online.hu/termekek/wegovy-17-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65529', accessed: '2026-10-14' },
  { id: 'pi-wegovy24', title: 'PHARMINDEX – Wegovy 2,4 mg FlexTouch (70 391 Ft)', url: 'https://www.pharmindex-online.hu/termekek/wegovy-24-mg-flextouch-oldatos-injekcio-eloretoltott-injekcios-tollban-65530', accessed: '2026-10-14' },
  { id: 'pr-victoza', title: 'PatikaRadar – Victoza 2x3 ml (28 410 Ft; emelt: 8 523 Ft)', url: 'https://www.patikaradar.hu/termekek/victoza-6-mg-ml-oldatos-injekcio-eloretoltott-injekcios-tollban-2x3ml-673b31d81aed/', accessed: '2026-10-14' },
  { id: 'kohegy-saxenda', title: 'Kőhegy Gyógyszertár webáruház – Saxenda 3x3 ml (37 995 Ft)', url: 'https://kohegy.hu/aruhaz/hu/gyogyszerek/4102-saxenda-6-mg-ml-oldatos-inj-et-inj-tollban-3x3ml.html', accessed: '2026-10-14' },
  { id: 'pi-a10bj02', title: 'PHARMINDEX – ATC A10BJ02 liraglutid (csak Saxenda, Victoza)', url: 'https://www.pharmindex-online.hu/gyogyszerek/atc/A10BJ02', accessed: '2026-10-14' },
  { id: 'pr-trulicity15', title: 'PatikaRadar – Trulicity 1,5 mg 2x (17 903 Ft; emelt: 5 371 Ft)', url: 'https://www.patikaradar.hu/termekek/trulicity-1-5-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-2x0-5ml-2250af4d3796/', accessed: '2026-10-14' },
  { id: 'pi-trulicity3', title: 'PHARMINDEX – Trulicity 3 mg 2x (17 903 Ft, EÜ emelt 70%)', url: 'https://www.pharmindex-online.hu/termekek/trulicity-3-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-64382', accessed: '2026-10-14' },
  { id: 'pi-mounjaro25', title: 'PHARMINDEX – Mounjaro 2,5 mg/adag KwikPen (70 550 Ft)', url: 'https://www.pharmindex-online.hu/termekek/mounjaro-25-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66362', accessed: '2026-10-14' },
  { id: 'pi-mounjaro5', title: 'PHARMINDEX – Mounjaro 5 mg/adag KwikPen (95 845 Ft)', url: 'https://www.pharmindex-online.hu/termekek/mounjaro-5-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66363', accessed: '2026-10-14' },
  { id: 'pi-mounjaro75', title: 'PHARMINDEX – Mounjaro 7,5 mg/adag KwikPen (133 787 Ft)', url: 'https://www.pharmindex-online.hu/termekek/mounjaro-75-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66364', accessed: '2026-10-14' },
  { id: 'kohegy-mounjaro10', title: 'Kőhegy Gyógyszertár webáruház – Mounjaro 10 mg/adag KwikPen (156 700 Ft)', url: 'https://kohegy.hu/aruhaz/hu/gyogyszerek/7189-mounjaro-10-mg-adag-kwikpen-old-inj-et-inj-toll-1x2-4ml.html', accessed: '2026-10-14' },
  { id: 'ek-mounjaro125', title: 'Egészségkalauz – Mounjaro 12,5 mg/adag KwikPen (171 729 Ft, tájékoztató)', url: 'https://www.egeszsegkalauz.hu/gyogyszerkereso/termek/mounjaro-125-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban/66360', accessed: '2026-10-14' },
  { id: 'pi-mounjaro15', title: 'PHARMINDEX – Mounjaro 15 mg/adag KwikPen (171 729 Ft)', url: 'https://www.pharmindex-online.hu/termekek/mounjaro-15-mgadag-kwikpen-oldatos-injekcio-eloretoltott-injekcios-tollban-66361', accessed: '2026-10-14' },
  { id: 'pr-mounjaro5', title: 'PatikaRadar – Mounjaro 5 mg (95 845 Ft; támogatás 0%)', url: 'https://www.patikaradar.hu/termekek/mounjaro-5-mg-oldatos-injekcio-eloretoltott-injekcios-tollban-1x2-4ml-f279d7b07e18/', accessed: '2026-10-14' },
  { id: 'benu-mounjaro5', title: 'BENU Vény – Mounjaro KwikPen 5 mg/adag (normatív TB támogatás: Nem)', url: 'https://benuveny.hu/products/mounjaro-kwikpen-5mg-adag-old-inj-eloretolt-inj-1x2-4ml', accessed: '2026-10-14' },
  // Háttér (nem elsődleges, csak tájékoztatásul)
  { id: 'akciokozpont-wegovy', title: 'akciokozpont.hu – Wegovy ára Magyarországon (2025. 12. 11.; nem hivatalos „havi adag” becslések)', url: 'https://akciokozpont.hu/wegovy-ara-magyarorszagon/', accessed: '2026-10-14' },
  { id: 'economx-wegovy', title: 'Economx – Wegovy TB-befogadási kérelem nem volt (2023. 09. 18.)', url: 'https://www.economx.hu/nemzetkozi-vallalatok/wegovy-fogyokura-injekcio-tb-tamogatas.777535.html', accessed: '2026-10-14' },
];

export default { meta, compounds, pipeline, sources };
