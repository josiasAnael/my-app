import React from "react";
import {Loginlimiter,Containeremail, Form_title,Logo,FormPassword ,Input100,Wrap_input101,Imput_Label  } from "../login/styles.jsx";
import { SendEmail } from "../botton/loginbotton";

export const StepsOne = () => {
    const onsubmit = () => {     
    }

    return(
    <>
    <Loginlimiter limiter>
                <Containeremail Containeremail>
             
                            <FormPassword FormPassword onSubmit={onsubmit}>
                                <Wrap_input101 Wrap_input101>

                                    <Imput_Label Imput_Label style={{paddingTop: "1em"}}> Correo:</Imput_Label>
                                    <Input100 Input100 type="text" name="email" id="floatingInput" placeholder="" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px", paddingTop:"4em"}} ></Input100>
                                </Wrap_input101>

               
                            </FormPassword>
                </Containeremail>
            </Loginlimiter>
    </>       
    )
}