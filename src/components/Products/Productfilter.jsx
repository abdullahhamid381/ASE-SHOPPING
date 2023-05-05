import React from 'react'
import { brands,size, gender,sellerscore } from '../../../Data'

const Productfilter = () => {
  return (
    <div>
                    <div className='brands'>
                        <h4>BRANDS</h4>
                        <input type="search" placeholder='Search' />
                        <div>
                            {
                                brands.map((brandsname) => {
                                    return (
                                        <div>
                                            <input type="checkbox" />
                                            <span>{brandsname.span}</span>
                                        </div>
                                    )
                                })
                            }
                            <input type="range" />
                            <input type="number" />
                        </div>
                    </div>
                    <div className='brands'>
                        <span>SIZE</span>
                        <input type="search" placeholder='Search' />
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

                        </div>
                    </div>
                    <div className='brands'>
                        <span>GENDER</span>
                        <input type="search" placeholder='Search' />
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

                        </div>
                    </div>
                    <div className='sellerscore'>
                        <span>SELLER SCORE</span>
                        <input type="search" placeholder='Search' />
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

                        </div>
                    </div>
                </div>
  )
}

export default Productfilter