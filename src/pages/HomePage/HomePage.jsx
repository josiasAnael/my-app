import React, { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import "../HomePage/Homepage.css";
import DropFileInput from "../../components/file_drop/";
import { Split, Line } from "../../components/Layout/styles/Split";
import { Formik, Field, Form, ErrorMessage } from "formik";
import http from "../../services/serviceHttp";
import { getDocument } from "../../services/documenService";
import { Loader } from "../../components/loader";

import { useUser } from "../../context/authcontext";
import { useDocument } from "../../context/documentcontext";
const { uploadFile } = http;
import { ToastContext } from '../../context/toastContext.jsx';


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
  const toast = useContext(ToastContext)


  let { id } = useParams();

  // obtener el documento del api
  const { document, loading,setId } = useDocument(id);
  console.log('document', document)
  const onFileChange = (value, name, isUploaded) => {

    console.log('value', value)
    if (!isUploaded) {
      let temdata = data.find((item) => item.name === name);
      if (temdata) {
        return value.length > 0 ? (temdata.file = value[0]) : data.pop(temdata);
      }
      data.push({ name: name, file: value[0] });
      return;
    }
  };

  const onSubmit = async () => {
    setSending(true);
    let values = [];
    for (const key in data) {
      const item = data[key];
      let formData = new FormData();
      formData.append("file", item.file);
      formData.append("name", item.name);
      let res = await uploadFile("/upload", formData);
      values.push(res);

    }
    toast.showsuccess({
      summary: 'Exito',
      detail: `Se han subido los archivos`,
      life: 3000
    });
    console.table(values);
    setSending(false);
    data = [];
    setId(id||'2');
  };

  return (
    <>
      <div
        className="container"
        style={{ textAlignLast: "center", marginBottom: "10px" }}
      >
        <div className="abs-center">
          <br />
          <h1>Archivos</h1>
          {sending || loading ? (
            <Loader />
          ) : (
            <div className="row justify-content-center">
              {Object.keys(datos).map((key, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3">
                  <div className="form-group">
                    <div className="box">
                      <label style={{ marginTop: "10px" }} className="header">
                        {datos[key]}
                      </label>
                      <DropFileInput
                        onFileChange={(files, isUploaded) =>
                          onFileChange(files, key, isUploaded)
                        }
                        name={key}
                        isUploaded={
                          document.filter((item) => item.name === key).length >
                          0
                        }
                        datadocument={document.filter(
                          (item) => item.name === key
                        )}
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
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
