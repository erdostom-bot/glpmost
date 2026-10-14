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
    summary: 'Tartós, orvosilag jelentős fogyás életmódváltással együtt.',
    text: [
      'A nagy klinikai vizsgálatokban a résztvevők – étrend és mozgás mellett – átlagosan testtömegük 5–20 százalékát veszítették el, a készítménytől és az adagtól függően. Egy 90 kg-os embernél ez nagyjából 5–18 kg.',
      'Az eredmény egyénenként nagyon eltérő: van, aki ennél többet, van, aki kevesebbet fogy. A konkrét vizsgálatok eredményeit a Klinikai információk oldalon találod, forrásokkal.',
    ],
  },
  {
    id: 'anyagcsere',
    title: 'Anyagcsere-egészség',
    summary: 'Jobb vércukor-, vérnyomás- és koleszterinértékek.',
    text: [
      'A fogyással együtt gyakran javulnak a vércukorszint, a vérnyomás és a vérzsírok értékei. 2-es típusú cukorbetegségben és prediabéteszben a vércukor-szabályozás javulása a készítmények egyik legfontosabb hatása.',
      'Ez sokaknál a gyógyszerigény csökkenését is jelentheti – ezt mindig az orvos állapítja meg, ne módosíts önállóan a gyógyszereiden.',
    ],
  },
  {
    id: 'szivet',
    title: 'Szív- és érrendszer',
    summary: 'Egyes készítményeknél bizonyítottan csökken a szív-érrendszeri események kockázata.',
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
      'A gyógyszer támogat, de a szokások átalakítása – megfelelő fehérjebevitel, rostok, rendszeres mozgás – továbbra is a te munkád, amiben mi is segítünk.',
    ],
  },
  {
    id: 'eletminoseg',
    title: 'Életminőség',
    summary: 'Több energia, könnyebb mozgás, kevesebb testi tehertétel.',
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
      items: ['Hányinger, hányás', 'Hasmenés vagy székrekedés', 'Hasi puffadás, teltségérzet, gyomorégés', 'Fejfájás, fáradtság'],
    },
    {
      title: 'Ritkább, de komoly kockázatok',
      note: 'Ilyenkor azonnal fordulj orvoshoz.',
      items: [
        'Hasnyálmirigy-gyulladás (tartós, erős hasi fájdalom)',
        'Epekő, epehólyag-gyulladás',
        'Kiszáradás, vesekárosodás súlyos hányás vagy hasmenés esetén',
        'Súlyos allergiás reakció',
        'Pajzsmirigy C-sejtes daganatokra vonatkozó figyelmeztetés (rágcsálókon észlelték, az emberre vonatkozó jelentősége nem ismert)',
      ],
    },
    {
      title: 'Ellenjavallatok és óvatosság',
      note: 'Ilyen esetben a kezelés nem, vagy csak szigorú orvosi mérlegeléssel jöhet szóba.',
      items: [
        'Terhesség, szoptatás, tervezett terhesség (a kezelést előtte az előírások szerint le kell állítani)',
        'Pajzsmirigy medulláris daganat, MEN2-szindróma a személyes vagy családi kórtörténetben',
        'Korábbi hasnyálmirigy-gyulladás',
        'Súlyos emésztőrendszeri betegség, evészavar',
        'Egyes készítményeknél a fogamzásgátló tabletta hatása is csökkenhet – ezt az orvos külön megbeszéli veled',
      ],
    },
  ],
}

export const afterwards = {
  title: 'Mi történik, ha abbahagyom?',
  paragraphs: [
    'A vizsgálatok egyértelműen mutatják: ha a kezelést leállítják, a leadott súly egy része – átlagosan jelentős hányada – idővel visszatér, különösen, ha az étkezési és mozgásszokások nem változtak meg tartósan.',
    'Éppen ezért tekintünk a kezelésre hosszú távú folyamatként, nem gyors megoldásként. Az orvossal a kezdetektől beszéltek a leállítás és a fenntartás tervéről is.',
    'A leadott testtömeg egy része izomtömeg is lehet. Ezért is fontos a megfelelő fehérjebevitel és az ellenállás-jellegű mozgás (pl. súlyzós edzés).',
  ],
}

export const benefitsCta = {
  title: 'Szeretnél többet tudni az eredményekről?',
  text: 'A Klinikai információk oldalon a vizsgálatok adatait, forrásait és a készítményekre vonatkozó tényeket találod.',
  button: { to: '/klinikai-informaciok', label: 'Klinikai információk' },
}
