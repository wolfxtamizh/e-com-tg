import React from "react";
import "./CSS/GreetingMsg.css";
import green_icon from "../Components/Assests/greenTick.png";

export default function GreetingMsg(){
    
    return(
        <div className="container">
            <div className="img">
              <img src={green_icon} alt="" /> <h1>your order has been placed successfully</h1>
            </div>

            <div className="box">
            <h2>Thank You for Your Purchasing</h2>
            <h2>Visit Again!</h2>
            </div>
        </div>
    )
}