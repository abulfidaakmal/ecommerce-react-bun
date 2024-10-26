import ProfileLayout from "@components/layout/ProfileLayout.jsx";
import OrderList from "../components/OrderList.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetOrder } from "../hooks/useGetOrder.js";
import OrderBar from "../components/OrderBar.jsx";
import OrderSkeleton from "../components/OrderSkeleton.jsx";
import Pagination from "@components/layout/Pagination";

const OrderPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialStatus = searchParams.get("status") || "ONGOING";
  const page = searchParams.get("page");

  const [status, setStatus] = useState(initialStatus);
  const { data, isLoading, isError, error } = useGetOrder({ status, page });

  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  const paging = data?.paging;

  return (
    <ProfileLayout>
      <div className="w-full">
        <span className="text-2xl font-bold">Orders</span>
        <OrderBar activeTab={status} onTabChange={setStatus} />
        {isError && error.response.status === 404 ? (
          <span className="block mt-4 text-center capitalize">
            {error.response.data.errors}
          </span>
        ) : isLoading ? (
          <OrderSkeleton />
        ) : (
          <div>
            <OrderList orders={data?.data} />
            {paging?.total_page > 1 && <Pagination paging={paging} />}
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default OrderPage;
