import React from "react";
import './SignUp.css';
import bbd_logo_title from '../Assets/bbd_logo_title.jpg';
import signup_img from '../Assets/signup_img.jpg';
import { useNavigate } from 'react-router-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../Auth/msalConfig"; 

const msalInstance = new PublicClientApplication(msalConfig);

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const response = await msalInstance.loginPopup(loginRequest);
            console.log("User signed in:", response.account);

            // Navigate to sign up form for mongo db
            navigate('/signup2');
        } catch (error) {
            console.error("Error during MS Entra ID signup:", error);
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="left-section">
                <p className="Heading">TrackStock</p> 
                <img src={signup_img} alt="Left Side" className="left-image" />
            </div>
            
            <div className="signup-container">
                <img src={bbd_logo_title} alt="BBD Logo" className="logo" />
                <p className="title">Signup with your BBD Microsoft Account</p>

                <button className="submit" onClick={handleSignUp}>
                    Sign Up with Entra ID
                </button>

                <p className="signin">Already have an account? <a href="/login">Sign In</a></p>
            </div>
        </div>
    );
};

export default SignUp;
