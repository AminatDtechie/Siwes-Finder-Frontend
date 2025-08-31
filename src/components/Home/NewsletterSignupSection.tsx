"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#D9EDFF] mt-5 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Side - Paper Plane Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0 order-2 lg:order-1"
          >
            <motion.img
              src="/paperplane.png"
              alt="Paper plane illustration"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left order-1 lg:order-2"
          >
            {/* Heading */}
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Get placements the moment they're posted!
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed max-w-2xl">
              Be the first to know when companies post new SIWES openings. Get
              ahead of thousands of other applicants.
            </p>

            {/* Email Form */}
            {submitted ? (
              <p className="text-green-700 font-medium">
                🎉 You're signed up! We'll keep you updated.
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row w-full max-w-md lg:max-w-lg gap-3 mx-auto lg:mx-0">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={!email}
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
