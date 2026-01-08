import { Resend } from 'resend';

// Make sure you replace 're_your_api_key_here' with the key from your Resend dashboard
const resend = new Resend('re_RLQhXmBM_7FkepTHHjcAhd45BafK88uKt'); 

export async function handleHeroForm(formData: FormData) {
  const name = formData.get('name');
  const service = formData.get('service');
  const contact = formData.get('contact');

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'info@247steel-ksa.com',
      subject: `New Lead: ${name} - 24Seven Steel`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Contact Info:</strong> ${contact}</p>
        <hr />
        <p>Sent from 24Seven Steel Website</p>
      `
    });
    console.log("Email sent successfully to info@247steel-ksa.com"); 
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}