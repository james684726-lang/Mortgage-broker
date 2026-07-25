"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image"; // optional, but recommended for Next.js

// Floating 3D Cube (unchanged)
const FloatingCube = () => {
  return (
    <motion.div
      className="absolute hidden lg:block right-10 top-1/2 -translate-y-1/2 w-40 h-40"
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        y: [-20, 20, -20],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ perspective: "600px" }}
    >
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-20deg) rotateY(30deg)",
        }}
      >
        {[...Array(6)].map((_, i) => {
          const rotations = [
            "rotateY(0deg) translateZ(80px)",
            "rotateY(180deg) translateZ(80px)",
            "rotateY(-90deg) translateZ(80px)",
            "rotateY(90deg) translateZ(80px)",
            "rotateX(90deg) translateZ(80px)",
            "rotateX(-90deg) translateZ(80px)",
          ];
          return (
            <div
              key={i}
              className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
              style={{
                transform: rotations[i],
                backfaceVisibility: "hidden",
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export function HeroSection() {
  const steps = [
    { icon: User, text: "Tell Us About Yourself", href:"/about/contact" },
    { icon: FileText, text: "Get a Quick Quote", href:"/about/testimonials" },
    { icon: CheckCircle, text: "Apply Today", href:"/about/contact" },
  ];

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white py-20 md:py-32"
      style={{
        background: "linear-gradient(to right, #1D87A1, #30ACBF, #2D89A1)/20",
      }}
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/img/hero.png"
          alt="Hero background"
          fill
          className="object-cover opacity-50" // adjust opacity (0–1) as needed
          priority // loads faster
        />
      </div>

      {/* Animated background orbs (z-index above image) */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl z-10"
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl z-10"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingCube />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textShadow:
                "0 10px 30px rgba(0,0,0,0.25), 0 0 20px rgba(255,255,255,0.15)",
              transform: "perspective(600px) rotateX(2deg)",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-50 to-white">
              Home Loans
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-light mt-2 text-white/80 tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            SIMPLIFIED
          </motion.p>

          {/* Three Steps with Lucide Icons & Stagger */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <step.icon
                  size={40}
                  className="text-white mb-3 drop-shadow-lg"
                  strokeWidth={1.5}
                />
                <span className="text-lg font-medium text-white/95">
                  {step.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Interactive CTA Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              setRotate({ x: y * 10, y: x * 10 });
            }}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            style={{ perspective: "800px" }}
          >
            <Link
              href="/about/contact"
              className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-[#1D87A1] bg-white rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(10px)`,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)",
              }}
            >
              Get Started
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
