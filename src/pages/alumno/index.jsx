import { Column } from "primereact/column";
// importar data table
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Split } from "../../components/Layout/styles/Split";
import { useCustomer } from "../../context/customerContext";
import { FormUserEdit } from "./formedit";
import { FormUser } from "./form";
import {PasswordR} from "../Password";

const initialValues = {
  id: "",
  username: "",
  email: "",
  accountNumber: "",
  career: "",
  roles: "",
  InitPractice: "",
  EndPractice: "",
  status: "",
  password: "",
  confirmPassword: "",
};

export const Students = () => {
  const { loading, customers, handleUpdate } = useCustomer();

  const [isEdit, setisEdit] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleChange = (user) => {
    console.log(user);
    setValues({
      id: user._id,
      username: user.username,
      email: user.email,
      accountNumber: user.accountnumber,
      career: user.career,
      roles: user.roles.name,
      status: user.status,
      InitPractice: new Intl.DateTimeFormat("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(Date.parse(user.InitPractice)),
      EndPractice: new Intl.DateTimeFormat("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(
        new Date(Date.parse(user.InitPractice) + 3600 * 1000 * 24 * 90)
      ),
    });
    setisEdit(true);
  };

  const handleSubmit = () => {
    handleUpdate();
    setisEdit(false);
    setValues(initialValues);
  }

  return (
    <>
      <Split>
        <div className="row">
          <div className="col-sm-12 col-md-3 col-xl-3">
            {isEdit ? (
              <FormUserEdit
                initialValuesEdit={values}
                isedit={isEdit}
                setValues={setValues}
                handleSubmit={handleSubmit}
              />
            ) : (
              <FormUser
                initialValues={values}
                isedit={isEdit}
                setValues={setValues}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div
            className="col-sm-12 col-md-9 col-xl-9"
            style={{ paddingRight: "20px" }}
          >
            <h1 style={{ fontSize: "'Roboto', sans-serif" }}>Alumnos</h1>
            {!loading ? (
              <DataTable
                value={customers}
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
                        <Link
                          to={"/changepassword/"}
                          
                          className="btn btn-info ml-2"
                          onClick={() => {}}
                        >
                          Recuperar contraseña
                        </Link>
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
