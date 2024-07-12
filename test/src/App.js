import React from 'react';
import {Counter} from './features/counter/Counter';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}