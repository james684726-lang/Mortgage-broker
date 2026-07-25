"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, MessageSquare, ArrowRight, Quote } from "lucide-react";

 function TestimonialsPage() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-10 md:p-12 text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-[#1D87A1] mb-2"
            >
              Testimonials
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-500 text-sm md:text-base mb-8"
            >
              Be the first one to give us a review.
            </motion.p>

            {/* Quote / Review Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#F8FAFB] rounded-2xl p-6 sm:p-8 mb-8 relative"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-[#1D87A1]/20 absolute top-4 left-4"
              />
              <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed max-w-md mx-auto pt-2">
                “Leave us a Review”
              </p>
              {/* 5 gold stars */}
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/about/review-us"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1D87A1] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageSquare size={18} />
                Leave us a Review
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default TestimonialsPage