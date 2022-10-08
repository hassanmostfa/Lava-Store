import React from 'react'
import logo from "../assets/My logo .png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="main">
            <div className="footer-info">
                <div className="footer__logo">
                    <img src={logo} alt="" />
                </div>
                    <h2>We Are Social</h2>
                    <ul>
                        <li ><Link><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link><i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link><i className="fa-brands fa-youtube"></i></Link></li>
                    </ul>
            </div>
            <div className='footer'>
        <div className="links">
            <h3>Get to Know Us</h3>
            <ul>
                <li><a href="https://www.amazon.eg/-/en/b?node=22624915031">About</a></li>
                <li><a href="http://amazon.jobs/">Careers</a></li>
                <li><a href="https://www.amazon.science/">Science</a></li>
            </ul>
        </div>
        <div className="links">
            <h3>Shop with Us</h3>
            <ul>
                <li><a href="https://www.amazon.eg/-/en/gp/css/homepage.html?ref_=footer_ya">Your Account</a></li>
                <li><a href="https://www.amazon.eg/-/en/gp/css/order-history?ref_=footer_yo">Your Orders</a></li>
                <li><a href="https://www.amazon.science/">Your Addresses</a></li>
                <li><a href="https://www.amazon.science/">Your Lists</a></li>
            </ul>
        </div>
        <div className="links">
            <h3>Make Money with Us</h3>
            <ul>
                <li><a href="https://www.amazon.eg/-/en/gp/css/homepage.html?ref_=footer_ya">Advertise Your Products</a></li>
                <li><a href="https://www.amazon.eg/-/en/gp/css/order-history?ref_=footer_yo">Sell on our Site</a></li>
                <li><a href="https://www.amazon.science/">Fulfillment by Us</a></li>
            </ul>
        </div>
        <div className="links">
            <h3 className='last-head'>Let Us Help You</h3>
            <ul>
                <li><a href="https://www.amazon.eg/-/en/gp/css/homepage.html?ref_=footer_ya">Help</a></li>
                <li><a href="https://www.amazon.eg/-/en/gp/css/order-history?ref_=footer_yo">Shipping & Delivery</a></li>
                <li><a href="https://www.amazon.science/">Returns & Replacements</a></li>
                <li><a href="https://www.amazon.science/">Lava App Download</a></li>
            </ul>
        </div>
        </div>
    </div>
    )
}

export default Footer