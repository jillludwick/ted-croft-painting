import nodemailer from "nodemailer";

export function createTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export async function sendCustomerConfirmation(data: {
  name: string;
  email: string;
}) {
  const transporter = createTransport();

  await transporter.sendMail({
    from: `"Ted Croft Painting LLC" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: "We received your estimate request!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Ted Croft Painting LLC</h1>
          <p style="color: #cc0000; margin: 4px 0 0; font-size: 14px;">Omaha, Nebraska</p>
        </div>
        <div style="padding: 32px; border: 1px solid #e0e0e0;">
          <p style="font-size: 18px; font-weight: bold; color: #1a1a1a;">Hi ${data.name},</p>
          <p style="color: #444; line-height: 1.6;">
            Thanks for reaching out! We've received your estimate request and will get back to you within <strong>24–48 hours</strong> to discuss your project.
          </p>
          <div style="background: #f9f9f9; border-left: 4px solid #cc0000; padding: 16px; margin: 24px 0; border-radius: 0 4px 4px 0;">
            <p style="margin: 0; color: #444;">
              Need to reach us sooner? Give us a call:
            </p>
            <a href="tel:4028123445" style="font-size: 20px; font-weight: bold; color: #cc0000; text-decoration: none;">(402) 812-3445</a>
          </div>
          <p style="color: #444; line-height: 1.6;">
            We look forward to hearing more about your project and helping bring your vision to life.
          </p>
          <p style="color: #444;">
            — Ted Croft<br/>
            <span style="color: #888; font-size: 13px;">Ted Croft Painting LLC · Licensed & Insured · 25+ Years Experience</span>
          </p>
        </div>
        <div style="padding: 16px; background: #f4f4f4; text-align: center; font-size: 12px; color: #888;">
          You're receiving this because you submitted a request at tedcroftpainting.com
        </div>
      </div>
    `,
  });
}

export async function sendEstimateNotification(data: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const transporter = createTransport();

  const projectTypeLabels: Record<string, string> = {
    interior: "Interior Painting",
    exterior: "Exterior Painting",
    cabinets: "Cabinet Refinishing",
    commercial: "Commercial Project",
    consultation: "Color Consultation",
    other: "Other",
  };

  const projectLabel = projectTypeLabels[data.projectType] ?? data.projectType;

  await transporter.sendMail({
    from: `"Ted Croft Painting Website" <${process.env.GMAIL_USER}>`,
    to: "tjcroft@hotmail.com",
    subject: `New Estimate Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Ted Croft Painting LLC</h1>
          <p style="color: #cc0000; margin: 4px 0 0; font-size: 14px;">New Estimate Request</p>
        </div>
        <div style="padding: 24px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 140px; color: #555;">Name</td>
              <td style="padding: 10px;">${data.name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 10px;"><a href="tel:${data.phone}" style="color: #cc0000;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px;"><a href="mailto:${data.email}" style="color: #cc0000;">${data.email}</a></td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Project Type</td>
              <td style="padding: 10px;">${projectLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Details</td>
              <td style="padding: 10px; white-space: pre-wrap;">${data.message}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px; background: #f4f4f4; text-align: center; font-size: 12px; color: #888;">
          Submitted via tedcroftpainting.com
        </div>
      </div>
    `,
  });
}
