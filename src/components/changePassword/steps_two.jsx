import React from "react";
import {Loginlimiter,Containerlogin100,FormPassword ,Input100,Wrap_input101,Imput_Label  } from "../login/styles.jsx";
import { CodigoVerificacion } from "../botton/loginbotton";


export const StepsTwo = () => {
    
    const onsubmit = () => {     
    }
    
    return(
    <>
    <Loginlimiter limiter>
                <Containerlogin100 Containerlogin100 style={{minHeight: "0"}}>
                            <FormPassword FormPassword onSubmit={onsubmit}>
                                <Wrap_input101 Wrap_input101>
                                    <Imput_Label Imput_Label style={{paddingTop: "1em"}}>  Codigo de Verificacion:</Imput_Label>
                                    <Input100 Input100 type="text" name="code" id="floatingInput"  style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px", paddingTop:"4em" }} ></Input100>
                                
                                </Wrap_input101>
                                     
                            </FormPassword>
                </Containerlogin100>
    </Loginlimiter>
    </>       
    )
}