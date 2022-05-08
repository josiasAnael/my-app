import { Formik, Field, Form, ErrorMessage } from "formik";
import * as compontL from "../../components/login/styles";
import { ErrorInput } from "../alumno/custonError";
import {SendEmail} from '../../components/botton/loginbotton';

import  {Container100_btn, Btn} from '../../components/botton/loginbotton/styles.jsx'

const onSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    console.log('values', values)
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

const initialValues = {
    email: "",
};

const validar = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "El email es requerido";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "El email no es válido";
      }
      return errors;
    };

export const PasswordR =() => {
return (
    <>
    <Formik
        initialValues={initialValues}
        validate={validar}
        onSubmit={onSubmit}
    >
        {({ errors, isSubmitting, isValid }) => (
            <compontL.login100_form login100_form onSubmit={onsubmit}>
                <compontL.Loginlimiter limiter>
                    <compontL.containerlogin100 containerlogin100>
                        <compontL.form_title loginformtitle>
                        <div className="logo">
                            <compontL.Logo Logo src="https://login.sec.unicah.net/imgs/logounicah.png" alt="logo" />
                        </div>
                        <br/>
                        
                        </compontL.form_title>
                        <h2 style={{color:"#000000"}}>Recuperar contraseña</h2>
                    
                    
                        <compontL.wrap_input101 wrap_input101>
                            <compontL.Imput_Label Imput_Label> Ingrese su correo electronico:</compontL.Imput_Label>
                            <div  style={{paddingBlock: "10%"}}>
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
                            
                            
                        </compontL.wrap_input101>
                        <Container100_btn >
                            <Btn primary="true" type="submit" disabled={!isValid || isSubmitting}>
                                Enviar Email
                            </Btn>
                       
                        </Container100_btn>
  
                    </compontL.containerlogin100>
                </compontL.Loginlimiter>
            </compontL.login100_form>
       
        )}

    </Formik>
    </>
    )
};