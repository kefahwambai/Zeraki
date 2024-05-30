import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './upcominginvoices.css';

export default function UpcomingInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('https://zerakidb.vercel.app/upcominginvoices')
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => console.error('Error fetching upcoming invoices:', error));
  }, []);
  
  

  return (
    <div className="upcoming-invoices">
      <h3>Upcoming Invoices</h3>
      <ul>
        {invoices.map((invoice, index) => {
          const school = schools.find(school => school.id === invoice.schoolId);
          return (
            <li key={index}>
              <p><span></span> {invoice.name}</p>
              <p><span>Amount:</span> {invoice.amount}</p>
              <p><span>Due Date:</span> {invoice.dueDate}</p>
              <button>Collect Payment</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
