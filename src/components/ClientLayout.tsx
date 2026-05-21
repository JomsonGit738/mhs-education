'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import { FloatingSocialDock } from './FloatingSocialDock';
import { Header } from './Header';
import { Footer } from './Footer';
import { ToastProvider } from './ToastProvider';
// import { HomeLoadingOverlay } from './HomeLoadingOverlay';

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    AOS.refresh();
  }, [pathname]);

  return (
    <ToastProvider>
      {/* <HomeLoadingOverlay /> */}
      <Header />
      <FloatingSocialDock />
      <main>{children}</main>
      <Footer />
    </ToastProvider>
  );
};
