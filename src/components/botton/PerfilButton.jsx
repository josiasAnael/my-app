import ReactDOM from "react-dom";

import React, { setState } from "react";
import { Button } from "primereact/button";
import "./ButtonDemo.css";

export const ButtonDemo = () => {
  const state = {
    loading: false,
    loading: false,
  };

  const onLoadingClick = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading1: false });
    }, 2000);
  };

  return (
    <div className="button-demo">
      <div className="card">
        <Button label="Submit" loading={state} onClick={onLoadingClick} />
      </div>
    </div>
  );
};
