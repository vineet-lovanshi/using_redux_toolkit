import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "./redux/slice";
import { useNavigate } from "react-router";

const CartPage = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(selector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearItem());
    alert("Order placed");
    navigate("/");
  };
  return (
    <div>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartSelector.length} items</span>
        </div>
        {cartSelector.length > 0
          ? cartSelector.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-info">
                  <img src={item.thumbnail} alt="" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="price">$ {item.price}</span>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          : null}
        <div className="cart-footer">
          Total Price : $
          {cartSelector.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </div>
        <button onClick={handlePlaceOrder} className="btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
