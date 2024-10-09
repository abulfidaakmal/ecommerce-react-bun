import { modal } from "../../utils/handleModal.js";
import ButtonLoading from "@components/element/ButtonLoading.jsx";

const Modal = ({ title, formik, isPending, children, operation = "Add" }) => {
  return (
    <dialog id={`Modal_${operation}_${title}`} className="modal">
      <form onSubmit={formik.handleSubmit} className="modal-box">
        <button
          type="button"
          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          onClick={modal(`Modal_${operation}_${title}`).close}
        >
          ✕
        </button>
        <h3 className="mb-4 text-lg font-bold capitalize">
          {operation} your {title}
        </h3>
        {children}
        <ButtonLoading isError={!formik.isValid} isPending={isPending}>
          Save
        </ButtonLoading>
      </form>
    </dialog>
  );
};

export default Modal;
