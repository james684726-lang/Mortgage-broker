"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Home,
  Building2,
  Warehouse,
  Plane,
  CreditCard,
  MapPin,
  User,
  Mail,
  Phone,
  Calendar,
  Shield,
  TrendingUp,
  HelpCircle,
} from "lucide-react";

// 👇 Custom loan icons
import {
  PurchaseIcon,
  RefinanceIcon,
  HomeEquityIcon,
} from "@/components/LoanIcons";

// ---- Helper ----
const hasAutoAdvanceValue = (stepId: string, answers: any): boolean => {
  switch (stepId) {
    case "loan-type":
      return answers.loanType !== "";
    case "property-type":
      return answers.propertyType !== "";
    case "property-use":
      return answers.propertyUse !== "";
    case "credit":
      return answers.credit !== "";
    case "found-home":
      return answers.foundHome !== "";
    case "military":
      return answers.military !== "";
    case "buy-within":
      return answers.buyWithin !== "";
    case "first-time":
      return answers.firstTime !== "";
    case "bankruptcy":
      return answers.bankruptcy !== "";
    default:
      return false;
  }
};

// ---- Step 0: Loan Type (custom SVGs) ----
const StepLoanType = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">SELECT A LOAN TYPE</h3>
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Purchase", icon: PurchaseIcon, value: "Purchase" },
        { label: "Refinance", icon: RefinanceIcon, value: "Refinance" },
        { label: "Home Equity", icon: HomeEquityIcon, value: "Home Equity" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <>
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-2  aspect-square rounded-full p-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon className={`w-full h-full ${isSelected ? "text-[#1D87A1]" : "text-gray-400"}`} />
            
          </button>
          <span className="text-xs font-medium">{option.label}</span></>
        );
      })}
    </div>
  </div>
);

// ---- Step 1: Property Type ----
const StepPropertyType = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">SELECT PROPERTY TYPE</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {[
        { label: "Single Family", icon: Home, value: "Single Family" },
        { label: "Multi-Family", icon: Building2, value: "Multi-Family" },
        { label: "Condominium", icon: Building, value: "Condominium" },
        { label: "Townhouse", icon: Warehouse, value: "Townhouse" },
        { label: "Manufactured Home", icon: Hotel, value: "Manufactured Home" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-1.5 p-3 aspect-square rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={22} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="text-[10px] font-medium text-center leading-tight">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 2: Property Use ----
const StepPropertyUse = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">WHAT IS THE PROPERTY USE?</h3>
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Primary Residence", icon: Home, value: "Primary Residence" },
        { label: "Vacation Home", icon: Plane, value: "Vacation Home" },
        { label: "Investment Property", icon: TrendingUp, value: "Investment Property" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-2 p-4 aspect-square rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={28} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="text-[10px] font-medium text-center leading-tight">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 3: Credit Score ----
const StepCredit = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">HOW IS YOUR CREDIT?</h3>
    <div className="space-y-2">
      {[
        { label: "Excellent", range: "780+", value: "excellent", icon: CreditCard },
        { label: "Very Good", range: "720-779", value: "very-good", icon: CreditCard },
        { label: "Good", range: "680-719", value: "good", icon: CreditCard },
        { label: "Fair", range: "620-679", value: "fair", icon: CreditCard },
        { label: "Poor", range: "620-", value: "poor", icon: CreditCard },
      ].map((item) => {
        const Icon = item.icon;
        const isSelected = value === item.value;
        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`w-full py-3 px-6 rounded-full border-2 flex items-center justify-between transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon size={18} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
              <span className="font-medium">{item.label}</span>
            </div>
            <span className="text-sm text-gray-500">{item.range}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 4: Found Home? ----
const StepFoundHome = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">HAVE YOU ALREADY FOUND A HOME?</h3>
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Yes", icon: CheckCircle, value: "Yes" },
        { label: "No", icon: HelpCircle, value: "No" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-2 py-8 rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={36} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="text-lg font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 5: Purchase Price ----
const StepPrice = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">PURCHASE PRICE</h3>
    <div className="flex items-center justify-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">${value.toLocaleString()}</span>
    </div>
    <input
      type="range"
      min="50000"
      max="2000000"
      step="5000"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>$50k</span>
      <span>$2M</span>
    </div>
  </div>
);

// ---- Step 6: Down Payment ----
const StepDownPayment = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">DOWN PAYMENT</h3>
    <div className="flex items-center justify-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">{value}%</span>
    </div>
    <input
      type="range"
      min="0"
      max="50"
      step="1"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>0%</span>
      <span>50%</span>
    </div>
  </div>
);

// ---- Step 7: Military Service ----
const StepMilitary = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">MILITARY SERVICE?</h3>
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Yes", icon: Shield, value: "Yes" },
        { label: "No", icon: HelpCircle, value: "No" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-2 py-8 rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={36} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="text-lg font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 8: Buy Within ----
const StepBuyWithin = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">YOU EXPECT TO BUY WITHIN?</h3>
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: "Soon", icon: Calendar, value: "Soon" },
        { label: "Next 60 days", icon: Calendar, value: "Next 60 days" },
        { label: "Next 6 months", icon: Calendar, value: "Next 6 months" },
        { label: "Not very soon", icon: Calendar, value: "Not very soon" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={16} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 9: First Time Buyer ----
const StepFirstTime = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">FIRST TIME HOME BUYER?</h3>
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Yes", icon: CheckCircle, value: "Yes" },
        { label: "No", icon: HelpCircle, value: "No" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-2 py-8 rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={36} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="text-lg font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 10: Bankruptcy ----
const StepBankruptcy = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">BANKRUPTCY IN LAST 7 YEARS?</h3>
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: "Yes", icon: AlertCircle, value: "Yes" },
        { label: "No", icon: CheckCircle, value: "No" },
      ].map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`flex flex-col items-center justify-center gap-2 py-8 rounded-full border-2 transition-all ${
              isSelected
                ? "border-[#1D87A1] bg-[#1D87A1]/10 text-[#1D87A1]"
                : "border-gray-200 hover:border-[#1D87A1]/50"
            }`}
          >
            <Icon size={36} className={isSelected ? "text-[#1D87A1]" : "text-gray-400"} />
            <span className="text-lg font-medium">{option.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);

// ---- Step 11: Annual Income ----
const StepIncome = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">ANNUAL HOUSEHOLD INCOME?</h3>
    <div className="flex items-center justify-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">${value.toLocaleString()}</span>
    </div>
    <input
      type="range"
      min="0"
      max="500000"
      step="5000"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>$0</span>
      <span>$500k</span>
    </div>
  </div>
);

// ---- Step 12: Monthly Debt ----
const StepDebt = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">MONTHLY DEBT PAYMENTS</h3>
    <div className="flex items-center justify-center gap-4">
      <span className="text-3xl font-bold text-[#1D87A1]">${value.toLocaleString()}</span>
    </div>
    <input
      type="range"
      min="0"
      max="10000"
      step="100"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#1D87A1]"
    />
    <div className="flex justify-between text-sm text-gray-400">
      <span>$0</span>
      <span>$10k</span>
    </div>
  </div>
);

// ---- Step 13: Employment Status ----
const StepEmployment = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">EMPLOYMENT STATUS</h3>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 rounded-full border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none text-gray-700"
    >
      <option value="">- Select an option -</option>
      <option value="employed">Employed</option>
      <option value="self-employed">Self-Employed</option>
      <option value="unemployed">Unemployed</option>
      <option value="retired">Retired</option>
    </select>
  </div>
);

// ---- Step 14: Property Zip (optional) ----
const StepZip = ({ value, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">PROPERTY ZIP (OPTIONAL)</h3>
    <div className="flex items-center gap-3">
      <MapPin size={24} className="text-[#1D87A1]" />
      <input
        type="text"
        placeholder="Enter ZIP code"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 rounded-full border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none text-gray-700"
      />
    </div>
  </div>
);

// ---- Step 15: Personal Information ----
const StepPersonalInfo = ({ data, onChange }: any) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-[#1D87A1] text-center">TELL US ABOUT YOURSELF</h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <User size={20} className="text-[#1D87A1]" />
        <input
          type="text"
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          className="w-full p-4 rounded-full border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <User size={20} className="text-[#1D87A1]" />
        <input
          type="text"
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          className="w-full p-4 rounded-full border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <Mail size={20} className="text-[#1D87A1]" />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full p-4 rounded-full border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-3">
        <Phone size={20} className="text-[#1D87A1]" />
        <input
          type="tel"
          placeholder="Home Phone"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="w-full p-4 rounded-full border-2 border-gray-200 focus:border-[#1D87A1] focus:outline-none"
        />
      </div>
      <p className="text-xs text-gray-400 mt-2">
        By providing your phone number and/or email and clicking "Submit" you agree to our
        Terms of Service and Privacy Policy and consent to receive marketing communications from
        LHPDemoCompany via text, call, or email, including automated messages. To opt out, reply STOP to any text.
        Message and data rates may apply.
      </p>
    </div>
  </div>
);

// ---- Thank You ----
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

// ---- Custom icons for missing Lucide ones ----
const AlertCircle = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const Hotel = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 22V7" />
    <path d="M21 22V7" />
    <path d="M3 7h18" />
    <path d="M7 22v-4h10v4" />
    <path d="M7 7v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
    <path d="M7 10h2" />
    <path d="M15 10h2" />
  </svg>
);

const Building = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="15" y2="22" />
    <line x1="9" y1="6" x2="15" y2="6" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="15" y2="14" />
    <line x1="9" y1="18" x2="15" y2="18" />
  </svg>
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

const autoAdvanceStepIds = [
  "loan-type",
  "property-type",
  "property-use",
  "credit",
  "found-home",
  "military",
  "buy-within",
  "first-time",
  "bankruptcy",
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

  const autoAdvancedRef = useRef<number>(-1);
  const isLastStep = currentStep === steps.length;
  const step = steps[currentStep] || null;
  const isAutoAdvance = step && autoAdvanceStepIds.includes(step.id);

  const isStepValid = () => {
    if (!step) return false;
    const id = step.id;
    switch (id) {
      case "loan-type":
        return answers.loanType !== "";
      case "property-type":
        return answers.propertyType !== "";
      case "property-use":
        return answers.propertyUse !== "";
      case "credit":
        return answers.credit !== "";
      case "found-home":
        return answers.foundHome !== "";
      case "price":
        return answers.price > 0;
      case "down-payment":
        return answers.downPayment >= 0;
      case "military":
        return answers.military !== "";
      case "buy-within":
        return answers.buyWithin !== "";
      case "first-time":
        return answers.firstTime !== "";
      case "bankruptcy":
        return answers.bankruptcy !== "";
      case "income":
        return answers.income >= 0;
      case "debt":
        return answers.debt >= 0;
      case "employment":
        return answers.employment !== "";
      case "zip":
        return true;
      case "personal":
        return (
          answers.firstName !== "" &&
          answers.lastName !== "" &&
          answers.email !== "" &&
          answers.phone !== ""
        );
      default:
        return true;
    }
  };

  const handleContinue = () => {
    if (isStepValid() && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      autoAdvancedRef.current = -1;
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      const prevStepId = steps[prevStep]?.id;
      setCurrentStep(prevStep);
      if (prevStepId && autoAdvanceStepIds.includes(prevStepId)) {
        const hasValue = hasAutoAdvanceValue(prevStepId, answers);
        autoAdvancedRef.current = hasValue ? prevStep : -1;
      } else {
        autoAdvancedRef.current = -1;
      }
    }
  };

  const handleChange = (field: string, value: any) => {
    setAnswers((prev: any) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (!step) return;
    if (!isAutoAdvance) return;
    if (!isStepValid()) return;
    if (autoAdvancedRef.current === currentStep) return;
    autoAdvancedRef.current = currentStep;
    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [step, isAutoAdvance, isStepValid, currentStep, answers]);

  const renderStep = () => {
    if (isLastStep) return <ThankYou />;
    const StepComponent = step.component;
    let stepProps: any = {};
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

  const progress = isLastStep ? 100 : step?.percent || 0;
  const valid = isStepValid();

  return (
    <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
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
          <div className="px-6 py-6 min-h-[420px] flex flex-col">
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
                {!isLastStep && (
                  <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100">
                    <button
                      onClick={handleBack}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${
                        currentStep === 0
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-[#1D87A1] hover:bg-[#1D87A1]/10"
                      }`}
                      disabled={currentStep === 0}
                    >
                      <ChevronLeft size={18} />
                      back
                    </button>
                    {!isAutoAdvance && (
                      <button
                        onClick={handleContinue}
                        disabled={!valid}
                        className={`flex items-center gap-2 px-8 py-2.5 rounded-full font-medium transition-all shadow-md ${
                          valid
                            ? "bg-[#1D87A1] text-white hover:bg-[#2D89A1] hover:shadow-lg"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {currentStep === steps.length - 1 ? "Submit" : "Continue"}
                        <ChevronRight size={18} />
                      </button>
                    )}
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