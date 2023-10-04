import React from 'react';
import Home from './components/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import NavbarComp from './components/Navbar';
import Graphs from './components/GraphVizualizer/Graphs';
// import Sorts from './components/SortingVisualizer/Sorting';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Router>
        <Routes>
          <Route path='/sort' element={<Home />} />
          <Route path='/graphs' element={<Graphs />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
