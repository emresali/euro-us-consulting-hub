import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const CaseStudies = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudies;
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
    <section id="cases" className="py-20 relative overflow-hidden" style={{ background: 'var(--section-secondary-bg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-2">{study.location}</div>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                <CardDescription className="text-base">{study.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">{t.challenge}</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">{t.solution}</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">{t.results}</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
