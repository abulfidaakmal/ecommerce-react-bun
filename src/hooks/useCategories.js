import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios.js";

export const useCategories = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("public/categories", {
        params: { size: 100 },
      });
      return response.data.data;
    },
    cacheTime: 1000 * 60 * 60 * 2,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    queryKey: ["categories"],
  });
};
