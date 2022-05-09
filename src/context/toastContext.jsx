import { Toast } from "primereact/toast";
import { createContext } from "react";
import Toastc from "../components/toast";
export const ToastContext = createContext(null);

export const Toastprovider = ({ children }) => {

  const {ref,current,hide,showsuccess,showerror,showinfo,showwarn}= Toastc();
  return (
    <ToastContext.Provider value={{hide,showsuccess,showerror,showinfo,showwarn,current}}>
      {children}
      <Toast ref={ref} />
      <style>
        {`.toast-demo button {
              min-width: 10rem;
              margin-right: .5rem;
          }

          @media screen and (max-width: 960px) {
              .toast-demo button {
                  width: 100%;
                  margin-bottom: .5rem;
              }
          }
        `}
      </style>
    </ToastContext.Provider>
  );
};


