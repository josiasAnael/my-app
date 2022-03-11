import React from "react";

import { Split, Line } from '../../components/Layout/styles/Split';

import './pdf/dataTables.bulma.min.js'
import './pdf/jquery.dataTables.min.js'

import './pdf/dataTables.bulma.min.css'
import './pdf/bulma.min.css'


export const Students = () => {
  
    return(
      <Split >
       <form action="#" className="p-3 form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                <div className="form-group">
                  <label htmlFor="inputsm">Nombre Completo:</label>
                  <input type="text"  placeholder="Nombre Completo" className="form-control input-sm" id="inputsm"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="inputdefault">Identidad:</label>
                  <input type="text" placeholder="Identidad" className="form-control" id="inputdefault"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="inputlg">Corrreo</label>
                  <input type="text" placeholder="Correo" className="form-control input-lg" id="inputlg"/>
                </div>

                <div className="form-group">
                  <label htmlFor="inputlg">Corrreo</label>
                  <input type="password" placeholder="Correo" className="form-control input-lg" id="inputlg"/>
                </div>

                <div className="form-group">
                  <label htmlFor="inputlg">Confirmar contraseña</label>
                  <input type="password" placeholder="Correo" className="form-control input-lg" id="inputlg"/>
                </div>


                <div className="form-group">
                    <label htmlFor="inputlg">Seleccione la Carrera:</label>
                    <div>
                    <select name="cars" id="cars">
                        <optgroup label="Ingenierias">
                            <option value="Computacion">Ciencias de la Computacion</option>
                            <option value="Administracion">Adminitración y Gestion Estrategica</option>
                            <option value="Civil">Civil</option>                          
                        </optgroup>

                        <optgroup label="Licenciaturas">
                            <option value="Derecho">Derecho</option>
                            <option value="Phicologia">Phicologia</option>
                            <option value="Mercadotecnia">Mercadotecnia</option>
                            <option value="CirujuaDental">Cirugía Dental</option>
                        </optgroup>
                        
                        <optgroup label="Doctorado">
                            <option value="Medicina">Medicina</option>
                        </optgroup>
                    </select>
                    </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-6">
              <h1>Alumnos</h1>
              <table id="alumno" className="table is-striped" style={{width:'100%'}}>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Salary</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>$320,800</td>
                      </tr>
                      <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td>$170,750</td>
                      </tr>
                    </tbody>
                </table>
              </div>
          </div>
        </div>
      </form>
    </Split>
    );
    
};

export default Students;
