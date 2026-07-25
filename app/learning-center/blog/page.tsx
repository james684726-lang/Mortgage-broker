import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CTASection } from "@/components/cta-section";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "10 Tips for First-Time Homebuyers",
      excerpt:
        "Learn the essential tips every first-time homebuyer should know before making the biggest purchase of their life.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Buying",
    },
    {
      id: 2,
      title: "Understanding Interest Rates in 2024",
      excerpt:
        "Explore current mortgage interest rates and how they affect your monthly payments and overall costs.",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Rates",
    },
    {
      id: 3,
      title: "The Complete Guide to Down Payments",
      excerpt:
        "Discover everything you need to know about down payments, from minimum requirements to advantages of larger payments.",
      author: "Emma Davis",
      date: "March 5, 2024",
      category: "Guide",
    },
    {
      id: 4,
      title: "FHA Loans Explained: Benefits and Drawbacks",
      excerpt:
        "A comprehensive overview of FHA loans including who qualifies, benefits, and potential downsides to consider.",
      author: "James Wilson",
      date: "February 28, 2024",
      category: "Loan Types",
    },
    {
      id: 5,
      title: "Refinancing 101: When and How to Refinance",
      excerpt:
        "Learn when refinancing makes sense and how to determine if you could save money with a new loan.",
      author: "Lisa Martinez",
      date: "February 20, 2024",
      category: "Refinancing",
    },
    {
      id: 6,
      title: "Building Credit Before Buying a Home",
      excerpt:
        "Explore strategies to improve your credit score and qualify for better mortgage rates.",
      author: "Robert Taylor",
      date: "February 15, 2024",
      category: "Credit",
    },
  ];

  return (
    <>
      <main>
        <HeroSection
          title="LendPro Blog"
          subtitle="Expert insights and tips on mortgages, homebuying, and real estate."
          cta={{ text: "Get Pre-Qualified", href: "/get-started" }}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article) => (
                <a
                  key={article.id}
                  href="#"
                  className="card group hover:border-primary hover:border-2 flex flex-col h-full"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold opacity-50">
                        {article.id}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-600 pt-4 border-t border-neutral-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Don't Miss Our Latest Articles"
          subtitle="Subscribe to our newsletter for the latest mortgage tips and industry insights."
          ctaText="Subscribe Now"
          ctaHref="/about/contact"
          secondaryText="Read More"
          secondaryHref="/learning-center"
        />
      </main>
    </>
  );
}
