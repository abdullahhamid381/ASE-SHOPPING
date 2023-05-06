import React from 'react'
import './Categoryscss/Category.scss'
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

import Slider from '../Slider'
import CategoryFilter from './CategoryFilter'
import CategoryItems from './CategoryItems'


const Category = () => {
    const [value, setValue] = React.useState(2);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='products-parent'>
           <div className="products-background">
           <div>
                <Navbar />
            </div>
           
            <div>
                <Search />
            </div>
            {/* <div>
                <Slider/>
            </div>
            <div>
                <TopProducts />
            </div>
            <div>
                <Laptop />
            </div> */}



            {/* SIDEBAR SECRION */}



            <div className='grid-parent-products'>


                {/* PRODUCT FILTER SECTION */}
                <div>
                    <CategoryFilter/>
                </div>



               
                <div className='product-list-parent'>
                    <CategoryItems/>

                  

                </div>
            </div>
           </div>

        </div>
    )
}

export default Category