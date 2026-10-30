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
  'ent': {
    label: 'ENT',
    specialty: 'Otolaryngologic',
    title: 'Best ENT Hospital in Kalaburagi | NK Hospital',
    description: 'Consult expert ENT specialists at NK Hospital, Kalaburagi for ear, nose, throat, sinus, hearing, and voice-related problems.',
  },
  'neurosurgery': {
    label: 'Neurosurgery',
    specialty: 'Neurological',
    title: 'Best Neurosurgery Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert neurosurgical care in Kalaburagi for brain, spine, and nerve conditions including head injuries and disc problems.',
  },
  'psychiatry': {
    label: 'Psychiatry',
    specialty: null,
    title: 'Best Psychiatrist in Kalaburagi | NK Hospital',
    description: 'Consult experienced psychiatrists at NK Hospital, Kalaburagi for depression, anxiety, stress, sleep problems, and other mental health conditions.',
  },
  'vascular-surgery': {
    label: 'Vascular Surgery',
    specialty: 'Vascular',
    title: 'Best Vascular Surgery Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert vascular and endovascular surgery in Kalaburagi for varicose veins, blocked arteries, diabetic foot, and dialysis access.',
  },
  'dentistry': {
    label: 'Dentistry',
    specialty: 'Dental',
    title: 'Best Dental Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers comprehensive dental care in Kalaburagi including check-ups, fillings, RCT, implants, and oral surgery.',
  },
  'urology': {
    label: 'Urology',
    specialty: 'Urologic',
    title: 'Best Urologist in Kalaburagi | NK Hospital',
    description: 'Consult expert urologists at NK Hospital, Kalaburagi for kidney stones, prostate problems, urinary infections, and other urological conditions.',
  },
  'cardiology': {
    label: 'Cardiology',
    specialty: 'Cardiovascular',
    title: 'Best Cardiology Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert cardiology care in Kalaburagi with ECG, 2D Echo, and an on-site Cath Lab for comprehensive heart care.',
  },
  'general-surgery': {
    label: 'General Surgery',
    specialty: 'Surgical',
    title: 'Best General Surgery Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert general surgical care in Kalaburagi for hernias, gallbladder stones, appendicitis, piles, and emergency surgical conditions.',
  },
  'plastic-surgery': {
    label: 'Plastic Surgery',
    specialty: 'Plastic Surgery',
    title: 'Best Plastic Surgery Hospital in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert plastic and reconstructive surgery in Kalaburagi for burns, wounds, scars, and soft tissue injuries.',
  },
  'rheumatology': {
    label: 'Rheumatology',
    specialty: 'Rheumatologic',
    title: 'Best Rheumatologist in Kalaburagi | NK Hospital',
    description: 'Consult expert rheumatologists at NK Hospital, Kalaburagi for rheumatoid arthritis, gout, lupus, and other autoimmune and joint conditions.',
  },
  'surgical-oncology': {
    label: 'Surgical Oncology',
    specialty: 'Oncologic',
    title: 'Best Surgical Oncologist in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers expert surgical oncology care in Kalaburagi for breast, GI, thyroid, and other solid tumour surgeries.',
  },
  'emergency-medicine': {
    label: 'Emergency Medicine',
    specialty: 'Emergency',
    title: '24/7 Emergency Care in Kalaburagi | NK Hospital',
    description: 'NK Hospital provides round-the-clock emergency medicine care in Kalaburagi for trauma, cardiac, respiratory, and other urgent medical conditions.',
  },
  'nephrology': {
    label: 'Nephrology',
    specialty: 'Nephrologic',
    title: 'Best Nephrologist in Kalaburagi | NK Hospital',
    description: 'Consult expert nephrologists at NK Hospital, Kalaburagi for chronic kidney disease, dialysis, and other kidney-related conditions.',
  },
  'neurology': {
    label: 'Neurology',
    specialty: 'Neurological',
    title: 'Best Neurologist in Kalaburagi | NK Hospital',
    description: 'Consult expert neurologists at NK Hospital, Kalaburagi for stroke, epilepsy, migraine, Parkinson’s disease, and other neurological conditions.',
  },
  'pediatrics': {
    label: 'Pediatrics',
    specialty: 'Pediatric',
    title: 'Best Pediatrician in Kalaburagi | NK Hospital',
    description: 'NK Hospital offers comprehensive pediatric care in Kalaburagi for infants, children, and teenagers, including growth, vaccination, and illness care.',
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
  'ent': [
    faq('What does an ENT specialist treat?', 'An ENT specialist treats conditions affecting the ear, nose and throat, including hearing problems, sinus problems, throat infections and other related conditions.'),
    faq('When should I consult an ENT doctor for hearing problems?', 'If you notice reduced hearing, difficulty understanding speech, ringing in the ears or repeated ear infections, an ENT evaluation can help identify the cause.'),
    faq('What causes frequent nasal blockage?', 'Nasal blockage can occur due to allergies, sinus problems, a deviated nasal septum, nasal polyps or other conditions. The cause can be identified through an ENT evaluation.'),
    faq('Is every sinus problem treated with surgery?', 'No. Many sinus problems can be managed with medicines and other treatments. Surgery may be considered in selected cases when required.'),
  ],
  'neurosurgery': [
    faq('What does a neurosurgeon treat?', 'A neurosurgeon deals with conditions affecting the brain, spinal cord and nerves that may require surgical or neurosurgical management.'),
    faq('Does every brain or spine problem require surgery?', "No. Some conditions can be managed with medicines, observation, physiotherapy or other treatments. An operation may be recommended when the patient's medical condition makes it necessary."),
    faq('When should a head injury be taken seriously?', 'Loss of consciousness, repeated vomiting, seizures, severe headache, confusion, weakness or unusual sleepiness after a head injury require immediate medical evaluation.'),
    faq('Can back pain require a neurosurgical consultation?', 'Most back pain does not require surgery. However, persistent pain associated with weakness, numbness, difficulty walking or other neurological symptoms may require further evaluation.'),
  ],
  'psychiatry': [
    faq('What does a psychiatrist treat?', "A psychiatrist diagnoses and treats mental health conditions that affect a person's thoughts, emotions, behaviour and daily functioning."),
    faq('Does seeing a psychiatrist mean that a person has a serious mental illness?', 'No. People seek psychiatric help for many different reasons, including stress, anxiety, depression, sleep problems, relationship difficulties and other concerns.'),
    faq('Can depression and anxiety be treated?', "Yes. Treatment may include counselling, therapy, medicines or a combination of these, depending on the person's condition."),
    faq('When should immediate psychiatric help be sought?', 'Urgent psychiatric care is necessary when someone expresses suicidal or self-injurious thoughts, shows extreme confusion or restlessness, develops sudden behavioural changes, or poses a risk to themselves or others.'),
  ],
  'vascular-surgery': [
    faq('What does a vascular surgeon treat?', 'A vascular surgeon treats diseases affecting blood vessels, mainly arteries and veins.'),
    faq('Are varicose veins treated only with surgery?', 'No. Treatment depends on the severity. Medicines, lifestyle measures and procedures such as laser treatment may be considered when required.'),
    faq('What is peripheral arterial disease?', 'It is a condition in which blood flow to the limbs is reduced, usually because of narrowing or blockage of the arteries.'),
    faq('What symptoms should not be ignored?', 'Sudden severe limb pain, coldness, colour change, loss of sensation or a rapidly worsening wound should be assessed urgently.'),
  ],
  'dentistry': [
    faq('Is dental treatment always painful?', 'Not necessarily. Modern dental care focuses on making procedures as comfortable and reassuring as possible.'),
    faq('How often should I visit a dentist?', 'Regular check-ups are recommended, with the frequency depending on your oral health needs.'),
    faq('Is scaling safe?', 'Yes, scaling is a common dental procedure used to remove plaque and calculus.'),
    faq('When should I consult a dentist?', 'Consult a dentist if you have persistent pain, bleeding gums, swelling, or any dental concern.'),
  ],
  'urology': [
    faq('What does a urologist treat?', 'A urologist treats conditions affecting the kidneys, ureters, urinary bladder, urethra and the male reproductive system.'),
    faq('What are symptoms that indicate kidney stones?', 'Kidney stones may cause pain in the side or back, pain while passing urine, blood in urine, nausea or vomiting. Some stones may not cause symptoms until they move or block the urinary tract.'),
    faq('Does every kidney stone require surgery?', "No. Treatment is individualized according to the stone size, position, and the patient's overall clinical condition. Some stones may pass naturally or be managed with medicines, while others may require a procedure."),
    faq('How can kidney stones be prevented?', 'Maintaining adequate hydration, following suitable dietary practices, and addressing factors that contribute to stone formation may help lower the likelihood of future stones.'),
  ],
  'cardiology': [
    faq('What are the common signs of heart problems?', 'Chest pain, breathlessness, palpitations, dizziness, fainting and unusual tiredness can be symptoms of a heart problem. The symptoms may vary depending on the individual and the underlying cause.'),
    faq('What is a 2D Echo?', '2D Echocardiography is an ultrasound test that visualizes the heart and assesses its functioning. It helps the doctor check the heart chambers, valves and pumping function.'),
    faq('Does the hospital have a Cath Lab?', 'Yes. The hospital has a Cath Lab within the premises. Patients requiring cardiac procedures can be evaluated and managed by the concerned cardiac team.'),
    faq('Is every chest pain caused by a heart problem?', 'No. Chest pain can occur due to different reasons. However, chest pain should be properly evaluated, especially when there is a possibility of a cardiac problem.'),
  ],
  'general-surgery': [
    faq('What does a general surgeon treat?', 'A general surgeon treats a variety of conditions that may require surgical management, including hernias, appendicitis, gallbladder diseases, piles, breast lumps, thyroid swellings and soft tissue swellings.'),
    faq('Does every surgical condition require an operation?', "No. Some conditions can be treated with medicines and observation. Surgery is advised only when it is considered necessary based on the patient's condition."),
    faq('What is a hernia?', 'A hernia develops when an organ or tissue pushes through a weak area of the muscle or connective tissue that normally supports it. It may present as a noticeable bulge, commonly in the abdomen or groin.'),
    faq('Can a general surgeon treat emergency conditions?', 'Yes. General surgeons commonly manage emergency conditions such as appendicitis, intestinal obstruction, abscesses, traumatic injuries and other urgent surgical problems.'),
  ],
  'plastic-surgery': [
    faq('What does a plastic surgeon treat?', 'A plastic surgeon treats conditions involving the skin and soft tissues and performs reconstructive procedures when tissue has been damaged or lost.'),
    faq('Does plastic surgery serve purposes beyond improving appearance?', 'No. Plastic surgery also includes reconstructive surgery, which helps restore the function or appearance of an area affected by injury, burns, disease or previous surgery.'),
    faq('What is reconstructive surgery?', 'Reconstructive surgery is performed to repair or restore an area of the body that has been damaged because of injury, burns, disease or surgery.'),
    faq('What is a skin graft?', 'A skin graft is a piece of healthy skin taken from one area of the body and placed over an area where skin has been lost or damaged. It may be used for certain wounds and burns.'),
  ],
  'rheumatology': [
    faq('What does a rheumatologist treat?', 'A rheumatologist treats diseases affecting the joints, muscles and connective tissues, as well as several autoimmune and inflammatory conditions.'),
    faq('What are common symptoms of rheumatoid arthritis?', 'Joint aches, puffiness and limited flexibility are frequently reported symptoms. The hands, feet and wrists are often affected, and stiffness may be more noticeable in the morning.'),
    faq('What is gout?', 'Gout is a type of inflammatory arthritis that can cause sudden, severe pain, swelling and tenderness in a joint. The big toe is commonly affected, although other joints can also be involved.'),
    faq('What is an autoimmune disease?', "An autoimmune disorder develops when the immune system wrongly targets the body's healthy tissues. Rheumatoid arthritis and lupus are two examples of these disorders."),
  ],
  'surgical-oncology': [
    faq('What does a surgical oncologist do?', "A surgical oncologist has specialized expertise in managing cancer through surgery. They assess whether surgery is required and plan the appropriate surgical treatment based on the patient's condition."),
    faq('Does every cancer patient require surgery?', 'No. Surgery is not required for every cancer patient. Treatment depends on the type, stage and location of the cancer and may include surgery, medicines, radiation or a combination of treatments.'),
    faq('Can cancer surgery be used alongside other treatment methods?', 'Yes. Depending on the type and stage of cancer, surgery may be combined with chemotherapy, radiation therapy, targeted therapy or other treatments.'),
  ],
  'emergency-medicine': [
    faq('What is Emergency Medicine?', 'Emergency Medicine deals with the immediate assessment and treatment of sudden illnesses, injuries and other urgent medical conditions.'),
    faq('Do emergency patients get treated on a first-come, first-served basis?', 'Not always. Patients are assessed according to the seriousness of their condition. Life-threatening cases are given priority.'),
    faq('What is triage?', 'Triage is the process of quickly assessing patients and deciding how urgently they need medical attention.'),
    faq('When does chest pain require immediate emergency medical attention?', 'Sudden or severe chest pain, especially when associated with sweating, breathing difficulty, nausea or pain spreading to the arm or jaw, needs urgent medical assessment.'),
  ],
  'nephrology': [
    faq('What does a nephrologist treat?', 'A nephrologist specializes in kidney disorders and conditions that interfere with normal kidney function, including chronic kidney disease, sudden kidney injury, and diabetes-associated kidney damage.'),
    faq('What symptoms may indicate kidney disease?', 'Kidney disorders may cause swelling in the face or feet, altered urination, lower urine volume, blood or protein in urine, fatigue and elevated blood pressure.'),
    faq('What is dialysis?', 'Dialysis helps clear waste products and extra fluid from the body when the kidneys can no longer perform these functions adequately. Haemodialysis is a widely used type of dialysis treatment.'),
    faq('Does every kidney patient require dialysis?', "No. Dialysis is required only in certain patients depending on the severity of kidney failure and the patient's clinical condition."),
  ],
  'neurology': [
    faq('What does a neurologist treat?', 'A neurologist diagnoses and manages conditions involving the brain, spinal cord, nerves, and muscles.'),
    faq('What is a stroke?', 'A stroke occurs when the blood supply to part of the brain is interrupted or when there is bleeding in the brain. It requires immediate medical attention.'),
    faq('Which diagnostic tests might a neurologist suggest?', "Based on the patient's symptoms, the specialist may recommend MRI, CT scans, EEG, nerve conduction tests, blood tests, or additional diagnostic investigations."),
    faq('Can neurological conditions be treated?', 'Many neurological conditions can be managed with medicines, rehabilitation, lifestyle changes and other treatments. Treatment depends on the specific condition.'),
  ],
  'pediatrics': [
    faq('What does a pediatrician treat?', 'A pediatrician provides medical care for infants, children and adolescents and treats a wide range of childhood illnesses and health problems.'),
    faq('How important are vaccinations for children?', 'Vaccination helps protect children against several serious and preventable infections. Parents should follow the vaccination schedule advised by their pediatrician.'),
    faq('Does every childhood illness require antibiotics?', 'No. Many childhood infections are caused by viruses and do not require antibiotics. Antibiotics should be given only when advised by a doctor.'),
    faq("When should parents be concerned about a child's development?", 'If a child is not reaching expected developmental milestones, has difficulty with speech or movement, or shows a noticeable change in behaviour or development, parents should discuss it with a pediatrician.'),
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
