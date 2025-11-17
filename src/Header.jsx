import React from "react";
import AddCart from "./AddCart";
import "./index.css";
import { useDispatch } from "react-redux";
import { clearItem } from "./redux/slice";
import { NavLink } from "react-router";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <header className="header">
          <div className="logo">ShopLogo</div>

          <nav className="navbar">
            <NavLink to={"/"}>Home</NavLink>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          {/* <button onClick={() => dispatch(clearItem())} className="clear-btn">
            clear
          </button> */}
          <AddCart></AddCart>
        </header>
      </div>
    </>
  );
};

export default Header;
