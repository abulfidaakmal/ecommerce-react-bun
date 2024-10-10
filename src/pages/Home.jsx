import Layout from "../components/layout/Layout";
import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios.js";
import ProductCard from "@components/layout/ProductCard.jsx";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductSkeleton from "../components/layout/ProductSkeleton.jsx";

const Home = () => {
  const { ref, inView } = useInView();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const search = params.get("search");

  const {
    data,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axiosInstance.get("public/products", {
        params: {
          page: pageParam,
          search,
        },
      });
      return response.data;
    },
    queryKey: ["products", search],
    getNextPageParam: (lastPage) => {
      const { current_page, total_page } = lastPage.paging;

      return current_page < total_page ? current_page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <Layout>
      {isError ? (
        <span className="block text-center capitalize">
          {error.response?.data?.errors || "Something went wrong"}
        </span>
      ) : isLoading ? (
        Array.from({ length: 12 }).map((value) => (
          <ProductSkeleton key={value} />
        ))
      ) : (
        <>
          {data?.pages.map((page) =>
            page.data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )}
          <div ref={ref} className="grid w-full">
            {isFetchingNextPage && (
              <span className="block mx-auto my-4 loading loading-spinner loading-md" />
            )}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;
