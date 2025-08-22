import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, MessageCircle, Eye } from "lucide-react";

const posts = [
  {
    id: 7,
    name: "Ifeanyi Ubah",
    role: "Petroleum Engineering, UNIBEN",
    time: "4 days ago",
    content:
      "Interning at NNPC Port Harcourt. The safety drills are intense but super important. Respect for the industry 👷‍♂️",
    likes: 22,
    comments: 7,
    views: 170,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 8,
    name: "Fatima Suleiman",
    role: "Statistics, ABU Zaria",
    time: "4 days ago",
    content:
      "Feeling left out 😔. Most of my friends already got placements but I’m still struggling to find one. This process is draining.",
    likes: 12,
    comments: 15,
    views: 140,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 9,
    name: "Michael Johnson",
    role: "Computer Engineering, UI",
    time: "5 days ago",
    content:
      "My SIWES supervisor barely pays attention to us. We just sit around most days doing nothing. Not what I expected 😤",
    likes: 8,
    comments: 30,
    views: 200,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 10,
    name: "Grace Akintola",
    role: "Business Admin, UNILORIN",
    time: "6 days ago",
    content:
      "Started my internship at a fintech startup today! The team is super welcoming and I already feel like I’m contributing 🙌",
    likes: 60,
    comments: 18,
    views: 500,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 11,
    name: "David Nwosu",
    role: "Electrical Engineering, UNILAG",
    time: "6 days ago",
    content:
      "They promised us exposure during SIWES but all we’ve been doing is carrying files from one office to another 😒",
    likes: 5,
    comments: 12,
    views: 95,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 12,
    name: "Zainab Lawal",
    role: "Mass Communication, LASU",
    time: "1 week ago",
    content:
      "Got to help draft my first press release during internship today 📝. Honestly feels like what we studied is paying off!",
    likes: 44,
    comments: 9,
    views: 260,
    avatar: "/api/placeholder/40/40",
  },
  {
    id: 13,
    name: "Oluwatobi Adebayo",
    role: "Computer Science, FUTMINNA",
    time: "1 week ago",
    content:
      "Not impressed. The company I was posted to doesn’t even have proper internet. How are we supposed to learn anything in 2025 like this? 🤦‍♂️",
    likes: 3,
    comments: 22,
    views: 120,
    avatar: "/api/placeholder/40/40",
  },
];


const Discussion = () => {
  return (
    <div className="w-full lg:w-1/2 mx-auto my-3 md:mx-0">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-gray-900">
          Join Real Discussions
        </h2>
      </div>

      {/* Discussion Card */}
      {posts.map((post, index) => (
        <div key={post.id}>
          {/* Top line for first, middle line for others */}
          <div className="border-t border-gray-200" />

          <Card className="border-0 shadow-none rounded-none">
            <CardContent className="break-words">
              {/* User Info */}
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="w-10 h-10 flex-shrink-0">
                  <AvatarImage src={post.avatar} alt={post.name} />
                  <AvatarFallback className="bg-gray-200 text-gray-600 text-sm font-medium">
                    {post.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {post.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>{post.role}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-4">
                <p className="text-black text-sm leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 text-xs text-gray-700">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.likes} likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments} comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom line for last card */}
          {index === posts.length - 1 && (
            <div className="border-t border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Discussion;
