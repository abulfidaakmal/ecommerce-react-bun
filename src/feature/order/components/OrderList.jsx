import { dateFormat } from "../../../utils/dateFormat.js";
import { currencyFormat } from "../../../utils/currencyFormat.js";
import OrderAction from "./OrderAction.jsx";
import OrderItems from "./OrderItems.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReviewForm from "./ReviewForm.jsx";

const OrderList = ({ orders }) => {
  const redirect = useNavigate();
  const [selectId, setSelectId] = useState();

  const checkStatus = (status) => {
    if (status !== "CANCELLED" || status !== "CANCELLEDBYSELLER") {
      return true;
    }
  };

  return (
    <>
      {orders?.map((order) => (
        <div
          key={order.order.id}
          className="px-4 my-4 border rounded-lg border-primary"
        >
          <div className="flex justify-between py-3">
            <div>
              Order Id: <span className="font-bold">{order.order.id}</span>
            </div>
            <span className="font-bold">
              {dateFormat(order.order.created_at)}
            </span>
          </div>
          <div className="border divide-y rounded-md border-primary divide divide-primary">
            {order.product.map((product) => (
              <div key={product.id} className="py-6">
                <OrderItems product={product} />
                <div className="flex justify-end gap-3 mt-3 mr-6 md:mt-0">
                  <button
                    className="rounded-full btn btn-outline"
                    onClick={() =>
                      redirect(`${order.order.id}/products/${product.id}`)
                    }
                  >
                    See Detail
                  </button>
                  {checkStatus(product.status) && (
                    <OrderAction
                      order_id={order.order.id}
                      product_id={product.id}
                      status={product.status}
                      setSelectId={setSelectId}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <span className="flex justify-between py-4">
            Total Payment ({order.order.total_quantity} product)
            <span className="font-extrabold">
              {currencyFormat(order.order.total_price)}
            </span>
          </span>
        </div>
      ))}
      <ReviewForm selectId={selectId} />
    </>
  );
};

export default OrderList;
