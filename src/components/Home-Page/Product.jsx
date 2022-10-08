import React from 'react'
import { useStateValue } from '../StateProvider'

function Product({id,title,price,category,rating,image}) {
    const [{} , dispatch] = useStateValue();
    const addToCart = () =>{
        dispatch({
            type: "ADD_TO_CART",
            item:{
                id : id,
                title : title,
                price : price,
                category : category,
                rating : rating,
                image : image ,
            }
        })
    }
    return (
        
    <div className='product'>
        <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <strong>Price : </strong>
                <small>LE</small>
                <strong>{price}</strong>
            </p>
                <div className="product-rating">
                {Array(rating)
                    .fill()
                    .map((_) => {
                        return(
                            <p><i className="fa-solid fa-star"></i></p>
                        )
                    })}
            </div>
            
        </div>
        <img src={image} alt="" />
        <button onClick={addToCart}>Add To Cart</button>
    </div>
    )
}

export default Product