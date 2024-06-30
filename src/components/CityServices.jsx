import React from 'react';
import '../styles/CityServices.css';
import { Link } from 'react-router-dom';
const services = [
    {
      title: 'Waste Management',
      description: 'Learn about waste collection schedules and recycling programs.',
      image: 'https://cdn1.vectorstock.com/i/1000x1000/54/35/waste-management-flat-linear-long-shadow-icons-set-vector-28365435.jpg',
      link: '/city-services/waste-management'
    },
    {
      title: 'Public Transportation',
      description: 'Find routes, schedules, and fare information for city buses and trains.',
      image: 'https://static.vecteezy.com/system/resources/previews/004/868/524/original/city-transport-icons-public-transport-pictograms-public-transportation-round-flat-icons-subway-taxi-bus-trolleybus-symbols-vector.jpg',
        link: '/city-services/public-transportation'
    },
    {
      title: 'Parks and Recreation',
      description: 'Discover parks, recreational facilities, and upcoming events.',
      image: 'https://cdn-icons-png.freepik.com/512/2203/2203973.png',
      link: '/city-services/parks-recreation'
    },
    {
      title: 'Emergency Services',
      description: 'Access information on police, fire, and medical emergency services.',
      image: 'https://www.shutterstock.com/image-vector/24-hour-emergency-service-label-260nw-2399391769.jpg',
      link: '/city-services/emergency-services'
    }
  ];
  
  const CityServices = () => {
    return (
      <div className="city-services-container">
        <h1>City Services</h1>
        <p>Explore the various services offered by our city to improve your quality of life.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to={service.link} className="learn-more-link">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CityServices;
