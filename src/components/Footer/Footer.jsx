import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../Footer/footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { asset } from '../../assets/assets';


const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <footer className='footer-section'>

                <div className="f_section-1">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 1000 1000"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        overflow="auto"
                        shapeRendering="auto"
                        fill="#ffffff"
                    >
                        <defs>
                            <path
                                id="wavepath"
                                d="M 0 2000 0 500 Q 140.5 408 281 500 t 281 0 281 0 281 0 281 0 281 0 v1000 z"
                            />
                            <path id="motionpath" d="M -562 0 0 0" />
                        </defs>
                        <g>
                            <use xlinkHref="#wavepath" y="-450" fill="#0b4fff">
                                <animateMotion dur="5s" repeatCount="indefinite">
                                    <mpath xlinkHref="#motionpath" />
                                </animateMotion>
                            </use>
                        </g>
                    </svg>
                    <div className="f_subsec-1" data-aos="fade-up">
                        <div className="footer-items">

                            <h6>Quick Links</h6>
                            <li><a href="">Products</a></li>
                            <li><a href="">Item Lists</a></li>
                            <li><a href="">Offer</a></li>
                            <li><a href="">Review</a></li>
                            <li><a href="">Refund Policy</a></li>

                        </div>
                        <div className="footer-items">

                            <h6>Get to Know Us</h6>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Gift Cards</a></li>
                            <li><a href="">Stories</a></li>
                            <li><a href="">Linkedin</a></li>
                            <li><a href="/Blog">Blog</a></li>


                        </div>
                        <div className="footer-items">

                            <h6>Information</h6>
                            <li><a href="">Privacy & Policy</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Services</a></li>

                        </div>
                    </div>
                    <div className="f_subsec-2" data-aos="fade-up">
                        <div className="f_sub-1">

                            <h6>Follow Us</h6>
                            <li className="f-item">
                                <a href="" className='f_icon'><FaFacebook /></a>
                                <a href="" className='f_icon'><FaWhatsapp /></a>
                                <a href="" className='f_icon'><FaLinkedin /></a>
                                <a href="" className='f_icon'><FaInstagram /></a>
                            </li>

                        </div>
                        <div className="f_sub-2">
                            <p>
                                BR.K Nagar, FCI Rd, RK Nagar Colony, Birla Colony, Phulwari Sharif, Patna, Bihar 801505, 95465 69088
                            </p>

                        </div>

                    </div>
                </div>

                <div className="f_section-2">
                    <div className="f_subsec-3">

                        <p>&copy;2024 Precision. All right reserved</p>

                    </div>
                    {/* <div className="f_subsec-4">
                        <img src={asset.pre_foot1} alt="" class="f_icon-2" height="30" width="60" />
                        <img src={asset.pre_foot2} alt="" class="f_icon-2" height="30" width="60" />
                        <img src={asset.pre_foot3} alt="" class="f_icon-2" height="30" width="60" />
                        <button type="button" class="f_icon-2" id='icons-msg'><AiFillMessage /></button>
                    </div> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer
