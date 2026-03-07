import Image from "next/image";
import { InfiniteSlider } from "./InfiniteSlider";
import { universityLogos } from "../data/universities";

export const PartnersSection = () => (
  <section className="universities-section">
    <div className="universities-shell">
      <div className="universities-heading text-center">
        <span className="universities-eyebrow">Our Universities</span>
        <h2>Explore the institutions our students target across the UK</h2>
        <p>
          We work with a growing network of respected partner universities, helping students identify the right
          study options and progress confidently through the UK admissions journey.
        </p>
      </div>

      <div className="universities-divider" aria-hidden="true">
        <span />
        <p>Trusted partner university network</p>
        <span />
      </div>

      <InfiniteSlider className="universities-slider" speed={92} speedOnHover={24} gap={12}>
        {universityLogos.map((university) => (
          <article key={university.name} className="university-card">
            <div className="university-card__logo">
              <Image
                src={university.logo}
                alt={`${university.name} logo`}
                className="university-card__image"
                style={{ transform: `scale(${university.scale})` }}
              />
            </div>
          </article>
        ))}
      </InfiniteSlider>
    </div>
  </section>
);
