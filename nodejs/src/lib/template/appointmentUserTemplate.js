// templates/appointmentTemplate.js

import { UserBaseTemplate } from "./UserBaseTemplate";


export function appointmentUserTemplate(data) {
  return UserBaseTemplate({
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