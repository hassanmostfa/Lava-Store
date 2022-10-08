import React from 'react'
import Header from './Header'
import Product from './Product';
import Slider from './Slider';
import { NavLink } from 'react-router-dom';


function PerfumesCat() {
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
        <div className="perfumes">
            <div className="home-row">
                <Product
                    id= "10"
                    title= "My Way Selection - EDP - For Men - 65 Ml."
                    price= {92}
                    category = "Perfumes"
                    rating= {5}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/550352/1.jpg?4225"
                />
                <Product
                    id= "11"
                    title= "Zak Intense - Deep Blue - EDP - 150ml."
                    price= {250}
                    category = "Perfumes"
                    rating= {5}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/884252/1.jpg?9766"
                />
            </div>
            <div className="home-row">
            <Product
                    id= "12"
                    title= "My Way Boom - EDP - For Men - 90ml."
                    price= {250}
                    category = "Perfumes"
                    rating= {4}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/282861/1.jpg?4824"
                />
            </div>
        </div>
        
    </div>
    )
}

export default PerfumesCat ;