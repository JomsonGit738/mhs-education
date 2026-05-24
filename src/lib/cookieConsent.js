const COOKIE_CONSENT_KEY = "cookie_consent";

export const getCookieConsent = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
};

export const setCookieConsent = (value) => {
  if (typeof window === "undefined") {
    return;
  }

  if (value === "accepted" || value === "declined") {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  }
};

export const hasConsent = () => getCookieConsent() === "accepted";

export { COOKIE_CONSENT_KEY };
