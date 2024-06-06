
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import InternDashboard from './Components/InternDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/InternDashboard" element={<InternDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
