import { useCreateOrder } from "../hooks/useCreateOrder.js";
import { useCreateCart } from "../hooks/useCreateCart.js";

const ProductAction = ({ productId, quantity, stock }) => {
  const { mutate, isPending } = useCreateCart();
  const { mutate: orderMutate, isPending: orderIsPending } = useCreateOrder();

  const handleCreateCart = () => {
    mutate({ product_id: productId, quantity });
  };

  const handleCreateOrder = () => {
    orderMutate([{ product_id: productId, quantity }]);
  };

  return (
    <div className="flex gap-2">
      <button
        className="btn-outline btn"
        disabled={orderIsPending || stock <= 0}
        onClick={handleCreateOrder}
      >
        Buy now
      </button>
      <button
        className="btn"
        disabled={isPending || stock <= 0}
        onClick={handleCreateCart}
      >
        {isPending ? (
          <span className="loading loading-spinner loading-md" />
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
};

export default ProductAction;
