import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetAddressById = (id) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`addresses/${id}`)

      return response.data.data;
    },
    queryKey: ["addresses", id],
  });
};
