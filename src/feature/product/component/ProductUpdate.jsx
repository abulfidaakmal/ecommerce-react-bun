import { useFormik } from "formik";
import { useUpdateProduct } from "../hooks/useUpdateProduct";
import { updateSchema } from "../validation/productSchema";
import Modal from "@components/layout/Modal";
import Input from "@components/element/Input";
import TextArea from "@components/element/TextArea";
import Select from "@components/element/Select";
import { useEffect } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useGetProductById } from "../hooks/useGetProductById";

const ProductUpdate = ({ id }) => {
  const { mutate, isPending } = useUpdateProduct();
  const { data } = useCategories();
  const { data: product } = useGetProductById(id);

  const formik = useFormik({
    validationSchema: updateSchema,
    onSubmit: (values) => {
      mutate({ body: values, id });
    },
  });

  useEffect(() => {
    formik.setValues({
      name: product?.name,
      price: product?.price,
      stock: product?.stock,
      weight: product?.weight,
      condition: product?.condition,
      category_name: product?.category_name,
      description: product?.description,
    });
  }, [id, product]);

  const values = formik.values;

  return (
    <Modal
      title={"Product"}
      formik={formik}
      isPending={isPending}
      operation={"Edit"}
    >
      <div className="grid gap-2">
        <Input
          placeholder={"Name"}
          name={"name"}
          formik={formik}
          max={100}
          defaultValue={values?.name}
        />
        <Input
          placeholder={"Price"}
          name={"price"}
          type="number"
          formik={formik}
          defaultValue={values?.price}
        />
        <Input
          placeholder={"Stock"}
          name={"stock"}
          type="number"
          formik={formik}
          defaultValue={values?.stock}
        />
        <Input
          placeholder={"Weight"}
          name={"weight"}
          type="number"
          formik={formik}
          defaultValue={values?.weight}
        />
        <Select
          data={[{ name: "NEW" }, { name: "USED" }, { name: "REFURBISHED" }]}
          formik={formik}
          name={"condition"}
          title={"Select Condition"}
        />
        <Select
          data={data}
          formik={formik}
          name={"category_name"}
          title={"Select Category"}
        />
        <TextArea
          placeholder={"Description"}
          name={"description"}
          formik={formik}
          defaultValue={values?.description}
        />
        <Input
          type="file"
          name="image"
          className="file-input file-input-bordered"
          formik={formik}
          required={false}
        />
      </div>
    </Modal>
  );
};

export default ProductUpdate;
