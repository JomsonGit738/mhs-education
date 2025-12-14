import { gallery } from '../data/content';

export const Gallery = () => (
  <section className="ftco-gallery">
    <div className="container-wrap">
      <div className="row no-gutters">
        {gallery.map((item) => (
          <div key={item.image} className="col-md-3 ftco-animate" data-aos="fade-up">
            <a className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span className="icon-instagram" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);
