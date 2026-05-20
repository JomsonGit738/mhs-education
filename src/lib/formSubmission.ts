export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzjgEnlHRSrfVXqB0lGzlodo08RXJR-PvXDn6fTqfJKWSlwySuzWK1QrEf1DkiVoPDwkQ/exec";

export async function submitToGoogleScript(formData: FormData) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}
