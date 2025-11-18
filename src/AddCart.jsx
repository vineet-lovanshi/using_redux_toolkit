import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
const AddCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector);

  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        {/* <i className={faShoppingCart}></i> */}
        <FontAwesomeIcon
          onClick={() => navigate("/cart-page")}
          className="icon"
          icon={faShoppingCart}
        />
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </div>
    </>
  );
};

export default AddCart;
