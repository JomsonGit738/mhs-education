export const ContactForm = () => (
  <section className="contact-modern">
    <div className="container">
      <div className="row align-items-stretch">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="contact-card contact-form-card">
            <h3 className="mb-3">Book a Free Consultation</h3>
            <p className="text-muted mb-4">Tell us about your study goals and we will reply with tailored guidance.</p>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Programme / Intake" />
                </div>
              </div>
              <div className="form-group">
                <textarea rows={5} className="form-control" placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn btn-apply-invert">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-card contact-map-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Visit Us</h3>
              <span className="badge badge-light">Whitechapel, London</span>
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
    </div>
  </section>
);
