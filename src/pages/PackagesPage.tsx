import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, Building, Search, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import esitLogo from "@/assets/esit-logo-transparent.png";

const PackagesPage = () => {
  const { language } = useLanguage();

  const packages = [
    {
      icon: Database,
      title: language === 'de' ? "ERP-Migrations-Assessment" : "ERP Migration Assessment",
      tagline: language === 'de' ? "Klarheit vor dem großen Schritt" : "Clarity before the big step",
      description: language === 'de' 
        ? "Bevor Sie in eine ERP-Migration investieren, schaffen wir gemeinsam die Entscheidungsgrundlage. Ich analysiere Ihre aktuelle Systemlandschaft, identifiziere Risiken und entwickle eine realistische Roadmap für Ihre Migration zu SAP, Microsoft Dynamics oder anderen Systemen."
        : "Before investing in an ERP migration, we create the decision-making foundation together. I analyze your current system landscape, identify risks, and develop a realistic roadmap for your migration to SAP, Microsoft Dynamics, or other systems.",
      deliverables: language === 'de' 
        ? [
            "Ist-Analyse Ihrer aktuellen ERP-Landschaft",
            "Gap-Analyse & Risikobewertung",
            "Migrations-Roadmap mit Meilensteinen",
            "Kosten-Nutzen-Abschätzung",
            "Management-Präsentation"
          ]
        : [
            "Current state analysis of your ERP landscape",
            "Gap analysis & risk assessment",
            "Migration roadmap with milestones",
            "Cost-benefit estimation",
            "Management presentation"
          ],
      duration: language === 'de' ? "Typische Dauer: 2-4 Wochen" : "Typical Duration: 2-4 Weeks"
    },
    {
      icon: Building,
      title: language === 'de' ? "PMO-Aufbau & Optimierung" : "PMO Setup & Optimization",
      tagline: language === 'de' ? "Struktur für Ihren Projekterfolg" : "Structure for your project success",
      description: language === 'de'
        ? "Ob Neuaufbau oder Optimierung eines bestehenden PMO - ich etabliere die Strukturen, Prozesse und Tools, die Ihre Projektlandschaft transparent und steuerbar machen. Das Ergebnis: bessere Entscheidungen, weniger Reibungsverluste, höhere Erfolgsquoten."
        : "Whether building new or optimizing an existing PMO - I establish the structures, processes, and tools that make your project landscape transparent and manageable. The result: better decisions, less friction, higher success rates.",
      deliverables: language === 'de'
        ? [
            "PMO-Reifegrad-Assessment",
            "Governance-Framework & Prozessdefinition",
            "Tool-Auswahl & Implementierungsunterstützung",
            "Reporting-Templates & KPI-Dashboard",
            "Schulung Ihrer PMO-Mitarbeiter"
          ]
        : [
            "PMO maturity assessment",
            "Governance framework & process definition",
            "Tool selection & implementation support",
            "Reporting templates & KPI dashboard",
            "Training for your PMO staff"
          ],
      duration: language === 'de' ? "Typische Dauer: 4-8 Wochen" : "Typical Duration: 4-8 Weeks"
    },
    {
      icon: Search,
      title: language === 'de' ? "Prozess-Audit" : "Process Audit",
      tagline: language === 'de' ? "Ineffizienzen aufdecken, Potenziale heben" : "Uncover inefficiencies, unlock potential",
      description: language === 'de'
        ? "In jedem Unternehmen schlummern Prozesse, die Zeit und Geld kosten. Ich analysiere Ihre Ist-Prozesse, decke Schwachstellen auf und liefere konkrete Handlungsempfehlungen - von Quick Wins bis zu strategischen Optimierungen."
        : "Every company has dormant processes that cost time and money. I analyze your current processes, uncover weaknesses, and deliver concrete recommendations - from quick wins to strategic optimizations.",
      deliverables: language === 'de'
        ? [
            "Prozessaufnahme & -dokumentation (BPMN)",
            "Schwachstellen-Analyse & Pain Points",
            "Benchmark mit Best Practices",
            "Priorisierte Maßnahmenliste",
            "Business Case für Top-Optimierungen"
          ]
        : [
            "Process recording & documentation (BPMN)",
            "Weakness analysis & pain points",
            "Benchmark with best practices",
            "Prioritized action list",
            "Business case for top optimizations"
          ],
      duration: language === 'de' ? "Typische Dauer: 2-3 Wochen" : "Typical Duration: 2-3 Weeks"
    },
    {
      icon: RefreshCw,
      title: "Agile Transformation",
      tagline: language === 'de' ? "Vom Wasserfall zur Agilität" : "From waterfall to agility",
      description: language === 'de'
        ? "Agilität ist mehr als Scrum-Meetings. Ich begleite Ihre Teams auf dem Weg zu echten agilen Arbeitsweisen - pragmatisch, ohne Dogma, mit Fokus auf das, was in Ihrem Kontext funktioniert. Von der Pilotierung bis zum unternehmensweiten Rollout."
        : "Agility is more than Scrum meetings. I guide your teams on the path to truly agile ways of working - pragmatically, without dogma, focusing on what works in your context. From piloting to company-wide rollout.",
      deliverables: language === 'de'
        ? [
            "Agile Readiness Assessment",
            "Maßgeschneidertes Transformationskonzept",
            "Pilot-Team Coaching & Begleitung",
            "Agile Toolchain Setup",
            "Führungskräfte-Workshops"
          ]
        : [
            "Agile readiness assessment",
            "Tailored transformation concept",
            "Pilot team coaching & support",
            "Agile toolchain setup",
            "Leadership workshops"
          ],
      duration: language === 'de' ? "Typische Dauer: 6-12 Wochen" : "Typical Duration: 6-12 Weeks"
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
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {language === 'de' ? 'Zurück' : 'Back'}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[hsl(200,15%,20%)] via-[hsl(200,18%,25%)] to-[hsl(195,25%,30%)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {language === 'de' ? 'Beratungspakete' : 'Consulting Packages'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Fokussierte Engagements für messbare Ergebnisse'
              : 'Focused engagements for measurable results'}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {language === 'de'
              ? 'Nicht jedes Projekt braucht eine dauerhafte Besetzung. Meine Beratungspakete bieten Ihnen fokussierte Expertise für spezifische Herausforderungen - mit klarem Scope, definierten Deliverables und transparenten Ergebnissen.'
              : "Not every project needs a permanent position. My consulting packages offer you focused expertise for specific challenges - with clear scope, defined deliverables, and transparent results."}
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border-l-4 border-l-[#1e3a5f] p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center mb-5">
                  <pkg.icon className="w-6 h-6 text-[#1e3a5f]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>

                {/* Tagline */}
                <p className="text-sm italic text-primary mb-4">{pkg.tagline}</p>

                {/* Description */}
                <p className="text-base text-[#4b5563] mb-6 leading-relaxed">{pkg.description}</p>

                {/* Deliverables */}
                <div className="mb-6">
                  <h4 className="font-bold text-sm text-foreground mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration Footer */}
                <p className="text-[13px] text-[#4b5563] italic border-t border-border pt-4">
                  {pkg.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#f8fafa]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {language === 'de' ? 'Das passende Paket nicht dabei?' : "Don't see the right package?"}
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
            {language === 'de'
              ? 'Kein Problem - ich schnüre auch individuelle Pakete nach Ihren Anforderungen.'
              : "No problem - I also create custom packages tailored to your requirements."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold" asChild>
              <Link to="/#contact">
                {language === 'de' ? 'Individuelles Angebot anfragen' : 'Request Custom Proposal'}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-semibold" asChild>
              <Link to="/">
                {language === 'de' ? 'Zurück zur Übersicht' : 'Back to Overview'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[hsl(200,15%,20%)] text-white/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 ESIT-Consulting. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <Link to="/impressum" className="hover:text-white transition-colors">
              {language === 'de' ? 'Impressum' : 'Imprint'}
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              {language === 'de' ? 'Datenschutz' : 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PackagesPage;
