import { Resend } from 'resend';

// Replace 're_123456789' with your actual API key from resend.com
const resend = new Resend('re_your_api_key_here');

export async function handleHeroForm(formData: FormData) {
  const name = formData.get('name');
  const service = formData.get('service');
  const contact = formData.get('contact');

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Later you can change this to your domain
      to: 'info@247steel-ksa.com',
      subject: `New Lead: ${name} - 24Seven Steel`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Contact Info:</strong> ${contact}</p>
        <hr />
        <p>Sent from 24Seven Steel Website</p>
      `
    });
    
    // This keeps your Vercel logs working too
    console.log("Email sent successfully to info@247steel-ksa.com"); 
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}