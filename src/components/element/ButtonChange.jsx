import { modal } from "../../utils/handleModal";
import ButtonLoading from "./ButtonLoading";
import Input from "./Input";

const ButtonChange = ({ field, children, formik, isLoading }) => {
  return (
    <>
      <span>
        {children}
        <button
          role="button"
          className="ml-2 text-blue-600"
          onClick={modal(`modal_${field}`).open}
        >
          Change
        </button>
      </span>
      <dialog id={`modal_${field}`} className="modal">
        <form onSubmit={formik.handleSubmit} className="modal-box">
          <button
            type="button"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={modal(`modal_${field}`).close}
          >
            ✕
          </button>
          <h3 className="mb-4 text-lg font-bold">
            Change your {field.split("_").join("")}
          </h3>
          <Input formik={formik} name={field} />
          <ButtonLoading isError={!formik.isValid} isPending={isLoading}>
            Save
          </ButtonLoading>
        </form>
      </dialog>
    </>
  );
};

export default ButtonChange;
