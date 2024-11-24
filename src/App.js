// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Models from './pages/Models';
import Detail from './pages/Detail';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Favorites from './pages/Favorites';

const App = () => (
  <Router>
    <div className="pb-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models/:brandName" element={<Models />} />
        <Route path="/detail/:brandName/:modelName" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Navbar />
    </div>
  </Router>
);

export default App;
