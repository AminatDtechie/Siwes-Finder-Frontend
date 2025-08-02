"use client";

import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 md:px-16 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 flex-shrink-0">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="left">
            {/* mobile nav here if needed */}
            <p className="text-lg font-semibold">Menu</p>
          </SheetContent>
        </Sheet>

        <span className="text-xl font-bold text-[#112D6A]">SiwesFinder</span>
      </div>

      {/* Hide these on mobile */}
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground flex-shrink-0">
        <a href="/placements">Placements</a>
        <a href="#">Community</a>
      </div>

      {/* Search input: smaller on mobile */}
      <div className="flex-1 min-w-0 max-w-[180px] md:max-w-xs">
        <div className="relative text-gray-600">
          <Input
            type="search"
            name="search"
            placeholder="Search placements"
            className="pl-10 w-full"
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
      </div>

      {/* Hide on mobile */}
      <div className="hidden md:flex items-center space-x-4 text-sm flex-shrink-0">
        <a
          href="/login"
          className="px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50 whitespace-nowrap"
        >
          Login
        </a>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 whitespace-nowrap">
          Register
        </Button>

        <a
          href="/for-companies"
          className="text-blue-600 hover:underline flex items-center space-x-1 whitespace-nowrap"
        >
          <span>For Companies</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
