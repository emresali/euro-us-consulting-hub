const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png", scale: "scale-[2.8]", position: "" },
    { name: "DDA Consulting", logo: "/images/dda-consulting-logo.png", scale: "scale-[2.8]", position: "" },
    { name: "Fürsie", logo: "/images/fursie-logo.png", scale: "scale-100", position: "" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", scale: "scale-110", position: "-translate-y-3" },
    { name: "L'Oréal", logo: "/images/loreal-logo.png", scale: "scale-[2.8]", position: "" },
    { name: "DDA Consulting", logo: "/images/dda-consulting-logo.png", scale: "scale-[2.8]", position: "" },
    { name: "Fürsie", logo: "/images/fursie-logo.png", scale: "scale-100", position: "" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", scale: "scale-110", position: "-translate-y-3" },
  ];

  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-transparent">
      {/* Smooth gradient transition from hero to services */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-14">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in mb-1 md:mb-2">
            Leading Organizations
          </h3>
          <p className="text-sm md:text-base text-foreground/60 font-medium">
            Trusted partners in digital transformation
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 md:gap-24 items-center animate-scroll">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 md:w-48 md:h-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className={`max-w-full max-h-full object-contain ${customer.scale} ${customer.position}`}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {customers.map((customer, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-32 h-16 md:w-48 md:h-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className={`max-w-full max-h-full object-contain ${customer.scale} ${customer.position}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReferences;
