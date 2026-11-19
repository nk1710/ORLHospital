// templates/baseTemplate.js

export function buildEmailTemplate({ title, subtitle, fields }) {
  const rows = fields
    .map(
      ({ label, value, isPhone }) => `
        <tr>
          <td style="padding:10px 0;color:#64748b;font-size:13px;width:140px;">
            ${label}
          </td>
          <td style="padding:10px 0;font-size:14px;color:#0f172a;font-weight:500;">
            ${
              isPhone
                ? `<a href="tel:${value}" style="color:#006b76;text-decoration:none;">${value}</a>`
                : value || "-"
            }
          </td>
        </tr>
      `
    )
    .join("");

  return `
  <html>
  <body style="margin:0;padding:0;background:#f4f7f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
      <tr>
        <td align="center">

          <!-- Container -->
          <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.06);">

            <!-- Top Strip -->
            <tr>
              <td style="background:#006b76;height:6px;"></td>
            </tr>

            <!-- Header -->
            <tr>
              <td style="padding:20px 28px;border-bottom:1px solid #e5e7eb;">
                
                <table width="100%">
                  <tr>
                    <td>
                      <img 
                        src="https://www.drdhirendrasinghkushwah.com/images/medical-logo.png" 
                        height="36" 
                        style="display:block;"
                      />
                    </td>
                    <td align="right" style="font-size:12px;color:#94a3b8;">
                      Dr. Dhirendra Singh Kushwah Clinic
                    </td>
                  </tr>
                </table>

                <h2 style="margin:16px 0 4px;font-size:18px;font-weight:600;color:#362f75;">
                  ${title}
                </h2>

                <p style="margin:0;font-size:13px;color:#64748b;">
                  ${subtitle}
                </p>

              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px 28px;">
                
                <!-- Info Table -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${rows}
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:18px 28px;border-top:1px solid #e5e7eb;background:#f8fbfc;">
                
                <table width="100%">
                  <tr>
                    <td style="font-size:12px;color:#64748b;">
                      This submission was received from your website.
                    </td>
                    <td align="right" style="font-size:12px;color:#94a3b8;">
                      ${new Date().toLocaleString()}
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}