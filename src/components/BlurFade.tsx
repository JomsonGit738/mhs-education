"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import type { UseInViewOptions, Variants } from "framer-motion";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
  as?: "div" | "span";
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  as = "div",
}: BlurFadeProps) {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence mode="wait">
      {as === "span" ? <BlurFadeSpan refMargin={inViewMargin} inView={inView} delay={delay} duration={duration} className={className} variants={combinedVariants}>{children}</BlurFadeSpan> : <BlurFadeDiv refMargin={inViewMargin} inView={inView} delay={delay} duration={duration} className={className} variants={combinedVariants}>{children}</BlurFadeDiv>}
    </AnimatePresence>
  );
}

function BlurFadeDiv({
  children,
  className,
  variants,
  delay,
  duration,
  inView,
  refMargin,
}: {
  children: ReactNode;
  className?: string;
  variants: Variants;
  delay: number;
  duration: number;
  inView: boolean;
  refMargin: MarginType;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inViewResult = useInView(ref, { once: true, margin: refMargin });
  const isVisible = !inView || inViewResult;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
      transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BlurFadeSpan({
  children,
  className,
  variants,
  delay,
  duration,
  inView,
  refMargin,
}: {
  children: ReactNode;
  className?: string;
  variants: Variants;
  delay: number;
  duration: number;
  inView: boolean;
  refMargin: MarginType;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inViewResult = useInView(ref, { once: true, margin: refMargin });
  const isVisible = !inView || inViewResult;

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
      transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
