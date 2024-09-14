import React from 'react';
import '../Styles/ComponentStyles/Menu.css';
import '../Styles/Layout.css'
const Menu = () => {
    return (
        <div style={{ backgroundColor: '#A91D3A'}}>

            <div className="container menu-container">
                <ul className="menu-items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/services">Products</a></li>
                    <li><a href="/services">Hire a Talent</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                </ul>
                <a href="/courses" className="courses-button">Courses</a>
            </div>
        </div>

    );
};

export default Menu;
