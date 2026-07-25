"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

const topics = [
  {
    id: "application-checklist",
    title: "Application Checklist",
    description:
      "Applying for a mortgage can seem overwhelming at first. Here are some steps to follow to make the process easier:",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "credit",
    title: "Credit",
    description:
      "Credit history is a key factor in determining your mortgage eligibility. Here are some tips to improve your credit score:",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "closing-costs",
    title: "Closing Costs",
    description:
      "Closing costs are the expenses associated with buying a home. Here are some common closing costs:",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "appraisal",
    title: "Appraisal",
    description:
      "Appraisals are used to determine the value of a property. Here are some factors that affect appraisals:",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "pmi",
    title: "Private Mortgage Insurance (PMI)",
    description:
      "Private Mortgage Insurance is required by some lenders to protect the lender in case of default. Here are some things to know about PMI:",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "refinance",
    title: "Refinance",
    description:
      "Refinancing a mortgage can help you save money on your monthly payments. Here are some things to consider when refinancing:",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "glossary",
    title: "Glossary of Terms",
    description:
      "Understanding key mortgage terms is essential for making informed decisions. Here are some common terms:",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
  {
    id: "foreclosure",
    title: "Foreclosure",
    description:
      "Foreclosure is the process of a lender taking possession of a property when the borrower is unable to make payments. Here are some things to know about foreclosure:",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0a07?w=200&h=200&fit=crop",
    learnMoreLinks: ["#", "#"],
  },
];

export default function MortgageBasicsPage() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D87A1]/10 text-[#1D87A1] text-xs font-semibold uppercase tracking-wider mb-3">
                <GraduationCap size={14} />
                Learn the Basics
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1] uppercase tracking-wide">
                Mortgage Basics
              </h2>
              <p className="text-gray-500 text-sm md:text-base mt-2">
                Jump in and get an overview on common mortgage terms
              </p>
            </motion.div>

            {/* Topics Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {topics.map((topic) => (
                <motion.div
                  key={topic.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1D87A1]/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-40 overflow-hidden bg-[#1D87A1]/5">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-[#1D87A1] group-hover:text-[#2D89A1] transition-colors leading-tight mb-1.5">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3">
                      {topic.description}
                    </p>

                    {/* Learn More Links */}
                    <div className="mt-3 pt-3 border-t border-gray-100 space-y-1">
                      {topic.learnMoreLinks.map((href, idx) => (
                        <Link
                          key={idx}
                          href={href}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#1D87A1] hover:text-[#2D89A1] transition-colors group/link"
                        >
                          Learn More
                          <ArrowRight
                            size={12}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] p-6 sm:p-8 text-center"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Learn about our Loan Programs
                </h3>
                <p className="text-white/80 text-sm">
                  Get Your Mortgage Questions Answered Today!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1D87A1] rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Phone size={18} />
                  CONTACT US
                  <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}