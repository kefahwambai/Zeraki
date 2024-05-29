import React from 'react';
import './upcominginvoices.css';

const invoices = [
  { school: 'Blue Horizon Secondary School', amount: 'Ksh 10,000', dueDate: '2024-06-01' },
  { school: 'Redwood Academy', amount: 'Ksh 50,000', dueDate: '2024-06-05' },
  
];

export default function UpcomingInvoices() {
  return (
    <div className="upcoming-invoices">
      <h3>Upcoming Invoices</h3>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index}>
            <p>{invoice.school}</p>
            <p>{invoice.amount}</p>
            <p>{invoice.dueDate}</p>
            <button>Collect Payment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
