import React from 'react'
import Header from '../Home-Page/Header'

function About() {
    return (
    <div>
        <Header/>
        <div className="all-about">
            <h1 className='about-header'>About</h1>
        <div className="content">
                <img src="https://eg.jumia.is/cms/40-22/Banks/Valu/Valu-copy.gif" alt="" />
                <div className="info">
                    <h2>The First Egyptian E-Shopping Company</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quasi soluta facere sunt quisquam 
                        reiciendis aliquam sapiente repudiandae voluptas deleniti odit culpa laudantium nihil, sit
                        laborum suscipit libero tempora nam.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="company-info">
                <div className="box">
                    <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                        <h3>Our Company</h3>
                        <p>150,El_Salam Street , Cairo , Egypt</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                    <div className="text">
                        <h3>E-mail Us</h3>
                        <p>lava_store@gmail.com</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="text">
                        <h3>Call Us</h3>
                        <p>01092841138</p>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
    )
}

export default About