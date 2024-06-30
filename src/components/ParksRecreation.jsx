import React from 'react';
import '../styles/Parks.css'

const parkFeatures = [
  {
    title: 'Picnic Areas',
    icon: '🧺',
    description: 'Designated picnic spots with tables and benches.'
  },
  {
    title: 'Playgrounds',
    icon: '🎠',
    description: 'Safe and fun playgrounds for children of all ages.'
  },
  {
    title: 'Walking Trails',
    icon: '🚶‍♂️',
    description: 'Scenic trails for walking, jogging, and cycling.'
  },
  {
    title: 'Sports Fields',
    icon: '⚽',
    description: 'Fields for various sports activities like soccer and baseball.'
  },
  {
    title: 'Dog Parks',
    icon: '🐕',
    description: 'Dedicated areas for dogs to play and exercise.'
  },
  {
    title: 'Events and Activities',
    icon: '🎉',
    description: 'Regular events and activities organized for community engagement.'
  }
];

const ParksRecreation = () => {
  return (
    <div className="parks-container">
      <h1 className="parks-title">Parks and Recreation</h1>
      <p className="parks-description">Discover the features and amenities available in our parks.</p>
      <div className="features-grid">
        {parkFeatures.map((feature, index) => (
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

export default ParksRecreation;
