import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';
import './App.css';
import Header from './components/Header';
import Home  from './components/Home';
import Details from './components/Details';



function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
