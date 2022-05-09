import { Steps } from "primereact/steps";
import { useContext, useState } from "react";

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
        return <p>SOY EL CORREO</p>;
      case 1:
        return <p>SOY EL CODIGO</p>;
      case 2:
        return <p>SOY EL CAMBIO DE CONTRASEÑA</p>;
      default:
        return <p>SOY EL CORREO</p>;
    }
  };
  const nextSteps = () => {
    if (activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    }
  }

  return (
    <>
      <div className="container">
        <Steps
          model={Items}
          activeIndex={activeIndex}
          // onSelect={(e) => setActiveIndex(e.index)}
          readOnly={true}
        />
        {pageChange(activeIndex)}
        <button className="btn btn-primary" disabled={(activeIndex+1)>=Items.length} onClick={nextSteps}> Siguiente </button>
      </div>
    </>
  );
};
