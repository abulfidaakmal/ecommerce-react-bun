import { useState } from "react";
import { Link } from "react-router-dom";
import ModalImage from "@components/layout/ModalImage.jsx";
import { currencyFormat } from "../../../utils/currencyFormat.js";
import CartAction from "./CartAction.jsx";
import OrderPanel from "./OrderPanel.jsx";
import Pagination from "@components/layout/Pagination.jsx";

const CartList = ({ carts, paging }) => {
  const [selectedCart, setSelectedCart] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleCheckboxChange = (newCart) => {
    setSelectedCart((prev) =>
      prev.includes(newCart)
        ? prev.filter((cart) => cart.id !== newCart.id)
        : [...prev, newCart]
    );
  };

  const handleSelectAllChange = () => {
    if (isAllSelected) {
      setSelectedCart([]);
    } else {
      setSelectedCart(carts.map((cart) => cart.cart));
    }
    setIsAllSelected(!isAllSelected);
  };

  return (
    <div className="flex justify-between w-full">
      <div className="w-full">
        <div className="border divide-y rounded-xl border-primary divide-primary">
          <div className="flex items-center gap-2 p-4 font-bold">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAllChange}
              className="checkbox"
              id="selectAll"
            />
            <label htmlFor="selectAll" className="cursor-pointer">
              Select All
            </label>
          </div>
          {carts.map((cart) => (
            <div key={cart.cart.id} className="p-4 mb-4">
              <div className="flex items-center gap-2 mb-4 font-bold">
                <input
                  type="checkbox"
                  checked={selectedCart.includes(cart.cart)}
                  onChange={() => handleCheckboxChange(cart.cart)}
                  className="checkbox"
                />
                <Link
                  className="text-xl font-bold"
                  to={`/merchant/${cart.product.seller_name}`}
                >
                  {cart.product.seller_name}
                </Link>
              </div>
              <div className="flex mt-3">
                <div className="flex gap-2 font-bold">
                  <ModalImage image={cart.product.image_url} />
                </div>
                <div className="flex justify-between w-full gap-10 ml-4 h-max">
                  <div className="grid">
                    <Link
                      to={`/product/${cart.product.id}`}
                      className="text-lg font-semibold"
                    >
                      {cart.product.name}
                    </Link>
                    <span>
                      Stock: {cart.product.stock - cart.cart.quantity}
                    </span>
                  </div>
                  <span className="font-semibold">
                    {currencyFormat(cart.product.price)}
                  </span>
                </div>
              </div>
              <CartAction cart={cart} />
            </div>
          ))}
        </div>
        {paging.total_page > 1 && <Pagination paging={paging} />}
      </div>
      <OrderPanel carts={carts} selectedCart={selectedCart} />
    </div>
  );
};

export default CartList;
