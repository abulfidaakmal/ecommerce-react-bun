import { Link, useNavigate } from "react-router-dom";
import { useGetAddress } from "../../address/hooks/useGetAddress.js";
import { useReactiveSeller } from "../hooks/useReactiveSeller.js";
import SellerForm from "../component/SellerForm.jsx";
import { useSession } from "../../../hooks/useSession.js";
import SellerAction from "../../user/component/SellerAction.jsx";

const SellerPage = () => {
  const { data: address, isError, error } = useGetAddress({ page: 1 });
  const redirect = useNavigate();
  const { role, data } = useSession();

  if (role === "SELLER") redirect("/seller/products");

  return (
    <div className="p-6">
      <div className="items-center p-4 rounded-lg lg:flex justify-evenly bg-base-100">
        <div className="flex justify-center">
          <img src="/online-shopping.png" className="h-60" />
        </div>
        <div className="flex flex-col gap-6 mt-4 lg:mt-0">
          {isError && error.response.status === 404 ? (
            <div className="grid">
              <span>{"You don't have a address, please add your address"}</span>
              <Link
                to={"/user/addresses"}
                className="text-center text-blue-600 underline"
              >
                Add Address
              </Link>
            </div>
          ) : role === "USER" && data?.has_been_seller ? (
            <div className="grid">
              <span className="text-center">
                You were once a seller.Click the reactive button if you want to
                sell again.
              </span>
              <SellerAction useAction={useReactiveSeller} className={"mx-auto"}>
                Reactive
              </SellerAction>
            </div>
          ) : (
            <>
              <span className="text-xl font-bold">Open your shop now</span>
              <SellerForm address={address?.data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
