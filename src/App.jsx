import { Route, Routes } from "react-router-dom";
import { Toaster } from "@components/element/Sonner";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
