import * as Yup from "yup";

export const createSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be at most 100 characters long")
    .required("Name is required"),
  description: Yup.string()
    .trim()
    .min(10, "Description must be at least 10 characters long")
    .required("Description is required"),
  address_id: Yup.number().required("Address is required"),
});
