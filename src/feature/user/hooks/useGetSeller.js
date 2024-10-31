import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetSeller = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`sellers`);
      return response.data.data;
    },
    queryKey: ["sellers"],
  });
};
