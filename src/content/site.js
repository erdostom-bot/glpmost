// Az oldal egészét érintő szövegek: név, menü, lábléc, jogi tájékoztatók.
// Minden szöveg sima magyar szöveg – szerkeszthető kódolási tudás nélkül is.

export const site = {
  name: 'GLPMost',
  // Ha true, a vázlat jellegű (még tisztázandó) részeknél halvány szerkesztői megjegyzés látszik.
  // Élesítés előtt állítsd false-ra.
  showDraftNotes: true,
  tagline: 'Érthető tájékoztatás, orvosi háttérrel',
  contactEmail: 'info@glpmost.example', // TODO: valódi e-mail cím
  contactPhone: '+36 00 000 0000', // TODO: valódi telefonszám
}

export const nav = [
  { to: '/', label: 'Főoldal', end: true },
  { to: '/elonyok', label: 'Előnyök' },
  { to: '/folyamat', label: 'A folyamat' },
  { to: '/orvosaink', label: 'Orvosaink' },
  { to: '/klinikai-informaciok', label: 'Klinikai információk' },
]

export const headerCta = { to: '/folyamat#kerdoiv', label: 'Kérdőív' }

export const footer = {
  about:
    'A GLPMost egy orvosi háttérrel működő tájékoztató és egészségügyi szolgáltatási felület. Célunk, hogy érthetően és őszintén segítsünk eldönteni, hogy a GLP-1 alapú kezelés neked való-e.',
  medicalDisclaimer:
    'Az oldalon található tartalom tájékoztató jellegű, nem helyettesíti az orvosi vizsgálatot, diagnózist vagy kezelést. Gyógyszert kizárólag orvos írhat fel, az egyéni javallatot és adagolást mindig az orvos állapítja meg. A kockázatokról és mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat vagy gyógyszerészedet.',
  emergency:
    'Sürgős panasz (pl. erős, tartós hasi fájdalom, súlyos hányás, allergiás reakció) esetén ne várj a következő időpontra: hívd a 112-t vagy fordulj háziorvosodhoz.',
  links: [
    { to: '/adatkezeles', label: 'Adatkezelési tájékoztató' },
    { to: '/klinikai-informaciok', label: 'Források és klinikai adatok' },
  ],
  copyright: '© 2026 GLPMost. Minden jog fenntartva.',
}

// Adatkezelési tájékoztató – vázlat, jogi felülvizsgálat szükséges élesítés előtt.
export const privacy = {
  title: 'Adatkezelési tájékoztató',
  draft:
    'Vázlat: ez a szöveg a szolgáltatás tervezett működését írja le, jogi felülvizsgálat (adatkezelő megnevezése, jogalap, megőrzési idő, adatfeldolgozók) előtt nem végleges.',
  intro:
    'A kérdőív kitöltésekor és a laboreredmények feltöltésekor egészségügyi adatokat adsz meg. Ezek a személyes adatok különleges kategóriájába tartoznak, ezért különösen óvatosan kezeljük őket.',
  sections: [
    {
      title: 'Mire használjuk az adataidat?',
      body: 'Kizárólag arra, hogy az orvos felmérhesse az állapotodat, eldönthesse, javasolt-e a kezelés, és követhesse az eredményeidet. Marketingcélra, harmadik félnek való értékesítésre nem használjuk.',
    },
    {
      title: 'Jogalap',
      body: 'Egészségügyi adataidat a kifejezett hozzájárulásod (GDPR 9. cikk (2) a) pont) és az egészségügyi ellátás nyújtása alapján kezeljük. A hozzájárulást bármikor visszavonhatod.',
    },
    {
      title: 'Ki fér hozzá?',
      body: 'Az adataidat a kezelőorvos és az ellátásban közvetlenül közreműködő, titoktartásra kötelezett munkatársak érhetik el.',
    },
    {
      title: 'Meddig őrizzük meg?',
      body: 'Az egészségügyi dokumentáció megőrzésére vonatkozó jogszabályi határidőig, majd töröljük. A pontos időtartamot az éles adatkezelési tájékoztató tartalmazza.',
    },
    {
      title: 'Jogaid',
      body: 'Kérhetsz tájékoztatást, hozzáférést, helyesbítést, korlátozást, adathordozhatóságot, és élhetsz a tiltakozás jogával. Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhatsz.',
    },
  ],
}
