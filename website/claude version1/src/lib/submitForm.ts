const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const ENDPOINT = 'https://api.web3forms.com/submit';

export type SubmitPayload = Record<string, unknown> & {
  botcheck?: string;
};

export async function submitForm(subject: string, data: SubmitPayload): Promise<void> {
  if (!ACCESS_KEY) {
    // In dev without a key, log and resolve so the UI flow works
    // eslint-disable-next-line no-console
    console.warn('[submitForm] VITE_WEB3FORMS_KEY not set — simulating success.', { subject, data });
    await new Promise((r) => setTimeout(r, 600));
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject,
      from_name: 'Qloqal Website',
      ...data,
    }),
  });

  if (!response.ok) {
    throw new Error(`Form submission failed: ${response.status}`);
  }

  const result = (await response.json()) as { success?: boolean; message?: string };
  if (!result.success) {
    throw new Error(result.message ?? 'Submission rejected');
  }
}
