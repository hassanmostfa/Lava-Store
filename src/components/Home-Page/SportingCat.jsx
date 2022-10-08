import React from 'react'
import Header from './Header'
import Product from './Product';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';


function SportingCat() {
    return (
    <div>
        <Header/>
        <Slider/>
        <div className="categories">
            <button><NavLink to="/">All</NavLink></button>
            <button><NavLink to="/ele-cat">ELectronics</NavLink></button>
            <button><NavLink to="/clo-cat">Clothes</NavLink></button>
            <button><NavLink to="/per-cat">Perfumes</NavLink></button>
            <button><NavLink to="/spo-cat">Sporting Goods</NavLink></button>
        </div>
        <div className="Sporting">
        <div className="home-row">
                <Product
                    id= "13"
                    title= "Adidas REAL MADRID HOME MINI FOOTBALL UNISEX ."
                    price= {390}
                    category = "Sporting"
                    rating= {2}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/368282/1.jpg?9668"
                />
                <Product
                    id= "14"
                    title= "Adult Roller Skates Brakes Pads Inline Roller Skate Shoes."
                    price= {288}
                    category = "Sporting"
                    rating= {1}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/45/721462/1.jpg?8792"
                />
            </div>
        </div>
    </div>
        
    )
}

export default SportingCat ;