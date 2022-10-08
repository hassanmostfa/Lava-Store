import React from 'react'
import {useStateValue} from "../StateProvider"
import {Link} from "react-router-dom"

function Header() {
    const [{cart}] = useStateValue();
    return (
    <div className='all-headers'>
        <div className="announcement">
            Super Deal!! Free Shopping in Orders over $50
        </div>
        <nav className='header'>
                {/* Logo Or Company Name */}
            <Link to="/" className='header-logo'>Lava Store</Link>
            {/* Search Bar */}
            <div className="header-search">
                <input type="text" className='header-searchInput' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header-nav">
                <Link to="/" className='header-homeLink'>Home</Link>
                <Link to="/about" className='header-aboutLink'>About Us</Link>
                <Link to="/contact" className='header-contactLink'>Contact Us</Link>
                <Link to="/checkout" className='header__link'>
                <div className="header__optionCart">
                    {/* Icon*/}
                    <i className="fa-solid fa-cart-shopping"></i>  
                    {/*  badge*/}
                    <span className='header__optionLineTwo header__cartCount'>
                        {cart?.length}
                    </span>
                </div>
            </Link>
            </div>
        </nav>
    </div>
    )
}

export default Header