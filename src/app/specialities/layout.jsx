import { pageMeta, breadcrumbLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMeta({
  title: 'Multispeciality Healthcare Services in Kalaburagi | NK Hospital',
  description: 'Explore the medical specialties at NK Hospital, Kalaburagi, offering expert care across gastroenterology, nephrology, urology, orthopedics, and more.',
  path: '/specialities',
})

// FAQPage structured data — makes /specialities eligible for FAQ rich
// results in Google search. Keep in sync with specialtiesFaqs in
// src/app/specialities/page.jsx.
const faq = (q, a) => ({
  '@type': 'Question',
  name: q,
  acceptedAnswer: { '@type': 'Answer', text: a },
})

const SPECIALITIES_FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    faq(
      'What medical specialties are available at NK Hospital?',
      'NK Hospital brings together comprehensive care in multiple specialties and sub-specialties such as gastroenterology, orthopedics, urology, nephrology, cardiology, gynecology, general medicine, dental care, and more. This allows patients to access care for a wide range of health concerns under one roof.'
    ),
    faq(
      'How do I choose the right specialty for my symptoms?',
      'Choosing the right specialty depends on your symptoms, and if you are unsure which specialist to consult, you can start with a General Medicine consultation at NK Hospital, Kalaburagi. A General Medicine specialist can evaluate your symptoms, medical history, and overall health and guide you to the appropriate specialist or department.  This helps ensure that you receive the right evaluation and care without having to determine the correct specialty on your own. Book a consultation at NK Hospital to get started with the right medical care.'
    ),
    faq(
      'Which specialty should I consult for stomach and digestive problems?',
      'For concerns related to digestion, the stomach, or bowel movements, a gastroenterologist is the appropriate specialist to consult. They can assess your symptoms and determine whether further evaluation or treatment is needed.'
    ),
    faq(
      'Which doctor should I consult for bone and joint problems?',
      'An orthopedic doctor can help you with concerns involving bones, joints, muscles, and movement. Persistent pain, stiffness, swelling, or difficulty moving a joint may require an orthopedic evaluation.'
    ),
    faq(
      'Which specialty treats kidney and urinary problems?',
      'Kidney and urinary concerns may be managed by either a nephrologist or urologist, depending on the problem. Nephrologists focus mainly on kidney function and medical kidney conditions, while urologists manage the urinary system and related surgical conditions.'
    ),
    faq(
      'Can I consult a specialist directly at NK Hospital?',
      "Yes, you can consult a specialist directly at NK Hospital  based on your healthcare needs. You can book an appointment with the relevant specialist or department through the hospital's appointment channels. The hospital team can also help direct you to the relevant department if you are uncertain."
    ),
    faq(
      'How can I book an appointment with a specialist at NK Hospital?',
      'You can book an appointment with a specialist at NK Hospital, Kalaburagi by contacting the hospital directly through the available appointment or enquiry channels. When booking, provide your preferred specialty, doctor (if known), and a brief description of your symptoms or healthcare requirement. The hospital team can help you identify the appropriate specialist and provide available appointment timings. For urgent medical concerns, seek immediate medical attention rather than waiting for a routine appointment.'
    ),
  ],
}

export default function SpecialitiesLayout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Specialities', path: '/specialities' },
      ])} />
      <JsonLd data={SPECIALITIES_FAQ_LD} />
      {children}
    </>
  )
}
