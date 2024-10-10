import { Link, useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";
import { useSession } from "../../hooks/useSession";
import SearchBar from "./SearchBar";
import ModalAddress from "@components/layout/ModalAddress.jsx";
import { MapPin, MessageCircleMore, ShoppingCart } from "lucide-react";
import { useGetAddress } from "../../feature/address/hooks/useGetAddress";
import { modal } from "../../utils/handleModal";

const Header = () => {
  const { data: addresses, isPending } = useGetAddress({ size: 3 });
  const { data, status, signOut } = useSession();
  const redirect = useNavigate();

  const addressSelected = addresses?.data.filter(
    (address) => address.is_selected
  );
  const name = addressSelected?.[0].name;

  return (
    <div className="fixed z-10 flex flex-col border-b md:px-20 border-primary bg-base-100 navbar">
      <div className="flex justify-between w-full gap-4 mb-1">
        <Link className="hidden text-2xl font-bold md:inline" to="/">
          Tokoo
        </Link>
        <SearchBar placeholder="Search" />
        <div className="flex items-center justify-center flex-none gap-1">
          {status === "unauthorized" ? (
            <>
              <button
                className="btn btn-ghost"
                onClick={() => redirect("/login")}
              >
                Login
              </button>
              <button className="btn" onClick={() => redirect("/register")}>
                Register
              </button>
            </>
          ) : (
            <>
              <Link
                to="/chat"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <MessageCircleMore />
              </Link>
              <Link
                to="/carts"
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <ShoppingCart />
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  {status === "loading" ? (
                    <div className="w-10 rounded-full skeleton" />
                  ) : (
                    <div className="w-10 rounded-full">
                      {data?.avatar ? (
                        <img alt={data?.username} src={data?.avatar} />
                      ) : (
                        <div className="avatar placeholder">
                          <div className="w-24 rounded-full bg-[neutral] text-neutral-content">
                            <span className="text-3xl">{data?.username}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/user/profile">Profile</Link>
                  </li>
                  <li>
                    <button onClick={signOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-between w-full">
        <CategoryList />
        <div className="hidden gap-6 mx-auto text-sm lg:flex">
          <Link to="/products/categories/laptop and computers">
            Laptop and computers
          </Link>
          <Link to="/products/categories/book">Book</Link>
          <Link to="/products/categories/sport">Sport</Link>
          <Link to="/products/categories/handphones and tablet">
            Handphones and tablet
          </Link>
          <Link to="/products/categories/fashion">Fashion</Link>
        </div>
        {status === "loading" ? (
          <div className="w-32 h-6 skeleton" />
        ) : name ? (
          <>
            <div
              className="flex items-center gap-1 text-sm"
              role="button"
              onClick={modal("Modal_Address").open}
            >
              <MapPin size={20} />
              {`Sent to: ${name}`}
            </div>
            <ModalAddress addresses={addresses.data} isPending={isPending} />
          </>
        ) : (
          <div
            className="flex items-center gap-1 text-sm"
            role="button"
            onClick={() => redirect("/user/addresses")}
          >
            <MapPin size={20} />
            {"Add your address"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
