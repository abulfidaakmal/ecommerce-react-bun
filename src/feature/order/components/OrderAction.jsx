import { useNavigate } from "react-router-dom";
import { modal } from "../../../utils/handleModal.js";
import { useCancelOrder } from "../hooks/useCancelOrder.js";

const OrderAction = ({ order_id, product_id, status, setSelectId }) => {
  const { mutate, isPending, isError } = useCancelOrder(order_id, product_id);
  const redirect = useNavigate();

  return (
    <>
      {["PENDING", "CONFIRMED"].includes(status) && (
        <button
          disabled={isPending || isError}
          className={`rounded-full btn`}
          onClick={mutate}
        >
          {isPending ? (
            <span className="loading loading-spinner loading-md" />
          ) : (
            "Cancel"
          )}
        </button>
      )}
      {status === "COMPLETED" && (
        <button
          className="rounded-full btn"
          onClick={() => redirect(`reviews`)}
        >
          Edit Review
        </button>
      )}
      {status === "DELIVERED" && (
        <button
          className="rounded-full btn"
          onClick={() => {
            modal("Modal_Add_Review").open();
            setSelectId({ product_id, order_id });
          }}
        >
          Write Review
        </button>
      )}
    </>
  );
};

export default OrderAction;
