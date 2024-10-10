import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetProduct = (page, search) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  } else if (search) {
    params.append("search", search);
  }

  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`products`, { params });
      return response.data;
    },
    queryKey: ["products", page, search],
  });
};
