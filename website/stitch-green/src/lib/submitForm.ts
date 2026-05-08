const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export type SubmitArgs = {
  subject: string;
  data: Record<string, unknown>;
};

export async function submitForm({ subject, data }: SubmitArgs) {
  if (!ACCESS_KEY) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(
        "[submitForm] VITE_WEB3FORMS_KEY is not set — pretending the submission succeeded in dev.",
        { subject, data },
      );
      return { success: true, dev: true };
    }
    throw new Error("Form is not configured. Please try again later.");
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: ACCESS_KEY, subject, ...data }),
  });

  if (!res.ok) {
    throw new Error(`Submission failed (${res.status})`);
  }

  return res.json();
}
