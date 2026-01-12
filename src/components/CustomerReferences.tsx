const CustomerReferences = () => {
  const customers = [
    { name: "L'Oréal", logo: "/images/loreal-logo.png", scale: "scale-[3.2]" },
    { name: "DDA Consulting", logo: "/images/dda-consulting-logo.png", scale: "scale-[3.2]" },
    { name: "Fürsie", logo: "/images/fursie-logo.png", scale: "scale-110" },
    { name: "Lacroix", logo: "/images/lacroix-logo.webp", scale: "scale-125" },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm md:text-base text-foreground/50 font-medium tracking-wide uppercase">
            Trusted by
          </p>
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
    </section>
  );
};

export default CustomerReferences;
