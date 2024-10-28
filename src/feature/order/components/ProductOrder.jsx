import { currencyFormat } from "../../../utils/currencyFormat";
import ModalImage from "@components/layout/ModalImage";
import BadgeStatus from "./BadgeStatus";
import { Link } from "react-router-dom";

const ProductOrder = ({ data }) => {
  const { id, name, image_url } = data.product;
  const { quantity, price, status } = data.order;

  return (
    <div className="flex gap-2">
      <ModalImage image={image_url} />
      <div>
        <div className="grid">
          <BadgeStatus status={status} />
          <Link to={`/product/${id}`} className="font-bold">
            {name}
          </Link>
          <span>
            Quantity: <span>{quantity}</span>
          </span>
          <span>
            <span className="font-bold">{currencyFormat(price)}</span>
            /product
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
