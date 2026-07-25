// app/page.tsx
'use client';

import { useState } from 'react';

// ---------- TYPES ----------
type FormData = {
  loanType: string;
  propertyType: string;
  propertyUse: string;
  creditScore: string;
  foundHome: string;
  purchasePrice: string;
  downPayment: string;
  militaryService: string;
  buyWithin: string;
  firstTimeBuyer: string;
  bankruptcy: string;
  annualIncome: string;
  monthlyDebt: string;
  employmentStatus: string;
  loanPurpose: string;
  propertyValue: string;
  firstMortgageBalance: string;
  firstMortgageRate: string;
  hasSecondMortgage: string;
  secondMortgageBalance: string;
  secondMortgageRate: string;
  latePayments: string;
  foreclosure: string;
  hasFHA: string;
  propertyZip: string;
  propertyAddress: string;
  tellUsAboutYou: string;
};

const INITIAL_DATA: FormData = {
  loanType: '',
  propertyType: '',
  propertyUse: '',
  creditScore: '',
  foundHome: '',
  purchasePrice: '',
  downPayment: '',
  militaryService: '',
  buyWithin: '',
  firstTimeBuyer: '',
  bankruptcy: '',
  annualIncome: '',
  monthlyDebt: '',
  employmentStatus: '',
  loanPurpose: '',
  propertyValue: '',
  firstMortgageBalance: '',
  firstMortgageRate: '',
  hasSecondMortgage: '',
  secondMortgageBalance: '',
  secondMortgageRate: '',
  latePayments: '',
  foreclosure: '',
  hasFHA: '',
  propertyZip: '',
  propertyAddress: '',
  tellUsAboutYou: '',
};

// ---------- STEP CONFIG (with placeholders for YOUR SVGs) ----------
type StepConfig = {
  key: keyof FormData;
  label: string;
  icon: JSX.Element;  // You can replace these with your actual SVGs
  type: 'radio' | 'number' | 'text' | 'textarea';
  options?: string[];
  placeholder?: string;
};

// ---------------------- !!! REPLACE THESE WITH YOUR ACTUAL SVGs !!! ----------------------
function DefaultIcon({ color = 'text-blue-600' }) {
  return <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
// -----------------------------------------------------------------------------------------

// Build steps - replace icon: <DefaultIcon /> with your custom ones
const STEPS: StepConfig[] = [
  { key: 'loanType', label: 'SELECT A LOAN TYPE', icon: <DefaultIcon color="text-blue-600" />, type: 'radio', options: ['Conventional', 'FHA', 'VA', 'USDA'] },
  { key: 'propertyType', label: 'SELECT PROPERTY TYPE', icon: <DefaultIcon color="text-green-600" />, type: 'radio', options: ['Single Family', 'Condo', 'Townhouse', 'Multi-Family'] },
  { key: 'propertyUse', label: 'WHAT IS THE PROPERTY USE?', icon: <DefaultIcon color="text-purple-600" />, type: 'radio', options: ['Primary Residence', 'Second Home', 'Investment'] },
  { key: 'creditScore', label: 'HOW IS YOUR CREDIT?', icon: <DefaultIcon color="text-yellow-600" />, type: 'radio', options: ['Excellent (740+)', 'Good (700-739)', 'Fair (640-699)', 'Poor (below 640)'] },
  { key: 'foundHome', label: 'HAVE YOU ALREADY FOUND A HOME?', icon: <DefaultIcon color="text-red-600" />, type: 'radio', options: ['Yes', 'No, still looking'] },
  { key: 'purchasePrice', label: 'Purchase Price', icon: <DefaultIcon color="text-emerald-600" />, type: 'number', placeholder: '250,000' },
  { key: 'downPayment', label: 'Down Payment', icon: <DefaultIcon color="text-indigo-600" />, type: 'number', placeholder: '12,500' },
  { key: 'militaryService', label: 'MILITARY SERVICE?', icon: <DefaultIcon color="text-teal-600" />, type: 'radio', options: ['Yes, Active Duty', 'Yes, Veteran', 'No'] },
  { key: 'buyWithin', label: 'YOU EXPECT TO BUY WITHIN?', icon: <DefaultIcon color="text-orange-600" />, type: 'radio', options: ['0-30 days', '31-60 days', '61-90 days', '90+ days'] },
  { key: 'firstTimeBuyer', label: 'First time home buyer?', icon: <DefaultIcon color="text-pink-600" />, type: 'radio', options: ['Yes', 'No'] },
  { key: 'bankruptcy', label: 'Bankruptcy in last 7 years?', icon: <DefaultIcon color="text-rose-600" />, type: 'radio', options: ['Yes', 'No'] },
  { key: 'annualIncome', label: 'Annual Household Income?', icon: <DefaultIcon color="text-cyan-600" />, type: 'number', placeholder: '85,000' },
  { key: 'monthlyDebt', label: 'Monthly Debt Payments', icon: <DefaultIcon color="text-violet-600" />, type: 'number', placeholder: '1,200' },
  { key: 'employmentStatus', label: 'Employment status', icon: <DefaultIcon color="text-fuchsia-600" />, type: 'radio', options: ['Employed Full-Time', 'Employed Part-Time', 'Self-Employed', 'Retired', 'Unemployed'] },
  { key: 'loanPurpose', label: 'Loan Purpose', icon: <DefaultIcon color="text-sky-600" />, type: 'radio', options: ['Purchase', 'Refinance', 'Cash-Out Refinance'] },
  { key: 'propertyValue', label: 'Property Value', icon: <DefaultIcon color="text-lime-600" />, type: 'number', placeholder: '300,000' },
  { key: 'firstMortgageBalance', label: '1st Mortgage Balance', icon: <DefaultIcon color="text-amber-600" />, type: 'number', placeholder: '200,000' },
  { key: 'firstMortgageRate', label: '1st Mortgage Interest Rate', icon: <DefaultIcon color="text-blue-600" />, type: 'number', placeholder: '5.75' },
  { key: 'hasSecondMortgage', label: 'Do you have a 2nd mortgage?', icon: <DefaultIcon color="text-indigo-400" />, type: 'radio', options: ['Yes', 'No'] },
  { key: 'secondMortgageBalance', label: '2nd Mortgage Balance', icon: <DefaultIcon color="text-emerald-400" />, type: 'number', placeholder: '25,000' },
  { key: 'secondMortgageRate', label: '2nd Mortgage Interest Rate', icon: <DefaultIcon color="text-amber-400" />, type: 'number', placeholder: '7.25' },
  { key: 'latePayments', label: 'Any late mortgage payments?', icon: <DefaultIcon color="text-red-500" />, type: 'radio', options: ['Yes', 'No'] },
  { key: 'foreclosure', label: 'Any foreclosure in last 7 years?', icon: <DefaultIcon color="text-rose-500" />, type: 'radio', options: ['Yes', 'No'] },
  { key: 'hasFHA', label: 'Do you currently have an FHA loan?', icon: <DefaultIcon color="text-teal-500" />, type: 'radio', options: ['Yes', 'No'] },
  { key: 'propertyZip', label: 'Property Zip (optional)', icon: <DefaultIcon color="text-gray-600" />, type: 'text', placeholder: '12345' },
  { key: 'propertyAddress', label: 'PROPERTY ADDRESS (OPTIONAL)', icon: <DefaultIcon color="text-gray-700" />, type: 'text', placeholder: '123 Main St' },
  { key: 'tellUsAboutYou', label: 'TELL US ABOUT YOURSELF', icon: <DefaultIcon color="text-indigo-500" />, type: 'textarea', placeholder: 'Anything else we should know?' },
];

// ---------- MAIN COMPONENT ----------
export default function HomePurchasePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [error, setError] = useState('');

  const totalSteps = STEPS.length;
  const currentStep = STEPS[step];
  const currentValue = formData[currentStep.key];
  const progress = ((step + 1) / totalSteps) * 100;

  // Check if current field is empty (for validation)
  const isFieldEmpty = currentValue.trim() === '';

  const updateField = (value: string) => {
    setFormData((prev) => ({ ...prev, [currentStep.key]: value }));
    if (error) setError(''); // Clear error on typing
  };

  const goNext = () => {
    // VALIDATION: Don't proceed if field is empty (skip optional ones)
    const isOptional = ['propertyZip', 'propertyAddress', 'tellUsAboutYou'].includes(currentStep.key);
    if (!isOptional && isFieldEmpty) {
      setError('Please fill out this field before continuing.');
      return;
    }

    if (step < totalSteps - 1) setStep(step + 1);
    setError('');
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
    setError('');
  };

  // ---------- RENDER FIELD ----------
  const renderField = () => {
    const { type, options, placeholder } = currentStep;

    if (type === 'radio' && options) {
      return (
        <div className="space-y-3">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => updateField(opt)}
              className={`w-full text-left px-4 py-3 border-2 rounded-lg transition ${
                currentValue === opt
                  ? 'border-blue-600 bg-blue-50 text-blue-800'
                  : 'border-gray-200 hover:border-blue-300 text-gray-700'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }

    if (type === 'textarea') {
      return (
        <textarea
          value={currentValue}
          onChange={(e) => updateField(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      );
    }

    // text / number
    return (
      <div className="relative">
        {(type === 'number' || currentStep.key === 'purchasePrice' || currentStep.key === 'downPayment') && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        )}
        <input
          type={type === 'number' ? 'number' : 'text'}
          value={currentValue}
          onChange={(e) => updateField(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            type === 'number' ? 'pl-8' : 'pl-4'
          }`}
        />
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <h1 className="text-xl font-bold text-gray-800">Home Purchase</h1>
          </div>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            Step {step + 1} / {totalSteps}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="min-h-[340px]">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-blue-50 rounded-xl">{currentStep.icon}</div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">{currentStep.label}</h2>
          </div>

          {renderField()}

          {/* Error Message */}
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={goBack}
            disabled={step === 0}
            className={`px-6 py-2.5 rounded-lg font-medium transition ${
              step === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            ← Back
          </button>
          <button
            onClick={goNext}
            className={`px-6 py-2.5 rounded-lg font-medium transition shadow-sm ${
              // Disable button visually if required field is empty
              !['propertyZip', 'propertyAddress', 'tellUsAboutYou'].includes(currentStep.key) && isFieldEmpty
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow'
            }`}
          >
            {step === totalSteps - 1 ? 'Submit' : 'Continue →'}
          </button>
        </div>
      </div>
    </main>
  );
}