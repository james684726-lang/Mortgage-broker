"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  Briefcase,
  CreditCard,
  MapPin,
  User,
  CheckCircle,
} from "lucide-react";

// ---- Step Content Components ----

// Step 0: Loan Type
const StepLoanType = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">SELECT A LOAN TYPE</h3>
    <div className="grid grid-cols-1 gap-3">
      {["Purchase", "Refinance", "Home Equity"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 1: Property Type
const StepPropertyType = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">SELECT PROPERTY TYPE</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {["Single Family", "Multi-Family", "Condominium", "Townhouse", "Manufactured Home"].map(
        (option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`p-3 rounded-xl border-2 text-left font-medium transition-all ${
              value === option
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            {option}
          </button>
        )
      )}
    </div>
  </div>
);

// Step 2: Property Use
const StepPropertyUse = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">WHAT IS THE PROPERTY USE?</h3>
    <div className="grid grid-cols-1 gap-3">
      {["Primary Residence", "Vacation Home", "Investment Property"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 3: Credit Score
const StepCredit = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">HOW IS YOUR CREDIT?</h3>
    <div className="space-y-2">
      {[
        { label: "Excellent", range: "780+", value: "excellent" },
        { label: "Very Good", range: "720-779", value: "very-good" },
        { label: "Good", range: "680-719", value: "good" },
        { label: "Fair", range: "620-679", value: "fair" },
        { label: "Poor", range: "620-", value: "poor" },
      ].map((item) => (
        <button
          key={item.value}
          onClick={() => onChange(item.value)}
          className={`w-full p-3 rounded-xl border-2 flex justify-between items-center transition-all ${
            value === item.value
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          <span className="font-medium">{item.label}</span>
          <span className="text-sm text-gray-500">{item.range}</span>
        </button>
      ))}
    </div>
  </div>
);

// Step 4: Found Home?
const StepFoundHome = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">HAVE YOU ALREADY FOUND A HOME?</h3>
    <div className="grid grid-cols-2 gap-4">
      {["Yes", "No"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-6 rounded-xl border-2 text-center font-medium text-lg transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 5: Purchase Price
const StepPrice = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">PURCHASE PRICE</h3>
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">${value.toLocaleString()}</span>
    </div>
    <input
      type="range"
      min="50000"
      max="2000000"
      step="5000"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>$50k</span>
      <span>$2M</span>
    </div>
  </div>
);

// Step 6: Down Payment
const StepDownPayment = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">DOWN PAYMENT</h3>
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">{value}%</span>
    </div>
    <input
      type="range"
      min="0"
      max="50"
      step="1"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>0%</span>
      <span>50%</span>
    </div>
  </div>
);

// Step 7: Military Service
const StepMilitary = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">MILITARY SERVICE?</h3>
    <div className="grid grid-cols-2 gap-4">
      {["Yes", "No"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-6 rounded-xl border-2 text-center font-medium text-lg transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 8: Buy Within
const StepBuyWithin = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">YOU EXPECT TO BUY WITHIN?</h3>
    <div className="grid grid-cols-2 gap-3">
      {["Soon", "Next 60 days", "Next 6 months", "Not very soon"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-4 rounded-xl border-2 text-center font-medium transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 9: First Time Buyer
const StepFirstTime = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">FIRST TIME HOME BUYER?</h3>
    <div className="grid grid-cols-2 gap-4">
      {["Yes", "No"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-6 rounded-xl border-2 text-center font-medium text-lg transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 10: Bankruptcy
const StepBankruptcy = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">BANKRUPTCY IN LAST 7 YEARS?</h3>
    <div className="grid grid-cols-2 gap-4">
      {["Yes", "No"].map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`p-6 rounded-xl border-2 text-center font-medium text-lg transition-all ${
            value === option
              ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
              : "border-gray-200 hover:border-[#1D87A1]/50"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

// Step 11: Annual Income
const StepIncome = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">ANNUAL HOUSEHOLD INCOME?</h3>
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">${value.toLocaleString()}</span>
    </div>
    <input
      type="range"
      min="0"
      max="500000"
      step="5000"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>$0</span>
      <span>$500k</span>
    </div>
  </div>
);

// Step 12: Monthly Debt
const StepDebt = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">MONTHLY DEBT PAYMENTS</h3>
    <div className="flex items-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">${value.toLocaleString()}</span>
    </div>
    <input
      type="range"
      min="0"
      max="10000"
      step="100"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>$0</span>
      <span>$10k</span>
    </div>
  </div>
);

// Step 13: Employment Status
const StepEmployment = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">EMPLOYMENT STATUS</h3>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none text-gray-700"
    >
      <option value="">- Select an option -</option>
      <option value="employed">Employed</option>
      <option value="self-employed">Self-Employed</option>
      <option value="unemployed">Unemployed</option>
      <option value="retired">Retired</option>
    </select>
  </div>
);

// Step 14: Property Zip (optional)
const StepZip = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">PROPERTY ZIP (OPTIONAL)</h3>
    <input
      type="text"
      placeholder="Enter ZIP code"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none text-gray-700"
    />
  </div>
);

// Step 15: Personal Information
const StepPersonalInfo = ({ data, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1]">TELL US ABOUT YOURSELF</h3>
    <div className="space-y-3">
      <input
        type="text"
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={data.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
      />
      <input
        type="tel"
        placeholder="Home Phone"
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
      />
      <p className="text-xs text-gray-400 mt-2">
        By providing your phone number and/or email and clicking "Submit" you agree to our
        Terms of Service and Privacy Policy and consent to receive marketing communications from
        LHPDemoCompany via text, call, or email, including automated messages. To opt out, reply STOP to any text.
        Message and data rates may apply.
      </p>
    </div>
  </div>
);

// Thank You screen
const ThankYou = () => (
  <div className="text-center py-12">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-6"
    >
      <CheckCircle size={64} />
    </motion.div>
    <h2 className="text-3xl font-bold text-[#1D87A1] mb-2">Thank you!</h2>
    <p className="text-gray-600">We have received your request. We'll be in touch shortly.</p>
  </div>
);

// ---- Main Wizard ----

const steps = [
  { id: "loan-type", label: "Loan Type", percent: 0, component: StepLoanType },
  { id: "property-type", label: "Property Type", percent: 6, component: StepPropertyType },
  { id: "property-use", label: "Property Use", percent: 12, component: StepPropertyUse },
  { id: "credit", label: "Credit", percent: 18, component: StepCredit },
  { id: "found-home", label: "Found Home", percent: 24, component: StepFoundHome },
  { id: "price", label: "Price", percent: 29, component: StepPrice },
  { id: "down-payment", label: "Down Payment", percent: 35, component: StepDownPayment },
  { id: "military", label: "Military", percent: 41, component: StepMilitary },
  { id: "buy-within", label: "Buy Within", percent: 47, component: StepBuyWithin },
  { id: "first-time", label: "First Time", percent: 53, component: StepFirstTime },
  { id: "bankruptcy", label: "Bankruptcy", percent: 59, component: StepBankruptcy },
  { id: "income", label: "Income", percent: 65, component: StepIncome },
  { id: "debt", label: "Debt", percent: 71, component: StepDebt },
  { id: "employment", label: "Employment", percent: 76, component: StepEmployment },
  { id: "zip", label: "Zip", percent: 82, component: StepZip },
  { id: "personal", label: "Personal", percent: 88, component: StepPersonalInfo },
];

export function LoanApplicationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({
    loanType: "",
    propertyType: "",
    propertyUse: "",
    credit: "",
    foundHome: "",
    price: 275000,
    downPayment: 20,
    military: "",
    buyWithin: "",
    firstTime: "",
    bankruptcy: "",
    income: 75000,
    debt: 500,
    employment: "",
    zip: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const isLastStep = currentStep === steps.length;
  const step = steps[currentStep] || null;

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (field: string, value: any) => {
    setAnswers((prev: any) => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    if (isLastStep) return <ThankYou />;

    const StepComponent = step.component;
    let stepProps: any = {};

    // Map step id to appropriate props
    switch (step.id) {
      case "loan-type":
        stepProps = { value: answers.loanType, onChange: (v: string) => handleChange("loanType", v) };
        break;
      case "property-type":
        stepProps = { value: answers.propertyType, onChange: (v: string) => handleChange("propertyType", v) };
        break;
      case "property-use":
        stepProps = { value: answers.propertyUse, onChange: (v: string) => handleChange("propertyUse", v) };
        break;
      case "credit":
        stepProps = { value: answers.credit, onChange: (v: string) => handleChange("credit", v) };
        break;
      case "found-home":
        stepProps = { value: answers.foundHome, onChange: (v: string) => handleChange("foundHome", v) };
        break;
      case "price":
        stepProps = { value: answers.price, onChange: (v: number) => handleChange("price", v) };
        break;
      case "down-payment":
        stepProps = { value: answers.downPayment, onChange: (v: number) => handleChange("downPayment", v) };
        break;
      case "military":
        stepProps = { value: answers.military, onChange: (v: string) => handleChange("military", v) };
        break;
      case "buy-within":
        stepProps = { value: answers.buyWithin, onChange: (v: string) => handleChange("buyWithin", v) };
        break;
      case "first-time":
        stepProps = { value: answers.firstTime, onChange: (v: string) => handleChange("firstTime", v) };
        break;
      case "bankruptcy":
        stepProps = { value: answers.bankruptcy, onChange: (v: string) => handleChange("bankruptcy", v) };
        break;
      case "income":
        stepProps = { value: answers.income, onChange: (v: number) => handleChange("income", v) };
        break;
      case "debt":
        stepProps = { value: answers.debt, onChange: (v: number) => handleChange("debt", v) };
        break;
      case "employment":
        stepProps = { value: answers.employment, onChange: (v: string) => handleChange("employment", v) };
        break;
      case "zip":
        stepProps = { value: answers.zip, onChange: (v: string) => handleChange("zip", v) };
        break;
      case "personal":
        stepProps = {
          data: {
            firstName: answers.firstName,
            lastName: answers.lastName,
            email: answers.email,
            phone: answers.phone,
          },
          onChange: (field: string, value: string) => handleChange(field, value),
        };
        break;
      default:
        return null;
    }

    return <StepComponent {...stepProps} />;
  };

  // Progress percentage
  const progress = isLastStep ? 100 : step?.percent || 0;

  return (
    <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="px-6 pt-6 pb-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#1D87A1]">{progress}%</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#1D87A1] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="px-6 py-6 min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLastStep ? "thankyou" : currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div className="flex-1">{renderStep()}</div>

                {/* Navigation Buttons */}
                {!isLastStep && (
                  <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
                    <button
                      onClick={handleBack}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        currentStep === 0
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-[#1D87A1] hover:bg-[#1D87A1]/10"
                      }`}
                      disabled={currentStep === 0}
                    >
                      <ChevronLeft size={18} />
                      back
                    </button>
                    <button
                      onClick={handleContinue}
                      className="flex items-center gap-2 px-6 py-2 bg-[#1D87A1] text-white rounded-lg font-medium hover:bg-[#2D89A1] transition-all shadow-md hover:shadow-lg"
                    >
                      {currentStep === steps.length - 1 ? "Submit" : "Continue"}
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}