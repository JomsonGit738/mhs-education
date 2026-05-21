"use client";

import { FormEvent, useState } from "react";
import { submitToGoogleScript } from "../lib/formSubmission";
import { useToast } from "./ToastProvider";

type InquiryTab = "student" | "agent";

type FormField = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  helper?: string;
  wide?: boolean;
};

type InquiryPanel = {
  id: InquiryTab;
  label: string;
  tabDetail: string;
  eyebrow: string;
  title: string;
  description: string;
  responseTime: string;
  checklist: string[];
  fields: FormField[];
  textareaLabel: string;
  textareaPlaceholder: string;
  textareaId: string;
  textareaName: string;
  submitLabel: string;
  footerNote: string;
  context: string;
};

const inquiryPanels: InquiryPanel[] = [
  {
    id: "student",
    label: "Student Support",
    tabDetail: "Admissions guidance and intake planning",
    eyebrow: "Free Consultation",
    title: "Tell us where you want your study journey to go",
    description:
      "Share your preferred course, intake, and goals. We will come back with clear next steps rather than a generic sales reply.",
    responseTime: "Replies within 1 working day",
    checklist: ["Course shortlist advice", "Application readiness review", "Visa and intake guidance"],
    fields: [
      {
        id: "contact-name",
        name: "name",
        label: "Your name",
        placeholder: "Enter your full name",
        helper: "Use the name on your academic documents.",
      },
      {
        id: "contact-email",
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: "Enter your email",
        helper: "We will send your guidance and follow-up here.",
      },
      {
        id: "contact-phone",
        name: "phone",
        label: "Phone number",
        placeholder: "Enter your phone number",
        helper: "Include country code if you are outside the UK.",
      },
      {
        id: "contact-programme",
        name: "programme_or_intake",
        label: "Programme or intake",
        placeholder: "e.g. MSc Data Science, September intake",
        helper: "Add your preferred subject, level, or intake month.",
      },
    ],
    textareaLabel: "What do you need help with?",
    textareaPlaceholder: "Tell us about your goals, universities, budget, or any questions you want answered.",
    textareaId: "contact-message",
    textareaName: "message",
    submitLabel: "Request Guidance",
    footerNote: "Your details stay with MHS Education and are only used to respond to your enquiry.",
    context: "Contact page student support enquiry",
  },
  {
    id: "agent",
    label: "Become a Local Agent",
    tabDetail: "Partnership enquiries and regional representation",
    eyebrow: "Partnership Enquiry",
    title: "Show us how you would represent MHS Education in your market",
    description:
      "We are looking for partners with strong local knowledge, a credible network, and a serious approach to student success.",
    responseTime: "Initial review in 2 to 3 working days",
    checklist: ["Market fit review", "Partnership screening", "Regional growth discussion"],
    fields: [
      {
        id: "agent-name",
        name: "name",
        label: "Your name",
        placeholder: "Enter your full name",
        helper: "Add the main contact person for the partnership.",
      },
      {
        id: "agent-email",
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: "Enter your email",
        helper: "We will use this for the partnership review.",
      },
      {
        id: "agent-phone",
        name: "phone",
        label: "Phone number",
        placeholder: "Enter your phone number",
        helper: "A direct number helps us schedule follow-up quickly.",
      },
      {
        id: "agent-location",
        name: "city_country",
        label: "City and country",
        placeholder: "Enter your city and country",
        helper: "Tell us the primary market you cover.",
      },
      {
        id: "agent-organisation",
        name: "organisation_name",
        label: "Organisation or business name",
        placeholder: "Enter your organisation or business name",
        helper: "Use the registered or trading name if applicable.",
      },
      {
        id: "agent-experience",
        name: "student_recruitment_experience",
        label: "Student recruitment experience",
        placeholder: "Briefly describe your experience",
        helper: "Include years in market, regions, or student volumes.",
      },
    ],
    textareaLabel: "Why are you a strong fit?",
    textareaPlaceholder:
      "Tell us about your market, recruitment network, student profile, and how you would like to work with MHS Education.",
    textareaId: "agent-message",
    textareaName: "message",
    submitLabel: "Submit Partnership Enquiry",
    footerNote: "We review each request manually and only contact organisations that align with our partnership criteria.",
    context: "Contact page local agent partnership enquiry",
  },
];

export const ContactForm = () => {
  const [activeTab, setActiveTab] = useState<InquiryTab>("student");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const activePanel = inquiryPanels.find((panel) => panel.id === activeTab) ?? inquiryPanels[0];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("inquiryType", activePanel.id === "student" ? "student-support" : "local-agent");
    formData.set("context", activePanel.context);

    try {
      await submitToGoogleScript(formData);
      form.reset();
      showToast("Form sent successfully. Our team will get back to you shortly.", "success");
    } catch {
      showToast("We could not send your form. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-modern">
      <div className="container">
        <div className="contact-modern__header text-center">
          <span className="contact-modern__eyebrow">Send Us a Message</span>
          <h2>Choose the enquiry form that matches how you want to work with us</h2>
          <p>
            Students can request admissions support, and prospective partners can apply to join MHS Education as
            a local agent.
          </p>
        </div>
        <div className="contact-modern__grid contact-modern__grid--single">
          <div className="contact-card contact-form-card">
            <div className="contact-form-stage">
              <span className="contact-form-stage__label">Select enquiry type</span>
              <p>Choose the route that fits your relationship with MHS Education.</p>
            </div>
            <div className="contact-form-switch" role="tablist" aria-label="Contact form options">
              {inquiryPanels.map((panel) => {
                const isActive = activeTab === panel.id;

                return (
                  <button
                    key={panel.id}
                    type="button"
                    role="tab"
                    id={`contact-tab-${panel.id}`}
                    aria-selected={isActive}
                    aria-controls={`contact-panel-${panel.id}`}
                    className={`contact-form-tab ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveTab(panel.id)}
                  >
                    <span className="contact-form-tab__label">{panel.label}</span>
                    <span className="contact-form-tab__detail">{panel.tabDetail}</span>
                  </button>
                );
              })}
            </div>

            <div role="tabpanel" id={`contact-panel-${activePanel.id}`} aria-labelledby={`contact-tab-${activePanel.id}`}>
              <div className="contact-form-shell">
                <div className="contact-card__intro">
                  <div className="contact-form-rail">
                    <span className="contact-card__eyebrow">{activePanel.eyebrow}</span>
                    <h3>{activePanel.title}</h3>
                    <p>{activePanel.description}</p>

                    <div className="contact-form-rail__meta">
                      <span className="contact-form-rail__meta-label">Response window</span>
                      <strong>{activePanel.responseTime}</strong>
                    </div>

                    <ul className="contact-form-highlights" aria-label={`${activePanel.label} support areas`}>
                      {activePanel.checklist.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <form className="contact-form-panel" onSubmit={handleSubmit}>
                  <input type="hidden" name="formTitle" value="MHS Education website: new form submission" />
                  <input type="hidden" name="inquiryType" value={activePanel.id === "student" ? "student-support" : "local-agent"} />
                  <input type="hidden" name="context" value={activePanel.context} />
                  <div className="contact-form-panel__header">
                    <span className="contact-form-panel__eyebrow">Enquiry details</span>
                    <p>Complete the fields below and send us the context we need to respond properly.</p>
                  </div>
                  <div className="contact-form-grid">
                    {activePanel.fields.map((field) => (
                      <div key={field.id} className={`form-group contact-field ${field.wide ? "contact-field--wide" : ""}`}>
                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                          id={field.id}
                          name={field.name}
                          type={field.type ?? "text"}
                          className="form-control"
                          placeholder={field.placeholder}
                          disabled={isSubmitting}
                        />
                        {field.helper ? <p className="contact-field__hint">{field.helper}</p> : null}
                      </div>
                    ))}
                  </div>
                  <div className="form-group contact-field contact-field--wide">
                    <label htmlFor={activePanel.textareaId}>{activePanel.textareaLabel}</label>
                    <textarea
                      id={activePanel.textareaId}
                      name={activePanel.textareaName}
                      rows={5}
                      className="form-control"
                      placeholder={activePanel.textareaPlaceholder}
                      disabled={isSubmitting}
                    />
                    <p className="contact-field__hint">{activePanel.footerNote}</p>
                  </div>

                  <div className="contact-form-actions">
                    <button type="submit" className="btn btn-apply-invert contact-form-card__cta" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="form-submit-state">
                          <span className="form-submit-spinner" aria-hidden="true" />
                          Sending...
                        </span>
                      ) : (
                        activePanel.submitLabel
                      )}
                    </button>
                    <p className="contact-form-actions__note">A member of our team will review your message personally.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
