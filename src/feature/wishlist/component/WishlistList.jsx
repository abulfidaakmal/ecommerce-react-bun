import { Link } from "react-router-dom";
import { currencyFormat } from "../../../utils/currencyFormat.js";
import { useRemoveWishlist } from "../../productDetail/hooks/useRemoveWishlist.js";
import { Heart } from "lucide-react";

const WishlistList = ({ wishlists }) => {
  const { mutate, isPending } = useRemoveWishlist();

  return (
    <>
      {wishlists?.map((wishlist) => (
        <div className="relative w-44" key={wishlist.id}>
          <button
            className="absolute flex items-center p-1 border rounded-full z-1 right-1 top-1 border-primary"
            onClick={() => mutate(wishlist.id)}
          >
            {isPending ? (
              <span className="loading loading-spinner" />
            ) : (
              <Heart className="fill-current text-primary" size={20} />
            )}
          </button>
          <Link
            to={`/product/${wishlist.product_id}`}
            className="grid rounded-lg shadow-md w-44"
          >
            <img
              src={wishlist.image_url}
              className="w-full h-40 rounded-t-xl"
            />
            <div className="grid m-2 mt-3">
              <span className="text-base capitalize line-clamp-2">
                {wishlist.name}
              </span>
              <span className="font-bold">
                {currencyFormat(wishlist.price)}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default WishlistList;
