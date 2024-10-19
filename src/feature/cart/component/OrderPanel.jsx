import { currencyFormat } from "../../../utils/currencyFormat.js";
import { useCreateOrder } from "../../productDetail/hooks/useCreateOrder.js";

const OrderPanel = ({ carts, selectedCart }) => {
  const { mutate, isPending } = useCreateOrder();

  const totalItems = selectedCart.reduce((qty, cart) => qty + cart.quantity, 0);

  const totalPrice = selectedCart.reduce(
    (total, cart) => total + cart.total,
    0
  );

  const handleOrder = () => {
    if (selectedCart.length > 0) {
      const selectedCarts = carts.filter((cart) =>
        selectedCart.includes(cart.cart)
      );

      const data = selectedCarts.map((cart) => ({
        product_id: cart.product.id,
        quantity: cart.cart.quantity,
      }));

      mutate(data);
    }
  };

  return (
    <div className="ml-4">
      <div className="flex-col justify-between hidden gap-4 p-4 border shadow-lg md:flex border-primary rounded-xl w-80 h-max">
        <span className="text-xl font-bold">Order details</span>
        <div>
          <div className="flex justify-between">
            <span>Total items</span>
            <span>{totalItems} product</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total price</span>
            <span>{currencyFormat(totalPrice)}</span>
          </div>
        </div>
        <button
          className="btn"
          onClick={handleOrder}
          disabled={totalItems === 0 || isPending}
        >
          Checkout ({totalItems})
        </button>
      </div>
    </div>
  );
};

export default OrderPanel;
