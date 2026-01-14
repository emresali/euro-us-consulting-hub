import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  Phone,
  Package,
  Cloud,
  Rocket,
  Menu,
  Search,
  Lightbulb,
  Wrench,
  TrendingUp,
  Languages
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import esitLogo from "@/assets/esit-logo-transparent.png";
import profileImage from "@/assets/profile-2.jpg";
import esIcon from "@/assets/es-icon.png";
import profileHero from "@/assets/profile-hero.jpg";
import ContactForm from "@/components/ContactForm";
import CaseStudies from "@/components/CaseStudies";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import CustomerReferences from "@/components/CustomerReferences";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Index = () => {
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

  const expertise = [
    { text: "Project Portfolio Management", icon: FolderKanban },
    { text: "Agile Transformation", icon: Zap },
    { text: "Process Optimization", icon: Settings },
    { text: "Requirements Engineering", icon: FileText },
    { text: "Data Visualization & Reporting", icon: BarChart3 },
    { text: "Change Management", icon: RefreshCw }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-3 md:px-4 py-2.5 md:py-4 flex justify-between items-center">
          <img src={esitLogo} alt="ESIT-Consulting" className="h-7 md:h-12" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.services}</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.cases}</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.about}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-semibold text-base tracking-wide">{t.nav.contact}</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            
            {/* Desktop CTA Button */}
            <Button variant="hero" size="sm" className="hidden md:flex text-sm px-4" asChild>
              <a href="#contact">{t.nav.getInTouch}</a>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="#services" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">{t.nav.services}</a>
                  <a href="#cases" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">{t.nav.cases}</a>
                  <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">{t.nav.about}</a>
                  <a href="#contact" className="text-foreground hover:text-primary transition-colors font-semibold text-lg">{t.nav.contact}</a>
                  <Button variant="hero" className="mt-4 w-full" asChild>
                    <a href="#contact">{t.nav.getInTouch}</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden py-12 md:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,25%,22%)] via-[hsl(215,25%,22%,0.95)] to-[hsl(215,25%,22%,0.7)]" />
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
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
              
              {/* Location Badge - Clean & Simple */}
              <div className="inline-flex items-center gap-2 text-white/60 mt-4">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">
                  {language === 'en' ? 'Based in Germany • Serving EU & US Clients' : 'Standort Deutschland • EU & US Kunden'}
                </span>
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
        {/* Subtle transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-[hsl(180,25%,97%)] pointer-events-none" />
      </section>

      {/* Customer References - subtle tinted background */}
      <section className="relative bg-[hsl(180,25%,97%)]">
        <CustomerReferences />
        {/* Bottom gradient to services section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[hsl(180,40%,97%)] pointer-events-none" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 relative" style={{ background: 'var(--section-primary-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180,54%,97%)] via-primary/8 to-[hsl(200,20%,98%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent px-4">
              {t.services.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
              {t.services.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden transition-all duration-300 border border-border/50 bg-gradient-to-br from-card to-card/80 rounded-xl animate-fade-in-up hover:-translate-y-1 hover:border-l-[3px] hover:border-l-primary"
                style={{ 
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative pb-2">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative pt-0 space-y-3">
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {service.intro}
                  </p>
                  <ul className="space-y-2">
                    {service.points.slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm md:text-base text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16 md:py-20 relative" style={{ background: 'hsl(210, 20%, 98%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent px-4">
              {t.engagement.title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
              {t.engagement.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Project Roles Card */}
            <div 
              className="bg-card rounded-xl p-8 md:p-10 border-l-4 border-l-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t.engagement.projectRoles.title}</h3>
              <p className="text-sm md:text-base text-foreground/60 mb-6">{t.engagement.projectRoles.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {t.engagement.projectRoles.roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base border-2 border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 hover:border-primary/50 transition-all group-hover:gap-3"
              >
                {t.engagement.projectRoles.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Consulting Packages Card */}
            <div 
              className="bg-card rounded-xl p-8 md:p-10 border-l-4 border-l-[hsl(215,40%,35%)] transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-[hsl(215,40%,35%)]/10 flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-[hsl(215,40%,35%)]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t.engagement.packages.title}</h3>
              <p className="text-sm md:text-base text-foreground/60 mb-6">{t.engagement.packages.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {t.engagement.packages.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm md:text-base text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-[hsl(215,40%,35%)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-[hsl(215,40%,35%)] font-semibold text-sm md:text-base border-2 border-[hsl(215,40%,35%)]/30 rounded-lg px-5 py-2.5 hover:bg-[hsl(215,40%,35%)]/5 hover:border-[hsl(215,40%,35%)]/50 transition-all group-hover:gap-3"
              >
                {t.engagement.packages.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* About Section with Profile */}
      <section id="about" className="py-12 md:py-20 lg:py-24 relative overflow-hidden" style={{ background: 'var(--section-accent-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(200,20%,98%)] via-primary/5 to-[hsl(180,54%,96%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="container mx-auto px-4 relative z-10">
          {/* Top section: Photo + Intro */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Professional consultant portrait" 
                  className="rounded-2xl shadow-lg w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
                  style={{ boxShadow: 'var(--shadow-card-hover)' }}
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-slide-in-right">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">{t.about.title}</h2>
                <p className="text-base md:text-lg text-foreground/75 mb-3 md:mb-4 leading-relaxed">
                  {t.about.subtitle1}
                </p>
                <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                  {t.about.subtitle2}
                </p>
              </div>
            </div>
          </div>

          {/* Consulting Approach - Horizontal Process Flow */}
          <div className="mb-12">
            <h3 className="font-bold text-xl md:text-2xl mb-8 md:mb-10 text-center bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t.about.consultingApproach}
            </h3>
            
            {/* Process Steps */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { num: 1, icon: Search, ...t.about.approach.discover },
                { num: 2, icon: Lightbulb, ...t.about.approach.analyze },
                { num: 3, icon: Wrench, ...t.about.approach.implement },
                { num: 4, icon: TrendingUp, ...t.about.approach.optimize }
              ].map((step, index) => (
                <div key={step.num} className="flex items-center">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-foreground text-sm md:text-base mb-1">{step.title}</span>
                    <span className="text-xs md:text-sm text-foreground/60 max-w-[140px]">{step.description}</span>
                  </div>
                  
                  {/* Connector Arrow (not on last item) */}
                  {index < 3 && (
                    <div className="hidden md:flex items-center mx-4 lg:mx-6">
                      <div className="w-8 lg:w-12 h-0.5 bg-primary/30" />
                      <ArrowRight className="w-4 h-4 text-primary/50 -ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Differentiators */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Languages className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">{t.about.differentiators.trilingual}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">{t.about.differentiators.euUs}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80">{t.about.differentiators.handsOn}</span>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn CTA Section */}
      <section className="py-12 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.2),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-primary/30 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative text-center space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0077B5] to-[#00A0DC] shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Linkedin className="w-10 h-10 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent px-4">
                    {t.linkedin.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed px-4">
                    {t.linkedin.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button 
                    size="lg" 
                    className="bg-[#0077B5] hover:bg-[#00669C] text-white font-semibold px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-xs sm:text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn w-full sm:w-auto whitespace-normal sm:whitespace-nowrap"
                    asChild
                  >
                    <a href="https://www.linkedin.com/company/esit-consulting-exponential-scale" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover/btn:animate-pulse flex-shrink-0" />
                      <span className="text-center">{t.linkedin.visitButton}</span>
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="font-semibold px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-xs sm:text-base md:text-lg rounded-xl hover:bg-primary/10 border-2 border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    asChild
                  >
                    <a href="https://www.linkedin.com/company/esit-consulting-exponential-scale" target="_blank" rel="noopener noreferrer">
                      {t.linkedin.followButton}
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                  {t.linkedin.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 lg:py-24 relative overflow-hidden" style={{ background: 'var(--section-secondary-bg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180,54%,96%)] via-accent/8 to-[hsl(200,20%,96%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent px-4">{t.contact.title}</h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </div>
            
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <Card className="p-6 md:p-8" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t.contact.sendMessage}</h3>
                <ContactForm />
              </Card>

              <div className="space-y-6 md:space-y-8">
                <Card className="p-6 md:p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t.contact.scheduleTitle}</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <img src={esitLogo} alt="ESIT-Consulting" className="h-8 md:h-10 mb-3 md:mb-4" />
              <p className="text-xs md:text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.footer.services}</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.itPmo.title}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.scrumMaster.title}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.businessAnalysis.title}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.services.dataAnalytics.title}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.footer.connect}</h4>
              <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-3 h-3 md:w-4 md:h-4" />
                    {t.nav.contact}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/esit-consulting-exponential-scale" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-semibold">
                    <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                    Visit us on LinkedIn
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Phone className="w-3 h-3 md:w-4 md:h-4" />
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <img src={esIcon} alt="ES" className="h-8 w-8 rounded-lg" />
                <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
              </div>
              <div className="flex gap-3 md:gap-4">
                <a href="/impressum" className="hover:text-primary transition-colors">
                  {t.legal.impressum.link}
                </a>
                <span>•</span>
                <a href="/privacy-policy" className="hover:text-primary transition-colors">
                  {t.legal.privacy.link}
                </a>
              </div>
            </div>
            <p className="mt-3 md:mt-4 text-center text-xs md:text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
