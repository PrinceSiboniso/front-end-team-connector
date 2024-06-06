import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { Link } from 'react-router-dom';

export const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Here, you would normally handle the registration logic, e.g., make an API call to register the user.
    // For this example, we'll simply navigate to the login page after a successful registration.
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="outside-image" />
      <div className="container">
        <div className="header">
          <div className="text">Create account</div>
          <div className="underline"></div>
        </div>
        
        <div className="inputs">
          <div className="input-group">
          
            <input type="text" placeholder="Firstname" />
            
            <input type="text" placeholder="Lastname" />
          </div>
          <div className="input-group">
          
            <input type="email" placeholder="Email" />
           
            <input type="password" placeholder="Password" />
          </div>
        
          <input type="text" placeholder="Employee ID" />
        </div>
        
        <div className="Acnt" style={{ marginTop: "1rem",paddingLeft: "70px"  }}>
          Already have an account? <Link to="/" className="login-link">Login here</Link>
        </div>
        
        <div className="submit-contain">
          <button className="submit" onClick={handleCreateAccount}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
