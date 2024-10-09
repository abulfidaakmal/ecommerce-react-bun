import { useFormik } from "formik";
import { createSchema } from "../validation/addressSchema.js";
import Input from "@components/element/Input.jsx";
import TextArea from "@components/element/TextArea.jsx";
import { useCreateAddress } from "../hooks/useCreateAddress.js";
import Modal from "@components/layout/Modal.jsx";

const AddressForm = () => {
  const { mutate, isPending } = useCreateAddress();

  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      province: "",
      postal_code: "",
      name: "",
      phone: "",
    },
    validationSchema: createSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <Modal formik={formik} isPending={isPending} title={"Address"}>
      <div className="grid gap-2">
        <Input placeholder={"Name"} name={"name"} formik={formik} max={100} />
        <Input placeholder={"Phone"} name={"phone"} formik={formik} max={20} />
        <Input
          placeholder={"Street"}
          name={"street"}
          formik={formik}
          max={255}
        />
        <Input placeholder={"City"} name={"city"} formik={formik} max={100} />
        <Input
          placeholder={"Province"}
          name={"province"}
          formik={formik}
          max={100}
        />
        <Input
          placeholder={"Postal Code"}
          name={"postal_code"}
          max={10}
          formik={formik}
        />
        <TextArea
          placeholder={"Detail"}
          name={"detail"}
          required={false}
          formik={formik}
        />
      </div>
    </Modal>
  );
};

export default AddressForm;
