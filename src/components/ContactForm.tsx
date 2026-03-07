export const ContactForm = () => (
  <section className="contact-modern">
    <div className="container">
      <div className="contact-modern__header text-center">
        <span className="contact-modern__eyebrow">Speak With Our Team</span>
        <h2>Plan your next step with personalised admissions support</h2>
        <p>
          Share your goals, preferred intake, or questions about studying in the UK, and we will respond with
          practical guidance tailored to your situation.
        </p>
      </div>
      <div className="contact-modern__grid">
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

        <div className="contact-card contact-map-card">
          <div className="contact-card__intro">
            <span className="contact-card__eyebrow">Visit Our Office</span>
            <div className="contact-map-card__heading">
              <h3>Meet us in Whitechapel, London</h3>
            </div>
            <p>Use the map below to find our office location and plan your visit with ease.</p>
          </div>
          <div className="contact-map-card__meta">
            <span className="icon icon-map-marker" aria-hidden="true" />
            <span>Suite F5, New Road Business Centre, 109 New Road, Whitechapel, E1 1HJ</span>
          </div>
          <div className="map-wrapper">
            <iframe
              title="MHS Education Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=Suite+F5,+New+Road+Business+Centre,+109+New+Road,+Whitechapel,+E+1+1HJ.&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
