export default function LogoCarousel({ logos }) {
  return (
    <>
      {/* Section for logos  */}
      <section className="w-full px-6 md:px-28 py-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Text Section */}
          <div className="md:border-s-4 text-center md:text-left border-blue-900 px-2 md:px-4">
            <b className="font-semibold text-lg md:text-xl">
              10,000+ verified placements listed
            </b>
            <p className="text-center md:text-left text-gray-600">
              Trusted by students from schools across Nigeria.
            </p>
          </div>

          {/* Image Section */}
          <div className="overflow-x-auto md:w-auto w-full whitespace-nowrap scroll-smooth scrollbar-hide">
            <div className="flex gap-6">
              {logos.map((logo, index) => (
                <img
                  key={ index }
                  src={logo}
                  alt="logo1"
                  className="h-12 w-auto object-contain"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
