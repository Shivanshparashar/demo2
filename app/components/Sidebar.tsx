"use client";
import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="sidebar-toggle-btn"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        style={{ position: 'fixed', top: 18, left: 18, zIndex: 201, background: '#181c2f', color: '#fff', border: 'none', borderRadius: 6, width: 40, height: 40, display: open ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, cursor: 'pointer' }}
      >
        &#9776;
      </button>
      {open && (
        <>
          <aside className="sidebar open">
            <button
              className="sidebar-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
              style={{ position: 'absolute', top: 16, right: 16, background: 'none', color: '#fff', border: 'none', fontSize: 28, cursor: 'pointer', zIndex: 202 }}
            >
              &times;
            </button>
            <div className="sidebar-logo">N</div>
            <nav className="sidebar-nav">
              <a href="/nexona-panel/dashboard">Dashboard</a>
              <a href="/nexona-panel/orders">Orders</a>
              <a href="/nexona-panel/shipments">Shipments</a>
              <a href="/nexona-panel/settings">Settings</a>
              <a href="/nexona-panel/profile">Profile</a>
            </nav>
          </aside>
          <div className="sidebar-backdrop" onClick={() => setOpen(false)}></div>
        </>
      )}
    </>
  );
};

export default Sidebar;
