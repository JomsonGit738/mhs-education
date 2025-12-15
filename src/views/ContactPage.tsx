import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { PageHero } from '../components/PageHero';
import { pageHero } from '../data/content';
import { images } from '../data/images';

export const ContactPage = () => (
  <>
    <PageHero title={pageHero.contact.title} breadcrumb={pageHero.contact.breadcrumb} background={images.bg1} />
    <ContactInfo />
    <ContactForm />
  </>
);
