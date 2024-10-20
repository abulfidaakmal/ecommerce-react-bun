import * as Yup from "yup";

const createSchema = Yup.object({
  rating: Yup.number()
    .integer()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
  summary: Yup.string()
    .trim()
    .min(5, "Summary must be at least 5 characters long")
    .optional(),
  image: Yup.mixed().optional(),
});

const updateSchema = Yup.object({
  rating: Yup.number()
    .integer()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5")
    .required("Rating is required"),
  summary: Yup.string()
    .trim()
    .min(5, "Summary must be at least 5 characters long")
    .required("Summary is required"),
  image: Yup.mixed().optional(),
});

export { createSchema, updateSchema };
