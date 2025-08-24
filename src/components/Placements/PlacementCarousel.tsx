import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Share,
  Banknote,
} from "lucide-react";
import { FilterParams } from "./FilterDialog";
import usePlacement from "@/hooks/usePlacement";
import { formatCreatedAt } from "@/utils/formmaters";
import PlacementSkeleton from "../ui/PlacementSkeleton";
import BadgeFilter from "./BadgeFilters";

interface Placement {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  postedTime: string;
}

interface PlacementCarouselProps {
  filters: FilterParams;
}

const PlacementCarousel: React.FC<PlacementCarouselProps> = ({ filters }) => {
  const { getPlacements } = usePlacement();

  const { data, isLoading, isError, error } = getPlacements;

  const filteredPlacements = data?.filter((p) => {
    return (
      (!filters.role ||
        p.position_title.toLowerCase().includes(filters.role.toLowerCase())) &&
      (!filters.location ||
        p.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.duration || p.duration === filters.duration) &&
      (!filters.searchTerm ||
        p.position_title
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()))
    );
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getInitialItemsPerPage());

  function getInitialItemsPerPage() {
    return typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 6;
  }

  // Update itemsPerPage on resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth < 768 ? 2 : 6;
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(1); // reset to first page on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(filteredPlacements?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPlacements = filteredPlacements?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-24 py-8">
      {/* Header */}
      <div className="mb-2">
        <p className="text-sm hidden md:inline-block text-gray-600 mb-2">
          What are you looking for today?
        </p>
        <BadgeFilter />
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900">
          Recently posted Placements
        </h2>
        <div className="block md:hidden">
          <p className="text-base text-gray-600 mt-2">
            Opportunities at your fingertips
          </p>
        </div>
      </div>

      {isLoading || (isError && <PlacementSkeleton />)}

      {/* Placements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {currentPlacements?.map((placement) => (
          <Card
            key={placement.id}
            className="bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-all duration-200"
          >
            <CardContent className="p-4 md:p-6">
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  {placement.position_title}
                </h3>
                <p className="text-sm text-gray-600 capitalize">
                  {placement.industry} ({placement.position_type})
                </p>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {placement.description}
              </p>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{placement.location}</span>
                </div>
                <div className="flex items-center">
                  <Banknote className="w-4 h-4 mr-1" />
                  <span>
                    {placement.salary_amount
                      ? placement.salary_amount
                      : "Unpaid"}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 justify-between mb-3">
                <Button className="flex btn-custom text-white text-sm">
                  View Details
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center !rounded-none gap-1 border-gray-500 text-sm"
                >
                  <Share className="w-4 h-4" />
                  Share
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-right">
                {formatCreatedAt(placement.created_at)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex items-center space-x-5">
          <Button
            variant="outline"
            size="sm"
            onClick={prevPage}
            disabled={isLoading || isError || currentPage === 1}
            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={isLoading || isError || currentPage === totalPages}
            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Page text shows beside buttons on desktop */}
          {isLoading || isError ? (
            ""
          ) : (
            <span className="hidden md:inline text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>

        {/* Page text moves to opposite side on mobile */}
        {isLoading || isError ? (
          ""
        ) : (
          <div className="md:hidden text-sm text-gray-600 text-right">
            Page {currentPage} of {totalPages}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlacementCarousel;
