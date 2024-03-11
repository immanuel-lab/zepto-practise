// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Store from './Store';


// Define your App component
function AppRouter() {
  return (
    <Router>
    
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/store"  element={<Store/>}  />
        </Routes>
 
    </Router>
  );
}

export default AppRouter;
