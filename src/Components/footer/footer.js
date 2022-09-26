import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              WEATHER
              <i class="fa-solid fa-cloud" />
            </Link>
          </div>
          <small class="website-rights">WEATHER © 2022</small>
          <div class="social-icons">
            <Link class="social-icon-link facebook" to="/">
              <i class="fab fa-facebook-f" />
            </Link>
            <Link class="social-icon-link instagram" to="/">
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link youtube" to="/">
              <i class="fab fa-youtube" />
            </Link>
            <Link class="social-icon-link twitter" to="/">
              <i class="fab fa-twitter" />
            </Link>
            <Link class="social-icon-link twitter" to="/">
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
