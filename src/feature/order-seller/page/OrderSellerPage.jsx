import { useEffect, useState } from "react";
import ProfileLayout from "@components/layout/ProfileLayout.jsx";
import OrderSellerList from "../components/OrderSellerList";
import { useGetSellerOrder } from "../hooks/useGetSellerOrder";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSellerBar from "../components/OrderSellerBar";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const page = searchParams.get("page");
  const initialStatus = searchParams.get("status") || "PENDING";
  const search = searchParams.get("search");

  const [status, setStatus] = useState(initialStatus);

  const { data, isError, error, isPending } = useGetSellerOrder({
    status,
    page,
    search,
  });

  useEffect(() => {
    if (status !== initialStatus) {
      setStatus(status);
      searchParams.set("status", status);
      navigate({ search: searchParams.toString() });
    }
  }, [status, initialStatus]);

  return (
    <ProfileLayout>
      <div className="w-full">
        <OrderSellerBar status={status} setStatus={setStatus} />
        {isError && error.response.status === 404 ? (
          <span className="block mt-4 text-center capitalize">
            {error.response.data.errors}
          </span>
        ) : (
          <OrderSellerList isPending={isPending} data={data} search={search} />
        )}
      </div>
    </ProfileLayout>
  );
};

export default ProductPage;
