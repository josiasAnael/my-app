import React, {Component} from "react";
import { render } from "react-dom";

import { Split, Line } from '../../components/Layout/styles/Split';

import {Tbl} from './Tbl.jsx'

const dataSet = [
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
  ]

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
                  <input type="text" placeholder="Correo" className="form-control input-lg" id="Correo" />
                </div>

                <div className="form-group">
                  <label htmlFor="inputlg">Contraseña</label>
                  <input type="password" placeholder="Contraseña" className="form-control input-lg" id="password1"/>
                </div>

                <div className="form-group">
                  <label htmlFor="inputlg">Confirmar contraseña</label>
                  <input type="password" placeholder="Contraseña" className="form-control input-lg" id="password2"/>
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
              <Tbl />
           
              </div>
          </div>
        </div>
      </form>
    </Split>
    );

};

export default Students;
