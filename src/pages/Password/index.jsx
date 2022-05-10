import { Steps } from "primereact/steps";
import { useContext, useState } from "react";
import {StepsOne} from "../../components/changePassword/steps_one";
import {StepsTwo} from "../../components/changePassword/steps_two";
import {StepsThree} from "../../components/changePassword/steps_three";

import {Loginlimiter,Containerlogin100,Form_title,Logo,Login100_form,Wrap_input101} from "../../components/login/styles";
import {SendEmail} from "../../components/botton/loginbotton/index"
import {Btn,Container100_btn} from "../../components/botton/loginbotton/styles";

export const PasswordR = () => {
  const Items = [
    {
      label: "Correo",
    },
    {
      label: "Codigo",
    },
    {
      label: "Cambiar contraseña"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const pageChange = (index) => {
    switch (index) {
      case 0:
        return <StepsOne />;
      case 1:
        return <StepsTwo />;
      case 2:
        return <StepsThree />;  
      default:
        return <StepsOne />;
    }
  };
  const nextSteps = () => {
    if (activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    }
  }

  const prevSteps = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <>
      <Loginlimiter limiter>
        <Containerlogin100 Containerlogin100>
        <Form_title loginformtitle>
          <div className="logo">
              <Logo Logo src="https://login.sec.unicah.net/imgs/logounicah.png" alt="logo" />
          </div>
          </Form_title>
          <Steps
            model={Items}
            activeIndex={activeIndex}
            // onSelect={(e) => setActiveIndex(e.index)}
            readOnly={true}
          style={{paddingBottom:"1.5em", color:"#2e18d4"}}
          />

          {pageChange(activeIndex)}
          <>
            <Btn style={{position:"absolute", marginTop:" 320px"}} primary="true" className="btn btn-primary" disabled={(activeIndex+1)>=Items.length} onClick={nextSteps}>
              Continuar
            </Btn>
            
          </>
        </Containerlogin100>
      </Loginlimiter>
    </>
  );
};
