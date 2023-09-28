import React from 'react';
import Home from './components/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import NavbarComp from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Router>
        <Routes>
          <Route path='/sort/*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
