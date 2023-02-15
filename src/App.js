import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Icon from './Pages/Icon';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Icon /> } />
          <Route />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
