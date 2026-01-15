import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Target, RefreshCw, AlertTriangle, LineChart, Settings, BarChart3, Lightbulb, Cloud, Rocket, Briefcase, ClipboardList, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import esitLogo from "@/assets/esit-logo-transparent.png";

const ServicesPage = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      back: "Zurück",
      heroTitle: "Professionelle Dienstleistungen",
      heroSubtitle: "Umfassende IT-Beratung für Ihre digitale Transformation",
      intro: "Mit über 5 Jahren Erfahrung in IT-Projektmanagement und Business Analyse unterstütze ich Unternehmen dabei, ihre IT-Initiativen erfolgreich umzusetzen. Mein Leistungsspektrum deckt den gesamten Projektzyklus ab - von der strategischen Planung bis zur operativen Umsetzung.",
      categories: [
        {
          title: "Projektmanagement & Governance",
          icon: Briefcase,
          services: [
            {
              icon: Target,
              title: "IT-PMO",
              description: "Zentraler Steuerungspunkt für Ihre IT-Initiativen. Ich etabliere transparente Strukturen für Portfolio-Management, Ressourcensteuerung und projektübergreifendes Reporting.",
              points: ["Portfolio- & Ressourcenmanagement", "Governance-Frameworks", "PMO-Aufbau & Optimierung"]
            },
            {
              icon: RefreshCw,
              title: "Scrum Master",
              description: "Enabling für Hochleistungsteams. Ich sorge dafür, dass Ihre agilen Teams effektiv arbeiten, Hindernisse schnell beseitigt werden und kontinuierliche Verbesserung gelebt wird.",
              points: ["Sprint-Facilitation", "Team-Coaching", "Impediment-Beseitigung"]
            },
            {
              icon: AlertTriangle,
              title: "Change & Eskalationsmanagement",
              description: "Komplexe Transformationen sicher navigieren. Ich manage Widerstände, löse Konflikte und stelle sicher, dass Veränderungen nachhaltig verankert werden.",
              points: ["Stakeholder-Engagement", "Risikominimierung", "Eskalationshandling"]
            }
          ]
        },
        {
          title: "Business Analyse & Prozesse",
          icon: ClipboardList,
          services: [
            {
              icon: LineChart,
              title: "Business Analysis",
              description: "Die Brücke zwischen Fachbereich und IT. Ich übersetze Geschäftsanforderungen in technische Spezifikationen und stelle sicher, dass Lösungen echten Mehrwert liefern.",
              points: ["Requirements Engineering", "Stakeholder-Management", "Lösungsdesign"]
            },
            {
              icon: Settings,
              title: "Process Management",
              description: "Streamlined Operations für nachhaltige Effizienz. Ich analysiere, optimiere und automatisiere Ihre Geschäftsprozesse für messbare Produktivitätssteigerungen.",
              points: ["Prozessoptimierung", "Workflow-Automatisierung", "Operational Excellence"]
            },
            {
              icon: BarChart3,
              title: "Data Analytics",
              description: "Datenbasierte Entscheidungen für Wettbewerbsvorteile. Ich helfe Ihnen, aus Ihren Daten verwertbare Erkenntnisse zu gewinnen und diese in Ihren Entscheidungsprozessen zu verankern.",
              points: ["Reporting-Frameworks", "Analyse-Strategie", "KPI-Entwicklung"]
            }
          ]
        },
        {
          title: "Strategie & Transformation",
          icon: TrendingUp,
          services: [
            {
              icon: Lightbulb,
              title: "Product Owner",
              description: "Maximaler Produktwert durch strategische Vision. Ich priorisiere Ihr Backlog nach Business Value und stelle sicher, dass Ihr Team immer am Wichtigsten arbeitet.",
              points: ["Backlog Management", "Stakeholder-Alignment", "Value Optimization"]
            },
            {
              icon: Cloud,
              title: "ERP & Cloud Migration",
              description: "Sichere Begleitung bei Enterprise-System-Übergängen. Von Microsoft Dynamics über SAP bis zu Cloud-Plattformen - ich führe Ihre Migration zum Erfolg.",
              points: ["MS Dynamics & SAP", "Google Cloud & Azure", "Migrations-Leadership"]
            },
            {
              icon: Rocket,
              title: "Digitale Transformation",
              description: "Ganzheitliche Strategie für Ihre digitale Evolution. Ich entwickle Technologie-Roadmaps und begleite Ihre Organisation durch den Wandel - von der Vision bis zur Umsetzung.",
              points: ["Technologie-Roadmaps", "Change Leadership", "Innovationsstrategie"]
            }
          ]
        }
      ],
      ctaTitle: "Lassen Sie uns über Ihr Projekt sprechen",
      ctaSubtitle: "Gemeinsam finden wir die richtige Lösung für Ihre Herausforderungen.",
      ctaButton: "Beratungsgespräch vereinbaren",
      ctaRoles: "Projektrollen ansehen",
      ctaPackages: "Beratungspakete ansehen"
    },
    en: {
      back: "Back",
      heroTitle: "Professional Services",
      heroSubtitle: "Comprehensive IT consulting for your digital transformation",
      intro: "With over 5 years of experience in IT project management and business analysis, I help companies successfully implement their IT initiatives. My service portfolio covers the entire project lifecycle - from strategic planning to operational execution.",
      categories: [
        {
          title: "Project Management & Governance",
          icon: Briefcase,
          services: [
            {
              icon: Target,
              title: "IT-PMO",
              description: "Central control point for your IT initiatives. I establish transparent structures for portfolio management, resource control, and cross-project reporting.",
              points: ["Portfolio & Resource Management", "Governance Frameworks", "PMO Setup & Optimization"]
            },
            {
              icon: RefreshCw,
              title: "Scrum Master",
              description: "Enabling high-performance teams. I ensure your agile teams work effectively, obstacles are quickly removed, and continuous improvement is lived.",
              points: ["Sprint Facilitation", "Team Coaching", "Impediment Removal"]
            },
            {
              icon: AlertTriangle,
              title: "Change & Escalation Management",
              description: "Safely navigate complex transformations. I manage resistance, resolve conflicts, and ensure changes are sustainably anchored.",
              points: ["Stakeholder Engagement", "Risk Minimization", "Escalation Handling"]
            }
          ]
        },
        {
          title: "Business Analysis & Processes",
          icon: ClipboardList,
          services: [
            {
              icon: LineChart,
              title: "Business Analysis",
              description: "The bridge between business and IT. I translate business requirements into technical specifications and ensure solutions deliver real value.",
              points: ["Requirements Engineering", "Stakeholder Management", "Solution Design"]
            },
            {
              icon: Settings,
              title: "Process Management",
              description: "Streamlined operations for sustainable efficiency. I analyze, optimize, and automate your business processes for measurable productivity gains.",
              points: ["Process Optimization", "Workflow Automation", "Operational Excellence"]
            },
            {
              icon: BarChart3,
              title: "Data Analytics",
              description: "Data-driven decisions for competitive advantage. I help you extract actionable insights from your data and anchor them in your decision processes.",
              points: ["Reporting Frameworks", "Analytics Strategy", "KPI Development"]
            }
          ]
        },
        {
          title: "Strategy & Transformation",
          icon: TrendingUp,
          services: [
            {
              icon: Lightbulb,
              title: "Product Owner",
              description: "Maximum product value through strategic vision. I prioritize your backlog by business value and ensure your team always works on what matters most.",
              points: ["Backlog Management", "Stakeholder Alignment", "Value Optimization"]
            },
            {
              icon: Cloud,
              title: "ERP & Cloud Migration",
              description: "Safe guidance through enterprise system transitions. From Microsoft Dynamics to SAP to cloud platforms - I lead your migration to success.",
              points: ["MS Dynamics & SAP", "Google Cloud & Azure", "Migration Leadership"]
            },
            {
              icon: Rocket,
              title: "Digital Transformation",
              description: "Holistic strategy for your digital evolution. I develop technology roadmaps and guide your organization through change - from vision to execution.",
              points: ["Technology Roadmaps", "Change Leadership", "Innovation Strategy"]
            }
          ]
        }
      ],
      ctaTitle: "Let's talk about your project",
      ctaSubtitle: "Together we'll find the right solution for your challenges.",
      ctaButton: "Schedule a consultation",
      ctaRoles: "View project roles",
      ctaPackages: "View consulting packages"
    }
  };

  const t = content[language];

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
              {t.back}
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 space-y-16 md:space-y-20">
          {t.categories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
                <category.icon className="w-7 h-7 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  {category.title}
                </h2>
              </div>

              {/* Service Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex}
                    className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 border-t-0 hover:border-t-[3px] hover:border-t-primary"
                    style={{ 
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      borderRadius: '12px'
                    }}
                  >
                    <CardContent className="p-7">
                      <service.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center gap-2 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#f0fafa' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">
                {t.ctaButton}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/rollen">
                {t.ctaRoles}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pakete">
                {t.ctaPackages}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
