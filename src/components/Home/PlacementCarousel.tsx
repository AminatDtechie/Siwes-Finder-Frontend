import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Banknote,
  Link,
  Lock
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import usePlacement from "@/hooks/usePlacement";
import { formatCreatedAt } from "@/utils/formmaters";
import PlacementSkeleton from "../ui/PlacementSkeleton";

interface Placement {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  postedTime: string;
}

export default function PlacementsCarousel() {
  const { getPlacements } = usePlacement();

  const { data, isLoading, isError, error } = getPlacements;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const increment = window.innerWidth < 768 ? 1 : 3;
      return prevIndex + increment >= data.length ? 0 : prevIndex + increment;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const increment = window.innerWidth < 768 ? 1 : 3;
      return prevIndex === 0
        ? Math.max(0, data?.length - increment)
        : prevIndex - increment;
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 md:px-24 py-8 md:py-12">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <p className="text-base mb-2">What are you looking for today?</p>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Recently posted Placements
        </h2>
      </div>

      {isLoading || (isError && <PlacementSkeleton />)}

      {/* Carousel Container */}
      <div className="relative">
        {/* Placements Grid */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))
              }%)`,
            }}
          >
          {data?.map((placement, index) => {
            const isLocked = placement.isLocked;

            return (
              <div
                key={placement.id}
                className="w-full md:w-1/3 flex-shrink-0 px-2"
              >
                <Card className="h-full bg-gray-100 shadow-sm transition-all duration-200 hover:bg-gray-200">
                  <CardContent className="p-6 flex flex-col h-full">
                    
                    {/* Job Title & Industry — always visible */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {placement.position_title}
                      </h3>
                      <p className="text-sm capitalize text-gray-600">
                        {placement.industry} ({placement.position_type})
                      </p>
                    </div>

                    {/* Description — locked or visible */}
                    {isLocked ? (
                      <div className="flex flex-col items-center justify-center text-center bg-white border border-dashed border-gray-300 rounded-lg px-4 py-6 mb-6 min-h-[4.5rem]">
                        <Lock className="w-4 h-4 text-gray-400 mb-2" />
                        <p className="text-xs text-gray-500">
                          Sign in to read the full description
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-700 leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
                        {placement.description}
                      </p>
                    )}

                    {/* Location and Salary — always visible */}
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{placement.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Banknote className="w-4 h-4 mr-1" />
                        <span>
                          {placement.salary_amount ? placement.salary_amount : "Unpaid"}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {!isLocked ? (
                      <div className="flex gap-3 mt-auto">
                        <RouterLink to={`/placements/${placement.id}`} className="flex-1">
                          <Button className="w-full cursor-pointer btn-custom text-white">
                            View Details
                          </Button>
                        </RouterLink>
                        <Button
                          variant="outline"
                          className="flex cursor-pointer items-center gap-1 border-gray-500"
                        >
                          <Link className="w-4 h-4" />
                          Share
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <RouterLink to="/login">
                          <Button className="w-full btn-custom text-white">
                            Login to View Details
                          </Button>
                        </RouterLink>
                      </div>
                    )}

                    {/* Posted Time */}
                    {!isLocked && (
                      <p className="text-xs text-gray-500 text-right mt-4">
                        {formatCreatedAt(placement.created_at)}
                      </p>
                    )}

                  </CardContent>
                </Card>
              </div>
            );
          })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center md:justify-start mt-6 space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="w-8 h-8 p-0 rounded-full cursor-pointer border-gray-300 hover:bg-gray-50"
            disabled={isError || isLoading || currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="w-8 h-8 p-0 rounded-full cursor-pointer border-gray-300 hover:bg-gray-50"
            disabled={
              window.innerWidth < 768
                ? currentIndex >= data?.length - 1
                : currentIndex >= data?.length - 3 || isError || isLoading
            }
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
