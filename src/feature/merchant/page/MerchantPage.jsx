import Layout from "@components/layout/Layout.jsx";
import { useParams } from "react-router-dom";
import MerchantInfo from "../components/MerchantInfo.jsx";
import MerchantProduct from "../components/MerchantProduct.jsx";
import { useGetMerchantInfo } from "../hooks/useGetMerchantInfo.js";
import MerchantIsNotFound from "../components/MerchantIsNotFound.jsx";

const MerchantPage = () => {
  const { merchantName } = useParams();
  const { data, isPending, isError, error } = useGetMerchantInfo(merchantName);

  return (
    <Layout>
      {isError && error.response.status === 404 ? (
        <MerchantIsNotFound error={error} />
      ) : (
        <>
          <MerchantInfo data={data} isPending={isPending} />
          <MerchantProduct merchantName={merchantName} />
        </>
      )}
    </Layout>
  );
};

export default MerchantPage;
