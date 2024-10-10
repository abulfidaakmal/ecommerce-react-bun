import * as Yup from "yup";

const createSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(5, "Name must be at least 5 characters long")
    .max(100, "Name must be at most 100 characters long.")
    .required("Name is required."),
  description: Yup.string()
    .trim()
    .min(20, "Description must be at least 20 characters long")
    .required("Description is required."),
  category_id: Yup.number().required("Category is required."),
  price: Yup.number()
    .min(1, "Price must be at least 1 characters long")
    .required("Price is required."),
  stock: Yup.number()
    .min(1, "Stock must be at least 1.")
    .required("Stock is required."),
  weight: Yup.number()
    .min(1, "Weight must be at least 1.")
    .required("Weight is required."),
  condition: Yup.string()
    .oneOf(["NEW", "USED", "REFURBISHED"])
    .required("Condition is required."),
  image: Yup.mixed().required(),
});

const updateSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(5, "Name must be at least 5 characters long")
    .max(100, "Name must be at most 100 characters long.")
    .optional(),
  description: Yup.string()
    .trim()
    .min(20, "Description must be at least 20 characters long")
    .optional(),
  price: Yup.number()
    .min(1, "Price must be at least 1 characters long")
    .optional(),
  stock: Yup.number().min(1, "Stock must be at least 1.").optional(),
  weight: Yup.number().min(1, "Weight must be at least 1.").optional(),
  condition: Yup.string().oneOf(["NEW", "USED", "REFURBISHED"]).optional(),
  image: Yup.mixed().required(),
});

export { createSchema, updateSchema };
