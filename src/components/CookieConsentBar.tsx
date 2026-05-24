"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookieConsent, setCookieConsent } from "../lib/cookieConsent";

export const CookieConsentBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedConsent = getCookieConsent();

    if (!savedConsent) {
      setIsVisible(true);
    }

    setIsMounted(true);
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    setCookieConsent(value);
    setIsVisible(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`cookie-consent-bar${isVisible ? " cookie-consent-bar--visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <div className="container">
        <div className="cookie-consent-bar__content">
          <p className="cookie-consent-bar__text mb-0">
            We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.{" "}
            <Link href="/privacy-policy" className="cookie-consent-bar__link">
              Privacy Policy
            </Link>
          </p>
          <div className="cookie-consent-bar__actions">
            <button type="button" className="btn btn-primary" onClick={() => handleConsent("accepted")}>
              <span>Accept All</span>
            </button>
            <button
              type="button"
              className="hero-section__action hero-section__action--secondary"
              onClick={() => handleConsent("declined")}
            >
              <span>Decline</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
