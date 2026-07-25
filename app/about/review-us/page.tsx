"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  MapPin,
  Mail,
  Image,
  Star,
  Upload,
  CheckCircle,
} from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  const [name, setName] = useState("");
  const [cityState, setCityState] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <HeroSection />
      <section className="w-full bg-gradient-to-r from-[#1D87A1] via-[#30ACBF] to-[#2D89A1] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 sm:p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D87A1]">
                  Review Us
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  Thank you for taking the time to leave your review!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                    <User size={16} /> Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                    required
                  />
                </div>

                {/* City, State */}
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                    <MapPin size={16} /> Your City, State
                  </label>
                  <input
                    type="text"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    placeholder="New York, NY"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                    <Mail size={16} /> Your Email (for verification only, will not be displayed on site)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#1D87A1] focus:ring-2 focus:ring-[#1D87A1]/20 outline-none transition"
                    required
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                    <Image size={16} /> Upload your photo. Personalize it. (optional)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer px-4 py-2 bg-[#1D87A1]/10 border border-[#1D87A1]/30 rounded-xl text-[#1D87A1] text-sm font-medium hover:bg-[#1D87A1]/20 transition flex items-center gap-2">
                      <Upload size={16} />
                      Browse
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {photo && (
                      <span className="text-sm text-gray-500 truncate max-w-[150px]">
                        {photo.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Star Rating */}
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-[#1D87A1]">
                    <Star size={16} /> How would you rate our service?
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 focus:outline-none"
                      >
                        <Star
                          size={28}
                          className={`transition-colors ${
                            (hoverRating || rating) >= star
                              ? "fill-[#FBBF24] text-[#FBBF24]"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {rating > 0 && `${rating} / 5`}
                    </span>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-gray-400 leading-relaxed border-t border-gray-100 pt-4 mt-4">
                  By providing your phone number and/or email and clicking
                  "Submit" you agree to our terms of Service and Privacy Policy
                  and consent to receive marketing communications from LHP Demo
                  Company via text, call, or email, including automated messages.
                  To opt out, reply 'SIGN UP' to any text. Message and data rates
                  may apply.
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-[#1D87A1] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit
                </motion.button>
              </form>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 text-green-700 rounded-xl flex items-center gap-2 text-sm"
                >
                  <CheckCircle size={18} />
                  Thank you! Your review has been submitted.
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}