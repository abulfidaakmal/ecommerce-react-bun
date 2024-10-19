import { currencyFormat } from "../../../utils/currencyFormat.js";

const CartSkeleton = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="w-full border divide-y rounded-xl border-primary divide-primary">
        <div className="flex items-center gap-2 p-4 font-bold">
          <input type="checkbox" className="checkbox" id="selectAll" />
          <label htmlFor="selectAll" className="cursor-pointer">
            Select All
          </label>
        </div>
        {[1, 2, 3].map((result) => (
          <div key={result} className="p-4 mb-4">
            <div className="flex items-center gap-2 mb-4 font-bold">
              <input type="checkbox" className="checkbox" />
              <div className="w-40 h-5 skeleton" />
            </div>
            <div className="flex mt-3">
              <div className="flex gap-2 font-bold">
                <input type="checkbox" className="checkbox" />
                <div className="w-20 h-20 skeleton" />
              </div>
              <div className="flex justify-between w-full gap-10 ml-4 h-max">
                <div className="grid w-full gap-2">
                  <div className="h-4 skeleton" />
                  <div className="w-20 h-4 skeleton" />
                </div>
                <div className="w-32 h-4 skeleton" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="w-8 h-8 rounded-full skeleton" />
              <div className="w-8 h-8 rounded-full skeleton" />
              <div className="w-20 h-5 skeleton" />
            </div>
          </div>
        ))}
      </div>
      <div className="ml-4">
        <div className="flex flex-col justify-between gap-4 p-4 border shadow-lg border-primary rounded-xl w-80 h-max">
          <span className="text-xl font-bold">Order details</span>
          <div>
            <div className="flex justify-between">
              <span>Total items</span>
              <span>0 product</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total price</span>
              <span>{currencyFormat(0)}</span>
            </div>
          </div>
          <button className="btn" disabled>
            Checkout (0)
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
