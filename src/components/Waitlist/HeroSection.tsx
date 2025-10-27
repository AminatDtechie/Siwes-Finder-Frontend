import { Button } from "@/components/ui/button";
import { Loader2, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import useWaitlist from "@/hooks/useWaitlist";
import { useEffect, useState } from "react";

export default function Hero() {
  const { register, handleSubmit, reset } = useForm();
  const { joinWaitlist, waitlistUser } = useWaitlist();
  const { data, isLoading } = waitlistUser;
  const [animatedCount, setAnimatedCount] = useState(0);

  const joinedCount = data?.length || 0;

  // Animated counter effect
  useEffect(() => {
    if (joinedCount > 0) {
      const timer = setTimeout(() => {
        setAnimatedCount(joinedCount);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [joinedCount]);

  const onSubmit = (formData) => {
    joinWaitlist.mutate(
      { email: formData.email },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <section className="w-full bg-[radial-gradient(ellipse_at_center,_#1e40af_0%,_#1e3a8a_40%,_#111827_70%,_#000000_100%)] text-white py-16 px-4">
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

        {/* Email Input + Inline Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ amount: 0.4 }}
          className="w-full flex justify-center"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[500px]"
          >
            <div className="flex justify-center relative">
              <div className="relative w-full flex items-center bg-black/50 backdrop-blur-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 p-1 rounded-sm">
                <Input
                  id="waitlistInput"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  disabled={joinWaitlist.isPending}
                  className="w-full h-12 !bg-transparent border-none outline-none focus:border-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none text-white placeholder:text-white/60 disabled:opacity-50 autofill:!bg-transparent autofill:!shadow-none autofill:!text-white"
                />

                <Button
                  type="submit"
                  disabled={joinWaitlist.isPending}
                  className="cursor-pointer h-12 px-8 bg-blue-800 hover:!bg-blue-500 text-white font-base rounded-sm transition-all duration-300 hidden sm:flex"
                >
                  {joinWaitlist.isPending ? (
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

            {/* Mobile Button Below Input */}
            <Button
              type="submit"
              disabled={joinWaitlist.isPending}
              className="sm:hidden mt-2 w-full h-12 bg-blue-800 hover:!bg-blue-500 text-white font-base rounded-sm transition-all duration-300"
            >
              {joinWaitlist.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>
        </motion.div>

        {/* Waitlist Anticipation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
          className="pt-8"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-gray-300 font-light">
                Loading exclusive waitlist
              </span>
            </div>
          ) : joinedCount > 0 ? (
            <div className="space-y-4">
              {/* Elegant Stats Row */}
              <div className="flex items-center justify-center gap-6">
                {/* Student Count */}
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 flex items-center justify-center backdrop-blur-sm">
                      <Users className="h-4 w-4 text-blue-300" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-light bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                        {animatedCount}
                      </span>
                      <span className="text-blue-300 text-sm">+</span>
                    </div>
                    <p className="text-xs text-gray-400 font-light tracking-wide">
                      PIONEERS
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

                {/* Growth Indicator */}
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                      <TrendingUp className="h-4 w-4 text-emerald-300" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-light text-emerald-300">
                        +{Math.ceil(joinedCount * 0.12)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 font-light tracking-wide">
                      TODAY
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress & CTA */}
              <div className="space-y-3">
                {/* Minimal Progress Bar */}
                <div className="flex justify-between items-center text-xs text-gray-400 font-light">
                  <span>Early Access List</span>
                  <span>
                    {Math.min((joinedCount / 500) * 100, 100)}% filled
                  </span>
                </div>
                <div className="w-48 mx-auto h-0.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${Math.min((joinedCount / 500) * 100, 100)}%`,
                    }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  />
                </div>

                {/* Luxury CTA Text */}
                <p className="text-xs text-gray-400 font-light tracking-wider">
                  Join the exclusive early access list • Priority onboarding
                  guaranteed
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <span className="text-xs">✨</span>
                </div>
              </div>
              <span className="text-gray-300 font-light">
                Be the founding member
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
