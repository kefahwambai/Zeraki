import React, { useState } from 'react';
import './collectpaymentmodal.css';

export default function CollectPaymentModal({ invoice, onClose }) {
  const [paymentDetails, setPaymentDetails] = useState({ amount: '', date: '', method: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Collecting payment for invoice:', invoice.id, paymentDetails);
    onClose();
  };

  return (
    <div className="collect-payment-modal">
      <div className="modal-content">
        <h4>Collect Payment</h4>
        <p><strong>Amount Due:</strong> {invoice.amount}</p>
        <p><strong>Due Date:</strong> {invoice.dueDate}</p>
        <input
          type="text"
          name="amount"
          value={invoice.amount}
          onChange={handleInputChange}
          placeholder="Amount"
        />
        <input
          type="date"
          name="date"
          value={paymentDetails.date}
          onChange={handleInputChange}
          placeholder="Payment Date"
        />
        <input
          type="text"
          name="method"
          value={paymentDetails.method}
          onChange={handleInputChange}
          placeholder="Payment Method"
        />
        <button onClick={handleSubmit}>Submit Payment</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
