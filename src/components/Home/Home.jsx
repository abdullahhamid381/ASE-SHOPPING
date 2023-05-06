import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search'
import MegaMenu from '../MegaMenu'
import TopProducts from '../TopProducts'
import FlashSale from '../Reuseable/FlashSale'
import Laptop from '../Laptop'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>

            <Navbar />
            <Search />
           <MegaMenu />
              <Link to='products'>
                <TopProducts />
            </Link>
            <Link to='products'>
                <FlashSale />
            </Link>
            <Link to='products'>
                <Laptop />
            </Link>

        </div>
    )
}

export default Home