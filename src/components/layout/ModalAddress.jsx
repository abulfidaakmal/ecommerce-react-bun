import { modal } from "../../utils/handleModal.js";
import { useSelectAddress } from "../../feature/address/hooks/useSelectAddress.js";
import { useNavigate } from "react-router-dom";

const ModalAddress = ({ addresses, isPending }) => {
  const { mutate, isSelectPending } = useSelectAddress();
  const redirect = useNavigate();

  return (
    <dialog id={`Modal_Address`} className="modal">
      <div className="modal-box">
        <button
          type="button"
          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
          onClick={modal("Modal_Address").close}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">
          Where do you want to send your groceries?
        </h3>
        <div className="mt-8">
          {isPending ? (
            <div className="mt-4">
              {[1, 2, 3].map((result) => (
                <div
                  className="flex flex-col p-2 mb-2 border rounded-md border-primary"
                  key={result}
                >
                  <div className="flex flex-col mb-2">
                    <div className="h-6 mb-1 skeleton" />
                    <div className="h-6 skeleton" />
                  </div>
                  <div className="h-6 skeleton" />
                </div>
              ))}
            </div>
          ) : (
            addresses?.map((result) => (
              <div
                className="flex items-center justify-between px-4 py-2 mb-2 border rounded-md border-primary"
                key={result.id}
              >
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    {result.name}
                    {result.is_sellers && (
                      <div className="ml-2 badge badge-info">seller</div>
                    )}
                    {result.is_selected && (
                      <div className="ml-2 badge badge-success">selected</div>
                    )}
                  </span>
                  <span>{result.phone}</span>
                  <span className="mt-2">{result.street}</span>
                </div>
                {!result.is_selected && (
                  <button
                    className="btn"
                    onClick={() => mutate(result.id)}
                    disabled={isSelectPending}
                  >
                    Select
                  </button>
                )}
              </div>
            ))
          )}
          <button
            className="w-full btn"
            onClick={() => redirect("/user/addresses")}
          >
            Select Another Address
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ModalAddress;
