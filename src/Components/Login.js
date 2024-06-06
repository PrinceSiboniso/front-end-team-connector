import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userType, setUserType] = useState('intern');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fakeLogin(username, password, userType);
      if (response.success) {
        // Navigate to a different route based on the user type
        if (userType === 'intern') {
          navigate('/InternDashboard');
        } else if (userType === 'manager') {
          navigate('/ManagerDashboard');
        }
      } else {
        setError(response.message);
        alert('Login failed: ' + response.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      alert('Login error: ' + err);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-page">
      <div   className="outside-image" />
      <div className='container'>
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
       
        <div className="inputs-use">
          <div className="input-groups">
          <FaUser className="icon" />
            <input type="text" 
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
            />
          
          <FaLock className="icon" />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="user-type">
  <label>
    <input
      type="radio"
      value="intern"
      checked={userType === 'intern'}
      onChange={() => setUserType('intern')}
    />
    Intern
  </label>
  <label>
    <input
      type="radio"
      value="manager"
      checked={userType === 'manager'}
      onChange={() => setUserType('manager')}
    />
    Manager
  </label>
</div>
        </div>
        <br></br>
        <div className="Accnt" style={{margin_bottom :"61px",paddingLeft: "119px" }}>
          Don't have an account? <Link to="/CreateAccount" className="create-account-link">Create Account</Link>
        </div>

        <div className="submit-container">
          <button className="submit" onClick={handleLogin}>Login</button>
        </div>
         
      </div>
    </div>
  );
};

const fakeLogin = async (username, password, userType) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (userType === 'intern' && username === 'Zensar' && password === 'password') {
    return { success: true };
  } else if (userType === 'manager' && username === 'Admin' && password === 'admin') {
    return { success: true };
  } else {
    return { success: false, message: 'Invalid Username or Password' };
  }
};

export default Login;
