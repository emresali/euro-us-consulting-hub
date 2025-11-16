import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="font-semibold min-w-[100px] md:min-w-[120px] border-2 text-xs md:text-sm px-2 md:px-4"
    >
      <span className="flex items-center gap-1.5 md:gap-2">
        <span className={`flex items-center gap-1 ${language === 'de' ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
          <span className="text-base">🇩🇪</span>
          <span>DE</span>
        </span>
        <span className="text-muted-foreground">/</span>
        <span className={`flex items-center gap-1 ${language === 'en' ? 'font-bold text-foreground' : 'text-muted-foreground'}`}>
          <span className="text-base">🇺🇸</span>
          <span>EN</span>
        </span>
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
