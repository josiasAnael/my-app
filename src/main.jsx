import "./assets/bootstrap/jquery-3.5.1";
// import 'jquery/dist/jquery.min.js'

// import 'jquery';

// import './assets/bootstrap/jquery.dataTables.min.js'

// import 'datatables.net-dt/js/dataTables.dataTables.js'
// import 'datatables.net-dt/css/jquery.dataTables.min.css'

import React from "react";
import { createRoot } from "react-dom/client";
import LayoutC from "./pages/Layout";

import { SWRConfig } from "swr";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toastprovider } from "./context/toastContext";

createRoot(document.getElementById("root")).render(
  <>
    <SWRConfig value={{}}>
      <Toastprovider>
        <LayoutC />
      </Toastprovider>
    </SWRConfig>
  </>
);
