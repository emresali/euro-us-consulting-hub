import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Database, Settings, BarChart3, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import esitLogo from "@/assets/esit-logo-transparent.png";

const PackagesPage = () => {
  const { language } = useLanguage();

  const packages = [
    {
      title: language === 'de' ? "ERP-Migrations-Assessment" : "ERP Migration Assessment",
      description: language === 'de' 
        ? "Umfassende Analyse Ihrer bestehenden Systeme und Roadmap für erfolgreiche ERP-Migration."
        : "Comprehensive analysis of your existing systems and roadmap for successful ERP migration.",
      deliverables: language === 'de' 
        ? ["Ist-Analyse", "Anforderungskatalog", "Migrations-Roadmap", "Risikobewertung", "Vendor-Empfehlung"]
        : ["Current State Analysis", "Requirements Catalog", "Migration Roadmap", "Risk Assessment", "Vendor Recommendation"],
      duration: language === 'de' ? "2-4 Wochen" : "2-4 Weeks",
      icon: Database
    },
    {
      title: language === 'de' ? "PMO-Aufbau & Optimierung" : "PMO Setup & Optimization",
      description: language === 'de'
        ? "Etablierung oder Optimierung Ihres Project Management Office mit bewährten Frameworks."
        : "Establishment or optimization of your Project Management Office with proven frameworks.",
      deliverables: language === 'de'
        ? ["PMO-Strategie", "Governance-Framework", "Tooling-Setup", "Reporting-Templates", "Team-Training"]
        : ["PMO Strategy", "Governance Framework", "Tooling Setup", "Reporting Templates", "Team Training"],
      duration: language === 'de' ? "4-8 Wochen" : "4-8 Weeks",
      icon: Settings
    },
    {
      title: language === 'de' ? "Prozess-Audit" : "Process Audit",
      description: language === 'de'
        ? "Detaillierte Analyse Ihrer Geschäftsprozesse mit konkreten Optimierungsempfehlungen."
        : "Detailed analysis of your business processes with concrete optimization recommendations.",
      deliverables: language === 'de'
        ? ["Prozess-Dokumentation", "Gap-Analyse", "Optimierungsplan", "Quick Wins", "ROI-Berechnung"]
        : ["Process Documentation", "Gap Analysis", "Optimization Plan", "Quick Wins", "ROI Calculation"],
      duration: language === 'de' ? "2-3 Wochen" : "2-3 Weeks",
      icon: BarChart3
    },
    {
      title: "Agile Transformation",
      description: language === 'de'
        ? "Ganzheitliche Transformation Ihrer Organisation zu agilen Arbeitsweisen."
        : "Holistic transformation of your organization to agile ways of working.",
      deliverables: language === 'de'
        ? ["Reifegrad-Assessment", "Transformations-Roadmap", "Framework-Auswahl", "Pilot-Teams", "Coaching"]
        : ["Maturity Assessment", "Transformation Roadmap", "Framework Selection", "Pilot Teams", "Coaching"],
      duration: language === 'de' ? "3-6 Monate" : "3-6 Months",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={esitLogo} alt="ESIT-Consulting" className="h-10 md:h-12" />
          </Link>
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {language === 'de' ? 'Zurück' : 'Back'}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(215,40%,28%)] via-[hsl(215,45%,32%)] to-[hsl(215,50%,38%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Beratungspakete' : 'Consulting Packages'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Fokussierte Engagements mit klaren Deliverables und messbaren Ergebnissen.'
              : 'Focused engagements with clear deliverables and measurable results.'}
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[hsl(215,40%,35%)]"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[hsl(215,40%,35%)]/10 flex items-center justify-center">
                      <pkg.icon className="w-7 h-7 text-[hsl(215,40%,35%)]" />
                    </div>
                    <span className="text-sm font-medium text-[hsl(215,40%,35%)] bg-[hsl(215,40%,35%)]/10 px-3 py-1 rounded-full">
                      {pkg.duration}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">{pkg.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">
                      {language === 'de' ? 'Deliverables:' : 'Deliverables:'}
                    </h4>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground/80 text-sm">
                          <CheckCircle className="w-4 h-4 text-[hsl(215,40%,35%)] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-foreground/70 mb-6">
              {language === 'de' 
                ? 'Interessiert? Lassen Sie uns Ihr individuelles Paket besprechen.'
                : "Interested? Let's discuss your customized package."}
            </p>
            <Button size="lg" className="bg-[hsl(215,40%,35%)] hover:bg-[hsl(215,40%,30%)] text-white font-semibold" asChild>
              <Link to="/#contact">
                {language === 'de' ? 'Kontakt aufnehmen' : 'Get in Touch'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;