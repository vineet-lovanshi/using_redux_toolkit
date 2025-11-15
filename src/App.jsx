import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import "./App.css";
import Product from "./Product";
import { clearItem } from "./redux/slice";
import { useDispatch } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <Header></Header>

      <Product></Product>
    </>
  );
}

export default App;
