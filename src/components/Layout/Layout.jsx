import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import { SLayout, SMain, BodyLayout } from "./styles";
import { useUser } from "../../context/authcontext";

import Login from "../../context";

export const Layout = ({ children }) => {
  const { token } = useUser();

  return (
    <>
        <SLayout>
          <BodyLayout>
            <SMain>{children} </SMain>
          </BodyLayout>
          <Sidebar />
        </SLayout>

    </>
  );
};

export default Layout;
