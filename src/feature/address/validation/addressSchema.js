import * as Yup from "yup";

const createSchema = Yup.object().shape({
    street: Yup.string()
        .max(255, "Street must be at most 255 characters long")
        .required("Street is required"),
    city: Yup.string()
        .max(100, "City must be at most 100 characters long")
        .required("City is required"),
    province: Yup.string()
        .max(100, "Province must be at most 100 characters long")
        .required("Province is required"),
    postal_code: Yup.string()
        .max(10, "Postal Code must be at most 10 characters long")
        .required("Postal code is required"),
    detail: Yup.string().optional(),
    name: Yup.string()
        .max(100, "Name must be at most 100 characters long")
        .required("Name is required"),
    phone: Yup.string()
        .max(20, "Phone number must be at most 20 characters long")
        .required("Phone number is required"),
});

export { createSchema };
