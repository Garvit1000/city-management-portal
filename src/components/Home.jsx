import React from 'react';
import '../styles/Home.css';
const services = [
  {
    title: 'Report Issue',
    description: 'File issues or raise complaints regarding city services.',
    image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/report-problem-1458001-1234005.png?f=webp',
    link: '/report-issue'
  },
  {
    title: 'City Services',
    description: 'Access information about various city services.',
    image: 'https://cdn-icons-png.flaticon.com/512/9235/9235208.png',
    link: '/city-services'
  },
  {
    title: 'City Data',
    description: 'View real-time data on city operations.',
    image: 'https://thumbs.dreamstime.com/b/city-cloud-storage-line-icon-data-vector-illustration-isolated-white-database-computing-outline-style-design-designed-web-155661596.jpg',
    link: '/city-data'
  }
];
const events = [
  {
    title: 'City Marathon',
    date: 'July 15, 2024',
    location: 'City Center',
    description: 'Join the annual city marathon to promote health and fitness.'
  },
  {
    title: 'Community Clean-Up Day',
    date: 'August 5, 2024',
    location: 'Various Locations',
    description: 'Participate in cleaning up our community for a cleaner environment.'
  }
  // Add more events as needed
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the City Portal</h1>
      <p>Access city services, report issues, and view real-time data on city operations.</p>
      <div className="card-container">
        {services.map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={service.image} alt={service.title} />
                <h2>{service.title}</h2>
              </div>
              <div className="flip-card-back">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href={service.link}>Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Ongoing Events */}
      <section className="home-section">
        <h2>Ongoing Events</h2>
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
