const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png", size: "h-44 md:h-60", extra: "" },
    { name: "Fürsie", logo: "/images/fursie-logo-new.png", size: "h-14 md:h-20", extra: "" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", size: "h-12 md:h-16", extra: "-translate-y-1" },
  ];

  return (
    <div className="relative py-14 md:py-16 overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(180,50%,85%,0.4),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/40 to-primary/20" />
          <p className="text-xs md:text-sm text-foreground/50 font-medium tracking-[0.25em] uppercase">
            Trusted by
          </p>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-primary/40 to-primary/20" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16">
          {customers.map((customer, index) => (
            <div
              key={index}
              className={`${customer.size} ${customer.extra} flex items-center justify-center opacity-50 hover:opacity-80 transition-all duration-500 hover:scale-105`}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="h-full w-auto object-contain drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReferences;