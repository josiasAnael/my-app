import React, { useContext, useEffect, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLogo,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets/";

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../pages/Layout";
import { useLocation } from "react-router-dom";
import {logOut}from "../../services/authService"
import {useUser} from "../../context/authcontext";


const Sidebar = (props) => {

    const {token,setUser}=useUser();
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen , setSidebarOpen] = useState(true);
    const { pathname } = useLocation();

    const [Sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!Sidebar);
    const logOuthandel= () => {

        logOut();
        setUser(null);
        
    }
    return (
        <>
            {token ?
                <SSidebar isOpen={sidebarOpen}>
                    
                    <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                        <AiOutlineLeft />
                    </SSidebarButton>
                    
                    {IconUnicah.map(({ label, to }) => (
                            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                                        <SLogo>
                                            <img src={logoSVG} alt="logo" />
                                        </SLogo>
                                {Sidebar && (
                                    <>       
                                        <SLinkLabel className={Sidebar ?'close' : 'active'}>{label}</SLinkLabel>
                                    </>
                                )}
                                </SLink>
                    ) )}
                    


                    <SDivider />
                    {linksArray.map(({ icon, label, to }) => (
                        <SLinkContainer key={label} isActive={pathname === to}>
                            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                                <SLinkIcon>{icon}</SLinkIcon>
                                {sidebarOpen && (
                                    <>
                                        <SLinkLabel>{label}</SLinkLabel>
                                    
                                    </>
                                ) } 

                            </SLink>
                        </SLinkContainer>
                    ))}
                    <SDivider />

                    {secondaryLinksArray.map(({ icon, label }) => (
                        <SLinkContainer key={label}>
                            <SLink onClick={logOuthandel} to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                                <SLinkIcon>{icon}</SLinkIcon>
                                {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                            </SLink>
                        </SLinkContainer>
                    ))}
                    <SDivider />
                    
                    <STheme>
                        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                        <SThemeToggler
                            isActive={theme === "dark"}
                            onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                        >
                            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                        </SThemeToggler>
                    </STheme>
                </SSidebar>
            : !token

            }
        </>
    );
};

const IconUnicah=[
    {        
        icon: <MdLogout />,
        label: "UNICAH",
        to: "/",
    }
]

const linksArray = [

    {
        label: "Documentos",
        icon: <AiOutlineHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "Graficas",
        icon: <MdOutlineAnalytics />,
        to: "/statistics",
        notification: 3,
    },
    {
        label: "Alumnos",
        icon: <BsPeople />,
        to: "/customers",
        notification: 0,
    },
    {
        label: "Calendario",
        icon: <AiOutlineApartment />,
        to: "/diagrams",
        notification: 1,
    },
];

const secondaryLinksArray = [

    {
        label: "Cerrar Sesion",
        icon: <MdLogout />,
    },
];

export default Sidebar;
