import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import "../AboutUs/about.css";
import { asset } from "../../assets/assets";
import { product_list } from "../../assets/assets";
import Faq from "../../components/FAQ/Faq";

const About = ({ setCategory }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="about">
            <div className="about-header">
                <h2 className="about-title">About Us</h2>
                <p className="about-para">
                    Precision Mercantile Total Cleaning Care for Healthy Living,
                    headquartered in Patna, India. Since 2001, leads the cleaning
                    equipment industry nationwide. Initially, focusing on importing
                    cutting-edge global technologies, we've evolved into a trusted
                    manufacturer catering specifically to India's cleaning needs. Our
                    commitment extends beyond product delivery
                </p>
                <img className="about-img" src={asset.pre10} alt="" />
            </div>

            <div className="about-mid">
                <h2 className="about-title">Our Mission</h2>
                <p className="about-para">
                    Precision Mercantile Total Cleaning Care for Healthy Living,
                    headquartered in Patna, India. Since 2001, leads the cleaning
                    equipment industry nationwide. Initially, focusing on importing
                    cutting-edge global technologies, we've evolved into a trusted
                    manufacturer catering specifically to India's cleaning needs. Our
                    commitment extends beyond product delivery
                </p>

                <div className="header-box">
                    <div className="view-product-list" data-aos="fade-up">
                        {product_list.map((item, index) => {
                            return (
                                <div
                                    onClick={() =>
                                        setCategory((prev) =>
                                            prev === item.product_name ? "All" : item.product_name
                                        )
                                    }
                                    key={index}
                                    className="view-product-list-item"
                                >
                                    <div className="view-card">
                                        <img
                                            className="product-list-image"
                                            src={item.product_image}
                                            alt=""
                                        />
                                    </div>

                                    <p className="product-list-title">{item.product_name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <p className="about-para">
                    Precision Mercantile Total Cleaning Care for Healthy Living,
                    headquartered in Patna, India. Since 2001, leads the cleaning
                    equipment industry nationwide. Initially, focusing on importing
                    cutting-edge global technologies, we've evolved into a trusted
                    manufacturer catering specifically to India's cleaning needs. Our
                    commitment extends beyond product delivery
                </p>
                <p className="about-para">
                    Precision Mercantile Total Cleaning Care for Healthy Living,
                    headquartered in Patna, India. Since 2001, leads the cleaning
                    equipment industry nationwide. Initially, focusing on importing
                    cutting-edge global technologies, we've evolved into a trusted
                    manufacturer catering specifically to India's cleaning needs. Our
                    commitment extends beyond product delivery
                </p>
            </div>

            <Faq />
        </div>
    );
};

export default About;
