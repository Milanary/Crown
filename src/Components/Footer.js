import React from 'react';
import '../Styles/ComponentStyles/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-divider"></div>
      <footer className="footer-container">
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-md-3 text-center mt-2">
              <img src="/Images/crown logo.png" width="auto" height="75px" alt="Crown Logo" />
              <div className="pt-3">
                <a className="text-body-secondary text-decoration-none" href="#">Program</a>
                <span className="ps-3 pe-3">|</span>
                <a className="text-body-secondary text-decoration-none" href="#">About</a>
                <span className="ps-3 pe-3">|</span>
                <a className="text-body-secondary text-decoration-none" href="#">Blog</a>
              </div>
              <div className="pt-3 custom-icon-container">
                <span className="fs-5">
                  <a className="text-body-secondary" href="#"><i className="bi bi-browser-chrome"></i></a>
                </span>
                <span className="fs-5 ps-3">
                  <a className="text-body-secondary" href="#"><i className="bi bi-instagram"></i></a>
                </span>
                <span className="fs-5 ps-3">
                  <a className="text-body-secondary" href="#"><i className="bi bi-envelope"></i></a>
                </span>
                <span className="fs-5 ps-3">
                  <a className="text-body-secondary" href="#"><i className="bi bi-map"></i></a>
                </span>
              </div>
            </div>

            <div className="col-12 col-md-4 text-center mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39964.183972750165!2d85.3011466665587!3d27.705916171008443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1711267836997!5m2!1sen!2snp"
                width="55%" height="90px" style={{ border: '0', borderRadius: '20px' }} allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>

              <div className="pt-2">
                <p>Crowninstitute@gmail.com <br /> Kathmandu, Nepal <br />
                  +97701-43124112
                </p>
              </div>
            </div>

        
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
