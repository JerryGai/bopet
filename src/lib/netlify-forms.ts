export function encodeFormData(data: Record<string, string>): string {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

export async function submitNetlifyForm(
  formName: string,
  fields: Record<string, string>
): Promise<void> {
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodeFormData({ "form-name": formName, ...fields }),
  });

  if (!res.ok) {
    throw new Error(`Form submission failed with status ${res.status}`);
  }
}
