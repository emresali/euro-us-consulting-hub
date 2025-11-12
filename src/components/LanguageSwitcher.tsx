import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-20 right-4 z-50 shadow-lg hover:shadow-xl transition-shadow">
          <Languages className="h-5 w-5" />
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
