import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';
import Earn from './components/Earn';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // A function to check if the current route is the home page
  const isHomePage = () => {
    return location.pathname === '/';
  };

  return (
    <div className="App">
      {isHomePage() && <Navbar />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Earn/> */}
    </div>
  );
}

export default App;
