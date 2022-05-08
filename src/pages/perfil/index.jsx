import React ,{ useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useCustomer } from "../../context/customerContext";
// importar el archivo custonError
import { ErrorInput } from "../alumno/custonError";


const initialValues = {
    password: "",
    confirmPassword: "",
}

const validar = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "El campo es requerido";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "El campo es requerido";
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Las contraseñas no coinciden";
    }
    

    return errors;
};

    const onSubmit = (values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setTimeout(() => {
            setSubmitting(false);
        }, 400);
    };
    

export const Perfil =() => {
        const {
            loading,
            data,
        } =useCustomer();
        
    return(
        <>
        <div className="container justify-content-center" style={{textAlign:"center"}}>
            <h1>Perfil</h1>
        </div>
        
        <Formik initialValues={initialValues} validate={validar} onSubmit={onSubmit} >
            {({ errors, isSubmitting, isValid, resetForm }) => (
                    
                <Form className="container form-group">
                    {!loading?
                    <div className="form-group">
                        <label htmlFor="identity" style={{fontSize:"'Roboto', sans-serif" }}>Identidad: </label>
                    </div>
                    :<div style={{fontSize:"'Roboto', sans-serif" }}>Cargando Identidad...</div>}
                    
                    {!loading?
                    <div className="form-group">
                        <label htmlFor="name" style={{fontSize:"'Roboto', sans-serif" }}>Nombre: </label>
                        <label className="form-control" style={{fontSize:"'Roboto', sans-serif" }}>{data.name}</label>
                     </div>
                     :<div style={{fontSize:"'Roboto', sans-serif" }}>Cargando Nombre...</div>}
                    {!loading?
                    <div className="form-group"> 
                        <label htmlFor="email" style={{fontSize:"'Roboto', sans-serif" }}>Email: </label>
                        <label className="form-control" style={{fontSize:"'Roboto', sans-serif" }}>{data.email}</label>
                    </div>
                    :<div style={{fontSize:"'Roboto', sans-serif" }}>Cargando Email...</div>}
                    
                    
                    <div className="form-group">
                        <label htmlFor="password" style={{fontSize:"'Roboto', sans-serif" }}>Contraseña: </label>
                        <Field type="password" name="password" placeholder="Contraseña" className="form-control input-sm" style={{fontSize:"'Roboto', sans-serif" }}/>
                        <ErrorMessage name="password" component={() => <ErrorInput error={errors.password} />} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{fontSize:"'Roboto', sans-serif" }}>Confirmar Contraseña: </label>
                        <Field type="password" name="confirmPassword" placeholder="Confirmar Contraseña" className="form-control input-sm" style={{fontSize:"'Roboto', sans-serif" }} />
                        <ErrorMessage name="confirmPassword"  component={() => <ErrorInput error={errors.confirmPassword} />} style={{fontSize:"'Roboto', sans-serif" }}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" disabled={!isSubmitting && !isValid} className="btn btn-primary btn-sm" style={{fontSize:"'Roboto', sans-serif" }}>
                            Guardar
                        </button>
                    </div>
                    
                </Form>
            )}
        </Formik>
    </>
    )
}
export default Perfil;