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
    <section id="cases" className="py-12 md:py-20 lg:py-24 relative overflow-hidden" style={{ background: 'var(--section-secondary-bg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180,54%,97%)] via-accent/5 to-[hsl(200,20%,98%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent px-4">{t.title}</h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`}>
              <Card 
                className="group transition-all duration-300 border-border/50 cursor-pointer hover:-translate-y-1 h-full overflow-hidden bg-card rounded-xl"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                {/* Metrics Header */}
                <div className="relative h-32 md:h-40 bg-gradient-to-br from-[hsl(180,40%,28%)] via-[hsl(180,45%,35%)] to-[hsl(180,50%,45%)] flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(180,54%,57%,0.3),transparent_50%)]" />
                  <div className="relative z-10 text-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">{study.metric}</div>
                    <div className="text-sm md:text-base text-white/90 font-medium">{study.metricLabel}</div>
                  </div>
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <study.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </div>
                
                <CardHeader className="pb-3 md:pb-4">
                  <div className="text-xs md:text-sm text-foreground/60 mb-1 font-medium">{study.location}</div>
                  <CardTitle className="text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">{study.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base font-medium">{study.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <div>
                    <h4 className="font-semibold text-xs md:text-sm mb-1 md:mb-2 text-foreground">{t.challenge}</h4>
                    <p className="text-xs md:text-sm text-foreground/70 line-clamp-2">{study.challenge}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                    {study.tags.map((tag, i) => (
                      <Badge key={i} className="text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.readMore || "Read full case study"} <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
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