import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { PiGoogleLogo } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Hero({ role }) {
  return (
    <section
      className="w-full bg-[radial-gradient(ellipse_at_center,_#1e40af_0%,_#1e3a8a_40%,_#111827_70%,_#000000_100%)]
 text-white py-16 px-4 md:px-2"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.4 }} // 👈 triggers again when 40% is in view
          className="text-3xl md:text-[50px] font-bold leading-tight"
        >
          Find SIWES PLACEMENT EASILY
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ amount: 0.4 }}
          className="text-lg md:text-2xl px-4 text-gray-300"
        >
          Connect with top companies across Nigeria for your Industrial
          Training. No stress
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ amount: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button
            variant="outline"
            className="w-full md:w-auto bg-white text-black hover:bg-gray-100"
          >
            <PiGoogleLogo className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>

          <Button className="w-full md:w-auto bg-[#2563eb] hover:bg-[#1d4ed8]">
            <Mail className="mr-2 h-5 w-5" />
            Continue with Email
          </Button>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ amount: 0.4 }}
          className="text-sm text-gray-200 mt-4"
        >
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            T&C
          </a>
        </motion.p>

        {/* Role-based CTA */}
        {role === "student" && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ amount: 0.4 }}
            className="md:text-md text-sm text-white mt-4"
          >
            Looking for student interns?{" "}
            <a href="#" className="underline">
              Register as a Company
            </a>
          </motion.p>
        )}
      </div>
    </section>
  );
}
