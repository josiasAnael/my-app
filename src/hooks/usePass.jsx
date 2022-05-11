import { useContext, useState } from "react";
import { ToastContext } from "../context/toastContext";
import http from "../services/serviceHttp";
const { Post, Put } = http;

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
  const [idUser, setIdUser] = useState("");
  const handleClick = (callback, detail) => {
    setIsActive(false);
    setButton("Enviando...");
    callback
      .then((res) => {
        if (!res) throw new Error("Algo salio mal");
        toas.showsuccess({
          summary: "Exito",
          detail,
          life: 3000,
        });
        nextSteps();
      })
      .catch((err) => {
        toas.showerror({
          summary: "Error",
          detail: err.message,
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
    handleClick(Post("/users/sendCode", { email }), "Correo enviado");
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
    handleClick(
      Post("/users/verifyCode", { email, code }).then((res) => {
        if (!res) throw new Error("Verifique su código");
        const { code, id } = res;
        setCode(code);
        setIdUser(id);
        return res;
      }),
      "Codigo Correcto"
    );
  };
  const changePassword = () => {
    console.log("idUser", idUser);
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
      Put(`/users/updatePassword/${idUser}`, { email, code, password }).then(
        (res) => {
          if (!res) throw new Error("Algo salio mal");
          setIsSuccess(true);
          return res;
        }
      ),
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
