import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FAQ from "@/components/Placements/FAQ";
import GetStartedCTA from "@/components/Placements/GetStarted";
import PlacementCarousel from "@/components/Placements/PlacementCarousel";
import SearchPlacements from "@/components/Placements/SearchPlacements";
import { FilterParams } from "@/components/Placements/FilterDialog";

export default function Placements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterParams>({
    role: "",
    location: "",
    duration: "",
    recentlyPosted: false,
    searchTerm: "",
  });

  return (
    <>
      <Navbar />
      <SearchPlacements
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentFilters={filters}
        onApplyFilters={setFilters}
      />
      <PlacementCarousel filters={filters} />
      <FAQ />
      <GetStartedCTA />
      <Footer />
    </>
  );
}
