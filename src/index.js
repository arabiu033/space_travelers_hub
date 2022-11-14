import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
      <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
