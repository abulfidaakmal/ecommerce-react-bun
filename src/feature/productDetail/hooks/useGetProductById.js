import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetProductById = (productId) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`public/products/${productId}`);
      return response.data.data;
    },
    queryKey: ["product", productId],
  });
};
