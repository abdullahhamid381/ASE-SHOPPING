import React from 'react'
import './ProductsScss/Product.scss'
import TopProducts from '../TopProducts'
import Navbar from '../Navbar/Navbar'
import Search from '../Search'
import Laptop from '../Laptop'
import { brands, gender, sellerscore, size } from '../../../Data'
import mobile from '../../assets/29.jpg'
// MATERIAL UI SECTION IMPORTING

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Productfilter from './Productfilter'
import ProductItems from './ProductItems'


const Products = () => {
    const [value, setValue] = React.useState(2);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='products-parent'>
            <div>
                <Navbar />
            </div>
            <div>
                <Search />
            </div>
            <div>
                <TopProducts />
            </div>
            <div>
                <Laptop />
            </div>



            {/* SIDEBAR SECRION */}



            <div className='grid-parent-products'>


                {/* PRODUCT FILTER SECTION */}
                <div>
                    <Productfilter/>
                </div>



               
                <div className='product-list-parent'>
                    <ProductItems/>

                  

                </div>
            </div>

        </div>
    )
}

export default Products