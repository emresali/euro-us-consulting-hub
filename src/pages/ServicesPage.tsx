import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Settings, LineChart, BarChart3, RefreshCw, Package, Cloud, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import esitLogo from "@/assets/esit-logo-transparent.png";

const ServicesPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    { icon: Target, title: t.services.itPmo.title, intro: t.services.itPmo.intro, points: t.services.itPmo.points },
    { icon: Cloud, title: t.services.devOps.title, intro: t.services.devOps.intro, points: t.services.devOps.points },
    { icon: Users, title: t.services.scrumMaster.title, intro: t.services.scrumMaster.intro, points: t.services.scrumMaster.points },
    { icon: Package, title: t.services.productOwner.title, intro: t.services.productOwner.intro, points: t.services.productOwner.points },
    { icon: Settings, title: t.services.processManagement.title, intro: t.services.processManagement.intro, points: t.services.processManagement.points },
    { icon: RefreshCw, title: t.services.changeManagement.title, intro: t.services.changeManagement.intro, points: t.services.changeManagement.points },
    { icon: LineChart, title: t.services.businessAnalysis.title, intro: t.services.businessAnalysis.intro, points: t.services.businessAnalysis.points },
    { icon: BarChart3, title: t.services.dataAnalytics.title, intro: t.services.dataAnalytics.intro, points: t.services.dataAnalytics.points },
    { icon: Rocket, title: t.services.digitalTransformation.title, intro: t.services.digitalTransformation.intro, points: t.services.digitalTransformation.points }
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {t.services.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-l-4 hover:border-l-primary"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">{service.intro}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-foreground/70 mb-6">
              {language === 'de' 
                ? 'Bereit, Ihre IT-Projekte auf das nächste Level zu bringen?'
                : 'Ready to take your IT projects to the next level?'}
            </p>
            <Button variant="hero" size="lg" asChild>
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

export default ServicesPage;