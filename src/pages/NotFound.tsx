import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="h-100 flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link to="/">
          <Button className="bg-blue-900 text-white hover:bg-blue-800 px-6 py-2 rounded-md">
            Go back home
          </Button>
        </Link>
      </div>
    </>
  );
}

export default NotFound;