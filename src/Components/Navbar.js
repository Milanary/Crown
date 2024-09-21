import React from 'react';
import '../Styles/ComponentStyles/Navbar.css';
import Logo from '../Images/logo.png'
import '../Styles/Layout.css'
const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#4A2F2A', borderBottom: '0.6px solid #747677' }}>
            <div className='navbar container'>
                <div className="navbar-logo">
                    <a href='/'><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="navbar-contact">
                    <span>
                    <a href='/contact-us' style={{  color: '#ff9100' }}>Contact: </a>
                        <span style={{ color: 'white' }}>+123 456 7890</span>
                    </span>
                    <br />
                    <span>Email: <span style={{ color: 'white' }}>crown@gmail.com</span></span>


                </div>
                <div className="navbar-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
