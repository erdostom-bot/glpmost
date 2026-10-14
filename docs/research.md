# GLPMost – klinikai és piaci kutatási jegyzet

*Készült: 2026-10-14. Szerző: glpmost-research agent. Adatfájl: `src/data/clinical.js`.*

Ez a dokumentum rögzíti, honnan származik a `clinical.js` minden adata, mit sikerült elsődleges forrásból ellenőrizni, mit nem, és milyen kérdéseket érdemes Dr. Demeter Ágotával, illetve a termékgazdával tisztázni.

## 1. Módszertan

**Klinikai vizsgálatok.** Minden vizsgálat adatait a PubMed-rekordból vettük (NCBI E-utilities `efetch`, 2026-10-14): cím, folyóirat, év, DOI, NCT-szám (ahol az absztrakt tartalmazza), N, időtartam, karok, elsődleges eredmények, biztonsági adatok. Csak az absztraktban szereplő számokat tekintettük ellenőrzöttnek. Ahol egy szám a teljes közleményből ismert, de az absztrakt nem tartalmazza, `verified:false` / „ellenőrizendő” jelölést kapott (lásd 4. szakasz). A DOI–PMID párosítást a PubMed-rekord garantálja. A hiányzó NCT-számokat a ClinicalTrials.gov v2 API-val kerestük.

**Alkalmazási előírások (SmPC).** Az EMA magyar nyelvű EPAR termékinformációs PDF-jeit töltöttük le (Wegovy, Ozempic, Rybelsus, Saxenda, Trulicity, Mounjaro), a szöveget `pypdf`-fel nyertük ki, és a 4.1 (javallat), 4.2 (adagolás), 4.3 (ellenjavallat), 4.4 (figyelmeztetések), 4.5 (interakciók – fogamzásgátló), 4.6 (terhesség/szoptatás), 4.8 (mellékhatások) pontokat olvastuk. A Wegovy SmPC a 2026. 09. 21-i (19. revízió) állapotú, tartalmazza a 7,2 mg-os dózist és a tablettáról való átállást.

**NEAK-támogatás.** A NEAK Ártámogatási Főosztály „EÜ emelt támogatási lista 2026. 10. 01.” és „EÜ kiemelt támogatási lista 2026. 10. 01.” PDF-jeit töltöttük le (`neak.gov.hu/letoltheto/ATFO_dok/gyogyszer/ind`), és a GLP-1 készítményeket a listában megkerestük. A támogatási feltétel szövegét szó szerint idézzük a 2. szakaszban.

**Árak.** Bruttó fogyasztói árak: PHARMINDEX Online (adatbázis-frissítés 2026. 10. 01.), PatikaRadar (lekérve 2026. 10. 14., térítési díjjal), kiegészítésként egyes gyógyszertárak webáruháza (Kőhegy Gyógyszertár, BENU Vény, Egészségkalauz). Szabadáras (nem támogatott) termékeknél – Wegovy, Saxenda, Mounjaro – a patikák ára eltérhet; ezt az adatfájl jelzi. Magyar „ár-blogok” (akciokozpont.hu, fitnessvilag.hu, egjenazsir.com, helloregimen.com) havi becsléseit **nem** használtuk ellenőrzött adatként, csak háttérként említjük.

**Szabályozói státusz.** EMA EPAR-oldalak, CHMP-ülések összefoglalói és napirendjei (2026. május, szeptember, október), Európai Bizottság közösségi nyilvántartása (határozatok dátuma), OGYÉI gyógyszeradatbázis.

**Nyelv.** A betegeknek szóló szövegek magyarul, az OGYÉI-ben használt INN-írásmóddal (szemaglutid, liraglutid, dulaglutid, tirzepatid).

## 2. Magyar piac – összefoglaló (2026. október)

| Hatóanyag | Készítmény | Javallat (EU) | Forgalomban HU | Vény | NEAK | Teljes ár (bruttó) | Térítési díj (EÜ 70%) |
|---|---|---|---|---|---|---|---|
| szemaglutid | Wegovy FlexTouch (toll, 4 adag) | testsúlykezelés | igen | V | **nem** támogatott | 0,25/0,5/1 mg: 51 762 Ft; 1,7 mg: 61 137 Ft; 2,4 mg: 70 391 Ft | – |
| szemaglutid | Wegovy tabletta 1,5/4/9/25 mg | testsúlykezelés | **ellenőrizendő** (EU-engedély 2026-07-14) | V | – | nincs adat | – |
| szemaglutid | Ozempic (toll, 4 adag) | T2DM | igen | V | EÜ70 1/b | 34 094 Ft (0,25/0,5/1 mg) | 10 228 Ft |
| szemaglutid | Rybelsus tabletta (30 db) | T2DM | igen | V | EÜ70 1/b | 4 mg: 37 530 Ft; 7/9/14 mg: 39 407 Ft (2025-10, ellenőrizendő) | 4 mg: 11 259 Ft |
| liraglutid | Saxenda (3×3 ml) | testsúlykezelés | igen | V | **nem** támogatott | 37 995 Ft / 3 toll (Kőhegy) | – |
| liraglutid | Victoza (2×3 ml) | T2DM | igen | V | EÜ70 1/b | 28 410 Ft | 8 523 Ft |
| liraglutid | generikum | – | **nem található** | – | – | – | – |
| dulaglutid | Trulicity (2 toll) | T2DM | igen | V | EÜ70 1/b | 1,5 mg és 3 mg: 17 903 Ft | 5 371 Ft (1,5 mg) |
| tirzepatid | Mounjaro KwikPen (4 adag) | T2DM + testsúlykezelés | igen (engedély 2024-05-29) | V | **nem** támogatott | 2,5 mg: 70 550; 5 mg: 95 845; 7,5 mg: 133 787; 10 mg: 156 700 (Kőhegy); 12,5 mg: 171 729 (ellenőrizendő); 15 mg: 171 729 (PHARMINDEX) / 188 240 (BENU-találat) | – |

**Elhízás önmagában:** egyetlen GLP-1-készítmény sem támogatott Magyarországon. A NEAK 2026-10-01-i emelt és kiemelt listáin Wegovy, Saxenda, Mounjaro nem szerepel; a PatikaRadar és a BENU is 0% / „Nem” normatív támogatást mutat ezekre.

**EÜ70 1/b. pont (szó szerint, NEAK 2026. 10. 01.):**
> Dokumentált 2-es típusú cukorbetegségben, amennyiben életmód-terápia és metformin tartalmú kezelés legalább 3 hónapig tartó alkalmazása ellenére a megfelelő szénhidrátanyagcsere-helyzet (HbA1c<7%) nem volt elérhető, és a kezelt beteg BMI értéke 30 feletti
> – vagy a betegnél az előző pontban felsorolt gyógyszerek [SGLT2-gátlók, EÜ70 1/a] legalább 3 hónapig tartó alkalmazása ellenére a megfelelő szénhidrátanyagcsere-helyzet nem volt elérhető
> – vagy a beteg kórelőzményében akut ischaemias esemény szerepel
> – vagy a betegnél az előző pontban felsorolt gyógyszerek alkalmazása mellékhatás-bejelentő kitöltésével dokumentált mellékhatás miatt nem folytatható
> – vagy a beteg legalább 3 hónapja kezelt a pont alá tartozó készítményekkel.

Felírhatóság: diabetológiai szakellátóhely (belgyógyász, gyermekgyógyász), járó-/fekvőbeteg szakrendelés (belgyógyászat, endokrinológia, kardiológia) javasolhat és írhat; háziorvos javaslatra írhat. Szakorvosi javaslat érvényessége 12 hónap. BNO: E11. A pont alá tartozó készítmények: Ozempic (0,25/0,5/1 mg), Rybelsus (1,5/3/4/7/9/14 mg), Trulicity (0,75/1,5/3/4,5 mg), Victoza, valamint a Suliqua és Xultophy inzulin-kombinációk.

**Újabb szerek státusza (2026-10-14):**
- Wegovy tabletta (orális szemaglutid 1,5/4/9/25 mg): CHMP pozitív vélemény 2026-05-21, Európai Bizottság határozat C(2026) 5102, 2026-07-14. Magyar forgalmazás nem igazolt.
- Wegovy 7,2 mg heti dózis: EB-határozat 2026. február (melléklet dátuma 2026-02-16; CHMP 2025-12-12). A magyar SmPC már tartalmazza.
- Orforglipron: **nem engedélyezett az EU-ban.** A CHMP 2026. október 12–15-i ülésének napirendjén „Opinion – For adoption” (EMEA/H/C/006632, elhízás + T2DM felnőtteknél; kérdéslista 2026-05-21, nyitott kérdések 2026-09-17). A szeptemberi CHMP-összefoglalóban nem szerepelt. USA/UK: Foundayo.
- CagriSema: nem engedélyezett az EU-ban, EMA-beadvány nyilvánosan nem megerősített (másodlagos források; ellenőrizendő).
- Generikus liraglutid: PHARMINDEX ATC A10BJ02 lista csak Saxenda és Victoza.

## 3. Vizsgálatok – kiválasztás és indoklás

- **Szemaglutid (5):** STEP 1 (alap, nem diabéteszes), STEP 2 (T2DM), STEP 4 (megvonás/fenntartás), STEP 5 (2 év, 78% nő, átlag 47 év – legközelebb a célközönséghez), SELECT (kardiovaszkuláris kimenetel). Kapcsolódó: STEP 1 extension (visszahízás), STEP 8 (vs liraglutid). STEP 3 és SUSTAIN-6 kimaradt (STEP 3 intenzív viselkedésterápiás elrendezése kevésbé releváns; SUSTAIN-6 T2DM-CVOT, a SELECT relevánsabb).
- **Liraglutid (5):** SCALE Obesity and Prediabetes (alap), SCALE Diabetes, SCALE Maintenance, SCALE 3 év (diabétesz-prevenció), LEADER (CVOT). SCALE Insulin kimaradt (inzulinnal kezelt T2DM, kevésbé releváns).
- **Dulaglutid (5):** AWARD-11 (legnagyobb dózisok, legnagyobb testsúlyhatás), REWIND (CVOT), AWARD-6 (vs liraglutid), AWARD-5 (vs szitagliptin, 52 hét, kg-adat), AWARD-3 (monoterápia vs metformin). Nincs testsúlykezelési vizsgálat; az adatfájl ezt kimondja. A fogyás kg-ban közölt, ezért a `weightChange` itt `unit:'kg'` és `drugKg`/`comparatorKg` mezőket használ, `drugPct: null`.
- **Tirzepatid (5):** SURMOUNT-1, -2 (T2DM), -3 (életmód-program után), -4 (megvonás), -5 (vs szemaglutid). Kapcsolódó: SURPASS-2, SURPASS-CVOT (vs dulaglutid, 2025).

A `weightChange` mező minden esetben a közlemény absztraktjában közölt végponti átlagos változás; a megvonási vizsgálatoknál (STEP 4, SURMOUNT-4) `baselineWeek` jelzi, hogy a randomizációtól mért változásról van szó. Komparátoros vizsgálatoknál (SURMOUNT-5, AWARD-5, AWARD-11) `comparatorPct`/`comparatorKg` + `comparatorLabel` szerepel, `placeboPct: null`.

## 4. Ellenőrzött vs. ellenőrizendő tételek

| Tétel | Státusz | Megjegyzés |
|---|---|---|
| Mind a 20 fő vizsgálat címe, folyóirata, éve, DOI-ja, N, időtartam, fő eredmény | ✅ ellenőrzött | PubMed-absztrakt |
| NCT-számok: STEP 1/2/4/5, SELECT, SCALE ×4, LEADER, SURMOUNT 1–5, REWIND, AWARD-6, SURPASS-2, SURPASS-CVOT | ✅ | absztraktból |
| NCT AWARD-11 (NCT03495102), AWARD-5 (NCT00734474) | ✅ | ClinicalTrials.gov API (cím, N egyezik) |
| NCT AWARD-3 | ❌ `null` | absztraktban nincs, API-keresés nem hozott egyértelmű találatot |
| SCALE Obesity & Prediabetes %-os fogyás (−8,0% vs −2,6%) | ⚠️ ellenőrizendő | absztrakt kg-ban közöl (−8,4 vs −2,8 kg); % a teljes közleményből |
| STEP 2 szemaglutid 1,0 mg-kar %-a | ❌ nincs megadva | nem szerepel az absztrakt kinyert részében; csak a 2,4 mg-kar került a `weightChange`-be |
| SELECT, LEADER, REWIND testtömegadat | ❌ `weightChange: null` | az absztraktok nem közölnek testtömegváltozást |
| AWARD-6 testtömeg | ❌ | absztrakt nem közöl számot |
| Liraglutid visszahízás számszerűen | ⚠️ ellenőrizendő | SCALE Diabetes 12 hetes és SCALE 3 év gyógyszermentes szakaszának adatai nincsenek az absztraktban |
| Wegovy FlexTouch árak (5 erősség) | ✅ | PHARMINDEX 2026-10-01, PatikaRadar 2026-10-14 (2,4 mg) |
| Ozempic ár + térítési díj | ✅ | PatikaRadar 2026-10-14 |
| Ozempic 2 mg ár | ❌ `null` | nem kerestük külön |
| Rybelsus 4 mg ár + térítési díj | ✅ | PatikaRadar; **eltérés**: 2025-10-ben 39 407 Ft volt (Econsilium), most 37 530 Ft |
| Rybelsus 7/9/14 mg ár (39 407 Ft) | ⚠️ ellenőrizendő | 2025-10-27-i forrás |
| Victoza, Trulicity ár + térítési díj | ✅ | PatikaRadar; **eltérés**: egy korábbi PatikaRadar-indexelés Trulicity 1,5 mg-ra 18 798 / 5 639 Ft-ot mutatott, az élő oldal 17 903 / 5 371 Ft |
| Saxenda 3×3 ml 37 995 Ft | ✅ (egy patika) | Kőhegy webáruház; szabadáras |
| Saxenda havi költség 60–70 e Ft | ⚠️ számított | 5 toll/hó 3,0 mg-on |
| Mounjaro 2,5/5/7,5 mg | ✅ | PHARMINDEX 2026-10-01 |
| Mounjaro 10 mg 156 700 Ft | ✅ (egy patika) | Kőhegy |
| Mounjaro 12,5 mg 171 729 Ft | ⚠️ | Egészségkalauz „tájékoztató ár”, azonos a 15 mg PHARMINDEX-árával |
| Mounjaro 15 mg 171 729 vs 188 240 Ft | ⚠️ | PHARMINDEX vs BENU-találat (keresési kivonatból, oldal árat nem mutatott) |
| Mounjaro nem támogatott | ✅ | NEAK-listákon nincs; PatikaRadar 0%; BENU „Nem” |
| Wegovy, Saxenda nem támogatott | ✅ | NEAK-listákon nincs; PatikaRadar Wegovy 0% |
| EÜ70 1/b feltétel szövege | ✅ | NEAK PDF 2026-10-01 |
| Wegovy tabletta EU-engedély 2026-07-14 | ✅ | EB-határozat C(2026) 5102 (közösségi nyilvántartás) + CHMP május |
| Wegovy tabletta magyar elérhetőség/ár | ❌ ellenőrizendő | magyar források szerint 2026 őszén „még nem elérhető”; hivatalos adat nincs |
| Wegovy 7,2 mg EB-engedély | ✅ | EB-melléklet 2026-02-16; **eltérés**: egy másodlagos forrás (bariatricnews) 2025-ös dátumot ír, a GlobeNewswire URL és az EB-nyilvántartás 2026-ot |
| Orforglipron EU-státusz | ✅ | CHMP októberi napirend; eredmény az ülés után (2026-10-16 körül) ellenőrizendő |
| CagriSema EMA-beadvány | ⚠️ | csak másodlagos források |
| SmPC-tények (javallat, titrálás, ellenjavallat, terhesség, mellékhatás-gyakoriság, fogamzásgátló-interakció) | ✅ | EMA HU SmPC-k 2026-10-14 |
| Tirzepatid + orális fogamzásgátló: USA-előírás (4 hét kiegészítő védekezés) | ⚠️ | az EU-s SmPC szerint nem klinikailag releváns; az FDA-címke állítását nem ellenőriztük elsődleges forrásból ezen a futásban |
| „Wegovy havi adag 100–110 e Ft” típusú blogbecslések | ❌ nem használt | hivatalos listaárnál magasabbak, forrásuk ismeretlen |

## 5. Talált eltérések

1. **Rybelsus 4 mg ára**: 39 407 Ft (2025-10, Econsilium) → 37 530 Ft (2026-10-14, PatikaRadar). A 7/9/14 mg aktuális ára ellenőrizendő.
2. **Trulicity 1,5 mg**: 18 798 / 5 639 Ft (régebbi PatikaRadar-index) vs 17 903 / 5 371 Ft (élő oldal 2026-10-14). Az élő adatot használtuk.
3. **Mounjaro 12,5 és 15 mg**: azonos 171 729 Ft két forrásban; BENU 15 mg 188 240 Ft. Szabadáras termék, a különbség patikánkénti árazásból is adódhat.
4. **Wegovy 7,2 mg engedély éve**: EB-nyilvántartás 2026-02-16 vs egy hírforrás 2025-02-17. Az EB-nyilvántartást tekintjük hitelesnek.
5. **PHARMINDEX „TB támogatás” mező**: a Wegovy és Mounjaro oldalakon a kinyert szöveg „TB támogatás”-t jelzett, de ez a mező címkéje; a PatikaRadar/BENU/NEAK szerint 0% / nincs támogatás. Az adatfájl a NEAK-listát és a PatikaRadart követi.
6. **SURMOUNT-5 nyílt elrendezés**: a tirzepatid–szemaglutid különbség valós, de a nyílt design torzíthat – az összefoglaló ezt jelzi.

## 6. Kérdések a doktornőnek / termékgazdának

1. **Elhízás MTC/MEN2 ellenjavallat**: az EU-s SmPC-k nem tartalmazzák formális ellenjavallatként (az FDA-címkék igen). Hogyan fogalmazzuk meg a betegeknek: „beszéljen orvosával” vagy „nem adható”?
2. **Tirzepatid + fogamzásgátló tabletta**: az EU-s SmPC szerint nem kell módosítani; az amerikai gyakorlat 4 hét kiegészítő védekezést javasol dózisemeléskor. Melyik üzenetet kövesse az oldal a 25–55 éves női célközönségnek?
3. **Terhesség tervezése**: szemaglutid ≥ 2 hónap, tirzepatid ≥ 1 hónap leállítás előírt; liraglutid és dulaglutid esetén „terhesség tervezésekor leállítani”. Egységes tanácsot adjunk (pl. mindenhol 2 hónap), vagy készítményenként?
4. **Off-label Ozempic fogyásra**: a magyar gyakorlatban előfordul (olcsóbb a Wegovynál). Említse az oldal, hogy ez off-label és a T2DM-támogatás fogyásra nem jár, vagy hallgasson róla?
5. **Wegovy tabletta és 7,2 mg toll magyar bevezetése**: van-e a doktornőnek információja Novo Nordisk Hungária bevezetési dátumról, árról?
6. **Rybelsus új generáció (1,5/4/9 mg)**: a régi 3/7/14 mg kifutása – érdemes mindkettőt feltüntetni?
7. **Orforglipron**: ha a CHMP 2026. október 15-én pozitív véleményt ad, frissítsük a pipeline-státuszt; EB-határozat ~2026. december.
8. **Ár-frissítés gyakorisága**: a NEAK-lista havonta változik, a szabadáras termékek ára patikánként. Javasolt havi ellenőrzés az `asOf` mezők frissítésével.
9. **Liraglutid visszahízás számai**: szükség van-e a SCALE gyógyszermentes szakaszainak pontos számaira (teljes közlemény kell), vagy elég a kvalitatív állítás?
10. **SELECT/LEADER/REWIND alkalmazhatósága**: mindhárom idősebb, szívbeteg/magas kockázatú populáción készült. Az oldal ezt jelzi; elég-e ennyi, vagy külön doboz kell „mit jelent ez egy 35 éves egészséges nőnek”?

## 7. Forrásjegyzék (hozzáférés: 2026-10-14)

A teljes, gép által olvasható lista a `clinical.js` `sources` tömbjében van (PubMed-rekordok, EMA SmPC-k, EMA/EB szabályozói dokumentumok, NEAK-listák, PHARMINDEX, PatikaRadar, gyógyszertári webáruházak, OGYÉI). Másodlagos, csak háttérként használt források: akciokozpont.hu (2025-12-11), economx.hu (2023-09-18), helloregimen.com (2026-05-23), fitnessvilag.hu (2023), hvg.hu / vg.hu hírek a Wegovy tablettáról.
