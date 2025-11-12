import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Building2, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import { useState } from "react";

const CaseStudies = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudies;
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  
  const caseStudies = [
    {
      icon: Building2,
      company: "Global Financial Services",
      location: "Frankfurt, Germany",
      title: "Enterprise PMO Transformation",
      challenge: "Needed to establish a centralized PMO to manage 50+ concurrent projects across 5 countries.",
      solution: "Implemented comprehensive PMO framework with standardized processes, governance structures, and reporting dashboards.",
      results: [
        "40% improvement in project delivery times",
        "€2M+ cost savings in first year",
        "95% stakeholder satisfaction rate"
      ],
      tags: ["IT-PMO", "Change Management", "Process Optimization"]
    },
    {
      icon: Users,
      company: "Dutch Tech Scale-up",
      location: "Amsterdam, Netherlands",
      title: "Agile Transformation at Scale",
      challenge: "Engineering teams struggling with coordination and delivery velocity as company grew from 50 to 200+ employees.",
      solution: "Led comprehensive Agile transformation with SAFe framework implementation, trained 12 Scrum teams, established CoE.",
      results: [
        "65% increase in deployment frequency",
        "50% reduction in time-to-market",
        "Enhanced cross-team collaboration"
      ],
      tags: ["Scrum Master", "Agile", "Team Coaching"]
    },
    {
      icon: TrendingUp,
      company: "US Manufacturing Corp",
      location: "Chicago, USA",
      title: "Data-Driven Process Optimization",
      challenge: "Legacy manufacturing processes with limited visibility and inefficient workflows causing delivery delays.",
      solution: "Conducted comprehensive business analysis, designed new data analytics framework, implemented automated reporting.",
      results: [
        "30% operational efficiency gain",
        "Real-time visibility into production metrics",
        "$1.5M annual cost reduction"
      ],
      tags: ["Business Analysis", "Data Analytics", "Process Management"]
    }
  ];

  return (
    <>
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
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 cursor-pointer hover:-translate-y-2"
                style={{ boxShadow: 'var(--shadow-card)' }}
                onClick={() => setSelectedCase(index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                      <study.icon className="w-7 h-7 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Dialog */}
      {selectedCase !== null && (
        <Dialog open={selectedCase !== null} onOpenChange={() => setSelectedCase(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  {(() => {
                    const Icon = caseStudies[selectedCase].icon;
                    return <Icon className="w-7 h-7 text-primary" />;
                  })()}
                </div>
                <div>
                  <DialogTitle className="text-2xl">{caseStudies[selectedCase].title}</DialogTitle>
                  <DialogDescription className="text-base font-medium">
                    {caseStudies[selectedCase].company} • {caseStudies[selectedCase].location}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            
            <div className="space-y-6 pt-4">
              <div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{t.challenge}</h3>
                <p className="text-base text-foreground/80 leading-relaxed">{caseStudies[selectedCase].challenge}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{t.solution}</h3>
                <p className="text-base text-foreground/80 leading-relaxed">{caseStudies[selectedCase].solution}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{t.results}</h3>
                <ul className="space-y-3">
                  {caseStudies[selectedCase].results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-base text-foreground/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{t.expertise || "Expertise Areas"}</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[selectedCase].tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-sm font-medium px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CaseStudies;
