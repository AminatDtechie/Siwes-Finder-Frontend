import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Search, Settings2, MapPin, Clock, ArrowLeft, X } from "lucide-react";

// Types for filter parameters
export interface FilterParams {
  role: string;
  location: string;
  duration: string;
  recentlyPosted: boolean;
  searchTerm: string;
}

interface FilterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  searchTerm: string;
  onApplyFilters: (filters: FilterParams) => void;
  initialFilters?: Partial<FilterParams>;
}

// Sample data - replace with your actual data
const roleOptions = [
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
  { value: "fullstack", label: "Full Stack Developer" },
  { value: "mobile", label: "Mobile Developer" },
  { value: "ui-ux", label: "UI/UX Designer" },
  { value: "data-analyst", label: "Data Analyst" },
  { value: "marketing", label: "Marketing" },
  { value: "business-analyst", label: "Business Analyst" },
];

const locationOptions = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "port-harcourt", label: "Port Harcourt" },
  { value: "kano", label: "Kano" },
  { value: "ibadan", label: "Ibadan" },
  { value: "enugu", label: "Enugu" },
  { value: "kaduna", label: "Kaduna" },
  { value: "remote", label: "Remote" },
];

const durationOptions = [
  { value: "3-months", label: "3 Months" },
  { value: "6-months", label: "6 Months" },
  { value: "12-months", label: "12 Months" },
  { value: "flexible", label: "Flexible" },
];

const FilterDialog: React.FC<FilterDialogProps> = ({
  isOpen,
  onOpenChange,
  searchTerm,
  onApplyFilters,
  initialFilters = {},
}) => {
  const [filters, setFilters] = useState<FilterParams>({
    role: initialFilters.role || "",
    location: initialFilters.location || "",
    duration: initialFilters.duration || "",
    recentlyPosted: initialFilters.recentlyPosted || false,
    searchTerm: searchTerm,
  });

  const handleApplyFilters = () => {
    const finalFilters = { ...filters, searchTerm };
    onApplyFilters(finalFilters);
    onOpenChange(false);
  };

  const handleClearFilters = () => {
    const clearedFilters: FilterParams = {
      role: "",
      location: "",
      duration: "",
      recentlyPosted: false,
      searchTerm: searchTerm,
    };
    setFilters(clearedFilters);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-[95vw] max-w-lg mx-auto max-h-[85vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle asChild>
            <div className="flex items-center justify-between w-full">
              {/* Back button and title */}
              <button
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-2 text-gray-800 font-medium text-base hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Filter placement
              </button>

              {/* Reset + Close buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearFilters}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Reset all
                </button>
                <button
                  onClick={() => onOpenChange(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Search by Role */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Settings2 className="w-4 h-4" />
              Search by role
            </label>
            <Select
              value={filters.role}
              onValueChange={(value) =>
                setFilters((prev) => ({ ...prev, role: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="e.g Frontend" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search by Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MapPin className="w-4 h-4" />
              Search by Location
            </label>
            <Select
              value={filters.location}
              onValueChange={(value) =>
                setFilters((prev) => ({ ...prev, location: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="e.g Ikorodu, Lagos" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Select Duration */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              Select Duration
            </label>
            <Select
              value={filters.duration}
              onValueChange={(value) =>
                setFilters((prev) => ({ ...prev, duration: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                {durationOptions.map((duration) => (
                  <SelectItem key={duration.value} value={duration.value}>
                    {duration.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* More Filters Button */}
          <Button
            variant="ghost"
            className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            onClick={() => {
              // Handle more filters - could open another dialog or expand current one
              console.log("More filters clicked");
            }}
          >
            More Filters
            <span className="text-base">›</span>
          </Button>

          {/* Recently Posted Switch */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Recently posted
            </label>
            <Switch
              checked={filters.recentlyPosted}
              onCheckedChange={(checked) =>
                setFilters((prev) => ({ ...prev, recentlyPosted: checked }))
              }
            />
          </div>

          {/* Action Buttons */}
          <div className="">
            {/* <Button
              variant="outline"
              onClick={handleClearFilters}
              className="flex-1"
            >
              Clear All
            </Button> */}
            <Button
              onClick={handleApplyFilters}
              className="bg-blue-900 w-full hover:bg-blue-700"
            >
              <Search className="w-4 h-4 mr-2" />
              Apply filters to search
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { FilterDialog };
