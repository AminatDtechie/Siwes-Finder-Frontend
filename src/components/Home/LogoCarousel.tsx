export default function LogoCarousel () {
    return (
        <>
        {/* Section for logos  */}
      <section className="w-full px-6 md:px-28 py-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Text Section */}
          <div className="md:border-s-4 border-blue-900 px-2 md:px-4">
            <b className="font-bold text-lg md:text-xl">
              10,000+ verified placements listed
            </b>
            <p className="text-center md:text-left text-gray-600">Trusted by students from schools across Nigeria.</p>
          </div>

          {/* Image Section */}
          <div className="overflow-x-auto md:w-auto w-full whitespace-nowrap scroll-smooth scrollbar-hide">
            <div className="flex gap-4">
              <img
                src="/logos/dangote.png"
                alt="logo1"
                className="h-12 w-auto object-contain"
                draggable={false}
              />
              <img
                src="/logos/nb.png"
                alt="logo2"
                className="h-12 w-auto object-contain"
                draggable={false}
              />
              <img
                src="/logos/nta.png"
                alt="logo3"
                className="h-12 w-auto object-contain"
                draggable={false}
              />
              <img
                src="/logos/paystack.png"
                alt="logo4"
                className="h-12 w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}