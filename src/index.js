import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CampusProvider } from './Context/CampusContext.js'
import { SignInProvider } from './Context/SignInContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CampusProvider>
      <SignInProvider>
        <App />
      </SignInProvider>
    </CampusProvider>
  </React.StrictMode>
);

