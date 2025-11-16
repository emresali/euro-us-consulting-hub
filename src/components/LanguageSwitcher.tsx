import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    // Stop pulse animation after 3 seconds
    const timer = setTimeout(() => setShowPulse(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`relative inline-flex items-center gap-0 rounded-full border-2 border-primary/30 p-1 transition-all duration-300 hover:border-primary/60 ${
        showPulse ? 'animate-pulse-glow' : ''
      }`}
      aria-label="Switch language"
    >
      {/* DE Button */}
      <div
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-300 ${
          language === 'de'
            ? 'bg-primary text-primary-foreground shadow-lg scale-105'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <span className="text-base">🇩🇪</span>
        <span className="text-xs font-semibold md:text-sm">DE</span>
      </div>

      {/* EN Button */}
      <div
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-lg scale-105'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <span className="text-base">🇬🇧</span>
        <span className="text-xs font-semibold md:text-sm">EN</span>
      </div>
    </button>
  );
};

export default LanguageSwitcher;
