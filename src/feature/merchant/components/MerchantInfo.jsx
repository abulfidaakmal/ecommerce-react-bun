import { MapPin, MessageCircleMore } from "lucide-react";
import ModalShare from "@components/layout/ModalShare.jsx";
import { Link } from "react-router-dom";
import MerchantModalInfo from "./MerchantModalInfo";

const MerchantInfo = ({ data, isPending }) => {
  const rating = data?.rating;
  const product = data?.product;
  const seller = data?.seller;
  const address = data?.address;

  const stats = [
    { title: "Rating Percentage", value: rating?.percentage },
    { title: "Total Reviews", value: rating?.total },
    { title: "Product Sold", value: product?.complete },
    { title: "Total Products", value: product?.complete },
  ];

  return (
    <div className="w-full pb-4 border-b border-primary">
      {isPending ? (
        <>
          <div className="items-center justify-between lg:flex">
            <div className="flex items-center">
              <div className="w-20 h-20 mr-2 rounded-full skeleton" />
              <div>
                <div className="h-4 mb-2 skeleton w-44" />
                <div className="h-5 rounded-lg w-52 skeleton md:py-2 md:gap-2" />
              </div>
            </div>
            <div className="flex mt-2 mb-5 overflow-x-auto divide-x md:my-0 divide-primary">
              {[1, 2, 3, 4].map((result) => (
                <div
                  className="grid gap-2 px-4 place-items-center"
                  key={result}
                >
                  <div className="w-12 h-8 skeleton" />
                  <div className="h-4 w-28 skeleton" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-1 justify-evenly md:justify-normal md:ml-24">
            <div className="h-6 w-36 skeleton" />
            <div className="h-6 w-36 skeleton" />
          </div>
        </>
      ) : (
        <>
          <div className="items-center justify-between lg:flex">
            <div className="flex items-center">
              <img
                alt={seller.name}
                src={seller.avatar}
                className="w-20 h-20 mr-2 rounded-full"
              />
              <div>
                <h1 className="mb-2 text-xl font-bold capitalize">
                  {seller.name}
                </h1>
                <span className="flex items-center gap-1 px-2 py-1 text-sm capitalize rounded-lg md:py-2 md:gap-2 bg-base-200">
                  <MapPin size={20} />
                  {address.city}, {address.province}
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
            <Link to={"/chat"} className="flex items-center gap-1">
              <MessageCircleMore />
              Chat Seller
            </Link>
            <MerchantModalInfo seller={seller} />
            <ModalShare />
          </div>
        </>
      )}
    </div>
  );
};

export default MerchantInfo;
