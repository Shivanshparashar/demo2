"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './login.css';

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

export default function LoginPage() {
  const router = useRouter();
  // Static credentials
  const STATIC_EMAIL = "demo@noxanship.com";
  const STATIC_PASSWORD = "demo123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Try demo@noxanship.com / demo123");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      router.push('/nexona-panel');
    }
  }, [loggedIn, router]);

  if (loggedIn) {
    return null;
  }

  return (
    <div className="login-bg">
      <div className="login-flex-row">
        <div className="login-desc-bg">
          <div className="logo-title">
            <div className="logo-circle">N</div>
            <h1>NOXAN.SHIP</h1>
          </div>
          <p className="subtitle">
            Smarter, faster, and easier shipping for your business.<br />
            Experience seamless logistics with NOXAN.SHIP.
          </p>
          <div className="courier-partners">
            <span>Choose Courier Partner</span>
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
          <h2>Welcome to NOXAN.SHIP</h2>
          <p className="login-desc">Enter your email and password to login</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <select className="login-input">
              <option>User</option>
              <option>Admin</option>
            </select>
            <div className="forgot-row">
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
            {error && <div style={{ color: '#ff6b6b', marginBottom: 10, fontWeight: 500 }}>{error}</div>}
            <button type="submit" className="login-btn">SIGN IN</button>
          </form>
          <div className="signup-row">
            <span> Don't have an account?</span>
            <a href="/signup" className="signup-link">SIGN UP</a>
          </div>
        </div>
      </div>
    </div>
  );
}
