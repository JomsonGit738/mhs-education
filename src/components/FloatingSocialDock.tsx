"use client";

import { useEffect, useState } from "react";
import { socialLinks } from "../data/content";

export const FloatingSocialDock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`floating-social-dock ${isVisible ? "is-visible" : ""}`}
      aria-label="Social media shortcuts"
    >
      {socialLinks.map((link) => (
        <a
          key={link.icon}
          href={link.href}
          className="floating-social-dock__item"
          aria-label={link.icon}
        >
          <span className={link.icon} aria-hidden="true" />
        </a>
      ))}
    </aside>
  );
};
