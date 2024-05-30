import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './invoices.css';

export default function Invoices({ schoolId }) {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/invoices?schoolId=${schoolId}`)
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Error fetching invoices:', error));
  }, [schoolId]);

  return (
    <div className="invoices">
      <h3>Invoices</h3>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index}>
            <p><span>Invoice Number:</span> {invoice.number}</p>
            <p><span>Item:</span> {invoice.item}</p>
            <p><span>Creation Date:</span> {invoice.creationDate}</p>
            <p><span>Due Date:</span> {invoice.dueDate}</p>
            <p><span>Amount:</span> {invoice.amount}</p>
            <p><span>Paid Amount:</span> {invoice.paidAmount}</p>
            <p><span>Balance:</span> {invoice.balance}</p>
            <p><span>Status:</span> {invoice.status}</p>
            <p><span>Days Until Due:</span> {invoice.daysUntilDue}</p>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
