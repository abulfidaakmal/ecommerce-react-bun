import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetOrderDetail = (orderId, productId) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(
        `orders/${orderId}/products/${productId}`
      );
      return response.data.data;
    },
    queryKey: ["orders", orderId, productId],
  });
};
