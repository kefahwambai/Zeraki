import React from 'react';
import './topcard.css';

export default function TopCard({ title, value }) {
  return (
    <div className="top-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
