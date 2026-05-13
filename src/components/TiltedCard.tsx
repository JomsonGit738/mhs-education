"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import styles from "./TiltedCard.module.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface TiltedCardProps {
  imageSrc: StaticImageData | string;
  altText?: string;
  captionText?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  overlayContent?: ReactNode;
  displayOverlayContent?: boolean;
  sizes?: string;
  className?: string;
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  scaleOnHover = 1.06,
  rotateAmplitude = 10,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
  sizes = "300px",
  className = "",
}: TiltedCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || shouldReduceMotion) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (shouldReduceMotion) {
      return;
    }

    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`${styles.figure} ${className}`.trim()}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={styles.inner}
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        <Image src={imageSrc} alt={altText} fill sizes={sizes} className={styles.image} />

        {displayOverlayContent && overlayContent ? (
          <motion.div className={styles.overlay}>{overlayContent}</motion.div>
        ) : null}
      </motion.div>

      {showTooltip ? (
        <motion.figcaption
          className={styles.caption}
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      ) : null}
    </figure>
  );
}
