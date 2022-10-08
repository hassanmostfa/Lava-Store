import React from 'react'
import Header from '../Home-Page/Header'

function Contact() {
    return (
    <div>
        <Header/>
            <h1 className='contact-header'>Contact Us</h1>
        <div className="all-contact">
            <div className="contact-form">
                <form >
                    <input type="text"  placeholder='Your Name' className='main-input'/>
                    <input type="email"  placeholder='Your Email' className='main-input'/>
                    <textarea placeholder='Your Message' className='main-input'></textarea>
                    <button className='contact-btn'>Send Message</button>
                </form>
                
            </div>
        </div>
    </div>
    )
}

export default Contact