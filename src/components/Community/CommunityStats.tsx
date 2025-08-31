"use client";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityStats() {
  const stats = [
    { value: "20K", label: "Students onboarded" },
    { value: "30+", label: "Companies" },
    { value: "80%", label: "Success Rate" },
    { value: "80%", label: "Success Rate" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-sm border border-gray-200 p-6 w-full max-w-sm h-max"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-gray-900 font-semibold text-base">
          Community Stats
        </h3>
        <TrendingUp className="w-4 h-4 text-gray-600" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-y-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.3 }}
            className="flex flex-col justify-center items-center"
          >
            <span className="text-xl font-bold text-green-600">
              {stat.value}
            </span>
            <span className="text-xs text-gray-600 font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
