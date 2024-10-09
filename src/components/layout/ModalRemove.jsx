import { modal } from "../../utils/handleModal.js";

const ModalRemove = ({ id, title, onRemove }) => {
  const { mutate, isPending } = onRemove();

  const handleRemove = (event) => {
    event.preventDefault();
    mutate(id)
  }

  return (
    <dialog id={`Remove_Modal_${title}`} className="modal">
      <form className="modal-box" onSubmit={handleRemove}>
        <p className="py-4">Are you sure you want to delete this {title}?</p>
        <div className="flex items-end modal-action">
          <button
            type="button"
            className="btn"
            onClick={() => modal(`Remove_Modal_${title}`).close()}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending}
            className={`w-max mt-2 btn`}
          >
            {isPending ? (
              <span className="loading loading-spinner loading-md" />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default ModalRemove;
