import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './front/src/App';
import reportWebVitals from './front/src/reportWebVitals';
import Register from './front/src/register/register'

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
