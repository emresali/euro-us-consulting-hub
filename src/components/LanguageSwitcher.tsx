import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="fixed top-20 right-4 z-50 shadow-xl hover:shadow-2xl transition-all hover:scale-105 px-5 py-6 h-auto gap-3 text-lg font-bold border-2 hover:border-primary bg-card"
        >
          <span className="text-4xl">{language === 'en' ? '🇺🇸' : '🇩🇪'}</span>
          <span className="font-bold text-base uppercase tracking-wide">{language === 'en' ? 'English' : 'Deutsch'}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px]">
        <SheetHeader>
          <SheetTitle>Language / Sprache</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => setLanguage('en')}
            className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:shadow-md ${
              language === 'en' 
                ? 'border-primary bg-primary/10' 
                : 'border-border hover:border-primary/50'
            }`}
          >
            <span className="text-4xl">🇺🇸</span>
            <div className="text-left">
              <div className="font-semibold">English</div>
              <div className="text-sm text-muted-foreground">English</div>
            </div>
          </button>
          
          <button
            onClick={() => setLanguage('de')}
            className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:shadow-md ${
              language === 'de' 
                ? 'border-primary bg-primary/10' 
                : 'border-border hover:border-primary/50'
            }`}
          >
            <span className="text-4xl">🇩🇪</span>
            <div className="text-left">
              <div className="font-semibold">Deutsch</div>
              <div className="text-sm text-muted-foreground">German</div>
            </div>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LanguageSwitcher;
