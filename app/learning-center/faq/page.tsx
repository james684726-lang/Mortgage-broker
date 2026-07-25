"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  DollarSign,
  Percent,
  Calendar,
  FileText,
  CreditCard,
  Home,
  Shield,
  Building2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const faqs = [
  {
    id: "refinance",
    question: "When should I refinance?",
    icon: TrendingUp,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          It's generally a good time to refinance when mortgage rates are 2%
          lower than the current rate on your loan. It may be a viable option
          even if the interest rate difference is only 1% or less. Any reduction
          can trim your monthly mortgage payments.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          <strong>Example:</strong> Your payment, excluding taxes and insurance,
          would be about $770 on a $100,000 loan at 8.5%; if the rate were
          lowered to 7.5%, your payment would then be $700, now you're saving
          $70 per month. Your savings depends on your income, budget, loan
          amount, and interest rate changes. Your trusted lender can help you
          calculate your options.
        </p>
      </>
    ),
  },
  {
    id: "points",
    question: "What are points?",
    icon: DollarSign,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          A point is a percentage of the loan amount, or 1-point = 1% of the
          loan, so one point on a $100,000 loan is $1,000. Points are costs that
          need to be paid to a lender to get mortgage financing under specified
          terms. Discount points are fees used to lower the interest rate on a
          mortgage loan by paying some of this interest up-front. Lenders may
          refer to costs in terms of basic points in hundredths of a percent,
          100 basis points = 1 point, or 1% of the loan amount.
        </p>
      </>
    ),
  },
  {
    id: "pay-points",
    question: "Should I pay points to lower my interest rate?",
    icon: Percent,
    answer: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Yes, if you plan to stay in the property for at least a few years.
        Paying discount points to lower the loan's interest rate is a good way
        to lower your required monthly loan payment, and possibly increase the
        loan amount that you can afford to borrow. However, if you plan to stay
        in the property for only a year or two, your monthly savings may not be
        enough to recoup the cost of the discount points that you paid up-front.
      </p>
    ),
  },
  {
    id: "apr",
    question: "What is an APR?",
    icon: Percent,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          The annual percentage rate (APR) is an interest rate reflecting the
          cost of a mortgage as a yearly rate. This rate is likely to be higher
          than the stated note rate or advertised rate on the mortgage, because
          it takes into account points and other credit costs. The APR allows
          homebuyers to compare different types of mortgages based on the annual
          cost for each loan. The APR is designed to measure the "true cost of a
          loan." It creates a level playing field for lenders. It prevents
          lenders from advertising a low rate and hiding fees.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The APR does not affect your monthly payments. Your monthly payments
          are strictly a function of the interest rate and the length of the
          loan.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Because APR calculations are affected by the various different fees
          charged by lenders, a loan with a lower APR is not necessarily a
          better rate. The best way to compare loans is to ask lenders to
          provide you with a good-faith estimate of their costs on the same type
          of program (e.g. 30-year fixed) at the same interest rate. You can
          then delete the fees that are independent of the loan such as
          homeowners insurance, title fees, escrow fees, attorney fees, etc. Now
          add up all the loan fees. The lender that has lower loan fees has a
          cheaper loan than the lender with higher loan fees.
        </p>
      </>
    ),
  },
  {
    id: "lock-rate",
    question: "What does it mean to lock the interest rate?",
    icon: Calendar,
    answer: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Mortgage rates can change from the day you apply for a loan to the day
        you close the transaction. If interest rates rise sharply during the
        application process it can increase the borrower's mortgage payment
        unexpectedly. Therefore, a lender can allow the borrower to "lock-in"
        the loan's interest rate guaranteeing that rate for a specified time
        period, often 30-60 days, sometimes for a fee.
      </p>
    ),
  },
  {
    id: "documents",
    question: "What documents do I need to prepare for my loan application?",
    icon: FileText,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          Below is a list of documents that are required when you apply for a
          mortgage. However, every situation is unique and you may be required
          to provide additional documentation. So, if you are asked for more
          information, be cooperative and provide the information requested as
          soon as possible. It will help speed up the application process.
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <h5 className="text-sm font-bold text-[#1D87A1]">Your Property</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Copy of signed sales contract including all riders</li>
              <li>Verification of the deposit you placed on the home</li>
              <li>
                Names, addresses and telephone numbers of all realtors,
                builders, insurance agents and attorneys involved
              </li>
              <li>
                Copy of Listing Sheet and legal description if available (if the
                property is a condominium please provide condominium
                declaration, by-laws and most recent budget)
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-[#1D87A1]">Your Income</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Copies of your pay-stubs for the most recent 30-day period and year-to-date</li>
              <li>Copies of your W-2 forms for the past two years</li>
              <li>Names and addresses of all employers for the last two years</li>
              <li>Letter explaining any gaps in employment in the past 2 years</li>
              <li>Work visa or green card (copy front & back)</li>
              <li>
                If self-employed or receive commission or bonus,
                interest/dividends, or rental income: Provide full tax returns
                for the last two years PLUS year-to-date Profit and Loss
                statement
              </li>
              <li>K-1's for all partnerships and S-Corporations for the last two years</li>
              <li>
                Completed and signed Federal Partnership (1065) and/or Corporate
                Income Tax Returns (1120) including all schedules, statements
                and addenda for the last two years (Required only if your
                ownership position is 25% or greater.)
              </li>
              <li>
                If you will use Alimony or Child Support to qualify: Provide
                divorce decree/court order stating amount, as well as, proof of
                receipt of funds for last year
              </li>
              <li>
                If you receive Social Security income, Disability or VA benefits:
                Provide award letter from agency or organization
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-[#1D87A1]">
              Source of Funds and Down Payment
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>
                Sale of your existing home - provide a copy of the signed sales
                contract on your current residence and statement or listing
                agreement if unsold
              </li>
              <li>
                Savings, checking or money market funds - provide copies of bank
                statements for the last 3 months
              </li>
              <li>
                Stocks and bonds - provide copies of your statement from your
                broker or copies of certificates
              </li>
              <li>
                Gifts - If part of your cash to close, provide Gift Affidavit
                and proof of receipt of funds
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold text-[#1D87A1]">
              Debt or Obligations
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>
                Prepare a list of all names, addresses, account numbers,
                balances, and monthly payments for all current debts with copies
                of the last three monthly statements
              </li>
              <li>
                Include all names, addresses, account numbers, balances, and
                monthly payments for mortgage holders and/or landlords for the
                last two years
              </li>
              <li>
                If you are paying alimony or child support, include marital
                settlement/court order stating the terms of the obligation
              </li>
              <li>Check to cover Application Fee(s)</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "credit-judged",
    question: "How is my credit judged by lenders?",
    icon: CreditCard,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          Credit scoring is a system creditors use to help determine whether to
          give you credit. Information about you and your credit experiences,
          such as your bill-paying history, the number and type of accounts you
          have, late payments, collection actions, outstanding debt, and the age
          of your accounts, is collected from your credit application and your
          credit report. Using a statistical program, creditors compare this
          information to the credit performance of consumers with similar
          profiles. A credit scoring system awards points for each factor that
          helps predict who is most likely to repay a debt. A total number of
          points -- a credit score -- helps predict how creditworthy you are,
          that is, how likely it is that you will repay a loan and make the
          payments when due.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The most widely used credit scores are FICO scores, which were
          developed by Fair Isaac Company, Inc. Your score will fall between 350
          (high risk) and 850 (low risk).
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Because your credit report is an important part of many credit scoring
          systems, it is very important to make sure it's accurate before you
          submit a credit application. To get copies of your report, contact the
          three major credit reporting agencies:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mt-2">
          <li>Equifax: (800) 685-1111</li>
          <li>Experian (formerly TRW): (888) EXPERIAN (397-3742)</li>
          <li>Trans Union: (800) 916-8800</li>
        </ul>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          These agencies may charge you up to $9.00 for your credit report. You
          are entitled to receive one free credit report every 12 months from
          each of the nationwide consumer credit reporting companies – Equifax,
          Experian and TransUnion. This free credit report may not contain your
          credit score and can be requested through the following website:{" "}
          <a
            href="https://www.annualcreditreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D87A1] hover:underline"
          >
            https://www.annualcreditreport.com
          </a>
        </p>
      </>
    ),
  },
  {
    id: "improve-credit",
    question: "What can I do to improve my credit score?",
    icon: TrendingUp,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          Credit scoring models are complex and often vary among creditors and
          for different types of credit. If one factor changes, your score may
          change -- but improvement generally depends on how that factor relates
          to other factors considered by the model. Only the creditor can
          explain what might improve your score under the particular model used
          to evaluate your credit application.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Nevertheless, scoring models generally evaluate the following types of
          information in your credit report:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 mt-2">
          <li>
            <strong>Have you paid your bills on time?</strong> Payment history
            typically is a significant factor. It is likely that your score will
            be affected negatively if you have paid bills late, had an account
            referred to collections, or declared bankruptcy.
          </li>
          <li>
            <strong>What is your outstanding debt?</strong> Many scoring models
            evaluate the amount of debt you have compared to your credit limits.
            If the amount you owe is close to your credit limit, that is likely
            to have a negative effect on your score.
          </li>
          <li>
            <strong>How long is your credit history?</strong> Generally, models
            consider the length of your credit track record.
          </li>
          <li>
            <strong>Have you applied for new credit recently?</strong> Many
            scoring models consider whether you have applied for credit recently
            by looking at "inquiries" on your credit report.
          </li>
          <li>
            <strong>How many and what types of credit accounts do you have?</strong>
            Too many credit card accounts may have a negative effect on your
            score.
          </li>
        </ul>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          To improve your credit score under most models, concentrate on paying
          your bills on time, paying down outstanding balances, and not taking
          on new debt. It's likely to take some time to improve your score
          significantly.
        </p>
      </>
    ),
  },
  {
    id: "appraisal",
    question: "What is an appraisal?",
    icon: Home,
    answer: (
      <p className="text-gray-600 text-sm leading-relaxed">
        An Appraisal is an estimate of a property's fair market value. It's a
        document generally required (depending on the loan program) by a lender
        before loan approval to ensure that the mortgage loan amount is not more
        than the value of the property. The Appraisal is performed by an
        "Appraiser" typically a state-licensed professional who is trained to
        render expert opinions concerning property values, its location,
        amenities, and physical conditions.
      </p>
    ),
  },
  {
    id: "pmi",
    question: "What is PMI (Private Mortgage Insurance)?",
    icon: Shield,
    answer: (
      <p className="text-gray-600 text-sm leading-relaxed">
        On a conventional mortgage, when your down payment is less than 20% of
        the purchase price of the home mortgage lenders usually require you get
        Private Mortgage Insurance (PMI) to protect them in case you default on
        your mortgage. Sometimes you may need to pay up to 1-year's worth of PMI
        premiums at closing which can cost several hundred dollars. The best way
        to avoid this extra expense is to make a 20% down payment, or ask about
        other loan program options.
      </p>
    ),
  },
  {
    id: "80-10-10",
    question: "What is 80-10-10 financing?",
    icon: Building2,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          Surprising as it may seem, some folks with hefty incomes find that
          it's mighty tough for them to save enough money to make a 20% cash
          down payment on their dream homes. Using conventional financing, such
          buyers must purchase Private Mortgage Insurance (PMI) which increases
          the cost of home ownership and, ironically, makes it even more
          difficult to qualify for the mortgage. However, if you're a dues-paying
          member of the cash-challenged class, don't despair. Given that your
          income is sufficiently high, it's eminently possible to avoid getting
          stuck with PMI. That is why 80-10-10 financing was invented.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          It is called 80-10-10 because a savings and loan association, bank, or
          other institutional lender provides a traditional 80% first mortgage,
          you get a 10% second mortgage, and make a cash down payment equal to
          10% of the home's purchase price. By using this method, you are no
          longer obligated to take out PMI on your property.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          The same principle applies if you can only afford to make a 5% down,
          80-15-5 financing is also available. However, because a smaller cash
          down payment increases the lender's risk of default, do not be
          surprised when you are asked to pay higher loan fees and a higher
          mortgage interest rate for 80-15-5 than you pay for 80-10-10.
        </p>
      </>
    ),
  },
  {
    id: "closing",
    question: "What happens at closing?",
    icon: AlertCircle,
    answer: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed">
          The property is officially transferred from the seller to you at
          "Closing" or "Funding". At closing, the ownership of the property is
          officially transferred from the seller to you. This may involve you,
          the seller, real estate agents, your attorney, the lender's attorney,
          title or escrow firm representatives, clerks, secretaries, and other
          staff.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          You can have an attorney represent you if you can't attend the closing
          meeting, i.e., if you're out-of-state. Closing can take anywhere from
          1-hour to several depending on contingency clauses in the purchase
          offer, or any escrow accounts needing to be set up.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Most paperwork in closing or settlement is done by attorneys and real
          estate professionals. You may or may not be involved in some of the
          closing activities; it depends on who you are working with.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          Prior to closing you should have a final inspection, or "walk-through"
          to ensure requested repairs were performed, and items agreed to remain
          with the house are there such as drapes, lighting fixtures, etc. In
          most states the settlement is completed by a title or escrow firm in
          which you forward all materials and information plus the appropriate
          cashier's checks so the firm can make the necessary disbursement. Your
          representative will deliver the check to the seller, and then give the
          keys to you.
        </p>
      </>
    ),
  },
];

export default function BudgetedQuestionsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D87A1]/10 text-[#1D87A1] text-xs font-semibold uppercase tracking-wider mb-3">
                <HelpCircle size={14} />
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1]">
                Budgeted Questions
              </h2>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative mb-8"
            >
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition text-gray-700"
              />
            </motion.div>

            {/* FAQ List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="space-y-3"
            >
              {filteredFAQs.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  No questions found matching your search.
                </p>
              ) : (
                filteredFAQs.map((faq) => {
                  const isOpen = openId === faq.id;
                  const Icon = faq.icon;

                  return (
                    <motion.div
                      key={faq.id}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-[#1D87A1] shadow-lg bg-[#F8FAFB]"
                          : "border-gray-200 hover:border-[#1D87A1]/30 hover:shadow-md"
                      }`}
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                              isOpen
                                ? "bg-[#1D87A1] text-white"
                                : "bg-[#1D87A1]/10 text-[#1D87A1]"
                            }`}
                          >
                            <Icon size={16} />
                          </div>
                          <span
                            className={`text-sm font-medium transition-colors ${
                              isOpen ? "text-[#1D87A1]" : "text-gray-700"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>
                        <div className="flex-shrink-0 text-[#1D87A1]">
                          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 border-t border-gray-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </motion.div>

            {/* Footer count */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xs text-gray-400 text-center mt-6"
            >
              Showing {filteredFAQs.length} of {faqs.length} questions
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}