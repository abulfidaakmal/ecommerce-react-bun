import ProfileLayout from "@components/layout/ProfileLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOrderDetail } from "../hooks/useGetOrderDetail";
import OrderInfo from "../components/OrderInfo";
import ProductOrder from "../components/ProductOrder";
import OrderAddress from "../components/OrderAddress";
import { ArrowLeft } from "lucide-react";
import { dateFormat } from "../../../utils/dateFormat";
import OrderDetailSkeleton from "../components/OrderDetailSkeleton";

const OrderDetailPage = () => {
  const { orderId, productId } = useParams();
  const redirect = useNavigate();
  const { data, isPending } = useGetOrderDetail(orderId, productId);

  return (
    <ProfileLayout>
      <div className="grid w-full gap-4">
        <div className="flex gap-2">
          <button onClick={() => redirect("/user/orders")}>
            <ArrowLeft />
          </button>
          <h1 className="text-lg font-bold md:text-xl">Order Details</h1>
        </div>
        {isPending ? (
          <OrderDetailSkeleton />
        ) : (
          <>
            <OrderInfo order={data.order} product={data.product} />
            <OrderAddress address={data.order.address} />
            <div className="p-5 rounded-md bg-base-200">
              <div className="flex gap-2 mb-5">
                <span>Last Updated:</span>
                <span>{dateFormat(data.order.updated_at)}</span>
              </div>
              <ProductOrder data={data} />
              <div className="grid justify-between gap-3 p-5 mt-6 border rounded-md md:flex md:gap-0 bg-base-200 border-primary">
                <div className="grid">
                  <span>Sold By:</span>
                  <Link
                    to={`/merchant/${data.product.seller.name}`}
                    className="font-bold"
                  >
                    {data.product.seller.name}
                  </Link>
                </div>
                <div className="grid">
                  <span>Shipping Method:</span>
                  <span className="font-bold">Shipped By Seller</span>
                </div>
                <div className="grid">
                  <span>Shipped from:</span>
                  <div className="font-bold capitalize">
                    {data.product.seller.city} City,{" "}
                    {data.product.seller.province} province
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ProfileLayout>
  );
};

export default OrderDetailPage;
