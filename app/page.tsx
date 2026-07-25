
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { FAQSection } from '@/components/faq-section'
import { CTASection } from '@/components/cta-section'
import {
  Home,
  TrendingDown,
  Calculator,
  FileCheck,
  Zap,
  Users,
} from 'lucide-react'
import StatsSection from '@/components/stats-section'
import Info from '@/components/info'
import DashboardSection from '@/components/DashboardSection'
import MortgageCalculator from '@/components/MortgageCalculator'
import AmortizationSchedule from '@/components/AmortizationSchedule'
import MortgageDashboard from '@/components/ghrap'
import { FooterSection } from '@/components/FooterSection'

export default function HomePage() {
  const features = [
    {
      icon: Home,
      title: 'Find Your Perfect Home',
      description:
        'Explore our diverse range of mortgage programs designed to fit your budget and lifestyle.',
    },
    {
      icon: TrendingDown,
      title: 'Competitive Rates',
      description:
        'Lock in competitive rates with our transparent pricing and no hidden fees.',
    },
    {
      icon: Calculator,
      title: 'Smart Calculators',
      description:
        'Use our tools to calculate payments, affordability, and savings instantly.',
    },
    {
      icon: FileCheck,
      title: 'Easy Application',
      description:
        'Apply online in minutes with our simple and secure application process.',
    },
    {
      icon: Zap,
      title: 'Fast Approval',
      description:
        'Get approved quickly with our streamlined underwriting process.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description:
        'Our loan officers are here to guide you through every step of the process.',
    },
  ]

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '$10B+', label: 'Loans Funded' },
    { number: '24/7', label: 'Customer Support' },
    { number: '99%', label: 'Approval Rate' },
  ]

  const faqs = [
    {
      question: 'What types of mortgages do you offer?',
      answer:
        'We offer a variety of mortgage products including conventional loans, FHA loans, VA loans, and adjustable-rate mortgages. Each program is designed to meet different financial situations and goals.',
    },
    {
      question: 'How long does the approval process take?',
      answer:
        'Most applications are approved within 24-48 hours of submission. However, the full closing process typically takes 30-45 days depending on various factors.',
    },
    {
      question: 'What are the eligibility requirements?',
      answer:
        'Basic requirements include being at least 18 years old, a valid Social Security number, and proof of income. Specific requirements may vary based on the loan program you choose.',
    },
    {
      question: 'Do you offer refinancing options?',
      answer:
        'Yes! We offer competitive refinancing options to help you lower your monthly payments, switch loan types, or access your home equity.',
    },
    {
      question: 'What documents do I need to apply?',
      answer:
        'You&apos;ll need recent pay stubs, tax returns, bank statements, and proof of employment. Our loan officers will provide a complete checklist during the application.',
    },
    {
      question: 'Can I apply online?',
      answer:
        'Absolutely! Our online application is secure and can be completed in just a few minutes. You can also apply over the phone or visit a local branch.',
    },
  ]

  return (
    <>
      <main>
        <HeroSection
        />
        <StatsSection />
        <Info/>
        <DashboardSection/>
        <MortgageDashboard/>
        <FooterSection />

        


        {/* <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-12 text-center">
                How It Works
              </h2>

              <div className="space-y-8">
                {[
                  {
                    number: '01',
                    title: 'Get Pre-Qualified',
                    description:
                      'Complete our online form and get pre-qualified within minutes. No credit score impact.',
                  },
                  {
                    number: '02',
                    title: 'Explore Your Options',
                    description:
                      'Review different loan programs, rates, and terms that best fit your needs.',
                  },
                  {
                    number: '03',
                    title: 'Complete Application',
                    description:
                      'Submit your full application with required documents through our secure portal.',
                  },
                  {
                    number: '04',
                    title: 'Get Approved',
                    description:
                      'Our underwriting team reviews your application and sends you approval within 48 hours.',
                  },
                  {
                    number: '05',
                    title: 'Close Your Loan',
                    description:
                      'Sign final documents and get the keys to your new home. Closing typically takes 30-45 days.',
                  },
                ].map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-neutral-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* <FAQSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about mortgages and our services."
          faqs={faqs}
        /> */}

        {/* <CTASection
          title="Ready to Get Started?"
          subtitle="Join thousands of satisfied customers who found their dream home with LendPro."
          ctaText="Start Your Journey"
          ctaHref="/get-started"
          secondaryText="Schedule a Call"
          secondaryHref="/about/contact"
        /> */}
      </main>
    </>
  )
}
