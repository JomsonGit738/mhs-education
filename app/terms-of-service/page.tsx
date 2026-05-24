import { PageHero } from "../../src/components/PageHero";
import { images } from "../../src/data/images";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the [Agency Name] website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.",
    ],
  },
  {
    title: "2. About Our Services",
    content: [
      "[Agency Name] provides education consultancy services to help students explore and apply to universities and educational institutions. Our guidance is informational and advisory in nature. We do not guarantee admission to any institution.",
    ],
  },
  {
    title: "3. Eligibility",
    content: [
      "Our website and services are intended for individuals aged 18 and over. By using this website or submitting an enquiry, you confirm you are at least 18 years old.",
    ],
  },
  {
    title: "4. Use of This Website",
    content: [
      "You agree to use this website only for lawful purposes. You must not:",
    ],
    bullets: [
      "Use the site in any way that violates applicable UK laws or regulations",
      "Submit false, misleading, or fraudulent information through our forms",
      "Attempt to gain unauthorised access to any part of the website or its systems",
      "Transmit any harmful, offensive, or disruptive content",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "All content on this website — including text, graphics, logos, and layout — is the property of [Agency Name] and is protected by UK copyright law. You may not reproduce, distribute, or republish any content without our prior written permission.",
    ],
  },
  {
    title: "6. Enquiry Forms and Data",
    content: [
      "When you submit an enquiry form, you consent to us collecting and processing your personal data as described in our Privacy Policy. Submitting a form does not create a contractual obligation on either party — it is an expression of interest only.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites, including universities and institutions. These links are provided for convenience only. We have no control over third-party content and accept no responsibility for it.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "To the fullest extent permitted by UK law, [Agency Name] shall not be liable for any direct, indirect, or consequential loss arising from:",
    ],
    bullets: [
      "Your use of, or inability to use, this website",
      "Reliance on any information provided on this website",
      "Any outcome related to a university application or admissions decision",
    ],
  },
  {
    title: "9. Disclaimer",
    content: [
      "The information on this website is provided in good faith for general guidance only. It does not constitute legal, financial, or professional advice. We make no representations or warranties about the accuracy or completeness of the content.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    content: [
      "We may update these Terms of Service at any time. The updated version will be posted on this page with a revised date. Continued use of the website after changes are posted constitutes your acceptance of the new terms.",
    ],
  },
  {
    title: "11. Governing Law",
    content: [
      "These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us at [Contact Email].",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero title="Terms of Service" breadcrumb="Terms of Service" background={images.uk} />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">Terms of Service</h2>
              <p className="text-muted mb-5">Last updated: [Date]</p>

              {sections.map((section) => (
                <section key={section.title} className="mb-5">
                  <h3 className="mb-3">{section.title}</h3>

                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets ? (
                    <ul className="mb-4 pl-4">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
