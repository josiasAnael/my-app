import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

import { ErrorInput } from "./custonError";



const validar = (values) => {
    let errors = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    if (!values.name) {                                                                                                                                                            
      errors.name = "El nombre es requerido";
    }
    // valirar si la identidad es valido
    if (!values.identity) {
      errors.identity = "La identidad es requerida";
    }
    // valirar si la contraseña es valido
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    }
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "El email no es válido";
    }
    if (!values.cars) {
      errors.cars = "Seleccione una carrera";
    }
    if (!values.status)  {
        errors.status = "Seleccione un estatus";
    }

    return errors;
  };

export const FormUserEdit =({initialValuesEdit, isedit,setValues }) =>{
    
    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    return(
        <>
        <Formik
        enableReinitialize={true}
        initialValues={initialValuesEdit}
        validate={validar}
        onSubmit={(data, { setSubmitting }) => {
            onSubmit(data, setSubmitting, isedit );
            }
        }
        >
        {({ errors, isSubmitting,isValid,resetForm }) => (
            <Form>
                <h1>Alumno</h1>
                <div className="form-group">
                    <label htmlFor="name" style={{fontSize:"'Roboto', sans-serif" }}>Nombre</label>
                    <Field
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="form-control input-sm"
                    />
                    <ErrorMessage
                    name="name"
                    component={() => <ErrorInput error={errors.name} />}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" style={{fontSize:"'Roboto', sans-serif" }}>Email</label>
                    <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control input-sm"
                    />
                    <ErrorMessage
                    name="email"
                    component={() => <ErrorInput error={errors.email} />}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="identity" style={{fontSize:"'Roboto', sans-serif" }}>Identidad</label>
                    <Field
                      type="text"
                      name="identity"
                      placeholder="Identidad"
                      className="form-control input-sm"

                    />

                    <ErrorMessage
                      name="identity"
                      component={() => <ErrorInput error={errors.identity} />}
                    />
                </div>

                <div className="form-group">
                  <label htmlFor="password" style={{fontSize:"'Roboto', sans-serif" }}>Contraseña</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="form-control input-sm"
                  />

                  <ErrorMessage
                    name="password"
                    component={() => <ErrorInput error={errors.password} />}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" style={{fontSize:"'Roboto', sans-serif" }}>Confirmar Contraseña</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    className="form-control input-sm"
                  />
                 <ErrorMessage name="confirmPassword" component={() => (
                      <ErrorInput error={errors.confirmPassword} />
                    )}
                  />
                </div>

                <div className="form-group" >
                  <label htmlFor="cars" style={{fontSize:"'Roboto', sans-serif" }}>Carreras</label>
                  <Field name="cars" component="select"  className="form-control input-sm"
                  >
                    <option value="" disabled style={{fontSize:"'Roboto', sans-serif" }}>
                      Seleccione una carrera
                    </option>
                    <optgroup label="Ingenierias">
                      <option value="Computacion" style={{fontSize:"'Roboto', sans-serif" }}>
                        Ciencias de la Computacion
                      </option>
                      <option value="Administracion" style={{fontSize:"'Roboto', sans-serif" }}>
                        Adminitración y Gestion Estrategica
                      </option>
                      <option value="Civil" style={{fontSize:"'Roboto', sans-serif" }}>Civil</option>
                    </optgroup>
                    <optgroup label="Licenciaturas">
                      <option value="Derecho" style={{fontSize:"'Roboto', sans-serif" }}>Derecho</option>
                      <option value="Phicologia" style={{fontSize:"'Roboto', sans-serif" }}>Phicologia</option>
                      <option value="Mercadotecnia" style={{fontSize:"'Roboto', sans-serif" }}>Mercadotecnia</option>
                      <option value="CirujuaDental" style={{fontSize:"'Roboto', sans-serif" }}>Cirugía Dental</option>
                    </optgroup>

                    <optgroup label="Doctorado">
                      <option value="Medicina" style={{fontSize:"'Roboto', sans-serif" }}>Medicina</option>
                    </optgroup>
                  </Field>

                  <ErrorMessage name="cars" component={() => <ErrorInput error={errors.cars} />} />
                </div>

                {/* date */}
                <div className="form-group">
                    <label htmlFor="icon">Fecha Inicio Practica</label>
                    <Calendar 
                    name="InitPractice" 
                    id="icon" 
                    /*value={date1}*/
                    onChange={(e) => setDate1(e.value)} showIcon 
                    />
                   
                </div>

                <div className="form-group">
                    <label htmlFor="icon">Fecha Final Practica</label>
                    <Calendar  
                        name="EndPractice" 
                        id="icon" 
                       /* value={date2}*/ 
                        onClick={(e) => setDate2(e.value)} showIcon
                         
                        />

                   
                </div>



                <div className="form-group">
                  <label htmlFor="status" style={{fontSize:"'Roboto', sans-serif" }}>Estado</label>
                  <Field name="status" component="select"  className="form-control input-sm"
                  >
                    <option value="" disabled style={{fontSize:"'Roboto', sans-serif" }}>
                      Seleccione un estado
                    </option>
                    <option value="Aguascalientes" style={{fontSize:"'Roboto', sans-serif" }}>Activo</option>
                    <option value="BajaCalifornia" style={{fontSize:"'Roboto', sans-serif" }}>Inactivo</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label htmlFor="roles" style={{fontSize:"'Roboto', sans-serif" }}>Cargo</label>
                  <Field name="roles" component="select"  className="form-control input-sm"
                  >
                    <option value="" disabled style={{fontSize:"'Roboto', sans-serif" }}>
                      Seleccione un cargo
                    </option>
                    <option value="Alumno" style={{fontSize:"'Roboto', sans-serif" }}>Alumno</option>
                    <option value="Admin" style={{fontSize:"'Roboto', sans-serif" }}>Administrador</option>
                  </Field>
                </div>

                <div className="row">
                  <div className="col-12 mb-6">
                    <button type="submit" className="btn btn-primary" disabled={!isSubmitting && !isValid} style={{backgroundColor:"#004CBE" }}>
                      GUARDAR 
                    </button>
                
          
                    <button type="button" className="btn btn-warning ml-3" onClick={()=>{
                        setValues({
                            name:"",
                            email:"",
                            identity:"",
                            password:"",
                            confirmPassword:"",
                            cars:"",
                            
                        })
                    }} style={{fontSize:"'Roboto', sans-serif" }}>
                      LIMPIAR
                    </button>
                    
                  </div>
                </div>

            </Form>
            )}
          </Formik>
        </>
        )
}