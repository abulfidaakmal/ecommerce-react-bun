import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetAddress = ({ page, search, size }) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  }

  if (search) {
    params.append("search", search);
  }

  if (size) {
    params.append("size", size);
  }

  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("addresses", {
        params,
      });
      return response.data;
    },
    queryKey: ["addresses", page, search],
  });
};
