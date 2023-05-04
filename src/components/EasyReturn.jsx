import React from 'react'
import '../../Scss/EasyReturn.scss'
import eleven from '../assets/11.png'
import tewevle from '../assets/12.png'
import thirteen from '../assets/13.png'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
const EasyReturn = () => {
  return (
    <div className='easy-return-parent'>
      <div className="sub-parent">
        <div className='return-flex'>
          <span><img src={eleven}alt="" /></span>
          <span>Help Center</span>
        </div>
        <div className='return-flex'>
          <span><img src={tewevle} alt="" /></span>
          <span>Help Center</span>
        </div>
        <div className='return-flex'>
          <span><img src={thirteen} alt="" /></span>
          <span>Help Center</span>
        </div>
      </div>
    </div>
  )
}

export default EasyReturn