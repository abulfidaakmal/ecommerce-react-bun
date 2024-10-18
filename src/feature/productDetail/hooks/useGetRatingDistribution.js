import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetRatingDistribution = (productId) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(
        `public/products/${productId}/ratings/distribution`
      );
      return response.data.data;
    },
    queryKey: ["rating_distribution", productId],
  });
};
