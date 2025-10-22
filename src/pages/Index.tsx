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
import profileAlt1 from "@/assets/profile-1.jpg";
import profileAlt2 from "@/assets/profile-3.jpg";
import profileHero from "@/assets/profile-hero.jpg";
import profileAdditional from "@/assets/profile-additional.jpg";
import ContactForm from "@/components/ContactForm";
import CaseStudies from "@/components/CaseStudies";

const Index = () => {
  const services = [
    {
      icon: Target,
      title: "IT-PMO",
      description: "Strategic IT project portfolio management, governance frameworks, and PMO establishment for enterprise transformation."
    },
    {
      icon: Users,
      title: "Scrum Master",
      description: "Expert facilitation of Agile teams, sprint planning, and coaching organizations in modern software delivery practices."
    },
    {
      icon: Briefcase,
      title: "Process Management",
      description: "Business process optimization, workflow automation, and operational excellence consulting for efficiency gains."
    },
    {
      icon: LineChart,
      title: "Business Analysis",
      description: "Requirements engineering, stakeholder management, and strategic business solution design for digital transformation."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Data-driven insights, reporting frameworks, and analytics strategy to support informed business decision-making."
    }
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
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={esitLogo} alt="ESIT-Consulting" className="h-10 md:h-12" />
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#cases" className="text-foreground hover:text-primary transition-colors font-medium">Case Studies</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
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
                Driving Excellence in IT Project Delivery
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Expert IT-PMO, Scrum Master, and Business Analysis consulting for European and US organizations seeking transformational results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="hero" size="lg" asChild>
                  <a href="#services">
                    Explore Services
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
                    Schedule Consultation
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">EU & US Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">15+ Years Experience</span>
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
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold text-lg">15+ Years</p>
                  <p className="text-xs">Expert</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT consulting solutions tailored to your organization's needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 hover:-translate-y-1"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary" />
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
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src={profileImage} 
                    alt="Professional consultant portrait" 
                    className="rounded-2xl shadow-lg w-full col-span-2 hover:scale-105 transition-transform duration-300"
                    style={{ boxShadow: 'var(--shadow-card-hover)' }}
                  />
                  <img 
                    src={profileAdditional} 
                    alt="Consultant profile" 
                    className="rounded-xl shadow-md w-full hover:scale-105 transition-transform duration-300"
                    style={{ boxShadow: 'var(--shadow-subtle)' }}
                  />
                  <img 
                    src={profileAlt1} 
                    alt="Professional headshot" 
                    className="rounded-xl shadow-md w-full hover:scale-105 transition-transform duration-300"
                    style={{ boxShadow: 'var(--shadow-subtle)' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg hidden lg:block">
                  <p className="font-bold text-xl">15+ Years</p>
                  <p className="text-sm">Experience</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Your IT Transformation Partner</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  As a seasoned IT professional, I bring comprehensive expertise in project management, agile methodologies, and strategic business analysis to drive your organization's success.
                </p>
                <p className="text-lg text-muted-foreground">
                  With extensive experience across multiple domains, I deliver comprehensive solutions that bridge technology, process, and people - helping European and US clients achieve transformational results.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-xl mb-4">Core Expertise</h3>
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
                  <h4 className="font-semibold mb-2">International Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly working with German, Dutch, French, and US clients.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Results-Focused</h4>
                  <p className="text-sm text-muted-foreground">
                    Delivering measurable outcomes and sustainable improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your IT operations? Schedule a consultation or send me a message.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8" style={{ boxShadow: 'var(--shadow-elevated)' }}>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <ContactForm />
              </Card>

              <div className="space-y-8">
                <Card className="p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
                  <p className="text-muted-foreground mb-6">
                    Book a 30-minute video call to discuss your project requirements and how I can help.
                  </p>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book a Meeting
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Available for calls in multiple timezones
                  </p>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        Europe
                      </h4>
                      <p className="text-sm text-muted-foreground ml-6">
                        Germany • Netherlands • France
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        North America
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
                Professional IT consulting services for transformational business results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">IT-PMO</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Scrum Master</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Business Analysis</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Data Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#cases" className="hover:text-primary transition-colors">Case Studies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} ESIT-Consulting. All rights reserved.</p>
            <p className="mt-2">Professional IT Consulting Services | Europe & USA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
