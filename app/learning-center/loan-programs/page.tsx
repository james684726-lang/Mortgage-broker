"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  PieChart,
  Activity,
  DollarSign,
  TrendingUp,
  Building2,
  Shield,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

const rateOptions = [
  {
    title: "Fixed Rate",
    description:
      "The most common type of loan option, the traditional fixed-rate mortgage includes monthly principal and interest payments which never change during the loan's lifetime.",
    icon: PieChart,
    href: "#",
  },
  {
    title: "Adjustable ARM",
    description:
      "Adjustable-rate mortgages include interest payments which shift during the loan's term, depending on current market conditions. Typically, these loans carry a fixed rate.",
    icon: Activity,
    href: "#",
  },
  {
    title: "Interest Only",
    description:
      "Interest only mortgages are home loans in which borrowers make monthly payments solely toward the interest accruing on the loan, rather than the principle, for a specific period.",
    icon: DollarSign,
    href: "#",
  },
  {
    title: "Graduated Payments",
    description:
      "Graduated Payment Mortgages are loans in which mortgage payments increase annually for a predetermined period of time (e.g., five or ten years) and...",
    icon: TrendingUp,
    href: "#",
  },
];

const loanPrograms = [
  {
    title: "Conventional Loans",
    description:
      "A conventional loan is a type of loan that is not insured by the government. Conventional loans offer more flexibility and fewer restrictions for borrowers, especially those borrowers with good credit and steady income.",
    icon: Building2,
    href: "#",
  },
  {
    title: "FHA Home Loans",
    description:
      "FHA home loans are mortgages which are insured by the Federal Housing Administration (FHA), allowing borrowers to get low mortgage rates with a minimal down payment.",
    icon: Shield,
    href: "#",
  },
  {
    title: "VA Loans",
    description:
      "VA loans are mortgages guaranteed by the Department of Veterans Affairs. These loans offer military veterans exceptional benefits, including low interest rates and no...",
    icon: Award,
    href: "#",
  },
  {
    title: "Jumbo Loans",
    description:
      "A Jumbo loan is a mortgage used to finance properties that are too expensive for a conventional financing loan. The maximum amount for a conforming loan is $766,550 in...",
    icon: TrendingUp,
    href: "#",
  },
];

export default function MortgageRateOptions() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-10">
            {/* ===== MORTGAGE RATE OPTIONS ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D87A1] mb-6">
                Mortgage Rate Options
              </h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {rateOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1D87A1]/30 hover:shadow-lg transition-all duration-300 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1D87A1]/10 flex items-center justify-center text-[#1D87A1] group-hover:bg-[#1D87A1] group-hover:text-white transition-colors duration-300">
                        <option.icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-[#1D87A1] group-hover:text-[#2D89A1] transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-3">
                          {option.description}
                        </p>
                        <Link
                          href={option.href}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#1D87A1] hover:text-[#2D89A1] mt-2 transition-colors group/link"
                        >
                          Learn more
                          <ArrowRight
                            size={14}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ===== LOAN PROGRAM OPTIONS ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D87A1] mb-6">
                Loan Program Options
              </h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
              >
                {loanPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1D87A1]/30 hover:shadow-lg transition-all duration-300 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1D87A1]/10 flex items-center justify-center text-[#1D87A1] group-hover:bg-[#1D87A1] group-hover:text-white transition-colors duration-300">
                        <program.icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-[#1D87A1] group-hover:text-[#2D89A1] transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-3">
                          {program.description}
                        </p>
                        <Link
                          href={program.href}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#1D87A1] hover:text-[#2D89A1] mt-2 transition-colors group/link"
                        >
                          Learn more
                          <ArrowRight
                            size={14}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ===== CTA BANNER ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] p-6 sm:p-8 text-center"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                  Get Your Mortgage Questions Answered Today!
                </h3>
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