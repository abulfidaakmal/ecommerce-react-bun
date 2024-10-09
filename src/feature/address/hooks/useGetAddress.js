import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetAddress = (page, search) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  }

  if (search) {
    params.append("search", search);
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
