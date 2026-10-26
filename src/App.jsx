import React from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import { selectCartCount } from "./CartSlice";

function Navbar() {
  const cartCount = useSelector(selectCartCount);
  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-icon">✿</span><span>Paradise<span className="brand-light">Nursery</span></span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav">Cart <span className="cart-count">{cartCount}</span></NavLink>
      </nav>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-kicker">A LITTLE MORE NATURE, EVERY DAY</p>
          <h1>Bring home<br /><em>your happy place.</em></h1>
          <p className="hero-description">Thoughtful houseplants for slower mornings, greener corners, and a home that feels alive.</p>
          <button className="button hero-button" onClick={() => navigate("/plants")}>Get Started <span aria-hidden="true">→</span></button>
          <div className="hero-note"><span>✦</span> Find a plant that feels like you</div>
        </div>
        <div className="hero-stamp"><span>GROW</span><strong>GOOD</strong><span>THINGS</span></div>
      </section>
      <section className="home-intro page-wrap">
        <div><p className="eyebrow">WELCOME TO PARADISE</p><h2>Small leaves.<br />Big difference.</h2></div>
        <div><p>From easy-care favourites to statement-making tropicals, discover plants that turn everyday spaces into your own little paradise.</p><Link className="inline-link" to="/plants">Explore the collection →</Link></div>
      </section>
      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="footer"><Link to="/" className="footer-brand">Paradise Nursery</Link><span>Make room for a little green.</span><span>© {new Date().getFullYear()} Paradise Nursery</span></footer>
    </>
  );
}