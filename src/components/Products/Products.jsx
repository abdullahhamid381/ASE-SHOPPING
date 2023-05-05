import React from 'react'
import './ProductsScss/Product.scss'
import TopProducts from '../../components/TopProducts'
import Navbar from '../Navbar/Navbar'
import Search from '../Search'
import Laptop from '../Laptop'
import { brands } from '../../../Data'
const Products = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Search />
            </div>
            <div>
                <TopProducts/>
            </div>
            <div>
                <Laptop/>
            </div>
<div>
    <input type="search" placeholder='Search' />
  <div>
    {
        brands.map((brandsname)=>{
            return(
                <div>
                    <input type="checkbox" />
                    <span>{brandsname.span}</span>
                </div>
            )
        })
    }
    <input type="range" />
    
  </div>
</div>
        </div>
    )
}

export default Products