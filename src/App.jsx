import { Route, Routes } from "react-router-dom";
import { Toaster } from "@components/element/Sonner";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Sidebar from "@components/layout/Sidebar";
import User from "./pages/User";
import Address from "./pages/Address.jsx";
import Seller from "./pages/Seller.jsx";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import Merchant from "./pages/Merchant.jsx";
import Review from "./pages/Review.jsx";
import Order from "./pages/Order.jsx";
import OrderDetail from "./pages/OrderDetail.jsx";
import OrderSeller from "./pages/OrderSeller.jsx";
import OrderDetailSeller from "./pages/OrderDetailSeller.jsx";
import ProductCategories from "./pages/ProductCategories.jsx";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/merchant/:merchantName" element={<Merchant />} />
        <Route
          path="/products/categories/:categoryName"
          element={<ProductCategories />}
        />
        <Route path="/user" element={<Sidebar />}>
          <Route path="profile" element={<User />} />
          <Route path="addresses" element={<Address />} />
          <Route path="seller" element={<Seller />} />
          <Route path="wishlists" element={<Wishlist />} />
          <Route path="reviews" element={<Review />} />
          <Route path="orders" element={<Order />} />
          <Route
            path="orders/:orderId/products/:productId"
            element={<OrderDetail />}
          />
        </Route>
        <Route path="/seller" element={<Sidebar />}>
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<OrderSeller />} />
          <Route
            path="orders/:orderId/products/:productId"
            element={<OrderDetailSeller />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
