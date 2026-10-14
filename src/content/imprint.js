// Impresszum / szolgáltatói adatok. A [szögletes zárójeles] mezőket élesítés előtt ki kell tölteni.
import { site } from './site.js'

export const imprint = {
  eyebrow: 'Jogi tájékoztató',
  title: 'Impresszum és szolgáltatói adatok',
  lead: 'Ki nyújtja a szolgáltatást, ki felel az orvosi tartalomért, és hová fordulhatsz panasszal.',
  rows: (p) => [
    ['Szolgáltató', p.name],
    ['Székhely', p.seat],
    ['Levelezési cím', p.mailingAddress],
    ['Cégjegyzékszám', p.companyRegNo],
    ['Adószám', p.taxNo],
    ['E-mail', site.contactEmail],
    ['Telefon', site.contactPhone],
    ['Működési engedély', `${p.licenceNo} (kiadó: ${p.licenceAuthority})`],
    ['Felelős orvos', `${p.doctorName}, ${p.doctorQualification}, pecsétszám: ${p.doctorSeal}`],
    ['Felelősségbiztosító', p.insurer],
    ['Tárhelyszolgáltató', p.hosting],
  ],
  sections: [
    {
      title: 'Panaszkezelés',
      body: 'Panaszodat szóban vagy írásban közölheted velünk (e-mail: [e-mail], postacím: [cím]). Írásbeli panaszra 30 napon belül érdemben válaszolunk; az egészségügyi ellátással kapcsolatos panaszt az Eütv. 29. §-a szerint legfeljebb 30 munkanapon belül írásban kivizsgáljuk.',
    },
    {
      title: 'Betegjogi képviselő',
      body: 'Az ellátással kapcsolatos panaszoddal az Országos Kórházi Főigazgatóság betegjogi képviselőjéhez is fordulhatsz: [területileg illetékes képviselő neve, elérhetősége – okfo.gov.hu].',
    },
    {
      title: 'Békéltető testület',
      body: 'Fogyasztói jogvita esetén a lakóhelyed szerint illetékes békéltető testülethez fordulhatsz. Budapesti Békéltető Testület: 1016 Budapest, Krisztina krt. 99., +36 1 488 2131, bekelteto.testulet@bkik.hu. A testületek listája: bekeltetes.hu.',
    },
    {
      title: 'Felügyeleti hatóságok',
      body: 'Egészségügy: a székhely szerinti vármegyei kormányhivatal népegészségügyi osztálya és a Nemzeti Népegészségügyi és Gyógyszerészeti Központ. Fogyasztóvédelem: a kormányhivatal fogyasztóvédelmi osztálya. Adatvédelem: Nemzeti Adatvédelmi és Információszabadság Hatóság (naih.hu).',
    },
  ],
}
