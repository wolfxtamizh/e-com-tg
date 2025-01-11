import React from "react";
import "./NewLetter.css";

export default function NewLetter(){
    return(
        <div className="new-letter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to Our Newsletter and Stay Update</p>

            <div>
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}