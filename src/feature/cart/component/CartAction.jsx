import { useEffect, useState } from "react";
import ButtonWishlist from "../../productDetail/components/ButtonWishlist.jsx";
import { useRemoveCart } from "../hooks/useRemoveCart.js";
import { useUpdateCart } from "../hooks/useUpdateCart.js";
import { Minus, Plus, Trash } from "lucide-react";

const CartAction = ({ cart }) => {
  const [quantity, setQuantity] = useState(cart.cart.quantity);
  const { mutate: removeCart, isPending: isRemovePending } = useRemoveCart();
  const { mutate: mutateUpdate, isPending: isUpdatePending } = useUpdateCart();

  const stock = cart.product.stock;
  const cartId = cart.cart.id;

  const handleChange = (event) => {
    const value = Number(event.target.value);

    if (value >= 1 && value <= stock) {
      setQuantity(value);
    } else if (value > stock) {
      setQuantity(stock);
    }
  };

  useEffect(() => {
    if (cart.cart.quantity !== quantity) {
      mutateUpdate({ cartId, quantity });
    }
  }, [quantity, mutateUpdate]);

  return (
    <div className="flex items-center justify-end mt-3 md:mt-0">
      <div className="flex justify-center gap-2">
        <ButtonWishlist productId={cart.product.id} />
        <button
          className="flex items-center p-2 border rounded-full border-primary"
          onClick={() => removeCart(cartId)}
          disabled={isRemovePending}
        >
          {isRemovePending ? (
            <span className="loading loading-spinner" />
          ) : (
            <Trash />
          )}
        </button>
      </div>
      <div className="ml-2 border join border-primary">
        <button
          className="join-item btn btn-sm"
          onClick={() => setQuantity((curr) => Math.max(curr - 1, 1))}
          disabled={quantity === 1 || isUpdatePending}
        >
          <Minus size={14} />
        </button>
        <label className="join-item btn btn-sm">
          <input
            type="text"
            className="w-auto h-full text-center bg-transparent outline-none min-w-4"
            value={quantity}
            onChange={handleChange}
            style={{
              width: `${(quantity.toString().length + 1) * 8}px`,
            }}
          />
        </label>
        <button
          className="join-item btn btn-sm"
          onClick={() => setQuantity((curr) => Math.min(curr + 1, stock))}
          disabled={quantity === stock || isUpdatePending}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default CartAction;
