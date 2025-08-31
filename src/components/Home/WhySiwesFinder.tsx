import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

const cardData = (role) => [
  {
    color: "blue",
    icon: Flame,
    title: role === "student" ? "Find Top Companies" : "Eager to Learn,",
    subtitle:
      role === "student" ? "For Your SIWES Placement" : "Hardworking Interns",
    description:
      role === "student"
        ? "Discover verified SIWES opportunities in tech, engineering, and more."
        : "Hire students passionate about contributing and growing in real-world roles.",
    buttonText: role === "student" ? "Find Placements" : "Start Hiring",
  },
  {
    color: "purple",
    icon: Zap,
    title:
      role === "student" ? "Verified Opportunities" : "Skilled & Adaptable",
    subtitle:
      role === "student" ? "No Scam, No Stress" : "Interns Across Fields",
    description:
      role === "student"
        ? "We carefully list real placements across industries in Nigeria."
        : "From design to development, interns bring diverse talents to your company.",
    buttonText: role === "student" ? "Get Started" : "Hire Now",
  },
  {
    color: "green",
    icon: Star,
    title: "Streamlined Process",
    subtitle: role === "student" ? "Apply with Ease" : "Hire with Confidence",
    description:
      role === "student"
        ? "Quickly apply to multiple companies through one platform."
        : "Easily shortlist, interview, and onboard interns who fit your needs.",
    buttonText: role === "student" ? "Start Applying" : "Start Hiring",
    hasImage: true,
  },
];

const WhySiwesFinder = ({ role }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-3 md:px-10 pt-8 md:pt-12">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12"
      >
        {role === "student"
          ? "Why Siwes Finder?"
          : "Why Hire From Siwes Finder?"}
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cardData(role).map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ amount: 0.3 }}
              className={`${card.hasImage ? "md:col-span-2" : ""}`}
            >
              <Card
                className={`bg-${card.color}-50 border-${card.color}-200 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.3)] transition-shadow duration-300`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-6 lg:space-y-0">
                    <div className="flex-1 space-y-4">
                      <div
                        className={`w-12 h-12 bg-${card.color}-500 rounded-full flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 md:mb-2">
                          {card.title}
                        </h3>
                        <h3 className="text-2xl font-semibold text-gray-900 md:mb-4">
                          {card.subtitle}
                        </h3>
                      </div>

                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:pe-10">
                        {card.description}
                      </p>

                      <Button
                        variant="outline"
                        className="w-fit bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                      >
                        {card.buttonText}
                      </Button>
                    </div>

                    {/* Optional Image */}
                    {card.hasImage && (
                      <div className="flex-shrink-0 lg:w-80">
                        <img
                          src="/jobMockup.png"
                          alt="Job Application Interface"
                          className="w-full hidden md:inline-block h-auto max-w-sm mx-auto lg:max-w-none rounded-lg shadow-sm"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhySiwesFinder;
