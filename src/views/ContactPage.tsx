import { ContactForm } from '../components/ContactForm';
import { PageHero } from '../components/PageHero';
import { contactCards, pageHero } from '../data/content';
import { images } from '../data/images';

export const ContactPage = () => (
  <>
    <PageHero title={pageHero.contact.title} breadcrumb={pageHero.contact.breadcrumb} background={images.uk} />
    <section className="contact-cards">
      <div className="container">
        <div className="row">
          {contactCards.map((card) => (
            <div key={card.title} className="col-md-6 col-lg-3 mb-3">
              <div className="contact-card-simple">
                <h4 className="mb-2">{card.title}</h4>
                {card.href ? (
                  <a href={card.href}>{card.content}</a>
                ) : (
                  <p className="mb-0">{card.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactForm />
  </>
);
