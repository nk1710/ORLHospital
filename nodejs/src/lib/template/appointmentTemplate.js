// templates/appointmentTemplate.js

import { buildEmailTemplate } from "./baseTemplate";


export function appointmentTemplate(data) {
  return buildEmailTemplate({
    title: "New Appointment Form Submission",
    subtitle: "ENT Specialist Website",
    fields: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email },
      { label: "Phone Number", value: data.number, isPhone: true },
      { label: "City", value: data.city },
      { label: "Department", value: data.department },
    ],
  });
}