import React from "react";
import "./BreadCramps.css"
import arrow_icon from "../Assests/arrow.svg";

export default function BreadCramps(props){

    const {product} = props;

    return(
        <div className="bread-cramps">
            HOME <img src={arrow_icon} alt="" /> 
            SHOP <img src={arrow_icon} alt="" /> 
            {product.category} <img src={arrow_icon} alt="" /> 
            {product.name} 
        </div>
    )
}