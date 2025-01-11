import React, { useContext } from "react";
import "./CSS/ShopCatageory.css";
import {ShopContext} from "../Contexts/ShopContext";
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import Item from "../Components/Item/Item"

function ShopCatageory(props){

    const {all_product} = useContext(ShopContext);

    return(
        <div className="shop-category">
            <img src={props.banner} alt="" className="banner"/>

            <div className="shop-catageory-indexsort">
                <p className="one">
                    <span className="one">Showing 1-12</span> out of 36 Products
                </p>

                <div className="shop-catageory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>

            <div className="shop-categoey-products">
                {all_product.map((item,i)=>{
                    if (props.catageory===item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    
                })}
            </div>

            <div className="load-more">
                Explore More
            </div>
        </div>
    )
}
export default ShopCatageory;