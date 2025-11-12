import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="gap-2 font-semibold"
      >
        <span className="text-xl">🇺🇸</span>
        <span>EN</span>
      </Button>
      <Button
        variant={language === 'de' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('de')}
        className="gap-2 font-semibold"
      >
        <span className="text-xl">🇩🇪</span>
        <span>DE</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
