import React from "react";

export default function AboutUs() {
  return (
    <section className="about-section page-wrap">
      <p className="eyebrow">OUR STORY</p>
      <h1>Growing happier homes, one plant at a time.</h1>
      <p>
        Paradise Nursery believes every home deserves a little more green.
        We help plant lovers discover beautiful, welcoming houseplants and
        make it easier to care for them, whether they are beginners or
        experienced indoor gardeners.
      </p>
      <div className="about-values">
        <article><span>🌿</span><h3>Thoughtfully selected</h3><p>Plants chosen to bring natural beauty into everyday spaces.</p></article>
        <article><span>🪴</span><h3>Beginner friendly</h3><p>Simple choices and helpful guidance for your plant journey.</p></article>
        <article><span>💚</span><h3>Care that grows</h3><p>We want your indoor garden to thrive long after delivery.</p></article>
      </div>
    </section>
  );
}