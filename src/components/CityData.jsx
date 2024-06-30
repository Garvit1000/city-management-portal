import React, { useState, useEffect } from 'react';
import '../styles/CityData.css';


const mockData = [
  {
    category: 'Traffic',
    data: [
      { id: 1, location: 'Main Street', status: 'Heavy congestion' },
      { id: 2, location: 'Highway 101', status: 'Accident reported' },
      { id: 3, location: 'Bridge Street', status: 'Normal' }
    ]
  },
  {
    category: 'Weather',
    data: [
      { id: 4, location: 'City Center', status: 'Sunny, 24°C' },
      { id: 5, location: 'North Area', status: 'Partly cloudy, 22°C' },
      { id: 6, location: 'East Side', status: 'Rainy, 18°C' }
    ]
  },
  {
    category: 'Events',
    data: [
      { id: 7, location: 'Park Square', status: 'Music festival today' },
      { id: 8, location: 'Convention Center', status: 'Conference in progress' },
      { id: 9, location: 'Stadium', status: 'Football match at 3 PM' }
    ]
  }
];

const CityData = () => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    // Simulate fetching real-time data (can be replaced with actual API call)
    setTimeout(() => {
      setCityData(mockData);
    }, 1000); // Update data every 1 second
  }, []);

  return (
    <div className="city-data-container">
      <h1 className="city-data-title">City Data</h1>
      <p className="city-data-description">Real-time information on city operations and events.</p>
      <div className="data-categories">
        {cityData.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <ul className="data-list">
              {category.data.map(item => (
                <li key={item.id} className="data-item">
                  <strong>{item.location}</strong>: {item.status}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityData;
