import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/sidebar';
import Home from './pages/Home';
import SchoolManagement from './pages/SchoolManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schools" element={<SchoolManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
