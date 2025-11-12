import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Target, 
  Users, 
  LineChart, 
  Database,
  CheckCircle,
  Globe,
  Calendar,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import esitLogo from "@/assets/esit-logo-light.png";
import profileImage from "@/assets/profile-2.jpg";
import profileHero from "@/assets/profile-hero.jpg";
import ContactForm from "@/components/ContactForm";
import CaseStudies from "@/components/CaseStudies";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    { icon: Target, title: t.services.itPmo.title, description: t.services.itPmo.description },
    { icon: Users, title: t.services.scrumMaster.title, description: t.services.scrumMaster.description },
    { icon: Briefcase, title: t.services.processManagement.title, description: t.services.processManagement.description },
    { icon: LineChart, title: t.services.businessAnalysis.title, description: t.services.businessAnalysis.description },
    { icon: Database, title: t.services.dataAnalytics.title, description: t.services.dataAnalytics.description },
    { icon: CheckCircle, title: t.services.changeManagement.title, description: t.services.changeManagement.description }
  ];

  const expertise = [
    "Project Portfolio Management",
    "Agile Transformation",
    "Process Optimization",
    "Requirements Engineering",
    "Data Visualization & Reporting",
    "Change Management",
    "Stakeholder Engagement",
    "Digital Transformation Strategy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={esitLogo} alt="ESIT-Consulting" className="h-10 md:h-12" />
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.services}</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.cases}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.about}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">{t.nav.contact}</a>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">{t.nav.getInTouch}</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,25%,15%)] via-[hsl(215,25%,15%,0.95)] to-[hsl(215,25%,15%,0.7)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(180,54%,57%,0.1),transparent_50%)]" />
        </div>
        
        {/* Subtle profile image in header - transparent and integrated */}
        <div className="absolute top-20 right-8 hidden lg:block opacity-20 hover:opacity-30 transition-opacity duration-500">
          <img 
            src={profileHero} 
            alt="Consultant" 
            className="w-64 h-64 object-cover rounded-full blur-[2px]"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="hero" size="lg" asChild>
                  <a href="#services">
                    {t.hero.exploreServices}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" 
                  asChild
                >
                  <a href="#contact">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t.hero.scheduleConsultation}
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">{t.hero.euUseCoverage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{t.hero.yearsExperience}</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center relative">
              <div className="relative z-10 w-80">
                <img 
                  src={profileHero} 
                  alt="Professional IT Consultant" 
                  className="rounded-full w-full shadow-2xl border-4 border-white/10"
                  style={{ boxShadow: 'var(--shadow-elevated)' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg animate-pulse-glow">
                  <p className="font-bold text-lg">{t.hero.yearsExperience.split(' ')[0]}</p>
                  <p className="text-xs">{t.hero.expert}</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative" style={{ background: 'var(--section-primary-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-2 animate-fade-in-up"
                style={{ 
                  boxShadow: 'var(--shadow-card)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* About Section with Profile */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'var(--section-accent-bg)' }}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Professional consultant portrait" 
                  className="rounded-2xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
                  style={{ boxShadow: 'var(--shadow-card-hover)' }}
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg hidden lg:block animate-pulse-glow">
                  <p className="font-bold text-xl">{t.hero.yearsExperience.split(' ')[0]}</p>
                  <p className="text-sm">{t.hero.yearsExperience.split(' ').slice(1).join(' ')}</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  {t.about.subtitle1}
                </p>
                <p className="text-lg text-muted-foreground">
                  {t.about.subtitle2}
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-xl mb-4">{t.about.coreExpertise}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {expertise.slice(0, 6).map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">{t.about.international.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t.about.international.description}
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">{t.about.results.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t.about.results.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--section-secondary-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.contact.subtitle}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <h3 className="text-2xl font-bold mb-6">{t.contact.sendMessage}</h3>
                <ContactForm />
              </Card>

              <div className="space-y-8">
                <Card className="p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="text-2xl font-bold mb-6">{t.contact.scheduleTitle}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t.contact.scheduleDescription}
                  </p>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" />
                      {t.contact.bookMeeting}
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    {t.contact.availableTimezones}
                  </p>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="text-xl font-bold mb-4">{t.contact.serviceAreas}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        {t.contact.europe}
                      </h4>
                      <p className="text-sm text-muted-foreground ml-6">
                        Germany • Netherlands • France
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        {t.contact.northAmerica}
                      </h4>
                      <p className="text-sm text-muted-foreground ml-6">
                        United States
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={esitLogo} alt="ESIT-Consulting" className="h-10 mb-4" />
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.itPmo.title}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.scrumMaster.title}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.businessAnalysis.title}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.dataAnalytics.title}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.connect}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a></li>
                <li><a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#cases" className="hover:text-primary transition-colors">{t.nav.cases}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
            <p className="mt-2">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
