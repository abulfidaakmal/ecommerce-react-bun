import Modal from "@components/layout/Modal";
import Select from "@components/element/Select";
import { useUpdateSellerOrder } from "../hooks/useUpdateSellerOrder.js";
import { useFormik } from "formik";

const OrderSellerFormUpdate = ({ selectId }) => {
  const { mutate, isPending } = useUpdateSellerOrder();

  const formik = useFormik({
    initialValues: {
      status: "",
    },
    onSubmit: (status) => {
      mutate({ status, ...selectId });
    },
  });

  const status = [
    { name: "CANCELLEDBYSELLER" },
    { name: "CONFIRMED" },
    { name: "PROCESSING" },
    { name: "SHIPPED" },
    { name: "DELIVERED" },
  ];

  return (
    <Modal
      title={"Status"}
      isPending={isPending}
      formik={formik}
      operation={"Edit"}
    >
      <Select data={status} formik={formik} title={"Status"} name={"status"} />
    </Modal>
  );
};

export default OrderSellerFormUpdate;
