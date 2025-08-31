import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="bg-white rounded-lg border-gray-200 w-full">
      {/* Header Section */}
      <div className="md:flex items-end justify-between">
        <div className="flex-1">
          <h2 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-2">
            Your SIWES Community
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Connect with students, share experiences, get support
          </p>
        </div>

        {/* Button */}
        <div className="md:my-0 my-3">
          <Button className="btn-custom">
            <span className="inline font-normal">Make a Post</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
