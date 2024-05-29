import React from 'react';
import Invoices from '../Invoices/Invoices';
import Collections from '../Collections/Collections';
import './schooldetail.css';

const schools = [
  {
    id: 1,
    name: 'Greenwood International School',
    type: 'Primary',
    products: ['Zeraki Analytics', 'Zeraki Finance'],
    county: 'Nairobi',
    registrationDate: '2023-01-15',
    contact: 'greenwood@accounts.com',
    balance: 'Ksh 25000',
  },
  {
    id: 2,
    name: 'Blue Horizon Secondary School',
    type: 'Secondary',
    products: ['Zeraki Timetable'],
    county: 'Mombasa',
    registrationDate: '2022-08-21',
    contact: 'bluehorizon@accounts.com',
    balance: 'Ksh 15000',
  },
  {
    id: 3,
    name: 'Redwood Academy',
    type: 'IGCSE',
    products: ['Zeraki Analytics', 'Zeraki Timetable'],
    county: 'Kisumu',
    registrationDate: '2024-02-12',
    contact: 'redwood@accounts.com',
    balance: 'Ksh 30000',
  },
];

export default function SchoolDetails() {
  return (
    <div>
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
