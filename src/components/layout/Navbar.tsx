"use client";

import { ArrowRight, Building2, Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiUsers, FiBriefcase, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useAuthorize } from "@/context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuthorize();

  const hideForCompaniesLink = location.pathname === "/companies";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { to: "/placements", label: "Placements" },
    { to: "/community", label: "Community" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 md:px-16 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 flex-shrink-0">
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white p-6">
            <div className="flex flex-col h-full justify-between">
              {/* Top - Navigation Links */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#112D6A]">
                  SiwesFinder
                </h2>

                <nav className="flex flex-col space-y-4 text-gray-800 text-base font-medium">
                  {
                  /* <a
                    href="/community"
                    className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                  >
                    <FiUsers className="w-5 h-5" />
                    Communities
                  </a>
                  <a
                    href="/placements"
                    className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                  >
                    <FiBriefcase className="w-5 h-5" />
                    Placements
                  </a> */
                  <a
                    href={hideForCompaniesLink ? "/" : "/companies"}
                    className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                  >
                    <Building2 className="w-5 h-5" />
                    {hideForCompaniesLink ? "For Students" : "For Companies"}
                  </a>
                  }
                </nav>
              </div>

              {/* Bottom - Auth Actions */}
              <div className="space-y-4">
                {/* {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 border border-blue-900 text-blue-500 !rounded-0 hover:bg-blue-50 transition"
                    >
                      Dashboard
                    </Link>
                    <Button
                      variant="default"
                      onClick={handleLogout}
                      className="px-4 py-2 border btn-custom w-full whitespace-nowrap"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 border border-blue-900 text-blue-500 !rounded-0 hover:bg-blue-50 transition"
                    >
                      <FiLogIn className="w-5 h-5" />
                      Login
                    </a>
                    <a
                      href="/registration"
                      className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-900 text-white !rounded-0 hover:bg-blue-700 transition"
                    >
                      <FiUserPlus className="w-5 h-5" />
                      Register
                    </a>
                  </>
                )} */}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <a href="/" className="text-xl font-bold text-[#112D6A]">
          SiwesFinder
        </a>
      </div>

      {/* Hide these on mobile */}
      <div className="hidden lg:flex items-center gap-6 text-base text-muted-foreground flex-shrink-0">
        {/* {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`transition-colors hover:text-primary ${
              location.pathname === to
                ? "underline underline-offset-6 text-[#112D6A]"
                : ""
            }`}
          >
            {label}
          </Link>
        ))} */}
      </div>

      {/* Search input: smaller on mobile */}
      <div className="flex-1 min-w-0 max-w-[120px] md:max-w-xs">
        {/* <div className="relative text-gray-600">
          <Input
            type="search"
            name="search"
            placeholder="Search placements"
            className="pl-10 w-full rounded-lg"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div> */}
      </div>

      {/* Hide on mobile */}
      <div className="hidden lg:flex items-center space-x-4 text-sm flex-shrink-0">
        {/* {isAuthenticated ? (
          <>
            <Link
              to="/dashboard"
              className="transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Button
              variant="default"
              onClick={handleLogout}
              className="px-4 py-2 border btn-custom whitespace-nowrap"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <a
              href="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 whitespace-nowrap"
            >
              Login
            </a>
            <a
              href="/registration"
              className="bg-blue-600 !rounded-none hover:bg-blue-700 text-white px-4 py-2 whitespace-nowrap"
            >
              Register
            </a>
          </>
        )} */}
        <a
          href={hideForCompaniesLink ? "/" : "/companies"}
          className="flex items-center gap-3 hover:text-blue-600 transition-colors"
        >
          {hideForCompaniesLink ? "For Students" : "For Companies"}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
