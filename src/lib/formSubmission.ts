const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEYS = {
  homeGuidance: "b737ceb4-83fd-4ba6-b24a-ec8b363cbf1a",
  enquiries: "6e6a98f5-83de-43e6-94aa-f29f9cdaf335",
} as const;

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

export async function submitToWeb3Forms(formData: FormData, accessKey: string) {
  formData.set("access_key", accessKey);

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    body: formData,
  });

  const data = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Web3Forms rejected the submission.");
  }

  return data;
}
