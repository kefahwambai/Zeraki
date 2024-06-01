import React from 'react';
import TopCard from '../TopCard/TopCard';
import PieChart from '../PieChart/PieChart';
import BarGraph from '../BarGraph/BarGraph';
import UpcomingInvoices from '../UpcomingInvoices/UpcomingInvoices';
import './dashboard.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar/>
      <div className="top-cards">
        <TopCard title="Collections" value="150" />
        <TopCard title="Sign-ups" value="215" />
        <TopCard title="Total Revenue" value="Ksh 150,000" />
        <TopCard title="Bounced Cheques" value="1" />
      </div>
      <div className="charts">
        <div className="pie-charts">
          <PieChart title="Zeraki Analytics" target={100} achieved={75} />
          <PieChart title="Zeraki Finance" target={100} achieved={50} />
          <PieChart title="Zeraki Timetable" target={100} achieved={90} />
        </div>
        <div className="bar-graphs">
          <BarGraph title="Zeraki Analytics" data={{ primary: 40, secondary: 30, igcse: 5 }} colors={['#8884d8', '#82ca9d', '#ffc658']} />
          <BarGraph title="Zeraki Finance" data={{ primary: 20, secondary: 25, igcse: 5 }} colors={['#8dd1e1', '#83a6ed', '#8e4585']} />
          <BarGraph title="Zeraki Timetable" data={{ primary: 60, secondary: 20, igcse: 10 }} colors={['#ff7300', '#387908', '#ffbb28']} />
        </div>
      </div>
      <div className="upcoming-invoices">
        <UpcomingInvoices />
      </div>
    </div>
  );
}
