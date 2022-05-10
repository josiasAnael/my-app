import React from "react";
import {Loginlimiter,Containerlogin100,FormPassword ,Input100,Wrap_input101,Imput_Label  } from "../login/styles.jsx";
import { CodigoVerificacion } from "../botton/loginbotton";


export const StepsThree = () => {
    
    const onsubmit = () => {     
    }
    
    return(
    <>
    <Loginlimiter limiter>
                <Containerlogin100 Containerlogin100 style={{minHeight: "0"}}>
                            <FormPassword FormPassword onSubmit={onsubmit}>
                                <Wrap_input101 Wrap_input101>
                                    <Imput_Label Imput_Label style={{paddingTop: "1em"}} > Contraseña Nueva:</Imput_Label>
                                    <Input100 Input100 type="text" name="password" id="floatingInput" placeholder="" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",paddingTop:"3.3em" }} ></Input100>
                                </Wrap_input101>

                                <Wrap_input101 Wrap_input101>
                                    <Imput_Label Imput_Label style={{paddingTop: "1em"}} > Confirmar Contraseña:</Imput_Label>
                                    <Input100 Input100 type="text" name="ConfirmarPass" id="floatingInput" placeholder="" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px",paddingTop:"3.3em"  }} ></Input100>
                                </Wrap_input101>
                                     
                            </FormPassword>
                </Containerlogin100>
    </Loginlimiter>
    </>       
    )
}