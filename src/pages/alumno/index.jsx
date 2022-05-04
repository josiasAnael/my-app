import React ,{ useState, useEffect } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Split } from "../../components/Layout/styles/Split";
import { ErrorInput } from "./custonError";
import {useCustomer} from "../../context/customerContext";

// importar data table 
import {DataTable} from 'primereact/datatable'
import { Column } from "primereact/column";

import Modal from "../../components/modal/Modal";
import styled from 'styled-components';


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

const setValues = (values) => {
  console.log('values', values)
}






export const Students = () => {
  const {
    loading,
    data,
  } =useCustomer();

  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  //cargar datos de la tabla a los inputs
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    initialValues({
      ...values,
      [e.target.username]: e.target.value,
      
    });

  };

  
  
  return (
    <>
    <Split>
      <div className="row">
        <div className="col-sm-12 col-md-3 col-xl-3">
          <Formik
            initialValues={initialValues}
            validate={validar}
            onSubmit={onSubmit}
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
                  <Field component="select" name="cars" className="form-control input-sm"
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
                <div className="form-group">
                  <label htmlFor="state" style={{fontSize:"'Roboto', sans-serif" }}>Estado</label>
                  <Field component="select" name="state" className="form-control input-sm"
                  >
                    <option value="" disabled style={{fontSize:"'Roboto', sans-serif" }}>
                      Seleccione un estado
                    </option>
                    <option value="Aguascalientes" style={{fontSize:"'Roboto', sans-serif" }}>Activo</option>
                    <option value="BajaCalifornia" style={{fontSize:"'Roboto', sans-serif" }}>Inactivo</option>
                  </Field>
                  </div>
                
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-6">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting || !isValid} style={{backgroundColor:"#004CBE" }}>
                      ENVIAR 
                    </button>
                
          
                    <button type="reset" className="btn btn-warning" onClick={resetForm} style={{fontSize:"'Roboto', sans-serif" }}>
                      LIMPIAR
                    </button>
                    
                  </div>
                </div>

              </Form>
            )}
          </Formik>
        </div>

        <div className="col-sm-12 col-md-9 col-xl-9" style={{paddingRight: "20px"}}>
          <h1 style={{fontSize:"'Roboto', sans-serif" }}>Alumnos</h1>
          {!loading?
            <DataTable
              value={data}
              responsiveLayout="scroll"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              paginator
              emptyMessage="No hay datos"
              size="large"
              scrollable scrollHeight="flex"
              rows={10}
            >
                <Column field="accountnumber" sortable header="Cuenta"></Column>
                <Column field="username" sortable header="Nombre"></Column>
                <Column field="career" sortable header="Carrera"></Column>
                <Column field="createdAt" sortable header="Creado" body={(data)=>{
                  let date = Date.parse(data.createdAt);
                  return Intl.DateTimeFormat('es-ES', {year: 'numeric', month: 'long', day: '2-digit'}).format(date)
                }}></Column>
                
                <Column field="status" sortable header="Estado" dataType="boolean" body={(data)=>{
                  if(data.status){
                    return <span className="badge badge-success">Activo</span>
                  }else{
                    return <span className="badge badge-danger">Inactivo</span>
                  }
                }}></Column>

                
                <Column field="acciones" sortable header="Acciones"   body={(data)=>{
                  return <button type="button" className="btn btn-primary" onClick={()=>{
                    handleChange(data)
                  }}>Editar</button>
                }}></Column>


                <Column field="editor" sortable header="Acciones2" body={(data)=>{
                  return <button type="button" className="btn btn-primary" onClick={() => cambiarEstadoModal1(!estadoModal1)}>Archivos</button>
                }}
                ></Column>
            </DataTable>:
            <h1>Cargando...</h1>
          }
        </div>
        
      </div>
     
      {/* Modal #1 */}
      <Modal
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="UNIVERSIDAD CATOLICA DE HONDURAS - NUESTRA SEÑORA REINA DE LA PAZ"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={'center'}
        padding={'20px'}
      >
        <Contenido>
          <h1>Archivos</h1>
         
          
          <div className="row">
            <div className="col-sm-12 col-md-4 col-xl-4" >
              <label htmlFor="">Nombre</label>
              <input type="text" className="form-control" placeholder="Nombre" />
             
              <label htmlFor="">Estado</label>
              <select className="form-control">
                <option value="" disabled>Seleccione una opcion</option>
                <option value="1">Pendiente</option>
                <option value="2">Aprovado</option>
                <option value="3">Rechazado</option>
              </select>
           
              <label htmlFor="">Comentario</label>
              <textarea className="form-control" placeholder="Comentario" rows="3"></textarea>

            </div>
            <div className="col-sm-12 col-md-4 col-xl-4" >
            {!loading?
            <DataTable
              value={data}
              responsiveLayout="scroll"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              paginator
              emptyMessage="No hay datos"
              size="large"
              scrollable scrollHeight="flex"
              rows={10}
            >
                <Column field="name" sortable header="Nombre"></Column>
               
                
                <Column field="status" sortable header="Estado" dataType="boolean" body={(data)=>{
                  if(data.status){
                    return <span className="badge badge-success">Approved</span>
                  }else{
                    return <span className="badge badge-danger">Deprecated</span>
                  }
                }}></Column>

                <Column field="feedback" sortable header="feedback"></Column>

                <Column field="editar" sortable header="Acciones"   body={(data)=>{
                  return <button type="button" className="btn btn-primary" onClick={()=>{
                    editar(data)
                  }}>Editar</button>
                }}></Column>

            </DataTable>:
            <h1>Cargando...</h1>
          }
          </div>
        
          </div>
          <div className="form-group">
          <br />       
          <button type="button" className="btn btn-primary" onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</button>
          </div>
        </Contenido>
      </Modal>
    </Split>
     
    </>
  );
};

export default Students;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;
