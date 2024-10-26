import { Link } from "react-router-dom";
import { currencyFormat } from "../../../utils/currencyFormat";
import ModalImage from "@components/layout/ModalImage.jsx";
import { MessageCircleMore } from "lucide-react";
import BadgeStatus from "./BadgeStatus";

const OrderItems = ({ product }) => {
  const { status, id, image_url, name, quantity, price, seller_name } = product;

  return (
    <div className="mx-6">
      <div className="flex items-center justify-between">
        <Link to={`/merchant/${seller_name}`} className="text-lg font-bold">
          {seller_name}
        </Link>
        <Link to={"/chat"} className="flex items-center gap-1">
          <button className="rounded-full btn">
            <MessageCircleMore />
            Chat Seller
          </button>
        </Link>
      </div>
      <div className="flex gap-2">
        <ModalImage image={image_url} />
        <div className="grid">
          <BadgeStatus status={status} />
          <Link to={`/product/${id}`}>{name}</Link>
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

export default OrderItems;
