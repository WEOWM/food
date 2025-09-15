import { Route, Routes } from "react-router-dom";
import SignUp from "../page/auth/SignUp";
import SignIn from "../page/auth/SignIn";
import Home from "../page/Home";
import ProductDetail from "../page/product card/ProductDetail";
import CartPage from "../page/cart/CartPage";

function Index() {
  const token = localStorage.getItem("signup")
  return (
    <Routes>
      <Route path="/" element={<SignUp/>} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/product/cart" element={<CartPage/>} />
    </Routes>
  );
}

export default Index;
