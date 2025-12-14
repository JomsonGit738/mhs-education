import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const Layout = () => (
  <>
    <ScrollToTop />
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);
