import { PageHero } from "../components/PageHero";
import { Services } from "../components/Services";
import { OfferSection } from "../components/OfferSection";
import { pageHero } from "../data/content";
import { images } from "../data/images";

// Dedicated services page so nav “Services” lands on the correct content
export const ServicesPage = () => (
  <>
    <PageHero title={pageHero.services.title} breadcrumb={pageHero.services.breadcrumb} background={images.bg1} />
    <Services />
    <OfferSection />
  </>
);
