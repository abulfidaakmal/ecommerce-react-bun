import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetCart = (page) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  }

  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("carts", {
        params,
      });
      return response.data;
    },
    queryKey: ["carts", page],
  });
};
