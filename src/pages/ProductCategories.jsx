import Layout from "@components/layout/Layout.jsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios.js";
import { useParams } from "react-router-dom";
import ProductCard from "@components/layout/ProductCard";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProductSkeleton from "../components/layout/ProductSkeleton.jsx";

const ProductCategories = () => {
  const { categoryName } = useParams();
  const { ref, inView } = useInView();

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
      const response = await axiosInstance.get(
        `public/products/categories/${categoryName}`,
        {
          params: {
            page: pageParam,
          },
        }
      );
      return response.data;
    },
    queryKey: ["products", categoryName],
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

export default ProductCategories;
