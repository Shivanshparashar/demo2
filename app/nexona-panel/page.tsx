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

      <main style={{ flex: 1, height: "100vh", overflowY: 'auto', background: '#f7faff' }}>
       
      </main>
    </div>
  );
}