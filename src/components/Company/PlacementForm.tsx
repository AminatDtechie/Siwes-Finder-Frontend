import { register } from "module";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface PlacementFormData {
  industryName: string;
  availablePosition: string;
  location: string;
  positionType: string;
  positionPay: string;
  duration: string;
  positionDescription: string;
}

const PlacementForm = () => {

  const form = useForm<PlacementFormData>({
    defaultValues: {
      industryName: '',
      availablePosition: '',
      location: '',
      positionType: '',
      positionPay: '',
      duration: '',
      positionDescription: '',
    },
  });

  const onSubmit = (data: PlacementFormData) => {
    console.log('Form Data:', data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-5 md:py-5">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
            Got a placement? Post it now!
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Industry name"
                className="h-12 px-4 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors"
                {...register('industryName', { required: 'Industry name is required' })}
              />
              {errors.industryName && (
                <p className="text-red-500 text-xs mt-1">{errors.industryName.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Available Position"
                className="h-12 px-4 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors"
                {...register('availablePosition', { required: 'Available position is required' })}
              />
              {errors.availablePosition && (
                <p className="text-red-500 text-xs mt-1">{errors.availablePosition.message}</p>
              )}
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Location"
                className="h-12 px-4 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors"
                {...register('location', { required: 'Location is required' })}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Position type(onsite/remote)"
                className="h-12 px-4 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors"
                {...register('positionType', { required: 'Position type is required' })}
              />
              {errors.positionType && (
                <p className="text-red-500 text-xs mt-1">{errors.positionType.message}</p>
              )}
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Position pay(in Naira) - optional"
                className="h-12 px-4 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors"
                {...register('positionPay')}
              />
              {errors.positionPay && (
                <p className="text-red-500 text-xs mt-1">{errors.positionPay.message}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Duration"
                className="h-12 px-4 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors"
                {...register('duration', { required: 'Duration is required' })}
              />
              {errors.duration && (
                <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>
              )}
            </div>
          </div>

          {/* Description Field - Full Width */}
          <div>
            <Textarea
              placeholder="Position description"
              className="min-h-32 px-4 py-3 text-sm placeholder:text-gray-500 border-gray-300 rounded-lg bg-gray-100 border-0 focus:bg-white focus:border focus:border-gray-300 transition-colors resize-none"
              {...register('positionDescription', { required: 'Position description is required' })}
            />
            {errors.positionDescription && (
              <p className="text-red-500 text-xs mt-1">{errors.positionDescription.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              onClick={handleSubmit(onSubmit)}
              className="w-full h-12 bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Post placement
            </Button>
          </div>
        </div>
    </section>
  );
};

export default PlacementForm;
