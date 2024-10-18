import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "../../../lib/axios.js";

export const useGetWishlist = () => {
  return useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosInstance.get(`users/wishlists`, {
        params: {
          page: pageParam,
        },
      });
      return response.data;
    },
    queryKey: ["wishlists"],
    getNextPageParam: (lastPage) => {
      const { current_page, total_page } = lastPage.paging;

      return current_page < total_page ? current_page + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
