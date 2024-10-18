import { useGetRatingDistribution } from "../hooks/useGetRatingDistribution";

const RatingDistribution = ({ productId }) => {
  const { data, isPending } = useGetRatingDistribution(productId);

  if (isPending) {
    return (
      <div className="box-border grid p-2 shadow-md h-max">
        <div className="flex content-center justify-between lg:justify-center lg:grid">
          <div className="flex items-center justify-center rating lg:rating-lg">
            <input
              type="radio"
              className="bg-orange-400 mask mask-star-2"
              readOnly
            />
            <div className="ml-2">
              <span className="ml-1 text-3xl lg:text-6xl">-</span>
              <span className="text-xl">/5.0</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="block w-48 h-4 rounded-md skeleton md:mt-0 md:mb-0"></span>
            <div className="flex mt-1 lg:justify-center">
              <span className="block w-16 h-3 mr-2 rounded-md skeleton"></span>
              <span className="block w-16 h-3 ml-2 rounded-md skeleton"></span>
            </div>
          </div>
        </div>
        <div className="hidden mt-6 lg:block">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <span
              key={index}
              className="block h-4 mb-2 rounded-md w-52 skeleton"
            ></span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="box-border grid p-2 shadow-md h-max">
      <div className="flex content-center justify-between lg:justify-center lg:grid">
        <div className="flex items-center justify-center rating lg:rating-lg">
          <input
            type="radio"
            className="bg-orange-400 mask mask-star-2"
            readOnly
          />
          <div className="ml-2">
            <span className="ml-1 text-3xl lg:text-6xl">{data?.average}</span>
            <span className="text-xl">/5.0</span>
          </div>
        </div>
        <div>
          <span className="mt-4 mb-1 font-bold md:mt-0 md:mb-0">
            {data?.percentage} buyers are satisfied
          </span>
          <div className="flex text-sm font-medium lg:justify-center">
            <span>{data?.total_rating} ratings</span>
            <span className="mx-2">-</span>
            <span>{data?.total_review} reviews</span>
          </div>
        </div>
      </div>
      <div className="hidden mt-6 lg:block">
        {data?.ratings.map((rating) => (
          <div key={rating} className="flex items-center">
            <span className="mr-1">{rating.rating}</span>
            <div className="rating">
              <input
                type="radio"
                className="w-4 h-4 bg-orange-400 mask mask-star-2"
                readOnly
              />
            </div>
            <progress
              className="mx-2 w-44 progress progress-custom"
              value={rating.total}
              max={rating.rating}
            ></progress>
            <span>{rating.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingDistribution;
