const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png", scale: "scale-[3.2]" },
    { name: "DDA Consulting", logo: "/images/dda-consulting-logo.png", scale: "scale-[3.2]" },
    { name: "Fürsie", logo: "/images/fursie-logo.png", scale: "scale-110" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", scale: "scale-125 -translate-y-2" },
  ];

  return (
    <div className="relative py-8 md:py-10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
          <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-white/30" />
          <p className="text-xs text-white/50 font-medium tracking-[0.2em] uppercase">
            Trusted by
          </p>
          <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-18">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="w-24 h-12 md:w-36 md:h-16 flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className={`max-w-full max-h-full object-contain brightness-0 invert ${customer.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReferences;
