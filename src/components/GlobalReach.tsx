import { Globe, MapPin, Zap, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const GlobalReach = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const regions = [
    {
      name: language === 'en' ? "Central Europe" : "Zentraleuropa",
      countries: ["Germany", "Austria", "Switzerland"],
      flags: ["🇩🇪", "🇦🇹", "🇨🇭"],
      position: { top: "28%", left: "48%" },
      delay: "0s"
    },
    {
      name: language === 'en' ? "Western Europe" : "Westeuropa",
      countries: ["France", "Belgium", "Netherlands", "Luxembourg"],
      flags: ["🇫🇷", "🇧🇪", "🇳🇱", "🇱🇺"],
      position: { top: "32%", left: "42%" },
      delay: "0.2s"
    },
    {
      name: language === 'en' ? "United Kingdom" : "Vereinigtes Königreich",
      countries: ["United Kingdom"],
      flags: ["🇬🇧"],
      position: { top: "25%", left: "38%" },
      delay: "0.4s"
    },
    {
      name: language === 'en' ? "North America" : "Nordamerika",
      countries: ["United States"],
      flags: ["🇺🇸"],
      position: { top: "35%", left: "18%" },
      delay: "0.6s"
    }
  ];

  const stats = [
    { 
      icon: Globe, 
      value: "9+", 
      label: language === 'en' ? "Countries Served" : "Länder bedient",
      color: "from-primary to-accent"
    },
    { 
      icon: Users, 
      value: "50+", 
      label: language === 'en' ? "Projects Delivered" : "Projekte umgesetzt",
      color: "from-accent to-primary"
    },
    { 
      icon: TrendingUp, 
      value: "100%", 
      label: language === 'en' ? "Remote Capable" : "Remote-fähig",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Globe className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {language === 'en' ? "Global Presence" : "Globale Präsenz"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {language === 'en' ? "Worldwide Service Coverage" : "Weltweite Serviceabdeckung"}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Delivering excellence across continents with on-site and remote consulting capabilities"
              : "Exzellenz über Kontinente hinweg mit Vor-Ort- und Remote-Beratungskapazitäten"
            }
          </p>
        </div>

        {/* Interactive Map Visualization */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="aspect-[2/1] relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 shadow-2xl">
            {/* Stylized world map background */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* Simplified continents */}
                <ellipse cx="200" cy="250" rx="120" ry="100" fill="currentColor" className="text-primary/30" />
                <ellipse cx="500" cy="200" rx="150" ry="120" fill="currentColor" className="text-primary/40" />
                <ellipse cx="750" cy="280" rx="100" ry="80" fill="currentColor" className="text-primary/30" />
              </svg>
            </div>
            
            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Germany as hub - lines to other locations */}
              <path d="M 48 14 Q 35 20 18 17" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: "0s" }} />
              <path d="M 48 14 Q 45 16 42 16" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
              <path d="M 48 14 Q 43 10 38 12" stroke="url(#lineGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
            </svg>

            {/* Region markers with pulse animation */}
            {regions.map((region, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                style={{ 
                  top: region.position.top, 
                  left: region.position.left,
                  animationDelay: region.delay
                }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 w-12 h-12 -translate-x-3 -translate-y-3">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
                </div>
                
                {/* Main marker */}
                <div className="relative w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg flex items-center justify-center group-hover:scale-150 transition-transform duration-300 z-10 border-2 border-white/50">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <div className="bg-card/95 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-3 shadow-2xl whitespace-nowrap">
                    <p className="font-bold text-sm text-foreground mb-1">{region.name}</p>
                    <div className="flex gap-1">
                      {region.flags.map((flag, i) => (
                        <span key={i} className="text-lg">{flag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Decorative elements */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-foreground/50">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>{language === 'en' ? "Active regions" : "Aktive Regionen"}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in overflow-hidden text-center"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{stat.value}</p>
              <p className="text-sm md:text-base text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Region Cards - Detailed */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-wrap gap-1 mb-3">
                {region.flags.map((flag, i) => (
                  <span 
                    key={i} 
                    className="text-2xl md:text-3xl hover:scale-125 transition-transform duration-300 cursor-default"
                  >
                    {flag}
                  </span>
                ))}
              </div>
              <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                {region.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
