import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Product from './Product'
import Slider from './Slider'
function Home() {

    return (
    <div className='home'>
        <Header/>
        <Slider/>
        <div className="categories">
            <button><NavLink to="">All</NavLink></button>
            <button><NavLink to="/ele-cat">ELectronics</NavLink></button>
            <button><NavLink to="/clo-cat">Clothes</NavLink></button>
            <button><NavLink to="/per-cat">Perfumes</NavLink></button>
            <button><NavLink to="/spo-cat">Sporting Goods</NavLink></button>
        </div>
        <div className="all-home-rows">
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
                <Product
                    id= "5"
                    title= "Waikiki Command Collar Short Sleeve Printed Cotton Baby Boy Shirt"
                    price= {170}
                    category = "Clothes"
                    rating= {2}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/049172/1.jpg?7283"
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
                <Product
                    id= "12"
                    title= "My Way Boom - EDP - For Men - 90ml."
                    price= {250}
                    category = "Perfumes"
                    rating= {4}
                    image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/282861/1.jpg?4824"
                />
            </div>
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

export default Home