import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";
import { TrendingDown, Home, DollarSign, Zap } from "lucide-react";

export default function RefinancePage() {
  const features = [
    {
      icon: TrendingDown,
      title: "Lower Your Rate",
      description:
        "Take advantage of lower interest rates to reduce your monthly payments and save thousands.",
    },
    {
      icon: Home,
      title: "Tap Home Equity",
      description:
        "Access your home equity with a cash-out refinance to fund home improvements or other needs.",
    },
    {
      icon: DollarSign,
      title: "Shorter Loan Term",
      description:
        "Switch to a 15-year loan and build equity faster while saving on interest.",
    },
    {
      icon: Zap,
      title: "Fast Process",
      description:
        "Our streamlined refinancing process gets you approved quickly and closes in 30 days or less.",
    },
  ];

  return (
    <>
      <main>
        <HeroSection
          title="Ready to Refinance?"
          subtitle="Lower your monthly payments, access home equity, or switch to a better loan term."
          cta={{ text: "Get Your Quote", href: "/get-started" }}
          secondaryCta={{ text: "Calculate Savings", href: "/calculators" }}
        />

        <FeaturesSection
          title="Why Refinance?"
          subtitle="Explore the key benefits of refinancing your mortgage."
          features={features}
        />

        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container-custom max-w-4xl">
            <h2 className="section-title mb-12 text-center">
              Refinancing Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Home Equity",
                  description:
                    "You typically need at least 20% equity in your home to qualify for a refinance.",
                },
                {
                  title: "Credit Score",
                  description:
                    "A credit score of 620 or higher is generally required. Better scores get better rates.",
                },
                {
                  title: "Income Verification",
                  description:
                    "We&apos;ll verify your income and employment to ensure you can handle the new loan.",
                },
                {
                  title: "Property Appraisal",
                  description:
                    "We&apos;ll order an appraisal to determine your current home value and available equity.",
                },
              ].map((item, idx) => (
                <div key={idx} className="card">
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Check Your Refinance Eligibility"
          subtitle="Find out how much you could save with a LendPro refinance."
          ctaText="Get Started"
          ctaHref="/get-started"
          secondaryText="Contact Our Team"
          secondaryHref="/about/contact"
        />
      </main>
    </>
  );
}
