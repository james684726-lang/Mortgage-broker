"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion"; // optional for scroll animation
import { useRef } from "react";

 function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "$150 M",
      label: "in loans funded to date",
    },
    {
      value: "97%",
      label: "customer satisfaction rate",
    },
    {
      value: "10-DAY",
      label: "average loan approval period",
    },
  ];

  return (
    <section
      className=" bg-gradient-to-r from-[#1D87A1]  via-[#30ACBF] to-[#2D89A1]  to-brand-end text-white py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg font-light uppercase tracking-widest mt-2 text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default StatsSection