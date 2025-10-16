import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react"; // 👈 Import Loader2 for spinner
import { PiGoogleLogo } from "react-icons/pi";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import useWaitlist from "@/hooks/useWaitlist";
import { useState, useEffect } from "react";

export default function Hero({ role }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { joinWaitlist } = useWaitlist();
  const isLoading = joinWaitlist.isPending; // 👈 Get loading state

  const onSubmit = (data) => {
    console.log("data", data.email);
    
    joinWaitlist.mutate(
      { email: data.email },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <section
      className="w-full bg-[radial-gradient(ellipse_at_center,_#1e40af_0%,_#1e3a8a_40%,_#111827_70%,_#000000_100%)] text-white py-16 px-4 md:px-2"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="text-3xl md:text-[50px] font-bold leading-tight"
        >
          Finally, SIWES Placement Without the Stress
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ amount: 0.4 }}
          className="text-lg md:text-xl px-4 text-gray-100"
        >
          Because every student deserves verified SIWES without the stress.
          Register now to get early access and be notified when we launch!
        </motion.p>

        {/* Email Input and Button */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ amount: 0.4 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {isMobile ? (
                // Mobile Layout
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                    disabled={isLoading} // 👈 Disable input while loading
                    className="w-full h-12 px-4 rounded-lg bg-white text-black placeholder:text-black text-center focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading} // 👈 Disable button while loading
                    className="w-full h-12 text-lg bg-blue-800 hover:!bg-blue-500 text-white font-base rounded-md">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </div>
              ) : (
                // Desktop Layout
                <div className="flex justify-center relative">
                  <div className="relative w-full max-w-[500px]">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                      disabled={isLoading} // 👈 Disable input while loading
                      className="w-full h-14 pl-6 pr-36 rounded-sm bg-black/50 border-none backdrop-blur-lg text-white placeholder:text-white/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading} // 👈 Disable button while loading
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-12 px-8 bg-blue-800 hover:!bg-blue-500 text-white font-base rounded-sm">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </motion.p>
      </div>
    </section>
  );
}