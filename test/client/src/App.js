import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './features/Home/Home';
import { Empty } from './features/Home/Empty'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empty" element={<Empty />} />
        </Routes>
    </Router>
  );
}


