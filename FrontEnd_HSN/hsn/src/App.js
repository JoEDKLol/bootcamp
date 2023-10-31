import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Hsn from './components/Hsn';

function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<Hsn/>} />
      </Routes>
    </div>
  );
}

export default App;
