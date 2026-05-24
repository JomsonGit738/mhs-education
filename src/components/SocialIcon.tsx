import type { SocialLink } from "../data/content";

const TIKTOK_PATH =
  "M19.589 6.686a4.793 4.793 0 0 1-3.77-1.877V15.08a6.803 6.803 0 1 1-5.882-6.73v3.356a3.474 3.474 0 1 0 2.527 3.334l.034-14.04h3.217a4.8 4.8 0 0 0 3.874 4.83Z";

export const SocialIcon = ({
  link,
  className,
}: {
  link: SocialLink;
  className?: string;
}) => {
  if (link.label === "TikTok") {
    return (
      <span className={className} aria-hidden="true">
        <svg viewBox="0 0 24 24" className="social-icon-svg" focusable="false">
          <path d={TIKTOK_PATH} fill="currentColor" />
        </svg>
      </span>
    );
  }

  return <span className={`${link.icon}${className ? ` ${className}` : ""}`} aria-hidden="true" />;
};
