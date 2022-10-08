import React from 'react'
import Header from './Header'
import Product from './Product';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';

function ElectronicsCat() {
    return (
    <div>
        <Header/>
        <Slider/>
        <div className="electronics">
        <div className="categories">
            <button><NavLink to="/">All</NavLink></button>
            <button><NavLink to="/ele-cat">ELectronics</NavLink></button>
            <button><NavLink to="/clo-cat">Clothes</NavLink></button>
            <button><NavLink to="/per-cat">Perfumes</NavLink></button>
            <button><NavLink to="/spo-cat">Sporting Goods</NavLink></button>
        </div>
            <div className="home-row">
                <Product
                    id= "1"
                    title= "SHARE THIS PRODUCTLenovo Ideapad Gaming 3 Laptop ."
                    price= {19000}
                    category = "Electronics"
                    rating= {5}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/18/468972/1.jpg?3384"
                />
                <Product
                    id= "2"
                    title= "Lenovo IdeaPad 3 15ADA05 Laptop – AMD Athlon Silver 3050U ."
                    price= {7000}
                    category = "Electronics"
                    rating= {3}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/468972/1.jpg?5438"
                />
                
            </div>
            <div className="home-row">
            <Product
                id= "6"
                title= "LG 75 Inches UHD 4K Smart TV, Active HDR, WebOS Operating System"
                price= {23000}
                category = "Electronics"
                rating= {5}
                image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/70/110672/1.jpg?3013"
                />
            </div>
        </div>
        
    </div>
    )
}

export default ElectronicsCat ;