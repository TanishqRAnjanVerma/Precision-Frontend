import React, { useState } from 'react'
import "../LoginPopup/loginpopup.css"
// import { asset } from '../../assets/assets'
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from 'react';
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }

        else {
            alert(response.data.message)
        }
    }


    return (
        <div className='login-popup'>
            <form action="" className='login-popup-container' onSubmit={onLogin}>
                <div className="modal-b-1">
                    {/* <img src={asset.logo} alt="" height="80" width="80" /> */}
                    <h5 className='modal-b-txt-1'>{currState}</h5>
                    <IoCloseSharp onClick={() => setShowLogin(false)} className='close-icon' />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="name" name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter your name' className="input-field" required />}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter your email' className="input-field" required />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter your password' className="input-field" required />
                </div>

                <button type='submit' className='create-account'>{currState === "Sign up" ? "Create an account" : "Login"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" className="checkbox-field" required />
                    <p className='policy'>By continuing  I agree to Precision &nbsp;
                        <a href="" className="policy-link">
                            Terms of Service
                        </a>
                        ,&nbsp;
                        <a href="" className="policy-link">
                            Privacy Policy
                        </a>
                        &nbsp;and&nbsp;
                        <a href="" className="policy-link">
                            Content Policies
                        </a>
                    </p>
                </div>
                {currState === "Login"
                    ? <p className='switch'>New to Precision ?  <span className='switch-text' onClick={() => setCurrState("Sign up")}>Create an account</span></p>
                    : <p className='switch'>Already have an account? <span className='switch-text' onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
