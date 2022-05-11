import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useCustomer } from "../../context/customerContext";
import { InputText } from "primereact/inputtext";
import { ErrorInput } from "../alumno/custonError";
import Logo from "../../assets/iconperfil.png";

import http from "../../services/serviceHttp";
const {Get}=http;

import { login } from '../../services/authService.js';
import { useUser } from '../../context/authcontext';


export const Perfil = () => {
    
    const {user, setUser} = useUser();
    console.log('user', user);
    let data = {
        accountnumber: user.accountnumber,
        username: user.username,
        email: user.email,
        career: user.career,
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
                new Date(Date.parse(user.EndPractice) + 3600 * 1000 * 24 * 90)
            ),
    };
    console.log('data', data);
    


  return (
    <form >
      <div className="container" style={{width: "50%"}}>
        <div
          className="container justify-content-center"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <h1>Mi Perfil</h1>
        </div>
        <div
          className="container justify-center"
          style={{ textAlign: "center" }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "20%", height: "20%" }}
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="identity"
            style={{ fontSize: "'Roboto', sans-serif" }}
          name="identity"
          >
            Identidad:
          </label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-id-card"></i>
            </span>
            <InputText placeholder=""
            name="accountnumber"
            value={data.accountnumber}
            disabled
            />
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="username"
            style={{ fontSize: "'Roboto', sans-serif" }}
          >
            Nombre:{" "}
          </label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText
            placeholder="" 
            name="username"
            value={data.username}
            disabled
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" style={{ fontSize: "'Roboto', sans-serif" }}>
            Correo:{" "}
          </label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-envelope"></i>
            </span>
            <InputText 
            placeholder="" 
            name="email" 
            value={data.email}
            disabled/>
            
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="carrera" style={{ fontSize: "'Roboto', sans-serif" }}>
            Carrera:{" "}
          </label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-book"></i>
            </span>
            <InputText 
            placeholder="" 
            name="career"
            value={data.career}
            disabled
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label
                htmlFor="email"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Inicio de la Practica:{" "}
              </label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar-plus"></i>
                </span>
                <InputText placeholder="" 
                name="InitPractice"
                value={data.InitPractice}
                disabled
                />
              </div>
            </div>
          </div>
          
          <div className="col-6">
            <div className="form-group">
              <label
                htmlFor="email"
                style={{ fontSize: "'Roboto', sans-serif" }}
              >
                Fin de la Practica:{" "}
              </label>
              <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar-minus"></i>
                </span>
                <InputText 
                placeholder=""
                name="EndPractice"
                value={data.EndPractice}
                disabled
                />
              </div>
            </div>
          </div>
        </div>

        {/*<div className="form-group text-center ">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ fontSize: "'Roboto', sans-serif" }}
          >
            Guardar
          </button>
        </div>*/}
      </div>
    </form>
  );
};
export default Perfil;
