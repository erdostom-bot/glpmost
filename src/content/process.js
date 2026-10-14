// A folyamat oldal szövegei.

export const pageHero = {
  eyebrow: 'A folyamat',
  title: 'Így jutsz el az orvosi döntésig',
  lead: 'Öt egyszerű lépés, amelyből a legtöbbet otthonról, a saját tempódban elvégezheted. Az orvos minden esetben egyénileg dönt.',
}

export const steps = [
  {
    id: 'kerdoiv',
    title: 'Online orvosi kérdőív',
    time: 'kb. 10 perc',
    text: [
      'Kitöltesz egy részletes egészségügyi kérdőívet: testmagasság és -súly, korábbi betegségek, szedett gyógyszerek, terhesség-tervezés, étkezési szokások.',
      'Ez a biztonságod alapja – ezért kérjük, minden kérdésre őszintén válaszolj. Az adataid bizalmasak.',
    ],
  },
  {
    id: 'labor',
    title: 'Laboreredmények feltöltése',
    time: 'a meglévő leleteiddel pár perc',
    text: [
      'Feltöltöd a friss (jellemzően legfeljebb 3 hónapos) laboreredményeidet. Az orvos ebből látja többek között a vércukor-, a koleszterin-, a máj-, a vese- és a pajzsmirigy-értékeidet.',
      'Ha még nincs friss leleted, megmondjuk, mely vizsgálatokat érdemes elvégeztetned, és hol teheted meg.',
    ],
    list: {
      title: 'Jellemzően kért vizsgálatok (az orvos véglegesíti)',
      items: ['Vérkép', 'Éhgyomri vércukor, HbA1c', 'Összkoleszterin, LDL, HDL, triglicerid', 'Májenzimek (GOT, GPT, GGT)', 'Vesefunkció (kreatinin, eGFR)', 'Pajzsmirigy (TSH)'],
    },
  },
  {
    id: 'konzultacio',
    title: 'Konzultáció – ha szükséges vagy szeretnéd',
    time: 'kb. 20–30 perc',
    optional: true,
    text: [
      'Az orvos az adataid alapján egy személyes vagy videós beszélgetést javasolhat, vagy te is kérheted. Itt kérdezhetsz, és közösen átnézitek a céljaidat, a lehetséges kockázatokat és az alternatívákat.',
      'Ha az adatok egyértelműek, a konzultáció elmaradhat – de bármikor kérheted.',
    ],
  },
  {
    id: 'recept',
    title: 'Orvosi döntés és recept',
    time: 'az adatok beérkezése után',
    text: [
      'Az orvos eldönti, hogy a GLP-1 alapú kezelés számodra biztonságos és indokolt-e. Ha igen, elektronikus receptet ír, amelyet bármelyik magyarországi gyógyszertárban kiválthatsz.',
      'Ha a kezelés nem javasolt, azt is megmagyarázza, és megbeszélitek a következő lépéseket. A recept felírása nem garantált – és nem is cél.',
    ],
  },
  {
    id: 'kovetes',
    title: 'Rendszeres követés',
    time: 'a kezelés teljes ideje alatt',
    text: [
      'A kezelés elején és később is rendszeresen ellenőrizzük, hogyan haladsz: testsúly, mellékhatások, közérzet, laboreredmények. Szükség esetén az orvos módosítja az adagot, vagy leállítja a kezelést.',
      'A követés célja a biztonság és az, hogy a leadott súlyt hosszú távon meg is tartsd.',
    ],
  },
]

export const pricing = {
  eyebrow: 'Díjak',
  title: 'Átlátható díj, rejtett költség nélkül',
  priceHuf: 20000,
  priceUnit: 'Ft / páciens / alkalom',
  lead: 'Alkalmanként egy fix díjat fizetsz. Nincs előfizetés, nincs kötelezettség a folytatásra.',
  // TODO(tamas): pontosítani, mi számít „alkalomnak”. Jelenlegi feltételezés alább.
  whatIsASession: {
    title: 'Mi számít egy alkalomnak?',
    items: [
      'Az első orvosi értékelés (a kérdőív és a laboreredmények átnézése, szükség esetén a konzultációval együtt).',
      'Minden egyes követő ellenőrzés a kezelés során (személyes vagy videós).',
    ],
    note: 'A kérdőív kitöltése és a leletek feltöltése önmagában nem jár külön díjjal; a díj az orvos munkájára vonatkozik.',
  },
  drugCost: {
    title: 'A gyógyszer ára nem része a díjnak',
    text: 'A felírt gyógyszert a gyógyszertárban váltod ki, annak költségét a gyógyszertárban fizeted. Az ár a készítménytől és az adagtól függ, és testsúlykezelés esetén általában teljes áron fizetendő (nem társadalombiztosítási támogatott). A pontos, forrással ellátott adatokat a Klinikai információk oldalon találod.',
    link: { to: '/klinikai-informaciok', label: 'Gyógyszerárak és forrásaik' },
  },
  draftNote:
    'Vázlat: az „alkalom” pontos meghatározása és a díjszabás részletei az orvossal egyeztetendők.',
}

export const surveyPlaceholder = {
  title: 'Kérdőív',
  text: 'Az online kérdőív és a leletfeltöltés fejlesztés alatt áll. Hamarosan itt tudod megkezdeni.',
  button: 'Értesítést kérek (hamarosan)',
  draftNote: 'Placeholder: a kérdőív és a feltöltő űrlap a következő fázisban készül el.',
}

export const dataNotice = {
  title: 'Az adataid védelméről',
  text: 'A kérdőívben és a leletekben megadott egészségügyi adatok különleges személyes adatok. Titkosított kapcsolaton keresztül kezeljük őket, kizárólag az orvos és az ellátásban közreműködő munkatársak férnek hozzájuk, és csak a kezelésed céljára használjuk őket. Hozzájárulásodat bármikor visszavonhatod.',
  link: { to: '/adatkezeles', label: 'Teljes adatkezelési tájékoztató' },
}

export const faq = [
  {
    q: 'Biztosan kapok receptet?',
    a: 'Nem. Az orvos az adataid alapján dönt arról, hogy a kezelés számodra biztonságos és indokolt-e. Előfordulhat, hogy nem javasolja – ilyenkor megbeszélitek az alternatívákat.',
  },
  {
    q: 'Kell személyesen megjelennem?',
    a: 'A legtöbb lépés online elvégezhető. A konzultáció – ha az orvos szükségesnek látja vagy te kéred – személyesen vagy videón is lehetséges.',
  },
  {
    q: 'Mennyi ideig kell szedni?',
    a: 'Ez egyénenként változik. A GLP-1 alapú kezelés általában hosszú távú, és a leállítás után a leadott súly egy része visszatérhet. Az orvossal a kezdetektől beszéltek a hosszú távú tervről.',
  },
  {
    q: 'Mennyibe kerül összesen?',
    a: 'A szolgáltatásunk díja alkalmanként 20 000 Ft. A gyógyszert külön, a gyógyszertárban fizeted; ennek ára a készítménytől és az adagtól függ. Az árakról a Klinikai információk oldalon találsz tájékoztatást.',
  },
  {
    q: 'Terhes vagyok, vagy babát tervezek. Szóba jöhet a kezelés?',
    a: 'Terhesség és szoptatás alatt a kezelés nem alkalmazható, tervezett terhesség előtt pedig az előírás szerint le kell állítani. Ezt a kérdőívben külön jelezd, az orvos pedig részletesen megbeszéli veled.',
  },
]
