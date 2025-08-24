import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { FilterDialog, type FilterParams } from "./FilterDialog";

const SearchPlacements = ({
  searchTerm,
  setSearchTerm,
  onApplyFilters,
  initialFilters = {},
  currentFilters,
  dropdownOptions
}) => {
  // Check if any filters are active
  const hasActiveFilters = currentFilters
    ? currentFilters.role ||
      currentFilters.location ||
      currentFilters.duration ||
      currentFilters.recentlyPosted
    : false;

  const handleOpenFilterDialog = () => {
    setIsFilterDialogOpen(true);
  };

  const handleApplyFilters = (filters: FilterParams) => {
    onApplyFilters(filters); // update parent
    setIsFilterDialogOpen(false);
  };

  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-10">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="relative">
          <Input
            type="text"
            placeholder="Find Placements"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onApplyFilters({ ...currentFilters, searchTerm: e.target.value });
            }}
            className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

          <Button
            variant="ghost"
            size="sm"
            onClick={handleOpenFilterDialog}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full ${
              hasActiveFilters ? "bg-blue-50 text-blue-600" : "text-gray-600"
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            {hasActiveFilters && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </Button>
        </div>
      </div>

      {/* Filter Dialog */}
      <FilterDialog
        isOpen={isFilterDialogOpen}
        onOpenChange={setIsFilterDialogOpen}
        searchTerm={searchTerm}
        onApplyFilters={handleApplyFilters}
        initialFilters={currentFilters || initialFilters}
        dropdownOptions={dropdownOptions}
      />

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-white border border-gray-300 rounded-full p-2 shadow-sm">
          <div className="flex items-center">
            {/* Search Role */}
            <div className="flex-1 px-4 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Search role
              </div>
              <Input
                type="text"
                placeholder="e.g Frontend"
                value={currentFilters.role}
                onChange={(e) =>
                  onApplyFilters({ ...currentFilters, role: e.target.value })
                }
                className="!border-none !outline-none !ring-0 !focus:ring-0 !focus:outline-none !focus:border-none p-0 text-gray-600 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300"></div>

            {/* Choose Location */}
            <div className="flex-1 px-4 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Choose location
              </div>
              <Input
                type="text"
                placeholder="e.g Ikorodu, Lagos"
                value={currentFilters.location}
                onChange={(e) =>
                  onApplyFilters({
                    ...currentFilters,
                    location: e.target.value,
                  })
                }
                className="!border-none !outline-none !ring-0 !focus:ring-0 !focus:outline-none !focus:border-none p-0 text-gray-600 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Divider */}
            <div className="w-px h-12 bg-gray-300"></div>

            {/* Select Duration */}
            <div className="flex-1 px-4 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                Select duration
              </div>
              <Input
                type="text"
                placeholder="e.g 3 months"
                value={currentFilters.duration}
                onChange={(e) =>
                  onApplyFilters({
                    ...currentFilters,
                    duration: e.target.value,
                  })
                }
                className="!border-none !outline-none !ring-0 !focus:ring-0 !focus:outline-none !focus:border-none p-0 text-gray-600 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Search Button */}
            <div className="ml-2">
              <Button className="w-12 h-12 bg-blue-900 hover:bg-blue-800 rounded-full p-0 flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPlacements;
