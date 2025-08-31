import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function JoinDiscussionsSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-8 md:py-12">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-6 md:mb-6"
      >
        Join Real Discussions
      </motion.h2>

      {/* Discussion Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gray-100 hover:shadow-md hover:scale-[1.01] transition-transform duration-200 mb-8">
          <CardContent className="p-4 md:p-8">
            {/* User Info */}
            <div className="flex items-center mb-4">
              <img
                src="/avatar.png"
                alt="Tunde Martins"
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                  Tunde Martins
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Electrical Engineering, OAU • 3 hours ago
                </p>
              </div>
            </div>

            {/* Discussion Content */}
            <div className="mb-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3">
                Just finished my interview with Shell Nigeria! Three rounds:
                Technical (circuit analysis), behavioural (teamwork scenarios),
                and final chat with the engineering manager. The technical prep
                material here was spot-on. They said to get back in 48 hours —
                Fingers crossed 🤞
              </p>
              <button className="text-blue-700 text-sm mt-2 hover:underline">
                Read more
              </button>
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-xs md:text-base">24 Likes</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs md:text-base">24 Comments</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs md:text-base">120 views</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          variant="outline"
          className="w-full sm:w-1/2 px-6 py-3 cursor-pointer border-gray-300 hover:bg-gray-50 text-gray-700"
        >
          Join Discussion
        </Button>
        <Button className="w-full sm:w-1/2 px-6 py-3 cursor-pointer bg-blue-800 hover:bg-blue-900 text-white">
          Discover Communities
        </Button>
      </motion.div>
    </section>
  );
}
