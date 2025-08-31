import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <motion.div
      className="bg-white rounded-lg border-gray-200 w-full p-4"
      initial={{ opacity: 0, y: -20 }} // start hidden & slightly up
      animate={{ opacity: 1, y: 0 }} // fade in & drop down
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header Section */}
      <div className="md:flex items-end justify-between">
        {/* Left Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-2">
            Your SIWES Community
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Connect with students, share experiences, get support
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          className="md:my-0 my-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="cursor-pointer btn-custom hover:scale-105 transition-transform duration-300">
            <span className="inline font-normal">Make a Post</span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
