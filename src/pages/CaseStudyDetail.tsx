import { useParams, Link, Navigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import CustomCursor from "@/components/CustomCursor";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = translations[language].caseStudies;
  
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  const Icon = caseStudy.icon;

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${caseStudy.image})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <Link to="/#cases">
            <Button variant="ghost" className="mb-8 text-white hover:text-white/80 hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{caseStudy.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{caseStudy.title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-white/90 font-medium max-w-2xl">
            {caseStudy.company}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {caseStudy.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-base px-4 py-2">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t.challenge}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseStudy.challenge}
            </p>
            {caseStudy.detailedChallenge && (
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                {caseStudy.detailedChallenge}
              </p>
            )}
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t.solution}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseStudy.solution}
            </p>
            {caseStudy.detailedSolution && (
              <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                {caseStudy.detailedSolution}
              </p>
            )}
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t.results}</h2>
            <ul className="space-y-4">
              {caseStudy.results.map((result, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-foreground/80">{result}</span>
                </li>
              ))}
              {caseStudy.additionalResults?.map((result, i) => (
                <li key={`additional-${i}`} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-foreground/80">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve similar results
            </p>
            <Link to="/#contact">
              <Button size="lg" className="text-lg px-8">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
