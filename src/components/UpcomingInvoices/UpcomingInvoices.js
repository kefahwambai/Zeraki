import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './upcominginvoices.css';

export default function UpcomingInvoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/invoices?_sort=dueDate&_order=asc')
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Error fetching upcoming invoices:', error));
  }, []);

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
