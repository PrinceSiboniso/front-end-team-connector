import React, { useState, useEffect } from 'react';
import './dashboard.css';

const InternDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock fetching intern profile data
    // Mock fetching intern profile data
    const mockProfile = {
      name: 'lesego molefe',
      email: 'lesego@Zensar.com'
    };

    // Simulate a network delay
    setTimeout(() => {
      setProfile(mockProfile);
      setLoading(false);
    }, 1000);
  }, []);

  const handleMessageChange = (event) => {
    setMessageContent(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const handleCVChange = (event) => {
    const file = event.target.files[0];
    setSelectedCV(file);

    // Mock extracting skills from the uploaded CV
    const mockSkills = ['HTML', 'CSS', 'JavaScript', 'React'];
    setSkills(mockSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the message data
    const messageData = {
      content: messageContent,
      anonymous: isAnonymous,
      cv: selectedCV
    };

    // Mock sending the message to the server
    console.log('Message data:', messageData);

    // Simulate a network delay
    setTimeout(() => {
      console.log('Message sent successfully');
      // Reset the form after submission
      setMessageContent('');
      setIsAnonymous(false);
      setSelectedCV(null);
    }, 1000);
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mt-5">
      {/* Header and navigation */}
      {/* ... */}

      <main>
        <section className="mb-5">
          <h2>My Profile</h2>
          <div className="card">
            <div className="card-body">
              <p className="card-text"><strong>Name:</strong> {profile.name}</p>
              <p className="card-text"><strong>Email:</strong> {profile.email}</p>
              <p className="card-text"><strong>Skills:</strong></p>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Send Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="message-content">Message:</label>
              <textarea
                className="form-control"
                id="message-content"
                value={messageContent}
                onChange={handleMessageChange}
                rows="5"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="anonymous"
                checked={isAnonymous}
                onChange={handleAnonymousChange}
              />
              <label className="form-check-label" htmlFor="anonymous">Send Anonymously</label>
            </div>
            <div className="form-group">
              <label htmlFor="cv">Upload CV:</label>
              <input
                type="file"
                className="form-control-file"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleCVChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default InternDashboard;