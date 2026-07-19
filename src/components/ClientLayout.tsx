'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import { Header } from './Header';
import { Footer } from './Footer';
import { ToastProvider } from './ToastProvider';
// import { HomeLoadingOverlay } from './HomeLoadingOverlay';

const FloatingSocialDock = dynamic(() => import('./FloatingSocialDock').then((mod) => mod.FloatingSocialDock), {
  ssr: false,
});
const CookieConsentBar = dynamic(() => import('./CookieConsentBar').then((mod) => mod.CookieConsentBar), {
  ssr: false,
});

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  useEffect(() => {
    const scrollToLocation = () => {
      const hash = window.location.hash.slice(1);

      if (hash) {
        let targetId = hash;

        try {
          targetId = decodeURIComponent(hash);
        } catch {
          // Use the original hash when it is not valid URI-encoded text.
        }

        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          AOS.refresh();
        });
        return;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
      AOS.refresh();
    };

    scrollToLocation();
    window.addEventListener('hashchange', scrollToLocation);

    return () => window.removeEventListener('hashchange', scrollToLocation);
  }, [pathname]);

  return (
    <ToastProvider>
      {/* <HomeLoadingOverlay /> */}
      <Header />
      <FloatingSocialDock />
      <main id="main-content">{children}</main>
      <Footer />
      <CookieConsentBar />
    </ToastProvider>
  );
};
