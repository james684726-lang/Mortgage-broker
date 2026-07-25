"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homePrice: "",
    downPayment: "",
    creditScore: "good",
    loanType: "purchase",
    propertyType: "single-family",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Loan Details" },
    { number: 3, title: "Review" },
  ];

  return (
    <>
      <main>
        <HeroSection
          title="Get Pre-Qualified"
          subtitle="Start your journey to homeownership in just 5 minutes."
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-2xl">
            {!submitted ? (
              <>
                {/* Progress Steps */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-8">
                    {steps.map((s) => (
                      <div key={s.number} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            step >= s.number
                              ? "bg-primary text-white"
                              : "bg-neutral-200 text-neutral-600"
                          }`}
                        >
                          {step > s.number ? (
                            <CheckCircle size={24} />
                          ) : (
                            s.number
                          )}
                        </div>
                        {s.number < steps.length && (
                          <div
                            className={`flex-1 h-1 mx-2 ${
                              step > s.number ? "bg-primary" : "bg-neutral-200"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 text-center">
                    {steps[step - 1].title}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            placeholder="John"
                            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Doe"
                            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 2: Loan Details */}
                  {step === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Loan Type
                        </label>
                        <select
                          name="loanType"
                          value={formData.loanType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="purchase">Purchase a Home</option>
                          <option value="refinance">Refinance</option>
                          <option value="cash-out">Cash Out Refinance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Home Price
                        </label>
                        <input
                          type="number"
                          name="homePrice"
                          value={formData.homePrice}
                          onChange={handleChange}
                          required
                          placeholder="$300,000"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Down Payment
                        </label>
                        <input
                          type="number"
                          name="downPayment"
                          value={formData.downPayment}
                          onChange={handleChange}
                          required
                          placeholder="$60,000"
                          className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Credit Score
                          </label>
                          <select
                            name="creditScore"
                            value={formData.creditScore}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="excellent">Excellent (750+)</option>
                            <option value="good">Good (700-749)</option>
                            <option value="fair">Fair (650-699)</option>
                            <option value="building">Building (600-649)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Property Type
                          </label>
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
                          >
                            <option value="single-family">Single Family</option>
                            <option value="condo">Condo</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="multifamily">Multi-Family</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 3: Review */}
                  {step === 3 && (
                    <div className="space-y-4 bg-neutral-50 p-6 rounded-lg">
                      <h3 className="font-bold text-lg text-neutral-900 mb-4">
                        Review Your Information
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Name:</span>
                          <span className="font-semibold">
                            {formData.firstName} {formData.lastName}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Email:</span>
                          <span className="font-semibold">
                            {formData.email}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Phone:</span>
                          <span className="font-semibold">
                            {formData.phone}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Loan Type:</span>
                          <span className="font-semibold capitalize">
                            {formData.loanType}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Home Price:</span>
                          <span className="font-semibold">
                            ${formData.homePrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex gap-4 justify-between pt-8">
                    <button
                      type="button"
                      onClick={() => setStep(Math.max(1, step - 1))}
                      disabled={step === 1}
                      className="px-6 py-3 border border-neutral-200 text-neutral-900 rounded-lg font-semibold hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Back
                    </button>
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        className="btn-primary group"
                      >
                        Next
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    ) : (
                      <button type="submit" className="btn-primary group">
                        Get Pre-Qualified
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    )}
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle
                  size={64}
                  className="text-green-500 mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Application Submitted!
                </h2>
                <p className="text-neutral-600 mb-8">
                  Thank you for your application. A loan officer will contact
                  you within 2 business hours.
                </p>
                <a href="/" className="btn-primary">
                  Back to Home
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
