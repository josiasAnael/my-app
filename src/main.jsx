import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../src/pages/login/index';
import LayoutC from './pages/Layout'
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
    <Router>
      
      <LayoutC/>
    </Router>,
  document.getElementById('root')
)
