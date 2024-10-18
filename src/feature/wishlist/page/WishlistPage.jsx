import { useGetWishlist } from "../hooks/useGetWishlist.js";
import WishlistList from "../component/WishlistList.jsx";

const WishlistPage = () => {
  const { data, isPending, isError, error, isFetchingNextPage, fetchNextPage } =
    useGetWishlist();

  const total_page = data?.pages[0].paging.total_page;
  const current_page = data?.pageParams.length;

  return (
    <div className="border-t lg:p-6 border-primary lg:border-0">
      <div className="py-4 lg:rounded-lg lg:p-4 bg-base-100 md:gap-4">
        <div className="flex flex-wrap justify-center gap-2 h-max">
          {isError && error.response.status === 404 ? (
            <span className="block text-center capitalize">
              {error.response.data.errors}
            </span>
          ) : isPending ? (
            Array.from({ length: 10 }).map((result) => (
              <div className="grid rounded-lg shadow-md w-44" key={result}>
                <div className="w-full h-40 rounded-t-xl skeleton " />
                <div className="grid gap-1 m-2 mt-3">
                  {[1, 2, 3].map((result) => (
                    <div className="w-full h-4 skeleton" key={result} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            data?.pages.map((page, index) => (
              <WishlistList wishlists={page.data} key={index} />
            ))
          )}
        </div>
        {current_page < total_page && !isFetchingNextPage && (
          <button
            onClick={fetchNextPage}
            className="block mx-auto my-4 btn-outline btn-sm btn"
          >
            Load more
          </button>
        )}
        {isFetchingNextPage && (
          <span className="block mx-auto my-4 loading loading-spinner loading-md" />
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
