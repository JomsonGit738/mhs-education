import { Link } from 'react-router-dom';

type PageHeroProps = {
  title: string;
  breadcrumb: string;
  background?: string;
};

export const PageHero = ({ title, breadcrumb, background }: PageHeroProps) => (
  <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${background ?? ''})` }}>
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <h1 className="mb-2 bread">{title}</h1>
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link to="/">
                Home <i className="ion-ios-arrow-forward" />
              </Link>
            </span>{' '}
            <span>
              {breadcrumb} <i className="ion-ios-arrow-forward" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
);
