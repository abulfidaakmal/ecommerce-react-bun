import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useCreateWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (product_id) => {
      return axiosInstance.post(`/users/wishlists`, { product_id });
    },
    onSuccess: () => {
      toast.success("Wishlist created");
      queryClient.invalidateQueries(["wishlists"]);
    },
  });
};
