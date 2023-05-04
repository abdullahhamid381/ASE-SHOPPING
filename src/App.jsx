import React from "react";

import Navbar from "./components/Navbar/Navbar";
import FlashSale from "./components/Reuseable/FlashSale";
import Search from "./components/Search";
import TopProducts from './components/TopProducts'
import Laptop from './components/Laptop'
import MegaMenu from './components/MegaMenu'
const App = () => {
  return (
    <section
    >
      <Navbar />

      <Search/>
      <MegaMenu/>
      <TopProducts/>
   <FlashSale/>
   <Laptop/>
    </section>
  );
};

export default App;
