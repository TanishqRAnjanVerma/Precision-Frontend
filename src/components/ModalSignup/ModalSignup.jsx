import React, { useState } from "react";
import "../ModalSignup/modalsignup.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { FaCheck, FaTimes } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { FcGoogle } from "react-icons/fc";
import "animate.css";

const ModalSignup = ({ switchToLogin }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { url } = useContext(StoreContext)
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [passwordsMatch, setPasswordsMatch] = useState(null);
    // const [passwordStrength, setPasswordStrength] = useState('');

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        re_password: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

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
    // Password Hide/Visibile //

    // useEffect(() => {
    //     if (password && confirmPassword) {
    //         setPasswordsMatch(password === confirmPassword);
    //     } else {
    //         setPasswordsMatch(null);
    //     }
    // }, [password, confirmPassword]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Password Strength //

    // useEffect(() => {
    //     checkPasswordStrength(password);
    // }, [password]);

    // const checkPasswordStrength = (password) => {
    //     if (!password) {
    //         setPasswordStrength('');
    //     } else if (password.length < 8) {
    //         setPasswordStrength('Password must be at least 8 characters long.');
    //     } else if (!/[A-Z]/.test(password)) {
    //         setPasswordStrength('Password must contain at least one uppercase letter.');
    //     } else if (!/[a-z]/.test(password)) {
    //         setPasswordStrength('Password must contain at least one lowercase letter.');
    //     } else if (!/[0-9]/.test(password)) {
    //         setPasswordStrength('Password must contain at least one number.');
    //     } else if (!/[!@#$%^&*]/.test(password)) {
    //         setPasswordStrength('Password must contain at least one special character.');
    //     } else {
    //         setPasswordStrength('Strong password');
    //     }
    // };

    return (
        <div className="modal-signup">
            <button className="back-button" onClick={switchToLogin}>
                <TiArrowBackOutline className="back" />
            </button>
            <div className="bulb">
                <h1 className="heading animate__animated animate__bounceIn">Sign-Up</h1>
            </div>
            <form action="#" onSubmit={onLogin}>
                <div className="sign-up">
                    <input
                        type="name"
                        className="email-input"
                        placeholder="Enter your name"
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name}
                    />

                    <input
                        className="email-input"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                    />

                    <div className="password-input">
                        <input
                            className="password-field"
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            value={data.password}
                            name="password"
                            onChange={onChangeHandler}
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                        </span>
                        {/* {passwordsMatch !== null && (
                        <span className="status-icon">
                            {passwordsMatch ? <FaCheck className='tick' /> : <FaTimes className='wrong' />}
                        </span>
                    )}

                      {passwordStrength && (
                        <div className="password-strength">
                            {passwordStrength === 'Strong password' ? (
                                <span className="strong-password animate__animated animate__fadeInUp">{passwordStrength}</span>
                            ) : (
                                <span className="weak-password animate__animated animate__fadeInUp">{passwordStrength}</span>
                            )}
                        </div>
                    )}  */}
                    </div>
                    {/* <div className="password-input">
                    <input
                        className='password-field'
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Re-enter your password"
                        value={data.re_password}
                        name='re_password'
                        onChange={onChangeHandler}
                    />
                    <span className="eye-icon" onClick={togglePasswordVisibility}>
                        {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                    {passwordsMatch !== null && (
                        <span className="status-icon">
                            {passwordsMatch ? <FaCheck className='tick' /> : <FaTimes className='wrong' />}
                        </span>
                    )}
                    {passwordsMatch === false && (
                        <span className="password-match-error animate__animated animate__fadeInUp">
                            Passwords does not match
                        </span>
                    )}
                </div> */}
                    <div className="acceptance">
                        <input type="checkbox" className="checked" />
                        <span className="accept">
                            I agree to Precision &nbsp;
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
                        </span>
                    </div>

                    <button className="btn-login">Sign-up</button>

                    <div className="or_1">
                        <hr className="horizontal-line" />
                        <span className="or">or</span>
                    </div>

                    <div className="email">
                        <FcGoogle className="mail-icon" />
                        <span className="email_1">Sign in with Google</span>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ModalSignup;
