import ProfileLayout from "@components/layout/ProfileLayout";
import { useGetAddress } from "../hooks/useGetAddress.js";
import AddressList from "../component/AddressList.jsx";
import ActionBar from "@components/layout/ActionBar.jsx";
import Pagination from "@components/layout/Pagination.jsx";
import AddressForm from "../component/AddressForm.jsx";
import { useLocation } from "react-router-dom";

const AddressPage = () => {
  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page");
  const search = new URLSearchParams(location.search).get("search");

  const { data, isPending, isError, error } = useGetAddress(page, search);

  const addresses = data?.data;
  const paging = data?.paging;

  return (
    <ProfileLayout>
      <div className="w-full">
        <ActionBar title={"Address"} placeholder={"Search Address"}>
          <AddressForm />
        </ActionBar>
        {isError && error.response.status === 404 ? (
          <span className="block text-center capitalize">
            {error.response.data.errors}
          </span>
        ) : (
          <AddressList addresses={addresses} isPending={isPending} />
        )}
        {paging?.total_page > 1 && <Pagination paging={paging} />}
      </div>
    </ProfileLayout>
  );
};

export default AddressPage;
