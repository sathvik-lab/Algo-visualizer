import React from 'react';
import Home from './components/SortingVisualizer/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/rateus' element={<Rateus />} />
          <Route path='/donor' element={<Donor presentUser={presentUser} />} />
          <Route path='/receiver' element={<Receiver presentUser={presentUser} />} />
          <Route path='/home' element={presentUser ? (<Home presentUser={presentUser} />) : <Login />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
