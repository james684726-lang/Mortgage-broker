"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  RefreshCw,
  Home,
  TrendingUp,
  BarChart,
  DollarSign,
  Layers,
  Clock,
  PieChart,
  Percent,
  ArrowRight,
} from "lucide-react";

const calculators = [
  {
    title: "Mortgage Calculator",
    description: "Calculate your monthly payments",
    icon: Calculator,
    href: "#",
  },
  {
    title: "Refinance Calculator",
    description: "Calculate your monthly refinance payment",
    icon: RefreshCw,
    href: "#",
  },
  {
    title: "Home Affordability",
    description: "How much can you afford?",
    icon: Home,
    href: "#",
  },
  {
    title: "Should I Refinance?",
    description: "Break even period, new payment",
    icon: TrendingUp,
    href: "#",
  },
  {
    title: "Buy vs Rent Calculator",
    description: "Balance after any # of payments",
    icon: BarChart,
    href: "#",
  },
  {
    title: "Extra Payment",
    description: "Calculate savings with extra payments",
    icon: DollarSign,
    href: "#",
  },
  {
    title: "Blended Calculator",
    description: "Calculate blended rate of debts",
    icon: Layers,
    href: "#",
  },
  {
    title: "Should I Buy Points?",
    description: "Break even period, new payment",
    icon: Clock,
    href: "#",
  },
  {
    title: "Principal",
    description: "Balance after any # of payments",
    icon: PieChart,
    href: "#",
  },
  {
    title: "Buydown Calculator",
    description: "Monthly payment, What the subsidy costs",
    icon: Percent,
    href: "#",
  },
];

export default function MortgagePage() {
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
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1]">
                Mortgage Calculators
              </h2>
            </motion.div>

            {/* Grid of calculators */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {calculators.map((calc, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group"
                >
                  <Link
                    href={calc.href}
                    className="block h-full p-5 rounded-2xl border border-gray-200 hover:border-[#1D87A1]/30 hover:shadow-lg transition-all duration-300 bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1D87A1]/10 flex items-center justify-center text-[#1D87A1] group-hover:bg-[#1D87A1] group-hover:text-white transition-colors duration-300">
                        <calc.icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-[#1D87A1] group-hover:text-[#2D89A1] transition-colors">
                          {calc.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {calc.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="flex-shrink-0 text-gray-300 group-hover:text-[#1D87A1] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 pt-6 border-t border-gray-200"
            >
              <h4 className="text-xs font-semibold text-[#1D87A1] uppercase tracking-wider mb-2">
                Disclaimer
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Information and interactive calculators are made available to
                you as self-help tools for your independent use and are not
                intended to provide investment advice. We cannot and do not
                guarantee their applicability or accuracy in regards to your
                individual circumstances. All examples are hypothetical and are
                for illustrative purposes. We encourage you to seek personalized
                advice from qualified professionals regarding all personal
                finance issues.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}