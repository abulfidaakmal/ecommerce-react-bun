import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetSellerOrder = ({ status, page, search }) => {
  const params = new URLSearchParams();

  if (status) {
    params.append("status", status);
  }

  if (page) {
    params.append("page", page);
  }

  if (search) {
    params.append("search", search);
  }

  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("seller/orders", {
        params,
      });
      return response.data;
    },
    queryKey: ["order_seller", status, page, search],
  });
};
