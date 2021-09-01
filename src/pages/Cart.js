import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import "./Cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0.00)
  useEffect(() => {
    let totalAmount = 0.00;
    cart.forEach((item) => {
      totalAmount += item.price;
    });
    console.log(Number(totalAmount));
    setTotalAmount(totalAmount);
  }, [cart]);
  const dispatch = useDispatch();
  const removeProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <div className="cart">
        <div className="order_summary">
          <p id="ptag"> Order Summary </p>
          <p id="h4tag">Total Items : {cart.length} </p>
          <strong>
            {" "}
            Total Amount : ${totalAmount ? totalAmount : "0.00"}{" "}
          </strong>
        </div>
      </div>
      <section className="shoe">
        {cart.map((product) => {
          const { id, name, price, image } = product;
          return (
            <article key={id} id="article">
              <img src={image} alt="" id="photo" />
              <div className="article__details">
                <h2>{name}</h2>
                <h5>{price}</h5>
                <button onClick={() => removeProduct(product)}>
                  Remove From Cart{" "}
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Cart;
