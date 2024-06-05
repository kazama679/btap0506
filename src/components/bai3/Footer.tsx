import React from 'react';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h2 className="footer-heading mb-3">Instagram</h2>
          <div className="row">
            <div className="col-4 gal-item">
              <a href="#"><img src="images/hero-slider-1.jpg" alt="Image" className="img-fluid" /></a>
            </div>
            <div className="col-4 gal-item">
              <a href="#"><img src="images/hero-slider-2.jpg" alt="Image" className="img-fluid" /></a>
            </div>
            <div className="col-4 gal-item">
              <a href="#"><img src="images/hero-slider-3.jpg" alt="Image" className="img-fluid" /></a>
            </div>
            <div className="col-4 gal-item">
              <a href="#"><img src="images/hero-slider-4.jpg" alt="Image" className="img-fluid" /></a>
            </div>
            <div className="col-4 gal-item">
              <a href="#"><img src="images/hero-slider-1.jpg" alt="Image" className="img-fluid" /></a>
            </div>
            <div className="col-4 gal-item">
              <a href="#"><img src="images/hero-slider-2.jpg" alt="Image" className="img-fluid" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 ml-auto">
          <div className="row">
            <div className="col-lg-4 ml-auto">
              <h2 className="footer-heading mb-4">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h2 className="footer-heading mb-4">Resources</h2>
              <ul className="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h2 className="footer-heading mb-4">Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi laborum ipsa dolorum perspiciatis omnis iste ullam pariatur vitae inventore est et tempore?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <div className="border-top pt-5">
            <p className="copyright">
              &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://untree.co" target="_blank" rel="noopener noreferrer">Untree.co</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
