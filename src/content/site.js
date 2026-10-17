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

// Szolgáltatói adatok (impresszum) – élesítés előtt minden [mező] kitöltendő. Ekertv. 4. §, Fgytv. 17/A.
export const provider = {
  name: '[Szolgáltató neve]',
  seat: '[székhely]',
  mailingAddress: '[levelezési cím]',
  companyRegNo: '[cégjegyzékszám / nyilvántartási szám]',
  taxNo: '[adószám]',
  licenceNo: '[egészségügyi szolgáltató működési engedélyének száma]',
  licenceAuthority: '[kiadó hatóság – vármegyei kormányhivatal, népegészségügyi osztály]',
  doctorName: '[felelős orvos neve]',
  doctorSeal: '[pecsétszám]',
  doctorQualification: '[szakvizsga]',
  insurer: '[felelősségbiztosító]',
  hosting: '[tárhelyszolgáltató]',
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
    'A GLPMost a(z) [Szolgáltató neve] (működési engedély száma: [szám]; felelős orvos: [név], pecsétszám: [pecsétszám]) tájékoztató és telemedicina-felülete. Célunk, hogy érthetően és őszintén segítsünk eldönteni, szóba jöhet-e nálad a GLP-1 alapú kezelés.',
  medicalDisclaimer:
    'Az oldalon található tartalom tájékoztató jellegű, nem helyettesíti az orvosi vizsgálatot, diagnózist vagy kezelést. Gyógyszert kizárólag orvos írhat fel, a javallatot és az adagolást mindig az orvos állapítja meg. A GLPMost gyógyszert nem forgalmaz és nem értékesít; a felírt készítményt a gyógyszertárban váltod ki. A kockázatokról és a mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat, gyógyszerészedet!',
  emergency:
    'Sürgős panasz esetén ne várj a következő időpontra: erős, tartós, hátba sugárzó hasi fájdalom, csillapíthatatlan hányás, kiszáradás jelei, allergiás reakció (duzzanat, nehézlégzés), hirtelen látásromlás vagy látásvesztés esetén hívd a 104-et vagy a 112-t, illetve fordulj azonnal orvoshoz. Ezekről a tüneteidről minket is értesíts, de ne ránk várj.',
  links: [
    { to: '/impresszum', label: 'Impresszum' },
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
    'Az adatkezelő: [Szolgáltató neve, székhely, adószám, e-mail]. A kérdőívben és a leletekben egészségügyi adatokat adsz meg; ezek a GDPR szerinti különleges adatok, ezért különös gonddal, orvosi titoktartás mellett kezeljük őket.',
  sections: [
    {
      title: 'Mire használjuk az adataidat?',
      body: 'Kizárólag az orvosi ellátásodra: az orvos felméri az állapotodat, eldönti, javasolt-e a kezelés, és követi az eredményeidet. A felírás és a dokumentáció jogszabály alapján az Elektronikus Egészségügyi Szolgáltatási Térbe (EESZT) kerül. Marketingcélra nem használjuk, és nem adjuk el senkinek.',
    },
    {
      title: 'Jogalap',
      body: 'Egészségügyi adataidat az egészségügyi ellátás nyújtása céljából, a GDPR 9. cikk (2) bekezdés h) pontja és az egészségügyi és a hozzájuk kapcsolódó személyes adatok kezeléséről szóló 1997. évi XLVII. törvény (Eüak.) alapján, orvosi titoktartás mellett kezeljük. A kezelésen túli célokhoz (például hírlevél) külön, bármikor visszavonható hozzájárulást kérünk.',
    },
    {
      title: 'Ki fér hozzá?',
      body: 'Az adataidat a kezelőorvos és az ellátásban közvetlenül közreműködő, titoktartásra kötelezett munkatársak érhetik el.',
    },
    {
      title: 'Meddig őrizzük meg?',
      body: 'Az egészségügyi dokumentációt (kérdőív, leletek, orvosi feljegyzések, felírások) az Eüak. 30. §-a szerint az adatfelvételtől számított legalább 30 évig, a zárójelentést legalább 50 évig kell megőriznünk – ezt a törvény írja elő, ezért törlését nem kérheted. A nem egészségügyi adatokat (például hírlevél-feliratkozás) a hozzájárulás visszavonásáig kezeljük.',
    },
    {
      title: 'Jogaid',
      body: 'Kérhetsz tájékoztatást, hozzáférést, helyesbítést, korlátozást, adathordozhatóságot, és élhetsz a tiltakozás jogával; az orvosi dokumentáció törlésére a megőrzési kötelezettség miatt nincs lehetőség. Az orvos, nem automatizált döntés határoz a kezelésről. Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH; 1055 Budapest, Falk Miksa utca 9–11., ugyfelszolgalat@naih.hu, www.naih.hu) fordulhatsz, vagy bírósághoz is fordulhatsz.',
    },
    {
      title: 'Adatfeldolgozók és tárolás',
      body: 'Adatfeldolgozóink: [tárhely – ország], [videókonzultáció], [e-mail], [orvosi szoftver], [számlázó]. Egészségügyi adatot csak az Európai Unión belül tárolunk. A honlap statikus részét a GitHub Pages szolgálja ki, amely a látogatók IP-címét technikai naplózás céljából kezeli. Adatvédelmi kapcsolattartó: [név, e-mail].',
    },
  ],
}
