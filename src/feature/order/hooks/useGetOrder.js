import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetOrder = ({ status, page }) => {
  const params = new URLSearchParams();

  if (status) {
    params.append("status", status);
  } else if (page) {
    params.append("page", page);
  }

  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`orders`, { params });
      return response.data;
    },
    queryKey: ["orders", status],
  });
};
