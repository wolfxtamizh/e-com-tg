import React from "react";
import "./Offers.css";
import exclusive_image from "../Assests/exclusive_image.png";

function Offers (){
    return(
        <div className="offer">
            <div className="offer-left-hand">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offer-right-hand">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
export default Offers;