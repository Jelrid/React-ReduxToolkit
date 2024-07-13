import React from 'react';
import {Counter} from './features/counter/Counter';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './features/Home/Home';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}


