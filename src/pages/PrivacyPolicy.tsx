import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import esitLogo from "@/assets/esit-logo-light.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          {t.legal.privacy.title}
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {language === 'en' ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Data Protection at a Glance</h2>
                <h3 className="text-xl font-bold text-foreground mb-3">General Information</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The following information provides a simple overview of what happens to your personal data when you visit this website. 
                  Personal data is any data that can be used to identify you personally.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Data Collection on This Website</h3>
                <h4 className="text-lg font-semibold text-foreground mb-2">Who is responsible for data collection on this website?</h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Data processing on this website is carried out by the website operator. You can find their contact details in the "Information about 
                  the responsible party" section of this privacy policy.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-2">How do we collect your data?</h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Your data is collected when you provide it to us. This could, for example, be data you enter in a contact form. 
                  Other data is collected automatically or with your consent when you visit the website through our IT systems.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-2">What do we use your data for?</h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-2">What rights do you have regarding your data?</h4>
                <p className="text-foreground/80 leading-relaxed">
                  You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. 
                  You also have the right to request the correction or deletion of this data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Hosting</h2>
                <p className="text-foreground/80 leading-relaxed">
                  This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster's servers. 
                  This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated through a website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. General Information and Mandatory Information</h2>
                <h3 className="text-xl font-bold text-foreground mb-3">Data Protection</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and 
                  in accordance with statutory data protection regulations and this privacy policy.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Information about the Responsible Party</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The responsible party for data processing on this website is:<br /><br />
                  ESIT-Consulting<br />
                  [Your Name]<br />
                  [Street Address]<br />
                  [Postal Code] [City]<br />
                  [Country]<br /><br />
                  Email: contact@esit-consulting.com<br />
                  Phone: [Your Phone Number]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Revocation of Your Consent to Data Processing</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. 
                  The legality of data processing carried out before the revocation remains unaffected by the revocation.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Right to Data Portability</h3>
                <p className="text-foreground/80 leading-relaxed">
                  You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you 
                  or to a third party in a common, machine-readable format.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Right to Information, Correction, and Deletion</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, 
                  its origin and recipient and the purpose of data processing and, if applicable, a right to correction or deletion of this data.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Right to Restriction of Processing</h3>
                <p className="text-foreground/80 leading-relaxed">
                  You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. 
                  The right to restriction of processing exists in the following cases: If you dispute the accuracy of your personal data stored by us, 
                  we usually need time to verify this.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Collection on This Website</h2>
                <h3 className="text-xl font-bold text-foreground mb-3">Contact Form</h3>
                <p className="text-foreground/80 leading-relaxed">
                  If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provide there, 
                  will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Request by Email, Phone, or Fax</h3>
                <p className="text-foreground/80 leading-relaxed">
                  If you contact us by email, phone, or fax, your request, including all resulting personal data (name, request), will be stored and processed 
                  by us for the purpose of processing your request. We do not pass on this data without your consent.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-bold text-foreground mb-3">Allgemeine Hinweise</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-semibold text-foreground mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 
                  „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, 
                  die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                  durch unsere IT-Systeme erfasst.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur 
                  Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h4 className="text-lg font-semibold text-foreground mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. 
                  Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Hosting</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                  Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-xl font-bold text-foreground mb-3">Datenschutz</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich 
                  und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                  ESIT-Consulting<br />
                  [Ihr Name]<br />
                  [Straße und Hausnummer]<br />
                  [PLZ] [Ort]<br />
                  [Land]<br /><br />
                  E-Mail: contact@esit-consulting.com<br />
                  Telefon: [Ihre Telefonnummer]
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung 
                  jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Recht auf Datenübertragbarkeit</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, 
                  an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Auskunft, Berichtigung und Löschung</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                  personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder 
                  Löschung dieser Daten.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit 
                  an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns 
                  gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-bold text-foreground mb-3">Kontaktformular</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort 
                  angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir 
                  nicht ohne Ihre Einwilligung weiter.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten 
                  (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre 
                  Einwilligung weiter.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
