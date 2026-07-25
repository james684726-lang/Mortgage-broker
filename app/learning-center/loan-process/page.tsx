"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  DollarSign,
  CreditCard,
  Building2,
  FileText,
  User,
  Mail,
  Phone,
  Calculator,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Briefcase,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function LoanProcessPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanAmount: "",
    propertyValue: "",
    loanType: "",
    creditScore: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            {/* ===== Header ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D87A1]/10 text-[#1D87A1] text-xs font-semibold uppercase tracking-wider mb-3">
                <Home size={14} />
                Loan Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1]">
                Loan Process
              </h2>
            </motion.div>

            {/* ===== Step 1: Find Out How Much You Can Borrow ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold text-[#1D87A1] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#1D87A1] text-white flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Find Out How Much You Can Borrow
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The first step in obtaining a loan is to determine how much money you can borrow. In case of buying a home, you should determine how much home you can afford even before you begin looking. By answering a few simple questions, we will calculate your buying power, based on standard lender guidelines.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#1D87A1] font-semibold hover:underline"
              >
                Click here to Pre-Qualify.
                <ArrowRight size={16} />
              </Link>

              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                You may also elect to get pre-approved for a loan which requires verification of your income, credit, assets and liabilities. It is recommended that you get pre-approved before you start looking for your new house so you:
              </p>

              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-sm">
                <li>Look for properties within your range.</li>
                <li>
                  Be in a better position when negotiating with the seller (seller knows your loan is already approved).
                </li>
                <li>Close your loan quicker.</li>
              </ul>
            </motion.div>

            {/* ===== More on Pre-Qualification ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold text-[#1D87A1] mb-4">
                More on Pre-Qualification
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: TrendingUp, label: "LTV and Debt-to-Income Ratios" },
                  { icon: CreditCard, label: "FICO™ Credit Score" },
                  { icon: Briefcase, label: "Self Employed Borrower" },
                  { icon: DollarSign, label: "Source of down payment" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFB] border border-gray-100"
                  >
                    <item.icon size={18} className="text-[#1D87A1]" />
                    <span className="text-sm text-gray-700 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* LTV and Debt-to-Income Ratios */}
              <div className="bg-[#F8FAFB] rounded-2xl p-5 mb-4">
                <h4 className="text-base font-bold text-[#1D87A1] mb-2 flex items-center gap-2">
                  <TrendingUp size={18} />
                  LTV and Debt-to-Income Ratios
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  LTV or Loan-To-Value ratio is the maximum amount of exposure
                  that a lender is willing to accept in financing your purchase.
                  Lenders are usually prepared to lend a higher percentage of
                  the value, even up to 100%, to creditworthy borrowers. Another
                  consideration in approving the maximum amount of loan for a
                  particular borrower is the ratio of monthly debt payments
                  (such as auto and personal loans) to income. Rule of thumb
                  states that your monthly mortgage payments should not exceed
                  1/3 of your gross monthly income. Therefore, borrowers with
                  high debt-to-income ratio need to pay a higher down payment in
                  order to qualify for a lower LTV ratio.
                </p>
                <button
                  onClick={scrollToTop}
                  className="text-xs text-[#1D87A1] font-medium hover:underline mt-2"
                >
                  return to top ↑
                </button>
              </div>

              {/* FICO Credit Score */}
              <div className="bg-[#F8FAFB] rounded-2xl p-5 mb-4">
                <h4 className="text-base font-bold text-[#1D87A1] mb-2 flex items-center gap-2">
                  <CreditCard size={18} />
                  FICO™ Credit Score
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  FICO™ Credit Scores are widely used by almost all types of
                  lenders in their credit decision. It is a quantified measure
                  of creditworthiness of an individual, which is derived from
                  mathematical models developed by Fair Isaac and Company in San
                  Rafael, California. FICO™ scores reflect credit risk of the
                  individual in comparison with that of general population. It
                  is based on a number of factors including past payment
                  history, total amount of borrowing, length of credit history,
                  search for new credit, and type of credit established. When
                  you begin shopping around for a new credit card or a loan,
                  every time a lender runs your credit report it adversely
                  effects your credit score. It is, therefore, advisable that
                  you authorize the lender/broker to run your credit report only
                  after you have chosen to apply for a loan through them.
                </p>
                <button
                  onClick={scrollToTop}
                  className="text-xs text-[#1D87A1] font-medium hover:underline mt-2"
                >
                  return to top ↑
                </button>
              </div>

              {/* Self Employed Borrowers */}
              <div className="bg-[#F8FAFB] rounded-2xl p-5 mb-4">
                <h4 className="text-base font-bold text-[#1D87A1] mb-2 flex items-center gap-2">
                  <Briefcase size={18} />
                  Self Employed Borrowers
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Self employed individuals often find that there are greater
                  hurdles to borrowing for them than an employed person. For
                  many conventional lenders the problem with lending to the self
                  employed person is documenting an applicant's income.
                  Applicants with jobs can provide lenders with pay stubs, and
                  lenders can verify the information through their employer. In
                  the absence of such verifiable employment records, lenders
                  rely on income tax returns, which they typically require for 2
                  years.
                </p>
                <button
                  onClick={scrollToTop}
                  className="text-xs text-[#1D87A1] font-medium hover:underline mt-2"
                >
                  return to top ↑
                </button>
              </div>

              {/* Source of Down Payment */}
              <div className="bg-[#F8FAFB] rounded-2xl p-5">
                <h4 className="text-base font-bold text-[#1D87A1] mb-2 flex items-center gap-2">
                  <DollarSign size={18} />
                  Source of Down Payment
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lenders expect borrowers to come up with sufficient cash for
                  the down payment and other fees payable by the borrower at the
                  time of funding the loan. Generally, down payment requirements
                  are made with funds the borrowers have saved. If a borrower
                  does not have the required down payment they may receive "gift
                  funds" from an acceptable donor with a signed letter stating
                  that the gifted funds do not have to be paid back.
                </p>
                <button
                  onClick={scrollToTop}
                  className="text-xs text-[#1D87A1] font-medium hover:underline mt-2"
                >
                  return to top ↑
                </button>
              </div>
            </motion.div>

            {/* ===== Fixed vs Adjustable ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold text-[#1D87A1] mb-3">
                Home Loans Come in Many Shapes and Sizes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Deciding which loan makes the most sense for your financial
                situation and goals means understanding the benefits of each.
                Whether you are buying a home or refinancing, there are 2 basic
                types of home loans. Each has different reasons you'd choose
                them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Fixed Rate */}
                <div className="bg-[#F8FAFB] rounded-2xl p-5 border-l-4 border-[#1D87A1]">
                  <h4 className="text-base font-bold text-[#1D87A1] mb-2">
                    1) Fixed Rate Mortgage
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Fixed rate mortgages usually have terms lasting 15 or 30
                    years. Throughout those years, the interest rate and monthly
                    payments remain the same. You would select this type of loan
                    when you:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Plan to live in home more than 7 years</li>
                    <li>Like the stability of a fixed principal/interest payment</li>
                    <li>Don't want to run the risk of future monthly payment increases</li>
                    <li>Think your income and spending will stay the same</li>
                  </ul>
                </div>

                {/* Adjustable Rate */}
                <div className="bg-[#F8FAFB] rounded-2xl p-5 border-l-4 border-[#30ACBF]">
                  <h4 className="text-base font-bold text-[#30ACBF] mb-2">
                    2) Adjustable Rate Mortgage
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Adjustable Rate Mortgages (often called ARMs) typically last
                    for 15 or 30 years, just like fixed rate mortgages. But
                    during those years, the interest rate on the loan may go up
                    or down. Monthly payments increase or decrease. You would
                    select this type of loan when you:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Plan to stay in your home less than 5 years</li>
                    <li>Don't mind having your monthly payment periodically change (up or down)</li>
                    <li>Comfortable with the risk of possible payment increases in future</li>
                    <li>Think your income will probably increase in the future</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                By carefully considering the above factors and seeking our
                professional advice, you should be able to select the one loan
                that matches your present condition as well as your future
                financial goals.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-[#1D87A1] text-white rounded-xl font-semibold hover:bg-[#2D89A1] transition-colors shadow-lg hover:shadow-xl"
              >
                Click To Apply For A Loan
                <ChevronRight size={18} />
              </Link>
            </motion.div>

            {/* ===== Application Process ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold text-[#1D87A1] mb-3">
                The Loan Approval Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Although lenders conform to standards set by government agencies,
                loan approval guidelines vary depending on the terms of each
                loan. In general, approval is based on two factors: your ability
                and willingness to repay the loan and the value of the property.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Once your loan application has been received we will start the
                loan approval process immediately. Your loan processor will
                verify all of the information you have given. If any
                discrepancies are found, either the processor or your loan
                officer will troubleshoot to straighten them out. This
                information includes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { icon: Briefcase, label: "Income/Employment Check", desc: "Is your income sufficient to cover monthly payments? Industry guidelines are used to evaluate your income and your debts." },
                  { icon: CreditCard, label: "Credit Check", desc: "What is your ability to repay debts when due? Your credit report is reviewed to determine the type and terms of previous loans." },
                  { icon: DollarSign, label: "Asset Evaluation", desc: "Do you have the funds necessary to make the down payment and pay closing costs?" },
                  { icon: Home, label: "Property Appraisal", desc: "Is there sufficient value in the property? The property is appraised to determine market value." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFB] rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon size={16} className="text-[#1D87A1]" />
                      <h5 className="text-sm font-semibold text-[#1D87A1]">
                        {item.label}
                      </h5>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAFB] rounded-2xl p-5 mb-4">
                <h4 className="text-sm font-bold text-[#1D87A1] mb-2">
                  Other Documentation
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In some cases, additional documentation might be required
                  before making a final determination regarding your loan
                  approval.
                </p>
              </div>

              <h4 className="text-sm font-bold text-[#1D87A1] mb-2">
                In order to improve your chances of getting a loan approval:
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Fill out your loan application completely. You may use our online forms to expedite the process.</li>
                <li>Respond promptly to any requests for additional documentation especially if your rate is locked or if your loan is to close by a certain date.</li>
                <li>Do not move money into or from your bank accounts without a paper trail. If you are receiving money from friends, family or other relatives, please prepare a gift letter and contact us.</li>
                <li>Do not make any major purchases until your loan is closed. Purchases cause your debts to increase and might have an adverse affect on your current application.</li>
                <li>Do not go out of town around your loan's closing date. If you plan to be out of town, you may want to sign a Power of Attorney.</li>
              </ul>
            </motion.div>

            {/* ===== Closing ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mb-10"
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                After your loan is approved, you are ready to sign the final
                loan documents. You must review the documents prior to signing
                and make sure that the interest rate and loan terms are what you
                were promised. Also, verify that the name and address on the
                loan documents are accurate. The signing normally takes place in
                front of a notary public.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                There are also several fees associated with obtaining a mortgage
                and transferring property ownership which you will be expected
                to pay at closing. Bring a cashiers check for the down payment
                and closing costs if required. Personal checks are normally not
                accepted. You also will need to show your homeowner's insurance
                policy, and any other requirements such as flood insurance, plus
                proof of payment.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Your loan will normally close shortly after you have signed the
                loan documents. On owner occupied refinance loan transactions
                federal law requires that you have 3 days to review the
                documents before your loan transaction can close.
              </p>
            </motion.div>

            {/* ===== Get a Quick Quote Form ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-[#F8FAFB] rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-[#1D87A1] mb-4 text-center">
                Get a Quick Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <User size={16} /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <User size={16} /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <Mail size={16} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <Phone size={16} /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <DollarSign size={16} /> Loan Amount
                    </label>
                    <select
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition text-gray-600"
                      required
                    >
                      <option value="">- Select an option -</option>
                      <option value="100000">$100,000</option>
                      <option value="200000">$200,000</option>
                      <option value="300000">$300,000</option>
                      <option value="400000">$400,000</option>
                      <option value="500000">$500,000+</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <Home size={16} /> Property Value
                    </label>
                    <select
                      name="propertyValue"
                      value={formData.propertyValue}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition text-gray-600"
                      required
                    >
                      <option value="">- Select an option -</option>
                      <option value="150000">$150,000</option>
                      <option value="250000">$250,000</option>
                      <option value="350000">$350,000</option>
                      <option value="450000">$450,000</option>
                      <option value="550000">$550,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <FileText size={16} /> Loan Type
                    </label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition text-gray-600"
                      required
                    >
                      <option value="">- Select an option -</option>
                      <option value="conv">Conventional</option>
                      <option value="fha">FHA</option>
                      <option value="va">VA</option>
                      <option value="usda">USDA</option>
                      <option value="jumbo">Jumbo</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <CreditCard size={16} /> Credit Score
                    </label>
                    <select
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition text-gray-600"
                      required
                    >
                      <option value="">- Select an option -</option>
                      <option value="excellent">Excellent (780+)</option>
                      <option value="very-good">Very Good (720-779)</option>
                      <option value="good">Good (680-719)</option>
                      <option value="fair">Fair (620-679)</option>
                      <option value="poor">Poor (620-) </option>
                    </select>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-gray-400 leading-relaxed border-t border-gray-200 pt-4 mt-2">
                  By providing your phone number and/or email and clicking
                  "Submit" you agree to our Terms of Service and Privacy Policy
                  and consent to receive marketing communications from LHSM Demo
                  Company via text, call, or email, including automated messages.
                  To opt out, reply "STOP" to any text. Message and data rates
                  may apply.
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-3 bg-[#1D87A1] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-100 text-green-700 rounded-xl flex items-center gap-2 text-sm"
                  >
                    <CheckCircle size={18} />
                    Thank you! Your request has been submitted successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}