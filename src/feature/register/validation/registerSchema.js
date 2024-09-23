import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .max(100, "Username must be at most 100 characters long")
    .required("Username is required"),
  first_name: Yup.string()
    .max(100, "First name must be at most 100 characters long")
    .required("First name is required"),
  last_name: Yup.string()
    .max(100, "Last name must be at most 100 characters long")
    .optional(),
  email: Yup.string()
    .email("Invalid email format")
    .max(100, "Email must be at most 100 characters long")
    .required("Email is required"),
  phone: Yup.string()
    .max(20, "Phone number must be at most 20 characters long")
    .required("Phone number is required"),
  password: Yup.string()
    .max(20, "Password must be at most 20 characters long")
    .required("Password is required"),
  birth_of_date: Yup.date()
    .max(new Date(), "Birth date cannot be in the future")
    .required("Birth date is required"),
  gender: Yup.string().oneOf(["MALE", "FEMALE"]).required("Gender is required"),
  avatar: Yup.mixed().optional(),
});
