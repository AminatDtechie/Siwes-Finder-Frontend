import { Globe, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Brand Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">SiwesFinder</h3>
            <p className="text-blue-200 text-sm mb-4">
              The reliable platform for SIWES placements in Nigeria
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Globe className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              <X className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a href="/placements" className="hover:text-white transition-colors">
                  Find placements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Join Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* For Companies */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">For Companies</h4>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Post Placements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find talents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partnership program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols- md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-3">SiwesFinder</h3>
              <p className="text-blue-200 text-sm mb-6">
                The reliable platform for SIWES placements in Nigeria
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
                <X className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <a
                    href="/placements"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Find placements
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Join Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            {/* For Companies */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                For Companies
              </h4>
              <ul className="space-y-3 text-blue-200">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Post Placements
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Find talents
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Partnership program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Empty column for spacing */}
            <div></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} SIWES Finder • Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;