import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { Download, FileText } from "lucide-react";

export default function FormsPage() {
  const forms = [
    {
      name: "Loan Application",
      description: "Standard residential mortgage application form.",
      format: "PDF",
      size: "2.5 MB",
    },
    {
      name: "Financial Information Sheet",
      description: "Detailed financial information required for underwriting.",
      format: "PDF",
      size: "1.2 MB",
    },
    {
      name: "Employment Verification",
      description: "Form for employer verification of income and employment.",
      format: "PDF",
      size: "850 KB",
    },
    {
      name: "Authorization to Release Information",
      description:
        "Authorization for us to obtain credit reports and financial records.",
      format: "PDF",
      size: "620 KB",
    },
    {
      name: "Title Insurance Application",
      description: "Application for title insurance coverage.",
      format: "PDF",
      size: "1.1 MB",
    },
    {
      name: "Homeowners Insurance Declaration",
      description: "Property insurance information form.",
      format: "PDF",
      size: "950 KB",
    },
  ];

  return (
    <>
      <main>
        <HeroSection
          title="Forms & Documents"
          subtitle="Download the forms you need for your mortgage application."
          cta={{ text: "Get Pre-Qualified", href: "/about/contact" }}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-4xl">
            <div className="mb-12">
              <h2 className="section-title mb-8 text-center">
                Required Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {forms.map((form, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <FileText size={24} />
                      </div>
                      <a
                        href="#"
                        className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                      >
                        <Download size={20} />
                      </a>
                    </div>

                    <h3 className="font-bold text-lg text-neutral-900 mb-2">
                      {form.name}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {form.description}
                    </p>

                    <div className="flex justify-between text-xs text-neutral-600">
                      <span>{form.format}</span>
                      <span>{form.size}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="font-bold text-lg text-neutral-900 mb-4">
                Need Help?
              </h3>
              <p className="text-neutral-600 mb-4">
                If you have questions about any of these forms, our loan
                officers are here to help. Contact us for assistance.
              </p>
              <a
                href="/about/contact"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Get Started?"
          subtitle="Begin your application and let us guide you through the process."
          ctaText="Apply Now"
          ctaHref="/about/contact"
        />
      </main>
    </>
  );
}
