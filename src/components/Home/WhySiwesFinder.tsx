import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Zap, Star } from "lucide-react";


export default function WhySiwesFinder( ) {
  return (
    <section className="w-full max-w-6xl mx-auto px-3 md:px-10 pt-8 md:pt-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
        Why Siwes Finder??
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1 - Blue */}
        <Card className="bg-blue-50 border-blue-200 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.5)] transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col space-y-2 md:space-y-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 md:mb-2">
                  Eager to Learn,
                </h3>
                <h3 className="text-2xl font-semibold text-gray-900 md:mb-4">
                  Hardworking Interns
                </h3>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:pe-10">
                Offering roles in branding, web design, and multimedia. These
                positions are crucial for effective communication and visual
                storytelling in various industries.
              </p>

              <Button
                variant="outline"
                className="w-fit bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              >
                Start Hiring
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 - Purple */}
        <Card className="bg-purple-50 border-purple-200 hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.5)] transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 md:mb-2">
                  Eager to Learn,
                </h3>
                <h3 className="text-2xl font-semibold text-gray-900 md:mb-4">
                  Hardworking Interns
                </h3>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                Offering roles in branding, web design, and multimedia. These
                positions are crucial for effective communication and visual
                storytelling in various industries.
              </p>

              <Button
                variant="outline"
                className="w-fit bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              >
                Start Hiring
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 - Green with Image */}
        <Card className="bg-green-50 border-green-200 hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.5)] transition-shadow duration-300 md:col-span-2">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-6 lg:space-y-0">
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 md:mb-2">
                    Eager to Learn,
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-900 md:mb-4">
                    Hardworking Interns
                  </h3>
                </div>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:pe-24">
                  Offering roles in branding, web design, and multimedia. These
                  positions are crucial for effective communication and visual
                  storytelling in various industries.
                </p>

                <Button
                  variant="outline"
                  className="w-fit bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                >
                  Start Hiring
                </Button>
              </div>

              <div className="flex-shrink-0 lg:w-80">
                <div className="relative">
                  <img
                    src={"/jobMockup.png"}
                    alt="Job Application Interface"
                    className="w-full hidden md:inline-block h-auto max-w-sm mx-auto lg:max-w-none rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
