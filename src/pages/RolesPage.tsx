import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Package, LineChart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import esitLogo from "@/assets/esit-logo-transparent.png";

const RolesPage = () => {
  const { language } = useLanguage();

  const roles = [
    {
      title: "IT-PMO Lead",
      description: language === 'de' 
        ? "Strategische Steuerung Ihres Projektportfolios mit etablierten Governance-Strukturen."
        : "Strategic oversight of your project portfolio with established governance structures.",
      responsibilities: language === 'de' 
        ? ["Portfolio-Management", "Ressourcenplanung", "Reporting & Dashboards", "Stakeholder-Kommunikation"]
        : ["Portfolio Management", "Resource Planning", "Reporting & Dashboards", "Stakeholder Communication"],
      icon: Target
    },
    {
      title: "Scrum Master",
      description: language === 'de'
        ? "Befähigung agiler Teams zur Höchstleistung durch servant leadership."
        : "Empowering agile teams to peak performance through servant leadership.",
      responsibilities: language === 'de'
        ? ["Sprint-Moderation", "Team-Coaching", "Impediment-Beseitigung", "Agile Transformation"]
        : ["Sprint Facilitation", "Team Coaching", "Impediment Removal", "Agile Transformation"],
      icon: Users
    },
    {
      title: "Product Owner",
      description: language === 'de'
        ? "Maximierung des Produktwerts durch strategische Vision und Stakeholder-Alignment."
        : "Maximizing product value through strategic vision and stakeholder alignment.",
      responsibilities: language === 'de'
        ? ["Backlog-Management", "User Stories", "Priorisierung", "Release-Planung"]
        : ["Backlog Management", "User Stories", "Prioritization", "Release Planning"],
      icon: Package
    },
    {
      title: "Business Analyst",
      description: language === 'de'
        ? "Brücke zwischen Fachbereich und IT mit präzisem Requirements Engineering."
        : "Bridge between business and IT with precise requirements engineering.",
      responsibilities: language === 'de'
        ? ["Anforderungsanalyse", "Prozessmodellierung", "Lösungsdesign", "UAT-Koordination"]
        : ["Requirements Analysis", "Process Modeling", "Solution Design", "UAT Coordination"],
      icon: LineChart
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(180,40%,28%)] via-[hsl(180,45%,32%)] to-[hsl(180,50%,38%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {language === 'de' ? 'Projektrollen' : 'Project Roles'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Integrieren Sie mich in Ihr Team – flexibel, erfahren und ergebnisorientiert.'
              : 'Integrate me into your team – flexible, experienced, and results-driven.'}
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <Card 
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <role.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70">{role.description}</p>
                  <ul className="space-y-2">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {item}
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
                ? 'Lassen Sie uns besprechen, welche Rolle am besten zu Ihrem Projekt passt.'
                : "Let's discuss which role best fits your project."}
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

export default RolesPage;