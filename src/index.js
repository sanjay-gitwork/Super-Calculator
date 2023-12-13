import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// Import Bootstrap Icons CSS in your index.js or App.js file
// import 'bootstrap-icons/font/bootstrap-icons.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

