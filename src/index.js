import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Router} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename="/resume">
    <Route path={'/'} component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
);


