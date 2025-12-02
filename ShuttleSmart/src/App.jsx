import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

// Import all your page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The exact attribute ensures only the root path (/) shows the Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Set the path for each page */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demo" element={<DemoPage />} />

        {/* Optional: Add a 404/Not Found page here */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;