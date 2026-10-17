// Főoldal szövegei.

export const hero = {
  eyebrow: 'Orvosi háttérrel, érthetően',
  title: 'Tájékozódj nyugodtan a GLP-1 alapú kezelésekről',
  lead: 'A GLPMost segít megérteni, hogy a GLP-1 típusú gyógyszerek illenek-e hozzád – orvossal, átlátható lépésekben, nyomás nélkül.',
  primary: { to: '/folyamat', label: 'Megnézem a folyamatot' },
  secondary: { to: '/klinikai-informaciok', label: 'Klinikai információk' },
  note: 'Gyógyszert kizárólag orvos írhat fel. Az orvos dönt arról, hogy a kezelés számodra javasolt-e.',
}

export const what = {
  eyebrow: 'Röviden',
  title: 'Mi az a GLP-1?',
  paragraphs: [
    'A GLP-1 (glukagonszerű peptid-1) egy olyan hormon, amelyet a szervezeted étkezés után természetes módon termel. Jelzi az agynak, hogy jóllaktál, lassítja a gyomor ürülését, és segít a vércukorszint egyensúlyban tartásában.',
    'A GLP-1 alapú gyógyszerek ennek a hormonnak a hatását utánozzák, tartósabban. Eredetileg a 2-es típusú cukorbetegség kezelésére fejlesztették őket, később kiderült, hogy a testsúlyra is hatással vannak, így egyes készítményeket ma már a testsúlykezelésben is alkalmaznak.',
    'Fontos: ezek nem csodaszerek. Az életmódváltással – étkezés, mozgás, alvás – együtt a leghatékonyabbak, és minden kezeléshez orvosi felügyelet szükséges.',
  ],
  facts: [
    { title: 'Egy hormon jelét utánozza', text: 'A GLP-1 a saját bélhormonod; a gyógyszerek ennek a hatását utánozzák, sokkal tartósabban és erősebben, mint a természetes hormon.' },
    { title: 'Étvágy és jóllakottság', text: 'A legtöbben kevésbé éhesek és hamarabb jóllaknak a kezelés alatt – ez könnyítheti meg a szokások megváltoztatását.' },
    { title: 'Receptköteles', text: 'Csak orvosi vizsgálat és felírás után, folyamatos követéssel alkalmazható.' },
  ],
}

export const whoFor = {
  eyebrow: 'Kinek szólhat?',
  title: 'Kiknek érdemes az orvossal megbeszélni?',
  intro:
    'Az Európai Gyógyszerügynökség által jóváhagyott alkalmazási előírások szerint a testsúlykezelésre engedélyezett készítmények felnőtteknél, csökkentett kalóriabevitel és több mozgás mellett jönnek szóba. Az alábbi lista tájékoztató jellegű – a döntést az orvos hozza meg.',
  yes: [
    'A testtömegindexed (BMI) legalább 30 (elhízás).',
    'A BMI-d legalább 27, és van testsúllyal összefüggő társbetegséged, például prediabétesz, 2-es típusú cukorbetegség, magas vérnyomás, vérzsír-eltérés (pl. magas koleszterin), szív-érrendszeri betegség vagy alvási apnoé.',
    'Már próbálkoztál étrenddel és mozgással, de a leadott súlyt nehezen vagy nem tartod meg.',
    'Készen állsz arra, hogy a kezelés mellett az étkezésedet és a mozgásodat is fokozatosan átalakítsd.',
  ],
  noTitle: 'Kinek nem, vagy csak különleges óvatossággal?',
  no: [
    'Terhesség, szoptatás, vagy ha a közeljövőben babát tervezel.',
    '18 év alattiak – a szolgáltatás kizárólag felnőtteknek szól.',
    'Pajzsmirigy medulláris daganat vagy MEN2-szindróma a saját vagy családi kórtörténetedben – ilyenkor az orvos különösen körültekintően mérlegel (az amerikai előírás kizáró oknak tekinti, az európai nem).',
    'Korábbi hasnyálmirigy-gyulladás, súlyos emésztőrendszeri betegség (pl. gyomorbénulás) – óvatos mérlegelést igényel.',
    'Ha inzulint vagy más vércukorcsökkentőt szedsz, cukorbetegséghez társuló szembetegséged van, vagy a közeljövőben altatásos beavatkozásra készülsz – ezeket külön jelezd, az orvos mérlegeli.',
    'Evészavar (pl. anorexia, bulimia) – ilyenkor a kezelés nem javasolt, de van segítség.',
  ],
  noNote: 'A teljes lista hosszabb, ezért van szükség az orvosi kérdőívre és a laboreredményekre.',
  link: { to: '/elonyok', label: 'Előnyök és kockázatok részletesen' },
}

export const how = {
  eyebrow: 'A szolgáltatás',
  title: 'Hogyan működik?',
  intro: 'Négy egyszerű lépés, a saját tempódban, otthonról is.',
  steps: [
    { title: 'Orvosi kérdőív', text: 'Néhány perc alatt kitöltöd az egészségügyi kérdőívet. Őszintén válaszolj – ez a biztonságod alapja.' },
    { title: 'Laboreredmények', text: 'Feltöltöd a friss laborleleteidet. Ha még nincs, megmondjuk, milyen vizsgálatokat érdemes elvégeztetni.' },
    { title: 'Orvosi értékelés', text: 'Az orvos átnézi az adataidat, majd egy videós (vagy személyes) beszélgetésen tisztázza a kérdéseket – az első felírás előtt ez mindig része a folyamatnak. Az orvos dönt a felírásról.' },
    { title: 'Követés', text: 'A kezelés alatt rendszeres ellenőrzéssel követjük, hogyan haladsz és hogyan érzed magad.' },
  ],
  cta: { to: '/folyamat', label: 'A teljes folyamat' },
}

export const trust = {
  eyebrow: 'Miért bízhatsz bennünk?',
  title: 'Átláthatóan és felelősen',
  items: [
    { title: 'Orvos dönt, nem algoritmus', text: 'Minden esetet orvos értékel, és az dönt a kezelésről – vagy arról, hogy most nem javasolt.' },
    { title: 'Őszinte tájékoztatás', text: 'A mellékhatásokról, a kockázatokról és a korlátokról ugyanolyan nyíltan beszélünk, mint az előnyökről.' },
    { title: 'Forrásokkal', text: 'A klinikai adatok nyilvános tanulmányokból és hatósági forrásokból származnak, hivatkozással.' },
    { title: 'Védett adatok', text: 'Az egészségügyi adataidat orvosi titoktartás mellett, a GDPR és a magyar egészségügyi adatvédelmi törvény szerint kezeljük.' },
    { title: 'Átlátható díj', text: 'Alkalmanként egy fix díjat fizetsz – nincs rejtett költség és nincs előfizetés.' },
  ],
}

export const honesty = {
  title: 'Nem ígérünk csodát, de tisztán látsz majd.',
  text: 'A GLP-1 alapú kezelés nem mindenkinek való, és nem helyettesíti az életmódváltást. Ha az orvos úgy látja, hogy nem javasolt, azt is őszintén megmondja – és megbeszélitek a legjobb következő lépést.',
}

export const finalCta = {
  title: 'Szeretnéd tudni, szóba jöhet-e nálad?',
  text: 'Az orvosi kérdőív kitöltése nem kötelez semmire, és az orvos csak ezután dönt a folytatásról.', // TODO: a díjfizetés időpontját (kérdőív előtt/után) tisztázni
  button: { to: '/folyamat#kerdoiv', label: 'Kérdőív kitöltése' },
}

export const compare = {
  eyebrow: 'Két hatóanyag, röviden',
  title: 'Szemaglutid és tirzepatid: mit mutatnak a vizsgálatok?',
  lead: 'A testsúlykezelésre engedélyezett két legismertebb hatóanyag. Az alábbi számok nagy, kontrollált vizsgálatok átlagai – cukorbetegség nélküli, elhízott felnőttekről, életmódi tanácsadás mellett.',
  barLabels: { drug: 'Kezelés', placebo: 'Placebo' },
  compounds: [
    {
      id: 'semaglutid',
      name: 'Szemaglutid',
      kind: 'GLP-1 receptor agonista · heti 1 injekció',
      study: 'STEP 1 · 68 hét · 1 961 résztvevő',
      drugPct: -14.9,
      placeboPct: -2.4,
      highlights: [
        'A résztvevők fele legalább 15%-ot fogyott (placebo: 5%).',
        'SELECT vizsgálat: szív-érrendszeri betegségben, cukorbetegség nélkül 20%-kal kisebb eséllyel következett be infarktus, stroke vagy szív-érrendszeri halál.',
      ],
      costLabel: 'Gyógyszertári ár havonta',
    },
    {
      id: 'tirzepatid',
      name: 'Tirzepatid',
      kind: 'GIP + GLP-1 receptor agonista · heti 1 injekció',
      study: 'SURMOUNT-1 · 72 hét · 2 539 résztvevő · legmagasabb adag',
      drugPct: -20.9,
      placeboPct: -3.1,
      highlights: [
        'A résztvevők több mint fele legalább 20%-ot fogyott (placebo: 3%).',
        'SURMOUNT-5 közvetlen összehasonlítás: −20,2% a szemaglutid −13,7%-ával szemben (72 hét, nyílt vizsgálat).',
      ],
      costLabel: 'Gyógyszertári ár havonta',
    },
  ],
  priceFraming:
    'A szemaglutid a jelenlegi magyar gyógyszertári árakon kedvezőbb: havi költsége minden dózislépcsőn alacsonyabb, a magasabb adagoknál kevesebb mint fele a tirzepatidénak. Testsúlykezelésre egyik sem támogatott, mindkettőt teljes áron fizeted.',
  priceCaveat:
    'Az árak tájékoztatóak, patikánként eltérhetnek, és időnként változnak; egyes tirzepatid-árak még ellenőrzés alatt állnak. Az átlagos eredmény nem egyéni ígéret, és a két hatóanyag közül az orvos az egészségi állapotod alapján választ – az ár önmagában nem döntési szempont.',
  link: { to: '/klinikai-informaciok', label: 'Vizsgálatok, kockázatok és források a klinikai oldalon' },
  draftNote:
    'Ez a szakasz hatóanyagot és árat nevez meg a főoldalon. A jogi átvilágítás (docs/compliance.md 1.1) szerint ez a burkolt gyógyszerreklám kockázatát növeli – élesítés előtt ügyvédi jóváhagyás kell.',
}
