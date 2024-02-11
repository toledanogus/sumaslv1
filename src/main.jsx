import React from 'react';
import ReactDOM from 'react-dom/client';
import { SumasApp } from './SumasApp';
import {HashRouter} from 'react-router-dom';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <SumasApp />
    </HashRouter>
    
  </React.StrictMode>
);
