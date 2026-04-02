import React from "react";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  // Example data for cards and status grid
  const cards = [
    { title: (<><span>Active</span><br /><span>Shipment</span></>), value: '2,847', sub: 'Active Shipments', badge: '+12.3%', color: 'green' },
    { title: 'Delivery Rate', value: '96.2%', sub: 'Delivery Rate', badge: '+2.8%', color: 'blue' },
    { title: 'In Transit', value: '1,598', sub: 'In Transit', badge: '+5.4%', color: 'purple' },
    { title: 'RTO Rate', value: '2.1%', sub: 'RTO Rate', badge: '-3.8%', color: 'orange' },
    { title: 'Avg TAT', value: '2.3d', sub: 'Avg TAT', badge: '-1.8%', color: 'red' },
  ];
  const statusList = [
    { title: 'DELIVERED', value: 1952, sub: 'Shipment Delivered', badge: '78.6%', color: 'green' },
    { title: 'INTRANSIT', value: 257, sub: 'In Transit', badge: '10.1%', color: 'blue' },
    { title: 'ORDER_PLACED', value: 126, sub: 'Order Placed', badge: '5.1%', color: 'yellow' },
    { title: 'OUT_FOR_DELIVERY', value: 66, sub: 'Out for Delivery', badge: '2.6%', color: 'purple' },
    { title: 'RTO_DELIVERED', value: 44, sub: 'RTO Delivered', badge: '1.7%', color: 'orange' },
    { title: 'OUT_FOR_PICKUP', value: 32, sub: 'Out for Pickup', badge: '1.3%', color: 'pink' },
    { title: 'AWB_REGISTERED', value: 21, sub: 'AWB Registered', badge: '0.8%', color: 'blue' },
    { title: 'CANCELLED_ORDER', value: 12, sub: 'Order Cancelled', badge: '0.5%', color: 'red' },
    { title: 'RTO_INTRANSIT', value: 11, sub: 'RTO In Transit', badge: '0.4%', color: 'orange' },
    { title: 'FAILED_DELIVERY', value: 9, sub: 'Failed Delivery', badge: '0.3%', color: 'red' },
    { title: 'RTO_OUT_FOR_DELIVERY', value: 8, sub: 'RTO Out for Delivery', badge: '0.3%', color: 'yellow' },
    { title: 'LOST', value: 8, sub: 'Shipment Lost', badge: '0.3%', color: 'red' },
    { title: 'PICKUP_PENDING', value: 8, sub: 'Pickup Pending', badge: '0.3%', color: 'yellow' },
    { title: 'UNKNOWN', value: 6, sub: 'Unknown', badge: '0.2%', color: 'purple' },
    { title: 'RTO', value: 1, sub: 'Manual RTO Return', badge: '0.0%', color: 'orange' },
  ];

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['dashboard-cards']}>
        {cards.map((card, i) => (
          <div key={card.title} className={`${styles['dashboard-card']} ${styles[card.color]}`}>
            <div className={styles['card-title']}>{card.title}</div>
            <div className={styles['card-value']}>{card.value}</div>
            <div className={styles['card-sub']}>{card.sub}</div>
            <div className={styles['card-badge']}>{card.badge}</div>
          </div>
        ))}
      </div>
      <div className={styles['status-section']}>
        <div className={styles['status-header']}>Order Status Distribution</div>
        <div className={styles['status-sub']}>Real-time analytics • Last 7 days</div>
        <div className={styles['status-grid']}>
          {statusList.map((status, i) => (
            <div key={status.title} className={`${styles['status-card']} ${styles[status.color]}`}>
              <div className={styles['status-title']}>{status.title}</div>
              <div className={styles['status-value']}>{status.value}</div>
              <div className={styles['status-sub']}>{status.sub}</div>
              <div className={styles['status-badge']}>{status.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
