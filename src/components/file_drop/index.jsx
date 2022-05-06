import "./drop-file-input.css";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ImageConfig } from "./config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";

import { useUser } from "../../context/authcontext";
import { FormDocument } from "./form";
import { useDrop } from "./useDrop";

export const DropFileInput = ({ onFileChange, isUploaded,name, datadocument }) => {
  const { isadmin } = useUser();
  const [data] = datadocument;
  if (isadmin) {
    return (
      <ViewAdmin
        onFileChange={onFileChange}
        isUploaded={isUploaded}
        data={data}
        name={name}
      />
    );
  }
  return (
    <ViewStudent
      onFileChange={onFileChange}
      isUploaded={isUploaded}
      data={data}
      name={name}

    />
  );
};

const ViewAdmin = ({ onFileChange, name ,isUploaded, data }) => {
  const {
    canUpload,
    dataDocument,
    sending,
    Url,
    onFileDrop,
    statusDrag,
    onDragEnter,
    onDragLeave,
    onDrop,
    setsending,
  } = useDrop(onFileChange, data, isUploaded,name);

  return (
    <>
      <div
        className={`drop-file-input ${statusDrag}`}
        onDragEnter={canUpload ? onDragEnter:null}
        onDragLeave={canUpload ? onDragLeave:null}
        onDrop={canUpload ? onDrop:null}
      >
        <ViewCard
          Url={Url}
          isUploaded={isUploaded}
          onFileDrop={onFileDrop}
          canUpload={canUpload}
        />
      </div>
      {isUploaded ? (
        <>
          {!sending ? (
            <FormDocument file={dataDocument} setsending={setsending} />
          ) : (
            <>
              <div className="drop-file-preview">
                <p>Respuesta enviada</p>
              </div>
            </>
          )}
        </>
      ) : null}
    </>
  );
};

const formatstate = (state) => {
  switch (state) {

    case "Pending":
      return "Pendiente";
    case "Approved":
      return "Aprobado";
    case "Deprecated":
      return "Rechazado";
    case "Canceled":
      return "Cancelado";
    default:
      return "";

  }

}

const ViewStudent = ({ onFileChange, isUploaded, data,name }) => {
  const {
    canUpload,
    sending,
    dataDocument,
    fileList,
    Url,
    fileRemove,
    onFileDrop,
    statusDrag,
    onDragEnter,
    onDragLeave,
    onDrop,
    sendFile
  } = useDrop(onFileChange, data, isUploaded,name);
  return (
    <>
      <div
        className={`drop-file-input ${statusDrag}`}
        onDragEnter={canUpload ? onDragEnter : null}
        onDragLeave={canUpload ? onDragLeave : null}
        onDrop={canUpload ? onDrop : null}
      >
        
        <ViewCard
          Url={Url}
          isUploaded={isUploaded}
          onFileDrop={onFileDrop}
          canUpload={canUpload}
        />
      </div>
      {
        isUploaded && canUpload? <a href={Url} className='btn btn-primary mt-3'  target="_blank">
        ver archivo
      </a>:null
      }
      {sending ? (
        <>
          <div className="drop-file-preview">
            <p>{dataDocument.feedback}</p>
            <p>Estdao: {formatstate(dataDocument.status)}</p>
          </div>
        </>
      ) : (
        null
      )}
      
          {fileList.length == 1 ? (
            <div className="drop-file-preview">
             {isUploaded && canUpload?<>
              <button className="btn btn-primary" onClick={sendFile}>
                Enviar
              </button>
             </>: <p className="drop-file-preview__title">Listo para subir</p>}
              {fileList.map((item, index) => (
                <div key={index} className="drop-file-preview__item">
                  <img
                    src={
                      ImageConfig[item.type.split("/")[1]] ||
                      ImageConfig["default"]
                    }
                    alt=""
                  />
                  <div className="drop-file-preview__item__info">
                    <p>{item.name}</p>
                    <p>{item.size}B</p>
                  </div>
                  <span
                    className="drop-file-preview__item__del"
                    onClick={() => fileRemove(item)}
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
          ) : null}
        
    </>
  );
};

const ViewCard = ({ Url, isUploaded, canUpload, onFileDrop }) => {
  const { isadmin } = useUser();
  const { pdf } = ImageConfig;

  if (canUpload && isUploaded && !isadmin) {
    return (
      <>
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="" />
          <p>Arrastra y suelta tus archivos aquí se enviara automaticamente</p>

          <input
            type="file"
            id="file"
            onChange={onFileDrop}
            accept="application/pdf"
          />
        </div>
      </>
    );
  }

  return (
    <>
      {isUploaded ? (
        <a href={Url} target="_blank">
          <div className="drop-file-input__label">
            <img src={pdf} alt="" />
            <p>Ya fue enviado el archivo</p>
          </div>
        </a>
      ) : (
        <>
          {isadmin ? (
            <>
              <div className="drop-file-input__label">
                <img src={uploadImg} alt="" />
                <p>Aun no a mandado el Documento</p>
              </div>
            </>
          ) : (
            <>
              <input
                type="file"
                id="file"
                onChange={onFileDrop}
                accept="application/pdf"
              />
              <div className="drop-file-input__label">
                <img src={uploadImg} alt="" />
                <p>Arrastra y suelta tus archivos aquí</p>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
