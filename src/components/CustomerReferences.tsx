const CustomerReferences = () => {
  const customers = [
    { name: "Deloitte", logo: "/images/deloitte-logo.png" },
    { name: "L'Oréal", logo: "/images/loreal-logo.png" },
    { name: "DDA", logo: "/images/dda-logo.avif" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp" },
    { name: "Deloitte", logo: "/images/deloitte-logo.png" },
    { name: "L'Oréal", logo: "/images/loreal-logo.png" },
    { name: "DDA", logo: "/images/dda-logo.avif" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp" },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
            Trusted By
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground/80">
            Leading Organizations
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-24 items-center animate-scroll">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {customers.map((customer, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-full max-h-full object-contain"
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
