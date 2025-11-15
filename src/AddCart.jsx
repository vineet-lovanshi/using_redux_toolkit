import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const AddCart = () => {
  const selector = useSelector((state) => state.cart.value);
  // console.log(selector);

  return (
    <>
      <div className="cart">
        {/* <i className={faShoppingCart}></i> */}
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
        <span className="cart-count">{selector}</span>
      </div>
    </>
  );
};

export default AddCart;
