import React, { useContext, useState} from "react";
import "./CSS/BillingDetails.css";
import { ShopContext } from "../Contexts/ShopContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BillingDetails(){

    const {all_product,cartItems,getTotalCartAmount} = useContext(ShopContext);
    
    const navigate = useNavigate();
    const handleToProceed = () =>{
        navigate("/greeting")
    };
    
    
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8888/api/user/save', inputs);
        console.log(inputs);
    }

    const hanleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return(
        <div className="billing-container">
            
            <div className="billing-box">
                <h2>Billing Details</h2>
                <form onSubmit={handleSubmit}>
                <label>First Name : <input type="text"  name="firstName" onChange={hanleChange}/> </label>
                <label>Last Name : <input type="text"  name="lastName" onChange={hanleChange}/> </label>
                <label>Address : <input type="text"  name="address" onChange={hanleChange}/> </label>
                <label>State : <input type="text"  name="state" onChange={hanleChange} /> </label>
                <label>PIN Code : <input type="number"  name="pincode" onChange={hanleChange}/> </label>
                <label>Phone No : <input type="tel" name="phoneNo"  onChange={hanleChange}/> </label>
                <label>E-mail : <input type="email" name="email" onChange={hanleChange}/> </label>

                <button>CONTINUE TO ORDER</button>
                </form>
            </div>

            <div className="cart-item1">
                <h2>Cart Totals</h2>
                        {all_product.map((i)=>{
                            if (cartItems[i.id]>0) {
                                return <div>
                                        <div className="cart-item-total-item1">
                                        <p>Product</p>
                                        <p className="para">{i.name}</p>
                                        </div>
                                        <hr />
                                        <div className="cart-item-total-item1">
                                        <p>Quantity</p>
                                        <button>{cartItems[i.id]}</button>
                                        </div>
                                        <hr />
                                </div>
                        }
                        return null;
                    })}
                                    <div className="cart-item-total-item1">
                                        <p>Subtotal</p>
                                        <p>${getTotalCartAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className="cart-item-total-item1">
                                        <p>Shipping fee</p>
                                        <p>Free</p>
                                    </div>
                                    <hr />
                                    <div className="cart-item-total-item1">
                                        <h3>Total</h3>
                                        <h3>${getTotalCartAmount()}</h3>
                                    </div>

                                    <div id="payment">
                                    <h3>Payment Option</h3>
                                    <label><input type="checkbox" name="paymentOption" value="cashOnDelivery"/> Cash on Delivary</label>
                                    
                                    </div>
                                    <button id="order" type="submit" onClick={handleToProceed}>PLACE  ORDER</button>

                                </div>
                             
            
        </div>
    )
}