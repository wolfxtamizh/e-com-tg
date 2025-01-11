import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox(){
    return(
        <div className="description-box">
            <div className="descriptin-box-navigation">
                <div className="descriptin-box-nav-box">Description</div>
                <div className="descriptin-box-nav-box fade">Reviews (1,205)</div>
            </div>

            <div className="description-box-description">
                <p>
                Discover an unmatched shopping experience with our e-commerce website, 
                where style meets convenience. Our platform brings you a vast selection of high-quality 
                products across categories like fashion, electronics, home decor, beauty, and more—all in one place.
                We pride ourselves on providing a seamless shopping journey, from easy browsing and detailed 
                product descriptions to secure checkout and reliable shipping options. 
                Whether you're looking for the latest fashion trends, must-have tech gadgets, or everyday essentials, 
                we’ve got you covered with competitive prices and exclusive deals. 
                Plus, our dedicated customer support team is available to assist you at every step.
                </p>

                <p>
                Shop confidently, knowing you’re getting quality and value at the click of a button. 
                Start exploring today and elevate your shopping experience!
                </p>
            </div>
        </div>
    )
}