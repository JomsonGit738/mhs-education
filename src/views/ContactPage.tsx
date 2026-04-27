import { ContactForm } from '../components/ContactForm';
import { PageHero } from '../components/PageHero';
import { contactCards, pageHero } from '../data/content';
import { images } from '../data/images';

const contactCardMeta: Record<string, { icon: string; eyebrow: string }> = {
  Address: { icon: 'icon-map-marker', eyebrow: 'Visit Us' },
  'Contact Number': { icon: 'icon-phone2', eyebrow: 'Call Us' },
  'Email Address': { icon: 'icon-envelope', eyebrow: 'Email Us' },
  Website: { icon: 'icon-globe', eyebrow: 'Explore Online' },
};

export const ContactPage = () => (
  <>
    <PageHero title={pageHero.contact.title} breadcrumb={pageHero.contact.breadcrumb} background={images.uk} />
    <ContactForm />
    <section className="contact-cards">
      <div className="container">
        <div className="contact-cards__header text-center">
          <span className="contact-cards__eyebrow">Other Contact Options</span>
          <h2>Reach the MHS Education team through the channel that suits you best</h2>
          <p>
            If you would rather call, email, visit, or explore our wider website, you can use the options
            below and our team will point you in the right direction.
          </p>
        </div>
        <div className="contact-cards__grid">
          {contactCards.map((card) => (
            <article key={card.title} className="contact-card-simple">
              <div className="contact-card-simple__top">
                <div className="contact-card-simple__icon" aria-hidden="true">
                  <span className={contactCardMeta[card.title]?.icon ?? 'icon-paper-plane'} />
                </div>
                <div className="contact-card-simple__heading">
                  <span className="contact-card-simple__eyebrow">
                    {contactCardMeta[card.title]?.eyebrow ?? 'Contact'}
                  </span>
                </div>
              </div>
              <div className="contact-card-simple__body">
                <h4>{card.title}</h4>
                {card.href ? (
                  <a href={card.href}>{card.content}</a>
                ) : (
                  <p>{card.content}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);
