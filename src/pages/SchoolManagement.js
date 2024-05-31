import React from 'react';
import SchoolDetails from '../components/SchoolDetail/SchoolDetails';
import '../components/Schools/schools.css';
import Navbar from '../components/Navbar/navbar';

export default function SchoolManagement() {
  return (
    <div className="school-management">
      <Navbar/>
      <SchoolDetails />
    </div>
  );
}
