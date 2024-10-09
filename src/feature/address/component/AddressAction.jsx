import ButtonActions from "@components/element/ButtonActions.jsx";
import { modal } from "../../../utils/handleModal.js";
import { useSelectAddress } from "../hooks/useSelectAddress.js";
import AddressFormUpdate from "./AddressFormUpdate.jsx";
import ModalRemove from "@components/layout/ModalRemove.jsx";
import { useRemoveAddress } from "../hooks/useRemoveAddress.js";
import { useFormik } from "formik";
import { createSchema } from "../validation/addressSchema.js";
import { useUpdateAddress } from "../hooks/useUpdateAddress.js";
import Modal from "@components/layout/Modal.jsx";

const AddressAction = ({ address, setSelectId, selectId }) => {
  const { mutate: select } = useSelectAddress();
  const { mutate, isPending } = useUpdateAddress();

  const formik = useFormik({
    validationSchema: createSchema,
    onSubmit: (values) => {
      mutate({ body: values, addressId: selectId });
    },
  });

  const handleEdit = () => {
    setSelectId(address.id);

    modal("Modal_Edit_Address").open();
  };

  const handleRemove = () => {
    setSelectId(address.id);
    modal("Remove_Modal_Address").open();
  };

  return (
    <>
      {address.is_sellers && address.is_selected ? (
        <ButtonActions onEdit={handleEdit} />
      ) : address.is_sellers ? (
        <ButtonActions
          onEdit={handleEdit}
          onSelect={() => select(address.id)}
        />
      ) : address.is_selected ? (
        <ButtonActions onEdit={handleEdit} onRemove={handleRemove} />
      ) : (
        <ButtonActions
          onEdit={handleEdit}
          onRemove={handleRemove}
          onSelect={() => select(address.id)}
        />
      )}
      <Modal
        title={"Address"}
        formik={formik}
        isPending={isPending}
        operation={"Edit"}
      >
        {selectId && <AddressFormUpdate id={selectId} formik={formik} />}
      </Modal>
      <ModalRemove
        id={selectId}
        title={"Address"}
        onRemove={useRemoveAddress}
      />
    </>
  );
};

export default AddressAction;
