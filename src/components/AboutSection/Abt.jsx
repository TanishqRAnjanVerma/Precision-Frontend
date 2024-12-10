import React from "react";
import { asset } from "../../assets/assets";
import '../AboutSection/abt.css'

const Abt = () => {
    return (
        <div className="abt">
            <h2 className="abt-1">About Us</h2>
            <p className="abt-description">
                Precision Mercantile Total Cleaning Care for Healthy Living,
                headquartered in Patna, India. Since 2001, leads the cleaning equipment
                industry nationwide. Initially, focusing on importing cutting-edge
                global technologies, we've evolved into a trusted manufacturer catering
                specifically to India's cleaning needs. Our commitment extends beyond
                product delivery; we prioritize after-sales service and provide
                professional mechanized cleaning equipment, ensuring our clients'
                satisfaction. As our network expanded across the country, our focus
                shifted to consultancy services, recognizing the vast potential of the
                Indian cleaning market. Partnering with esteemed brands like 3M, AR, and
                UDOR further solidifies our dedication to quality and innovation. At
                Precision Mercantile, we're driven by a vision of enhancing cleanliness
                and wellness for all, continually striving to introduce innovative
                solutions tailored to India's unique requirements."
            </p>
            <div className="row" data-aos="fade-up">
                <div className="col">
                    <img className="abt-img" src={asset.pre7} alt="Cleaning Scene 1" />
                </div>
                <div className="col">
                    <img className="abt-img" src={asset.pre8} alt="Cleaning Scene 2" />
                </div>
                <div className="col">
                    <img className="abt-img" src={asset.pre9} alt="Cleaning Equipment" />
                </div>
            </div>
        </div>
    );
};

export default Abt;
