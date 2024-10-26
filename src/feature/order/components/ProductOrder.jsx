import { currencyFormat } from "../../../utils/currencyFormat";
import ModalImage from "@components/layout/ModalImage";
import BadgeStatus from "@components/element/BadgeStatus";
import { Link } from "react-router-dom";

const ProductOrder = ({ data }) => {
  const { id, name, image_url } = data.orderDetails.product;
  const { quantity, price, status } = data.order;

  return (
    <div className="flex gap-2">
      <ModalImage image={image_url} />
      <div>
        <Link to={`/product/${id}`} className="grid">
          <BadgeStatus status={status} />
          <span className="font-bold">{name}</span>
          <span>
            Quantity: <span>{quantity}</span>
          </span>
          <span>
            <span className="font-bold">{currencyFormat(price)}</span>
            /product
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductOrder;
