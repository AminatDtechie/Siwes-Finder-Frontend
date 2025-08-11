import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Share,
} from "lucide-react";
import { FilterParams } from "./FilterDialog";

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

const placements: Placement[] = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Flutterwave (Remote)",
    description:
      "Work with senior engineers to build user-facing features using React and Tailwind CSS.",
    location: "Remote",
    salary: "₦100k/Month",
    postedTime: "2 hours ago",
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Paystack (On-site)",
    description:
      "Assist in building scalable backend services using Node.js and PostgreSQL.",
    location: "Ikeja, Lagos",
    salary: "₦120k/Month",
    postedTime: "1 day ago",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Hotels.ng (Remote)",
    description:
      "Collaborate with the product team to create wireframes, mockups, and improve user experience.",
    location: "Remote",
    salary: "₦80k/Month",
    postedTime: "5 hours ago",
  },
  {
    id: 4,
    title: "Data Analyst Intern",
    company: "Kuda Bank",
    description:
      "Analyze user and product data to provide insights and reports to internal teams.",
    location: "Yaba, Lagos",
    salary: "₦90k/Month",
    postedTime: "3 days ago",
  },
  {
    id: 5,
    title: "Mobile App Developer Intern",
    company: "Interswitch",
    description: "Help build mobile apps using Flutter and React Native.",
    location: "Victoria Island, Lagos",
    salary: "₦110k/Month",
    postedTime: "6 hours ago",
  },
  {
    id: 6,
    title: "Full Stack Developer Intern",
    company: "Andela (On-site)",
    description:
      "Work across both frontend and backend with mentoring from senior devs.",
    location: "Lekki, Lagos",
    salary: "₦130k/Month",
    postedTime: "4 hours ago",
  },
  {
    id: 7,
    title: "Digital Marketing Intern",
    company: "FarmCrowdy",
    description:
      "Plan and execute digital marketing strategies for online campaigns.",
    location: "Ibadan, Oyo",
    salary: "₦70k/Month",
    postedTime: "2 days ago",
  },
  {
    id: 8,
    title: "Product Management Intern",
    company: "Opay",
    description:
      "Support the product team in gathering requirements and coordinating releases.",
    location: "Abuja, FCT",
    salary: "₦95k/Month",
    postedTime: "12 hours ago",
  },
  {
    id: 9,
    title: "Business Analyst Intern",
    company: "Paga",
    description:
      "Evaluate business data to suggest improvements and inform decisions.",
    location: "Enugu, Enugu",
    salary: "₦85k/Month",
    postedTime: "7 hours ago",
  },
  {
    id: 10,
    title: "Cybersecurity Intern",
    company: "MainOne",
    description:
      "Assist in monitoring security tools, handling incidents, and implementing best practices.",
    location: "Ajah, Lagos",
    salary: "₦100k/Month",
    postedTime: "9 hours ago",
  },
];

const PlacementCarousel: React.FC<PlacementCarouselProps> = ({ filters }) => {
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

  const totalPages = Math.ceil(placements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPlacements = placements.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-24 py-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm hidden md:inline-block text-gray-600 mb-2">
          What are you looking for today?
        </p>
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900">
          Recently posted Placements
        </h2>
        <div className="block md:hidden">
          <p className="text-base text-gray-600 mt-2">
            Opportunities at your fingertips
          </p>
        </div>
      </div>

      {/* Placements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {currentPlacements.map((placement) => (
          <Card
            key={placement.id}
            className="bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-all duration-200"
          >
            <CardContent className="p-4 md:p-6">
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                  {placement.title}
                </h3>
                <p className="text-sm text-gray-600">{placement.company}</p>
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
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{placement.salary}</span>
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
                {placement.postedTime}
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
            disabled={currentPage === 1}
            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="w-8 h-8 p-0 rounded-full border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Page text shows beside buttons on desktop */}
          <span className="hidden md:inline text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {/* Page text moves to opposite side on mobile */}
        <div className="md:hidden text-sm text-gray-600 text-right">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </section>
  );
};

export default PlacementCarousel;
