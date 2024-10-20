import { MapPin, MessageCircleMore, Share2 } from "lucide-react";

const MerchantIsNotFound = ({ error }) => {
  const stats = [
    { title: "Rating Percentage", value: "-" },
    { title: "Total Reviews", value: "-" },
    { title: "Product Sold", value: "-" },
    { title: "Total Products", value: "-" },
  ];

  return (
    <>
      <div className="w-full pb-4 border-b border-primary">
        <div className="items-center justify-between lg:flex">
          <div className="flex items-center">
            <img
              alt="merchant notfound"
              className="w-20 h-20 mr-2 rounded-full"
            />
            <div>
              <h1 className="mb-2 text-xl font-bold">-</h1>
              <span className="flex items-center gap-1 px-2 py-1 text-sm capitalize rounded-lg md:py-2 md:gap-2 bg-base-200">
                <MapPin size={20} />-{" "}
              </span>
            </div>
          </div>
          <div className="flex mt-3 mb-5 overflow-x-auto divide-x lg:mt-0 md:mb-6 lg:mb-5 divide-primary">
            {stats.map((stat, index) => (
              <div className="grid px-4 place-items-center" key={index}>
                <div className="text-xl md:text-2xl stat-value">
                  {stat.value}
                </div>
                <div className="stat-title">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-2 justify-evenly lg:justify-normal lg:ml-24">
          <button className="flex items-center gap-1">
            <MessageCircleMore />
            Chat Seller
          </button>
          <button className="flex items-center gap-1">
            <Share2 />
            Share Shop
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="block text-center capitalize">
          {error.response.data.errors}
        </span>
      </div>
    </>
  );
};

export default MerchantIsNotFound;
