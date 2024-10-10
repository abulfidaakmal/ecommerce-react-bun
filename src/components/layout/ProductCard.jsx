import { Link } from "react-router-dom";
import { currencyFormat } from "../../utils/currencyFormat.js";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="grid rounded-lg shadow-md w-44 "
    >
      <img src={product.image_url} className="w-full h-40 rounded-t-xl" />
      <div className="grid m-2 mt-3">
        <span className="text-base capitalize line-clamp-2">
          {product.name}
        </span>
        <span className="font-bold">{currencyFormat(product.price)}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
