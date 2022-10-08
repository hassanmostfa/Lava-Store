import React from 'react'
import Header from './Header'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from "../StateProvider"
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';

function Checkout() {
    const [{cart}] = useStateValue() ;
    return (
    <div>
        <Header/>
        <div className="checkout">
            <div className="checkout-left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1471173_5003474_1500x200_2X.jpg" alt="" className='checkout-ad' />
                {cart?.length === 0 ?(
                    <div className='empty-cart'>
                        <img src="https://www.jumia.com.eg/assets_he/images/cart.668e6453.svg" alt="" />
                        <h2>Your Shopping Cart is empty </h2>
                        <p>Browse our categories and discover our best deals!</p>
                        <button><Link to="/">Start Shopping</Link></button>
                        
                    </div>
                    ) : (
                    <div>
                        <h2 className='checkout-title'>Your Shopping Cart </h2>
                        {cart.map( item => {
                                return(
                                    <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                    />
                            )  
                        })}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
            <div className="checkout__right">
                <h1><Subtotal/></h1>
                
            </div>
        )}
        </div>
        
    </div>
    )
}

export default Checkout