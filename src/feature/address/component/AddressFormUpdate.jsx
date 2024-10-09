import Input from "@components/element/Input.jsx";
import TextArea from "@components/element/TextArea.jsx";
import { useGetAddressById } from "../hooks/useGetAddressById.js";
import { useEffect } from "react";

const AddressFormUpdate = ({ id, formik }) => {
  const { data } = useGetAddressById(id);

  useEffect(() => {
    formik.setValues({
      street: data?.street,
      city: data?.city,
      province: data?.province,
      postal_code: data?.postal_code,
      detail: data?.detail || undefined,
      name: data?.name,
      phone: data?.phone,
    });
  }, [id, data]);

  return (
    <div className="grid gap-2">
      <Input
        placeholder={"Name"}
        name={"name"}
        formik={formik}
        defaultValue={formik.values?.name}
      />
      <Input
        placeholder={"Phone"}
        name={"phone"}
        formik={formik}
        defaultValue={formik.values?.phone}
      />
      <Input
        placeholder={"Street"}
        name={"street"}
        formik={formik}
        defaultValue={formik.values?.street}
      />
      <Input
        placeholder={"City"}
        name={"city"}
        formik={formik}
        defaultValue={formik.values?.city}
      />
      <Input
        placeholder={"Province"}
        name={"province"}
        formik={formik}
        defaultValue={formik.values?.province}
      />
      <Input
        placeholder={"Postal Code"}
        name={"postal_code"}
        formik={formik}
        defaultValue={formik.values?.postal_code}
      />
      <TextArea
        placeholder={"Detail"}
        name={"detail"}
        formik={formik}
        required={false}
        defaultValue={formik.values?.detail}
      />
    </div>
  );
};

export default AddressFormUpdate;
