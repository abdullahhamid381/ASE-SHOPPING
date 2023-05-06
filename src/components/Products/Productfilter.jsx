import React from 'react'
import { brands, size, gender, sellerscore } from '../../../Data'
import './ProductsScss/ProductsFilter.scss'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Productfilter = () => {
    return (
        <div className='filter-parent'>
            <div className='brands'>
                <h4>BRANDS</h4>

                <div className='brands-name'>
                    {
                        brands.map((brandsname) => {
                            return (
                                <div className='brands-list'>
                                    <input type="checkbox" />
                                    <span>{brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div>
                        <div className="range">
                            <Box width={300}>

                                <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                            </Box>
                        </div>
                        <input type="number" />
                    </div>
                </div>
            </div>
            <div className='brands'>
                <h4>SIZE</h4>

                <div>
                    {
                        size.map((brandsname) => {
                            return (
                                <div>
                                    <input type="checkbox" />
                                    <span>{brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div className="range">
                        <Box width={300}>

                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                        </Box>
                    </div>
                    <input type="number" />
                </div>
            </div>
            <div className='brands'>
                <h4>GENDER</h4>

                <div>
                    {
                        gender.map((brandsname) => {
                            return (
                                <div>
                                    <input type="checkbox" />
                                    <span>{brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div className="range">
                        <Box width={300}>

                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                        </Box>
                    </div>
                    <input type="number" />
                </div>
            </div>
            <div className='brands'>
                <h4>SELLER SCORE</h4>

                <div>
                    {
                        sellerscore.map((brandsname) => {
                            return (
                                <div>
                                    <input type="radio" />
                                    <span>{brandsname.span}</span>
                                </div>
                            )
                        })
                    }
                    <div className="range">
                        <Box width={300}>

                            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" style={{ width: '50%' }} />
                        </Box>
                    </div>
                    <input type="number" />
                </div>
            </div>
        </div>
    )
}

export default Productfilter