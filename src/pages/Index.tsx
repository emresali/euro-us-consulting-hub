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
  ArrowRight,
  FolderKanban,
  Zap,
  Settings,
  FileText,
  BarChart3,
  RefreshCw,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import esitLogo from "@/assets/esit-logo-light.png";
import profileImage from "@/assets/profile-2.jpg";
import profileHero from "@/assets/profile-hero.jpg";
import ContactForm from "@/components/ContactForm";
import CaseStudies from "@/components/CaseStudies";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import CustomCursor from "@/components/CustomCursor";
import CustomerReferences from "@/components/CustomerReferences";
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
    { text: "Project Portfolio Management", icon: FolderKanban },
    { text: "Agile Transformation", icon: Zap },
    { text: "Process Optimization", icon: Settings },
    { text: "Requirements Engineering", icon: FileText },
    { text: "Data Visualization & Reporting", icon: BarChart3 },
    { text: "Change Management", icon: RefreshCw }
  ];

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={esitLogo} alt="ESIT-Consulting" className="h-10 md:h-12" />
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.services}</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.cases}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.about}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">{t.nav.getInTouch}</a>
            </Button>
          </div>
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
        <div className="absolute top-20 right-8 hidden lg:block opacity-20 hover:opacity-30 transition-opacity duration-500 z-10">
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
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="font-medium">{t.hero.euUseCoverage}</span>
              </div>
            </div>
            <div className="hidden md:flex justify-center relative">
              <div className="relative z-10 w-96">
                <img 
                  src={profileHero} 
                  alt="Professional IT Consultant" 
                  className="rounded-full w-full shadow-2xl border-4 border-white/10"
                  style={{ boxShadow: 'var(--shadow-elevated)' }}
                />
                <div className="absolute -bottom-6 -right-6 bg-primary/90 backdrop-blur-md text-primary-foreground px-6 py-4 rounded-2xl shadow-2xl border border-primary-foreground/20">
                  <p className="font-bold text-2xl">{t.hero.yearsExperience.split(' ')[0]}</p>
                  <p className="text-sm font-medium">{t.hero.yearsExperience.split(' ').slice(1).join(' ')}</p>
                </div>
              </div>
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-12 -right-12 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
        {/* Smooth transition gradient - smaller and more subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[hsl(215,25%,15%,0.2)] to-[hsl(215,25%,15%,0.4)] pointer-events-none" />
      </section>

      {/* Customer References */}
      <CustomerReferences />

      {/* Services Section */}
      <section id="services" className="py-16 relative" style={{ background: 'var(--section-primary-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180,54%,97%)] via-primary/8 to-[hsl(200,20%,98%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.services.title}
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
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
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/70">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,20%,98%)] via-primary/5 to-[hsl(180,54%,96%)] pointer-events-none" />
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
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8 animate-slide-in-right">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">{t.about.title}</h2>
                <p className="text-lg text-foreground/75 mb-4 leading-relaxed">
                  {t.about.subtitle1}
                </p>
                <p className="text-lg text-foreground/75 leading-relaxed">
                  {t.about.subtitle2}
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-bold text-2xl mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">{t.about.coreExpertise}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {expertise.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={index} 
                        className="group relative p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in overflow-hidden"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          boxShadow: '0 4px 20px rgba(var(--primary-rgb), 0.1)'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shrink-0 shadow-lg">
                            <IconComponent className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500" />
                          </div>
                          <span className="text-foreground font-bold text-base group-hover:text-primary transition-colors duration-300">{item.text}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-6">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-accent/5 backdrop-blur-sm border-2 border-primary/30 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/40 to-accent/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Globe className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-3 text-foreground">{t.about.international.title}</h4>
                      <p className="text-base text-foreground/80 leading-relaxed mb-4">
                        {t.about.international.description}
                      </p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Germany">🇩🇪</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Netherlands">🇳🇱</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="France">🇫🇷</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Luxembourg">🇱🇺</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Switzerland">🇨🇭</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Austria">🇦🇹</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Belgium">🇧🇪</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="United Kingdom">🇬🇧</span>
                        <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="United States">🇺🇸</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-accent/15 via-accent/10 to-primary/5 backdrop-blur-sm border-2 border-accent/30 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/40 to-primary/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Target className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-3 text-foreground">{t.about.results.title}</h4>
                      <p className="text-base text-foreground/80 leading-relaxed">
                        {t.about.results.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--section-secondary-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180,54%,96%)] via-accent/8 to-[hsl(200,20%,96%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">{t.contact.title}</h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
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

                <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 backdrop-blur-sm border-2 border-primary/20 overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      {t.contact.serviceAreas}
                    </h3>
                    <div className="space-y-6">
                      <div className="p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2 text-foreground">
                          <Globe className="w-5 h-5 text-primary" />
                          {t.contact.europe}
                        </h4>
                        <div className="flex items-center gap-3 flex-wrap mb-3">
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Germany">🇩🇪</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Netherlands">🇳🇱</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="France">🇫🇷</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Luxembourg">🇱🇺</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Switzerland">🇨🇭</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Austria">🇦🇹</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="Belgium">🇧🇪</span>
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="United Kingdom">🇬🇧</span>
                        </div>
                        <p className="text-sm text-foreground/70">
                          Germany • Netherlands • France • Luxembourg • Switzerland • Austria • Belgium • United Kingdom
                        </p>
                      </div>
                      <div className="p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-accent/20">
                        <h4 className="font-bold mb-4 text-lg flex items-center gap-2 text-foreground">
                          <Globe className="w-5 h-5 text-primary" />
                          {t.contact.northAmerica}
                        </h4>
                        <div className="flex items-center gap-3 flex-wrap mb-3">
                          <span className="text-4xl hover:scale-125 transition-transform duration-300 cursor-default" title="United States">🇺🇸</span>
                        </div>
                        <p className="text-sm text-foreground/70">
                          United States
                        </p>
                      </div>
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
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t.nav.contact}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/esit-consulting-exponential-scale" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-semibold">
                    <Linkedin className="w-4 h-4" />
                    Visit us on LinkedIn
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
              <div className="flex gap-4">
                <a href="/impressum" className="hover:text-primary transition-colors">
                  {t.legal.impressum.link}
                </a>
                <span>•</span>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">
                  {t.legal.privacy.link}
                </a>
              </div>
            </div>
            <p className="mt-4 text-center text-muted-foreground">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
