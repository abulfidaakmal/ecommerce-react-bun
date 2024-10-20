import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetMerchantProduct = (merchantName) => {
  return useInfiniteQuery({
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(
        `merchants/${merchantName}/products`,
        {
          params: {
            page: pageParam,
          },
        }
      );
      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (page) => {
      const { current_page, total_page } = page.paging;
      return current_page < total_page ? current_page + 1 : undefined;
    },
    queryKey: ["product_merchant", merchantName],
  });
};
