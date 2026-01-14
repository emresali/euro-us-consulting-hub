const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png" },
    { name: "DDA Consulting", logo: "/images/dda-consulting-logo.png" },
    { name: "SAE IT-Systems", logo: "/images/sae-logo.png" },
    { name: "Fürsie", logo: "/images/fursie-logo.png" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp" },
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

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="h-6 md:h-7 flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-300"
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
