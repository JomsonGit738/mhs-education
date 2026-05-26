import Link from 'next/link';

export const NotFoundPage = () => (
  <section className="ftco-section">
    <div className="container text-center">
      <h1 className="mb-3">Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn btn-primary mt-3" href="/">
        <span>Go Home</span>
      </Link>
    </div>
  </section>
);
