import React from 'react';
import TopCard from '../TopCard/TopCard';
import PieChart from '../PieChart/PieChart';
import BarGraph from '../BarGraph/BarGraph';
import UpcomingInvoices from '../UpcomingInvoices/UpcomingInvoices';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
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
          <BarGraph title="Zeraki Analytics" data={{ primary: 40, secondary: 30, igcse: 5 }} />
          <BarGraph title="Zeraki Finance" data={{ primary: 20, secondary: 25, igcse: 5 }} />
          <BarGraph title="Zeraki Timetable" data={{ primary: 60, secondary: 20, igcse: 10 }} />
        </div>
      </div>
      <UpcomingInvoices />
    </div>
  );
}
