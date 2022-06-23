import React from 'react';
import ReactDOM from 'react-dom/client';
import Exemplo06_useEffect from './hooks/exemplo06_useEffect';

import Principal from './hooks/exemplo07_useContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Exemplo06_useEffect/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
