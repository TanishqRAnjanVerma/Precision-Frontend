import React, { useState } from 'react';
import "../ModalLogin/modallogin.css"
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { asset } from '../../assets/assets';
import { CiMail } from "react-icons/ci";
import { useContext } from 'react';
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext';


const ModalLogin = () => {


    const { url } = useContext(StoreContext)
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

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
            switchEmailComponent(false)
        }

        else {
            alert(response.data.message)
        }
    }


    return (

        <div className="login-modal">
            <div className="modal-b-1">
                <img src={asset.logo} alt="" height="80" width="80" />
                {/* <h5 className='modal-b-txt-1'>{currState}</h5> */}
                <p className='modal-b-txt-2'>Login into your account</p>
            </div>
            <div className="modal-b-2">
                <form action="#" className='login-form' onSubmit={onLogin}>
                    {/* <input type="text" className='name-input' placeholder='Enter your name' name='name' onChange={onChangeHandler} value={data.name} /> */}
                    <div className="email-login">

                        <span className='country-code'><CiMail /></span>

                        <input className='email-input' name='email' onChange={onChangeHandler} value={data.email} type="Mobile Number" placeholder="Enter your registered email" />

                    </div>
                    <div className="password-input">
                        <input className='password-field' name='password' onChange={onChangeHandler} value={data.password} type={passwordVisible ? 'text' : 'password'} placeholder="Enter your password" />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                        </span>
                    </div>
                    <button type="submit" className='btn-login' >Login </button>

                    <div className="or_1">
                        <hr className='horizontal-line' />
                        <span className='or'>or</span>
                    </div>

                    <div className="email" >
                        <FcGoogle className='mail-icon' />
                        <span className='email_1'>Sign in with Google</span>
                    </div>

                    <div className="new-to-tdl">
                        <span className='new'>New to Precision ? &nbsp;
                            <button className='create-account'>{currState === "Sign-up" ? "Create Account" : "Login"}</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ModalLogin

