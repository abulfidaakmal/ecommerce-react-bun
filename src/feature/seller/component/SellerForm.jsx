import { useFormik } from "formik";
import { createSchema } from "../validation/sellerSchema.js";
import { useCreateSeller } from "../hooks/useCreateSeller.js";
import TextArea from "@components/element/TextArea.jsx";
import Input from "@components/element/Input.jsx";
import Select from "@components/element/Select.jsx";

const SellerForm = ({ address }) => {
  const { mutate, isPending } = useCreateSeller();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      address_id: "",
    },
    validationSchema: createSchema,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <form className="grid gap-2 lg:w-96" onSubmit={formik.handleSubmit}>
      <Input placeholder={"Shop Name"} name={"name"} formik={formik} />
      <TextArea
        placeholder={"Description"}
        name={"description"}
        formik={formik}
      />
      <Select
        data={address}
        formik={formik}
        title={"Select Your Address"}
        name={"address_id"}
      />
      <button
        type="submit"
        disabled={isPending || !formik.isValid}
        className="btn"
      >
        {isPending ? (
          <span className="loading loading-spinner loading-md" />
        ) : (
          "Save"
        )}
      </button>
    </form>
  );
};

export default SellerForm;
