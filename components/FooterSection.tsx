"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Shield,
  Users,
  TrendingUp,
  Sparkles,
  Building2,
  Handshake,
  ChevronRight,
} from "lucide-react";

// Floating icons component (motion graphics)
const FloatingIcons = () => {
  const icons = [
    // { Icon: Shield, delay: 0, x: "10%", y: "20%" },
    { Icon: Calculator, delay: 0.5, x: "85%", y: "30%" },
    // { Icon: Users, delay: 1, x: "15%", y: "75%" },
    { Icon: TrendingUp, delay: 1.5, x: "80%", y: "80%" },
    { Icon: Building2, delay: 2, x: "50%", y: "5%" },
    // { Icon: Handshake, delay: 2.5, x: "5%", y: "50%" },
  ];

  return (
    <>
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1D87A1]/10 backdrop-blur-md border border-[#1D87A1]/20 shadow-xl"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: -20 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -15, 0],
          }}
          transition={{
            delay: 0.5 + delay * 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            y: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay * 0.2,
            },
          }}
        >
          <Icon size={24} className="text-[#1D87A1]/80" strokeWidth={1.5} />
        </motion.div>
      ))}
    </>
  );
};

// Animated background orbs – now in brand color with low opacity
const BackgroundOrbs = () => {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#1D87A1]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#1D87A1]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D87A1]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white py-16 md:py-20 text-[#1D87A1]"
    >
      {/* Background Elements */}
      <BackgroundOrbs />
      <FloatingIcons />

      {/* Animated particle dots – using brand color with low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#1D87A1]/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top Section: Disclaimer + Link */}
          <div className="flex flex-col items-start justify-start  gap-4 mb-12 pb-12 border-b border-[#1D87A1]/10">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#1D87A1]/70 flex flex-row text-xs sm:text-sm leading-relaxed max-w-xl text-center sm:text-left"
            >
              * Results are hypothetical and may not be accurate. This is not a
              commitment to lend nor a preapproval. Consult a financial
              professional for full details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1D87A1] backdrop-blur-sm hover:bg-[#1D87A1]/20 border border-[#1D87A1]/20 rounded-xl text-sm font-medium text-white hover:text-[#1D87A1] transition-all duration-300 group"
              >
                See All Mortgage Calculators
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* Welcome Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                className="p-2 rounded-xl bg-[#1D87A1]/10 backdrop-blur-sm border border-[#1D87A1]/10"
              >
                <Sparkles size={20} className="text-[#1D87A1]" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-xl font-bold text-[#1D87A1]"
              >
                Welcome to our website
              </motion.h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#1D87A1]/80 text-sm sm:text-base leading-relaxed max-w-3xl"
            >
              We know that each customer has specific needs, so we strive to
              meet those specific needs with a wide array of products,
              investment tools, mortgages and best of all quality service and
              individual attention.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#1D87A1]/80 text-sm sm:text-base leading-relaxed max-w-3xl mt-4"
            >
              Today's technology is providing a more productive environment to
              work in. For example, through our website you can submit a
              complete on-line, secure loan application or pre-qualify for a
              home loan. You may also evaluate your different financing options
              by using our interactive calculators and going over various
              mortgage scenarios.
            </motion.p>

            {/* Animated divider with shine – brand color */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-32 h-0.5 bg-gradient-to-r from-[#1D87A1]/60 via-[#1D87A1]/20 to-transparent mt-6 rounded-full"
            />

            {/* Bottom action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}