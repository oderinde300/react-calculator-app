import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CalculatorProvider from './store/calculator-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);
