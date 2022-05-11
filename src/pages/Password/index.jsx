import { Steps } from "primereact/steps";
import { useContext, useState } from "react";
import { StepsOne } from "../../components/changePassword/steps_one";
import { StepsTwo } from "../../components/changePassword/steps_two";
import { StepsThree } from "../../components/changePassword/steps_three";

import {
  Loginlimiter,
  Containerlogin100,
  Form_title,
  Logo,
  Login100_form,
  Wrap_input101,
} from "../../components/login/styles";
import { SendEmail } from "../../components/botton/loginbotton/index";
import {
  Btn,
  Container100_btn,
} from "../../components/botton/loginbotton/styles";
import "./steps.css";
import { usePass } from "../../hooks/usePass";
import { Navigate } from "react-router-dom";

export const PasswordR = () => {
  const Items = [
    {
      label: "Correo",
    },
    {
      label: "Codigo",
    },
    {
      label: "Cambiar contraseña",
    },
  ];

  const {
    activeIndex,
    button,
    handleChange,
    isActive,
    isSuccess,
    setCode,
    setEmail,
    setPassword,
    setConfirmPassword
  } = usePass();

  const pageChange = (index) => {
    switch (index) {
      case 1:
        return <StepsTwo setCode={setCode} />;
      case 2:
        return <StepsThree setPassword={setPassword} setConfirmPassword={setConfirmPassword} />;
      default:
        return <StepsOne setEmail={setEmail} />;
    }
  };

  return (
    <>
      {isSuccess ? (
        <Navigate to={"/"} />
      ) : (
        <Loginlimiter limiter>
          <Containerlogin100 Containerlogin100>
            <Form_title loginformtitle>
              <div className="logo">
                <Logo
                  Logo
                  src="https://login.sec.unicah.net/imgs/logounicah.png"
                  alt="logo"
                />
              </div>
            </Form_title>
            <Steps
              model={Items}
              activeIndex={activeIndex}
              // onSelect={(e) => setActiveIndex(e.index)}
              readOnly={true}
              style={{ paddingBottom: "1.5em", color: "#2e18d4" }}
            />

            {pageChange(activeIndex)}
            <>
              <Btn
                disabled={!isActive}
                style={{ position: "absolute", marginTop: " 320px" }}
                primary="true"
                className="btn btn-primary"
                onClick={handleChange}
              >
                {button}
              </Btn>
            </>
          </Containerlogin100>
        </Loginlimiter>
      )}
    </>
  );
};
