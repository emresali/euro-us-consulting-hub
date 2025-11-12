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
          className="fixed top-20 right-4 z-50 shadow-lg hover:shadow-xl transition-all hover:scale-105 px-3 py-2 h-auto gap-2"
        >
          <span className="text-2xl">{language === 'en' ? '🇬🇧' : '🇩🇪'}</span>
          <span className="font-semibold text-sm uppercase">{language}</span>
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
            <span className="text-4xl">🇬🇧</span>
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
