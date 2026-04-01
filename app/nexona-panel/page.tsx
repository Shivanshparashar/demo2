"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NexonaPanel() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#fff", display: "flex" }}>
      <aside style={{
        width: 240,
        height: "100vh",
        background: "#0a1020",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "32px 0 0 0",
        boxSizing: "border-box",
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: 1,
        boxShadow: "2px 0 12px #0a102033"
      }}>
        <div style={{ padding: "0 32px 32px 32px", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
          NOXAN.SHIP
        </div>
        <a
          href="/nexona-panel/dashboard"
          style={{
            display: 'block',
            textDecoration: 'none',
            padding: "12px 32px",
            fontWeight: 700,
            fontSize: 18,
            margin: "0 0 10px 32px",
            color: "#4fc3f7",
            borderRadius: 8,
            background: "none",
            cursor: "pointer",
            userSelect: "none",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          Dashboard
        </a>
        <div
          style={{
            padding: "12px 32px",
            fontWeight: 700,
            fontSize: 18,
            margin: "0 0 10px 32px",
            color: "#43e97b",
            borderRadius: 8,
            background: "none",
            cursor: "pointer",
            userSelect: "none",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          Order
        </div>
        <div
          style={{
            padding: "12px 32px",
            fontWeight: 700,
            fontSize: 18,
            margin: "0 0 10px 32px",
            color: "#f953c6",
            borderRadius: 8,
            background: "none",
            cursor: "pointer",
            userSelect: "none",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          MIS
        </div>
        <div
          style={{
            padding: "12px 32px",
            fontWeight: 700,
            fontSize: 18,
            margin: "0 0 16px 32px",
            color: "#ffeb3b",
            borderRadius: 8,
            background: "none",
            cursor: "pointer",
            userSelect: "none",
            transition: "background 0.2s, color 0.2s"
          }}
        >
          Profile
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: "#4fc3f7",
            color: "#0a1020",
            border: "none",
            borderRadius: 8,
            padding: "12px 32px",
            fontWeight: 700,
            fontSize: 18,
            cursor: "pointer",
            margin: "0 0 0 32px",
            boxShadow: "0 2px 8px #4fc3f744"
          }}
        >
          LOGOUT
        </button>
      </aside>
      <main style={{ flex: 1, height: "100vh", overflowY: 'auto', background: '#f7faff' }}>
       
      </main>
    </div>
  );
}