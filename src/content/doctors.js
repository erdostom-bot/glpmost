// Orvosaink oldal. Új orvos hozzáadásához másolj be egy újabb elemet a `doctors` listába.

export const pageHero = {
  eyebrow: 'Orvosaink',
  title: 'Akik melletted állnak',
  lead: 'Minden esetet orvos értékel és követ. Az orvos felelőssége az indikáció, az adagolás és a biztonság – és az, hogy időt szánjon rád.',
}

export const doctors = [
  {
    id: 'demeter-agota',
    name: 'Dr. Demeter Ágota',
    initials: 'DÁ',
    photo: null, // TODO: fotó (pl. '/glpmost/doctors/demeter-agota.jpg' a public/doctors mappából)
    role: 'Orvos', // TODO: szakirány / szakvizsga
    credentials: ['Orvos (a pontos végzettségek és szakvizsgák kitöltendők)'], // TODO
    registration: '', // TODO: pecsétszám
    languages: ['magyar'], // TODO: ellenőrizendő
    bio: [
      'Dr. Demeter Ágota a GLPMost orvosi vezetője. Az általa vezetett konzultációkon a hangsúly a személyre szabott mérlegelésen, a biztonságon és a hosszú távú egészségen van.',
      'Szemléletében a GLP-1 alapú kezelés az életmódváltást támogató eszköz, nem önálló megoldás.',
    ],
    focus: ['Testsúlykezelés', 'Anyagcsere-egészség', 'Hosszú távú követés'], // TODO: ellenőrizendő
    draftNote: 'Placeholder: a bemutatkozás, a szakirány, a végzettségek, a pecsétszám és a fotó az orvostól kérendő.',
  },
]

export const principles = {
  title: 'Mit vállalunk?',
  items: [
    { title: 'Egyéni mérlegelés', text: 'Nem sablon alapján döntünk: az egészségi állapotod, a céljaid és az élethelyzeted számít.' },
    { title: 'Őszinte beszélgetés', text: 'Elmondjuk az előnyöket és a kockázatokat is, és azt is, ha a kezelés nem javasolt.' },
    { title: 'Folyamatos követés', text: 'A felírás nem a végállomás: nyomon követjük, hogyan haladsz és hogyan érzed magad.' },
  ],
}

export const registrationNote = {
  label: 'Pecsétszám',
  missing: 'hamarosan feltöltjük',
  note: 'A pecsétszám az OKFŐ nyilvános működési nyilvántartásában ellenőrizhető: kereso.enkk.hu.',
}
