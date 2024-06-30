import React, { useState } from 'react';
import '../styles/PublicTransportation.css';

const PublicTransportation = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [transportationOptions, setTransportationOptions] = useState([]);
  
    // Mock data for demonstration
    const mockTransportationData = [
      {
        id: 1,
        mode: 'Bus',
        from: 'Central Station',
        to: 'City Center',
        departure: '09:00 AM',
        arrival: '09:30 AM',
        fare: '$2.50'
      },
      {
        id: 2,
        mode: 'Train',
        from: 'City Center',
        to: 'Suburb Station',
        departure: '10:15 AM',
        arrival: '11:00 AM',
        fare: '$3.00'
      },
      {
        id: 3,
        mode: 'Bus',
        from: 'Downtown',
        to: 'Shopping Mall',
        departure: '11:30 AM',
        arrival: '12:15 PM',
        fare: '$1.75'
      },
      {
        id: 4,
        mode: 'Train',
        from: 'Suburb Station',
        to: 'Central Station',
        departure: '12:45 PM',
        arrival: '01:30 PM',
        fare: '$3.50'
      }
      // Add more mock data as needed
    ];
  
    // Set initial transportation options to display
    useState(() => {
      setTransportationOptions(mockTransportationData);
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulate searching for transportation options based on form inputs
      const filteredOptions = mockTransportationData.filter(option =>
        option.from.toLowerCase().includes(fromLocation.toLowerCase()) &&
        option.to.toLowerCase().includes(toLocation.toLowerCase()) &&
        option.departure >= departureTime &&
        option.arrival <= arrivalTime
      );
      setTransportationOptions(filteredOptions);
    };
  
    return (
      <div className="public-transportation-container">
        <h1 className="public-transportation-title">Find My Bus & Train</h1>
        <form className="transportation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fromLocation">From:</label>
            <input
              type="text"
              id="fromLocation"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="Enter starting location"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="toLocation">To:</label>
            <input
              type="text"
              id="toLocation"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="Enter destination"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="departureTime">Departure Time:</label>
            <input
              type="time"
              id="departureTime"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="arrivalTime">Arrival Time:</label>
            <input
              type="time"
              id="arrivalTime"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Search</button>
        </form>
        {transportationOptions.length > 0 ? (
          <div className="transportation-results">
            <h2>Available Transportation Options</h2>
            <ul className="options-list">
              {transportationOptions.map(option => (
                <li key={option.id} className={`option-item ${option.mode.toLowerCase()}`}>
                  <div>
                    <strong>{option.mode}</strong>: {option.from} to {option.to}<br />
                    Departure: {option.departure} | Arrival: {option.arrival}<br />
                    Fare: {option.fare}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="availability-message">No options available in the given time interval.</p>
        )}
      </div>
    );
  };

export default PublicTransportation;
