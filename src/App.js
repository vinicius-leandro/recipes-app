import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Icon from './Pages/Icon';
import Login from './Pages/Login';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Icon /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
