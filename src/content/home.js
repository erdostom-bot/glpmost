// Főoldal szövegei.

export const hero = {
  eyebrow: 'Orvosi háttérrel, érthetően',
  title: 'Tájékozódj nyugodtan a GLP-1 alapú kezelésekről',
  lead: 'A GLPMost segít megérteni, hogy a GLP-1 típusú gyógyszerek illenek-e hozzád – tapasztalt orvossal, átlátható lépésekben, nyomás nélkül.',
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
    { title: 'Természetes hormon', text: 'A szervezeted is termeli – a gyógyszerek ezt a jelzést erősítik fel.' },
    { title: 'Étvágy és jóllakottság', text: 'Kevésbé éhes, hamarabb jóllakott leszel, ami megkönnyítheti a változtatást.' },
    { title: 'Receptköteles', text: 'Csak orvosi vizsgálat és felírás után, folyamatos követéssel alkalmazható.' },
  ],
}

export const whoFor = {
  eyebrow: 'Kinek szólhat?',
  title: 'Kiknek érdemes az orvossal megbeszélni?',
  intro:
    'A hatósági előírások szerint testsúlykezelés céljára felnőtteknél, életmódi változtatások (csökkentett kalóriabevitel, mozgás) mellett jön szóba. Az alábbiak tájékoztató jellegűek – a döntést mindig az orvos hozza meg.',
  yes: [
    'A testtömegindexed (BMI) legalább 30 (elhízás).',
    'A BMI-d legalább 27, és van testsúllyal összefüggő társbetegséged, például magas vérnyomás, magas koleszterinszint, 2-es típusú cukorbetegség vagy alvási apnoé.',
    'Már próbálkoztál étrenddel és mozgással, de a leadott súlyt nehezen vagy nem tartod meg.',
    'Készen állsz arra, hogy a kezelés mellett az étkezésedet és a mozgásodat is fokozatosan átalakítsd.',
  ],
  noTitle: 'Kinek nem, vagy csak különleges óvatossággal?',
  no: [
    'Terhesség, szoptatás, vagy ha a közeljövőben babát tervezel.',
    'Pajzsmirigy medulláris daganat vagy MEN2-szindróma a személyes vagy családi kórtörténetedben.',
    'Hasnyálmirigy-gyulladás a kórtörténetedben, súlyos emésztőrendszeri betegség.',
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
    { title: 'Orvosi értékelés', text: 'Dr. Demeter Ágota átnézi az adataidat. Ha kell, egy személyes vagy videós beszélgetés is lehetséges. Az orvos dönt a felírásról.' },
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
    { title: 'Védett adatok', text: 'Az egészségügyi adataidat bizalmasan, a GDPR előírásai szerint kezeljük.' },
    { title: 'Átlátható díj', text: 'Alkalmanként egy fix díjat fizetsz – nincs rejtett költség, nincs előfizetési csapda.' },
  ],
}

export const honesty = {
  title: 'Nem ígérünk csodát, de tisztán látsz majd.',
  text: 'A GLP-1 alapú kezelés nem mindenkinek való, és nem helyettesíti az életmódváltást. Ha az orvos úgy látja, hogy nem javasolt, azt is őszintén megmondja – és megbeszélitek a legjobb következő lépést.',
}

export const finalCta = {
  title: 'Készen állsz az első lépésre?',
  text: 'Kezdd a kérdőívvel – nem kötelez semmire, és az orvos csak ezután dönt a folytatásról.',
  button: { to: '/folyamat#kerdoiv', label: 'Kérdőív kitöltése' },
}
