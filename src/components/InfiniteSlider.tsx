"use client";

import { Children, type CSSProperties, type ReactNode, useEffect, useRef } from "react";

type InfiniteSliderProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
};

export const InfiniteSlider = ({
  children,
  className,
  gap = 20,
  reverse = false,
  speed = 84,
  speedOnHover = 28,
}: InfiniteSliderProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const primaryGroupRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    currentSpeed: speed,
    lastFrame: 0,
    offset: 0,
    rafId: 0,
    targetSpeed: speed,
    travelDistance: 0,
  });

  useEffect(() => {
    const state = stateRef.current;
    state.currentSpeed = speed;
    state.targetSpeed = speed;
  }, [speed]);

  useEffect(() => {
    const track = trackRef.current;
    const primaryGroup = primaryGroupRef.current;

    if (!track || !primaryGroup) {
      return undefined;
    }

    const state = stateRef.current;

    const applyTransform = () => {
      track.style.transform = `translate3d(${state.offset}px, 0, 0)`;
    };

    const measure = () => {
      state.travelDistance = primaryGroup.offsetWidth + gap;

      if (state.travelDistance <= 0) {
        return;
      }

      if (reverse && state.offset === 0) {
        state.offset = -state.travelDistance;
      }

      if (!reverse && state.offset <= -state.travelDistance) {
        state.offset += state.travelDistance;
      }

      if (reverse && state.offset >= 0) {
        state.offset -= state.travelDistance;
      }

      applyTransform();
    };

    const animate = (time: number) => {
      if (state.lastFrame === 0) {
        state.lastFrame = time;
      }

      const delta = (time - state.lastFrame) / 1000;
      state.lastFrame = time;

      const easing = 1 - Math.exp(-8 * delta);
      state.currentSpeed += (state.targetSpeed - state.currentSpeed) * easing;

      if (state.travelDistance > 0) {
        const direction = reverse ? 1 : -1;
        state.offset += state.currentSpeed * delta * direction;

        if (!reverse && state.offset <= -state.travelDistance) {
          state.offset += state.travelDistance;
        }

        if (reverse && state.offset >= 0) {
          state.offset -= state.travelDistance;
        }

        applyTransform();
      }

      state.rafId = window.requestAnimationFrame(animate);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(primaryGroup);

    state.rafId = window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(state.rafId);
      state.lastFrame = 0;
    };
  }, [children, gap, reverse]);

  const items = Children.toArray(children);
  const style = {
    "--infinite-slider-gap": `${gap}px`,
  } as CSSProperties;

  return (
    <div
      ref={viewportRef}
      className={["infinite-slider", className].filter(Boolean).join(" ")}
      style={style}
      onMouseEnter={() => {
        stateRef.current.targetSpeed = speedOnHover;
      }}
      onMouseLeave={() => {
        stateRef.current.targetSpeed = speed;
      }}
    >
      <div ref={trackRef} className="infinite-slider__track">
        <div ref={primaryGroupRef} className="infinite-slider__group">
          {items}
        </div>
        <div className="infinite-slider__group" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`clone-${index}`} className="infinite-slider__clone">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
