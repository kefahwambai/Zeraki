import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './invoices.css';

export default function Invoices({ schoolId }) {
  const [invoices, setInvoices] = useState([]);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    item: '',
    creationDate: '',
    dueDate: '',
    amount: '',
    paidAmount: '',
    balance: '',
    status: '',
  });
  const [collection, setCollection] = useState({ amount: '', status: 'partial' });

  useEffect(() => {
    fetchInvoices();
  }, [schoolId, filter]);

  const fetchInvoices = () => {
    axios.get(`https://zerakidb.vercel.app/invoices?schoolId=${schoolId}`)
      .then(response => {
        const filteredInvoices = filterInvoices(response.data);
        setInvoices(filteredInvoices);
      })
      .catch(error => console.error('Error fetching invoices:', error));
  };

  const filterInvoices = (invoices) => {
    if (filter === 'completed') {
      return invoices.filter(invoice => invoice.status === 'completed');
    }
    if (filter === 'pending') {
      return invoices.filter(invoice => invoice.status === 'pending');
    }
    return invoices;
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

  const handleNewInvoiceChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCreateInvoice = () => {
    const invoiceNumber = `INV-${Date.now()}`;
    const invoice = { ...newInvoice, number: invoiceNumber, schoolId };
    axios.post('https://zerakidb.vercel.app/invoices', invoice)
      .then(() => {
        setNewInvoice({
          item: '',
          creationDate: '',
          dueDate: '',
          amount: '',
          paidAmount: '',
          balance: '',
          status: '',
        });
        setShowCreateForm(false); 
        fetchInvoices();
      })
      .catch(error => console.error('Error creating invoice:', error));
  };

  const handleCollectionChange = (e) => {
    const { name, value } = e.target;
    setCollection(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddCollection = (id) => {
    const invoice = invoices.find(invoice => invoice.id === id);
    const updatedPaidAmount = parseFloat(invoice.paidAmount) + parseFloat(collection.amount);
    const updatedBalance = parseFloat(invoice.amount) - updatedPaidAmount;
    const updatedStatus = updatedBalance <= 0 ? 'completed' : collection.status === 'bounced' ? 'pending' : 'pending';
    const updatedInvoice = { ...invoice, paidAmount: updatedPaidAmount, balance: updatedBalance, status: updatedStatus };
    axios.put(`https://zerakidb.vercel.app/invoices/${id}`, updatedInvoice)
      .then(() => {
        setCollection({ amount: '', status: 'partial' });
        fetchInvoices();
      })
      .catch(error => console.error('Error updating invoice:', error));
  };

  return (
    <div className="invoices">
      <h3>Invoices</h3>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <div className="new-invoice-toggle">
        <button onClick={() => setShowCreateForm(!showCreateForm)}>
          {showCreateForm ? 'Close' : 'Create New Invoice'}
        </button>
      </div>
      {showCreateForm && (
        <div className="new-invoice">
          <h4>Create New Invoice</h4>
          <select name="item" value={newInvoice.item} onChange={handleNewInvoiceChange}>
            <option value="">Select Item</option>
            <option value="Zeraki Timetable">Zeraki Timetable</option>
            <option value="Zeraki Finance">Zeraki Finance</option>
            <option value="Zeraki Analytics">Zeraki Analytics</option>
          </select>
          <input name="creationDate" value={newInvoice.creationDate} onChange={handleNewInvoiceChange} placeholder="Creation Date" />
          <input name="dueDate" value={newInvoice.dueDate} onChange={handleNewInvoiceChange} placeholder="Due Date" />
          <input name="amount" value={newInvoice.amount} onChange={handleNewInvoiceChange} placeholder="Amount" />
          <input name="paidAmount" value={newInvoice.paidAmount} onChange={handleNewInvoiceChange} placeholder="Paid Amount" />
          <input name="balance" value={newInvoice.balance} onChange={handleNewInvoiceChange} placeholder="Balance" />
          <input name="status" value={newInvoice.status} onChange={handleNewInvoiceChange} placeholder="Status" />
          <button onClick={handleCreateInvoice}>Create Invoice</button>
        </div>
      )}
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
                <div className="add-collection">
                  <input type="number" name="amount" placeholder="Collection Amount" value={collection.amount} onChange={handleCollectionChange} />
                  <select name="status" value={collection.status} onChange={handleCollectionChange}>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="bounced">Bounced</option>
                  </select>
                  <button onClick={() => handleAddCollection(invoice.id)}>Add Collection</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
