"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BlurFade } from "./BlurFade";
import TiltedCard from "./TiltedCard";

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
type HeroIconKey = "students" | "routes" | "support";

interface StatProps {
  value: string;
  label: string;
  icon: HeroIconKey;
}

interface ActionProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

interface HeroImage {
  src: StaticImageData | string;
  alt: string;
}

interface HeroSectionProps {
  title?: ReactNode;
  rotatingTitles?: string[];
  subtitle: string;
  actions: ActionProps[];
  images: HeroImage[];
  className?: string;
}

const AcademicCapIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-section__icon-svg">
    <path
      d="M12 4 3 8.5 12 13l7.5-3.75V15H21V8.5L12 4Zm-5 7.18V15c0 1.56 2.24 3 5 3s5-1.44 5-3v-3.82L12 14l-5-2.82Z"
      fill="currentColor"
    />
  </svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-section__icon-svg">
    <path
      d="M12 2.75A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75Zm3.88 5.37-2.16 6.04-6.04 2.16 2.16-6.04 6.04-2.16Zm-3.26 3.26-.94.34-.34.94.94-.34.34-.94Z"
      fill="currentColor"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-section__icon-svg">
    <path
      d="M12 2.75 5.75 5.5v5.3c0 4.07 2.4 7.85 6.25 9.63 3.85-1.78 6.25-5.56 6.25-9.63V5.5L12 2.75Zm2.78 7.55-3.3 4.13a.75.75 0 0 1-1.1.09L8.72 13a.75.75 0 0 1 1.06-1.06l1.06 1.06 2.77-3.47a.75.75 0 1 1 1.17.77Z"
      fill="currentColor"
    />
  </svg>
);

const iconMap: Record<HeroIconKey, ReactNode> = {
  students: <AcademicCapIcon />,
  routes: <CompassIcon />,
  support: <ShieldIcon />,
};

const buildContainerVariants = (shouldReduceMotion: boolean) => ({
  hidden: { opacity: shouldReduceMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          staggerChildren: 0.14,
          delayChildren: 0.08,
        },
  },
});

const buildItemVariants = (shouldReduceMotion: boolean) => ({
  hidden: {
    opacity: shouldReduceMotion ? 1 : 0,
    y: shouldReduceMotion ? 0 : 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: revealEase },
  },
});

const buildImageVariants = (shouldReduceMotion: boolean) => ({
  hidden: {
    opacity: shouldReduceMotion ? 1 : 0,
    scale: shouldReduceMotion ? 1 : 0.92,
    y: shouldReduceMotion ? 0 : 18,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: revealEase },
  },
});

const buildFloatAnimation = (shouldReduceMotion: boolean, delay = 0) =>
  shouldReduceMotion
    ? undefined
    : {
        y: [0, -10, 0],
        transition: {
          duration: 3.4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut" as const,
          delay,
        },
      };

const renderAction = (action: ActionProps, index: number) => {
  const actionClassName = [
    "hero-section__action",
    action.variant === "secondary" ? "hero-section__action--secondary" : "btn-apply-invert",
    action.className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (action.href) {
    return (
      <Link key={`${action.text}-${index}`} href={action.href} className={actionClassName}>
        {action.text}
      </Link>
    );
  }

  return (
    <button key={`${action.text}-${index}`} type="button" className={actionClassName} onClick={action.onClick}>
      {action.text}
    </button>
  );
};

export const HeroSection = ({
  title,
  rotatingTitles = [],
  subtitle,
  actions,
  images,
  className,
}: HeroSectionProps) => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const containerVariants = buildContainerVariants(shouldReduceMotion);
  const itemVariants = buildItemVariants(shouldReduceMotion);
  const imageVariants = buildImageVariants(shouldReduceMotion);

  useEffect(() => {
    if (rotatingTitles.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveTitleIndex((currentIndex) => (currentIndex + 1) % rotatingTitles.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [rotatingTitles]);

  const currentTitle = rotatingTitles.length ? rotatingTitles[activeTitleIndex] : title;

  return (
    <section className={["hero-section", className ?? ""].filter(Boolean).join(" ")}>
      <div className="container hero-section__shell">
        <motion.div
          className="hero-section__grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-section__copy">
            <motion.h1 className="hero-section__title" variants={itemVariants}>
              <BlurFade
                key={typeof currentTitle === "string" ? currentTitle : activeTitleIndex}
                as="span"
                className="hero-section__title-text"
                duration={0.55}
                blur={shouldReduceMotion ? "0px" : "6px"}
                yOffset={shouldReduceMotion ? 0 : 10}
              >
                {currentTitle}
              </BlurFade>
            </motion.h1>
            <motion.p className="hero-section__subtitle" variants={itemVariants}>
              {subtitle}
            </motion.p>
            <motion.div className="hero-section__actions" variants={itemVariants}>
              {actions.map(renderAction)}
            </motion.div>
          </div>

          <motion.div className="hero-section__media" variants={containerVariants}>
            {/* These accents add depth to the collage without changing layout metrics. */}
            <motion.span
              className="hero-section__shape hero-section__shape--amber"
              animate={buildFloatAnimation(shouldReduceMotion, 0)}
            />
            <motion.span
              className="hero-section__shape hero-section__shape--blue"
              animate={buildFloatAnimation(shouldReduceMotion, 0.35)}
            />
            <motion.span
              className="hero-section__shape hero-section__shape--ink"
              animate={buildFloatAnimation(shouldReduceMotion, 0.7)}
            />

            {images.slice(0, 3).map((image, index) => (
              <motion.figure
                key={image.alt}
                className={`hero-section__image hero-section__image--${index + 1}`}
                variants={imageVariants}
              >
                <TiltedCard
                  imageSrc={image.src}
                  altText={image.alt}
                  sizes="(max-width: 991px) 80vw, 28vw"
                  className="hero-section__tilted-card"
                />
              </motion.figure>
            ))}

            <motion.div className="hero-section__note" variants={itemVariants}>
              <span className="hero-section__note-label">Admissions support</span>
              <strong>Personalised route planning, document checks, and offer follow-up.</strong>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
