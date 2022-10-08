import React from 'react'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({id,title,price,category,rating,image}) {
    const [{ } , dispatch] = useStateValue();
    const removeFromCart = ()=>{
        dispatch({
            type : "REMOVE_FROM_CART",
            id:id
        })
    }
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <strong>Price : </strong>
                <strong>{price} </strong>
                <small>LE</small>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_) => {
                        return(
                            <p><i className="fa-solid fa-star"></i></p>
                        )
                    })}
            </div>
            <button onClick={removeFromCart}>Remove From Basket</button>
        </div>
    </div>
)
}

export default CheckoutProduct