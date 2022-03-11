import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer"


import { SLayout, SMain, BodyLayout } from "./styles";

const Layout = ({ children }) => {
    return (
        <>
        <>
        <div  >
            <SLayout>
                <BodyLayout>
                    <div className="">
                        <SMain>{children} </SMain>
                        <Footer/>
                    </div>
                </BodyLayout>            
                <Sidebar />
               
            
            </SLayout>
        </div>
        
        </>
        </>
    );
};

export default Layout;
