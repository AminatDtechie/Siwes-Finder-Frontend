import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, MessageCircle, Eye } from "lucide-react";
import { Badge } from "../ui/badge";
import { posts, categories } from "@/utils/dummies";
import { motion } from "framer-motion";

const Discussion = () => {
  return (
    <motion.div
      className="w-full lg:w-3/5 mx-auto my-3 md:mx-0 md:border-r px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold text-gray-900">
          Join Real Discussions
        </h2>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="w-full mb-2 overflow-x-auto scrollbar-hide"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        <div className="flex gap-2 min-w-max font-extralight">
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge
                className={`${cat.color} cursor-pointer rounded-2xl text-sm py-1 px-3 hover:opacity-90 transition`}
              >
                {cat.label}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Discussion Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            {/* Top line for first, middle line for others */}
            <div className="border-t border-gray-200" />

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-0 shadow-none rounded-none hover:shadow-sm transition-shadow">
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
                    <motion.div
                      className="flex items-center gap-1 cursor-pointer"
                      whileHover={{ scale: 1.2, color: "#2563eb" }} // blue-600
                      whileTap={{ scale: 0.9 }}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-1 cursor-pointer"
                      whileHover={{ scale: 1.2, color: "#16a34a" }} // green-600
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-1 cursor-pointer"
                      whileHover={{ scale: 1.2, color: "#6b7280" }} // gray-500
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bottom line for last card */}
            {index === posts.length - 1 && (
              <div className="border-t border-gray-200" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Discussion;
