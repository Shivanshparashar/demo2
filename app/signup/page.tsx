import React from 'react';
import '../login/login.css';

// Example description from the internet for a shipping/logistics sign up page
const description = `
Join NOXAN.SHIP and unlock seamless, reliable, and fast shipping for your business. 
Our platform connects you with top courier partners, real-time tracking, and powerful logistics tools to help you grow. 
Sign up today and experience the future of hassle-free shipping!`;

const courierPartners = [
  { name: 'Delhivery' },
  { name: 'DTDC' },
  { name: 'Blue Dart' },
  { name: 'XpressBees' },
  { name: 'Velocity' },
  { name: 'Shadowfax' },
  { name: 'India Post' },
  { name: 'amazon Shipping' },
];

export default function SignupPage() {
  return (
    <div className="login-bg">
      <div className="login-flex-row">
        <div className="login-desc-bg">
          <div className="logo-title">
            <div className="logo-circle">N</div>
            <h1>NOXAN.SHIP</h1>
          </div>
          <p className="signup-description" style={{ whiteSpace: 'pre-line' }}>{description}</p>
          <div className="courier-partners">
            <span>Our Courier Partners</span>
            <div className="courier-marquee-wrapper">
              <div className="partners-list marquee-left">
                {courierPartners.concat(courierPartners).map((partner, idx) => (
                  <button key={partner.name + 'top' + idx} className="partner-btn">{partner.name}</button>
                ))}
              </div>
            </div>
            <div className="courier-marquee-wrapper">
              <div className="partners-list marquee-right">
                {courierPartners.concat(courierPartners).map((partner, idx) => (
                  <button key={partner.name + 'bottom' + idx} className="partner-btn">{partner.name}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="login-box">
          <div className="logo-circle small">N</div>
          <h2>Create Your Account</h2>
          <p className="login-desc">Sign up to start shipping smarter and faster.</p>
          <form>
            <input type="text" placeholder="Full Name" className="login-input" />
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <input type="password" placeholder="Confirm Password" className="login-input" />
            <button type="submit" className="login-btn">SIGN UP</button>
          </form>
          <div className="signup-row">
            <span>Already have an account?</span>
            <a href="/login" className="signup-link">SIGN IN</a>
          </div>
        </div>
      </div>
    </div>
  );
}
