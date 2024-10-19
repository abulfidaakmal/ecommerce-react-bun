import { useGetCart } from "../hooks/useGetCart.js";
import Layout from "@components/layout/Layout.jsx";
import CartList from "../component/CartList.jsx";
import CartSkeleton from "../component/CartSkeleton.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const CartPage = () => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");

  const { data, isPending, isError, error } = useGetCart(page);
  const redirect = useNavigate();

  if (isError && error.response.status === 401) {
    redirect("/login");
  }

  return (
    <Layout>
      {isError && error.response.status === 404 ? (
        <div className="items-center md:flex">
          <img src="/cart.png" alt="cart" className="w-72" />
          <span className="block text-lg text-center capitalize">
            {error.response.data.errors}
          </span>
        </div>
      ) : isPending ? (
        <CartSkeleton />
      ) : (
        <CartList carts={data?.data} paging={data?.paging} />
      )}
    </Layout>
  );
};

export default CartPage;
