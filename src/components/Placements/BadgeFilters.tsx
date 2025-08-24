import { Badge } from "../ui/badge";


  const categories = [
    { label: "All", color: "bg-blue-500 text-white" },
    { label: "Success stories(3)", color: "bg-[#1ED8604D] text-black" },
    { label: "Questions(2)", color: "bg-[#F59E0B4D] text-black" },
    { label: "Resource(20)", color: "bg-black text-white" },
  ];


const BadgeFilter = () => {
  return (
    <div className="w-full md:hidden mb-2 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max font-extralight">
        {categories.map((cat) => (
          <Badge
            key={cat.label}
            className={`${cat.color} cursor-pointer rounded-2xl text-sm py-1 hover:opacity-80`}
          >
            {cat.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default BadgeFilter;