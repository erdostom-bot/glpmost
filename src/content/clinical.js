// Klinikai információk oldal keretszövegei.
// A hatóanyagok, árak és tanulmányok adatai a src/data/clinical.js fájlban vannak (forrásokkal).

export const pageHero = {
  eyebrow: 'Klinikai információk',
  title: 'A hatóanyagok és a mögöttük álló kutatások',
  lead: 'Ez az oldal szakmai tájékoztatást ad: milyen GLP-1 alapú hatóanyagok érhetők el Magyarországon, mit mutatnak a legfontosabb klinikai vizsgálatok, és mi a gyógyszerek jogi és anyagi háttere. Nem javallat és nem ajánlás – a kezelésről mindig az orvos dönt.',
}

export const legal = {
  title: 'Fontos tudnivalók',
  items: [
    'Az itt említett készítmények mindegyike vényköteles gyógyszer: kizárólag orvosi felírás alapján, gyógyszertárban váltható ki.',
    'Az oldalon szereplő márkanevek és árak tájékoztató, tényközlő jellegűek – nem reklám, és nem ösztönöznek egy adott készítmény használatára.',
    'A GLPMost gyógyszert nem forgalmaz és nem értékesít, gyártóval vagy forgalmazóval nem áll kapcsolatban. [Szerkesztői ellenőrzés: csak akkor igaz, ha tényleg így van.]',
    'Az árak és a támogatási státusz időről időre változnak. Az „ellenőrizendő” jelzésű adatok még nem megerősítettek.',
    'A kockázatokról és mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat vagy gyógyszerészedet.',
  ],
}

export const chart = {
  title: 'Átlagos testtömegváltozás a vizsgálatok végén',
  lead: 'Az elsődleges végpontnál mért átlagos testtömegváltozás a vizsgált legmagasabb adagnál, kezdőértékhez képest. Csak azok a vizsgálatok szerepelnek, amelyek százalékos értéket közölnek. A placebo-csoport is életmódi tanácsot kapott.',
  caution:
    'A számok különböző vizsgálatokból származnak (eltérő populáció, időtartam és adag), ezért a hatóanyagok közvetlenül nem hasonlíthatók össze. 2-es típusú cukorbetegségben a fogyás általában kisebb. A dulaglutid vizsgálatai kilogrammban közlik az eredményt és nem testsúlykezelésre szólnak, ezért nem szerepelnek az ábrán; adataik lentebb találhatók.',
  drugLabel: 'Kezelés',
  placeboLabel: 'Placebo',
  refLegend: 'Placebo / összehasonlító',
}

export const studiesSection = {
  title: 'A legfontosabb vizsgálatok',
  lead: 'Hatóanyagonként a testsúly és az egészség szempontjából leginkább releváns öt vizsgálat összefoglalója.',
}

export const pricesSection = {
  title: 'Magyarországi elérhetőség és árak',
  notApproved: 'Testsúlycsökkentésre nem engedélyezett – ebben a szolgáltatásban nem kerül felírásra.',
  lead: 'A készítmények forgalmazási és támogatási státusza, valamint a gyógyszertári árak tájékoztató jellegű adatok.',
  verified: 'forrással',
  unverified: 'ellenőrizendő',
}

export const disclaimerBottom =
  'A klinikai vizsgálatok eredményei átlagot mutatnak, az egyéni hatás eltérhet. Ez az oldal nem helyettesíti az orvosi tanácsadást.'
