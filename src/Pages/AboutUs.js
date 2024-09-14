import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import AboutPic from '../Images/about-pic.jpeg';
import '../Styles/Layout.css';
import '../Styles/PageStyles/AboutUs.css';
import Footer from "../Components/Footer";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <Menu />

      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <h4>Welcome to <span style={{color:'#A91D3A'}}>Crown Institute</span></h4>
          <p>
            Where knowledge meets innovation and excellence becomes the standard. We are a collective of passionate professionals driven by a shared mission: to provide transformative education and skill-building solutions. Our commitment is to deliver high-quality, cost-effective, and timely services that empower individuals and organizations to excel in an ever-evolving world. At Crown Institute, we believe in creating opportunities, fostering growth, and shaping futures—one learner at a time.
          </p>
        </header>

        <div className="mission-vision-values">
          <div className="cards mission">
            <h2>Our Mission</h2>
            <p>"To provide innovative, industry-relevant training that equips individuals with the practical skills and knowledge necessary to excel in their careers and drive meaningful change."</p>
          </div>
          <div className="cards vision">
            <h2>Our Vision</h2>
            <p>"To empower individuals with the knowledge, skills, and confidence to succeed in a rapidly evolving global economy, creating opportunities for personal and professional growth."</p>
          </div>
          <div className="cards values">
            <h2>Our Values</h2>
            <ul>
              <li>Innovative Learning</li>
              <li>Empowered Expertise</li>
              <li>Future-Ready Solutions</li>
              <li>Excellence in Education</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        {/* Left Image Section */}
        <div className="image-section">
          <img src={AboutPic} alt="Crown technology" />
        </div>

        {/* Right Accordion Section */}
        <div className="accordion-section">
          <h2>Why Choose Us?</h2>
          <p>Crown Technology helps you shape your future with highly refined courses.</p>

          <div className="accordion">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(0)}
              >
                <h6>What is Crown Institute?</h6>
                <span>{activeIndex === 0 ? "-" : "+"}</span>
              </div>
              {activeIndex === 0 && (
                <div className="accordion-content">
                  <p>Crown Institute is a leading venture that empowers individuals and organizations through skills, education, innovation, and consultancy services. It is affiliated with the Crown Institute of Higher Education in Sydney, Australia.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(1)}
              >
                <h6>What is the mission of Crown Institute?</h6>
                <span>{activeIndex === 1 ? "-" : "+"}</span>
              </div>
              {activeIndex === 1 && (
                <div className="accordion-content">
                  <p>The mission of Crown Institute is to provide cutting-edge services, skills, and educational programs that empower individuals and organizations to thrive, adapt, and excel in an ever-evolving world.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(2)}
              >
                <h6>What are the areas of expertise at Crown Institute?</h6>
                <span>{activeIndex === 2 ? "-" : "+"}</span>
              </div>
              {activeIndex === 2 && (
                <div className="accordion-content">
                  <p>Crown Institute's expertise spans multiple domains, including skill training for employability, information technology, accounting and finance, digital marketing, technology services, higher education, entrepreneurship and business development, project intervention, research studies, and project management.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(3)}
              >
                <h6>Does Crown Institute have partnerships and collaborations?</h6>
                <span>{activeIndex === 3 ? "-" : "+"}</span>
              </div>
              {activeIndex === 3 && (
                <div className="accordion-content">
                  <p>Yes, Crown Institute strongly believes in partnerships and collaborations to build wider synergy. It has established strategic partnerships with leading organizations, both nationally and internationally, to enhance the scope and impact of its services.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(4)}
              >
                <h6>What facilities does Crown Institute offer?</h6>
                <span>{activeIndex === 4 ? "-" : "+"}</span>
              </div>
              {activeIndex === 4 && (
                <div className="accordion-content">
                  <p>Crown Institute boasts state-of-the-art facilities equipped with modern technology and resources to facilitate effective teaching, learning, research, and consultancy services, providing a conducive learning and working environment.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
