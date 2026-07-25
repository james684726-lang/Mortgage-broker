import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is pre-qualification vs. pre-approval?",
      answer:
        "Pre-qualification is an initial estimate based on information you provide. Pre-approval is a more thorough process involving credit verification and documentation review. Pre-approval strengthens your offer when making an offer on a home.",
    },
    {
      question: "How much can I borrow?",
      answer:
        "Your borrowing capacity depends on your income, credit score, debt-to-income ratio, and assets. Most lenders allow you to borrow 2.5-3.5 times your gross annual income, though this varies by loan program.",
    },
    {
      question: "What is PMI?",
      answer:
        "Private Mortgage Insurance (PMI) protects the lender if you default on your loan. It&apos;s typically required if your down payment is less than 20%. PMI can be removed once you reach 20% equity.",
    },
    {
      question: "Can I get a mortgage with bad credit?",
      answer:
        "Yes! We work with borrowers of all credit levels. FHA loans accept credit scores as low as 580. Our team can help you find the best program for your situation.",
    },
    {
      question: "How long does the approval process take?",
      answer:
        "Pre-approval typically takes 24-48 hours. Full closing usually takes 30-45 days from application submission. Our streamlined process helps us work faster than competitors.",
    },
    {
      question: "What are closing costs?",
      answer:
        "Closing costs are fees for processing your loan, including appraisal fees, title insurance, and taxes. These typically range from 2-5% of your purchase price.",
    },
    {
      question: "Can I lock in my interest rate?",
      answer:
        "Yes! You can lock your rate for up to 60 days while you shop for your home. This protects you from rate increases during the application process.",
    },
    {
      question: "What if my application is denied?",
      answer:
        "If denied, we provide specific reasons and recommendations for improvement. We may suggest alternative programs or ways to strengthen your application.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about buying a home and our services."
          cta={{ text: "Get Pre-Qualified", href: "/get-started" }}
        />

        <FAQSection
          title="Home Buying FAQs"
          subtitle="Get answers to your most pressing questions."
          faqs={faqs}
        />

        <CTASection
          title="Still Have Questions?"
          subtitle="Our loan officers are available 24/7 to answer your questions."
          ctaText="Contact Us"
          ctaHref="/about/contact"
          secondaryText="Start Application"
          secondaryHref="/get-started"
        />
      </main>
    </>
  );
}
