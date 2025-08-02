import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function CTASection () {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-5 md:py-5">
      <div className="text-center">
        {/* Badge/Alert */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">
            Almost there 
          </span>
          <span className="text-sm">🥳🥳</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight mb-8 max-w-2xl mx-auto">
          Applying for placements is only available to Verified users, Sign up now to get a placement!
        </h2>

        {/* CTA Button */}
        <Button 
          className="bg-blue-900 cursor-pointer text-white px-8 text-base font-medium"
        >
          Get Started
          <span className="ml-2">→</span>
        </Button>
      </div>
    </section>
  );
};
