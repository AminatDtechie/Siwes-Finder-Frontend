"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const QuickActions = () => {
  const actions = [
    { id: 1, label: "Find Placements", href: "#" },
    { id: 2, label: "Ask Question", href: "#" },
    { id: 3, label: "Help Center", href: "#" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow border border-gray-200 p-4 w-72 mt-2"
    >
      {/* Title */}
      <h2 className="text-base font-semibold mb-3 text-gray-900">
        Quick Actions
      </h2>

      {/* Links */}
      <div className="space-y-2">
        {actions.map((action, index) => (
          <motion.a
            key={action.id}
            href={action.href}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.3 }}
            className="flex justify-between items-center px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition"
          >
            <span className="text-gray-700 text-sm">{action.label}</span>
            <ArrowUpRight size={16} className="text-gray-500" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default QuickActions;
