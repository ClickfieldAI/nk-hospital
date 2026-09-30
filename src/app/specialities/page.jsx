'use client'
import Link from 'next/link'
import TopBarDark from '@/components/layout/TopBarDark'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { slugMap } from '@/data/specialitiesData'
import { IconRender } from '@/components/SpecialtyIcon'
import { useLanguage } from '@/context/LanguageContext'

const specialities = [
  { icon: 'ph ph-heartbeat', name: 'Cardiology' },
  { icon: 'svg:intestine', name: 'Medical Gastroenterology' },
  { icon: 'svg:scalpel', name: 'Surgical Gastroenterology' },
  { icon: 'ph ph-dna', name: 'Medical Oncology' },
  { icon: 'ph ph-bandaids', name: 'Surgical Oncology' },
  { icon: 'ph ph-brain', name: 'Neurology' },
  { icon: 'ph ph-knife', name: 'Neurosurgery' },
  { icon: 'ph ph-ear', name: 'ENT' },
  { icon: 'ph ph-bone', name: 'Orthopedics' },
  { icon: 'ph ph-baby', name: 'Pediatrics' },
  { icon: 'ph ph-eye', name: 'Ophthalmology' },
  { icon: 'ph ph-person', name: 'Dermatology' },
  { icon: 'ph ph-funnel', name: 'Urology' },
  { icon: 'svg:kidney', name: 'Nephrology' },
  { icon: 'svg:lungs', name: 'Pulmonology' },
  { icon: 'ph ph-thermometer', name: 'Endocrinology' },
  { icon: 'ph ph-hand', name: 'Rheumatology' },
  { icon: 'ph ph-users', name: 'Psychiatry' },
  { icon: 'ph ph-gender-female', name: 'Gynecology' },
  { icon: 'ph ph-stethoscope', name: 'General Medicine' },
  { icon: 'ph ph-first-aid-kit', name: 'General Surgery' },
  { icon: 'ph ph-person-arms-spread', name: 'Plastic Surgery' },
  { icon: 'ph ph-activity', name: 'Vascular Surgery' },
  { icon: 'ph ph-siren', name: 'Critical Care Medicine' },
  { icon: 'ph ph-ambulance', name: 'Emergency Medicine' },
  { icon: 'ph ph-tooth', name: 'Dentistry' },
]

const specialtiesFaqs = [
  {
    q: 'What medical specialties are available at NK Hospital?',
    a: 'NK Hospital brings together comprehensive care in multiple specialties and sub-specialties such as gastroenterology, orthopedics, urology, nephrology, cardiology, gynecology, general medicine, dental care, and more. This allows patients to access care for a wide range of health concerns under one roof.',
  },
  {
    q: 'How do I choose the right specialty for my symptoms?',
    a: 'Choosing the right specialty depends on your symptoms, and if you are unsure which specialist to consult, you can start with a General Medicine consultation at NK Hospital, Kalaburagi. A General Medicine specialist can evaluate your symptoms, medical history, and overall health and guide you to the appropriate specialist or department. This helps ensure that you receive the right evaluation and care without having to determine the correct specialty on your own. Book a consultation at NK Hospital to get started with the right medical care.',
  },
  {
    q: 'Which specialty should I consult for stomach and digestive problems?',
    a: 'For concerns related to digestion, the stomach, or bowel movements, a gastroenterologist is the appropriate specialist to consult. They can assess your symptoms and determine whether further evaluation or treatment is needed.',
  },
  {
    q: 'Which doctor should I consult for bone and joint problems?',
    a: 'An orthopedic doctor can help you with concerns involving bones, joints, muscles, and movement. Persistent pain, stiffness, swelling, or difficulty moving a joint may require an orthopedic evaluation.',
  },
  {
    q: 'Which specialty treats kidney and urinary problems?',
    a: 'Kidney and urinary concerns may be managed by either a nephrologist or urologist, depending on the problem. Nephrologists focus mainly on kidney function and medical kidney conditions, while urologists manage the urinary system and related surgical conditions.',
  },
  {
    q: 'Can I consult a specialist directly at NK Hospital?',
    a: "Yes, you can consult a specialist directly at NK Hospital based on your healthcare needs. You can book an appointment with the relevant specialist or department through the hospital's appointment channels. The hospital team can also help direct you to the relevant department if you are uncertain.",
  },
  {
    q: 'How can I book an appointment with a specialist at NK Hospital?',
    a: 'You can book an appointment with a specialist at NK Hospital, Kalaburagi by contacting the hospital directly through the available appointment or enquiry channels. When booking, provide your preferred specialty, doctor (if known), and a brief description of your symptoms or healthcare requirement. The hospital team can help you identify the appropriate specialist and provide available appointment timings. For urgent medical concerns, seek immediate medical attention rather than waiting for a routine appointment.',
  },
]

export default function Specialities() {
  const { t } = useLanguage()
  const specNames = t('spec_names') || {}

  return (
    <div className="antialiased text-gray-800 bg-white">
      <TopBarDark />
      <Navbar />

      <div className="text-white py-12 text-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #002247, #1a3a6b)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">{t('spec_page_heading')}</h1>
          <div className="text-xs text-blue-200">
            <Link href="/" className="hover:text-white">{t('common_home')}</Link> / <span className="text-white">{t('spec_page_heading')}</span>
          </div>
        </div>
      </div>

      <main className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a3a6b' }}>{t('spec_page_domains')}</h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">{t('spec_page_sub')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {specialities.map(({ icon, name }) => {
              const slug = slugMap[name]
              const hasPage = !!slug
              const displayName = specNames[name] || name
              const content = (
                <>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[#1a3a6b] transition-colors shrink-0 ${hasPage ? 'bg-blue-50 group-hover:bg-[#1a3a6b] group-hover:text-white' : 'bg-gray-50'}`}>
                    <IconRender icon={icon} className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-gray-800 leading-snug block">{displayName}</span>
                    {hasPage && <span className="text-[10px] text-[#1a3a6b] font-semibold">{t('spec_page_view_details')}</span>}
                  </div>
                </>
              )
              return hasPage ? (
                <Link key={name} href={`/specialities/${slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:border-[#1a3a6b] hover:shadow-md transition-all group">
                  {content}
                </Link>
              ) : (
                <div key={name} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                  {content}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#1a3a6b' }}>{t('spec_page_em_heading')}</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed max-w-4xl">
              <p>{t('spec_page_em_p1')}</p>
              <p>{t('spec_page_em_p2')}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-[1920px] mx-auto px-4 lg:px-16 2xl:px-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#1a3a6b' }}>{t('spec_page_faq_heading')}</h2>
            <div className="space-y-4">
              {specialtiesFaqs.map(({ q, a }, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold mb-2" style={{ color: '#1a3a6b' }}>Q{i + 1}. {q}</h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
