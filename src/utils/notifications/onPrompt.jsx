import { toast, Slide } from "react-toastify";
import { IoInformationCircle } from "react-icons/io5";
import { motion } from "framer-motion";

export const onPrompt = ({ title, message }) => {
  const promptComponent = (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 p-4 min-w-[280px] bg-gradient-to-r from-gray-100 to-gray-50 shadow-2xl rounded-2xl border border-gray-300 hover:shadow-gray-400/30"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <IoInformationCircle className="text-gray-600 text-3xl" />
      </motion.div>

      <div className="flex flex-col">
        <strong className="text-gray-900 font-semibold text-sm">
          {title || "Prompt"}
        </strong>
        <p className="text-gray-600 text-xs mt-1">{message}</p>
      </div>
    </motion.div>
  );

  toast(promptComponent, {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Slide,
    theme: "light",
  });
};
