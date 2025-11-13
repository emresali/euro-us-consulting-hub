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
      className="gap-1.5 md:gap-2 font-semibold min-w-[80px] md:min-w-[100px] border-2 text-xs md:text-sm px-2 md:px-4"
    >
      <span className="text-base md:text-xl">{language === 'en' ? '🇺🇸' : '🇩🇪'}</span>
      <span>{language === 'en' ? 'EN' : 'DE'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
