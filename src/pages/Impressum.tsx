import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import esitLogo from "@/assets/esit-logo-light.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <img src={esitLogo} alt="ESIT-Consulting" className="h-10 md:h-12" />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          {t.legal.impressum.title}
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {language === 'en' ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Legal Notice</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Information pursuant to § 5 TMG (German Telemedia Act)
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Service Provider</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Emre Sali<br />
                  IT-Consulting<br />
                  Lievergesberg 59<br />
                  50769 Köln<br />
                  Germany
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Contact</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Email: sali@esit-consulting.de<br />
                  Phone: +49 176 41418299
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">VAT ID</h3>
                <p className="text-foreground/80 leading-relaxed">
                  VAT identification number according to § 27a VAT Tax Act:<br />
                  DE455245273
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Business Identification Number</h3>
                <p className="text-foreground/80 leading-relaxed">
                  DE455245273-00001
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Professional Liability Insurance</h3>
                <p className="text-foreground/80 leading-relaxed">
                  exali AG<br />
                  Franz-Kobinger-Str. 9<br />
                  86157 Augsburg<br />
                  Coverage area: Worldwide
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Responsible for Content</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Responsible for content according to § 55 Abs. 2 RStV:<br />
                  Emre Sali<br />
                  Lievergesberg 59, 50769 Köln
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Source</h3>
                <p className="text-foreground/80 leading-relaxed">
                  <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.e-recht24.de
                  </a>
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">EU Dispute Resolution</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The European Commission provides a platform for online dispute resolution (OS): 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>
                  <br />
                  Our email address can be found above in the imprint.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Consumer Dispute Resolution</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Liability for Content</h3>
                <p className="text-foreground/80 leading-relaxed">
                  As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to Section 7 (1) TMG. 
                  However, according to Sections 8 to 10 TMG, we as a service provider are not obligated to monitor transmitted or stored third-party information 
                  or to investigate circumstances that indicate illegal activity.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Liability for Links</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Our website contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability 
                  for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Copyright</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, 
                  and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Diensteanbieter</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Emre Sali<br />
                  IT-Consulting<br />
                  Lievergesberg 59<br />
                  50769 Köln<br />
                  Deutschland
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Kontakt</h3>
                <p className="text-foreground/80 leading-relaxed">
                  E-Mail: sali@esit-consulting.de<br />
                  Telefon: +4917641418299
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Umsatzsteuer-ID</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
                  DE455245273
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Wirtschaftsidentifikationsnummer</h3>
                <p className="text-foreground/80 leading-relaxed">
                  DE455245273-00001
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Angaben zur Berufshaftpflichtversicherung</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Name und Sitz des Versicherers:<br />
                  exali AG<br />
                  Franz-Kobinger-Str. 9<br />
                  86157 Augsburg<br />
                  <br />
                  Geltungsraum der Versicherung:<br />
                  Weltweit
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Redaktionell verantwortlich</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Emre Sali
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Quelle</h3>
                <p className="text-foreground/80 leading-relaxed">
                  <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.e-recht24.de
                  </a>
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">EU-Streitschlichtung</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Verbraucherstreitbeilegung</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Haftung für Inhalte</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                  Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
                  überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Haftung für Links</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                  fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Urheberrecht</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                  Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                  jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Impressum;
