import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { PiGoogleLogo } from 'react-icons/pi';


const GetStartedCTA = ( ) => {
  return (
    <section className="w-full bg-blue-50 py-5 sm:py-5 lg:py-6">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            Ready to get started?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            Join thousands of Nigerian students already finding verified placements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center max-w-md">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 border-gray-300 text-gray-700 font-medium px-6 py-3 h-12"
            >
              <PiGoogleLogo className='mr-2 w-5 h-5' />
              Continue with Google
            </Button>
            
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 h-12"
            >
              <Mail className="w-5 h-5 mr-2" />
              Continue with Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA; 