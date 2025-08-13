import { useMemo, useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FAQ from "@/components/Placements/FAQ";
import GetStartedCTA from "@/components/Placements/GetStarted";
import PlacementCarousel from "@/components/Placements/PlacementCarousel";
import SearchPlacements from "@/components/Placements/SearchPlacements";
import { FilterParams } from "@/components/Placements/FilterDialog";
import usePlacement from "@/hooks/usePlacement";

const Placements = () => {
  const { getPlacements } = usePlacement();
  const { data: placements = [] } = getPlacements;
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterParams>({
    role: "",
    location: "",
    duration: "",
    recentlyPosted: false,
    searchTerm: "",
  });

  const dropdownOptions = useMemo(() => {
    const roles = [
      ...new Set(placements.map((p) => p.position_title).filter(Boolean)),
    ];
    const locations = [
      ...new Set(placements.map((p) => p.location).filter(Boolean)),
    ];
    const durations = [
      ...new Set(placements.map((p) => p.duration).filter(Boolean)),
    ];
    return { roles, locations, durations };
  }, [placements]);

  return (
    <>
      <Navbar />
      <SearchPlacements
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentFilters={filters}
        onApplyFilters={setFilters}
        initialFilters={filters}
        dropdownOptions={dropdownOptions}
      />
      <PlacementCarousel filters={filters} />
      <FAQ />
      <GetStartedCTA />
      <Footer />
    </>
  );
};

export default Placements;
