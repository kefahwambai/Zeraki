import React from 'react';
import './collections.css';

const collections = [
  { schoolId: 1, invoiceNumber: 1, collectionNumber: 101, date: '2024-05-10', status: 'Valid', amount: 'Ksh 50000' },
  { schoolId: 2, invoiceNumber: 2, collectionNumber: 102, date: '2024-05-15', status: 'Valid', amount: 'Ksh 70000' },
  { schoolId: 3, invoiceNumber: 3, collectionNumber: 103, date: '2024-05-20', status: 'Bounced', amount: 'Ksh 30000' },
 
];

export default function Collections({ schoolId }) {
  const filteredCollections = collections.filter(collection => collection.schoolId === schoolId);

  return (
    <div className="collections">
      <h3>Collections</h3>
      <ul>
        {filteredCollections.map((collection, index) => (
          <li key={index}>
            <p>Invoice Number: {collection.invoiceNumber}</p>
            <p>Collection Number: {collection.collectionNumber}</p>
            <p>Date: {collection.date}</p>
            <p>Status: {collection.status}</p>
            <p>Amount: {collection.amount}</p>
            <button>Mark as Bounced</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
