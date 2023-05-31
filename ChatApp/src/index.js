import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './login';
/// check why if i will delete the app it will delete the background
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);