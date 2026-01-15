const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png", size: "h-28 md:h-40" },
    { name: "Fürsie", logo: "/images/fursie-logo-new.png", size: "h-16 md:h-24" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", size: "h-16 md:h-24" },
  ];

  return (
    <div className="relative py-9 overflow-hidden">
      {/* Subtle radial glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(180,40%,93%,0.5),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/30" />
          <p className="text-[11px] text-[#a0aab0] font-semibold tracking-[0.2em] uppercase">
            Trusted by
          </p>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
          {customers.map((customer, index) => (
            <div
              key={index}
              className={`${customer.size} flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300`}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReferences;
