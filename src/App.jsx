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

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/user" element={<Sidebar />}>
          <Route path="profile" element={<User />} />
          <Route path="addresses" element={<Address />} />
          <Route path="seller" element={<Seller />} />
          <Route path="wishlists" element={<Wishlist />} />
        </Route>
        <Route path="/seller" element={<Sidebar />}>
          <Route path="products" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
