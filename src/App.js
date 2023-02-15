import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Icon from './Pages/Icon';
import Login from './Pages/Login';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Icon /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </main>
  );
}

export default App;
