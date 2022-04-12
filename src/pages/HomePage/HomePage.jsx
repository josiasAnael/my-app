import React, { useState } from "react";

import "../HomePage/Homepage.css"
import DropFileInput from '../../components/file_drop/'

import { Split, Line } from '../../components/Layout/styles/Split';

import { Formik, Field, Form, ErrorMessage } from "formik";

import {useCustomer} from "../../context/customerContext";



{/* Validar si el DropFileInput esta vacio*/}
const validar =(values) => {
    let errors = {};
    if(!values.file){
        errors.file = "El archivo es requerido";
    }
    return errors; 
}
const onSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    console.log('values', values)
    setTimeout(() => {
        setSubmitting(false);
    }, 400);
};



export const HomePage = () => {
    //obtener el documento para enviarlo
    const {
        loading,
        data,
    } = useCustomer();

    const [fileList, setFileList] = useState([]);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [fileSize, setFileSize] = useState(null);
    const [fileType, setFileType] = useState(null);

    const onFileChange = (files) => {
        setFile(files[0]);
        setFileName(files[0].name);
        setFileSize(files[0].size);
        setFileType(files[0].type);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(file);
    }


    return(
        <>
        <Formik
            onSubmit={onSubmit}
            validate={validar}
        >
        {({ errors, isSubmitting,resetForm }) => ( 

        <Form action="#" className="p-3 form">
            <div className="container" style={{textAlignLast:'center'}}>
                <div className="abs-center">
                    <div className="row justify-content-center">                  
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">DATOS PARA APERTURAR EXPEDIENTE</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="fileopening"
                                    />
                                </div>
                                <div>
                                    <Line/> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">FICHA DE INFORMACION REFERENCIAL</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)} 
                                    name="residentialrecord"
                                    />
                                </div>
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>
                            
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">SOLICITUD PARA REALIZAR PRÁCTICA</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="practicalrequest" 
                                    />
                                </div>
                                
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>
                            
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">CONTROL DE REVISION</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="revicionControl"
                                    />
                                </div>
                                
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">LA MONOGRAFÍA</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="monographguide"
                                    />
                                </div>
                                
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">IDENTIDAD PERSONAL</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="studentidentity"
                                    />
                                </div>
                                
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">IDENTIDAD DEL PRIMER TESTIGO</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="witnessidentityone"
                                    />
                                </div>
                                
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">IDENTIDAD DEL SEGUNDO TESTIGO</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="witnessidentitytwo"
                                    />
                                </div>
                                
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-xl-3  align-self-center">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">COPIA DE TITULO DE COLEGIO</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="collegetitle"
                                    />
                                </div>
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4 col-xl-3 align-self-center">
                            <div className="form-group">
                                <div className="box">
                                    <label className="header">CARTA DE ACEPTACION DE PRÁCTICA</label>
                                    <DropFileInput 
                                    onFileChange={(files) => onFileChange(files)}
                                    name="acceptanceletter"
                                    />
                                </div>
                                <div>
                                    <Line/>
                                </div>
                            </div>
                        </div>
                        {/*boton de envio de documento*/}
                        
                        <div className="container"  style={{textAlignLast:'center'}}>
                            <div className="row col-auto justify-content-center">
                                <button type="submit" style={{backgroundColor: "#004CBE" }} className="btn btn-primary" onClick={(e) => onSubmit(e)}>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </Form>
        )}
        </Formik>
    </>
    );
    
    
};

export default HomePage;
