import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
  );
};

export default App;