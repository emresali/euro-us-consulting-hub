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
  Mail,
  Linkedin
} from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";

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
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">ESIT-Consulting</h2>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#expertise" className="text-foreground hover:text-primary transition-colors">Expertise</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,25%,15%)] via-[hsl(215,25%,15%,0.95)] to-[hsl(215,25%,15%,0.8)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Driving Excellence in IT Project Delivery
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Expert IT-PMO, Scrum Master, and Business Analysis consulting for European and US organizations seeking transformational results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#services">Explore Services</a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm" asChild>
                <a href="#contact">Schedule Consultation</a>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span>EU & US Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT consulting solutions tailored to your organization's needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With extensive experience across multiple domains, I deliver comprehensive solutions that bridge technology, process, and people.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="text-2xl font-bold mb-6">Why Choose ESIT-Consulting?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">International Expertise</h4>
                  <p className="text-muted-foreground">
                    Extensive experience working with German, Dutch, French, and US clients across diverse industries.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Proven Methodology</h4>
                  <p className="text-muted-foreground">
                    Structured approach combining Agile practices, PMO frameworks, and data-driven decision making.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Results-Focused</h4>
                  <p className="text-muted-foreground">
                    Dedicated to delivering measurable outcomes and sustainable organizational improvement.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Collaborate</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your IT operations? Get in touch to discuss how we can work together.
            </p>
            <Card className="p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href="mailto:contact@esit-consulting.com" className="text-lg hover:text-primary transition-colors">
                    contact@esit-consulting.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <a href="#" className="text-lg hover:text-primary transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    Serving clients in Germany, Netherlands, France, and United States
                  </p>
                  <Button variant="hero" size="lg">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ESIT-Consulting. All rights reserved.</p>
          <p className="text-sm mt-2">Professional IT Consulting Services | Europe & USA</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
