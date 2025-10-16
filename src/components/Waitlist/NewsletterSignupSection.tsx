"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import useWaitlist from "@/hooks/useWaitlist";

export default function NewsletterSignupSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
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
  const isLoading = joinWaitlist.isPending;
  const isSuccess = joinWaitlist.isSuccess;

  const onSubmit = (data) => {
    console.log("Newsletter email:", data.email);
    
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
    <section className="w-full bg-[#D9EDFF] mt-5 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Side - Paper Plane Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-shrink-0 order-2 lg:order-1"
          >
            <motion.img
              src="/paperplane.png"
              alt="Paper plane illustration"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left order-1 lg:order-2"
          >
            {/* Heading */}
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Get placements the moment they're posted!
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed max-w-2xl">
              Be the first to know when companies post new SIWES openings. Get
              ahead of thousands of other applicants.
            </p>

            {/* Email Form */}
            {isSuccess ? (
              <p className="text-green-700 font-medium">
                🎉 You're signed up! We'll keep you updated.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                {isMobile ? (
                  // Mobile Layout - Stacked
                  <div className="flex flex-col w-full max-w-md gap-3 mx-auto lg:mx-0">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                      disabled={isLoading}
                      className="px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
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
                  // Desktop Layout - Inline
                  <div className="flex flex-row w-full max-w-md lg:max-w-lg gap-3 mx-auto lg:mx-0">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                      disabled={isLoading}
                      className="flex-grow px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
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
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}