import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cozinha from '../src/components/Cozinha/Cozinha';
import Home from './components/Home/Home'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cozinha" element={<Cozinha />} />
  </Routes>
);

export default AppRoutes;
