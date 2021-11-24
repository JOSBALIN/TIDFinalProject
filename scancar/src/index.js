import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home.js';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useState } from 'react';

// const Parse = require('parse/react-native');


// Parse.setAsyncStorage(AsyncStorage);
// //Initialize SDK
// Parse.initialize('kBkP8zQ5gmsLZQ1UiZzB37HlcD6kRQP8cejp6V1H',
// 'DllqYKE8Uy0zwC6caULyJvHbuC2ynSUi1jMFuzXL');
// Parse.serverURL="https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
