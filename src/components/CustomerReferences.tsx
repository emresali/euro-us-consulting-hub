import { useEffect, useState } from "react";

const CustomerReferences = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const customers = [
    { name: "Deloitte", logo: "/images/deloitte-logo.svg" },
    { name: "L'Oréal", logo: "/images/loreal-logo.svg" },
    { name: "Deloitte", logo: "/images/deloitte-logo.svg" },
    { name: "L'Oréal", logo: "/images/loreal-logo.svg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(215,25%,15%) 0%, hsl(180,54%,97%) 100%)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,25%,15%,0.3)] via-transparent to-[hsl(180,54%,97%,0.3)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-foreground/60 font-semibold mb-2">
            Trusted By
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Leading Organizations
          </h3>
        </div>

        <div className="relative">
          <div className="flex gap-16 items-center justify-center flex-wrap md:flex-nowrap">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 hover:brightness-100 transition-all"
                  style={{ filter: 'brightness(0) saturate(100%)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1) saturate(100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(0) saturate(100%)';
                  }}
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
