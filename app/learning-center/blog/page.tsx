"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Hazard Insurance vs Homeowners Insurance",
    excerpt:
      "Learn the difference between hazard insurance and homeowners insurance, what lenders require, what each policy covers, and how understanding both helps prevent closing day surprises.",
    date: "07/02/2024",
    category: "Insurance",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Medical Debt Doesn't Kill Approval",
    excerpt:
      "Medical debt doesn't have to derail your homeownership dreams. Learn how lenders view medical debt and what you can do to improve your approval chances.",
    date: "07/02/2024",
    category: "Credit",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Active Duty. VA Benefit. Use It Now",
    excerpt:
      "VA Benefits are a powerful tool for active duty service members. Learn how to leverage your VA loan benefits for homeownership.",
    date: "06/29/2024",
    category: "VA Loans",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Buying a Home Directly From the Seller? Read This First",
    excerpt:
      "Homebuying tips for FSBO (For Sale By Owner) transactions. Learn what to watch out for and how to protect yourself.",
    date: "06/29/2024",
    category: "Homebuying",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Condos Reward the Prepared Buyer",
    excerpt:
      "Condos offer unique benefits for prepared buyers. Learn what to look for and how to navigate the condo buying process.",
    date: "06/29/2024",
    category: "Condos",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Mortgage Approval Documents: Know Before You Apply",
    excerpt:
      "Mortgage Approval checklist - know what documents you need before applying for a mortgage to streamline the process.",
    date: "06/29/2024",
    category: "Documentation",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    title: "The Wealth Ladder",
    excerpt:
      "Homeownership builds wealth through equity, appreciation, and tax benefits. Learn how your home can be a wealth-building tool.",
    date: "06/29/2024",
    category: "Wealth",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    title: "What If Rates Drop After You Lock?",
    excerpt:
      "What to do if rates drop after you locked your rate? Learn about rate lock float-down options and how to take advantage of lower rates.",
    date: "06/29/2024",
    category: "Interest Rates",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    id: 9,
    title: "Mortgage Insurance Has More Than One Face",
    excerpt:
      "Mortgage Insurance has varieties including PMI, MIP, and VA funding fees. Learn the differences and what to expect.",
    date: "06/29/2024",
    category: "Insurance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
];

export default function RecentArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 17;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (end - start + 1 < maxVisible) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisible - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisible + 1);
      }
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

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
            {/* ===== Header ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D87A1]/10 text-[#1D87A1] text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen size={14} />
                Blog
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1]">
                Recent Articles
              </h2>
            </motion.div>

            {/* ===== Articles Grid ===== */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1D87A1]/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-[#1D87A1]/5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1D87A1] text-white text-[10px] font-semibold uppercase tracking-wider">
                      {article.category}
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-[#1D87A1] group-hover:text-[#2D89A1] transition-colors leading-tight line-clamp-2 min-h-[40px]">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1.5 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
                      <Calendar size={12} />
                      <span>Published on {article.date}</span>
                    </div>

                    <button className="mt-3 text-xs font-medium text-[#1D87A1] hover:text-[#2D89A1] transition-colors inline-flex items-center gap-1 group/btn self-start">
                      Read More
                      <ArrowRight
                        size={12}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ===== Pagination ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center gap-1"
            >
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:bg-[#1D87A1]/10 hover:text-[#1D87A1]"
                }`}
              >
                <ChevronLeft size={16} />
              </button>

              {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${idx}`}
                    className="flex items-center justify-center w-8 h-8 text-sm text-gray-400"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(page as number)}
                    className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === page
                        ? "bg-[#1D87A1] text-white shadow-md"
                        : "text-gray-600 hover:bg-[#1D87A1]/10 hover:text-[#1D87A1]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:bg-[#1D87A1]/10 hover:text-[#1D87A1]"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}