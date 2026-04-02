
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Simple SVG icons
const PhoneIcon = () => <span style={{ marginRight: 4, verticalAlign: 'middle' }}>📞</span>;
const MailIcon = () => <span style={{ marginRight: 4, verticalAlign: 'middle' }}>✉️</span>;
const LocationIcon = () => <span style={{ marginRight: 4, verticalAlign: 'middle' }}>📍</span>;
const CalendarIcon = () => <span style={{ marginRight: 6, verticalAlign: 'middle' }}>📅</span>;
const FilterIcon = () => <span style={{ marginRight: 6, verticalAlign: 'middle' }}>🔽</span>;
const EditIcon = () => <span style={{ marginRight: 4, verticalAlign: 'middle' }}>✏️</span>;

const mockOrders = [
  {
    id: "196733",
    date: "02 Apr 2026 13:22:47",
    pickup: {
      name: "nexona",
      phone: "123456789",
      email: "test@gmail.com",
      address: "Delhi",
    },
    consignee: {
      name: "test1",
      phone: "123456789",
      email: "test@gmail.com",
      address: "Delhi",
      previousOrders: 2,
    },
    product: {
      name: "Air Pro 2nd Generation ANC (Ty...",
      sku: "NONANC",
      qty: 1,
    },
    package: {
      deadWt: "0.3 kg",
      size: "12 x 8 x 8 (cm)",
      volWt: "0.154 kg",
    },
    payment: { mode: "COD", price: 1657.82 },
    status: "New",
  },
  {
    id: "196732",
    date: "02 Apr 2026 12:02:42",
    pickup: {
      name: "nexona",
      phone: "123456789",
      email: "test@gmail.com",
      address: "Delhi",
    },
    consignee: {
      name: "test1",
      phone: "123456789",
      email: "test@gmail.com",
      address: "Delhi",
    },
    product: {
      name: "Air Pro 2nd Generation ANC (Ty...",
      sku: "NONANC",
      qty: 1,
    },
    package: {
      deadWt: "0.3 kg",
      size: "12 x 8 x 8 (cm)",
      volWt: "0.154 kg",
    },
    payment: { mode: "Prepaid", price: 1600 },
    status: "New",
  },
  {
    
    id: "196731",
    date: "02 Apr 2026 11:15:14",
    pickup: {
      name: "nexona",
      phone: "123456789",
      email: "test@gmail.com",
      address: "Delhi",
    },
    consignee: {
      name: "test1",
      phone: "123456789",
      email: "test@gmail.com",
      address: "Delhi",
    },
    product: {
      name: "Air Pro 2nd Generation ANC (Ty...",
      sku: "ANC",
      qty: 1,
    },
    package: {
      deadWt: "0.3 kg",
      size: "12 x 8 x 8 (cm)",
      volWt: "0.154 kg",
    },
    payment: { mode: "Prepaid", price: 1841 },
    status: "New",
  },
];

const orderTabs = [
  "New (5935)",
  "Booked (0)",
  "Pickup / Manifests (3)",
  "In Transit (1)",
  "Out For Delivery (0)",
  "Delivered (213)",
  "RTO (349)",
  "NDR (0)",
  "All (6831)",
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  return (
    <div style={{ background: '#f7faff', minHeight: '100vh', padding: 0 }}>
      <div style={{ background: '#fff', padding: '18px 32px 10px 32px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontWeight: 700, fontSize: 22, margin: 0 }}>Orders</h2>
          <div>
            <button
              style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
              onClick={() => router.push('/nexona-panel/add-order')}
            >
              + Add Order
            </button>
          </div>
        </div>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
          <input placeholder="Search awb number, order Id, phone number, email" style={{ flex: 1, padding: '8px 14px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 15, marginRight: 10 }} />
          <button style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 6, padding: '8px 14px', cursor: 'pointer', marginRight: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
            <CalendarIcon /> Last 90 Days
          </button>
          <button style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 6, padding: '8px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
            <FilterIcon /> Filters
          </button>
        </div>
        <div style={{ marginTop: 18, display: 'flex', gap: 18, borderBottom: '1px solid #e5e7eb', paddingBottom: 4 }}>
          {orderTabs.map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(idx)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === idx ? '3px solid #3b82f6' : '3px solid transparent',
                color: activeTab === idx ? '#3b82f6' : '#222b45',
                fontWeight: 600,
                fontSize: 15,
                padding: '8px 0',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '18px 32px' }}>
        <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px #0001', padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.5fr 1.5fr 1fr 1fr 1fr', background: '#f3f6fa', fontWeight: 600, color: '#222b45', fontSize: 11.2 }}>
            <div style={headerCell}>Order Details</div>
            <div style={headerCell}>Pickup</div>
            <div style={headerCell}>Consignee</div>
            <div style={headerCell}>Product Details</div>
            <div style={headerCell}>Package Details</div>
            <div style={headerCell}>Payment Mode</div>
            <div style={headerCell}>Status</div>
            <div style={headerCell}>Action</div>
          </div>
          {mockOrders.map((order, idx) => (
            <div key={order.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.5fr 1.5fr 1fr 1fr 1fr', borderBottom: '1px solid #f0f0f0', fontSize: 11.2, background: idx % 2 === 0 ? '#fff' : '#f9fbfd' }}>
              <div style={{ padding: '12px 8px' }}>
                <div style={{ fontWeight: 600, color: '#3b82f6', fontSize: 15, marginBottom: 2 }}><a href="#" style={{ color: '#3b82f6', textDecoration: 'underline' }}>{order.id}</a></div>
                <div style={{ color: '#6b7280', fontSize: 13 }}>{order.date}</div>
              </div>
              <div style={{ padding: '12px 8px' }}>
                <div style={{ fontWeight: 600, marginBottom: 2 }}>{order.pickup.name}</div>
                  <div style={{ color: '#6b7280', fontSize: 10, marginBottom: 2 }}><PhoneIcon />{order.pickup.phone}</div>
                  <div style={{ color: '#6b7280', fontSize: 10, marginBottom: 2 }}><MailIcon />{order.pickup.email}</div>
                  <div style={{ color: '#6b7280', fontSize: 10 }}><LocationIcon />{order.pickup.address}</div>
              </div>
              <div style={{ padding: '12px 8px' }}>
                <div style={{ fontWeight: 600, marginBottom: 2 }}>{order.consignee.name}</div>
                  {order.consignee.previousOrders && (
                    <div style={{ color: '#3b82f6', fontSize: 12, marginBottom: 2 }}>Previous Orders: <span style={{ background: '#3b82f6', color: '#fff', borderRadius: 6, padding: '2px 8px', fontWeight: 600 }}>{order.consignee.previousOrders}</span></div>
                  )}
                  <div style={{ color: '#6b7280', fontSize: 10, marginBottom: 2 }}><PhoneIcon />{order.consignee.phone}</div>
                  <div style={{ color: '#6b7280', fontSize: 10, marginBottom: 2 }}><MailIcon />{order.consignee.email}</div>
                  <div style={{ color: '#6b7280', fontSize: 10 }}><LocationIcon />{order.consignee.address}</div>
              </div>
              <div style={{ padding: '12px 8px' }}>
                <div style={{ fontWeight: 600 }}>{order.product.name}</div>
                <div style={{ color: '#6b7280', fontSize: 10 }}>SKU: {order.product.sku}</div>
                <div style={{ color: '#6b7280', fontSize: 10 }}>Qty: {order.product.qty}</div>
              </div>
              <div style={{ padding: '12px 8px' }}>
                <div style={{ color: '#6b7280', fontSize: 10 }}>Dead Wt: {order.package.deadWt}</div>
                <div style={{ color: '#6b7280', fontSize: 10   }}>{order.package.size}</div>
                <div style={{ color: '#6b7280', fontSize: 10 }}>Volumetric wt: {order.package.volWt}</div>
              </div>
              <div style={{ padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontWeight: 600, color: '#3b82f6', fontSize: 15 }}>₹ {order.payment.price}</div>
                <span style={{ background: order.payment.mode === 'COD' ? '#d1fae5' : '#fee2e2', color: order.payment.mode === 'COD' ? '#059669' : '#b91c1c', borderRadius: 6, padding: '2px 8px', fontWeight: 600, fontSize: 13, alignSelf: 'flex-start' }}>{order.payment.mode}</span>
              </div>
              <div style={{ padding: '12px 8px' }}>
                <span style={{ background: '#e0e7ff', color: '#3730a3', borderRadius: 6, padding: '2px 8px', fontWeight: 600, fontSize: 13 }}>{order.status}</span>
              </div>
              <div style={{ padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, padding: '7px 0', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  🚚 Ship Now
                </button>
                <button style={{ background: 'none', color: '#3b82f6', border: 'none', fontWeight: 500, fontSize: 13, cursor: 'pointer', textAlign: 'left', padding: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <EditIcon />Edit Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const headerCell = {
  padding: '12px 8px',
  borderRight: '1px solid #e5e7eb',
};
