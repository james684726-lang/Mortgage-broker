"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MortgageCalculator from "./MortgageCalculator";
import AmortizationSchedule from "./AmortizationSchedule";

export default function MortgageDashboard() {
  // Shared state between calculator and amortization
  const [price, setPrice] = useState(350000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(3);
  const [interestRate, setInterestRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [loanType, setLoanType] = useState("Conv");

  // Derived for amortization
  const [monthlyTax, setMonthlyTax] = useState(350);
  const [monthlyInsurance, setMonthlyInsurance] = useState(160.42);

  // Recalculate tax & insurance when price changes
  useEffect(() => {
    setMonthlyTax((price * 0.012) / 12);
    setMonthlyInsurance((price * 0.005) / 12);
  }, [price]);

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Mortgage Payment Calculator
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Calculate how much your monthly mortgage payment could be.
          </p>
        </motion.div>
<style jsx>{`
  ::-webkit-scrollbar { width: 14px; height: 14px; }
  ::-webkit-scrollbar-track { background: #ffffff; border-radius: 8px; }
  ::-webkit-scrollbar-thumb { background: #1D87A1; border-radius: 8px; border: 3px solid #ffffff; }
  * { scrollbar-width: thick; scrollbar-color: #1D87A1 #ffffff; }
`}</style>
        {/* Calculator Card */}
        <div className="custom-scrollbar max-w-5xl mx-auto mb-8" style={{ height: '800px', overflowY: 'auto' }}>
          <MortgageCalculator
            price={price}
            setPrice={setPrice}
            downPaymentPercent={downPaymentPercent}
            setDownPaymentPercent={setDownPaymentPercent}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            term={term}
            setTerm={setTerm}
            loanType={loanType}
            setLoanType={setLoanType}
            monthlyTax={monthlyTax}
            monthlyInsurance={monthlyInsurance}
          />
          <AmortizationSchedule
            price={price}
            downPaymentPercent={downPaymentPercent}
            interestRate={interestRate}
            term={term}
            loanType={loanType}
            monthlyTax={monthlyTax}
            monthlyInsurance={monthlyInsurance}
          />
        </div>

        {/* Amortization Schedule Card */}
        <div className="max-w-5xl mx-auto">
          
        </div>
      </div>
    </section>
  );
}