const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png", scale: "scale-[3.2]" },
    { name: "DDA Consulting", logo: "/images/dda-consulting-logo.png", scale: "scale-[3.2]" },
    { name: "Fürsie", logo: "/images/fursie-logo.png", scale: "scale-110" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", scale: "scale-125 -translate-y-2" },
  ];

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      {/* Subtle radial glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(180,40%,93%,0.5),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-6 mb-10 md:mb-14">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/30" />
          <p className="text-xs md:text-sm text-foreground/60 font-semibold tracking-[0.2em] uppercase">
            Trusted by
          </p>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="w-28 h-14 md:w-40 md:h-20 flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className={`max-w-full max-h-full object-contain ${customer.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReferences;
