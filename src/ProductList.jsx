import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "./CartSlice";
import plants from "./PlantData";

const categories = ["Easy Care", "Statement Plants", "Sun Lovers"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-wrap products-page">
      <div className="section-heading">
        <p className="eyebrow">FIND YOUR GREEN</p>
        <h1>Plants for every space</h1>
        <p>Meet your next leafy companion. Pick a plant and make room for green.</p>
      </div>
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-title"><h2>{category}</h2><span>{plants.filter((p) => p.category === category).length} plants</span></div>
          <div className="plant-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const isAdded = addedIds.has(plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="plant-card-content">
                    <span className="plant-tag">{plant.category}</span>
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <div className="plant-card-bottom">
                      <strong>₹{plant.price.toLocaleString("en-IN")}</strong>
                      <button className="button button-small" disabled={isAdded} onClick={() => dispatch(addToCart(plant))}>
                        {isAdded ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}