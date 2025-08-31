import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/utils/dummies";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
export default function RecentPlacement({ role }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

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

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onResize={(swiper) =>
            setSlidesPerView(swiper.params.slidesPerView as number)
          }
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
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

                  {/* Testimonial */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Custom nav buttons with disabled state */}
        <div className="flex justify-center md:justify-start mt-6 space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50"
            aria-label="Previous testimonials"
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50"
            aria-label="Next testimonials"
            disabled={activeIndex >= testimonials.length - slidesPerView}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
