export const ContactForm = () => (
  <section className="contact-modern">
    <div className="container">
      <div className="contact-modern__header text-center">
        <span className="contact-modern__eyebrow">Send Us a Message</span>
        <h2>Start with a quick enquiry about your UK university plans</h2>
        <p>
          Share your goals, preferred intake, or questions about studying in the UK, and we will respond with
          practical guidance tailored to your situation.
        </p>
      </div>
      <div className="contact-modern__grid contact-modern__grid--single">
        <div className="contact-card contact-form-card">
          <div className="contact-card__intro">
            <span className="contact-card__eyebrow">Free Consultation</span>
            <h3>Tell us about your study plans</h3>
            <p>Complete the form and our team will get back to you with clear next steps and tailored advice.</p>
          </div>
          <form>
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
      </div>
    </div>
  </section>
);
