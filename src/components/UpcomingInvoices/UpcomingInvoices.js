import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './upcominginvoices.css';
import CollectPaymentModal from '../CollectPaymentModal/collectpaymentmodal'; 

export default function UpcomingInvoices() {
  const [invoices, setInvoices] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    axios.get('https://zerakidb.vercel.app/upcominginvoices')
      .then(response => {
        const sortedInvoices = response.data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        setInvoices(sortedInvoices);
      })
      .catch(error => console.error('Error fetching upcoming invoices:', error));
      
    axios.get('https://zerakidb.vercel.app/schools')
      .then(response => {
        setSchools(response.data);
      })
      .catch(error => console.error('Error fetching schools:', error));
  }, []);

  const openCollectPaymentModal = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const closeCollectPaymentModal = () => {
    setSelectedInvoice(null);
  };

  return (
    <div className="upcoming-invoices">
      <h3>Upcoming Invoices</h3>
      <ul>
        {invoices.map((invoice, index) => {
          const school = schools.find(school => school.id === invoice.schoolId);
          return (
            <li key={index}>
              <p><span>School:</span> {invoice.name}</p>
              <p><span>Amount:</span> {invoice.amount}</p>
              <p><span>Due Date:</span> {invoice.dueDate}</p>
              <button onClick={() => openCollectPaymentModal(invoice)}>Collect Payment</button>
            </li>
          );
        })}
      </ul>
      {selectedInvoice && (
        <CollectPaymentModal
          invoice={selectedInvoice}
          onClose={closeCollectPaymentModal}
        />
      )}
    </div>
  );
}
