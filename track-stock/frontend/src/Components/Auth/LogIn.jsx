import React from "react";
import './SignUp.css';
import bbd_logo_title from '../Assets/bbd_logo_title.jpg'
import login_img from '../Assets/login_img.avif'
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="signup-wrapper">
            <div className="left-section">
                <p className="Heading">TrackStock</p>
                <img src={login_img} alt="Left Side" className="left-image" />
            </div>

            <div className="signup-container">

                <img src={bbd_logo_title} alt="BBD Logo" className="logo" />

                <form className="form">
                    <p className="title">Login to your account</p>
                    <p className="message">Enter your details below</p>

                    <label>
                        <input required placeholder="" type="email" className="input" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input required placeholder="" type="password" className="input" />
                        <span>Password</span>
                    </label>

                    <button className="submit"> Log In </button>

                    <p className="signin">Dont't have an account? <Link to="/signup">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LogIn