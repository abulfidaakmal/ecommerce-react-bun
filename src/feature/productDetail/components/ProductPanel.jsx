import { useState } from "react";
import { currencyFormat } from "../../../utils/currencyFormat.js";
import ButtonWishlist from "./ButtonWishlist";
import Stock from "@components/element/Stock.jsx";
import ProductAction from "./ProductAction.jsx";

const ProductPanel = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const price = product.price;
  const total = price * quantity;
  const productId = product.id;
  const stock = product.stock - quantity;

  return (
    <div className="fixed bottom-0 z-30 flex justify-between w-full py-2 border-t border-primary md:px-20 bg-base-100">
      <div className="items-center hidden gap-3 lg:flex">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-12 h-12 rounded-md"
        />
        <div className="grid">
          <span className="text-xl font-semibold">{product.name}</span>
          <span className="text-sm">Stock: {stock}</span>
        </div>
      </div>
      <div className="flex-row items-center hidden gap-8 lg:flex">
        <Stock
          stock={product.stock}
          setQuantity={setQuantity}
          quantity={quantity}
        />
        <div className="grid">
          <span className="text-sm">Total price:</span>
          <span className="font-bold">{currencyFormat(total)}</span>
        </div>
        <ProductAction
          productId={productId}
          quantity={quantity}
          stock={product.stock}
        />
        <ButtonWishlist productId={productId} />
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-3 px-4 md:px-0 lg:hidden">
        <Stock
          stock={product.stock}
          setQuantity={setQuantity}
          quantity={quantity}
        />
        <ProductAction
          productId={productId}
          quantity={quantity}
          stock={product.stock}
        />
      </div>
    </div>
  );
};

export default ProductPanel;
