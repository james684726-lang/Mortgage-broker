import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { BookOpen, Video, FileText, HelpCircle } from "lucide-react";

export default function LearningCenterPage() {
  const resources = [
    {
      icon: BookOpen,
      title: "Guides & Articles",
      description:
        "Learn everything about mortgages, homebuying, and refinancing.",
      count: "50+ Articles",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description:
        "Watch step-by-step guides and expert tips for getting started.",
      count: "20+ Videos",
    },
    {
      icon: FileText,
      title: "Downloadable Resources",
      description:
        "Get free worksheets, checklists, and financial planning tools.",
      count: "15+ Resources",
    },
    {
      icon: HelpCircle,
      title: "FAQ Database",
      description: "Find quick answers to common questions about mortgages.",
      count: "100+ FAQs",
    },
  ];

  const topics = [
    "First-Time Homebuyer Guide",
    "Understanding Credit Scores",
    "Down Payment Strategies",
    "Refinancing 101",
    "Mortgage Terminology",
    "Home Inspection Tips",
    "Closing Process Explained",
    "Real Estate Market Trends",
  ];

  return (
    <>
      <main>
        <HeroSection
          title="Learning Center"
          subtitle="Master the fundamentals of mortgages and homebuying with our comprehensive resources."
          cta={{ text: "Explore Resources", href: "#resources" }}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {resources.map((resource, idx) => {
                const Icon = resource.icon;
                return (
                  <div key={idx} className="card text-center group">
                    <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon size={32} />
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {resource.description}
                    </p>
                    <p className="text-primary font-semibold text-sm">
                      {resource.count}
                    </p>
                  </div>
                );
              })}
            </div>

            <div id="resources" className="max-w-4xl mx-auto">
              <h2 className="section-title mb-8 text-center">Popular Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-4 border border-neutral-200 rounded-lg hover:bg-accent hover:border-primary transition-colors group"
                  >
                    <p className="text-neutral-900 font-semibold group-hover:text-primary transition-colors">
                      {topic}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Ready to Take the Next Step?"
          subtitle="Use what you've learned to get pre-qualified for your perfect mortgage."
          ctaText="Get Pre-Qualified"
          ctaHref="/get-started"
          secondaryText="Contact an Expert"
          secondaryHref="/about/contact"
        />
      </main>
    </>
  );
}
