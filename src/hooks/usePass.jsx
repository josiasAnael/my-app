import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../context/toastContext";

export const usePass = () => {
  const toas = useContext(ToastContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [button, setButton] = useState("Continuar");
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClick = (callback, detail) => {
    setIsActive(false);
    setButton("Enviando...");
    callback
      .then((res) => {
        toas.showsuccess({
          summary: "Exito",
          detail,
          life: 3000,
        });
        nextSteps();
      })
      .catch(() => {
        toas.showerror({
          summary: "Error",
          detail: "Verifique su conexión a internet",
          life: 3000,
        });
      })
      .finally(() => {
        setButton("Continuar");
        setIsActive(true);
      });
  };
  const sendMail = () => {
    if (email === "") {
      toas.showerror({
        summary: "Error",
        detail: "Ingrese un correo",
        life: 3000,
      });
      return;
    }
    toas.showinfo({
      summary: "Enviando correo",
      detail: "Espere un momento",
      life: 3000,
    });
    handleClick(Promise.resolve("Se ha enviado el correo."), "Correo enviado");
  };

  
  const sendCode = () => {
    if (code === "") {
        toas.showerror({
            summary: "Error",
            detail: "Ingrese un código",
            life: 3000,

        });
        return;
    }

    toas.showinfo({
      summary: "Enviando codigo",
      detail: "Espere un momento",
      life: 3000,
    });
    handleClick(Promise.resolve("El codigo es correcto"), "Codigo Correcto");
  };
  const changePassword = () => {
    if (password === "") {
        toas.showerror({
            summary: "Error",
        detail: "Ingrese una contraseña",
            life: 3000,

        });
        return;
    }
    if (confirmPassword === "") {
        toas.showerror({
            summary: "Error",
            detail: "Ingrese de nuevo la contraseña",
            life: 3000,
        });
        return;
    }
    if (password !== confirmPassword) {
        toas.showerror({
            summary: "Error",
            detail: "Las contraseñas no coinciden",
            life: 3000,
        });
        return;
    }
    toas.showinfo({
      summary: "Cambiando contraseña",
      detail: "Espere un momento",
      life: 3000,
    });
    handleClick(
      Promise.resolve("Cambiada con Exito").then((res) => {
        setIsSuccess(true);
        return res;
      }),
      "Contraseña Cambiada"
    );
  };
  const nextSteps = () => {
    if (activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handleChange = () => {
    switch (activeIndex) {
      case 1:
        return sendCode();
      case 2:
        return changePassword();
      default:
        return sendMail();
    }
  };

  return {
    activeIndex,
    handleChange,
    button,
    isActive,
    isSuccess,
    setEmail,
    setCode,
    setPassword,
    setConfirmPassword,
  };
};
