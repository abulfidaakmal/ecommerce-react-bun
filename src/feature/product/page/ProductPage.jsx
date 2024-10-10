import ActionBar from "@components/layout/ActionBar.jsx";
import ProductList from "../component/ProductList.jsx";
import ProfileLayout from "@components/layout/ProfileLayout.jsx";
import ProductForm from "../component/ProductForm.jsx";

const ProductPage = () => {
  return (
    <ProfileLayout>
      <div className="w-full">
        <ActionBar title={"Product"} placeholder={"Search Product"}>
          <ProductForm />
        </ActionBar>
        <ProductList />
      </div>
    </ProfileLayout>
  );
};

export default ProductPage;
