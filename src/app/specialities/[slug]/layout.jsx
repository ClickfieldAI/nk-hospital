import { pageMeta, breadcrumbLd, medicalPageLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

const SPECIALTY_META = {
  'medical-gastroenterology': {
    label: 'Medical Gastroenterology',
    specialty: 'Gastroenterologic',
    title: 'Best Medical Gastroenterology Hospital in Kalaburagi',
    description: 'Get expert medical gastroenterology care at NK Hospital, Kalaburagi for digestive, liver, pancreas, and GI disorders with advanced diagnosis and treatment.',
  },
  'surgical-gastroenterology': {
    label: 'Surgical Gastroenterology',
    specialty: 'Gastroenterologic',
    title: 'Surgical Gastro Center in Kalaburagi | Surgical Gastro Specialist',
    description: 'NK Hospital offers advanced surgical gastroenterology care in Kalaburagi for GI, liver, pancreas, and colorectal conditions with expert surgeons.',
  },
  'orthopedics': {
    label: 'Orthopedics',
    specialty: 'Musculoskeletal',
    title: 'Best Orthopedic Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert orthopaedic care for fractures, arthritis, joint replacement, spine disorders, and sports injuries in Kalaburagi.',
  },
  'general-medicine': {
    label: 'General Medicine',
    specialty: 'PrimaryCare',
    title: 'General Medicine Hospital in Kalaburagi | NK Hospital',
    description: 'Consult experienced physicians at NK Hospital for diabetes, hypertension, infections, fever, and preventive healthcare in Kalaburagi.',
  },
  'pulmonology': {
    label: 'Pulmonology',
    specialty: 'Pulmonary',
    title: 'Best Pulmonology Hospital in Kalaburagi | NK Hospital',
    description: 'Expert pulmonology care at NK Hospital, Kalaburagi for asthma, COPD, respiratory infections, and lung disorders with advanced diagnosis and treatment.',
  },
  'gynecology': {
    label: 'Gynecology',
    specialty: 'Gynecologic',
    title: 'Best Gynecologist in Kalaburagi | NK Hospital',
    description: "Consult experienced gynecologists at NK Hospital, Kalaburagi for menstrual problems, PCOS, fibroids, infertility, and women's health concerns.",
  },
  'critical-care-medicine': {
    label: 'Critical Care Medicine',
    specialty: 'Emergency',
    title: 'Best Critical Care & ICU Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers advanced critical care and ICU services in Kalaburagi with expert intensivists for severely ill and critically injured patients.',
  },
  'endocrinology': {
    label: 'Endocrinology',
    specialty: 'Endocrine',
    title: 'Best Endocrinologist in Kalaburagi | NK Hospital',
    description: 'Consult expert endocrinologists at NK Hospital, Kalaburagi for diabetes, thyroid disorders, PCOS, obesity, and other hormonal conditions.',
  },
  'medical-oncology': {
    label: 'Medical Oncology',
    specialty: 'Oncologic',
    title: 'Best Medical Oncologist in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert medical oncology care in Kalaburagi with chemotherapy, targeted therapy, and immunotherapy for various types of cancer.',
  },
}

const FALLBACK = {
  label: 'Specialities',
  specialty: null,
  title: 'Medical Specialities in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
}

// FAQPage structured data — makes selected specialty pages eligible for
// FAQ rich results in Google search. Keyed by specialty slug.
const faq = (q, a) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: { '@type': 'Answer', text: a },
})

const SPECIALTY_FAQ_LD = {
  'medical-gastroenterology': [
    faq('Is endoscopy or colonoscopy commonly required?', 'No, only selected patients need endoscopy depending on their symptoms.'),
    faq('What is the recovery time after Endoscopy?', 'Endoscopy is a day care procedure. Usually patient can go home within half an hour after consultation.'),
    faq('Is endoscopy painful ?', "No. It is done with local anesthesia. So patient doesn't feel any pain . Some anxious patients need iv anesthesia and can get scopy safely with comfort."),
  ],
  'surgical-gastroenterology': [
    faq('Is surgery always required for gastrointestinal problems?', 'No, many digestive conditions can initially be managed with medicines, diet changes, or observation. Surgery is advised only when necessary.'),
    faq('Are laparoscopic surgeries safe?', 'Yes, laparoscopic or minimally invasive surgeries are commonly performed and are generally safe, with benefits such as less pain and faster recovery.'),
    faq('How long is the recovery period after surgery?', 'Recovery depends on the type of surgery and the patient’s condition. Many laparoscopic procedures allow patients to recover faster and return to normal activities earlier.'),
    faq('When should I consult a Surgical Gastroenterologist?', 'You should consult a gastro specialist if you have these persistent digestive symptoms like severe abdominal pain, recurrent gastrointestinal issues, or if another doctor has advised surgical evaluation.'),
  ],
  'orthopedics': [
    faq('Is surgery always required?', 'No. Many conditions can be treated with medications, physiotherapy, and rehabilitation.'),
    faq('What is arthroscopy?', 'A minimally invasive (keyhole) procedure used to diagnose and treat joint problems.'),
    faq('When is joint replacement recommended?', 'When severe arthritis causes pain and limits daily activities despite conservative treatment.'),
    faq('How long is recovery after surgery?', 'Recovery varies depending on the procedure, but rehabilitation plays a key role in achieving the best results.'),
  ],
  'general-medicine': [
    faq('What conditions does a General Medicine doctor treat?', 'They treat a wide range of conditions including diabetes, hypertension, infections, thyroid disorders, and heart-related issues.'),
    faq('When should I consult a general physician?', 'You should consult when you have persistent symptoms like fever, fatigue, pain, breathing issues, or uncontrolled chronic diseases.'),
    faq('Is treatment in General Medicine long-term?', 'It depends on the condition. Chronic diseases like diabetes and hypertension require long-term management.'),
    faq('Do I need tests before starting treatment?', 'In many cases, basic blood tests, ECG, or imaging may be recommended for accurate diagnosis.'),
  ],
  'gynecology': [
    faq('When should I see a gynecologist?', "You can consult a gynecologist for menstrual problems, pelvic pain, abnormal discharge, infections, PCOS, fertility concerns, menopause-related symptoms or other women's health problems."),
    faq('Are irregular periods always a sign of a serious problem?', 'Not always. Irregular periods can have several causes, including hormonal changes, PCOS, stress, changes in weight and other health conditions. If the problem continues, it is better to have it evaluated.'),
    faq('What can cause heavy periods?', 'Heavy periods can occur due to several reasons, including fibroids, hormonal problems, certain medications and other gynecological conditions. The cause can be identified through proper evaluation.'),
    faq('What is PCOS?', 'PCOS is a hormonal condition that can affect periods, ovulation and fertility. It may also be associated with acne, increased hair growth and weight-related problems.'),
  ],
  'critical-care-medicine': [
    faq('What is Critical Care Medicine?', 'Critical Care Medicine deals with the treatment and monitoring of patients who are seriously ill and need intensive medical care.'),
    faq('Does every seriously ill patient need ICU care?', "Not always. ICU admission depends on the patient's condition, the level of monitoring required and the type of medical support needed."),
    faq('What is a ventilator?', 'A ventilator is a machine that helps a patient breathe when they are unable to breathe adequately on their own.'),
    faq('What is sepsis?', "Sepsis is a serious condition in which the body's response to an infection can affect important organs and require urgent treatment."),
  ],
  'endocrinology': [
    faq('What does an endocrinologist treat?', 'An endocrinologist treats problems related to hormones. Common conditions include diabetes, thyroid problems, PCOS, obesity and other hormonal disorders.'),
    faq('When should I see an endocrinologist for diabetes?', 'You may need an endocrinology consultation if your blood sugar remains high despite treatment, if diabetes is difficult to control, or if you have other health problems related to diabetes.'),
    faq('Can diabetes be controlled with medicines alone?', 'Treatment is different for every patient. Medicines may be needed, along with appropriate food habits, physical activity, weight management and regular monitoring.'),
    faq('Can thyroid problems be treated?', 'Yes. Many thyroid problems can be treated with medicines and regular monitoring. The treatment depends on the type of thyroid condition.'),
  ],
  'medical-oncology': [
    faq('What does a medical oncologist do?', 'A medical oncologist deals mainly with the medical treatment of cancer. Depending on the type and stage of cancer, treatment may include chemotherapy, targeted therapy, immunotherapy or hormonal treatment.'),
    faq('Is chemotherapy given to every cancer patient?', "No. Treatment depends on the type and stage of cancer and the patient's overall condition. The treating oncologist decides whether chemotherapy or another form of treatment is required."),
    faq('What is chemotherapy?', "Chemotherapy involves the use of anti-cancer medicines to target cancer cells, helping to destroy them or slow their growth. The treatment may be used as a standalone approach or combined with other therapies, based on the patient's individual condition and treatment needs."),
    faq('Does cancer treatment cause side effects?', 'Cancer treatment can cause side effects, but they vary depending on the treatment and the individual patient. The medical team monitors patients during treatment and manages side effects when they occur.'),
  ],
}

function faqPageLd(mainEntity) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  return pageMeta({
    title: meta.title,
    description: meta.description,
    path: `/specialities/${slug}`,
  })
}

export default async function SpecialityLayout({ children, params }) {
  const { slug } = await params
  const meta = SPECIALTY_META[slug] || FALLBACK
  const path = `/specialities/${slug}`
  const faqEntities = SPECIALTY_FAQ_LD[slug]

  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Specialities', path: '/specialities' },
        { name: meta.label, path },
      ])} />
      <JsonLd data={medicalPageLd({
        name: meta.title,
        description: meta.description,
        path,
        specialty: meta.specialty,
      })} />
      {faqEntities && <JsonLd data={faqPageLd(faqEntities)} />}
      {children}
    </>
  )
}
