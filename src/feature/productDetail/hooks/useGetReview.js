import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetReview = (productId) => {
  return useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosInstance.get(
        `public/products/${productId}/reviews`,
        {
          params: {
            page: pageParam,
          },
        }
      );
      return response.data;
    },
    queryKey: ["reviews", productId],
    getNextPageParam: (lastPage) => {
      const { current_page, total_page } = lastPage.paging;

      return current_page < total_page ? current_page + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
