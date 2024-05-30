import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './collections.css';

export default function Collections({ schoolId }) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    axios.get(`https://zerakidb.vercel.app/collections?schoolId=${schoolId}`)
      .then(response => setCollections(response.data))
      .catch(error => console.error('Error fetching collections:', error));
  }, [schoolId]);

  const handleStatusChange = (collectionId, newStatus) => {
    axios.patch(`https://zerakidb.vercel.app/collections/${collectionId}`, { status: newStatus })
      .then(response => setCollections(collections.map(col => col.id === collectionId ? response.data : col)))
      .catch(error => console.error('Error updating collection status:', error));
  };

  return (
    <div className="collections">
      <h3>Collections</h3>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            <p>Invoice Number: {collection.invoiceNumber}</p>
            <p>Collection Number: {collection.collectionNumber}</p>
            <p>Date: {collection.date}</p>
            <p>Status: {collection.status}</p>
            <p>Amount: {collection.amount}</p>
            <button onClick={() => handleStatusChange(collection.id, 'Bounced')}>Mark as Bounced</button>
            <button onClick={() => handleStatusChange(collection.id, 'Valid')}>Mark as Valid</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
