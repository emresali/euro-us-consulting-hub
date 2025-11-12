const CustomerReferences = () => {
  const customers = [
    { name: "Deloitte", logo: "/images/deloitte-logo.svg" },
    { name: "L'Oréal", logo: "/images/loreal-logo.png" },
    { name: "DDA", logo: "/images/dda-logo.avif" },
    { name: "Deloitte", logo: "/images/deloitte-logo.svg" },
    { name: "L'Oréal", logo: "/images/loreal-logo.png" },
    { name: "DDA", logo: "/images/dda-logo.avif" },
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

        <div className="relative">
          <div className="flex gap-24 items-center justify-center flex-wrap md:flex-nowrap">
            {customers.map((customer, index) => (
              <div
                key={index}
                className={`flex-shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                  customer.name === "L'Oréal" ? "w-64 h-32" : "w-48 h-24"
                }`}
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className={`max-w-full max-h-full object-contain ${
                    customer.name === "L'Oréal" ? "drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]" : ""
                  }`}
                  style={customer.name === "L'Oréal" ? {
                    filter: "brightness(1.1) contrast(1.1)",
                  } : undefined}
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
