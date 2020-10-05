import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MovieProvider} from "./MovieContext"
import AddMovie from './addMovie';




ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
   
    <App />
<AddMovie/>
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

