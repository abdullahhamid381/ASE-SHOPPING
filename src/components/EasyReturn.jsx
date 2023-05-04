import React from 'react'
import '../../Scss/EasyReturn.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
const EasyReturn = () => {
  return (
    <div className='easy-return-parent'>
      <div className="sub-parent">
        <div className='return-flex'>
          <span><img src="./images/11.png" alt="" /></span>
          <span>Help Center</span>
        </div>
        <div className='return-flex'>
          <span><img src="./images/12.png" alt="" /></span>
          <span>Help Center</span>
        </div>
        <div className='return-flex'>
          <span><img src="./images/13.png" alt="" /></span>
          <span>Help Center</span>
        </div>
      </div>
    </div>
  )
}

export default EasyReturn