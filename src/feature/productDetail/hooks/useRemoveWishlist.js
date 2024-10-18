import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../../../lib/axios.js";

export const useRemoveWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (wishlistId) => {
      await axiosInstance.delete(`users/wishlists/${wishlistId}`);
    },
    onSuccess: () => {
      toast.success("Successful deletion");
      queryClient.invalidateQueries(["wishlists"]);
    },
  });
};
