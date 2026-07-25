"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// --- Helper Functions ---
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatCurrencyFull = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};

// --- Types ---
interface Results {
  principalAndInterest: number;
  pmi: number;
  monthlyTax: number;
  monthlyInsurance: number;
  totalMonthly: number;
  loanAmount: number;
  downPayment: number;
  downPaymentPercent: number;
}

const loanTypes = ["Conv", "FHA", "VA", "USDA", "Jumbo"];

export default function MortgageCalculator() {
  // --- State ---
  const [activeTab, setActiveTab] = useState("Conv");
  const [price, setPrice] = useState(890000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0.56);
  const [interestRate, setInterestRate] = useState(4.875);
  const [term, setTerm] = useState(30);
  const [results, setResults] = useState<Results>({
    principalAndInterest: 0,
    pmi: 0,
    monthlyTax: 0,
    monthlyInsurance: 0,
    totalMonthly: 0,
    loanAmount: 0,
    downPayment: 0,
    downPaymentPercent: 0,
  });
  const [isCalculating, setIsCalculating] = useState(false);

  // --- Calculation Logic ---
  const calculateMortgage = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const downPayment = price * (downPaymentPercent / 100);
      let loanAmount = price - downPayment;
      const monthlyRate = interestRate / 100 / 12;
      const numPayments = term * 12;

      // 1. Standard Principal & Interest
      let principalAndInterest = 0;
      if (monthlyRate === 0) {
        principalAndInterest = loanAmount / numPayments;
      } else {
        principalAndInterest =
          (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, numPayments)) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);
      }

      // 2. Loan Type Specific Adjustments
      let pmi = 0;

      if (activeTab === "Conv") {
        if (downPaymentPercent < 20) {
          pmi = (loanAmount * 0.005) / 12;
        }
      } else if (activeTab === "FHA") {
        pmi = (loanAmount * 0.0085) / 12;
      } else if (activeTab === "VA") {
        pmi = 0;
      } else if (activeTab === "USDA") {
        pmi = (loanAmount * 0.0035) / 12;
      } else if (activeTab === "Jumbo") {
        if (downPaymentPercent < 20) {
          pmi = (loanAmount * 0.006) / 12;
        }
      }

      // 3. Property Tax & Insurance (based on price)
      const monthlyTax = (price * 0.012) / 12;
      const monthlyInsurance = (price * 0.005) / 12;

      const totalMonthly =
        principalAndInterest + pmi + monthlyTax + monthlyInsurance;

      setResults({
        principalAndInterest,
        pmi,
        monthlyTax,
        monthlyInsurance,
        totalMonthly,
        loanAmount,
        downPayment,
        downPaymentPercent,
      });
      setIsCalculating(false);
    }, 300);
  };

  useEffect(() => {
    calculateMortgage();
  }, [price, downPaymentPercent, interestRate, term, activeTab]);

  // --- Chart Data ---
  const totalMonthly = results.totalMonthly || 1;

  const chartData = {
    labels: ["Principal & Int", "Property Tax", "Insurance"],
    datasets: [
      {
        data: [
          results.principalAndInterest,
          results.monthlyTax,
          results.monthlyInsurance,
        ],
        backgroundColor: ["#1D87A1", "#30ACBF", "#2D89A1"],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    cutout: "65%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || "";
            let value = context.parsed || 0;
            let total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            let percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `${label}: ${formatCurrencyFull(value)} (${percentage}%)`;
          },
        },
      },
    },
  };

  // --- Breakdown Items for Table ---
  const breakdownItems = [
    {
      label: "Principal & Int",
      value: results.principalAndInterest,
      percentage: (results.principalAndInterest / totalMonthly) * 100,
    },
    {
      label: "Property Tax",
      value: results.monthlyTax,
      percentage: (results.monthlyTax / totalMonthly) * 100,
    },
    {
      label: "Insurance",
      value: results.monthlyInsurance,
      percentage: (results.monthlyInsurance / totalMonthly) * 100,
    },
  ];

  // --- Render ---
  return (
    <section className="w-full bg-white py-4 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1] mb-2">
            Mortgage Payment Calculator
          </h2>
          <p className=" max-w-2xl text-[#1D87A1] mx-auto">
            Calculate how much your monthly mortgage payment could be.
          </p>
        </motion.div>

        {/* Main Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Loan Type Tabs */}
          <div className="bg-[#F5F8FA] px-4 sm:px-8 pt-6 pb-4 border-b border-gray-200 overflow-x-auto scrollbar">
            <div className="flex flex-nowrap gap-2 sm:gap-3 min-w-max">
              {loanTypes.map((type) => {
                const isActive = activeTab === type;
                return (
                  <button
                    key={type}
                    onClick={() => setActiveTab(type)}
                    className={`
                      px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap
                      ${
                        isActive
                          ? "bg-[#1D87A1] text-white shadow-md scale-105"
                          : "bg-white text-gray-600 hover:bg-gray-100 hover:text-[#1D87A1]"
                      }
                    `}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left: Inputs */}
              <div className="lg:col-span-3 space-y-6">
                {/* Property Price */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-gray-700 font-medium text-sm">
                      Property Price
                    </label>
                    <span className="text-[#1D87A1] font-bold text-lg">
                      {formatCurrency(price)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="5000"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
                    style={{
                      background: `linear-gradient(to right, #1D87A1 0%, #1D87A1 ${
                        ((price - 50000) / (2000000 - 50000)) * 100
                      }%, #E5E7EB ${
                        ((price - 50000) / (2000000 - 50000)) * 100
                      }%, #E5E7EB 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$50k</span>
                    <span>$2M</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-gray-700 font-medium text-sm">
                      Down Pmt.
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="text-[#1D87A1] font-bold text-lg">
                        {downPaymentPercent.toFixed(2)}%
                      </span>
                      <span className="text-gray-400 text-sm">
                        {formatCurrency(price * (downPaymentPercent / 100))}
                      </span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="0.01"
                    value={downPaymentPercent}
                    onChange={(e) =>
                      setDownPaymentPercent(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
                    style={{
                      background: `linear-gradient(to right, #1D87A1 0%, #1D87A1 ${
                        (downPaymentPercent / 50) * 100
                      }%, #E5E7EB ${(downPaymentPercent / 50) * 100}%, #E5E7EB 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-gray-700 font-medium text-sm">
                      Interest Rate
                    </label>
                    <span className="text-[#1D87A1] font-bold text-lg">
                      {interestRate.toFixed(3)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="12"
                    step="0.125"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1D87A1]"
                    style={{
                      background: `linear-gradient(to right, #1D87A1 0%, #1D87A1 ${
                        ((interestRate - 0.5) / (12 - 0.5)) * 100
                      }%, #E5E7EB ${
                        ((interestRate - 0.5) / (12 - 0.5)) * 100
                      }%, #E5E7EB 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0.5%</span>
                    <span>12%</span>
                  </div>
                </div>

                {/* Advanced Link */}
                <div className="text-right">
                  <button className="text-[#1D87A1] text-sm font-medium hover:underline inline-flex items-center gap-1 transition-all">
                    Advanced <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              {/* Right: Chart + Breakdown (Integrated) */}
              <div className="lg:col-span-2 bg-[#F8FAFB] rounded-2xl p-6 flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isCalculating ? "loading" : "results"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    {isCalculating ? (
                      <div className="flex items-center justify-center py-12">
                        <div className="w-12 h-12 border-4 border-[#1D87A1]/20 border-t-[#1D87A1] rounded-full animate-spin" />
                      </div>
                    ) : (
                      <>
                        {/* Doughnut Chart with Total in Center */}
                        <div className="relative w-48 h-48 mx-auto">
                          <Doughnut data={chartData} options={chartOptions} />
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-xs text-gray-400 font-medium">
                              Your payment
                            </span>
                            <span className="text-xl font-extrabold text-[#1D87A1]">
                              {formatCurrencyFull(results.totalMonthly)}
                            </span>
                          </div>
                        </div>

                        {/* Breakdown Table - Directly Below Chart */}
                        <div className="w-full mt-4 space-y-2">
                          {breakdownItems.map((item) => (
                            <div
                              key={item.label}
                              className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                            >
                              <span className="text-gray-600 text-sm font-medium">
                                {item.label}
                              </span>
                              <div className="flex items-center gap-3">
                                <span className="text-gray-700 text-sm font-semibold">
                                  {formatCurrencyFull(item.value)}
                                </span>
                                <span className="text-[#1D87A1] text-sm font-bold w-12 text-right">
                                  {formatPercentage(item.percentage)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ChevronDown Icon
const ChevronDown = ({ size = 24 }: { size?: number }) => (
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
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);