import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_icon_dull from "../Assests/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";

export default function ProductDisplay(props){

    const {product} = props;
    const {addToCart} = useContext (ShopContext);


    return(
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" className="main-img-small"/>
                    <img src={product.image} alt="" className="main-img-small"/>
                    <img src={product.image} alt="" className="main-img-small"/>
                    <img src={product.image} alt="" className="main-img-small"/>
                </div>

                <div className="product-display-main-img">
                    <img src={product.image} alt="" className="main-img"/>
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>

                <div className="product-dispaly-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon_dull} alt="" />

                    <p>(1,205)</p>
                </div>

                <div className="product-display-prices">
                    <div className="product-display-new-prices">${product.new_price}</div>
                    <div className="product-display-old-prices">${product.old_price}</div>
                </div>

                <div className="product-display-description">
                    A Lightweight, usally knighted pullover shirt,
                    breathable jersey which is an excellent choice for the warmest day. .
                </div>

                <div className="product-display-size">
                    <h1>Select Size</h1>

                    <div className="product-display-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <div className="product-display-category"><span>Category : </span> Women, T-shirt, Crops </div>
                <div className="product-display-category"><span>Tags : </span>Modern, Latest </div>
            </div>
        </div>
    )
}