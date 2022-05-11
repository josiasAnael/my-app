import { Formik, Field, Form, ErrorMessage } from "formik";
import React, { useState,useContext } from "react";
import { ErrorInput } from "./custonError";
import { useCustomer } from "../../context/customerContext";

import { ToastContext } from '../../context/toastContext.jsx';

import http from "../../services/serviceHttp";
const {Put}=http;
const validar = (values) => {
  let errors = {};

  if (!values.username) {
    errors.name = "El nombre es requerido";
  }
  // valirar si la identidad es valido
  if (!values.accountNumber) {
    errors.accountNumber = "La identidad es requerida";
  }
  if (!values.email) {
    errors.email = "El email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  }
  if (!values.career) {
    errors.career = "Seleccione una carrera";
  }
  if (!values.status) {
    errors.status = "Seleccione un estatus";
  }
  if(!values.InitPractice){
    errors.InitPractice = "La fecha de inicio de práctica es requerida";
  }
  if(!values.EndPractice){
    errors.EndPractice = "La fecha de fin de práctica es requerida";
  }
  // roles
  if (!values.roles) {
    errors.roles = "Seleccione un rol";
  }


  return errors;
};


const onsubmit = (values, { setSubmitting }) => {
  const toast = useContext(ToastContext)
  const {id}=values;

  Put(`/users/updateUser/${id}` , {
    ...values,
    InitPractice: new Date(values.InitPractice).toISOString(),
    EndPractice: new Date(values.EndPractice).toISOString(),
  }).then(res => {
    toast.showsuccess({
      summary: 'Actualización',
      detail: `Se Actualizo el usuario`,
      life: 3000
    });
    console.log(res);
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    setSubmitting(false);
  });  
}


export const FormUserEdit = ({ initialValuesEdit, isedit, setValues, handleSubmit }) => {
  const toast = useContext(ToastContext)
  
  const onsubmit = (values, { setSubmitting }) => {
    const {id}=values;
    Put(`/users/updateUser/${id}` , {
      ...values,
      InitPractice: new Date(values.InitPractice).toISOString(),
      EndPractice: new Date(values.EndPractice).toISOString(),
    }).then(res => {
      console.log(res);
     
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      toast.showsuccess({
        summary: 'Actualización',
        detail: `Se Actualizo el usuario`,
        life: 3000
      });

      handleSubmit();
      setSubmitting(false);
      
    });  
  }
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValuesEdit}
        validate={validar}
        onSubmit={onsubmit}
      >
        {({ errors, isSubmitting, isValid, resetForm }) => (
          <Form>
            <h1>Alumno</h1>
            <div className="form-group">
              <label
                htmlFor="username"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Nombre
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Nombre"
                className="form-control input-sm"
              />
              <ErrorMessage
                name="username"
                component={() => <ErrorInput error={errors.username} />}
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="email"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Email
              </label>
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
              <label
                htmlFor="accountNumber"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Identidad
              </label>
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
              <label
                htmlFor="career"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Carreras
              </label>
              <Field
                name="career"
                component="select"
                className="form-control input-sm"
              >
                <option
                  value=""
                  disabled
                  style={{ fontSize: "'Roboto', sans-serif" }}
                >
                  Seleccione una carrera
                </option>
                <optgroup label="Ingenierias">
                  <option
                    value="Computacion"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Ciencias de la Computacion
                  </option>
                  <option
                    value="Administracion"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Adminitración y Gestion Estrategica
                  </option>
                  <option
                    value="Civil"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Civil
                  </option>
                </optgroup>
                <optgroup label="Licenciaturas">
                  <option
                    value="Derecho"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Derecho
                  </option>
                  <option
                    value="Phicologia"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Phicologia
                  </option>
                  <option
                    value="Mercadotecnia"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Mercadotecnia
                  </option>
                  <option
                    value="CirujuaDental"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Cirugía Dental
                  </option>
                </optgroup>

                <optgroup label="Doctorado">
                  <option
                    value="Medicina"
                    style={{ fontSize: "'Roboto', sans-serif" }}
                  >
                    Medicina
                  </option>
                </optgroup>
              </Field>

              <ErrorMessage
                name="career"
                component={() => <ErrorInput error={errors.career} />}
              />
            </div>

            {/* date */}
            <div className="form-group">
              <label htmlFor="InitPractice">Fecha Inicio Practica</label>

              <div className="from-group">
                <Field
                  type="date"
                  name="InitPractice"
                  id="InitPractice"
                  className="form-control input-sm"
              />
              <ErrorMessage
                name="InitPractice"
                component={() => <ErrorInput error={errors.InitPractice} />}
              />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="EndPractice">Fecha Final Practica</label>
              

              <div className="from-group">
                <Field
                  type="date"
                  name="EndPractice"
                  id="EndPractice"
                  className="form-control input-sm"
              />
              <ErrorMessage
                name="EndPractice"
                component={() => <ErrorInput error={errors.EndPractice} />}
              />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="status"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Estado
              </label>
              <Field
                name="status"
                component="select"
                className="form-control input-sm"
              >
                <option
                  value=""
                  disabled
                  style={{ fontSize: "'Roboto', sans-serif" }}
                >
                  Seleccione un estado
                </option>
                <option value="1" style={{ fontSize: "'Roboto', sans-serif" }}>
                  Activo
                </option>
                <option value="0" style={{ fontSize: "'Roboto', sans-serif" }}>
                  Inactivo
                </option>
              </Field>
            </div>

            <div className="form-group">
              <label
                htmlFor="roles"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Cargo
              </label>
              <Field
                name="roles"
                component="select"
                className="form-control input-sm"
              >
                <option
                  value=""
                  disabled
                  style={{ fontSize: "'Roboto', sans-serif" }}
                >
                  Seleccione un cargo
                </option>
                <option
                  value="user"
                  style={{ fontSize: "'Roboto', sans-serif" }}
                >
                  Alumno
                </option>
                <option
                  value="admin"
                  style={{ fontSize: "'Roboto', sans-serif" }}
                >
                  Administrador
                </option>
              </Field>
            </div>

            <div className="row">
              <div className="col-12 mb-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isSubmitting && !isValid}
                  style={{ backgroundColor: "#004CBE" }}
                >
                  GUARDAR
                </button>

                <button
                  type="button"
                  className="btn btn-warning ml-3"
                  onClick={
                    handleSubmit
                  }
                  style={{ fontSize: "'Roboto', sans-serif" }}
                >
                  LIMPIAR
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
