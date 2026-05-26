"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { brand, quoteCourseOptions } from "../data/content";
import { FieldErrorMap, validatePhone, validateRequired } from "../lib/formValidation";
import { submitToGoogleScript } from "../lib/formSubmission";
import { useToast } from "./ToastProvider";

const supportNeedPlaceholder = "";
const [supportNeedPlaceholderLabel, ...supportNeedOptions] = quoteCourseOptions;

export const QuoteSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrorMap>({});
  const [consentChecked, setConsentChecked] = useState(false);
  const { showToast } = useToast();

  const validateForm = (formData: FormData) => {
    const nextErrors: FieldErrorMap = {};

    const firstNameError = validateRequired(formData.get("first_name"), "First name");
    if (firstNameError) {
      nextErrors.first_name = firstNameError;
    }

    const lastNameError = validateRequired(formData.get("last_name"), "Last name");
    if (lastNameError) {
      nextErrors.last_name = lastNameError;
    }

    const supportNeedError = validateRequired(formData.get("support_need"), "Support need");
    if (supportNeedError) {
      nextErrors.support_need = supportNeedError;
    }

    const phoneError = validatePhone(formData.get("phone"), "Phone");
    if (phoneError) {
      nextErrors.phone = phoneError;
    }

    const messageError = validateRequired(formData.get("message"), "Message");
    if (messageError) {
      nextErrors.message = messageError;
    }

    if (!consentChecked) {
      nextErrors.consent = "Please confirm you have read our Privacy Policy to continue.";
    }

    return nextErrors;
  };

  const clearFieldError = (fieldName: string) => {
    setErrors((current) => {
      if (!current[fieldName]) {
        return current;
      }

      const next = { ...current };
      delete next[fieldName];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("context", "Home page personalised guidance form");

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      showToast("Please complete the required fields before submitting.", "error");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitToGoogleScript(formData);
      form.reset();
      setConsentChecked(false);
      showToast("Form sent successfully. We will reply with next steps soon.", "success");
    } catch {
      showToast("We could not send your form. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="ftco-section ftco-consult ftco-no-pt ftco-no-pb consult-modern-section"
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" aria-hidden="true" />
      <div className="container consult-modern-section__container">
        <div className="consult-modern-shell">
          <div className="consult-modern-copy">
            <span className="consult-modern-eyebrow">Admissions Dispatch</span>
            <h2>Get Personalised Guidance</h2>
            <p>
              Share what support you need for your UK study plans, course shortlisting, UCAS guidance, or
              application planning, and our advisers will respond with tailored next steps.
            </p>
            <div className="consult-modern-points" aria-label="Guidance benefits">
              <span>Course matching</span>
              <span>Document checks</span>
              <span>Scholarship advice</span>
            </div>
          </div>

          <div className="consult-modern-form-card">
            <div className="consult-modern-form-card__header">
              <span>Start here</span>
              <p>Tell us the basics and we will map the next move.</p>
            </div>
            <form className="appointment-form consult-modern-form ftco-animate" onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="formTitle" value="MHS Education website: new form submission" />
              <input type="hidden" name="context" value="Home page personalised guidance form" />
              <div className="consult-modern-form__grid">
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-first-name">
                    First Name
                  </label>
                  <input
                    id="quote-first-name"
                    name="first_name"
                    type="text"
                    className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
                    placeholder="First Name"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.first_name)}
                    aria-describedby={errors.first_name ? "quote-first-name-error" : undefined}
                    onChange={() => clearFieldError("first_name")}
                  />
                  {errors.first_name ? (
                    <p id="quote-first-name-error" className="form-error-text" role="alert">
                      {errors.first_name}
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-last-name">
                    Last Name
                  </label>
                  <input
                    id="quote-last-name"
                    name="last_name"
                    type="text"
                    className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
                    placeholder="Last Name"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.last_name)}
                    aria-describedby={errors.last_name ? "quote-last-name-error" : undefined}
                    onChange={() => clearFieldError("last_name")}
                  />
                  {errors.last_name ? (
                    <p id="quote-last-name-error" className="form-error-text" role="alert">
                      {errors.last_name}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="consult-modern-form__grid">
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-support-need">
                    Support Need
                  </label>
                  <div className="form-field">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down" />
                      </div>
                      <select
                        id="quote-support-need"
                        name="support_need"
                        className={`form-control ${errors.support_need ? "is-invalid" : ""}`}
                        disabled={isSubmitting}
                        defaultValue={supportNeedPlaceholder}
                        aria-invalid={Boolean(errors.support_need)}
                        aria-describedby={errors.support_need ? "quote-support-need-error" : undefined}
                        onChange={() => clearFieldError("support_need")}
                      >
                        <option value={supportNeedPlaceholder} disabled>
                          {supportNeedPlaceholderLabel}
                        </option>
                        {supportNeedOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {errors.support_need ? (
                    <p id="quote-support-need-error" className="form-error-text" role="alert">
                      {errors.support_need}
                    </p>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-phone">
                    Phone
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="text"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    placeholder="Phone"
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                    onChange={() => clearFieldError("phone")}
                  />
                  {errors.phone ? (
                    <p id="quote-phone-error" className="form-error-text" role="alert">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="form-group">
                <label className="consult-modern-form__label" htmlFor="quote-message">
                  Message
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  cols={30}
                  rows={4}
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  placeholder="Message"
                  disabled={isSubmitting}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "quote-message-error" : undefined}
                  onChange={() => clearFieldError("message")}
                />
                {errors.message ? (
                  <p id="quote-message-error" className="form-error-text" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="quote-consent">
                  <input
                    id="quote-consent"
                    name="consent"
                    type="checkbox"
                    checked={consentChecked}
                    disabled={isSubmitting}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "quote-consent-error" : undefined}
                    onChange={(event) => {
                      setConsentChecked(event.target.checked);
                      clearFieldError("consent");
                    }}
                  />{" "}
                  I have read and agree to the <Link href="/privacy-policy">Privacy Policy</Link> and consent to being
                  contacted by {brand.name} regarding my enquiry.
                </label>
                {errors.consent ? (
                  <p id="quote-consent-error" className="form-error-text" role="alert">
                    {errors.consent}
                  </p>
                ) : null}
              </div>
              <div className="consult-modern-form__footer">
                <p>Typical response: within one working day.</p>
                <button type="submit" className="btn btn-primary consult-modern-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="form-submit-state">
                      <span className="form-submit-spinner" aria-hidden="true" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span>Request A Quote</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
