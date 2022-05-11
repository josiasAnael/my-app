
import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useEffect, useState ,useContext } from "react";
import { ErrorInput } from "./custonError";
import http from "../../services/serviceHttp";

import { ToastContext } from '../../context/toastContext.jsx';


const {Post}=http;
const validar = (values) => {
    let errors = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    if (!values.username) {                                                                                                                                                            
      errors.username = "El nombre es requerido";
    }
    // valirar si la identidad es valido
    if (!values.accountNumber) {
      errors.accountNumber = "La identidad es requerida";
    }
    // valirar si la contraseña es valido
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    }
    // valirar si la contraseña es valido
    if (!values.confirmPassword) {
      errors.confirmPassword = "La contraseña es requerida";
    }
    if(!(values.password === values.confirmPassword)){
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "El email no es válido";
    }
    if (!values.career) {
      errors.career = "Seleccione una carrera";
    }
    // console.log(errors);
    return errors;
  };
  
  
  
  export const FormUser = ({initialValues,isedit,setValues,handleSubmit }) => {
    const toast = useContext(ToastContext)

    const onSubmit = (values,{ setSubmitting }) => {
      console.log(values);
      Post("/users/createUser",values).then(res=>{
        console.log(res);
        toast.showsuccess({
          summary: 'Usuario',
          detail: `Se creo el usuario ${res.user.username}`,
          life: 3000
        });

      }).catch(err=>{
        console.log(err);
      }).finally(()=>{
        handleSubmit();
        setSubmitting(false);
      });
    };
    
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validate={validar}
            onSubmit={onSubmit} 
            
          >
            {({ errors, isSubmitting,isValid,resetForm }) => (
              <Form>
                <h1>Alumno</h1>
                <div className="form-group">
                  <label htmlFor="username" style={{fontSize:"'Roboto', sans-serif" }}>Nombre</label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Nombre"
                    className="form-control input-sm"
                  />
                  <ErrorMessage
                    name="username"
                    component={() => <ErrorInput error={errors.username} />}
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
                    name="accountNumber"
                    placeholder="Identidad"
                    className="form-control input-sm"
                    
                  />
                  
                  <ErrorMessage
                    name="accountNumber"
                    component={() => <ErrorInput error={errors.accountNumber} />}
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
                  <label htmlFor="career" style={{fontSize:"'Roboto', sans-serif" }}>Carreras</label>
                  <Field component="select" name="career" className="form-control input-sm"
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

                  <ErrorMessage name="career" component={() => <ErrorInput error={errors.career} />} />
                </div>


                
                <div className="row">
                  <div className="col-12 mb-6">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting || !isValid} style={{backgroundColor:"#004CBE" }}>
                      GUARDAR 
                    </button>
                
          
                    <button type="button" className="btn btn-warning ml-3" onClick={handleSubmit} style={{fontSize:"'Roboto', sans-serif" }}>
                      LIMPIAR
                    </button>
                    
                  </div>
                </div>

              </Form>
            )}
          </Formik>
    )
}