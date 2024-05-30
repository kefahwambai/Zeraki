import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Invoices from '../Invoices/Invoices';
import Collections from '../Collections/Collections';
import './schooldetail.css';

export default function SchoolDetails() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('https://zerakidb.vercel.app/schools')
      .then(response => setSchools(response.data))
      .catch(error => console.error('Error fetching schools:', error));
  }, []);

  return (
    <div className="schools-container">
      {schools.map((school) => (
        <div key={school.id} className="school-details">
          <h2>{school.name}</h2>
          <p>Type: {school.type}</p>
          <p>Products: {school.products.join(', ')}</p>
          <p>County: {school.county}</p>
          <p>Registration Date: {school.registrationDate}</p>
          <p>Contact: {school.contact}</p>
          <p>Balance: {school.balance}</p>
          <Invoices schoolId={school.id} />
          <Collections schoolId={school.id} />
        </div>
      ))}
    </div>
  );
}
