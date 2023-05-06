import React from "react";
import "./Cartscss/Cart.scss";
import Navbar from "../Navbar/Navbar";
import { BsTrash } from 'react-icons/bs';
import { MdMinimize } from 'react-icons/md'
import { HiPlus } from 'react-icons/hi'
import nokia from "../../assets/1.jpg";
import Search from "../Search";
const Cart = () => {
  return (
    <div className="cart-parent">
      <div>
        <Navbar />
      </div>
      <div>
        {/* <Search/> */}
      </div>
      <div className="cart-product">

        <div className="summar-product-grid">

          <div className="cart-product-detail-grid-background">
            <div className="number">
              <h1>Cart (0)</h1>
            </div>
            <div className="cart-product-detail-grid">
              <div className="title-grid">
                <div>

                  <img src={nokia} alt="" />
                  <div className="remove">
                    <BsTrash style={{color:'#F68B1E'}}/>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="title-name">
                  <h4>
                    Nokia 105 Africa Edition - 1.77" - Wireless FM Radio - 800mAh -
                    Black
                  </h4>
                  <span className="seller">Seller: Samsung Ecco World - Ac</span>
                  <br />
                  <span className="left">Few Unit Left</span>
                </div>
              </div>
              <div className="price-section" style={{marginTop:'10px'}}>
                <h4 className="price" style={{fontSize:'18px'}}>Pkr 1,899</h4>
                <div className="discount">
                  <del className="old-price" style={{fontSize:'14px'}}>Pkr 2,999</del>
                  <span className="off" style={{fontSize:'14px',padding:'5px 10px',margin:'0 5px',color:'#F68B1E'}} >-37%</span>
                </div>
                <div className="increment" style={{display:'flex',gap:'20px',marginTop:'20px'}}>
                  <span><MdMinimize /></span>
                  <span>0</span>
                  <span style={{paddingTop:'5px'}}><HiPlus /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
