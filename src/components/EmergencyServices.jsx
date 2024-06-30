import React from 'react';
import '../styles/EmergencyServices.css';

const emergencyServices = [
  {
    name: 'Police Department',
    description: 'Emergency and non-emergency police services.',
    phone: '911 (Emergency), (123) 456-7890 (Non-Emergency)',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNggOwyMz3Ivgj5q3Kvo74SRWbj4gPslkiA&s'
  },
  {
    name: 'Fire Department',
    description: 'Fire emergency and prevention services.',
    phone: '911 (Emergency), (098) 765-4321 (Non-Emergency)',
    image: 'https://static.thenounproject.com/png/281792-200.png'
  },
  {
    name: 'Medical Emergency',
    description: 'Ambulance and medical emergency services.',
    phone: '911 (Emergency), (234) 567-8901 (Non-Emergency)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R_yXNKqVkZkUW6c4lOkwIxSi2nurpSeDGQ&s'
  },
  {
    name: 'Disaster Response',
    description: 'Assistance during natural disasters and other emergencies.',
    phone: '(345) 678-9012',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXkFF6tl0duRExpsdhpzxVcuQo60EkDaduw&s'
  }
];

const EmergencyServices = () => {
  return (
    <div className="emergency-services-container">
      <h1>Emergency Services</h1>
      <p>Access information on police, fire, and medical emergency services.</p>
      <div className="services-grid">
        {emergencyServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.name} className="service-image" />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p><strong>Phone:</strong> {service.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyServices;
