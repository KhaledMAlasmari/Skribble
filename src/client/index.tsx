import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from './components/Lobby';
import Start from './components/Start';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="/create" element={<Lobby />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
