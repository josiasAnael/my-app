import React ,{ useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Split, Line } from "../../components/Layout/styles/Split";
import { ErrorInput } from "./custonError";
import {useCustomer} from "../../context/customerContext";
import {DataTable} from 'primereact/datatable'
import { Column } from "primereact/column";
import axios from 'axios';  


const initialValues = {
  name: "",
  email: "",
  identity: "",
  password: "",
  confirmPassword: "",
  cars: "",
};
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
  // console.log(errors);
  return errors;
};

const onSubmit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 2));
  console.log('values', values)
  setTimeout(() => {
    setSubmitting(false);
  }, 400);
};

export const Students = () => {
  const {
    loading,
    data,
  } =useCustomer();
  // console.log(loading);


  return (
    <Split>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-xl-4">
          <Formik
            initialValues={initialValues}
            validate={validar}
            onSubmit={onSubmit}
          >
            {({ errors, isSubmitting,isValid,resetForm }) => (
              <Form>
                <h1>Alumno</h1>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
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
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="identity">Identidad</label>
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
                  <label htmlFor="password">Contraseña</label>
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
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    className="form-control input-sm"
                  />

                  <ErrorMessage
                    name="confirmPassword"
                    component={() => (
                      <ErrorInput error={errors.confirmPassword} />
                    )}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cars">Carreras</label>
                  <Field
                    component="select"
                    name="cars"
                    className="form-control input-sm"
                  >
                    <option value="" disabled>
                      Seleccione una carrera
                    </option>
                    <optgroup label="Ingenierias">
                      <option value="Computacion">
                        Ciencias de la Computacion
                      </option>
                      <option value="Administracion">
                        Adminitración y Gestion Estrategica
                      </option>
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
                  </Field>

                  <ErrorMessage
                    name="cars"
                    component={() => <ErrorInput error={errors.cars} />}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting || !isValid}
                >
                  Submit
                </button>

                <button
                  type="reset"
                  className="btn btn-warning"
                  onClick={resetForm}
                >
                  Limpiar
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="col-sm-12 col-md-8 col-xl-8">
          <h1>Alumnos</h1>
          {!loading?
            <DataTable
              value={data}
              responsiveLayout="scroll"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              dataKey="id"
              paginator
              emptyMessage="No data found."
              className="datatable-responsive"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
              rows={10}
            >
                <Column field="accountnumber" sortable header="Cuenta"></Column>
                <Column field="username" sortable header="Nombre"></Column>
                <Column field="career" sortable header="Carrera"></Column>
                <Column field="createdAt" sortable header="Creado"></Column>
            </DataTable>:
            <h1>Cargando</h1>
          }
        </div>
      </div>
    </Split>
  );
};

export default Students;
