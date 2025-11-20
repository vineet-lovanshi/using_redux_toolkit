import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem, updateQuantity } from "./redux/slice";
import { useNavigate } from "react-router";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearItem());
    alert("Order placed");
    navigate("/");
  };

  const manageQuantity = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartItems.length} items</span>
        </div>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <img src={item.thumbnail} alt="" />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>{item.brand}</p>
              </div>
            </div>

            <div className="item-actions">
              <div className="action-container">
                <input
                  type="number"
                  className="input-quantity"
                  value={item.quantity || 1}
                  onChange={(e) => manageQuantity(item.id, e.target.value)}
                />

                <div>
                  <span className="price">
                    ${Number(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="cart-footer">
          Total Price : ${totalPrice.toFixed(2)}
        </div>

        <button onClick={handlePlaceOrder} className="btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
