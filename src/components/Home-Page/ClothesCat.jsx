import React from 'react'
import Header from './Header'
import Product from './Product';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';


function ClothesCat() {
    return (
    <div>
        <Header/>
        <Slider/>
        <div className="clothes">
        <div className="categories">
            <button><NavLink to="/">All</NavLink></button>
            <button><NavLink to="/ele-cat">ELectronics</NavLink></button>
            <button><NavLink to="/clo-cat">Clothes</NavLink></button>
            <button><NavLink to="/per-cat">Perfumes</NavLink></button>
            <button><NavLink to="/spo-cat">Sporting Goods</NavLink></button>
        </div>
            <div className="home-row">
                <Product
                    id= "3"
                    title= "Jeans For Men Blue Black The Best For You"
                    price= {300}
                    category = "Clothes"
                    rating= {4}
                    image="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/060662/1.jpg?5694"
                />
                <Product
                    id= "4"
                    title= "Men's Winter Stretch Melton Comfortable 1018/Gray"
                    price= {250}
                    category = "Clothes"
                    rating= {5}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/640403/1.jpg?1864"
                />
                
            </div>
            <div className="home-row">
            <Product
                    id= "5"
                    title= "Waikiki Command Collar Short Sleeve Printed Cotton Baby Boy Shirt"
                    price= {170}
                    category = "Clothes"
                    rating= {2}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/049172/1.jpg?7283"
                />
                
            </div>
        </div>
        
    </div>
    )
}

export default ClothesCat ;