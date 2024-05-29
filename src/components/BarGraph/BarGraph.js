import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function CustomBarGraph({ title, data }) {
  const chartData = Object.keys(data).map(key => ({ name: key, value: data[key] }));

  return (
    <div>
      <h3>{title}</h3>
      <BarChart width={300} height={200} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
