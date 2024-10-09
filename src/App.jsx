import { Route, Routes } from "react-router-dom";
import { Toaster } from "@components/element/Sonner";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Sidebar from "@components/layout/Sidebar";
import User from "./pages/User";
import Address from "./pages/Address.jsx";
import Seller from "./pages/Seller.jsx";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Sidebar />}>
          <Route path="profile" element={<User />} />
          <Route path="addresses" element={<Address />} />
          <Route path="seller" element={<Seller />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
