import React from "react";
import "./CSS/LogginSignup.css";

function LogginSignup(){
    return(
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Sign Up</h1>

                <div className="login-signup-field">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Your Password" />
                </div>

                <button>Continue</button>

                <p className="loginsignup-login">Already have an Account? <span> Login Here</span></p>

                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I agree to the Terms and Condition</p>
                </div>
            </div>
        </div>
    )
}
export default LogginSignup;