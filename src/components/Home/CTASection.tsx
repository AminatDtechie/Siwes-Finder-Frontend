import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection({ role }) {
  const studentText =
    "Applying for placements is only available to Verified users. Sign up now to get a placement!";
  const companyText =
    "Posting placements is only available for verified users. Sign up now to start posting placements.";

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-12 text-center">
      {/* Badge/Alert */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.4 }}
        className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
      >
        <Zap className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-medium text-blue-700">Almost there</span>
        <span className="text-sm">🥳</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.4 }}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug mb-8 max-w-2xl mx-auto"
      >
        {role === "student" ? studentText : companyText}
      </motion.h2>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ amount: 0.4 }}
      >
        <Button className="bg-blue-900 hover:bg-blue-800 px-8 py-6 text-white text-base font-medium transition-all duration-200">
          Get Started
          <span className="ml-2">→</span>
        </Button>
      </motion.div>
    </section>
  );
}
