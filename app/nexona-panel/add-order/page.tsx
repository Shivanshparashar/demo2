"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddOrderPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    consigneePhone: "",
    consigneeName: "",
    consigneeEmail: "",
    consigneeAddress: "",
    consigneePincode: "",
    consigneeCity: "",
    consigneeState: "",
    consigneeCountry: "India",
    consigneeLandmark: "",
    billingSame: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Next step logic here
  }

  return (
    <div style={{ background: '#f7faff', minHeight: '100vh', padding: 0 }}>
      {/* Top Bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '24px 32px 0 24px', background: 'transparent' }}>
        <span style={{ fontWeight: 700, fontSize: 22 }}>Add Order</span>
        <div style={{ flex: 1 }} />
        <button
          onClick={() => router.push('/nexona-panel/orders')}
          style={{
            background: '#f3f6fa',
            border: '1px solid #e5e7eb',
            fontSize: 16,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '8px 22px 8px 16px',
            borderRadius: 6,
            color: '#222b45',
            fontWeight: 600,
            boxShadow: '0 1px 4px #0001',
            transition: 'background 0.2s, border 0.2s',
            gap: 8,
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#e5e7eb';
            e.currentTarget.style.border = '1px solid #cbd5e1';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#f3f6fa';
            e.currentTarget.style.border = '1px solid #e5e7eb';
          }}
        >
          <span style={{ fontSize: 20, marginRight: 4 }}>&larr;</span> Back
        </button>
      </div>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 0, margin: '24px 0 0 24px' }}>
        <button style={{ background: '#222b45', color: '#fff', border: 'none', borderRadius: '6px 0 0 6px', padding: '8px 32px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Single Order</button>
        <button style={{ background: '#fff', color: '#222b45', border: '1px solid #e5e7eb', borderLeft: 'none', borderRadius: '0 6px 6px 0', padding: '8px 32px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Bulk Orders</button>
      </div>
      {/* Stepper */}
      <div style={{ display: 'flex', margin: '24px 0 0 24px', background: '#fff', borderRadius: 6, boxShadow: '0 1px 4px #0001', width: 'calc(100% - 48px)' }}>
        {['Consignee Details', 'Pickup Details', 'Order Details', 'Package Details'].map((step, idx) => (
          <div key={step} style={{ flex: 1, padding: '12px 0', textAlign: 'center', fontWeight: 600, fontSize: 15, borderRight: idx < 3 ? '1px solid #e5e7eb' : 'none', background: idx === 0 ? '#222b45' : 'transparent', color: idx === 0 ? '#fff' : '#222b45', borderRadius: idx === 0 ? '6px 0 0 6px' : idx === 3 ? '0 6px 6px 0' : '0' }}>
            {idx + 1}. {step}
          </div>
        ))}
      </div>
      {/* Form Card */}
      <form onSubmit={handleSubmit} style={{ maxWidth: 1200, margin: '32px auto 0 auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px #0001', padding: 32 }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 18 }}>Consignee Details <span style={{ fontWeight: 400, color: '#6b7280', fontSize: 15 }}>( Who is the order being delivered to? )</span></div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Phone Number *</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ background: '#f3f6fa', border: '1px solid #e5e7eb', borderRadius: 6, padding: '8px 12px', fontSize: 15, color: '#222b45' }}>+91</span>
              <input name="consigneePhone" value={form.consigneePhone} onChange={handleChange} style={inputStyle} placeholder="Enter phone number" required />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Full Name *</label>
            <input name="consigneeName" value={form.consigneeName} onChange={handleChange} style={inputStyle} placeholder="Enter consignee full Name" required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Email <span style={{ color: '#6b7280', fontWeight: 400, fontSize: 13 }}>(optional)</span></label>
            <input name="consigneeEmail" value={form.consigneeEmail} onChange={handleChange} style={inputStyle} placeholder="Enter Email" />
          </div>
        </div>
        <div style={{ marginBottom: 8, color: '#3b82f6', fontSize: 14, cursor: 'pointer', userSelect: 'none' }}>
          + Add alternate phone number, GSTIN, consignee company
        </div>
        <div style={{ fontWeight: 700, fontSize: 18, margin: '32px 0 18px 0' }}>Consignee Address <span style={{ fontWeight: 400, color: '#6b7280', fontSize: 15 }}>( Where is the order being delivered? )</span></div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
          <div style={{ flex: 2 }}>
            <label style={labelStyle}>Full Address *</label>
            <input name="consigneeAddress" value={form.consigneeAddress} onChange={handleChange} style={inputStyle} placeholder="Enter complete consignee address" required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Landmark <span style={{ color: '#6b7280', fontWeight: 400, fontSize: 13 }}>(optional)</span></label>
            <input name="consigneeLandmark" value={form.consigneeLandmark} onChange={handleChange} style={inputStyle} placeholder="Enter landmark" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Pincode *</label>
            <input name="consigneePincode" value={form.consigneePincode} onChange={handleChange} style={inputStyle} placeholder="Enter Pincode" required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>City *</label>
            <input name="consigneeCity" value={form.consigneeCity} onChange={handleChange} style={inputStyle} placeholder="Enter City" required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>State *</label>
            <input name="consigneeState" value={form.consigneeState} onChange={handleChange} style={inputStyle} placeholder="Enter state" required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Country *</label>
            <input name="consigneeCountry" value={form.consigneeCountry} onChange={handleChange} style={inputStyle} placeholder="Country" required />
          </div>
        </div>
        <div style={{ margin: '16px 0 32px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" name="billingSame" checked={form.billingSame} onChange={handleChange} style={{ width: 18, height: 18 }} />
          <span style={{ fontSize: 15 }}>Is billing address the same as Shipping address</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 38px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Next</button>
        </div>
      </form>
    </div>
  );
}

const labelStyle = { fontWeight: 600, marginBottom: 4, display: 'block', color: '#222b45' };
const inputStyle = { width: '100%', padding: '8px 10px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 15, marginTop: 2, marginBottom: 2 };
