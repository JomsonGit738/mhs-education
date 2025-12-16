import { quoteCourseOptions } from '../data/content';
import { images } from '../data/images';

export const QuoteSection = () => (
  <section
    className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
    style={{ backgroundImage: `url(${images.bg5})` }}
    data-stellar-background-ratio="0.5"
  >
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-6 py-5 px-md-5">
          <div className="py-md-5">
            <div className="heading-section heading-section-white ftco-animate mb-5">
              <h2 className="mb-4">Request A Quote</h2>
              <p>
                Share what support you need for your UK study plans—course shortlisting, UCAS guidance, visa prep, or accommodation advice—and
                our advisers will respond with tailored next steps.
              </p>
            </div>
            <form className="appointment-form ftco-animate">
              <div className="d-md-flex">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group ml-md-4">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <div className="form-field">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down" />
                      </div>
                      <select className="form-control">
                        {quoteCourseOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group ml-md-4">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <textarea cols={30} rows={2} className="form-control" placeholder="Message" />
                </div>
                <div className="form-group ml-md-4 align-self-end">
                  <input type="submit" value="Request A Quote" className="btn btn-primary py-3 px-4" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
