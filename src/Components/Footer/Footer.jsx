import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import instagram_logo from "../Assests/instagram_icon.png";
import pintester_icon from "../Assests/pintester_icon.png";
import whatsapp_icon from "../Assests/whatsapp_icon.png";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <h1>LITHI'S FASHION</h1>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Branches</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <img src={instagram_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintester_icon} alt="" />
                </div>
            </div>

            <div className="footer-copy">
                <hr />
                <p>&copy; Copyright @2024 - All Right Reserved</p>
            </div>
            
        </div>
    )
}