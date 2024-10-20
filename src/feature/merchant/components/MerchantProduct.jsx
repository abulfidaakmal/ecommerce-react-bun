import ProductCard from "@components/layout/ProductCard.jsx";
import { useGetMerchantProduct } from "../hooks/useGetMerchantProduct.js";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProductSkeleton from "../../../components/layout/ProductSkeleton.jsx";

const MerchantProduct = ({ merchantName }) => {
  const {
    data,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetMerchantProduct(merchantName);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {isError && error.response.status === 404 ? (
        <span className="block text-center capitalize">
          {error.response?.data?.errors || "Something went wrong"}
        </span>
      ) : isLoading ? (
        Array.from({ length: 12 }).map((value) => (
          <ProductSkeleton key={value} />
        ))
      ) : (
        <>
          {data?.pages.map((result) =>
            result.data.map((product) => (
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
    </div>
  );
};

export default MerchantProduct;
