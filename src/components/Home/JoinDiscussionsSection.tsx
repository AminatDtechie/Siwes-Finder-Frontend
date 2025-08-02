import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageCircle, Eye } from "lucide-react";

export default function JoinDiscussionsSection() {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-8 md:py-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-medium text-center text-gray-900 mb-6 md:mb-6">
        Join Real Discussions
      </h2>

      {/* Discussion Card */}
      <Card className="bg-gray-100 hover:bg-gray-200 duration-200 mb-8">
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
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Just finished my interview with Shell Nigeria!. three rounds:
              Technical (circuit analysis), behavioural (teamwork scenarious),
              and final chat with the engineering manager. The technical prep
              material here were spot-on. They said to get back in 48
              hours-Finger crossed 🤞
            </p>
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

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          className="w-full sm:w-1/2 px-6 py-3 cursor-pointer border-gray-300 hover:bg-gray-50 text-gray-700"
        >
          Join Discussion
        </Button>
        <Button className="w-full sm:w-1/2 px-6 py-3 cursor-pointer bg-blue-800 hover:bg-blue-900 text-white">
          Discover Communities
        </Button>
      </div>
    </section>
  );
}
