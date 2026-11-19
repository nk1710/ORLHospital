// template/appointmentUserTemplate.js

export function UserBaseTemplate({ name, fields }) {
    const rows = fields
      .map(
        ({ label, value }) => `
          <tr>
            <td style="padding:8px 0;color:#64748b;font-size:13px;">
              ${label}
            </td>
            <td align="right" style="padding:8px 0;font-size:14px;color:#0f172a;font-weight:500;">
              ${value || "-"}
            </td>
          </tr>
        `
      )
      .join("");
  
    return `
    <div style="margin:0;padding:0;background:#f4f7f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
      
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            
            <!-- Container -->
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.06);">
              
              <!-- Top Brand Strip -->
              <tr>
                <td style="background:#006b76;height:6px;"></td>
              </tr>
  
              <!-- Header -->
              <tr>
                <td style="padding:20px 32px;border-bottom:1px solid #e5e7eb;">
                  
                  <img 
                    src="https://www.drdhirendrasinghkushwah.com/images/medical-logo.png" 
                    height="40"
                    style="display:block;margin-bottom:10px;"
                  />
  
                  <h2 style="margin:0;font-size:18px;font-weight:600;color:#362f75;">
                    Appointment Request Received
                  </h2>
  
                  <p style="margin:6px 0 0;font-size:13px;color:#64748b;">
                    Dr. Dhirendra Singh Kushwah Clinic
                  </p>
                </td>
              </tr>
  
              <!-- Body -->
              <tr>
                <td style="padding:32px;">
                  
                  <p style="margin:0 0 16px;font-size:15px;color:#334155;">
                    Dear ${name || "Patient"},
                  </p>
  
                  <p style="margin:0 0 24px;font-size:15px;color:#334155;">
                    Thank you for choosing our clinic. Your appointment request has been received.
                    Our team will contact you shortly to confirm your appointment.
                  </p>
  
                  <!-- Unified Field Table -->
                  <div style="border:1px solid #d9e4e7;border-radius:10px;padding:20px;background:#f8fbfc;">
                    
                    <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#362f75;">
                      Appointment Details
                    </p>
  
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${rows}
                    </table>
  
                  </div>
  
                  <!-- CTA -->
                  <div style="margin-top:28px;">
                    <a 
                      href="tel:+919311449825"
                      style="display:inline-block;padding:12px 18px;background:#006b76;color:#ffffff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:500;">
                      Call Clinic
                    </a>
                  </div>
  
                  <!-- Note -->
                  <p style="margin:20px 0 0;font-size:13px;color:#64748b;">
                    If your concern is urgent, please contact the clinic directly.
                  </p>
  
                </td>
              </tr>
  
              <!-- Footer -->
              <tr>
                <td style="padding:24px 32px;border-top:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:13px;color:#64748b;">
                    Regards,<br/>
                    <strong style="color:#362f75;">Dr.(Prof.) Dhirendra Singh Kushwah Clinic</strong><br/>
                    Phone: +91-9311449825
                  </p>
  
                  <p style="margin-top:10px;font-size:11px;color:#94a3b8;">
                    This is an automated confirmation. Your appointment will be verified by our team.
                  </p>
                </td>
              </tr>
  
            </table>
  
          </td>
        </tr>
      </table>
  
    </div>
    `;
  }