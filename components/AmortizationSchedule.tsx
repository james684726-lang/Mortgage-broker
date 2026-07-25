"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// --- Helpers ---
const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const formatCurrencyFull = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

// --- Amortization Generator ---
interface AmortRow {
  date: string;
  payment: number;
  principal: number;
  interest: number;
  taxesFees: number;
  balance: number;
}

interface LoanInfo {
  totalLoanAmount: number;
  propertyPrice: number;
  downPayment: number;
  loanType: string;
  baseLoanAmount: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayments: number;
  payoffDate: string;
}

function generateSchedule({
  price,
  downPaymentPercent,
  interestRate,
  term,
  loanType,
  monthlyTax,
  monthlyInsurance,
}: {
  price: number;
  downPaymentPercent: number;
  interestRate: number;
  term: number;
  loanType: string;
  monthlyTax: number;
  monthlyInsurance: number;
}): { schedule: AmortRow[]; loanInfo: LoanInfo } {
  const downPayment = price * (downPaymentPercent / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = term * 12;

  let monthlyPI = 0;
  if (monthlyRate === 0) {
    monthlyPI = loanAmount / numPayments;
  } else {
    monthlyPI =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;
  const schedule: AmortRow[] = [];
  let balance = loanAmount;
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear(), 0, 1); // start from Jan

  for (let i = 0; i < numPayments; i++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = Math.min(monthlyPI, balance);
    balance -= principalPayment;

    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);

    schedule.push({
      date: date.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      payment: totalMonthly,
      principal: principalPayment,
      interest: interestPayment,
      taxesFees: monthlyTax + monthlyInsurance,
      balance: Math.max(0, balance),
    });

    if (balance <= 0) break;
  }

  const totalInterest = schedule.reduce((sum, r) => sum + r.interest, 0);
  const totalPayments = schedule.reduce((sum, r) => sum + r.payment, 0);
  const payoffDate = schedule.length > 0 ? schedule[schedule.length - 1].date : "";

  return {
    schedule,
    loanInfo: {
      totalLoanAmount: loanAmount,
      propertyPrice: price,
      downPayment,
      loanType,
      baseLoanAmount: loanAmount,
      monthlyPayment: totalMonthly,
      totalInterest,
      totalPayments,
      payoffDate,
    },
  };
}

// --- Main Component ---
export default function AmortizationSchedule() {
  // --- Inputs (can be linked to calculator) ---
  const [price] = useState(350000);
  const [downPaymentPercent] = useState(3);
  const [interestRate] = useState(6.5);
  const [term] = useState(30);
  const [loanType] = useState("Conv");

  const [activeTab, setActiveTab] = useState("cost-breakdown");
  const [schedule, setSchedule] = useState<AmortRow[]>([]);
  const [loanInfo, setLoanInfo] = useState<LoanInfo | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Calculate ---
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const monthlyTax = (price * 0.012) / 12;
      const monthlyInsurance = (price * 0.005) / 12;
      const result = generateSchedule({
        price,
        downPaymentPercent,
        interestRate,
        term,
        loanType,
        monthlyTax,
        monthlyInsurance,
      });
      setSchedule(result.schedule);
      setLoanInfo(result.loanInfo);
      setLoading(false);
    }, 300);
  }, [price, downPaymentPercent, interestRate, term, loanType]);

  // --- Chart Data for Cost Breakdown (stacked area) ---
  const costChartData = useMemo(() => {
    if (schedule.length === 0) return null;
    const step = Math.max(1, Math.floor(schedule.length / 60));
    const sampled = schedule.filter((_, i) => i % step === 0);
    const labels = sampled.map((r) => r.date);
    return {
      labels,
      datasets: [
        {
          label: "Principal",
          data: sampled.map((r) => r.principal),
          borderColor: "#1D87A1",
          backgroundColor: "rgba(29, 135, 161, 0.6)",
          fill: true,
          tension: 0.3,
          pointRadius: 0,
        },
        {
          label: "Interest",
          data: sampled.map((r) => r.interest),
          borderColor: "#30ACBF",
          backgroundColor: "rgba(48, 172, 191, 0.6)",
          fill: true,
          tension: 0.3,
          pointRadius: 0,
        },
        {
          label: "Taxes & Fees",
          data: sampled.map((r) => r.taxesFees),
          borderColor: "#2D89A1",
          backgroundColor: "rgba(45, 137, 161, 0.6)",
          fill: true,
          tension: 0.3,
          pointRadius: 0,
        },
        {
          label: "Balance",
          data: sampled.map((r) => r.balance),
          borderColor: "#FF6B6B",
          backgroundColor: "rgba(255,107,107,0)",
          borderDash: [8, 4],
          fill: false,
          tension: 0.3,
          pointRadius: 0,
          borderWidth: 2,
        },
      ],
    };
  }, [schedule]);

  // --- Chart Data for Payoff Chart (balance & cumulative) ---
  const payoffChartData = useMemo(() => {
    if (schedule.length === 0) return null;
    const step = Math.max(1, Math.floor(schedule.length / 60));
    const sampled = schedule.filter((_, i) => i % step === 0);
    const labels = sampled.map((r) => r.date);
    const cumulativeInterest: number[] = [];
    let cum = 0;
    sampled.forEach((r) => {
      cum += r.interest;
      cumulativeInterest.push(cum);
    });

    return {
      labels,
      datasets: [
        {
          label: "Remaining Balance",
          data: sampled.map((r) => r.balance),
          borderColor: "#1D87A1",
          backgroundColor: "rgba(29,135,161,0.1)",
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          borderWidth: 3,
        },
        {
          label: "Cumulative Interest",
          data: cumulativeInterest,
          borderColor: "#FF6B6B",
          backgroundColor: "rgba(255,107,107,0.1)",
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          borderWidth: 2,
          borderDash: [5, 5],
        },
      ],
    };
  }, [schedule]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          padding: 15,
          font: { size: 11, weight: "500" as const },
          color: "#4B5563",
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => {
            let label = ctx.dataset.label || "";
            let value = ctx.parsed.y || 0;
            return `${label}: ${formatCurrencyFull(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          maxTicksLimit: 10,
          font: { size: 9 },
          color: "#9CA3AF",
          maxRotation: 30,
        },
      },
      y: {
        grid: { color: "#F3F4F6" },
        ticks: {
          callback: (value: any) => "$" + (value / 1000).toFixed(0) + "k",
          font: { size: 10 },
          color: "#9CA3AF",
        },
      },
    },
  };

  // --- Render Tabs ---
  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-[#1D87A1]/20 border-t-[#1D87A1] rounded-full animate-spin" />
        </div>
      );
    }

    switch (activeTab) {
      case "cost-breakdown":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <h4 className="text-gray-700 font-semibold text-sm">Cost Breakdown</h4>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#1D87A1]" /> Principal
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#30ACBF]" /> Interest
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-[#2D89A1]" /> Taxes & Fees
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full border-2 border-[#FF6B6B] bg-transparent" /> Balance
                  </span>
                </div>
              </div>
              <div className="h-64 sm:h-72">
                {costChartData && <Line data={costChartData} options={chartOptions} />}
              </div>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#F8FAFB] rounded-xl p-3 text-center">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Monthly P&I</p>
                <p className="text-[#1D87A1] font-bold text-base">
                  {loanInfo ? formatCurrencyFull(loanInfo.monthlyPayment) : "$0.00"}
                </p>
              </div>
              <div className="bg-[#F8FAFB] rounded-xl p-3 text-center">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Total Interest</p>
                <p className="text-[#1D87A1] font-bold text-base">
                  {loanInfo ? formatCurrencyFull(loanInfo.totalInterest) : "$0.00"}
                </p>
              </div>
              <div className="bg-[#F8FAFB] rounded-xl p-3 text-center">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Total of {term*12} payments</p>
                <p className="text-[#1D87A1] font-bold text-base">
                  {loanInfo ? formatCurrencyFull(loanInfo.totalPayments) : "$0.00"}
                </p>
              </div>
              <div className="bg-[#F8FAFB] rounded-xl p-3 text-center">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Payoff Date</p>
                <p className="text-[#1D87A1] font-bold text-base">
                  {loanInfo ? loanInfo.payoffDate : "—"}
                </p>
              </div>
            </div>
          </div>
        );

      case "amortization-schedule":
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Date</th>
                  <th className="text-right py-2 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Principal Paid</th>
                  <th className="text-right py-2 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Interest Paid</th>
                  <th className="text-right py-2 px-3 text-gray-500 font-medium text-xs uppercase tracking-wider">Remaining balance</th>
                </tr>
              </thead>
              <tbody>
                {schedule.slice(0, 60).map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="py-2 px-3 text-gray-600 font-medium text-xs">{row.date}</td>
                    <td className="py-2 px-3 text-right text-gray-700 font-medium text-xs">{formatCurrencyFull(row.principal)}</td>
                    <td className="py-2 px-3 text-right text-gray-700 font-medium text-xs">{formatCurrencyFull(row.interest)}</td>
                    <td className="py-2 px-3 text-right text-[#1D87A1] font-bold text-xs">{formatCurrencyFull(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {schedule.length > 60 && (
              <p className="text-center text-gray-400 text-xs mt-4">Showing first 60 of {schedule.length} payments</p>
            )}
          </div>
        );

      case "payoff-chart":
        return (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h4 className="text-gray-700 font-semibold text-sm mb-4">Payoff Chart</h4>
              <div className="h-64 sm:h-72">
                {payoffChartData && <Line data={payoffChartData} options={chartOptions} />}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // --- Tabs ---
  const tabs = [
    { id: "cost-breakdown", label: "Cost Breakdown" },
    { id: "amortization-schedule", label: "Amortization Schedule" },
    { id: "payoff-chart", label: "Payoff Chart" },
  ];

  return (
    <section className="w-full bg-white py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">Cost Breakdown</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Tabs */}
          <div className="bg-white rounded-t-2xl px-4 sm:px-6 pt-4 pb-2 border-b border-gray-200 overflow-x-auto no-scrollbar">
            <div className="flex gap-1 sm:gap-2 min-w-max">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      px-4 sm:px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 whitespace-nowrap
                      ${isActive
                        ? "bg-[#1D87A1] text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100 hover:text-[#1D87A1]"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-b-2xl p-4 sm:p-6 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}