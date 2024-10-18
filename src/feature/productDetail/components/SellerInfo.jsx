import { Link } from "react-router-dom";
import ModalShare from "@components/layout/ModalShare.jsx";
import { MapPin, MessageCircleMore } from "lucide-react";

const SellerInfo = ({ seller }) => {
  return (
    <div className="grid items-center w-full gap-1 p-4 border-t lg:shadow-lg lg:border lg:gap-5 border-primary lg:rounded-xl lg:w-80 h-max">
      <div>
        <Link
          to={`/merchant/${seller?.name}`}
          className="flex items-center gap-4"
        >
          <img
            src={seller?.avatar}
            alt={seller?.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <span className="text-lg font-bold">{seller?.name}</span>
            <div className="flex items-center gap-2 rating rating-sm">
              <input
                type="radio"
                className="bg-orange-400 mask mask-star-2 lg:hidden"
                readOnly
              />
              <span className="font-bold lg:hidden">
                {seller?.rating_percentage}
              </span>
            </div>
          </div>
        </Link>
        <span className="hidden lg:inline">
          Rating seller:{" "}
          <span className="font-bold">{seller?.rating_percentage}</span>
        </span>
      </div>
      <div className="flex gap-2 lg:grid">
        <span className="flex items-center gap-1 text-sm">
          <MapPin size={20} />
          <span className="hidden lg:inline">Shop location:</span>
        </span>
        <span className="font-semibold capitalize">
          {seller?.city} City, {seller?.province} Province
        </span>
      </div>
      <div className="items-center justify-around hidden mt-2 lg:mt-0 lg:flex">
        <Link to={"/chat"} className="flex items-center gap-1">
          <MessageCircleMore />
          Chat Seller
        </Link>
        <ModalShare merchantName={seller?.name} />
      </div>
    </div>
  );
};

export default SellerInfo;
