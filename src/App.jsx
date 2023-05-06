import React from "react";


import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import {Routes, Route } from "react-router";
const App = () => {
  return (
    <section
    >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="products" element={<Products/>}/>
    </Routes>
    </section>
  );
};

export default App;
