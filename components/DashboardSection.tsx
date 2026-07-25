"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DashboardSection() {
    const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  return (
    <section className="relative w-full  overflow-hidden bg-white py-20 md:py-28 text-[#1D87A1]">
      <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md md:hidden flex aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              animate={{
                y: [0, -12, 0],
                rotateX: [2, -1, 2],
                rotateY: [0, 1, 0],
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                perspective: "800px",
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* 3D Depth shadow layer */}
              <div
                className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)",
                }}
              />

              {/* Image */}
              <Image
                src="./img/tablet.png"
                alt="Loanzify App Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
      <motion.div
        className="absolute top-0 text-[#1D87A1] left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto text-[#1D87A1] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block px-4 text-[#1D87A1]  py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Dashboard
            </motion.span>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              See how Simple <br />
              <span className="bg-clip-text text-[#1D87A1] text-transparent bg-gradient-to-r from-[#1D87A1] to-blue-100">
                it can be...
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl  max-w-lg text-[#1D87A1] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              The Loanzify App guides you through your mortgage financing and
              connects you directly to your loan officer and realtor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/download"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1D87A1]  via-[#30ACBF] to-[#2D89A1] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <Smartphone size={22} />
                Download the App
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          

            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg hidden md:flex aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              animate={{
                y: [0, -12, 0],
                rotateX: [2, -1, 2],
                rotateY: [0, 1, 0],
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{
                perspective: "800px",
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* 3D Depth shadow layer */}
              <div
                className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)",
                }}
              />

              {/* Image */}
              <Image
                src="./img/tablet.png"
                alt="Loanzify App Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
