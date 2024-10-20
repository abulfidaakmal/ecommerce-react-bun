import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetMerchantInfo = (merchantName) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`merchants/${merchantName}`);
      return response.data.data;
    },
    queryKey: ["merchant", merchantName],
  });
};
