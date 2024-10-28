import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetSellerOrderDetail = (orderId, productId) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(
        `seller/orders/${orderId}/products/${productId}`
      );
      return response.data.data;
    },
    queryKey: ["order_seller", orderId, productId],
  });
};
