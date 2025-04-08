import React from "react";
import './SignUp2.css';
import bbd_logo_title from '../Assets/bbd_logo_title.jpg';
import signup_img from '../Assets/signup_img.jpg';
import { Link } from 'react-router-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../Auth/msalConfig"; 
import { useNavigate } from 'react-router-dom';

const msalInstance = new PublicClientApplication(msalConfig);

const SignUp = () => {
    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await msalInstance.loginPopup(loginRequest);
            console.log("User signed in:", response.account);

            // To Do: Save Users details in form to MongoDb collection Users.

            //To Do: Check IF user ROLE = Admin/Manager/Representative then navigate them to the relevant dashboard (sidemenu for admin/manager is the same).
            navigate('/repdashboard');

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
                <form className="form" onSubmit={handleSignUp}>
                    <p className="title">Enter User Details</p>
                    <p className="message">Enter your details below</p>

                    <div className="flex">
                        <label>
                            <input required placeholder="" type="text" className="input" />
                            <span>Firstname</span>
                        </label>
                        <label>
                            <input required placeholder="" type="text" className="input" />
                            <span>Lastname</span>
                        </label>
                    </div>

                    <label>
                        <input required placeholder="" type="email" className="input" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input required placeholder="" type="text" className="input" />
                        <span>Department</span>
                    </label>

                    <label>
                        <select id="locations" name="locations" className="input">
                            <option value="cape-town">Cape Town</option>
                            <option value="johannesburg">Johannesburg</option>
                            <option value="india">India</option>
                            <option value="pretoria">Pretoria</option>
                            <option value="netherlands">Netherlands</option>
                        </select>
                    </label>

                    <label>
                        <input required placeholder="" type="password" className="input" />
                        <span>Password</span>
                    </label>

                    <label>
                        <input required placeholder="" type="password" className="input" />
                        <span>Confirm password</span>
                    </label>

                    <button className="submit" type="submit"> Save </button>

                    <p className="signin">Already have an account? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;