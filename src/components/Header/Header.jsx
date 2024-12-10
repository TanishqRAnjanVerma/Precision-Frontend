import React from 'react'
import '../Header/header.css'
import { GoArrowDownRight } from "react-icons/go";
import { asset } from '../../assets/assets'

const Header = () => {
    return (

        <div className="home-banner">
            <img className="home-img" src={asset.pre1} alt="" />
            <div className="text-1" data-aos="fade-up" >

                <h3 className='heading' >Transform Your Home,</h3>
                <h3 className='heading'>Transform Your Life</h3>
                <button className='learn'>View Products <GoArrowDownRight /></button>
            </div>

            <div className="area" >
                <ul className="circles">
                    <li></li> <li></li><li></li><li></li><li></li><li></li><li></li><li></li> <li></li><li></li>
                </ul>
            </div >
        </div>
    )
}

export default Header
