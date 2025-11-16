import React, { useEffect } from "react";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import AddCart from "./AddCart";
import { addItem, removeItem } from "./redux/slice";
import { fetchProduct } from "./redux/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  const cartSelector = useSelector((state) => state.cart.items);
  // console.log(cartSelector);
  // console.log(productSelector);

  return (
    <>
      <section className="product-container">
        <div className="grid">
          {productSelector.length &&
            productSelector.map((item, index) => (
              <div className="card" key={item.id}>
                <img src={item.thumbnail} alt="" />
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="brand">{item.brand}</div>
                  <div className="price">$ {item.price}</div>
                  <div className="rating">{item.rating}</div>

                  {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="btn remove-cart"
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="btn"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Product;
