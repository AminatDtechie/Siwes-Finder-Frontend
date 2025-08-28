import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  course: string;
  university: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adebayo Olumide",
    course: "Computer Science",
    university: "University of Lagos",
    avatar: "/avatar.png",
    rating: 5,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 2,
    name: "Isreal Ajayi",
    course: "Microbiology",
    university: "University of Ilorin",
    avatar: "/avatar.png",
    rating: 3,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 3,
    name: "Samuel Alapomeji",
    course: "Computer Science",
    university: "Lagos State University",
    avatar: "/avatar.png",
    rating: 3,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 4,
    name: "Oloko Muqaffa",
    course: "Computer Science",
    university: "Olabisi Onabanjo University",
    avatar: "/avatar.png",
    rating: 5,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
  {
    id: 5,
    name: "Precious Akande",
    course: "Computer Science",
    university: "Obafemi Awolowo University",
    avatar: "/avatar.png",
    rating: 5,
    testimonial:
      "I was looking for a job placement as a Biochemistry student. Everyone kept saying 'use connection'. I found a listing on here and applied — I got it!",
  },
];

export default function RecentPlacement({ role }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // On mobile: move by 1, on desktop: move by 3
      const increment = window.innerWidth < 768 ? 1 : 3;
      return (prevIndex + increment) % testimonials.length;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // On mobile: move by 1, on desktop: move by 3
      const increment = window.innerWidth < 768 ? 1 : 3;
      return prevIndex === 0
        ? testimonials.length - increment
        : prevIndex - increment;
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 md:px-24">
      {role === "student" && (
        <article className="my-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            2,400+ Students have secured placements from SiwesFinder, You can
            too!
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Here's what some of them are saying:
          </p>
        </article>
      )}

      {/* Carousel Container */}
      <div className="relative">
        {/* Testimonials Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {testimonial.course}, {testimonial.university}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center md:justify-start mt-6 space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50"
            disabled={
              window.innerWidth < 768
                ? currentIndex >= testimonials.length - 1
                : currentIndex >= testimonials.length - 3
            }
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
