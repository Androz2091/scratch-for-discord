import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App2';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
)

//i dont see it check dm