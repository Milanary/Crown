import React from "react";
import '../Styles/ComponentStyles/Offer.css';
import EducationImg from '../Images/education.svg'
import GrowthImg from '../Images/growth.svg'
import TeacherImg from '../Images/teacher.svg'
const Offer = () => {
    const cardData = [
        {
            title: 'Quality Education',
            description: 'Get quality education on your fingertip.',
            imageUrl: EducationImg,
        },
        {
            title: 'One-One Mentorship',
            description: 'Not only knowledge, you get connection too.',
            imageUrl: GrowthImg,
        },
        {
            title: 'Experienced Teacher',
            description: 'Get the top experienced teacher of the industry',
            imageUrl: TeacherImg,
        },
    ];

    return (
        <>
            <div className="container" >
                <div className="offer-header">
                    <h3>Our Services</h3>
                    <p>Exceptional Services For Your <span style={{ color: '#AD274E' }}>Business Growth</span></p>
                </div>
                <div className="offer-header-low">
                    <p><i>Discover our wide range of digital solutions to enhance your online presence.</i></p>
                </div>
                <div className="service-card">
                    <div className="cards-container">
                        {cardData.map((card, index) => (
                            <div className="card" key={index}>
                                <img src={card.imageUrl} alt={card.title} className="card-image" />
                                <div className="card-body">
                                    <h2 className="card-title">{card.title}</h2>
                                    <p className="card-description">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offer;