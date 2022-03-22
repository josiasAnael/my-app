import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer"


import { SLayout, SMain, BodyLayout } from "./styles";
import { useUser } from "../../context/authcontext";

const Layout = ({ children }) => {
    // const {token}=useUser()

    return (
        <>
            <SLayout>
                <BodyLayout>
                    <div className="">
                        <SMain>{children} </SMain>
                        <Footer/>
                    </div>
                </BodyLayout>            
                <Sidebar/>
            </SLayout>
        </>
    );
};

export default Layout;
