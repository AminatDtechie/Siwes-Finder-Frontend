import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Email submitted:", email);
  };

  return (
    <section className="w-full bg-[#D9EDFF] py-4 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Side - Paper Plane Illustration */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center justify-center">
              <img
                src={"paperplane.png"}
                alt="Paper plane with curved flight path"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-base md:text-xl font-bold text-gray-900 mb-4 leading-tight">
              Get placements the moment they're posted!
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed max-w-2xl">
              Be the first to know when companies post new SIWES openings. Get
              ahead of thousands of other applicants.
            </p>

            {/* Email Form */}
            <div className="flex w-full max-w-md lg:max-w-lg gap-3">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow basis-0 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button
                onClick={handleSubmit}
                className="shrink-0 px-4 py-3 bg-blue-900 hover:bg-blue-900 text-white font-medium"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
