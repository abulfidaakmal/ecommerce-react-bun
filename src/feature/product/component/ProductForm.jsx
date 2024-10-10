import Input from "@components/element/Input.jsx";
import Select from "@components/element/Select.jsx";
import TextArea from "@components/element/TextArea.jsx";
import { useCategories } from "../../../hooks/useCategories.js";
import { useFormik } from "formik";
import { createSchema } from "../validation/productSchema.js";
import { useCreateProduct } from "../hooks/useCreateProduct.js";
import Modal from "@components/layout/Modal.jsx";

const ProductForm = () => {
  const { data: categories } = useCategories();
  const { mutate, isPending } = useCreateProduct();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      category_id: "",
      price: "",
      stock: "",
      weight: "",
      condition: "",
    },
    validationSchema: createSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const typeNumber = [
    { placeholder: "Price", name: "price" },
    { placeholder: "Stock", name: "stock" },
    { placeholder: "Weight", name: "weight" },
  ];

  return (
    <Modal formik={formik} isPending={isPending} title={"Product"}>
      <div className="grid gap-2">
        <Input placeholder={"Name"} name={"name"} formik={formik} max={100} />
        {typeNumber.map((result, index) => (
          <Input
            key={index}
            placeholder={result.placeholder}
            name={result.name}
            type="number"
            formik={formik}
          />
        ))}
        <Select
          data={[{ name: "NEW" }, { name: "USED" }, { name: "REFURBISHED" }]}
          formik={formik}
          name={"condition"}
          title={"Select Condition"}
        />
        <Select
          data={categories}
          formik={formik}
          name={"category_id"}
          title={"Select Category"}
        />
        <TextArea
          placeholder={"Description"}
          name={"description"}
          formik={formik}
        />
        <Input
          type="file"
          name="image"
          className="file-input file-input-bordered"
          formik={formik}
        />
      </div>
    </Modal>
  );
};

export default ProductForm;
