import type { ReactNode } from "react";
import type { Metadata } from "next";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/open-iconic-bootstrap.min.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/owl.carousel.min.css";
import "../src/assets/css/owl.theme.default.min.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/ionicons.min.css";
import "../src/assets/css/flaticon.css";
import "../src/assets/css/icomoon.css";
import "../src/assets/css/style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./globals.css";
import { ClientLayout } from "../src/components/ClientLayout";

export const metadata: Metadata = {
  title: "MHS Education",
  description: "Education landing experience rebuilt with Next.js",
  icons: { icon: "/mhseducation.jpeg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
