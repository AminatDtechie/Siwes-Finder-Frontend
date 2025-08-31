import React from "react";
import {
  ArrowLeft,
  MoreVertical,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Header = () => {
  return (
    <div className="">
      {/* Desktop View */}
      <div className="hidden md:block w-full px-20 mx-auto">
        <Card className="overflow-hidden border-0 rounded-none shadow-none my-2">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium text-gray-600">
                  Placement Details
                </span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-8">
              {/* Left Section */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Software Development Intern
                </h1>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-semibold text-gray-900">
                    Andela
                  </span>
                  <CheckCircle className="h-5 w-5 text-blue-600 fill-current" />
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Surulere, Lagos</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">60k/Month</span>
                  </div>
                </div>

                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-2 rounded-md font-medium">
                  Apply now
                </Button>
              </div>

              {/* Right Section - Company Card */}
              <div className="w-80">
                <Card className="border border-gray-200 rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">
                            Andela
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            verified
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Tech Company
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">
                          Role type:
                        </span>
                        <span className="text-gray-600 ml-1">
                          On-site (Mon-Fri)
                        </span>
                      </div>

                      <div>
                        <span className="font-medium text-gray-900">
                          Openings:
                        </span>
                        <span className="text-gray-600 ml-1">
                          5 positions available
                        </span>
                      </div>

                      <div>
                        <span className="font-medium text-gray-900">
                          Deadline:
                        </span>
                        <span className="text-gray-600 ml-1">Aug 10, 2025</span>
                      </div>
                    </div>

                    <Button
                      variant="link"
                      className="text-blue-600 p-0 h-auto font-normal mt-4"
                    >
                      View company profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile View */}
      <div className="md:hidden max-w-sm mx-auto">
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium text-gray-600">
                  Placement Details
                </span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>

            <h1 className="text-xl font-bold text-gray-900 mb-2">
              Software Development Intern
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Andela
              </span>
              <CheckCircle className="h-4 w-4 text-blue-600 fill-current" />
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Surulere, Lagos</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">60k/Month</span>
              </div>
            </div>

            <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-md font-medium mb-6">
              Apply now
            </Button>

            {/* Company Card */}
            <Card className="border border-gray-200 rounded-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        Andela
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        verified
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">Tech Company</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">
                      Role type:
                    </span>
                    <span className="text-gray-600 ml-1">
                      On-site (Mon-Fri)
                    </span>
                  </div>

                  <div>
                    <span className="font-medium text-gray-900">Openings:</span>
                    <span className="text-gray-600 ml-1">
                      5 positions available
                    </span>
                  </div>

                  <div>
                    <span className="font-medium text-gray-900">Deadline:</span>
                    <span className="text-gray-600 ml-1">Aug 10, 2025</span>
                  </div>
                </div>

                <Button
                  variant="link"
                  className="text-blue-600 p-0 h-auto font-normal mt-3"
                >
                  View company profile
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Header;
