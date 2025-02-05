import * as Yup from "yup";

export const contactValidations = Yup.object({
  from_name: Yup.string().required("Name is required"),
  from_email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(6, "Message must be at least 6 characters long"),
});
