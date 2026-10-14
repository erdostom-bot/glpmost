// Előnyök oldal szövegei.
// A számadatok a klinikai oldalon hivatkozott nagy vizsgálatokból származnak; ezek átlagok, egyéni eredmény eltérhet.

export const pageHero = {
  eyebrow: 'Előnyök',
  title: 'Mit adhat a kezelés – és mit nem',
  lead: 'A GLP-1 alapú kezelések több területen is segíthetnek. Itt őszintén végigvesszük az előnyöket, majd a mellékhatásokat és az ellenjavallatokat is – mert a jó döntéshez mindkettő kell.',
}

export const benefits = [
  {
    id: 'testsuly',
    title: 'Testsúly',
    summary: 'Klinikailag jelentős fogyás – a kezelés alatt, életmódváltással együtt.',
    text: [
      'A nagy, 1–1,5 éves klinikai vizsgálatokban a résztvevők – étrendi és mozgástanácsadás mellett – átlagosan testtömegük körülbelül 8–22 százalékát adták le a készítménytől és az adagtól függően, míg a csak tanácsadást kapó (placebo) csoport 2–3 százalékot. Ezek átlagok.',
      'Az eredmény egyénenként nagyon eltérő: van, aki ennél többet, van, aki kevesebbet fogy. A konkrét vizsgálatok eredményeit a Klinikai információk oldalon találod, forrásokkal.',
    ],
  },
  {
    id: 'anyagcsere',
    title: 'Anyagcsere-egészség',
    summary: 'Javulhatnak a vércukor-, a vérnyomás- és a vérzsírértékek.',
    text: [
      'A fogyással együtt gyakran javulnak a vércukorszint, a vérnyomás és a vérzsírok értékei. 2-es típusú cukorbetegségben és prediabéteszben a vércukor-szabályozás javulása a készítmények egyik legfontosabb hatása.',
      'Ez sokaknál a gyógyszerigény csökkenését is jelentheti – ezt mindig az orvos állapítja meg, ne módosíts önállóan a gyógyszereiden.',
    ],
  },
  {
    id: 'szivet',
    title: 'Szív- és érrendszer',
    summary: 'Egy készítménynél egy nagy vizsgálat szerint csökkent a szív-érrendszeri események kockázata – meghatározott betegcsoportban.',
    text: [
      'Egy nagy vizsgálatban azoknál a túlsúlyos vagy elhízott felnőtteknél, akiknek már volt szív-érrendszeri betegségük (pl. infarktus, stroke), egy GLP-1 készítmény csökkentette az újabb esemény kockázatát.',
      'Ez az eredmény nem jelenti automatikusan, hogy egy egészséges, szív-érrendszeri betegség nélküli embernél ugyanekkora a hatás – a vizsgálat meghatározott betegcsoportra vonatkozik.',
    ],
  },
  {
    id: 'etvagy',
    title: 'Étvágy és étkezési szokások',
    summary: 'Csendesebb éhségérzet, könnyebb arányérzék.',
    text: [
      'Sokan számolnak be arról, hogy a kezelés mellett kevésbé foglalkoztatja őket az étel („food noise”), hamarabb jóllaknak, és könnyebb kisebb adagokat enni. Ez teret ad az új, egészségesebb szokások kialakítására.',
      'A gyógyszer támogat, de a szokások átalakítása – megfelelő fehérjebevitel, rostok, rendszeres mozgás – továbbra is a te munkád; az orvos a kontrollokon ebben is tanácsot ad.',
    ],
  },
  {
    id: 'eletminoseg',
    title: 'Életminőség',
    summary: 'Sokaknál több energia, könnyebb mozgás, jobb alvás.',
    text: [
      'A testsúly csökkenésével sokaknál enyhül az ízületi fájdalom, javul a mozgékonyság és az alvás, nő az energiaszint. A vizsgálatokban a résztvevők gyakran jobb testi funkciót és közérzetet jelentettek.',
      'A testképpel és az étkezéssel kapcsolatos érzések azonban összetettek: ha a fogyás körül szorongást vagy nehéz gondolatokat érzel, beszélj róla az orvossal.',
    ],
  },
]

export const honest = {
  eyebrow: 'Őszintén',
  title: 'Mellékhatások, kockázatok, ellenjavallatok',
  intro:
    'Minden hatásos gyógyszernek vannak mellékhatásai. A legtöbb enyhe és átmeneti, de vannak komolyabbak is – ezért kell orvosi felügyelet.',
  columns: [
    {
      title: 'Gyakori mellékhatások',
      note: 'Főleg az adag emelésekor, általában a kezelés elején.',
      items: ['Hányinger, hányás', 'Hasmenés vagy székrekedés', 'Hasi puffadás, teltségérzet, gyomorégés', 'Fejfájás, fáradtság, szédülés', 'Étvágytalanság, átmeneti hajhullás'],
    },
    {
      title: 'Ritkább, de komoly kockázatok',
      note: 'Ilyenkor azonnal fordulj orvoshoz.',
      items: [
        'Hasnyálmirigy-gyulladás (tartós, erős hasi fájdalom)',
        'Epekő, epehólyag-gyulladás',
        'Kiszáradás, vesekárosodás súlyos hányás vagy hasmenés esetén',
        'Súlyos allergiás reakció',
        'Hirtelen látásromlás vagy látásvesztés (ritka, a szemaglutidnál leírt idegi eredetű szemkárosodás, NAION) – azonnali szemészeti vizsgálat szükséges',
        'Alacsony vércukor, ha inzulinnal vagy szulfonilureával együtt szeded',
        'Altatásos beavatkozás előtt szólj az altatóorvosnak: a lassabb gyomorürülés miatt félrenyelés veszélye lehet',
        'Cukorbetegeknél a szemfenéki betegség átmeneti romlása',
        'Rágcsálókban a GLP-1 szerek pajzsmirigy C-sejtes daganatot okoztak; az európai alkalmazási előírás szerint ennek emberi jelentősége valószínűleg alacsony, de nem zárható ki. Nyaki csomó, rekedtség, nyelési nehézség esetén szólj az orvosnak.',
      ],
    },
    {
      title: 'Ellenjavallatok és óvatosság',
      note: 'Ilyen esetben a kezelés nem, vagy csak szigorú orvosi mérlegeléssel jöhet szóba.',
      items: [
        'Terhesség és szoptatás alatt a kezelés nem alkalmazható. Ha babát tervezel, a készítménytől függően legalább 1–2 hónappal (tirzepatid: 1, szemaglutid: 2 hónap) a tervezett fogantatás előtt le kell állítani – ezt az orvossal előre beszéld meg.',
        'Pajzsmirigy medulláris daganat vagy MEN2 a saját vagy családi kórtörténetben – különös óvatosság.',
        'Korábbi hasnyálmirigy-gyulladás',
        'Súlyos emésztőrendszeri betegség, evészavar',
        'Tirzepatid mellett a fogamzásgátló tabletta felszívódása csökkenhet: a kezelés kezdete után és minden adagemelés után 4 hétig használj kiegészítő (pl. óvszer) vagy nem szájon át szedett fogamzásgátlást. Szemaglutidnál ilyen hatást nem várnak. Az orvos ezt veled átbeszéli.',
      ],
    },
  ],
}

export const afterwards = {
  title: 'Mi történik, ha abbahagyom?',
  paragraphs: [
    'A vizsgálatok egyértelműek: a kezelés leállítása után a leadott súly jelentős része – a szemaglutid-vizsgálat kiterjesztésében egy év alatt átlagosan mintegy kétharmada – visszatér, különösen, ha a szokások nem változtak meg tartósan.',
    'Éppen ezért tekintünk a kezelésre hosszú távú folyamatként, nem gyors megoldásként. Az orvossal a kezdetektől beszéltek a leállítás és a fenntartás tervéről is.',
    'A leadott testtömeg nagyobb része zsír, de a sovány testtömeg (izom) is csökken. Ezért fontos a megfelelő fehérjebevitel és az ellenállásos edzés.',
  ],
}

export const benefitsCta = {
  title: 'Szeretnél többet tudni az eredményekről?',
  text: 'A Klinikai információk oldalon a vizsgálatok adatait, forrásait és a készítményekre vonatkozó tényeket találod.',
  button: { to: '/klinikai-informaciok', label: 'Klinikai információk' },
}
