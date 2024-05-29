import React from 'react';
import './invoices.css';

const invoices = [
  {
    schoolId: 1,
    number: 1,
    item: 'Zeraki Analytics',
    creationDate: '2024-05-01',
    dueDate: '2024-06-01',
    amount: 'Ksh 100000',
    paidAmount: 'Ksh 50000',
    balance: 'Ksh 50000',
    status: 'Pending',
    daysUntilDue: 3
  },
  {
    schoolId: 2,
    number: 2,
    item: 'Zeraki Timetable',
    creationDate: '2024-05-05',
    dueDate: '2024-06-05',
    amount: 'Ksh 70000',
    paidAmount: 'Ksh 30000',
    balance: 'Ksh 40000',
    status: 'Pending',
    daysUntilDue: 7
  }
];

export default function Invoices({ schoolId }) {
  const filteredInvoices = invoices.filter(invoice => invoice.schoolId === schoolId);

  return (
    <div className="invoices">
      <h3>Invoices</h3>
      <ul>
        {filteredInvoices.map((invoice, index) => (
          <li key={index}>
            <p>Invoice Number: {invoice.number}</p>
            <p>Item: {invoice.item}</p>
            <p>Creation Date: {invoice.creationDate}</p>
            <p>Due Date: {invoice.dueDate}</p>
            <p>Amount: {invoice.amount}</p>
            <p>Paid Amount: {invoice.paidAmount}</p>
            <p>Balance: {invoice.balance}</p>
            <p>Status: {invoice.status}</p>
            <p>Days Until Due: {invoice.daysUntilDue}</p>
            <button>Edit</button>
            <br />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
