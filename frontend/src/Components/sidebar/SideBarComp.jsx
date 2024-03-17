import React from 'react';
import sidestyle from './style.module.css'
import { RxDashboard } from 'react-icons/rx'
import { CgProfile } from 'react-icons/cg'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import {  BsStickies } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrCompliance } from 'react-icons/gr';

function SideBarComp() {
  return (
    <>
      <div style={{userSelect : 'none'}} className={`${sidestyle.mysidebarMain} px-2`}>
        <img src="./images/vlogo.jpeg" alt="No Profile" className={`${sidestyle.logimg}`} />
        <div className={`mt-3 ${sidestyle.sidemenu} sidemenu`}>
          <NavLink to='/dashboard' className={`text-center mb-4 d-flex`}>
            <span className='me-5'><RxDashboard className='fs-4' /></span>
            <span>DASHBOARD</span>
          </NavLink>
          <NavLink to={'/products'} className={`text-center mb-4 d-flex`}>
            <span className='me-5'><MdProductionQuantityLimits className='fs-4'/></span>
            <span>PRODUCTS</span>
          </NavLink>
          <NavLink to={'/profile'} className={`text-center mb-4 d-flex`}>
            <span className='me-5'><CgProfile className='fs-4' /></span>
            <span>PROFILE</span>
          </NavLink>
          <NavLink to={'/productcart'} className={`text-center mb-4 d-flex`}>
            <span className='me-5'><AiOutlineShoppingCart className='fs-4' /></span>
            <span>YOUR CART</span>
          </NavLink>
          <NavLink to={'/order'} className={`text-center mb-4 d-flex`}>
            <span className='me-5'><BsStickies className='fs-4' /></span>
            <span>ORDER</span>
          </NavLink>
          <NavLink to={'/completedorder'} className={`text-center mb-4 d-flex`}>
            <span className='me-5'><GrCompliance className='fs-4' /></span>
            <span>COMPLETED ORDER</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default SideBarComp;
