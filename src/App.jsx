import React from "react";



import Home from "./components/Home/Home";
import {Routes, Route } from "react-router";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
const App = () => {
  return (
    <section
    >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="category" element={<Category/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Routes>
    </section>
  );
};

export default App;
