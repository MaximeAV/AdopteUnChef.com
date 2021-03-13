import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signin from './signin/signin'
import Navigator from './Navigator'
import Tags from './tags/tags'

ReactDOM.render(
  <React.StrictMode>
    <Navigator />
  </React.StrictMode>,
  document.getElementById('root')
);