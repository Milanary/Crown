import React from "react";
import '../Styles/Layout.css';
import '../Styles/ComponentStyles/Organization.css';
import HandshakeImage from '../Images/cibt-about.png'; // Assuming you have an image for the handshake

const Organization = () => {
    return (
        <div className="handshake-container">
            <div className="handshake-left">
                <img src={HandshakeImage} alt="Handshake" className="handshake-image" />
            </div>
            <div className="handshake-right">
                <h4 className="handshake-subtitle">THE CROWN DIFFERENCE</h4>
                <h1 className="handshake-title">We strive to be a <span className="highlight">better education partner</span></h1>
                <p className="handshake-description">
                    At our core, we provide leading edge training.
                </p>
                <p className="handshake-description">
                Crown Institute is dedicated to providing the highest quality services for both profit and non-profit sectors across various fields, including business, entrepreneurship, development agencies, and youth empowerment. Initiated by a team of experienced professionals, we specialize in skills and capacity development in areas such as project management, information technology, digital services, entrepreneurship promotion, and academia, among others. Our diverse team operates from Kathmandu, Sydney, and Rome, ensuring a global reach and perspective in all our services.

                </p>
                <br />
                <a href="#learn-more" className="learn-more-button">Learn More →</a>
            </div>
        </div>
    );
};

export default Organization;
