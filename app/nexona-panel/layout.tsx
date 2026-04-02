" use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import "../components/sidebar.css";

export default function NexonaPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main style={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>{children}</main>
    </>
  );
}
