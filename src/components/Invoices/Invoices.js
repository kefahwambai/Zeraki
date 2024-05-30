import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './invoices.css';

export default function Invoices({ schoolId }) {
  const [invoices, setInvoices] = useState([]);
  const [editingInvoice, setEditingInvoice] = useState(null);

  useEffect(() => {
    fetchInvoices();
  }, [schoolId]);

  const fetchInvoices = () => {
    axios.get(`https://zerakidb.vercel.app/invoices?schoolId=${schoolId}`)
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Error fetching invoices:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`https://zerakidb.vercel.app/invoices/${id}`)
      .then(() => fetchInvoices())
      .catch(error => console.error('Error deleting invoice:', error));
  };

  const handleEdit = (invoice) => {
    setEditingInvoice(invoice);
  };

  const handleSaveEdit = (id) => {
    axios.put(`https://zerakidb.vercel.app/invoices/${id}`, editingInvoice)
      .then(() => {
        setEditingInvoice(null);
        fetchInvoices();
      })
      .catch(error => console.error('Error updating invoice:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingInvoice(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="invoices">
      <h3>Invoices</h3>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {editingInvoice && editingInvoice.id === invoice.id ? (
              <div>
                <p><span>Invoice Number:</span> <input name="number" value={editingInvoice.number} onChange={handleChange} /></p>
                <p><span>Item:</span> <input name="item" value={editingInvoice.item} onChange={handleChange} /></p>
                <p><span>Creation Date:</span> <input name="creationDate" value={editingInvoice.creationDate} onChange={handleChange} /></p>
                <p><span>Due Date:</span> <input name="dueDate" value={editingInvoice.dueDate} onChange={handleChange} /></p>
                <p><span>Amount:</span> <input name="amount" value={editingInvoice.amount} onChange={handleChange} /></p>
                <p><span>Paid Amount:</span> <input name="paidAmount" value={editingInvoice.paidAmount} onChange={handleChange} /></p>
                <p><span>Balance:</span> <input name="balance" value={editingInvoice.balance} onChange={handleChange} /></p>
                <p><span>Status:</span> <input name="status" value={editingInvoice.status} onChange={handleChange} /></p>
                <p><span>Days Until Due:</span> <input name="daysUntilDue" value={editingInvoice.daysUntilDue} onChange={handleChange} /></p>
                <button onClick={() => handleSaveEdit(invoice.id)}>Save</button>
                <button onClick={() => setEditingInvoice(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <p><span>Invoice Number:</span> {invoice.number}</p>
                <p><span>Item:</span> {invoice.item}</p>
                <p><span>Creation Date:</span> {invoice.creationDate}</p>
                <p><span>Due Date:</span> {invoice.dueDate}</p>
                <p><span>Amount:</span> {invoice.amount}</p>
                <p><span>Paid Amount:</span> {invoice.paidAmount}</p>
                <p><span>Balance:</span> {invoice.balance}</p>
                <p><span>Status:</span> {invoice.status}</p>
                <p><span>Days Until Due:</span> {invoice.daysUntilDue}</p>
                <button className="edit" onClick={() => handleEdit(invoice)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(invoice.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
