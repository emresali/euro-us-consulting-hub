import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Network, 
  RefreshCw, 
  Lightbulb, 
  Search,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import esitLogo from "@/assets/esit-logo-transparent.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const RolesPage = () => {
  const { language } = useLanguage();

  const heroContent = {
    title: language === 'de' ? 'Projektrollen' : 'Project Roles',
    subtitle: language === 'de' 
      ? 'Integrieren Sie mich in Ihr Team für nachhaltige Projekterfolge'
      : 'Integrate me into your team for sustainable project success'
  };

  const introText = language === 'de'
    ? 'Als externer Spezialist bringe ich frische Perspektiven und bewährte Methoden in Ihr Team. Durch meine Erfahrung in verschiedenen Branchen und Unternehmensgrößen bin ich schnell einsatzbereit – ohne lange Einarbeitungszeit.'
    : 'As an external specialist, I bring fresh perspectives and proven methods to your team. With my experience across various industries and company sizes, I can hit the ground running – without lengthy onboarding.';

  const tasksLabel = language === 'de' ? 'Typische Aufgaben:' : 'Typical Tasks:';

  const roles = [
    {
      icon: Network,
      title: "IT-PMO Lead",
      description: language === 'de'
        ? "Als IT-PMO Lead etabliere ich strukturierte Projektmanagement-Prozesse und sorge für Transparenz über Ihr gesamtes Projektportfolio. Ich bringe Ordnung in komplexe IT-Landschaften und stelle sicher, dass alle Projekte auf Ihre Unternehmensziele einzahlen."
        : "As IT-PMO Lead, I establish structured project management processes and ensure transparency across your entire project portfolio. I bring order to complex IT landscapes and ensure all projects align with your business goals.",
      tasks: language === 'de'
        ? ["Portfolio- & Ressourcensteuerung", "Aufbau von Governance-Frameworks", "Projektübergreifendes Reporting & KPIs", "Risikomanagement & Eskalationshandling"]
        : ["Portfolio & Resource Management", "Governance Framework Setup", "Cross-project Reporting & KPIs", "Risk Management & Escalation Handling"]
    },
    {
      icon: RefreshCw,
      title: "Scrum Master",
      description: language === 'de'
        ? "Als Scrum Master ermögliche ich Ihrem Entwicklungsteam, Höchstleistungen zu erbringen. Ich beseitige Hindernisse, fördere die Selbstorganisation und sorge dafür, dass agile Prinzipien nicht nur verstanden, sondern gelebt werden."
        : "As Scrum Master, I enable your development team to perform at their best. I remove impediments, foster self-organization, and ensure agile principles are not just understood but lived.",
      tasks: language === 'de'
        ? ["Sprint Planning, Dailys & Retrospektiven", "Impediment-Beseitigung", "Team-Coaching & Methodenvermittlung", "Stakeholder-Kommunikation"]
        : ["Sprint Planning, Dailies & Retrospectives", "Impediment Removal", "Team Coaching & Methodology Training", "Stakeholder Communication"]
    },
    {
      icon: Lightbulb,
      title: "Product Owner",
      description: language === 'de'
        ? "Als Product Owner maximiere ich den Wert Ihres Produkts durch strategische Priorisierung und klare Kommunikation. Ich übersetze Geschäftsanforderungen in umsetzbare User Stories und stelle sicher, dass Ihr Team immer am Wichtigsten arbeitet."
        : "As Product Owner, I maximize your product's value through strategic prioritization and clear communication. I translate business requirements into actionable user stories and ensure your team always works on what matters most.",
      tasks: language === 'de'
        ? ["Backlog Management & Priorisierung", "User Story Definition & Refinement", "Stakeholder-Alignment", "Release-Planung & Value Optimization"]
        : ["Backlog Management & Prioritization", "User Story Definition & Refinement", "Stakeholder Alignment", "Release Planning & Value Optimization"]
    },
    {
      icon: Search,
      title: "Business Analyst",
      description: language === 'de'
        ? "Als Business Analyst bilde ich die Brücke zwischen Fachbereich und IT. Ich analysiere Geschäftsprozesse, identifiziere Optimierungspotenziale und übersetze komplexe Anforderungen in klare, umsetzbare Spezifikationen."
        : "As Business Analyst, I bridge the gap between business and IT. I analyze business processes, identify optimization potential, and translate complex requirements into clear, actionable specifications.",
      tasks: language === 'de'
        ? ["Requirements Engineering & Dokumentation", "Prozessanalyse & -modellierung (BPMN)", "Stakeholder-Workshops & Interviews", "Lösungsdesign & Konzeption"]
        : ["Requirements Engineering & Documentation", "Process Analysis & Modeling (BPMN)", "Stakeholder Workshops & Interviews", "Solution Design & Conception"]
    }
  ];

  const ctaContent = {
    title: language === 'de' ? 'Bereit für Verstärkung in Ihrem Team?' : 'Ready for reinforcement in your team?',
    subtitle: language === 'de' 
      ? 'Lassen Sie uns besprechen, wie ich Ihr Projekt unterstützen kann.'
      : "Let's discuss how I can support your project.",
    primaryButton: language === 'de' ? 'Beratungsgespräch vereinbaren' : 'Schedule Consultation',
    secondaryButton: language === 'de' ? 'Zurück zur Übersicht' : 'Back to Overview'
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <Link to="/">
            <img src={esitLogo} alt="ESIT-Consulting" className="h-8 md:h-12" />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'de' ? 'Zurück' : 'Back'}</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[hsl(180,40%,28%)] via-[hsl(180,45%,32%)] to-[hsl(180,50%,38%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {heroContent.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-base md:text-lg text-foreground/70 text-center max-w-3xl mx-auto leading-relaxed">
            {introText}
          </p>
        </div>
      </section>

      {/* Role Cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <Card 
                key={index}
                className="group transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary bg-card"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {role.description}
                  </p>
                  <div>
                    <h4 className="font-bold text-sm mb-3 text-foreground">
                      {tasksLabel}
                    </h4>
                    <ul className="space-y-2">
                      {role.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16" style={{ background: '#f0fafa' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {ctaContent.title}
          </h2>
          <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            {ctaContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="font-semibold" asChild>
              <Link to="/#contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {ctaContent.primaryButton}
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-semibold border-2" asChild>
              <Link to="/">
                {ctaContent.secondaryButton}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} ESIT-Consulting. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RolesPage;