import { useRemoveWishlist } from "../hooks/useRemoveWishlist.js";
import { useCreateWishlist } from "../hooks/useCreateWishlist.js";
import { useCheckWishlist } from "../hooks/useCheckWishlist.js";
import { Heart } from "lucide-react";

const ButtonWishlist = ({ productId }) => {
  const { mutate, isPending } = useCreateWishlist();
  const { mutate: mutateRemove, isPending: isPendingRemove } =
    useRemoveWishlist();
  const { data, isLoading } = useCheckWishlist(productId);

  const checkWishlist = data?.my_wishlist;

  const handleWishlist = () => {
    if (checkWishlist) {
      mutateRemove(data.wishlist_id);
    } else {
      mutate(productId);
    }
  };

  const loading = isPending || isPendingRemove || isLoading;

  return (
    <button
      className="flex items-center justify-center p-2 border rounded-full w-11 h-11 border-primary"
      onClick={handleWishlist}
      disabled={loading}
    >
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <Heart
          className={`${
            checkWishlist ? "fill-current text-primary" : "fill-none"
          }`}
        />
      )}
    </button>
  );
};

export default ButtonWishlist;
