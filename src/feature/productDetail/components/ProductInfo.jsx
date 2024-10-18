import { Link } from "react-router-dom";
import { currencyFormat } from "../../../utils/currencyFormat.js";
import ReadMore from "@components/element/ReadMore.jsx";
import ButtonWishlist from "./ButtonWishlist.jsx";

const ProductInfo = ({ product }) => {
  return (
    <div className="grid gap-3 divide-y divide-primary md:w-96">
      <div className="flex justify-between">
        <div className="grid">
          <span className="text-xl font-semibold">{product?.name}</span>
          <span className="text-lg font-bold">
            {currencyFormat(product?.price)}
          </span>
          <div className="flex items-center">
            <span className="text-sm">Sold {product?.total_sold}</span>
            <span className="mx-2">-</span>
            <span className="text-sm ">({product?.total_review} ratings)</span>
          </div>
        </div>
        <div className="lg:hidden">
          <ButtonWishlist productId={product.id} />
        </div>
      </div>
      <div className="grid">
        <span className="pt-1 text-lg font-bold lg:hidden">
          Product Details:
        </span>
        <span className="mt-2">
          <span className="font-semibold">Condition:</span> {product?.condition}
        </span>
        <span>
          <span className="font-semibold">Category: </span>
          <Link
            to={`/products/categories/${product?.category_name}`}
            className="text-blue-600"
          >
            {product?.category_name}
          </Link>
        </span>
        <ReadMore>
          <span className="font-semibold">Description: </span>
          {product?.description}
        </ReadMore>
      </div>
    </div>
  );
};

export default ProductInfo;
