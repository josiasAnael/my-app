import React, { useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { ErrorInput } from "./custonError";
import { Split } from "../../components/Layout/styles/Split";
import { useCustomer } from "../../context/customerContext";

// importar data table
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import Modal from "../../components/modal/Modal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormUser } from "./form";
import { FormUserEdit } from "./formedit";

const initialValuesEdit = {
  name: "",
  email: "",
  identity: "",
  password: "",
  confirmPassword: "",
  cars: "",

  status:""
};


const initialValues = {
  name: "",
  email: "",
  identity: "",
  password: "",
  confirmPassword: "",
  cars: "",
};

export const Students = () => {
  const { loading, data } = useCustomer();

  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [values, setValues] = useState(initialValues);


  const handleChange = (user) => {
    setValues({
      name: user.username,
      email: user.email,
      identity: user.accountnumber,
      cars: user.career,
    });
    setisEdit(true);
  };

  return (
    <>
      <Split>
        <div className="row">
          <div className="col-sm-12 col-md-3 col-xl-3">
            <FormUserEdit initialValuesEdit={values} isedit={isEdit} setValues={setValues} />
          </div>
          <div
            className="col-sm-12 col-md-9 col-xl-9"
            style={{ paddingRight: "20px" }}
          >
            <h1 style={{ fontSize: "'Roboto', sans-serif" }}>Alumnos</h1>
            {!loading ? (
              <DataTable
                value={data}
                responsiveLayout="scroll"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                paginator
                emptyMessage="No hay datos"
                size="large"
                scrollable
                scrollHeight="flex"
                rows={10}
              >
                <Column field="accountnumber" sortable header="Cuenta"></Column>
                <Column field="username" sortable header="Nombre"></Column>
                <Column field="career" sortable header="Carrera"></Column>
                <Column
                  field="createdAt"
                  sortable
                  header="Creado"
                  body={(data) => {
                    let date = Date.parse(data.createdAt);
                    return Intl.DateTimeFormat("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }).format(date);
                  }}
                ></Column>

                <Column
                  field="status"
                  sortable
                  header="Estado"
                  dataType="boolean"
                  body={(data) => {
                    if (data.status) {
                      return (
                        <span className="badge badge-success">Activo</span>
                      );
                    } else {
                      return (
                        <span className="badge badge-danger">Inactivo</span>
                      );
                    }
                  }}
                ></Column>

                <Column
                  field="acciones"
                  sortable
                  header="Acciones"
                  body={(data) => {
                    return (
                      <>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            handleChange(data);
                          }}
                        >
                          Editar
                        </button>

                        <Link
                          to={"/detailstudent/" + data.accountnumber}
                          itemProp={data}
                          className="btn btn-primary ml-2"
                        >
                          Ver
                        </Link>
                        
                        {/*boton recuperar contraseña*/}
                        <button
                          type="button"
                          className="btn btn-info ml-2"
                          onClick={() => {
                            
                          }}
                        >
                          Recuperar contraseña
                        </button>
                      </>
                    );
                  }}
                ></Column>
              </DataTable>
            ) : (
              <h1>Cargando...</h1>
            )}
          </div>
        </div>

        {/* Modal #1 */}
        
      </Split>
    </>
  );
};

export default Students;
