export type FieldErrorMap = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s\-()]{6,}$/;

export const isBlank = (value: FormDataEntryValue | null) =>
  typeof value !== "string" || value.trim().length === 0;

export const validateRequired = (value: FormDataEntryValue | null, label: string) =>
  isBlank(value) ? `${label} is required.` : "";

export const validateEmail = (value: FormDataEntryValue | null, label: string) => {
  if (isBlank(value)) {
    return `${label} is required.`;
  }

  return typeof value === "string" && emailPattern.test(value.trim()) ? "" : `Enter a valid ${label.toLowerCase()}.`;
};

export const validatePhone = (value: FormDataEntryValue | null, label: string) => {
  if (isBlank(value)) {
    return `${label} is required.`;
  }

  return typeof value === "string" && phonePattern.test(value.trim()) ? "" : `Enter a valid ${label.toLowerCase()}.`;
};
