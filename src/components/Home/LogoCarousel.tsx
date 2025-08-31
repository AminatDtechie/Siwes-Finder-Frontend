import { motion } from "framer-motion";

export default function LogoCarousel({ logos }) {
  return (
    <section className="w-full px-6 md:px-20 lg:px-28 py-8 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:border-l-4 border-blue-900 pl-4 text-center md:text-left"
        >
          <h2 className="font-semibold text-xl md:text-2xl text-gray-900">
            10,000+ verified placements listed
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Trusted by students from schools across Nigeria.
          </p>
        </motion.div>

        {/* Logos Section with auto-scroll animation */}
        <div className="flex-1 w-full overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-10 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                draggable={false}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
