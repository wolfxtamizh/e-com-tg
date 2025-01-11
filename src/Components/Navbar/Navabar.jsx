import React, { useContext, useRef, useState } from "react";
import "./Navbar.css"
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";
import dropdown_icon from "../Assests/circle_arrow.svg";

function Navbar(){

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <h2>LITHI'S FASHION</h2>
            </div>

            <img onClick={dropdown_toggle} src={dropdown_icon} alt="" className="nav-dropdowm" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/> : <></>} </li>
                <li onClick={()=>{setMenu("mens")}}> <Link to='/mens' style={{textDecoration:'none'}}>Men</Link> {menu==="mens"?<hr/> : <></>} </li>
                <li onClick={()=>{setMenu("womens")}}> <Link to='/womens' style={{textDecoration:'none'}}>Women</Link> {menu==="womens"?<hr/> : <></>} </li>
                <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="kids"?<hr/> : <></>} </li>
            </ul>   

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'>
                  <img src={cart_icon} alt=""/>
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar;