// Import necessary libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App' // Assuming App is inside components folder
import './index.css' // Optional: if you have a CSS file for styling

// Create a root element where the React app will be rendered
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
