import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import "./App.css";
import Product from "./Product";
import { clearItem } from "./redux/slice";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import CartPage from "./CartPage";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Product></Product>} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
