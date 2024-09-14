import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import '../Styles/ComponentStyles/Partner.css';
import CIHE from '../Images/cihe.png'; // Use the actual image paths
import CIBT from '../Images/cibt.png';
import MICD from '../Images/micd.jpeg';
import Cooperation from '../Images/cooperation.jpeg';
import KTS from '../Images/kts.png';
import Unnati from '../Images/unnati.jpg';


const Partners = () => {
    return (
        <section className="partners-section">
            <div className="partners-container">
                <h4 className="partners-subtitle">Our Valued Partners</h4>
                <h2 className="partners-title">Trusted By <span className="highlight">Top-Rated Companies</span></h2>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}
                    interval={2000} // Auto-slide every 3 seconds
                    stopOnHover
                    centerMode
                    centerSlidePercentage={16.66} // Show 3 images at a time
                    className="partners-carousel"
                    selectedItem={1}
                >
                    <div>
                        <img src={CIHE} alt="Visit Nepal" className="partner-logo" />
                    </div>
                    <div>
                        <img src={CIBT} alt="Horizon Nepal" className="partner-logo" />
                    </div>
                    <div>
                        <img src={MICD} alt="Mcdodo" className="partner-logo" />
                    </div>
                    <div>
                        <img src={Cooperation} alt="Fahrenheit" className="partner-logo" />
                    </div>
                    <div>
                        <img src={KTS} alt="Secured Securities" className="partner-logo" />
                    </div>
                    <div>
                        <img src={Unnati} alt="Nepal Reinsurance" className="partner-logo" />
                    </div>
                    {/* Add more images here if needed */}
                </Carousel>
            </div>
        </section>
    );
};

export default Partners;
