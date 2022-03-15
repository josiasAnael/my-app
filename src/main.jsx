import './assets/bootstrap/jquery-3.5.1'
import 'jquery/dist/jquery.min.js'

import 'jquery'; 

import './assets/bootstrap/jquery.dataTables.min.js'


import 'datatables.net-dt/js/dataTables.dataTables.js'
import 'datatables.net-dt/css/jquery.dataTables.min.css'

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
