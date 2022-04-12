import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer"

import { SLayout, SMain, BodyLayout } from "./styles";
import { useUser } from "../../context/authcontext";

import Login from '../../pages/login';

export const Layout = ({ children }) => {
    const {token,setUser}=useUser();

    return (
        <>
        {/* validar las rutas con el token */}
        {
            <SLayout>
            <BodyLayout>
                <div className="">            
                    <SMain>{children} </SMain> 
                </div>
            </BodyLayout>
            <Sidebar />
            </SLayout>
        }
        </>
    
    );
};

export default Layout;
