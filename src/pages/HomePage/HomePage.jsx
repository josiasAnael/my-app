import React, { useState } from "react";
import "../HomePage/Homepage.css";
import DropFileInput from "../../components/file_drop/";
import { Split, Line } from "../../components/Layout/styles/Split";
import { Formik, Field, Form, ErrorMessage } from "formik";

const validar = (values) => {
  let errors = {};
  if (!values.file) {
    errors.file = "El archivo es requerido";
  }
  return errors;
};

const datos = {
  fileopening: "DATOS PARA APERTURAR EXPEDIENTE",
  residentialrecord: "FICHA DE INFORMACION REFERENCIAL",
  practicalrequest: "SOLICITUD PARA REALIZAR PRÁCTICA",
  revicionControl: "CONTROL DE REVISION",
  monographguide: "LA MONOGRAFÍA",
  studentidentity: "IDENTIDAD PERSONAL",
  witnessidentityone: "IDENTIDAD DEL PRIMER TESTIGO",
  witnessidentitytwo: "IDENTIDAD DEL SEGUNDO TESTIGO",
  collegetitle: "COPIA DE TITULO DE COLEGIO",
  acceptanceletter: "CARTA DE ACEPTACION DE PRÁCTICA",
};
let data = [];
export const HomePage = () => {
  //obtener el documento para enviarlo
  const onFileChange = (value, datos) => {
    console.log("datos", datos);
    console.log("data", data.length);
    console.table(data);
    let temdata = data.find((item) => item.name === datos);
    if (temdata) {
      console.log('temdata', temdata)
      return value.length > 0?temdata.file = value[0]:data.pop(temdata);
    }
    data.push({ name: datos, file: value[0] });
  };

  const onSubmit = (e) => {
  };

  return (
    <>
      <Formik onSubmit={onSubmit} validate={validar}>
        {({ errors, isSubmitting, resetForm }) => (
          <Form action="#" className="p-3 form">
            <div className="container" style={{ textAlignLast: "center" }}>
              <div className="abs-center">
                <div className="row justify-content-center">
                  {Object.keys(datos).map((key, index) => (
                    <div
                      key={index}
                      className="col-12 col-sm-6 col-md-4 col-xl-3"
                    >
                      <div className="form-group">
                        <div className="box">
                          <label className="header">{datos[key]}</label>
                          <DropFileInput
                            onFileChange={(files) =>
                              onFileChange(files, datos[key])
                            }
                            name={key}
                          />
                        </div>
                        <div>
                          <Line />
                        </div>
                      </div>
                    </div>
                  ))}
                  {/*boton de envio de documento*/}

                  <div
                    className="container"
                    style={{ textAlignLast: "center" }}
                  >
                    <div className="row col-auto justify-content-center">
                      <button
                        type="submit"
                        style={{ backgroundColor: "#004CBE" }}
                        className="btn btn-primary"
                        onClick={(e) => onSubmit(e)}
                      >
                        Enviar
                      </button>
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
