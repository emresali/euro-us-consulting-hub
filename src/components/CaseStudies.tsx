import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudies;

  return (
    <section id="cases" className="py-24 relative overflow-hidden" style={{ background: 'var(--section-secondary-bg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180,54%,97%)] via-accent/5 to-[hsl(200,20%,98%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">{t.title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`}>
              <Card 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 cursor-pointer hover:-translate-y-2 h-full overflow-hidden"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                {/* Image Preview */}
                {study.image && (
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${study.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <study.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="text-sm text-foreground/60 mb-2 font-medium">{study.location}</div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{study.title}</CardTitle>
                  <CardDescription className="text-base font-medium">{study.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">{t.challenge}</h4>
                    <p className="text-sm text-foreground/70 line-clamp-2">{study.challenge}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.slice(0, 2).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                    {study.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">+{study.tags.length - 2}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.readMore || "Read full case study"} <ArrowRight className="w-4 h-4" />
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
