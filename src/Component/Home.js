import React from 'react'
import  '../Assets/CSS/Home.css'
import Product from './Product'
import product_list from '../Assets/JSON/product_list.json'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://i.gadgets360cdn.com/large/best_movies_on_amazon_prime_august_2020_1597408336879.jpg"
                 alt="" height="500" />
            </div>

            <div className="home__row">
                <Product json={product_list[0]} />
                <Product json={product_list[1]} />
            </div>
            <div className="home__row">
            <Product json={product_list[2]} />
            <Product json={product_list[3]} />
            <Product json={product_list[4]} />
            </div>
            <div className="home__row">
            <Product json={product_list[5]} />
            </div>
        </div>
    )
}

export default Home
