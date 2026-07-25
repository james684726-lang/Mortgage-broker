"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  User,
  Mail,
  Phone,
  DollarSign,
  Home,
  CreditCard,
  CheckCircle,
  ArrowRight,
  File,
} from "lucide-react";

export default function OnlineFormsPage() {
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

  const forms = [
    {
      title: "Uniform Residential Loan Application",
      icon: FileText,
    },
    {
      title: "Uniform Residential Loan Application — Unmarried Addendum",
      icon: File,
    },
    {
      title: "Uniform Residential Loan Application — Additional Borrower",
      icon: File,
    },
  ];

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
                <FileText size={14} />
                Forms
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1]">
                Online Forms
              </h2>
            </motion.div>

            {/* ===== Description ===== */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-gray-600 text-sm leading-relaxed mb-8"
            >
              To assist you in your mortgage process, we have provided certain
              forms you might need along the way. Included is obviously the
              Mortgage Application Form which you can download and print. The
              application should be completed with the assistance of a mortgage
              professional. You will need a browser compatible with PDF files or
              you will need to download Adobe Acrobat Reader to view and print
              PDF files on all major computer platforms.
            </motion.p>

            {/* ===== PDF Forms ===== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-10"
            >
              <h3 className="text-lg font-bold text-[#1D87A1] mb-4">
                PDF Forms:
              </h3>

              <div className="space-y-2">
                {forms.map((form, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFB] border border-gray-100 hover:border-[#1D87A1]/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <form.icon size={20} className="text-[#1D87A1]" />
                      <span className="text-sm text-gray-700 font-medium">
                        {form.title}
                      </span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-[#1D87A1] hover:bg-[#1D87A1]/10 rounded-lg transition-colors">
                      <Download size={14} />
                      Download PDF
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ===== Get a Quick Quote Form ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-[#F8FAFB] rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-[#1D87A1] mb-4 text-center">
                Get a Quick Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                      <User size={16} /> First Name <span className="text-red-500">*</span>
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
                      <User size={16} /> Last Name <span className="text-red-500">*</span>
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
                      <Mail size={16} /> Email <span className="text-red-500">*</span>
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
                      <Phone size={16} /> Phone Number <span className="text-red-500">*</span>
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
                      <DollarSign size={16} /> Loan Amount <span className="text-red-500">*</span>
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
                      <Home size={16} /> Property Value <span className="text-red-500">*</span>
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
                      <FileText size={16} /> Loan Type <span className="text-red-500">*</span>
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
                      <CreditCard size={16} /> Credit Score <span className="text-red-500">*</span>
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
                  "Submit" you agree to our terms of Service and Privacy Policy
                  and consent to receive marketing communications from LHSD Demo
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