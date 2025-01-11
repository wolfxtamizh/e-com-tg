import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props){
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" className="images" onClick={window.scrollTo(0,0)}/></Link>
            <p>{props.name}</p>

            <div className="item-prices">
                <div className="item-new-price">${props.new_price}</div>
                <div className="item-old-price">${props.old_price}</div>
            </div>
        </div>
    )
}
export default Item;