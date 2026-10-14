# GLPMost – megfelelőségi és orvosszakmai felülvizsgálat

Készült: 2026-10-14 (agent `glpmost-compliance`, branch `agent/glpmost-compliance`).
Tárgy: `src/content/*.js` (site, home, benefits, process, doctors, clinical) + `src/pages/Privacy.jsx`, `src/pages/Clinical.jsx` szerkezete. A `src/data/clinical.js` adatfájlt nem vizsgáltam (másik agent írja), de a rá vonatkozó szerkezeti kockázatokat jelzem.

Minden jogszabályi hivatkozás elérési dátuma 2026-10-14. A hatályos szövegeket a net.jogtar.hu / njt.hu oldalakról töltöttem le és idézem; ahol csak másodlagos forrásból (cikk, összefoglaló) dolgoztam, azt külön jelzem. **Ez nem jogi tanácsadás.** Több ponton kifejezetten magyar egészségügyi/reklámjogi ügyvéd bevonását javaslom (lásd a 4. fejezetet).

---

## 0. Vezetői összefoglaló

**Az oldal alapkoncepciója védhető**, mert a marketing oldalak hatóanyag- és márkanév nélkül, „GLP-1 alapú kezelés” szinten beszélnek, a konkrét készítmények és árak egy kifejezetten tényközlő oldalon vannak, és az összes szöveg ismételten hangsúlyozza, hogy az orvos dönt és a felírás nem garantált. Ez a vényköteles gyógyszerek lakossági reklámtilalmával (Gyftv. 17. § (4)) összeegyeztethető szerkezet.

**A fő maradék kockázat nem a szövegezés, hanem az üzleti modell maga:** egy fizetős szolgáltatás, amelynek bevétele egy meghatározott gyógyszercsoport felírásához kötődik, és amely a saját honlapján közli ezeknek a vényköteles gyógyszereknek a nevét, árát és hatékonysági adatait. Ezt a hatóság (fogyasztóvédelmi hatóság / GVH, OGYÉI) „burkolt reklámként” is minősítheti, függetlenül attól, hogy az oldal önmagát „nem reklámnak” nevezi. A kockázat kezelhető, de nem nullázható; a 1.1.4 pontban írt szerkezeti módosítások csökkentik.

**Élesítés előtti blokkolók (részletek a 4. fejezetben):**
1. Nincs megnevezve a tényleges egészségügyi szolgáltató (cég/praxis), működési engedély száma, felelős orvos szakképesítése és pecsétszáma. Enélkül a telemedicina szolgáltatás sem jogszerűen nem nyújtható, sem a honlap impresszuma nem teljes (Ekertv. 4. §).
2. Az adatkezelési tájékoztató jogalapja (GDPR 9. cikk (2) a) „visszavonható hozzájárulás”) és a megőrzési idő („majd töröljük”) **téves** egészségügyi ellátásra: a helyes jogalap a 9. cikk (2) h) + Eüak, a megőrzés legalább 30 év (zárójelentés 50 év). A kérdőív/leletfeltöltés backendje, az adatfeldolgozói szerződések, a DPIA és az EESZT-csatlakozás hiányzik.
3. A folyamatban („Ha az adatok egyértelműek, a konzultáció elmaradhat”) első felírás is történhet bármilyen élő (videós) kapcsolat és azonosítás nélkül. Ez orvosszakmailag és jogilag (betegazonosítás, Eütv. 106/A–106/B, 60/2003 ESzCsM 3. § (2b)) a leggyengébb pont; az első felíráshoz javaslom kötelezővé tenni a videós konzultációt.
4. Több állítás pontosítandó az EU alkalmazási előírásokhoz képest (terhesség előtti leállítás: szemaglutid ≥2 hónap, tirzepatid ≥1 hónap; tirzepatid + orális fogamzásgátló: 4 hét barrier módszer a kezdés és minden dózisemelés után; MTC/MEN2 az EU-ban nem ellenjavallat, hanem óvatosság; új figyelmeztetés: NAION / hirtelen látásvesztés; aspiráció altatásnál). Ha a klinikai adatfájlban Ozempic/Trulicity testsúlycsökkentő kontextusban szerepel, az off-label (44/2004 ESzCsM 2/A–2/C §), és nem jeleníthető meg a kezelés „opciójaként”.

---

## 1. Jogi keret

### 1.1 Gyógyszerek lakossági reklámja

#### 1.1.1 Mely jogszabályok?

A kérdésben felsorolt jelöltek közül a **helyes** alap:

- **Gyftv. – 2006. évi XCVIII. törvény** a biztonságos és gazdaságos gyógyszer- és gyógyászatisegédeszköz-ellátás, valamint a gyógyszerforgalmazás általános szabályairól. Ez tartalmazza a gyógyszerreklám szabályait (3. § 11. pont, 17–18/B. §). Hatályos szöveg: https://net.jogtar.hu/jogszabaly?docid=a0600098.tv (Hatály: 2026.I.1. –).
- **3/2009. (II. 25.) EüM rendelet** az emberi felhasználásra kerülő gyógyszer, illetve gyógyászati segédeszköz ismertetésére … és a gyógyszerrel, gyógyászati segédeszközzel kapcsolatos, fogyasztókkal szembeni kereskedelmi gyakorlatra vonatkozó részletes szabályokról. https://net.jogtar.hu/jogszabaly?docid=a0900003.eum (Hatály: 2025.I.1. –). 4. § (1) a): a kötelező figyelmeztető szöveg; 4. § (3): a reklámfelület legalább 10%-án (többnyelvű esetén 20%), jól olvashatóan, vízszintesen, magyarul.
- **Grt. – 2008. évi XLVIII. törvény** a gazdasági reklámtevékenység alapvető feltételeiről és egyes korlátairól. A Gyftv. a reklám fogalmát a Grt. 3. § d) pontjára utalással határozza meg. https://net.jogtar.hu/jogszabaly?docid=a0800048.tv
- **Fttv. – 2008. évi XLVII. törvény** a fogyasztókkal szembeni tisztességtelen kereskedelmi gyakorlat tilalmáról. https://net.jogtar.hu/jogszabaly?docid=a0800047.tv
- Háttér: **2001/83/EK irányelv** VIII. cím (86–100. cikk), amelyet a Gyftv. ültet át. (Nem ellenőriztem ma újra a szöveget; a 86. cikk (2) szerint nem reklám „az emberi egészségre vagy betegségekre vonatkozó tájékoztatás, feltéve, hogy az még közvetve sem utal gyógyszerre”.)

A kérdésben említett **2005. évi XCV. törvény (Gytv.)** az emberi alkalmazásra kerülő gyógyszerekről szól (forgalomba hozatal, gyártás, farmakovigilancia); reklámszabályt nem tartalmaz. Az **52/2005. (XI. 18.) EüM rendelet** a forgalomba hozatali engedélyezésről szól, szintén nem reklám. Az „1997. évi LVIII. törvény” (régi Grt.) hatályon kívül, a MOK 2012-es kódexe még erre hivatkozik.

#### 1.1.2 Mi tilos a lakosság felé? (Gyftv. 17. §, szó szerint)

> **17. § (4)** Tilos a gyógyszertárból kizárólag orvosi vényre kiadható vagy társadalombiztosítási támogatásba befogadott gyógyszerek, tápszerek, továbbá a társadalombiztosítási támogatással rendelhető gyógyászati segédeszközök reklámozása.

Kivételek csak: 17. § (4a) gyógyászati segédeszköz katalógus; 17. § (5) hatóság által engedélyezett védőoltási kampány. **Nincs** kivétel „egészségügyi szolgáltató honlapjára”, „árlistára” vagy „betegtájékoztatásra” a (4) bekezdésben – a kivétel a reklám *fogalmán* keresztül érvényesül (lásd 1.1.3).

A (4) bekezdés abszolút: nem a márkanév vagy hatóanyag említése tilos, hanem a *reklámozás*. A reklámozásnak nem minősülő közlés (tényközlés) megengedett. A vény nélküli gyógyszerek reklámjára vonatkozó 17. § (1)–(2) a mi esetünkben közvetlenül nem alkalmazandó, de a (2) bekezdés tilalmi listája jó mérce arra, mit tekint a jogalkotó elfogadhatatlannak egészségügyi kommunikációban:

> (2) … nem tartalmazhat olyan utalást vagy kifejezést, amely
> a) az orvosi vizsgálat, kezelés vagy műtéti beavatkozás szükségtelenségére vagy mellőzhetőségére hivatkozik …,
> b) a gyógyszer mellékhatások nélküli vagy biztos gyógyulást eredményező alkalmazhatóságának képzetét kelti,
> …
> d) a gyógyszer hatásosságát és biztonságos használatát kizárólag annak természetes eredetére vezeti vissza,
> e) kórtörténet leírásával vagy részletes ismertetésével téves öndiagnózist eredményezhet,
> f) … félelemérzetet keltve, vagy a valóságtól eltérő módon mutat be,
> g) tudósok, egészségügyi szakemberek vagy ismert személyiségek ajánlását tartalmazza,
> h) annak képzetét kelti, hogy a gyógyszer … alkalmazása nélkül az ember egészsége károsul.

További releváns tilalmak: 17. § (6) d) gyermekkorúaknak szóló reklám; 17. § (8) ajándék, minta, kupon, nyeremény, amely gyógyszer fogyasztására ösztönöz – tehát **a szolgáltatási díjból adott kedvezmény nem köthető gyógyszer kiváltásához** (pl. „ha kiváltod, a következő kontroll ingyen” tilos lenne).

Eljáró hatóság: 18/A. § (1) a fogyasztókkal szembeni kereskedelmi gyakorlat szabályainak megsértésekor az Fttv. szerinti hatóság (fogyasztóvédelmi hatóság = kormányhivatal; GVH, ha a verseny érdemi érintettsége fennáll); 18/A. § (2) a 17. § (4) és (6) megsértése esetén kifejezetten a **fogyasztóvédelmi hatóság**; 18/A. § (4) a) az **OGYÉI** (gyógyszerészeti államigazgatási szerv) is jogosult hatósági ellenőrzésre. A Gyftv. reklámszabályai az Fgytv. alkalmazásában fogyasztóvédelmi rendelkezések (18/A. § (5)).

#### 1.1.3 Mi *nem* reklám? (Gyftv. 3. § 11. pont, szó szerint)

> 11. reklám: a … 2008. évi XLVIII. törvény 3. §-ának d) pontja szerinti gazdasági reklám, azzal, hogy nem reklám
> a) a gyógyszer külön jogszabályban meghatározottak szerinti címkéje és betegtájékoztatója, …
> b) az olyan tényszerű informatív bejelentés vagy tájékoztató jellegű anyag, amely a gyógyszer … csomagolásának megváltoztatásáról vagy a gyógyszer kedvezőtlen mellékhatásáról tájékoztat, továbbá
> c) a kereskedelmi árlista, feltéve, hogy nem tartalmaz a gyógyszer hatásával … kapcsolatos állítást;

A Grt. 3. § d) szerinti gazdasági reklám lényege: olyan közlés, amely áru értékesítésének vagy igénybevételének *előmozdítására*, vagy a vállalkozás, tevékenység *népszerűsítésére* irányul. Tehát a döntő kérdés mindig a közlés **célja és hatása** (ösztönöz-e a gyógyszer használatára), nem az, hogy szerepel-e benne márkanév. A magyar jog nem tartalmaz kifejezett „betegségtudatosítási” (disease awareness) kivételt, de az irányelvi háttér és a hatósági gyakorlat ugyanezt a célzatossági tesztet alkalmazza.

Megjegyzés a **c) árlista-kivételhez**: ez *csak* akkor véd, ha az árlista nem tartalmaz hatás-állítást. A jelenlegi `/klinikai-informaciok` oldal ugyanazon a készítménykártyán mutatja az árat **és** (az oldal többi részén) a vizsgálati hatékonysági adatokat. Így az árlista-kivételre nem lehet biztonsággal hivatkozni; az oldal védhetősége a „tárgyilagos tudományos tájékoztatás, nem népszerűsítés” érven áll.

#### 1.1.4 A mi szerkezetünk értékelése

**Mellettünk szóló tények:**
- Marketing oldalak (/, /elonyok, /folyamat, /orvosaink) nem említenek hatóanyagot vagy márkanevet, csak a gyógyszercsoportot.
- A klinikai oldal keretszövege kimondja: vényköteles, nem reklám, árak tájékoztató jellegűek, „olvasd el a betegtájékoztatót”. Vizsgálati adatok forrással, placebo-összehasonlítással, a „közvetlenül nem hasonlíthatók össze” figyelmeztetéssel.
- Mindenhol: az orvos dönt, a felírás nem garantált, a GLPMost nem forgalmaz gyógyszert, a díj az orvosi munkára vonatkozik.
- Nincs ár-/kedvezménypromóció gyógyszerre, nincs ajánló (testimonial), nincs előtte/utána fotó.

**Maradék kockázatok (csökkenő súly szerint):**

1. **Üzleti érdekeltség.** A Gyftv. 18. § (1) szerint a reklámszabályok megsértéséért az felel, „akinek a kereskedelmi gyakorlattal érintett gyógyszer … értékesítése, eladásának ösztönzése közvetlenül érdekében áll”. A GLPMost nem adja el a gyógyszert, de a bevétele a felíráshoz kötődik; egy hatóság ezt „közvetlen érdeknek” tekintheti. Ugyanez az ETT Orvosetikai Kódex 9.5 pontja orvosi oldalról: az orvos által adott gyógyszer-információ „nem irányulhat egy adott gyógyszer használatának növelésére”.
2. **Egy oldalon ár + hatékonyság + márkanév.** Lásd 1.1.3. Javaslat: a készítménykártyán **ne** legyen hatásra vonatkozó állítás (csak javallat szövege az SmPC-ből, forgalmazási státusz, támogatás, ár + forrás); a vizsgálati eredmények külön szekcióban, hatóanyagonként, márkanév nélkül. Alternatíva: az árakat ne mi közöljük, hanem linkeljük az OGYÉI gyógyszeradatbázist / NEAK PUPHA-t és a gyógyszertári árfigyelőt – ez a legbiztonságosabb.
3. **„ellenőrzött” jelvény.** A `pricesSection.verified = 'ellenőrzött'` azt sugallhatja, hogy hatóságilag igazolt. Javaslat: „forrással” / „forrás: …, dátum”.
4. **Globális CTA.** A fejléc „Kérdőív” gombja a klinikai oldalon is látszik, így a hatóanyag–ár–eredmény tartalom közvetlenül a felírási folyamatba vezet. Javaslat: a klinikai oldalon a fejléc CTA-t elrejteni vagy „Vissza a tájékoztatóhoz”-ra cserélni; az oldal alján ne legyen „Kérdőív kitöltése” gomb.
5. **Fogyás mértéke a marketing oldalon.** Az `/elonyok` oldal „5–20 százalék” / „5–18 kg” számokat közöl. Az ÖRT Magyar Reklámetikai Kódex (2024) 14. cikkely 3.: „Testsúlycsökkentő vagy ilyen hatást ígérő termék reklámja nem utalhat a súlycsökkentés mértékére vagy ütemére.” Ez önszabályozás (nem jogszabály), és termékre, nem szolgáltatásra szól, de a GVH az Fttv.-eljárásokban hivatkozik rá. Javaslat: a konkrét százalékokat a klinikai oldalon hagyni (forrással), az előnyök oldalon minőségi megfogalmazás + placebo-kontextus (lásd 2.2).
6. **Márkanevek a URL-ben / címsorokban / meta tagekben.** Ha a klinikai oldal SEO-címei „Wegovy ára”, „Mounjaro rendelés” stb. lennének, az már népszerűsítés. Javaslat: a title/description tagek is „GLP-1 hatóanyagok – klinikai adatok” szintűek legyenek. (A jelenlegi `index.html`/router meta tageket nem ellenőriztem; a site agentnek szól.)
7. **Hirdetési platformok.** A Google Ads és Meta házirendje a vényköteles gyógyszerek nevére kulcsszavas hirdetést Magyarországon nem enged; a GLP-1 „fogyás” hirdetések szintén korlátozottak. Fizetett kampány csak a szolgáltatásra (orvosi konzultáció testsúlykezeléshez), gyógyszernév nélkül.

**Következtetés:** a struktúra védhető, de a 2–4. pontokat érdemes még élesítés előtt megcsinálni, és a modell egészéről (1. pont) egy reklámjogi ügyvédi véleményt beszerezni.

### 1.2 Egészségügyi szolgáltatás és orvosi tevékenység reklámja

Nincs külön „egészségügyi szolgáltatás reklámjáról” szóló törvény vagy Eütv.-szakasz (az Eütv. szövegében a „reklám” szó nem fordul elő). A vonatkozó keretek:

- **Grt. + Fttv.** általános szabályai (megtévesztés, agresszív gyakorlat, feketelista).
- **ETT Orvosetikai Kódex** (Egészségügyi Tudományos Tanács). 2023 óta a kamarai tagság nem kötelező, és a minden orvosra kiterjedő etikai szabályokat az ETT kódexe tartalmazza (jogalap: Eütv. – pontos szakasz ügyvéddel ellenőrizendő). A hatályos változat 2025-11-17-én lépett hatályba; hivatalos angol PDF: https://ett.okfo.gov.hu/wp-content/uploads/2026/01/Code_of_Medical_Ethics_2026.pdf ; magyar: https://ett.okfo.gov.hu/ és https://kormany.hu/dokumentumtar/orvosetikai-kodex . Releváns pontok (angol szövegből):
  - 2.13: a névtáblán, médiában, hirdetésben, névjegyen csak a tényleges szakképesítés, tudományos cím és aktuális beosztás használható.
  - 9.5: az orvos által adott gyógyszer-tájékoztatás nem irányulhat egy adott gyógyszer használatának növelésére. 9.6: az orvos az általa kezelt betegeknek gyógyszert nem reklámozhat. 9.7: ismeretlen hatású kezelés népszerűsítése etikai vétség. 9.8: ha az orvos olyan szolgáltatóhoz irányít, amelyben anyagi érdekeltsége van, ezt közölnie kell.
  - 10.2, 10.5, 10.7: tudományosan nem igazolt ismeret terjesztése / népszerűsítése tilos; nem kelthet gyógyulás-illúziót vagy megalapozatlan várakozást semmilyen nyilvános kommunikációban, közösségi médiát is beleértve.
- **MOK Etikai Kódex** (2012. január 1., MOK-tagokra; PDF: https://aok.pte.hu/docs/dekan/file/ekodex.pdf). II.8. (2): „Az orvos az általa kezelt betegek részére gyógyszert nem reklámozhat.” II.26. 26.1 (1): „Csak a tájékoztatás céljából közzétett, minősítés nélküli, tárgyszerű, a közérdeket is szolgáló hirdetés engedélyezett. Nem társadalmi érdek a hirdetések révén a vizsgálatok, kezelések szaporítása, a gyógyszerfogyasztás növelése.” (4): „Tilos a szolgáltatás igénybevételére ösztönző, anyagi érdeket szolgáló, a beteget megtévesztően befolyásoló hirdetés.” (7): etikátlan az összehasonlítás, a „kedvezőbb eredmény” látszata, a „kedvezőbb anyagi feltételek” ajánlása. (8): megengedett a rendelő helye, elérhetősége, rendelési ideje, szakmai tevékenysége, nyelvtudása. II.27. (2): a nyilvánosságnak adott információ legyen világos, tényszerű, elfogulatlan; nem kelthet alaptalan félelmet, sem megalapozatlan elvárást; (3) „a közlés burkoltan sem szolgálhat jogellenes reklámozási, betegtoborzási eszközként.” **„MOK Reklámszabályzat” külön dokumentumot nem találtam**; a reklámszabályok a kódex II.26–27. fejezetében vannak. Ha a doktornő MOK-tag, ez rá nézve is irányadó.
- **ÖRT Magyar Reklámetikai Kódex (2024)**, https://www.ort.hu/wp-content/uploads/2024/11/magyar_reklametikai_kodex_online_2024.pdf – 14. cikkely (testsúlycsökkentő termék: nem célozhat kiskorút, nem sugallhatja, hogy a soványság vonzó, nem utalhat a súlycsökkentés mértékére/ütemére, nem keltheti azt a benyomást, hogy a fogyókúrázók nem vallhatnak kudarcot); 15. cikkely 3–5. (életmódprogram reklámja ösztönözzön orvosi konzultációra, ne építsen félelemre, a tudományos szóhasználat ne sugalljon tudományos érvényességet). Önszabályozás, de a GVH gyakorlatban hivatkozik rá.

### 1.3 Fogyasztóvédelem (Fttv., Fgytv., Ekertv., 45/2014 Korm.)

- **Fttv. 3. §** általános tilalom; **6. §** megtévesztő gyakorlat, kifejezetten ideértve az áru egészségre gyakorolt hatására vonatkozó valótlan információt. **Melléklet (feketelista)**: 7. pont (hamis sürgetés, „csak most”), 17. pont (annak valótlan állítása, hogy az áru betegséget, működési zavart gyógyít), 34–35. pont (nem valós fogyasztói értékelések). Előtte/utána fotók, páciens-ajánlások nem tilosak önmagukban, de (a) valósnak, tipikusnak és bizonyíthatónak kell lenniük, (b) gyógyszerkontextusban a Gyftv. 17. § (2) g) szellemével ütköznek, (c) az ÖRT 14. cikkely 3. tiltja a mérték/ütem bemutatását. **Javaslat: ne legyenek.** Garanciaállítások („garantált fogyás”, „biztos eredmény”) tilosak; az oldal jelenleg nem tartalmaz ilyet.
- **Fgytv. – 1997. évi CLV. törvény** https://net.jogtar.hu/jogszabaly?docid=99700155.tv : **17/A. §** a vállalkozás köteles tájékoztatni a nevéről, székhelyéről, a panaszügyintézés helyéről és módjáról, a panaszok közlésére szolgáló levelezési és elektronikus címről; **17/A. § (1a)**: a honlapon világosan és könnyen elérhetően tájékoztatni kell a **békéltető testülethez** fordulás lehetőségéről, a testület székhelyével, telefonos és internetes elérhetőségével, levelezési címével. 17/A. § (3)–(6): szóbeli panasz azonnali vizsgálata, jegyzőkönyv; írásbeli panaszra 30 napon belül érdemi válasz. **18. §**: békéltető testületek (kereskedelmi és iparkamarák). 14. §: árfeltüntetés – a fogyasztói ár bruttó, egyértelmű.
- **Eütv. 29. §** (szó szerint): „(1) A beteg jogosult az egészségügyi ellátással kapcsolatban az egészségügyi szolgáltatónál, illetve fenntartójánál szóban, írásban panaszt tenni. (2) Az egészségügyi szolgáltató … köteles a panaszt kivizsgálni, és ennek eredményéről a beteget … legfeljebb harminc munkanapon belül írásban tájékoztatni. … a betegjogi … képviselőt foglalkoztató szervhez … forduljon. Erre a körülményre a szolgáltató köteles a beteg figyelmét felhívni.” A betegjogi képviselőket az **OKFŐ** (Országos Kórházi Főigazgatóság) foglalkoztatja; elérhetőséget közölni kell.
- **Ekertv. – 2001. évi CVIII. törvény 4. §** https://net.jogtar.hu/jogszabaly?docid=a0100108.tv : a szolgáltató köteles elektronikusan, közvetlenül és folyamatosan, könnyen hozzáférhetően közzétenni: nevét; székhelyét/telephelyét; elérhetőségét (különösen e-mail); ha tevékenysége nyilvántartásba vételhez kötött, a nyilvántartó bíróság/hatóság nevét és a nyilvántartási számot; **ha engedélyköteles, ezt a tényt, az engedélyező hatóság nevét, elérhetőségét és az engedély számát**; adószámát; ha szabályozott szakma, a szakmai kamara nevét és a vonatkozó szakmai szabályok elérhetőségét. Az egészségügyi szolgáltatás működési engedélyhez kötött, tehát ezek kötelezőek.
- **45/2014. (II. 26.) Korm. rendelet** (fogyasztói szerződések, elállási jog): a rendelet hatálya nem terjed ki az egészségügyi szolgáltatásra (a 2011/83/EU irányelv 3. cikk (3) b) átültetése; a pontos bekezdés ellenőrizendő: https://net.jogtar.hu/jogszabaly?docid=a1400045.kor ). Ettől függetlenül érdemes ÁSZF-ben rögzíteni a díjfizetés, a lemondás, a visszatérítés szabályait (mi történik, ha az orvos nem ír fel receptet – a díj akkor is jár, ez legyen explicit).
- **Áfa**: a humán-egészségügyi szolgáltatás tárgyi adómentes (Áfa tv. 85. § (1) b) – könyvelővel ellenőrizendő, hogy a konkrét szolgáltatási forma ide tartozik-e). A 20 000 Ft-ot „bruttó, áfamentes” jelöléssel érdemes feltüntetni.

### 1.4 Telemedicina, online felírás, működési engedély

**Jogforrások (ellenőrzött):**
- **Eütv. 106/A–106/C. §** („Arcképes azonosításra épülő telemedicina szolgáltatás”, https://net.jogtar.hu/jogszabaly?docid=99700154.tv ): 106/A. § (1) a szolgáltató a miniszter által meghatározott telemedicina szolgáltatásokat arcképes azonosítást biztosító videotechnológia útján *is* nyújthatja; (3) a szolgáltató akkor ajánlja fel a videós formát, „ha a betegadatok védelme, a beteg egyes tüneteinek vizsgálata vagy az ellátás jellege miatt egyéb telemedicina szolgáltatás útján az ellátás nem lenne kivitelezhető”; 106/B. § (3): ha az azonosítás sikertelen, videós telemedicinának nincs helye.
- **Eütv. 247. § (1) b)**: a Kormány felhatalmazása a telemedicina keretében nyújtott szolgáltatás megkezdésére, működési engedélyezésére, „a telemedicina tevékenységek meghatározásával, finanszírozásával, dokumentációjával, betegazonosításával kapcsolatos szabályok” megalkotására.
- **60/2003. (X. 20.) ESzCsM rendelet (szakmai minimumfeltételek) 3. § (1) g)** (szó szerint): „telemedicina útján nyújtott egészségügyi szolgáltatás esetén a szolgáltatás nyújtásához a szolgáltató részéről szükséges infokommunikációs eszközt, illetve az adott ellátáshoz szükséges orvostechnikai eszközöket, telemedicina ellátásra vonatkozó eljárásrendet és betegtájékoztatót.” A 33/2020. (IX. 16.) EMMI rendelettel beiktatott (2b) bekezdés: szélessávú internet, stabil adatátvitel, adatbiztonság, vírusvédelem, videó ha jogszabály előírja, **„a beteg egyértelmű azonosításáról a szolgáltatónak kell gondoskodnia”** (másodlagos forrásból: haziorvosinfo.hu, hgysz.hu). 3. § (1a): rendelőhelyiség és vizsgálóágy nem kötelező, ha a tevékenység jellege nem indokolja.
- **2020. évi LVIII. törvény 85. §** (átmeneti szabályok; https://net.jogtar.hu/jogszabaly?docid=a2000058.tv ): telemedicina fogalma; (1) „az egészségügyi szolgáltatás nyújtásának nem feltétele a beteg személyes jelenléte, ha az ellátás sajátosságai és orvosszakmai megítélése ezt lehetővé teszik”; (3) nyújtható szolgáltatások, köztük **f) „gyógyszer rendelése”** és g) kontroll/utógondozás; (5)–(6) dokumentálás, intézményi protokoll. **Bizonytalan**: a 85. § (12) szerint a szakasz a veszélyhelyzet megszűnését követő 90. napig alkalmazható; a 247. § (1) b) szerinti végleges kormányrendeletet nem találtam (a 96/2003 Korm. rendelet szövegében a „telemedicina” szó nem fordul elő). **Ügyvéddel tisztázandó, hogy 2026 októberében pontosan mi a telemedicina keretében történő gyógyszerrendelés hatályos jogalapja.** A gyakorlatban a magánszolgáltatók működnek telemedicinával, a NEAK is finanszíroz telemedicina kódokat (9/2012 NEFMI r. 6. melléklet), de a jogalap-kérdést le kell zárni.
- **96/2003. (VII. 15.) Korm. rendelet** (működési engedély; https://net.jogtar.hu/jogszabaly?docid=a0300096.kor ): egészségügyi szolgáltatás csak működési engedéllyel; felelősségbiztosítás kötelező; telephely nélküli szolgáltató esetén a székhely szerinti **járási hivatal** (népegészségügyi osztály) ad engedélyt (7. §); 8. § kérelem tartalma (szakma, ellátási forma, szakmai program, személyzet); **14. § (1)**: minden, az engedély feltételeit érintő változást 8 napon belül be kell jelenteni. A szolgáltatásnak a működési engedélyben szereplő **szakmára** (pl. belgyógyászat / endokrinológia / diabetológia / általános orvoslás – a doktornő szakvizsgájától függ) és **ellátási formára** kell illeszkednie; a telemedicina mint ellátási forma / tevékenység felvétele a kormányhivatallal egyeztetendő.
- **Eütv. 110. §**: egészségügyi tevékenységet önállóan csak a **működési nyilvántartásba** bejegyzett, érvényes továbbképzési kötelezettségét teljesített orvos végezhet. Orvosoknál az alapnyilvántartási szám = működési nyilvántartási szám = **pecsétszám**; nyilvánosan ellenőrizhető: https://kereso.enkk.hu/ (OKFŐ).
- **44/2004. (IV. 28.) ESzCsM rendelet** (gyógyszerrendelés; https://net.jogtar.hu/jogszabaly?docid=a0400044.esc ): 2. § minden orvos rendelhet (egyes „SZ”/„J” jelzésű gyógyszereknél szakorvosi feltétel – a GLP-1 készítmények nem támogatott, testsúlykezelési felírásánál ilyen korlátot nem ismerek, ellenőrizendő a konkrét készítmény OGYÉI adatlapján); **3. § (1)**: csak forgalomba hozatali engedéllyel rendelkező gyógyszer, az engedélyezett javallatban; **2/A–2/C. §**: javallaton túli (off-label) rendelés csak hatósági (NNGYK) engedéllyel, írásos beteg-beleegyezéssel; 7. § (3) h): e-vényen az „off label” jelölés; **11. §**: egy vényre legfeljebb 30 napi adag, krónikus (≥3 hónap) kezelésnél legfeljebb 3 hónap; 11/B. §: felírási igazolás kérésre. A rendelet nem írja elő kifejezetten a felírás előtti fizikális vizsgálatot, de a 11. § (1) a mennyiséget „a beteg szakszerű gyógykezeléséhez szükséges legközelebbi orvosi vizsgálatig” köti, és a felírás szakmai felelőssége az orvosé.
- **EESZT**: az Eüak 35/B. § szerint a működési engedéllyel rendelkező szolgáltató csatlakozásra kötelezett; e-recept csak EESZT-n keresztül írható. Ez azt jelenti, hogy a szolgáltatónak EESZT-csatlakozással és EESZT-képes orvosi szoftverrel kell rendelkeznie **élesítés előtt**.

**Következmények a GLPMost-ra:**
1. „GLPMost” márkanév mögött meg kell nevezni a tényleges, működési engedéllyel rendelkező szolgáltatót (a doktornő praxisa / egy Kft.), amelynek engedélye lefedi a tevékenységet és a telemedicina ellátási formát.
2. Első felírás élő kapcsolat nélkül („Ha az adatok egyértelműek, a konzultáció elmaradhat”) jogilag nem kifejezetten tilos, de (a) a betegazonosítás követelményét nehéz teljesíteni, (b) az Eütv. 106/A. § (3) logikája szerint, ha a tünetek vizsgálata videó nélkül nem kivitelezhető, videó kell, (c) műhibaperben és hatósági ellenőrzésnél a leggyengébb pont. **Javaslat: első felírás csak videós (arcképes azonosítású) konzultáció után; kontrollok lehetnek aszinkronok.**
3. Kötelező belső dokumentumok: telemedicina **eljárásrend** és **betegtájékoztató** (60/2003 3. § (1) g)), betegazonosítási protokoll, dokumentációs rend (EESZT-be feltöltés), sürgősségi eszkaláció.
4. **Ozempic (szemaglutid 0,25–2 mg, csak 2-es típusú cukorbetegség) és Trulicity (dulaglutid, csak T2DM; EU SmPC 4.1 ellenőrizve) testsúlycsökkentésre off-label**: betegenkénti NNGYK-engedély + írásos beleegyezés nélkül nem írható fel. A klinikai oldalon ezek legfeljebb „nem testsúlycsökkentési javallatú” jelöléssel, a szolgáltatás kereteként nem.
5. Hiányzó készlet esetére (az elmúlt években ismétlődő szemaglutid-hiány) a „bármelyik gyógyszertárban kiválthatod” állítást árnyalni kell.

### 1.5 Adatvédelem (GDPR, Infotv., Eüak)

- **Jogalap**: egészségügyi ellátás nyújtásához az egészségügyi adatok kezelésének jogalapja **GDPR 9. cikk (2) h)** (egészségügyi ellátás, orvos-beteg kapcsolat) + 6. cikk (1) c)/e) (jogi kötelezettség/közérdek, Eüak), a 9. cikk (3) szerinti titoktartási kötelezettség alatt. **Eüak 4. § (1)** rögzíti a célokat; **Eüak 12. § (2)** (szó szerint): „ha az érintett önként fordul az egészségügyi ellátóhálózathoz, a gyógykezeléssel összefüggő egészségügyi és személyazonosító adatainak kezelésére szolgáló hozzájárulását – ellenkező nyilatkozat hiányában – megadottnak kell tekinteni, és erről az érintettet … tájékoztatni kell.” A **9. cikk (2) a) kifejezett hozzájárulás** csak a kezelésen *túli* célokra (pl. hírlevél, kutatás, anonimizált statisztika, marketing) megfelelő jogalap; **az orvosi dokumentáció kezelése nem „visszavonható hozzájáruláson” alapul**, mert a megőrzés jogszabályi kötelezettség. A jelenlegi vázlat ezt fordítva írja → javítandó (2.1).
- **Megőrzés**: **Eüak 30. § (1)** (szó szerint): „Az egészségügyi dokumentációt – a képalkotó diagnosztikai eljárással készült felvételek, az arról készített leletek, valamint a (7) bekezdés kivételével – az adatfelvételtől számított legalább 30 évig, a zárójelentést legalább 50 évig kell megőrizni.” (2): képalkotó felvétel 10 év, lelet 30 év. A feltöltött laborleletek, a kérdőív, a konzultációs jegyzet és a felírás mind egészségügyi dokumentáció → **30 év**. „Majd töröljük” helyett ezt kell írni.
- **DPIA (hatásvizsgálat)**: NAIH lista (https://www.naih.hu/hatasvizsgalati-lista ) **22. pont**: „Egészségügyi adatokra vonatkozó adatkezelések. Nagy számban kezelt adatok tekintetében a kórházak, egészségügyi ellátó intézmények, magán-egészségügyi szolgáltatók … által kezelt különleges adatok vonatkozásában.” A **17. pont** kivétele (egy adott szakorvos betegei) egy skálázásra tervezett online platformra nehezen alkalmazható; az új technológia (online kérdőív + feltöltés + videó) és a sérülékeny célcsoport (evészavar-kockázat) miatt **DPIA elkészítését élesítés előtt javaslom** (GDPR 35. cikk). Ha a DPIA magas maradék kockázatot mutat, NAIH előzetes konzultáció (36. cikk).
- **DPO**: GDPR 37. cikk (1) c) – fő tevékenységként különleges adatok *nagymértékű* kezelése. Egy orvos praxisa a (91) preambulumbekezdés szerint nem nagymértékű; a platform növekedésével ez változhat. Induláskor nem kötelező, de egy adatvédelmi kapcsolattartó megnevezése és évenkénti felülvizsgálat ajánlott. (Az Infotv. 25/L. § az adatvédelmi tisztviselő magyar szabálya – ellenőrizendő, hogy a konkrét szolgáltatóra közfeladat miatt nem kötelező-e.)
- **Adatfeldolgozók** (28. cikk): tárhely/backend a kérdőívhez és leletfeltöltéshez, videóplatform, e-mail, EESZT-képes medikai szoftver, számlázó, esetleg fizetési szolgáltató. Mindegyikkel adatfeldolgozói szerződés; egészségügyi adat **EU-n belüli** tárhelyen; e-mailben leletet ne fogadjunk (titkosított feltöltő).
- **GitHub Pages**: a statikus oldal GitHub (USA) infrastruktúrán fut. A GitHub az EU–USA Data Privacy Framework szerint tanúsított és DPA-t ad (https://github.com/customer-terms/github-data-protection-agreement ), de **a Pages csak a statikus tartalmat szolgálhatja ki; a kérdőív és a leletfeltöltés backendje nem lehet itt**, és az oldal látogatói IP-címének naplózását (GitHub) az adatkezelési tájékoztatóban említeni kell. Hosszabb távon EU-s hosting (vagy legalább az app-rész EU-ban).
- **Sütik / analitika**: Ekertv. 13/A. § + ePrivacy: nem szükséges sütihez előzetes hozzájárulás. Javaslat: induláskor **semmilyen** third-party analitika (vagy süti nélküli, EU-s, aggregált megoldás), így nem kell sütibanner; ha Google Analytics / Meta Pixel kerülne fel, hozzájárulás-kezelő kötelező, és egészségügyi témájú oldalon a Pixel különösen kockázatos (NAIH és EU-hatósági bírságok precedensei).
- **Hírlevél / „Értesítést kérek”**: Grt. 6. § + Ekertv. 14. §: előzetes, egyértelmű hozzájárulás, leiratkozási lehetőség; az e-mail cím önmagában nem egészségügyi adat, de a „GLP-1 iránt érdeklődik” kontextus azzá teheti → külön, tömör hozzájárulási szöveg (3.5).
- **Életkor**: a szolgáltatás **18+**. (A Wegovy és Saxenda EU-javallata 12 éves kortól is létezik, de serdülő kezelése gyermekgyógyász/szakellátás és törvényes képviselő bevonása nélkül telemedicinában nem reális.) A kérdőív első kérdése legyen a születési dátum; 18 alatt a folyamat álljon meg egy tájékoztatással. Marketing nem célozhat kiskorút (Gyftv. 17. § (6) d), ÖRT 14. cikkely 1.).

### 1.6 Orvosszakmai referencia (EU SmPC-k, letöltve és ellenőrizve 2026-10-14)

| Tény | Wegovy (szemaglutid 2,4 mg) | Saxenda (liraglutid 3 mg) | Mounjaro (tirzepatid) | Trulicity (dulaglutid) |
|---|---|---|---|---|
| Testsúly-javallat | BMI ≥30, vagy ≥27–<30 + ≥1 társbetegség (dysglykaemia, hipertónia, dyslipidaemia, OSA, CV-betegség); 12+ serdülők is | ugyanez; 12+ serdülők; **3,0 mg-on 12 hét után <5% fogyásnál le kell állítani** | ugyanez (felnőtt); T2DM 10 éves kortól | **nincs** – csak T2DM |
| 4.3 ellenjavallat | csak túlérzékenység | csak túlérzékenység | csak túlérzékenység | – |
| MTC / MEN2 | **nem ellenjavallat az EU-ban** (az USA-ban az); 5.3: rágcsáló C-sejt tumor, „the relevance for humans is considered to be low, but cannot be completely excluded” | 4.4: pajzsmirigybetegségnél óvatosság; 5.3 ugyanaz | 5.3: C-sejt tumor rágcsálóban, „human relevance … unknown” | hasonló |
| Terhesség | leállítás **legalább 2 hónappal** a tervezett terhesség előtt; fogamzásgátlás javasolt | terhesség tervezésekor/bekövetkeztekor leállítani (nincs külön hónapszám) | leállítás **legalább 1 hónappal** a tervezett terhesség előtt | – |
| Orális fogamzásgátló | „not anticipated to decrease the effectiveness” | – | **„switch to a non-oral contraceptive method or add a barrier method … for 4 weeks after initiation and for 4 weeks after each dose escalation”** (korábbi SmPC-szöveg, EMA/TGA; a jelenlegi EU-szöveg 4.5 szerint egyszeri adagnál „not considered clinically relevant”, de a 4 hetes óvintézkedést a betegtájékoztató és a hatóságok továbbra is közlik – az orvos döntse el, melyiket kommunikáljuk, javaslom az óvatosabbat) | – |
| Fő eredmény | STEP 1, 68 hét: **−14,9% vs −2,4%** (placebo) | SCALE, 56 hét: **−8,0% vs −2,6%** | SURMOUNT-1, 72 hét: **−16,0 / −21,4 / −22,5%** (5/10/15 mg) vs −2,4% | T2DM-ben kb. 2–3 kg |
| Visszahízás | STEP 1 kiterjesztés: 52 hét kezelés nélkül mindkét csoportban nőtt a testsúly (publikáció: a leadott súly kb. kétharmada visszajött) | SCALE: a 12 hetes szer nélküli időszakban visszahízás | SURMOUNT-4: placebóra váltás után „substantial regain”; folytatva további fogyás | – |
| Testösszetétel | DEXA: a zsírtömeg nagyobb arányban csökkent, mint a sovány testtömeg | – | ugyanez | – |
| Kardiovaszkuláris | SELECT (17 604 beteg, BMI ≥27 + meglévő CV-betegség, cukorbetegség nélkül, medián 3,5 év): MACE **6,5% vs 8,0%**, HR 0,80 (20% relatív kockázatcsökkenés) | – | – | REWIND (T2DM) |
| Új/fontos 4.4 figyelmeztetések | aspiráció altatásnál; dehidráció/veseműködés; akut pancreatitis (megerősített esetben nem indítható újra); **NAION – hirtelen látásvesztésnél azonnali szemészet, leállítás**; hypoglykaemia inzulin/SU mellett; diabéteszes retinopathia T2DM-ben; nem kombinálható más GLP-1-agonistával | pancreatitis, epehólyag, pajzsmirigy, pulzusszám-emelkedés, dehidráció, hypoglykaemia | hasonló; súlyos GI betegség (gastroparesis) – nem vizsgált | – |

Források: Wegovy EPAR https://www.ema.europa.eu/en/documents/product-information/wegovy-epar-product-information_en.pdf ; Saxenda https://www.ema.europa.eu/en/documents/product-information/saxenda-epar-product-information_en.pdf ; Mounjaro https://www.ema.europa.eu/en/documents/product-information/mounjaro-epar-product-information_en.pdf ; Trulicity https://www.ema.europa.eu/en/documents/product-information/trulicity-epar-product-information_en.pdf ; TGA a tirzepatid–fogamzásgátló tanácsról https://www.tga.gov.au/news/safety-updates/updated-contraception-advice-mounjaro-tirzepatide .

Magyar forgalmazás/ár: a weben talált árak (Wegovy kb. 45–150 ezer Ft/hó, Mounjaro magasabb dózison 150–190 ezer Ft) **blogforrásokból** származnak, nem hivatkozhatók. Hiteles forrás: OGYÉI gyógyszeradatbázis (forgalomban van-e, vényköteles-e), NEAK PUPHA (támogatás), gyógyszertári árfigyelők; a testsúlycsökkentő javallatban NEAK-támogatás nincs (a szöveg állítása helyes).

---

## 2. Szövegek soronkénti felülvizsgálata

Jelölés: **[B]** blokkoló, **[S]** javítandó, **[N]** finomítás. A javasolt szövegek tegeződnek, az oldal hangjához illeszkednek.

### 2.1 `site.js`

| # | Jelenlegi szöveg | Probléma | Javasolt szöveg |
|---|---|---|---|
| 1 | `site.contactEmail/contactPhone` = placeholder | [B] Ekertv. 4. § kötelező elérhetőség; Fgytv. 17/A panaszcsatorna | Valódi e-mail + telefon; külön „panasz@…” cím opcionális. |
| 2 | `footer.about`: „A GLPMost egy orvosi háttérrel működő tájékoztató és egészségügyi szolgáltatási felület.” | [B] A szolgáltatást nem „felület” nyújtja, hanem egy engedélyes szolgáltató; a márkanév mögé oda kell írni. | „A GLPMost a(z) **[Szolgáltató neve]** (működési engedély száma: **[…]**, felelős orvos: Dr. Demeter Ágota, pecsétszám **[…]**) tájékoztató és telemedicina-felülete. Célunk, hogy érthetően és őszintén segítsünk eldönteni, a GLP-1 alapú kezelés szóba jöhet-e nálad.” |
| 3 | `footer.medicalDisclaimer` | [N] Jó. Kiegészítés: gyógyszert nem forgalmazunk. | Meglévő + „A GLPMost gyógyszert nem forgalmaz és nem értékesít; a felírt készítményt a gyógyszertárban váltod ki.” |
| 4 | `footer.emergency`: „…hívd a 112-t vagy fordulj háziorvosodhoz.” | [S] Hiányzik a mentők száma (104) és két, a GLP-1-re jellemző vészhelyzet (pancreatitis, hirtelen látásvesztés). | „Sürgős panasz esetén ne várj a következő időpontra: erős, tartós, hátba sugárzó hasi fájdalom, csillapíthatatlan hányás, kiszáradás jelei, allergiás reakció (duzzanat, nehézlégzés), hirtelen látásromlás vagy látásvesztés esetén hívd a **104**-et vagy a **112**-t, illetve fordulj azonnal orvoshoz. Ezekről a tüneteidről minket is értesíts, de ne ránk várj.” |
| 5 | `privacy.draft` | – | Élesítéskor törölni; `showDraftNotes=false`. |
| 6 | `privacy.intro`: „…egészségügyi adatokat adsz meg. Ezek a személyes adatok különleges kategóriájába tartoznak…” | [N] OK. Hiányzik az adatkezelő. | „Az adatkezelő: **[Szolgáltató neve, székhely, adószám, e-mail]**. A kérdőívben és a leletekben egészségügyi adatokat adsz meg; ezek a GDPR szerinti különleges adatok, ezért különös gonddal, orvosi titoktartás mellett kezeljük őket.” |
| 7 | `privacy.sections[0]` „Mire használjuk”: „Marketingcélra, harmadik félnek való értékesítésre nem használjuk.” | [S] Az EESZT-feltöltés jogszabályi kötelezettség, és a NEAK/hatóság adatigénylése is lehetséges – a „harmadik félnek nem” félrevezető. | „Kizárólag az orvosi ellátásodra: az orvos felméri az állapotodat, eldönti, javasolt-e a kezelés, és követi az eredményeidet. A felírás és a dokumentáció jogszabály alapján az Elektronikus Egészségügyi Szolgáltatási Térbe (EESZT) kerül. Marketingcélra nem használjuk, és nem adjuk el senkinek.” |
| 8 | `privacy.sections[1]` „Jogalap”: „…a kifejezett hozzájárulásod (GDPR 9. cikk (2) a) pont) és az egészségügyi ellátás nyújtása alapján kezeljük. A hozzájárulást bármikor visszavonhatod.” | **[B] Jogilag téves.** Az ellátási adatkezelés jogalapja a 9. cikk (2) h) + Eüak; a megőrzés nem vonható vissza. | „Egészségügyi adataidat az egészségügyi ellátás nyújtása céljából, a GDPR 9. cikk (2) bekezdés h) pontja és az egészségügyi és a hozzájuk kapcsolódó személyes adatok kezeléséről szóló 1997. évi XLVII. törvény (Eüak.) alapján, orvosi titoktartás mellett kezeljük. Azzal, hogy önként hozzánk fordulsz, az Eüak. 12. § (2) bekezdése szerint a gyógykezeléssel összefüggő adatkezeléshez hozzájárulsz – erről itt tájékoztatunk. A kezelésen túli célokhoz (pl. hírlevél) külön, bármikor visszavonható hozzájárulást kérünk.” |
| 9 | `privacy.sections[3]` „Meddig őrizzük meg?”: „…jogszabályi határidőig, majd töröljük.” | **[B]** Az Eüak 30. § (1) konkrét: 30 év / 50 év. | „Az egészségügyi dokumentációt (kérdőív, leletek, orvosi feljegyzések, felírások) az Eüak. 30. §-a szerint az adatfelvételtől számított legalább **30 évig**, a zárójelentést legalább **50 évig** kell megőriznünk – ezt a törvény írja elő, ezért törlését nem kérheted. A nem egészségügyi adatokat (pl. hírlevél-feliratkozás) a hozzájárulás visszavonásáig kezeljük.” |
| 10 | `privacy.sections[4]` „Jogaid” | [S] Hiányzik: bírósághoz fordulás, NAIH elérhetőség, adatfeldolgozók, hosting/ország, sütik, kapcsolattartó. | Bővíteni: „Adatfeldolgozóink: **[tárhely – ország], [videó], [e-mail], [medikai szoftver], [számlázó]**. Egészségügyi adatot csak az Európai Unión belül tárolunk. A honlap statikus részét a GitHub Pages (GitHub, Inc., USA, EU–USA adatvédelmi keretrendszer szerint tanúsított) szolgálja ki, amely a látogatók IP-címét technikai naplózás céljából kezeli. Panasz: Nemzeti Adatvédelmi és Információszabadság Hatóság, 1055 Budapest, Falk Miksa utca 9–11., ugyfelszolgalat@naih.hu, +36 1 391 1400, www.naih.hu; valamint bírósághoz fordulhatsz. Adatvédelmi kapcsolattartó: **[név, e-mail]**.” |

### 2.2 `home.js`

| # | Jelenlegi | Probléma | Javaslat |
|---|---|---|---|
| 1 | `hero.title` „Tájékozódj nyugodtan a GLP-1 alapú kezelésekről”, `hero.lead` | [N] Rendben. „tapasztalt orvossal” – csak ha igazolható (szakvizsga, évek). | Marad; „tapasztalt” → „szakorvossal” ha van szakvizsga, különben „orvossal”. |
| 2 | `what.paragraphs[2]` „Fontos: ezek nem csodaszerek…” | OK, kifejezetten jó. | – |
| 3 | `what.facts[0]` „Természetes hormon – A szervezeted is termeli – a gyógyszerek ezt a jelzést erősítik fel.” | [S] A „természetes” keretezés a Gyftv. 17. § (2) d) szellemével ütközik (biztonság sugallása természetes eredettel). | „Egy hormon jelét utánozza – A GLP-1 a saját bélhormonod; a gyógyszerek ennek a hatását utánozzák, sokkal tartósabban és erősebben, mint a természetes hormon.” |
| 4 | `what.facts[1]` „Kevésbé éhes, hamarabb jóllakott leszel, ami megkönnyítheti a változtatást.” | [S] Második személyű, ígérő hatás-állítás. | „A legtöbben kevésbé éhesek és hamarabb jóllaknak a kezelés alatt – ez könnyítheti meg a szokások megváltoztatását.” |
| 5 | `whoFor.intro` „A hatósági előírások szerint…” | [S] Pontatlan: az EU-s alkalmazási előírásokról (SmPC) van szó. | „Az Európai Gyógyszerügynökség által jóváhagyott alkalmazási előírások szerint a testsúlykezelésre engedélyezett készítmények felnőtteknél, csökkentett kalóriabevitel és több mozgás mellett jönnek szóba. Az alábbi lista tájékoztató jellegű – a döntést az orvos hozza meg.” |
| 6 | `whoFor.yes[0..1]` BMI ≥30 / ≥27 + társbetegség | Pontos (SmPC 4.1). [N] Társbetegségek: SmPC példái: prediabétesz/2-es típusú cukorbetegség, magas vérnyomás, vérzsír-eltérés, alvási apnoé, szív-érrendszeri betegség. „Magas koleszterin” → „vérzsír-eltérés (pl. magas koleszterin)”. | Kiegészítés: „prediabétesz”, „szív-érrendszeri betegség”. |
| 7 | `whoFor.no[1]` „Pajzsmirigy medulláris daganat vagy MEN2-szindróma…” | [S] Az EU SmPC-kben **nem** ellenjavallat (az USA-ban az). Így nem „kinek nem”, hanem „különleges óvatosság”. A címsor („vagy csak különleges óvatossággal”) ezt megengedi, de a szöveg legyen pontos. | „Pajzsmirigy medulláris daganat vagy MEN2-szindróma a saját vagy családi kórtörténetedben – ilyenkor az orvos különösen körültekintően mérlegel (az amerikai előírás kizáró oknak tekinti, az európai nem).” |
| 8 | `whoFor.no[2]` „Hasnyálmirigy-gyulladás a kórtörténetedben, súlyos emésztőrendszeri betegség.” | [N] SmPC: korábbi pancreatitisnél óvatosság; a gyógyszer mellett bekövetkezett, igazolt pancreatitis után nem indítható újra. | „Korábbi hasnyálmirigy-gyulladás, súlyos emésztőrendszeri betegség (pl. gyomorbénulás) – óvatos mérlegelést igényel.” |
| 9 | `whoFor.no` – hiányzó tételek | [S] Hiányzik: 18 év alatti; aktív/kezelt daganatos betegség?; inzulin/szulfonilurea szedése (hypoglykaemia); 2-es típusú cukorbetegség retinopathiával; tervezett altatásos műtét; más GLP-1 szer szedése; súlyos vesebetegség; alkoholfüggőség/pszichiátriai instabilitás (orvosi döntés). Nem kell mind a főoldalra, de legalább egy sor. | Új tétel: „18 év alattiak – a szolgáltatás kizárólag felnőtteknek szól.” és „Ha inzulint vagy más vércukorcsökkentőt szedsz, cukorbetegséghez társuló szembetegséged van, vagy a közeljövőben altatásos beavatkozásra készülsz – ezeket külön jelezd, az orvos mérlegeli.” |
| 10 | `how.steps[2]` „Dr. Demeter Ágota átnézi az adataidat. Ha kell, egy személyes vagy videós beszélgetés is lehetséges.” | [S] Lásd 1.4: első felírás előtt videós konzultáció legyen a szabály. | „Dr. Demeter Ágota átnézi az adataidat, majd egy videós (vagy személyes) beszélgetésen tisztázza a kérdéseket – az első felírás előtt ez mindig része a folyamatnak. Az orvos dönt a felírásról.” |
| 11 | `trust.items[4]` „Átlátható díj – … nincs rejtett költség, nincs előfizetési csapda.” | [N] „csapda” burkoltan másokat minősít (MOK II.26 (7): összehasonlítás). | „Alkalmanként egy fix díjat fizetsz – nincs rejtett költség és nincs előfizetés.” |
| 12 | `trust.items[3]` „…a GDPR előírásai szerint kezeljük.” | [N] Pontosítás. | „Az egészségügyi adataidat orvosi titoktartás mellett, a GDPR és a magyar egészségügyi adatvédelmi törvény szerint kezeljük.” |
| 13 | `honesty` | OK, jó. | – |
| 14 | `finalCta` „Készen állsz az első lépésre? Kezdd a kérdőívvel – nem kötelez semmire…” | [N] Enyhe nyomásgyakorlás; elfogadható, de a kérdőív „orvosi előszűrés” jellegét hangsúlyozzuk, és a díjfizetés pontját tisztázzuk (mikor fizet?). | „Szeretnéd tudni, szóba jöhet-e nálad? Az orvosi kérdőív kitöltése ingyenes és nem kötelez semmire. A díjat csak akkor fizeted, ha az orvosi értékelést kéred.” (ha ez a modell – tamas: ellenőrizendő). |
| 15 | `headerCta` „Kérdőív” globálisan | [S] A klinikai oldalon rejtsd el (1.1.4/4). | – |

### 2.3 `benefits.js`

| # | Jelenlegi | Probléma | Javaslat |
|---|---|---|---|
| 1 | `benefits[testsuly].summary` „Tartós, orvosilag jelentős fogyás életmódváltással együtt.” | [S] „Tartós” – a saját `afterwards` szekció cáfolja (leállítás után visszahízás). Ígéret-jellegű. | „Klinikailag jelentős fogyás – a kezelés alatt, életmódváltással együtt.” |
| 2 | `benefits[testsuly].text[0]` „…átlagosan testtömegük 5–20 százalékát veszítették el… Egy 90 kg-os embernél ez nagyjából 5–18 kg.” | [S] Számszerűen védhető (liraglutid −8%, szemaglutid −14,9%, tirzepatid −16…−22,5% a vizsgálat végén), de hiányzik a placebo és az időtáv; a marketing oldalon konkrét kg-szám az ÖRT 14. cikkely 3. szerint kerülendő. | „A nagy, 1–1,5 éves klinikai vizsgálatokban a résztvevők – étrendi és mozgástanácsadás mellett – átlagosan testtömegük körülbelül 8–22 százalékát adták le a készítménytől és az adagtól függően, míg a csak tanácsadást kapó (placebo) csoport 2–3 százalékot. Ezek átlagok; a pontos, forrással ellátott adatokat a Klinikai információk oldalon találod.” (A kg-példát elhagynám.) |
| 3 | `benefits[anyagcsere].summary` „Jobb vércukor-, vérnyomás- és koleszterinértékek.” | [N] Ígérő forma. | „Javulhatnak a vércukor-, a vérnyomás- és a vérzsírértékek.” |
| 4 | `benefits[anyagcsere].text[1]` „…gyógyszerigény csökkenését is jelentheti – ezt mindig az orvos állapítja meg…” | OK. | – |
| 5 | `benefits[szivet].summary` „Egyes készítményeknél bizonyítottan csökken a szív-érrendszeri események kockázata.” | [S] „bizonyítottan” túl erős egy betegcsoportra; a SELECT-adat pontosítható. | „Egy készítménynél egy nagy vizsgálat szerint csökkent a szív-érrendszeri események kockázata – meghatározott betegcsoportban.” |
| 6 | `benefits[szivet].text[0]` | [N] Pontosítás a SELECT-hez. | „A SELECT vizsgálatban (több mint 17 000 túlsúlyos vagy elhízott felnőtt, akiknek már volt szívinfarktusa, stroke-ja vagy perifériás érbetegsége, cukorbetegség nélkül) a szemaglutid 2,4 mg átlagosan 3,3 év alatt az újabb súlyos szív-érrendszeri esemény kockázatát 8,0%-ról 6,5%-ra csökkentette (20% relatív csökkenés).” — **Figyelem:** ha hatóanyagnevet nem akarunk a marketing oldalon, maradjon „egy GLP-1 készítmény”, és a konkrét adat menjen a klinikai oldalra. |
| 7 | `benefits[etvagy].text[1]` „…továbbra is a te munkád, amiben mi is segítünk.” | [S] Csak akkor igaz, ha van dietetikus/életmód-támogatás a szolgáltatásban (Fttv. 6. §: a szolgáltatás tartalmára vonatkozó állítás). | Ha nincs: „…továbbra is a te munkád; az orvos a kontrollokon ebben is tanácsot ad.” |
| 8 | `benefits[eletminoseg].summary` „Több energia, könnyebb mozgás, kevesebb testi tehertétel.” | [N] Ígérő forma. | „Sokaknál több energia, könnyebb mozgás, jobb alvás.” |
| 9 | `honest.columns[0]` gyakori mellékhatások | OK. [N] + „étvágytalanság, hajhullás (átmeneti), szédülés”. | – |
| 10 | `honest.columns[1]` ritkább, komoly | [S] Hiányzik: **hirtelen látásromlás/látásvesztés (NAION, szemaglutid, új EU-figyelmeztetés)**; aspiráció altatásnál; hypoglykaemia inzulin/SU mellett; retinopathia romlása T2DM-ben; pulzusszám-emelkedés; bélelzáródás (ileus) ritkán. | Új tételek: „Hirtelen látásromlás vagy látásvesztés (ritka, a szemaglutidnál leírt idegi eredetű szemkárosodás, NAION) – azonnali szemészeti vizsgálat szükséges”, „Alacsony vércukor, ha inzulinnal vagy szulfonilureával együtt szeded”, „Altatásos beavatkozás előtt szólj az altatóorvosnak: a lassabb gyomorürülés miatt félrenyelés veszélye lehet”, „Cukorbetegeknél a szemfenéki betegség átmeneti romlása”. |
| 11 | `honest.columns[1]` pajzsmirigy-sor: „Pajzsmirigy C-sejtes daganatokra vonatkozó figyelmeztetés (rágcsálókon észlelték, az emberre vonatkozó jelentősége nem ismert)” | [N] Pontosítás az EU SmPC szövegéhez. | „Rágcsálókban a GLP-1 szerek pajzsmirigy C-sejtes daganatot okoztak; az európai alkalmazási előírás szerint ennek emberi jelentősége valószínűleg alacsony, de nem zárható ki. Nyaki csomó, rekedtség, nyelési nehézség esetén szólj az orvosnak.” |
| 12 | `honest.columns[2][0]` „Terhesség, szoptatás, tervezett terhesség (a kezelést előtte az előírások szerint le kell állítani)” | [S] Konkrétum hiányzik. | „Terhesség és szoptatás alatt a kezelés nem alkalmazható. Ha babát tervezel, a készítménytől függően **legalább 1–2 hónappal** (tirzepatid: 1, szemaglutid: 2 hónap) a tervezett fogantatás előtt le kell állítani – ezt az orvossal előre beszéld meg.” |
| 13 | `honest.columns[2][1]` MTC/MEN2 | [S] Lásd 2.2/7. | „Pajzsmirigy medulláris daganat vagy MEN2 a saját vagy családi kórtörténetben – különös óvatosság.” |
| 14 | `honest.columns[2][4]` „Egyes készítményeknél a fogamzásgátló tabletta hatása is csökkenhet – ezt az orvos külön megbeszéli veled” | [S] Konkrétum: tirzepatid. | „Tirzepatid mellett a fogamzásgátló tabletta felszívódása csökkenhet: a kezelés kezdete után és minden adagemelés után 4 hétig használj kiegészítő (pl. óvszer) vagy nem szájon át szedett fogamzásgátlást. Szemaglutidnál ilyen hatást nem várnak. Az orvos ezt veled átbeszéli.” |
| 15 | `afterwards.paragraphs[0]` „…a leadott súly egy része – átlagosan jelentős hányada – idővel visszatér…” | [N] Konkrétabban, forrással. | „A vizsgálatok egyértelműek: a kezelés leállítása után a leadott súly jelentős része – a szemaglutid-vizsgálat kiterjesztésében egy év alatt átlagosan mintegy kétharmada – visszatér, különösen, ha a szokások nem változtak meg tartósan.” |
| 16 | `afterwards.paragraphs[2]` „A leadott testtömeg egy része izomtömeg is lehet.” | [N] Kiegyensúlyozás az SmPC DEXA-adatával. | „A leadott testtömeg nagyobb része zsír, de a sovány testtömeg (izom) is csökken. Ezért fontos a megfelelő fehérjebevitel és az ellenállásos edzés.” |

### 2.4 `process.js`

| # | Jelenlegi | Probléma | Javaslat |
|---|---|---|---|
| 1 | `steps[kerdoiv]` | [N] + életkor, személyazonosítás, TAJ. | „…Kitöltesz egy részletes egészségügyi kérdőívet: születési dátum (a szolgáltatás 18 éves kortól érhető el), testmagasság és -súly, korábbi betegségek, szedett gyógyszerek, terhesség-tervezés, étkezési szokások. A kezelés megkezdéséhez TAJ-számra és személyazonosításra is szükség lesz.” |
| 2 | `steps[labor]` lista | OK orvosszakmailag (TSH, vese, máj, lipid, HbA1c). [N] Az orvos döntheti el, kell-e lipáz/amiláz vagy kalcitonin – nem javaslom a listába. | – |
| 3 | `steps[konzultacio]`: „Ha az adatok egyértelműek, a konzultáció elmaradhat – de bármikor kérheted.” | **[B]** Lásd 1.4. Az első felíráshoz legyen kötelező a videós konzultáció (azonosítás + tünetek + beleegyezés). | Cím: „Videós konzultáció”. Szöveg: „Az első orvosi döntés előtt mindig beszéltek: egy videós (vagy személyes) konzultáción az orvos azonosít, átnézi veled az adataidat, a céljaidat, a kockázatokat és az alternatívákat, és válaszol a kérdéseidre. A későbbi kontrollok egy része elvégezhető írásban is.” `optional: false`. |
| 4 | `steps[recept].text[0]` „…elektronikus receptet ír, amelyet bármelyik magyarországi gyógyszertárban kiválthatsz.” | [N] Készlethiány. | „…elektronikus receptet ír (EESZT), amelyet bármelyik magyarországi gyógyszertárban kiválthatsz, ha a készítmény elérhető – az elmúlt években időnként készlethiány volt.” |
| 5 | `steps[recept].text[1]` „A recept felírása nem garantált – és nem is cél.” | Kifejezetten jó. | – |
| 6 | `pricing.priceUnit`, `lead` | [S] Fgytv. 14. §: bruttó ár; mi van benne; mikor fizetendő; visszatérítés. | „20 000 Ft / alkalom (bruttó, áfamentes egészségügyi szolgáltatás). A díj az orvosi munkára vonatkozik, és akkor is jár, ha az orvos nem javasolja a kezelést.” |
| 7 | `pricing.drugCost.text` | OK, pontos (testsúlykezelésre nincs NEAK-támogatás). [N] „A pontos, forrással ellátott adatokat…” → árakat csak forrással. | – |
| 8 | `surveyPlaceholder.button` „Értesítést kérek (hamarosan)” | [S] E-mail gyűjtés = hozzájárulás kell (Grt. 6. §). | Gomb mellé jelölőnégyzet: „Hozzájárulok, hogy a GLPMost a kérdőív indulásáról e-mailben értesítsen. A hozzájárulást bármikor visszavonhatom. [Adatkezelési tájékoztató]” |
| 9 | `dataNotice.text` „…Hozzájárulásodat bármikor visszavonhatod.” | **[B]** Ellentmond az Eüak 30. §-nak. | „A kérdőívben és a leletekben megadott egészségügyi adatok különleges személyes adatok. Titkosított kapcsolaton keresztül kezeljük őket, kizárólag az orvos és az ellátásban közreműködő, titoktartásra kötelezett munkatársak férnek hozzájuk, és csak az ellátásod céljára használjuk őket. Orvosi dokumentációként a törvény szerint 30 évig meg kell őriznünk őket.” |
| 10 | `faq[2]` „Mennyi ideig kell szedni?” | OK. | – |
| 11 | `faq[4]` terhesség: „…tervezett terhesség előtt pedig az előírás szerint le kell állítani.” | [S] Konkrétum. | „…tervezett terhesség előtt a készítménytől függően legalább 1–2 hónappal le kell állítani (tirzepatid: 1, szemaglutid: 2 hónap). Ezt a kérdőívben külön jelezd…” |
| 12 | Hiányzó FAQ-k | [S] | „**Kell személyesen megjelennem?**” válasz módosítása: „Az első orvosi döntés előtt videós konzultáció mindig van; személyes megjelenés csak akkor, ha az orvos szükségesnek látja vagy te kéred.” Új: „**18 év alatt igénybe vehetem?** Nem, a szolgáltatás kizárólag 18 éves kortól érhető el.” Új: „**Mi történik, ha nem kapok receptet?** A díj az orvosi értékelésért jár, ilyenkor is. Az orvos elmondja, mit javasol helyette.” Új: „**Hogyan tehetek panaszt?** → lásd 3.4.” |

### 2.5 `doctors.js`

| # | Jelenlegi | Probléma | Javaslat |
|---|---|---|---|
| 1 | `pageHero.title` „Orvosaink”, nav „Orvosaink” | [N] Egy orvossal többes szám – Fttv. szempontból enyhén félrevezető lehet. | „Az orvos” / „Orvosunk”, amíg egy orvos van. |
| 2 | `doctors[0].role/credentials/registration` TODO | **[B]** ETT 2.13: csak valós szakképesítés. Pecsétszám + szakvizsga kötelező a bizalmi/engedélyezési kontextusban. | Kitölteni: szakvizsga(k), diploma éve, működési nyilvántartási (pecsét)szám, link a kereső.enkk.hu találatra. |
| 3 | `doctors[0].bio[0]` „…a GLPMost orvosi vezetője.” | [N] OK, ha a működési engedélyben ő a szakmai felelős/vezető. | – |
| 4 | `registrationNote.note` „Az orvosok pecsétszáma a működési nyilvántartásban ellenőrizhető.” | [N] Link. | „A pecsétszám az OKFŐ nyilvános működési nyilvántartásában ellenőrizhető: kereso.enkk.hu.” |
| 5 | `principles` „Mit vállalunk?” | OK. | – |
| 6 | Hiányzik | [B] A szolgáltató (jogi személy), működési engedély száma, kiadó hatóság, felelősségbiztosító. | Új blokk az oldal alján vagy az impresszumban (3.3). |

### 2.6 `clinical.js` + `Clinical.jsx`

| # | Jelenlegi | Probléma | Javaslat |
|---|---|---|---|
| 1 | `pageHero.lead` | OK. | – |
| 2 | `legal.items[1]` „…nem reklám, és nem ösztönöznek egy adott készítmény használatára.” | [N] Az önminősítés jogilag nem dönt; maradhat, de ne erre építsünk. | Marad + új tétel: „A GLPMost gyógyszert nem forgalmaz és nem értékesít, gyártóval vagy forgalmazóval nem áll kapcsolatban.” (csak ha igaz!). |
| 3 | `pricesSection.verified` „ellenőrzött” | [S] Hatósági igazolás látszata. | „forrással” / „forrás és dátum”. |
| 4 | `Clinical.jsx` `Brand` kártya: ár + javallat egy kártyán, az oldalon vizsgálati eredmények | [S] Lásd 1.1.3/1.1.4 pont 2. | Készítménykártyán **csak**: név, forma, hatósági javallat (SmPC-szöveg), forgalom, támogatás, ár + forrás + dátum. Hatás-állítás ne legyen a kártyán. Vizsgálati szekció hatóanyag szerint, márkanév nélkül. |
| 5 | Ozempic / Trulicity megjelenítése (ha a data fájlban szerepel) | [S] T2DM-javallat; testsúlycsökkentésre off-label. | A kártyán jól látható jelölés: „Testsúlycsökkentésre nem engedélyezett – ebben a szolgáltatásban nem kerül felírásra.” Az ár megjelenítését ezeknél elhagynám. |
| 6 | `chart.lead` „a vizsgált legmagasabb adagnál” | [N] OK; megjegyzés: tirzepatidnál 15 mg, szemaglutidnál 2,4 mg, liraglutidnál 3 mg. | – |
| 7 | Fejléc CTA „Kérdőív” ezen az oldalon | [S] | Elrejteni / semleges linkre cserélni. |
| 8 | `disclaimerBottom` | OK. | – |

---

## 3. Kötelező elemek – ellenőrzőlista és javasolt magyar szövegek

### 3.1 Orvosi nyilatkozat (minden oldal láblécében)

> Az oldalon található tartalom tájékoztató jellegű, nem helyettesíti az orvosi vizsgálatot, diagnózist vagy kezelést. Gyógyszert kizárólag orvos írhat fel; a javallatot és az adagolást mindig az orvos állapítja meg. A GLPMost gyógyszert nem forgalmaz és nem értékesít. **A kockázatokról és a mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat, gyógyszerészedet!**

Megjegyzés: a 3/2009 EüM 4. § (1) a) szerinti kötelező mondat („…olvassa el a betegtájékoztatót, vagy kérdezze meg kezelőorvosát, gyógyszerészét!”) formálisan csak *gyógyszerreklámban* kötelező. Mi nem reklámozunk, ezért a tegeződő változat vállalható; ha a jogász szerint a klinikai oldal reklámnak minősülhetne, ott a **magázó, szó szerinti** mondatot kell használni, a felület 10%-án.

### 3.2 Sürgősségi szöveg

Lásd 2.1/4. Plusz a kérdőív és a kontroll-űrlap tetején: „Ha most erős hasi fájdalmad, csillapíthatatlan hányásod, allergiás tüneted vagy hirtelen látásromlásod van, ne töltsd ki ezt az űrlapot – hívd a 104-et vagy a 112-t.”

### 3.3 Impresszum / szolgáltatói adatok (külön `/impresszum` oldal, láblécből linkelve)

Kötelező (Ekertv. 4. §, Fgytv. 17/A, Eütv., 96/2003):
- Szolgáltató neve (cég / egyéni vállalkozó), székhelye, levelezési címe
- Cégjegyzékszám / egyéni vállalkozói nyilvántartási szám, nyilvántartó bíróság/hatóság
- Adószám
- E-mail, telefon
- **Egészségügyi szolgáltató működési engedélyének száma**, kiadó hatóság neve és elérhetősége (… Vármegyei Kormányhivatal … Járási Hivatal Népegészségügyi Osztály), engedélyezett szakma és ellátási forma
- **Szakmai felelős / felelős orvos**: Dr. Demeter Ágota, szakképesítés, működési nyilvántartási (pecsét)szám, kamarai tagság (ha van: Magyar Orvosi Kamara, tagsági szám) és az Orvosetikai Kódex elérhetősége
- Felelősségbiztosító neve, kötvényszám (nem kötelező közzétenni, de bizalomépítő)
- Tárhelyszolgáltató neve, címe (statikus: GitHub, Inc.; app-backend: …)
- **Panaszkezelés**: „Panaszodat szóban vagy írásban (e-mail: …, postacím: …) közölheted. Írásbeli panaszra 30 napon belül érdemben válaszolunk; egészségügyi ellátással kapcsolatos panaszt az Eütv. 29. §-a szerint legfeljebb 30 munkanapon belül írásban kivizsgálunk.”
- **Betegjogi képviselő**: „Az ellátással kapcsolatos panaszoddal az Országos Kórházi Főigazgatóság betegjogi képviselőjéhez is fordulhatsz: [területileg illetékes képviselő neve, elérhetősége – okfo.gov.hu].”
- **Békéltető testület** (Fgytv. 17/A (1a)): „Fogyasztói jogvita esetén a lakóhelyed szerint illetékes békéltető testülethez fordulhatsz. Budapesti Békéltető Testület: 1016 Budapest, Krisztina krt. 99., tel. +36 1 488 2131, bekelteto.testulet@bkik.hu, bekeltet.bkik.hu.” (+ a székhely szerinti testület, ha nem Budapest; a lista: bekeltetes.hu)
- Felügyeleti hatóságok: Nemzeti Népegészségügyi és Gyógyszerészeti Központ (NNGYK) / kormányhivatal népegészségügyi osztály; fogyasztóvédelem: a kormányhivatal fogyasztóvédelmi osztálya; adatvédelem: NAIH.

### 3.4 Adatkezelési tájékoztató – minimális tartalom

Adatkezelő; adatvédelmi kapcsolattartó; kezelt adatok körei (azonosító, TAJ, kérdőív, leletek, videókonzultáció – rögzítjük-e?, felírás, számlázás, kapcsolattartás, honlap-naplók); célok és jogalapok (9(2)(h)+Eüak az ellátásra; 6(1)(c) számlázás/EESZT; 6(1)(a) hírlevél); címzettek (EESZT, NEAK/hatóság jogszabály alapján, adatfeldolgozók listája országgal); harmadik országba továbbítás (GitHub Pages: DPF; egyéb: nincs); megőrzés (30/50 év; számviteli 8 év; hírlevél visszavonásig); érintetti jogok + korlátok (törlés az orvosi dokumentációnál nem); automatizált döntéshozatal: **nincs** (az orvos dönt – ezt írjuk ki, GDPR 22. cikk); sütik: nincs / lista; NAIH + bíróság; biztonsági intézkedések röviden; DPIA elkészült (dátum). Plusz külön **telemedicina betegtájékoztató és beleegyező nyilatkozat** (60/2003 3. § (1) g)): mi a telemedicina, korlátai, azonosítás módja, mikor kell személyes vizsgálat, sürgősség, rögzítés, díj.

### 3.5 Hozzájárulási szövegek (űrlapok)

- Kérdőív indítása: „Megerősítem, hogy elmúltam 18 éves, a kérdőívet magamról, a valóságnak megfelelően töltöm ki, és elolvastam az [adatkezelési tájékoztatót] és a [telemedicina-tájékoztatót].”
- Hírlevél: lásd 2.4/8.
- Videókonzultáció rögzítése (ha van): külön, önkéntes hozzájárulás, nem feltétel.

### 3.6 Korhatár és célzás

18+ nyilatkozat a kérdőív elején; születési dátum ellenőrzés; a marketing (hirdetések, közösségi média) 18+ célzással; a honlapon nincs gyermekeknek szóló vagy testképet idealizáló vizuális elem (ÖRT 14. cikkely 2.).

### 3.7 Mi kell élesítés ELŐTT (sorrendben)

1. Szolgáltató jogi személy + működési engedély (szakma, telemedicina ellátási forma) + felelősségbiztosítás + EESZT-csatlakozás + EESZT-képes vényíró szoftver.
2. Orvosi adatok: szakvizsga, pecsétszám, működési nyilvántartás érvényessége.
3. Belső dokumentumok: telemedicina eljárásrend, betegtájékoztató, betegazonosítási protokoll, sürgősségi protokoll, dokumentációs rend, kérdőív orvosi validálása (kizáró kritériumok, „stop” szabályok), kontroll-ütemterv, leállítási szabály (pl. Saxenda 12 hetes szabály).
4. Adatvédelem: DPIA, adatfeldolgozói szerződések, EU-s backend a kérdőívhez/feltöltéshez (titkosítás, hozzáférés-naplózás), végleges adatkezelési tájékoztató, süti-döntés.
5. Jogi dokumentumok: impresszum, ÁSZF (díj, fizetés, lemondás, „nincs recept – díj jár”), panaszkezelési tájékoztató, békéltető testület.
6. Szövegjavítások a 2. fejezet [B] és [S] tételei szerint; `showDraftNotes=false`; placeholder elérhetőségek cseréje.
7. Ügyvédi vélemény: (a) a modell burkolt reklám kockázata, (b) telemedicina gyógyszerrendelés hatályos jogalapja 2026-ban, (c) 45/2014 Korm. alkalmazása, (d) áfa.

---

## 4. Prioritált teendőlista és kérdések

### BLOCKER (élesítés előtt kötelező)
1. **Szolgáltató + engedély + orvos azonosítók** megnevezése az oldalon (impresszum, lábléc, orvos-oldal). Enélkül Ekertv. 4. §-sértés és a bizalom alapja hiányzik.
2. **Adatkezelési tájékoztató jogalap és megőrzés** javítása (9(2)(h)+Eüak; 30/50 év), `dataNotice` és `privacy` szövegek cseréje; adatfeldolgozók, hosting, NAIH-adatok.
3. **Kérdőív/leletfeltöltés backend EU-ban, titkosítva, DPA-kkal; DPIA.** A GitHub Pages-en semmilyen egészségügyi adat nem gyűjthető.
4. **Első felírás előtt kötelező videós konzultáció + betegazonosítás**; a „konzultáció elmaradhat” szöveg cseréje; telemedicina eljárásrend + betegtájékoztató.
5. **EESZT-csatlakozás és e-recept** képesség (a szöveg ígéri az elektronikus receptet).
6. **Off-label kizárása**: Ozempic/Trulicity testsúlykezelésre nem; ha a klinikai adatfájl ezeket „opcióként” mutatja, jelölni, hogy nem testsúly-javallat.
7. **Orvosszakmai pontosítások**: terhesség előtti leállítás (2 hó / 1 hó), tirzepatid–fogamzásgátló 4 hét, MTC/MEN2 nem ellenjavallat az EU-ban (óvatosság), NAION és aspiráció figyelmeztetés felvétele, „Tartós fogyás” → „a kezelés alatt”.
8. Placeholder e-mail/telefon cseréje, `showDraftNotes=false`, „ellenőrizendő” adatok eltüntetése vagy egyértelmű jelölése.

### SHOULD (erősen javasolt, az első hetekben)
1. Klinikai oldal átstrukturálása: készítménykártyán ne legyen hatás-állítás; árak külön, forrással és dátummal (vagy csak külső link az OGYÉI/NEAK adatbázisra); „ellenőrzött” → „forrással”.
2. Fejléc „Kérdőív” CTA elrejtése a klinikai oldalon; a klinikai oldalról ne vezessen közvetlen CTA a felírási folyamatba.
3. Előnyök oldal: konkrét %/kg helyett sáv + placebo + időtáv; számok a klinikai oldalon.
4. Impresszumba panaszkezelés + betegjogi képviselő + békéltető testület; ÁSZF (díj akkor is jár, ha nincs recept).
5. Hírlevél-hozzájárulás szövege; sütimentes analitika vagy consent-kezelő.
6. „Orvosaink” → egyes szám, amíg egy orvos van; „tapasztalt” csak igazolható tapasztalattal.
7. Hiányzó FAQ-k (18+, nincs recept, panasz, személyes megjelenés).
8. Ügyvédi vélemény a burkolt reklám kockázatról és a telemedicina jogalapról.

### NICE
1. SELECT-, STEP-, SURMOUNT-, SCALE-adatok DOI-val a klinikai oldalon (a data agent feladata), a „kezelés alatt mért” kitétellel.
2. Magázó, szó szerinti 3/2009-es figyelmeztető mondat a klinikai oldal árszekciója mellett, „biztonsági tartaléknak”.
3. „Hogyan dönt az orvos?” oldal: kizáró kritériumok teljes listája, laborküszöbök – átláthatóság, és csökkenti a „bárki kap receptet” benyomást.
4. Evészavar-szűrő kérdések (pl. SCOFF) a kérdőívben, és segítő elérhetőségek a „kinek nem” résznél.
5. Áfa-jelölés és számlázási tájékoztató.

### Kérdések tamasnak
1. Ki a jogi szolgáltató (a doktornő praxisa vagy új Kft.)? Van működési engedélye, milyen szakmára, és tartalmazza-e a telemedicina ellátási formát? Van EESZT-csatlakozása?
2. Hol fog futni a kérdőív és a leletfeltöltés (szolgáltató, ország)? Lesz videóplatform (melyik)? Tervezel analitikát/pixelt?
3. Mikor fizet a páciens: a kérdőív után, az értékelés előtt? Jár a díj, ha nincs recept? Van lemondás/visszatérítés?
4. Lesz-e dietetikus/életmód-támogatás („amiben mi is segítünk”)?
5. Van kapcsolat gyártóval/forgalmazóval (szponzoráció, minta, kedvezmény)? Ha igen, az a teljes reklámjogi képet megváltoztatja.
6. Tervezel fizetett hirdetést? (Gyógyszernév nélküli, 18+ célzású szolgáltatás-hirdetés jöhet szóba csak.)

### Kérdések Dr. Demeter Ágotának
1. Szakvizsga(k), pecsétszám, működési nyilvántartás érvényessége; MOK-tagság (ha igen, a MOK-kódex II.26–27 is köt).
2. Vállalja-e, hogy az első felírás csak videós konzultáció után történik? Milyen esetben kér személyes vizsgálatot (pl. BMI-határ, társbetegség, 60+ év)?
3. Kizáró és „különös óvatosság” kritériumok végleges listája (MTC/MEN2, pancreatitis, evészavar, pszichiátriai állapot, inzulin/SU, retinopathia, vese, altatás, 18 alatt, 65/75 felett?).
4. Labor-minimum és frissességi határ (3 hónap?), kontroll-gyakoriság, leállítási szabályok (pl. 12 hét <5% liraglutidnál), maximális felírt mennyiség (30 nap / 3 hónap, 44/2004 11. §).
5. Mely készítményeket írja fel: Wegovy, Saxenda, Mounjaro – és megerősíti-e, hogy Ozempic/Trulicity testsúlykezelésre nem (off-label)?
6. Tirzepatid és orális fogamzásgátló: a 4 hetes barrier-tanácsot kommunikáljuk-e (javaslom igen)?
7. Terhességi teszt / fogamzásgátlás dokumentálása fogamzóképes korú nőknél a felírás előtt?
8. Sürgősségi eszkaláció: ki és hogyan érhető el a kontrollok között?

---

## Források (elérés: 2026-10-14)

- Gyftv. 2006. évi XCVIII. – https://net.jogtar.hu/jogszabaly?docid=a0600098.tv
- 3/2009. (II. 25.) EüM r. – https://net.jogtar.hu/jogszabaly?docid=a0900003.eum ; https://njt.hu/jogszabaly/2009-3-20-0B
- Grt. 2008. évi XLVIII. – https://net.jogtar.hu/jogszabaly?docid=a0800048.tv
- Fttv. 2008. évi XLVII. – https://net.jogtar.hu/jogszabaly?docid=a0800047.tv
- Fgytv. 1997. évi CLV. – https://net.jogtar.hu/jogszabaly?docid=99700155.tv
- Ekertv. 2001. évi CVIII. – https://net.jogtar.hu/jogszabaly?docid=a0100108.tv
- Eütv. 1997. évi CLIV. – https://net.jogtar.hu/jogszabaly?docid=99700154.tv
- Eüak. 1997. évi XLVII. – https://net.jogtar.hu/jogszabaly?docid=99700047.tv
- 96/2003. (VII. 15.) Korm. r. – https://net.jogtar.hu/jogszabaly?docid=a0300096.kor
- 60/2003. (X. 20.) ESzCsM r. – https://net.jogtar.hu/jogszabaly?docid=a0300060.esc ; 33/2020. (IX. 16.) EMMI r. – https://njt.jog.gov.hu/jogszabaly/2020-33-20-5H.0
- 2020. évi LVIII. tv. 85. § – https://net.jogtar.hu/jogszabaly?docid=a2000058.tv
- 44/2004. (IV. 28.) ESzCsM r. – https://net.jogtar.hu/jogszabaly?docid=a0400044.esc
- 45/2014. (II. 26.) Korm. r. – https://net.jogtar.hu/jogszabaly?docid=a1400045.kor
- ETT Orvosetikai Kódex – https://ett.okfo.gov.hu/en/code-of-medical-ethics-2/ ; PDF https://ett.okfo.gov.hu/wp-content/uploads/2026/01/Code_of_Medical_Ethics_2026.pdf ; https://kormany.hu/dokumentumtar/orvosetikai-kodex
- MOK Etikai Kódex (2012) – https://aok.pte.hu/docs/dekan/file/ekodex.pdf
- ÖRT Magyar Reklámetikai Kódex 2024 – https://www.ort.hu/wp-content/uploads/2024/11/magyar_reklametikai_kodex_online_2024.pdf
- OGYÉI ismertetés-felügyelet – https://ogyei.gov.hu/gyogyszerismertetes_felugyelet
- NAIH hatásvizsgálati lista – https://www.naih.hu/hatasvizsgalati-lista
- OKFŐ működési nyilvántartás kereső – https://kereso.enkk.hu/
- GitHub DPA / DPF – https://github.com/customer-terms/github-data-protection-agreement
- EMA SmPC-k: Wegovy, Saxenda, Mounjaro, Trulicity (lásd 1.6)
- GVH fogyókúrás termék bírság (2022, kontextus) – https://www.gvh.hu/sajtoszoba/sajtokozlemenyek/2022-es-sajtokozlemenyek/fogyasztoszer-kereskedot-es-reklamugynokseget-buntetett-a-gvh
- Másodlagos (telemedicina): https://hgysz.hu/09/22/a-telemedicina-reszletes-szabalyozasa/ ; https://haziorvosinfo.hu/megjelent-az-emmi-rendelete-a-telemedicinalis-ellatasok-szakmai-minimumfelteteleirol-es-elszamolhatosagarol/ ; https://jog.tk.elte.hu/blog/2023/05/technologia-covid-kolcsonhatasa-a-magyar-egeszsegugyben
