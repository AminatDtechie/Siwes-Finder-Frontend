import { Skeleton } from "./skeleton";

const PlacementSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="p-4 bg-gray-100 rounded shadow-md animate-pulse">
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-20 w-full mb-4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default PlacementSkeleton;
