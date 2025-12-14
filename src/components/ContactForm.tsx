export const ContactForm = () => (
  <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
    <div className="container">
      <div className="row d-flex align-items-stretch no-gutters">
        <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea cols={30} rows={7} className="form-control" placeholder="Message" />
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
            </div>
          </form>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div id="map" className="w-100">
            <iframe
              title="MHS Education Map"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509381!2d-122.0842494!3d37.4220656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a5d5df2ceb%3A0xa0f69b62c9e6c1e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600000000000"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
