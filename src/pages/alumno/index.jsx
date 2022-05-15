import { Column } from "primereact/column";
// importar data table
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Split } from "../../components/Layout/styles/Split";
import { useCustomer } from "../../context/customerContext";
import { FormUserEdit } from "./formedit";
import { FormUser } from "./form";
import { useUser } from "../../context/authcontext";
import {PasswordR} from "../Password";
import {Loader} from "../../components/Loader";
import {InputText} from "primereact/inputtext";

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
  const { loading, customers, handleUpdate, filter } = useCustomer();
  const { isadmin } = useUser();
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



  //buscador en la tabla de alumnos por nombre de usuario o email o numero de cuenta 
  const buscador = (e)=> {
    filter(e.target.value);
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
            
            {!loading ? (
               <>
              
              <div className="flex justify-content-between align-items-center">
               <h5 className="m-0">Usuarios</h5>
               <span className="p-input-icon-left">
                   <i className="pi pi-search" />
                   <InputText id="buscar" onChange={buscador} placeholder="Buscador" />
               </span>
              </div>
               
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
                  header="Inicio de Practica"
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

                      </>
                    );
                  }}
                ></Column>
              </DataTable>
              </>
            ) : (
              <Loader/>
            )}
          </div>
        </div>

        {/* Modal #1 */}
      </Split>
    </>
  );
};

export default Students;
