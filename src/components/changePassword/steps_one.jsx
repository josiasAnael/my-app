import React from "react";
import {
  Loginlimiter,
  Containeremail,
  Form_title,
  Logo,
  FormPassword,
  Input100,
  Wrap_input101,
  Imput_Label,
} from "../login/styles.jsx";

export const StepsOne = ({setEmail}) => {

  return (
    <>
      <Loginlimiter limiter>
        <Containeremail Containeremail>
          <FormPassword FormPassword onSubmit={onsubmit}>
            <Wrap_input101 Wrap_input101>
              <Imput_Label Imput_Label style={{ paddingTop: "1em" }}>
                {" "}
                Correo:
              </Imput_Label>
              <Input100
                Input100
                type="text"
                name="email"
                id="floatingInput"
                placeholder=""
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  paddingTop: "4em",
                }}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
              ></Input100>
            </Wrap_input101>
          </FormPassword>
        </Containeremail>
      </Loginlimiter>
    </>
  );
};
