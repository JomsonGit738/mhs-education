import { PageHero } from "../../src/components/PageHero";
import { images } from "../../src/data/images";

const sections = [
  {
    title: "1. Who We Are",
    content: [
      `[Agency Name] ("we", "us", "our") is a UK-based education consultancy providing guidance and support to students applying to universities and educational institutions.`,
      "Contact email: [Contact Email]",
      "ICO Registration Number: [ICO Registration Number]",
      "We are registered as a data controller with the Information Commissioner's Office (ICO).",
    ],
  },
  {
    title: "2. What Data We Collect",
    content: [
      "When you submit an enquiry through our website, we collect:",
    ],
    bullets: [
      "Full name",
      "Email address",
      "Phone number",
      "Course and/or university preferences",
    ],
    trailing: [
      "We only collect information you voluntarily provide through our enquiry forms.",
    ],
  },
  {
    title: "3. Why We Collect It",
    content: [
      "We collect this data to:",
    ],
    bullets: [
      "Respond to your enquiry and provide education consultancy services",
      "Match you with relevant universities or courses based on your preferences",
      "Contact you by email or phone regarding your enquiry or application",
    ],
    trailing: [
      "Our lawful basis for processing is consent. You provide this by ticking the agreement checkbox on our enquiry forms. You may withdraw consent at any time by emailing us at [Contact Email].",
    ],
  },
  {
    title: "4. How We Store Your Data",
    content: [
      "Your data is handled securely. We use the following third-party tool to manage correspondence:",
    ],
    bullets: [
      "[Email Tool Name, e.g. Gmail / Mailchimp] — to send and manage email communication",
    ],
    trailing: [
      "This tool is GDPR-compliant. We do not transfer your data outside the UK or EEA without appropriate safeguards.",
    ],
  },
  {
    title: "5. Who We Share It With",
    content: [
      "We may share relevant details with partner universities or institutions when it directly relates to your enquiry, and only with your awareness. We do not sell, rent, or share your personal data with any third party for marketing purposes.",
    ],
  },
  {
    title: "6. How Long We Keep It",
    content: [
      "We retain your data for up to 2 years from your last interaction with us. After this, your data is securely deleted. You may request earlier deletion at any time (see Your Rights below).",
    ],
  },
  {
    title: "7. Your Rights Under UK GDPR",
    content: [
      "You have the following rights regarding your personal data:",
    ],
    bullets: [
      "Right of access — request a copy of the data we hold about you",
      "Right to rectification — ask us to correct inaccurate data",
      "Right to erasure — ask us to delete your data",
      "Right to restrict processing — ask us to limit how we use your data",
      "Right to object — object to how we process your data",
      "Right to data portability — request your data in a portable format",
    ],
    trailing: [
      "To exercise any of these rights, email us at [Contact Email]. We will respond within 30 days.",
    ],
  },
  {
    title: "8. Age Restriction",
    content: [
      "Our services and website are intended for individuals aged 18 and over. By submitting an enquiry, you confirm that you are at least 18 years old. We do not knowingly collect data from anyone under 18. If we become aware of such data being submitted, we will delete it promptly.",
    ],
  },
  {
    title: "9. Cookies",
    content: [
      "We use cookies to improve your experience on our website. You can accept or decline non-essential cookies using the banner shown on your first visit.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our website after any changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "11. How to Complain",
    content: [
      "If you are unhappy with how we have handled your data, you can contact the Information Commissioner's Office (ICO):",
      "Website: https://ico.org.uk",
      "Phone: 0303 123 1113",
      "We would always appreciate the chance to resolve any concerns directly before you contact the ICO — please reach out to us first at [Contact Email].",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumb="Privacy Policy" background={images.uk} />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">Privacy Policy</h2>
              <p className="text-muted mb-5">Last updated: [Date]</p>

              {sections.map((section) => (
                <section key={section.title} className="mb-5">
                  <h3 className="mb-3">{section.title}</h3>

                  {section.content?.map((paragraph) => {
                    if (paragraph === "Website: https://ico.org.uk") {
                      return (
                        <p key={paragraph}>
                          Website:{" "}
                          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                            https://ico.org.uk
                          </a>
                        </p>
                      );
                    }

                    return <p key={paragraph}>{paragraph}</p>;
                  })}

                  {section.bullets ? (
                    <ul className="mb-4 pl-4">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.trailing?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
