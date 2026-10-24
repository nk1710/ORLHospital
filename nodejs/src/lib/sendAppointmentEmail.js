import { sendEmail } from "./sendEmail";
import { appointmentTemplate } from "./template/appointmentTemplate";
import { appointmentUserTemplate } from "./template/appointmentUserTemplate";


export async function sendAppointmentEmail(data) {
  const adminHtml = appointmentTemplate(data);
  const userHtml = appointmentUserTemplate(data);

  const promises = [
    sendEmail({
      subject: "New Appointment Booking",
      html: adminHtml,
    })
  ];

  if (data.email && data.email.trim() !== "") {
    promises.push(
      sendEmail({
        to: data.email,
        subject: "Appointment Request Received",
        html: userHtml,
      })
    );
  }

  await Promise.all(promises);
}