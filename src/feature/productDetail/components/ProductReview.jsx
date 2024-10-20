import { useParams } from "react-router-dom";
import { useGetReview } from "../hooks/useGetReview.js";
import ReviewList from "./ReviewList.jsx";
import RatingDistribution from "./RatingDistribution.jsx";

const ProductReview = () => {
  const { productId } = useParams();
  const { data, isPending, isError, error, isFetchingNextPage, fetchNextPage } =
    useGetReview(productId);

  const total_page = data?.pages[0].paging.total_page;
  const current_page = data?.pageParams.length;

  return (
    <div className="pt-4 md:w-96 lg:w-full">
      <h2 className="pt-4 text-lg font-bold border-t border-primary">
        Reviews
      </h2>
      {isError && error.response?.status === 404 ? (
        <span className="block pb-5 mt-5 font-semibold text-center capitalize">
          {error.response.data.errors}
        </span>
      ) : (
        <div className="mt-4 lg:flex">
          <RatingDistribution productId={productId} />
          {isPending ? (
            <div className="w-full mt-8 divide-y lg:mt-4 lg:ml-14 divide-primary">
              {[1, 2, 3, 4]?.map((result) => (
                <div key={result} className="flex justify-between py-4">
                  <div className="w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 skeleton" />
                      <div className="w-20 h-4 skeleton" />
                    </div>
                    <div className="grid gap-2 mt-2">
                      <div className="h-4 skeleton" />
                      <div className="h-4 skeleton" />
                      <div className="h-4 skeleton" />
                    </div>
                    <div className="w-20 h-20 my-2 skeleton" />
                    <div className="w-48 h-4 skeleton" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              {data?.pages.map((page, index) => (
                <ReviewList reviews={page.data} key={index} />
              ))}
              {current_page < total_page && !isFetchingNextPage && (
                <button
                  onClick={fetchNextPage}
                  className="block mx-auto btn-outline btn-sm btn"
                >
                  Load more
                </button>
              )}
              {isFetchingNextPage && (
                <span className="block mx-auto my-4 loading loading-spinner loading-md" />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductReview;
