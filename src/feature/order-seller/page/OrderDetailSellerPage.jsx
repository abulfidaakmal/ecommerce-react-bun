import ProfileLayout from "@components/layout/ProfileLayout";
import { useGetSellerOrderDetail } from "../hooks/useGetSellerOrderDetail";
import { Link, useNavigate, useParams } from "react-router-dom";
import { currencyFormat } from "../../../utils/currencyFormat";
import ModalImage from "@components/layout/ModalImage";
import OrderAddress from "../../order/components/OrderAddress";
import BadgeStatus from "../../order/components/BadgeStatus";
import OrderSellerDetailSkeleton from "../components/OrderSellerDetailSkeleton";
import OrderInfo from "../../order/components/OrderInfo";
import { ArrowLeft } from "lucide-react";

const OrderDetailSellerPage = () => {
  const { orderId, productId } = useParams();
  const redirect = useNavigate();

  const { data, isPending } = useGetSellerOrderDetail(orderId, productId);

  return (
    <ProfileLayout>
      <div className="grid w-full gap-4">
        <div className="flex gap-2">
          <button onClick={() => redirect("/seller/orders")}>
            <ArrowLeft />
          </button>
          <h1 className="text-xl font-bold">Detail Pesanan</h1>
        </div>
        {isPending ? (
          <OrderSellerDetailSkeleton />
        ) : (
          <>
            <OrderInfo order={data.order} product={data.product} />
            <OrderAddress address={data.order.address} />
            <div className="p-5 rounded-md bg-base-200">
              <div className="flex gap-2 mb-5">
                <span>Diupdate pada:</span>
                <span>{data.order.updated_at}</span>
              </div>
              <div className="flex gap-2">
                <ModalImage image={data.product.image_url} />
                <div className="grid">
                  <BadgeStatus status={data.order.status} />
                  <Link
                    to={`/product/${data.product.id}`}
                    className="font-bold"
                  >
                    {data.product.name}
                  </Link>
                  <span>
                    Quantity: <span>{data.order.quantity}</span>
                  </span>
                  <span>
                    <span className="font-bold">
                      {currencyFormat(data.order.price)}
                    </span>
                    /product
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ProfileLayout>
  );
};

export default OrderDetailSellerPage;
