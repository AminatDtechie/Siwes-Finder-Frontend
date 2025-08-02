import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section
        className="w-full bg-[radial-gradient(ellipse_at_center,_#1e40af_0%,_#1e3a8a_40%,_#111827_70%,_#000000_100%)]
 text-white py-16 px-4 md:px-2"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-[50px] font-bold leading-tight">
            Find SIWES PLACEMENT EASILY
          </h1>

          <p className="text-lg md:text-2xl px-4 text-gray-300">
            Connect with top companies across Nigeria for your Industrial
            Training. No stress
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="w-full md:w-auto bg-white text-black hover:bg-gray-100"
            >
              <img src="/logos/google.png" className="mr-2 h-5 w-5" alt="googlelogo" />
              Continue with Google
            </Button>

            <Button className="w-full md:w-auto bg-[#2563eb] hover:bg-[#1d4ed8]">
              <Mail className="mr-2 h-5 w-5" />
              Continue with Email
            </Button>
          </div>

          <p className="text-sm text-gray-200 mt-4">
            By continuing, you agree to our{" "}
            <a href="#" className="underline">
              T&C
            </a>
          </p>
          <p className="md:text-md text-sm text-white mt-4">
            Looking for student interns?{" "}
            <a href="#" className="underline">
              Register as a Company
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
