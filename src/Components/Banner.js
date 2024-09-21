import React from 'react';
import '../Styles/ComponentStyles/Banner.css';
import '../Styles/Layout.css'
const Banner = () => {
    return (
        <div style={{ backgroundColor: '#ad274e', paddingBottom:'10rem' }}>
            <div className="banner container">
                <div className="banner-text">
                    <h1>If you can dream it, we can make it.</h1>
                    <p style={{ fontSize: '4.07rem', fontWeight: 'bold', color: '#ffffff' }}>Connecting People & Technology</p>
                    <p>We at CIBT can help you imagine your organization’s technology, plan automation, and make it a reality.<br/>
                    You get to experience top quality education from our experienced mentor.<br/>
                    Come join the team and become part of Crown family 
                    </p>
                </div>
                <div className="banner-animation">
                    <div className="animated-object"></div>
                </div>
            </div>
            <div className='button-part container'>
            <a href="#learn-more" className="learn-more-button">Explore More →</a>            </div>
        </div>

    );
};

export default Banner;
