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
      className="font-semibold min-w-[80px] md:min-w-[100px] border-2 text-xs md:text-sm px-2 md:px-4"
    >
      <span className="flex items-center gap-1">
        <span className={language === 'de' ? 'font-bold text-foreground' : 'text-muted-foreground'}>DE</span>
        <span className="text-muted-foreground">/</span>
        <span className={language === 'en' ? 'font-bold text-foreground' : 'text-muted-foreground'}>EN</span>
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
