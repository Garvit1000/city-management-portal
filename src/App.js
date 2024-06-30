import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ReportIssue from './components/ReportIssue';
import CityServices from './components/CityServices';
import WasteManagement from './components/WasteManagement';
import PublicTransportation from './components/PublicTransportation';
import ParksRecreation from './components/ParksRecreation';
import EmergencyServices from './components/EmergencyServices';
import CityData from './components/CityData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/city-services" element={<CityServices />} />
          <Route path="/city-services/waste-management" element={<WasteManagement />} />
          <Route path="/city-services/public-transportation" element={<PublicTransportation />} />
          <Route path="/city-services/parks-recreation" element={<ParksRecreation />} />
          <Route path="/city-services/emergency-services" element={<EmergencyServices />} />
          <Route path="/city-data" element={<CityData />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
