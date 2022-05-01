import React, { useEffect, useState } from "react";
import "../HomePage/Homepage.css";
import DropFileInput from "../../components/file_drop/";
import { Split, Line } from "../../components/Layout/styles/Split";
import { Formik, Field, Form, ErrorMessage } from "formik";
 import http from "../../services/serviceHttp";
import { useDocument } from "../../context/documentcontext";
import { getDocument } from "../../services/documenService";
 const {uploadFile} = http


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
  const [sending, setSending] = useState(false);
  
  // obtener el documento del api
  const [document, setDocument] = useState([]);

  useEffect(() => {
    getDocument('/documents/data').then((res) => {
      setDocument(res);
    });

  },[]);


  console.log('document', document)
  const onFileChange = (value, name) => {
    console.log("datos", name);
    console.log("data", data.length);
    console.table(data);
    let temdata = data.find((item) => item.name === name);
    if (temdata) {
      console.log("temdata", temdata);
      return value.length > 0 ? (temdata.file = value[0]) : data.pop(temdata);
    }
    data.push({ name: name, file: value[0] });
    console.log("data", data);

  };

  const onSubmit = async () => {
    console.table(data);
    setSending(true);
    let values=[];
    for (const key in data) {
      const item = data[key];
      console.log("item", item);
      let formData = new FormData();
      formData.append("file", item.file);
      formData.append("name", item.name);
      let res=await uploadFile('/upload', formData);
      console.log('res',res)
      values.push(res);
    }
    console.table(values);
    setSending(false);
    data = [];
  };

  return (
    <>
      <div
        className="container"
        style={{ textAlignLast: "center", marginBottom: "10px" }}
      >
        <div className="abs-center">
        <h1>Archivos</h1>
          {sending ?

          <div className="loading">
            cargando
          </div>
          :
          <div className="row justify-content-center">

            
            {Object.keys(datos).map((key, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3">
                <div className="form-group">
                  <div className="box">
                    <label className="header">{datos[key]}</label>
                    <DropFileInput
                      onFileChange={(files) => onFileChange(files, key)}
                      name={key}
                      isUploaded={document.filter((item) => item.name === key).length > 0}
                    />
                  </div>
                  <div>
                    <Line />
                  </div>
                </div>
              </div>
            ))}
            {/*boton de envio de documento*/}

            <div className="container" style={{ textAlignLast: "center" }}>
              <div className="row col-auto justify-content-center">
                <button
                  style={{ backgroundColor: "#004CBE" }}
                  className="btn btn-primary"
                  onClick={onSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default HomePage;
