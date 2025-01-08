import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './pages/body';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />

      </Routes>
    </Router>
  );
}

export default App;
