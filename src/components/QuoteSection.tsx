 "use client";

import { FormEvent, useState } from "react";
import { quoteCourseOptions } from "../data/content";
import { submitToGoogleScript } from "../lib/formSubmission";
import { useToast } from "./ToastProvider";

export const QuoteSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("context", "Home page personalised guidance form");

    try {
      await submitToGoogleScript(formData);
      form.reset();
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
              Share what support you need for your UK study plans, course shortlisting, UCAS guidance, or application planning, and our advisers will respond
              with tailored next steps.
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
            <form className="appointment-form consult-modern-form ftco-animate" onSubmit={handleSubmit}>
              <input type="hidden" name="formTitle" value="MHS Education website: new form submission" />
              <input type="hidden" name="context" value="Home page personalised guidance form" />
              <div className="consult-modern-form__grid">
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-first-name">
                    First Name
                  </label>
                  <input id="quote-first-name" name="first_name" type="text" className="form-control" placeholder="First Name" disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-last-name">
                    Last Name
                  </label>
                  <input id="quote-last-name" name="last_name" type="text" className="form-control" placeholder="Last Name" disabled={isSubmitting} />
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
                      <select id="quote-support-need" name="support_need" className="form-control" disabled={isSubmitting} defaultValue={quoteCourseOptions[0]}>
                        {quoteCourseOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="consult-modern-form__label" htmlFor="quote-phone">
                    Phone
                  </label>
                  <input id="quote-phone" name="phone" type="text" className="form-control" placeholder="Phone" disabled={isSubmitting} />
                </div>
              </div>
              <div className="form-group">
                <label className="consult-modern-form__label" htmlFor="quote-message">
                  Message
                </label>
                <textarea id="quote-message" name="message" cols={30} rows={4} className="form-control" placeholder="Message" disabled={isSubmitting} />
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
