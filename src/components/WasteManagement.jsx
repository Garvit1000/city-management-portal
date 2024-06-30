import React from 'react';
import '../styles/WasteManagement.css';

const wasteFeatures = [
  {
    title: 'Waste Collection Schedule',
    description: 'Find out when waste is collected in your area.',
    icon: '🗑️'
  },
  {
    title: 'Recycling Programs',
    description: 'Learn about recycling initiatives and guidelines.',
    icon: '♻️'
  },
  {
    title: 'Composting Initiatives',
    description: 'Information on composting and organic waste disposal.',
    icon: '🌱'
  },
  {
    title: 'Hazardous Waste Disposal',
    description: 'Guidelines and locations for disposing of hazardous waste.',
    icon: '☠️'
  },
  {
    title: 'Electronic Waste Recycling',
    description: 'Recycling options for electronics and e-waste.',
    icon: '🖥️'
  }
];

const WasteManagement = () => {
  return (
    <div className="waste-container">
      <h1 className="waste-title">Waste Management</h1>
      <p className="waste-description">Explore waste management services and initiatives in our city.</p>
      <div className="features-grid">
        {wasteFeatures.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteManagement;
