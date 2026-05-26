import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
import { siteConfig } from "../src/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mhseducation.co.uk"),
  title: {
    default: "MHS Education",
    template: "%s | MHS Education",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: siteConfig.authors,
  keywords: [
    "UK admissions guidance",
    "education consultancy",
    "student support",
    "university applications",
    "MHS Education",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    locale: "en_GB",
    images: [
      {
        url: siteConfig.logoPath,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.logoPath],
  },
  verification: {
    // Replace with actual code from Google Search Console
    google: "GOOGLE_VERIFICATION_CODE",
    other: {
      // Replace with actual code from Bing Webmaster Tools
      "msvalidate.01": "BING_VERIFICATION_CODE",
    },
  },
  icons: { icon: "/mhseducation.jpeg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
