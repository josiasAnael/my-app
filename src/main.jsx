import "./assets/bootstrap/jquery-3.5.1";
// import 'jquery/dist/jquery.min.js'

// import 'jquery';

// import './assets/bootstrap/jquery.dataTables.min.js'

// import 'datatables.net-dt/js/dataTables.dataTables.js'
// import 'datatables.net-dt/css/jquery.dataTables.min.css'

import React from "react";
import ReactDOM from "react-dom";
import LayoutC from "./pages/Layout";

import { SWRConfig } from "swr";

import http from "./services/serviceHttp";
const { fetcher } = http;
ReactDOM.render(
  <>
    <SWRConfig value={{}}>
      <LayoutC />
    </SWRConfig>
  </>,
  document.getElementById("root")
);
