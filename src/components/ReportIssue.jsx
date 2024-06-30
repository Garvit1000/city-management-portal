import React, { useState } from 'react';
import '../styles/ReportIssue.css'
const ReportIssue = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [issueType, setIssueType] = useState('');
    const [issue, setIssue] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const issues = JSON.parse(localStorage.getItem('issues')) || [];
      const newIssue = { 
        name, 
        email, 
        phone, 
        address, 
        issueType, 
        issue, 
        date: new Date().toLocaleString() 
      };
      issues.push(newIssue);
      localStorage.setItem('issues', JSON.stringify(issues));
  
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setIssueType('');
      setIssue('');
      setSubmitted(true);
    };
  
    return (
      <div className="report-issue-container">
        <h1>Report an Issue</h1>
        {submitted && <p className="thank-you">Thank you for submitting the issue. We will look into it.</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Issue Type:</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              required
            >
              <option value="">Select Issue Type</option>
              <option value="pothole">Pothole</option>
              <option value="street-light">Street Light</option>
              <option value="garbage">Garbage</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Issue Description:</label>
            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ReportIssue;
