import {
  Heart,
  MapPin,
  MessageCircleMore,
  Minus,
  Plus,
  Share2,
} from "lucide-react";
import { currencyFormat } from "../../../utils/currencyFormat.js";

const ProductNotFound = ({ error }) => {
  return (
    <>
      <div className="w-11/12 md:justify-center md:grid lg:block">
        <div className="grid justify-between w-full gap-8 lg:flex">
          <img className="rounded-md w-96 h-80 lg:w-80 md:mx-auto" />
          <div className="grid w-full gap-3 divide-y divide-primary md:w-96">
            <span className="block mx-auto text-xl capitalize">
              {error.response.data.errors}
            </span>
          </div>
          <div className="grid items-center w-full gap-1 p-4 border-t lg:shadow-lg lg:border lg:gap-5 border-primary lg:rounded-xl lg:w-80 h-max">
            <div>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full" />
                <div>
                  <span className="text-lg font-bold">-</span>
                  <div className="flex items-center gap-2 rating rating-sm">
                    <input
                      type="radio"
                      className="bg-orange-400 mask mask-star-2 lg:hidden"
                      readOnly
                    />
                    <span className="font-bold lg:hidden">-</span>
                  </div>
                </div>
              </div>
              <span className="hidden lg:inline">
                Rating seller: <span className="font-bold">-</span>
              </span>
            </div>
            <div className="flex gap-2 lg:grid">
              <span className="flex items-center gap-1 text-sm">
                <MapPin size={20} />
                <span className="hidden lg:inline">Shop location:</span>
              </span>
              <span className="font-semibold capitalize">- </span>
            </div>
            <div className="items-center justify-around hidden mt-2 lg:mt-0 lg:flex">
              <button className="flex items-center gap-1">
                <MessageCircleMore />
                Chat Seller
              </button>
              <button className="flex items-center gap-1">
                <Share2 />
                Chat Seller
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 z-30 flex justify-between w-full py-2 border-t border-primary md:px-20 bg-base-100">
        <div className="items-center hidden gap-3 lg:flex">
          <img className="w-12 h-12 rounded-md" />
          <div className="grid">
            <span className="text-xl font-semibold">-</span>
            <span className="text-sm">Stock: -</span>
          </div>
        </div>
        <div className="flex-row items-center hidden gap-8 lg:flex">
          <div className="border join border-primary">
            <button className="join-item btn btn-sm">
              <Minus size={14} />
            </button>
            <label className="join-item btn btn-sm">
              <input
                type="text"
                className="w-2 h-full text-center bg-transparent outline-none min-w-4"
                value={0}
              />
            </label>
            <button className="join-item btn btn-sm">
              <Plus size={14} />
            </button>
          </div>
          <div className="grid">
            <span className="text-sm">Total price:</span>
            <span className="font-bold">{currencyFormat(0)}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn-outline btn">Buy now</button>
            <button className="btn">Add to cart</button>
          </div>
          <button className="flex items-center p-2 border rounded-full border-primary">
            <Heart />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between w-full gap-3 px-4 md:px-0 lg:hidden">
          <div className="border join border-primary">
            <button className="join-item btn btn-sm">
              <Minus size={14} />
            </button>
            <label className="join-item btn btn-sm">
              <input
                type="text"
                className="w-2 h-full text-center bg-transparent outline-none min-w-4"
                value={0}
              />
            </label>
            <button className="join-item btn btn-sm">
              <Plus size={14} />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="btn-outline btn">Buy now</button>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductNotFound;
