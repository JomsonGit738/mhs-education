import { contactCards } from '../data/content';

export const ContactInfo = () => (
  <section className="ftco-section contact-section">
    <div className="container">
      <div className="row d-flex contact-info">
        {contactCards.map((card) => (
          <div key={card.title} className="col-md-3 d-flex">
            <div className="bg-light align-self-stretch box p-4 text-center">
              <h3 className="mb-4">{card.title}</h3>
              {card.href ? (
                <p>
                  <a href={card.href}>{card.content}</a>
                </p>
              ) : (
                <p>{card.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
