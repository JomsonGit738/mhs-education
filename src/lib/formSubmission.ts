export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby3TmYP-feZ2TK8wnEa5_cILFkIUpMEe9RC-V6nrky9dyklGJ_qc3tElE0FSQcElyiO_g/exec";

export async function submitToGoogleScript(formData: FormData) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}
