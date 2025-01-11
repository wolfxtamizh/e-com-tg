import React, { useContext} from "react";
import "./CartItem.css";
import remove_icon from "../Assests/cart_cross_icon.png";
import { ShopContext } from "../../Contexts/ShopContext";
import { useNavigate } from "react-router-dom";

export default function CartItem(props){

    const {all_product,cartItems,removeCart,getTotalCartAmount} = useContext(ShopContext);
   
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
    navigate("/billing"); // Navigates to the BillingDetails page
    };

    return(
        <div className="cart-item">
            <div className="cart-item-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((i)=>{
                if (cartItems[i.id]>0) {
                    return <div>
                            <div className="cart-item-format cart-item-format-main">
                            <img src={i.image} alt=""  className="carticon-product-icon"/>
                            <p className="para">{i.name}</p>
                            <p>${i.new_price}</p>
                            <button className="cart-item-quantity">{cartItems[i.id]}</button>
                            <p>${i.new_price*cartItems[i.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=>{removeCart(i.id)}} className="remove-cart-icon"/>
                            </div>
                            <hr />
                    </div>
            }
            return null;
            })}

            <div className="cart-items-down">
                <div className="cart-item-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-item-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
                </div>

                <div className="cart-item-promocode">
                    <p>If you have a Promo code, Enter it here</p>

                    <div className="cartitem-promobox">
                        <input type="text" placeholder="Enter a promo code"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}