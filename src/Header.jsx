import React from "react";
import AddCart from "./AddCart";
import "./index.css";
import { useDispatch } from "react-redux";
import { clearItem } from "./redux/slice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <header className="header">
          <div className="logo">ShopLogo</div>

          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <button onClick={() => dispatch(clearItem())} className="clear-btn">
            clear
          </button>
          <AddCart></AddCart>
        </header>
      </div>
    </>
  );
};

export default Header;
