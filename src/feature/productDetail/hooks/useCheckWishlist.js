import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useCheckWishlist = (productId) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`users/wishlists/check`, {
        params: { productId },
      });
      return response.data.data;
    },
    queryKey: ["wishlists", productId],
  });
};
