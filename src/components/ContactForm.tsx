"use client";

import { useState } from "react";

type InquiryTab = "student" | "agent";

const inquiryTabs: Array<{ id: InquiryTab; label: string }> = [
  { id: "student", label: "Student Support" },
  { id: "agent", label: "Become a Local Agent" },
];

export const ContactForm = () => {
  const [activeTab, setActiveTab] = useState<InquiryTab>("student");

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
            <div className="contact-form-switch" role="tablist" aria-label="Contact form options">
              {inquiryTabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`contact-tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`contact-panel-${tab.id}`}
                    className={`contact-form-tab ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {activeTab === "student" ? (
              <div role="tabpanel" id="contact-panel-student" aria-labelledby="contact-tab-student">
                <div className="contact-card__intro">
                  <span className="contact-card__eyebrow">Free Consultation</span>
                  <h3>Tell us about your study plans</h3>
                  <p>Complete the form and our team will get back to you with clear next steps and tailored advice.</p>
                </div>
                <form>
                  <input type="hidden" name="inquiryType" value="student-support" />
                  <div className="contact-form-grid">
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input id="contact-name" type="text" className="form-control" placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input id="contact-phone" type="text" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-programme">Programme / Intake</label>
                      <input id="contact-programme" type="text" className="form-control" placeholder="e.g. MSc / September Intake" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">How can we help?</label>
                    <textarea id="contact-message" rows={5} className="form-control" placeholder="Tell us about your goals or questions" />
                  </div>
                  <button type="submit" className="btn btn-apply-invert contact-form-card__cta">
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div role="tabpanel" id="contact-panel-agent" aria-labelledby="contact-tab-agent">
                <div className="contact-card__intro">
                  <span className="contact-card__eyebrow">Partnership Enquiry</span>
                  <h3>Apply to become a local agent</h3>
                  <p>Share a few details about your background and location, and our team will review your enquiry.</p>
                </div>
                <form>
                  <input type="hidden" name="inquiryType" value="local-agent" />
                  <div className="contact-form-grid">
                    <div className="form-group">
                      <label htmlFor="agent-name">Your Name</label>
                      <input id="agent-name" type="text" className="form-control" placeholder="Enter your full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="agent-email">Email Address</label>
                      <input id="agent-email" type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="agent-phone">Phone Number</label>
                      <input id="agent-phone" type="text" className="form-control" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="agent-location">City / Country</label>
                      <input id="agent-location" type="text" className="form-control" placeholder="Enter your city and country" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="agent-organisation">Organisation / Business Name</label>
                      <input id="agent-organisation" type="text" className="form-control" placeholder="Enter your organisation or business name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="agent-experience">Experience in Student Recruitment</label>
                      <input id="agent-experience" type="text" className="form-control" placeholder="Briefly describe your experience" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="agent-message">Why do you want to join as a local agent?</label>
                    <textarea
                      id="agent-message"
                      rows={5}
                      className="form-control"
                      placeholder="Tell us about your market, network, or how you would like to work with MHS Education"
                    />
                  </div>
                  <button type="submit" className="btn btn-apply-invert contact-form-card__cta">
                    Submit Agent Enquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
