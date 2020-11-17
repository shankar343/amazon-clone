import React from 'react'
import '../Assets/CSS/Product.css'
import { useStateValue } from '../Provider/StateProvider'


function Product(props) {
    const {id,title,price,rating,image} = props.json
    const[state, dispatch] = useStateValue()
    console.log(state.basket)
    const addToBasket =()=>{
        dispatch({
            type : 'ADD_To_BASKET',
            item : {
                id : id,
                title : title,
                price : price,
                rating : rating,
                image : image
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                 {Array(rating).fill().map((_, i)=>(
                     <p>⭐</p>
                 ))}
                </div>
            </div>
            
            <img src={image} alt="" />

            <button onClick={addToBasket} >Add To Cart</button>
        </div>
    )
}

export default Product
