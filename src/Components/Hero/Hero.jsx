import React from "react";
import "./Hero.css";
import hand_icon from "../Assests/hand_icon.png";
import arrow_icon from "../Assests/arrow.png";
import hero_img from "../Assests/hero_image.png"

function Hero(){
    return(
        <div className="hero">
            <div className="hero-left-hand">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>

            <div className="hero-right-hand">
                <img src={hero_img} alt=""/>
            </div>
        </div>
    )
}

export default Hero;