import CommunityStats from "@/components/Community/CommunityStats";
import Discussion from "@/components/Community/Discussion";
import Header from "@/components/Community/Header";
import QuickActions from "@/components/Community/QuickActions";
import GetStartedCTA from "@/components/Placements/GetStarted";

const Community = () => {
  return (
    <div>
      <section className="p-3 lg:px-20 lg:py-5">
        <Header />
        <div className="flex flex-col-reverse md:flex-row justify-between gap-2 ">
          <Discussion />
          <div className="flex flex-col space-y-6 md:sticky md:top-0">
            <CommunityStats />
            <QuickActions />
          </div>
        </div>
      </section>
      <GetStartedCTA />
    </div>
  );
};

export default Community;
