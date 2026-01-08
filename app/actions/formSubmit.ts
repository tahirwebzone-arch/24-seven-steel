"use server";

export async function handleHeroForm(formData: FormData) {
  const formType = formData.get("formType") || "General Submission";
  const name = formData.get("name");
  const contact = formData.get("contact");
  const service = formData.get("service") || "N/A";
  const message = formData.get("message") || "No message provided";

  // Format Date: DD-MM-YYYY
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  // Format Time: HH:MM:SS
  const formattedTime = now.toLocaleTimeString('en-GB', { hour12: false });

  console.log(`>>> [${formType}] New Submission:`, {
    name,
    contact,
    service,
    message,
    date: formattedDate,
    time: formattedTime,
  });

  return { success: true };
}