import { toast, Slide } from "react-toastify";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

export const onFailure = (error) => {
  const failureComponent = (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 p-4 min-w-[280px] bg-gradient-to-r from-red-100 to-red-50 shadow-2xl rounded-2xl border border-red-300 hover:shadow-red-400/40"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <MdCancel className="text-red-600 text-3xl" />
      </motion.div>

      <div className="flex flex-col">
        <strong className="text-gray-900 font-semibold text-sm capitalize">
          {error?.message}
        </strong>
        <p className="text-gray-600 text-xs mt-1">{error?.error}</p>
      </div>
    </motion.div>
  );

  toast(failureComponent, {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Slide,
    theme: "light",
  });
};
