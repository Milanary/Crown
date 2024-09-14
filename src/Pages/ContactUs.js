import React from "react";
import '../Styles/ComponentStyles/ContactUs.css';
import ContactImage from '../Images/contact.jpg'; 
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (<>
  <Navbar/>
  <Menu/>

    <section className="contact-us-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            We’d love to hear from you! Reach out to us via phone, email, or fill out the contact form below.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <h4>Phone</h4>
              <p>(123) 456-7890</p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <p>info@crowninstitute.com</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Contact Form</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contact-image">
          <img src={ContactImage} alt="Contact Us" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default ContactUs;
