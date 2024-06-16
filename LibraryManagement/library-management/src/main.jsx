import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './router';
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { ThemeContextProvider } from './useContext/ThemeContext.jsx';
import { AuthContext, AuthContextProvider } from './useContext/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  </AuthContextProvider>
    
)
