import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);