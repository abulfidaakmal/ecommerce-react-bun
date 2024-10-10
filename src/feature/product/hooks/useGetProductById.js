import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetProductById = (id) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`products/${id}`);
      return response.data.data;
    },
    queryKey: ["products", id],
  });
};
