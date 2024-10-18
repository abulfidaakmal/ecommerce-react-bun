import Layout from "@components/layout/Layout.jsx";
import ProductInfo from "../components/ProductInfo.jsx";
import SellerInfo from "../components/SellerInfo.jsx";
import ProductPanel from "../components/ProductPanel.jsx";
import { useGetProductById } from "../hooks/useGetProductById.js";
import { useParams } from "react-router-dom";
import ProductReview from "../components/ProductReview.jsx";
import ProductNotFound from "../components/ProductNotFound.jsx";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data, isError, error, isPending } = useGetProductById(productId);

  const product = data?.product;
  const seller = data?.seller;

  return (
    <Layout>
      {isPending ? (
        <div className="grid items-center justify-center w-11/12 h-72">
          <span className="loading loading-spinner" />
        </div>
      ) : isError && error.response.status === 404 ? (
        <ProductNotFound error={error} />
      ) : (
        data && (
          <>
            <div className="w-11/12 md:justify-center md:grid lg:block">
              <div className="grid justify-between w-full gap-8 lg:flex">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full rounded-md h-80 lg:w-80 md:mx-auto"
                />
                <ProductInfo product={product} />
                <SellerInfo seller={seller} />
              </div>
              <ProductReview />
            </div>
            <ProductPanel product={product} />
          </>
        )
      )}
    </Layout>
  );
};

export default ProductDetailPage;
