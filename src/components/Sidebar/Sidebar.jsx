import React, { useState,useContext } from "react";
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
  AiOutlineHome,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople, BsPersonFill } from "react-icons/bs";

import { ThemeContext } from "./../../pages/Layout";
import { useLocation } from "react-router-dom";
import { logOut } from "../../services/authService";
import { useUser } from "../../context/authcontext";

export const Sidebar = () => {
  const {  setUser } = useUser();
  const { setTheme, theme } = useContext(ThemeContext);
  const location = useLocation();
    
  const [Sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!Sidebar);
    console.log('Sidebar', Sidebar);
  }
  const logOuthandel = () => {
    logOut();
    setUser({}).then((v) => {
      console.log('token value', v)
    });
  };
  
  return (
    <>
      {
        <SSidebar isOpen={Sidebar}>
          <SSidebarButton
            isOpen={Sidebar}
            onClick={showSidebar}
          >
            <AiOutlineLeft />
          </SSidebarButton>

          {IconUnicah.map(({ label, to }) => (
            <SLink
              key={label}
              to={to}
              style={!Sidebar ? { width: `fit-content` } : {}}
            >
              <SLogo>
                <img src={logoSVG} alt="logo" />
              </SLogo>
              {Sidebar && <SLinkLabel>{label}</SLinkLabel>}
            </SLink>
          ))}

          <SDivider />
          {linksArray.map(({ icon, label, to }) => (
            <SLinkContainer key={label} isActive={location.pathname === to}>
              <SLink
                to={to}
                style={!Sidebar ? { width: `fit-content` } : {}}
              >
                <SLinkIcon>{icon}</SLinkIcon>
                {Sidebar && (
                  <>
                    <SLinkLabel>{label}</SLinkLabel>
                  </>
                )}
              </SLink>
            </SLinkContainer>
          ))}
          <SDivider />
          {secondaryLinksArray.map(({ icon, label }) => (
            <SLinkContainer key={label}>
              <SLink
                onClick={logOuthandel}
                to="/"
                style={!Sidebar ? { width: `fit-content` } : {}}
              >
                <SLinkIcon>{icon}</SLinkIcon>
                {Sidebar && <SLinkLabel>{label}</SLinkLabel>}
              </SLink>
            </SLinkContainer>
          ))}
          <SDivider />

          <STheme>
            {Sidebar && <SThemeLabel>Dark Mode</SThemeLabel>}
            <SThemeToggler
              isActive={theme === "dark"}
              onClick={() =>
                setTheme((p) => (p === "light" ? "dark" : "light"))
              }
            >
              <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
            </SThemeToggler>
          </STheme>
        </SSidebar>
      }
    </>
  );
};


const IconUnicah = [
  {
    icon: <MdLogout />,
    label: "UNICAH",
    to: "/",
  },
];


const linksArray = [
  {
    label: "Documentos",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Graficas",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
  },
  {
    label: "Alumnos",
    icon: <BsPeople />,
    to: "/customers",
  },
  {
    label: "Perfil",
    icon: <BsPersonFill />,
    to: "/perfil",
  },
];

const secondaryLinksArray = [
  {
    label: "Cerrar Sesion",
    icon: <MdLogout />,
  },
];

export default Sidebar;
