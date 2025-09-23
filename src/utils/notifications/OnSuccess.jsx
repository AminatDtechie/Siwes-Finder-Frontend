import { toast, Slide } from "react-toastify";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

export const onSuccess = (success) => {
  const successComponent = (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 p-4 min-w-[280px] bg-gradient-to-r from-green-200 to-green-50 shadow-2xl rounded-2xl border border-green-300 hover:shadow-green-400/40"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <MdCheckCircle className="text-green-600 text-3xl" />
      </motion.div>

      <div className="flex flex-col">
        <strong className="text-gray-900 font-semibold text-sm">
          {success.message}
        </strong>
        <p className="text-gray-600 text-xs mt-1">{success.success}</p>
      </div>
    </motion.div>
  );

  toast(successComponent, {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Slide,
    theme: "light",
  });
};
