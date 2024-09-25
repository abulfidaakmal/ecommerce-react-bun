import * as Yup from "yup";

export const updateUserSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(1, "First name must be at least 1 character long")
    .max(100, "First name must be at most 100 characters long")
    .optional(),
  last_name: Yup.string()
    .min(1, "Last name must be at least 1 character long")
    .max(100, "Last name must be at most 100 characters long")
    .optional(),
  email: Yup.string()
    .email("Invalid email format")
    .max(100, "Email must be at most 100 characters long")
    .optional(),
  phone: Yup.string()
    .min(1, "Phone number must be at least 1 character long")
    .max(20, "Phone number must be at most 20 characters long")
    .optional(),
});

export const updateAvatarSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .test("fileFormat", "Only jpeg, jpg and png files are allowed", (value) => {
      if (value) {
        const supportedFormats = ["png", "jpeg", "jpg"];
        return supportedFormats.includes(value.name.split(".").pop());
      }
      return true;
    })
    .test("fileSize", "File size must be less than 3MB", (value) => {
      if (value) {
        return value.size <= 3145728;
      }
      return true;
    }),
});
