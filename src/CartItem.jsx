import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartItems, selectCartTotal } from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  return (
    <main className="page-wrap cart-page">
      <div className="section-heading cart-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>Your little indoor garden is taking shape.</p>
      </div>
      {items.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-cart-icon">🪴</span>
          <h2>Your cart is waiting to grow</h2>
          <p>Add a plant you love and it will appear here.</p>
          <Link className="button" to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <p>Unit price: ₹{item.price.toLocaleString("en-IN")}</p>
                  <button className="text-button remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove item</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label="Decrease quantity" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <strong className="line-total">₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Plants ({items.reduce((sum, item) => sum + item.quantity, 0)})</span><span>₹{total.toLocaleString("en-IN")}</span></div>
            <div className="summary-line"><span>Delivery</span><span>Calculated later</span></div>
            <div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
            <button className="button checkout-button" onClick={() => setCheckoutMessage("Coming Soon! Secure checkout will be available in a future update.")}>Checkout</button>
            {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          </aside>
        </div>
      )}
    </main>
  );
}