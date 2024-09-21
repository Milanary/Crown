import React from 'react';
import '../Styles/ComponentStyles/Menu.css';
import '../Styles/Layout.css'
const Menu = () => {
    return (
        <div style={{ backgroundColor: '#4A2F2A'}}>

            <div className="container menu-container">
                <ul className="menu-items">
                    <li><a href="#">Skills for Employment</a></li>
                    <li><a href="#">IT and Digital Services</a></li>
                    <li><a href="#">Entrepreneurship Promotion</a> </li>
                    <li><a href="#">Academic Programmes</a> </li>
                    <li><a href="#">Project Management</a> </li>

                    <li><a href="/about-us">About</a></li>




                </ul>
                <a href="/courses" className="courses-button">Courses</a>
            </div>
        </div>

    );
};

export default Menu;
