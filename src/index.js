import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
