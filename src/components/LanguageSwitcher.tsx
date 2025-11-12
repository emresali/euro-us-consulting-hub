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
      className="gap-2 font-semibold min-w-[100px] border-2"
    >
      <span className="text-xl">{language === 'en' ? '🇺🇸' : '🇩🇪'}</span>
      <span>{language === 'en' ? 'EN' : 'DE'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
