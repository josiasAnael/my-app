import React, { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Routes from "../../routes/Routes";
import { GlobalStyle } from "../../components/Layout/styles/globalStyles";
import { darkTheme, lightTheme } from "../../components/Layout/styles/theme";
import { useUser } from "../../context/authcontext";

export const ThemeContext = React.createContext(null);
export const LayoutC = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  const { token, setUser } = useUser();
  useEffect(() => {
    if (token) {
      setUser({token});
    }
  }, []);
  

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - Code Focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Routes/>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default LayoutC;
