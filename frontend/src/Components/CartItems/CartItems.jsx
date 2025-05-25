import React from "react";
import "./CartItems.css";
import remove_icon from "../Assets/icons/cart_cross_icon.png";
import b1_img from "../Assets/products/bag_1.png";

const CartItems = () => {
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="cartitems-format cartitems-format-main">
          <img src={b1_img} alt="" className="carticon-product-icon" />
          <p>cart item name</p>
          <p>$ new price</p>
          <button className="cartitems-quantity">1</button>
          <p>$ total</p>
          <img className="cartitems-remove-icon" src={remove_icon} alt="" />
        </div>
        <hr />
      </div>

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>$ total amount</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>$ total cart amount</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
