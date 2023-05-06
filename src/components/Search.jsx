import React from 'react'
import '../../Scss/Search.scss'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineQuestionCircle,AiOutlineShoppingCart,AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Search = () => {
    return (
        <div className='search-parent'>
            <div className='grid'>
                <div>
                    <h1>ASE SHOPPING</h1>
                </div>
                <div>
                    <input type="search" placeholder='Search products, brands and catageories' />
                    <button>Search</button>
                </div>
                <div className='grid-two'>
                    <div>
                        <span><AiOutlineUser/></span>
                        <span> Account</span>
                    </div>
                    <div>
                        <span><AiOutlineQuestionCircle /></span>
                        <span> Help</span>
                    </div>
                    <Link to='cart'>
                    <div>
                     
                       <span><AiOutlineShoppingCart /></span>
                        <span> Cart</span>
                      
                    </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Search