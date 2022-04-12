import React,{useEffect} from "react";
import { Route, BrowserRouter as Router ,Link} from "react-router-dom";
import { useUser } from "../context/authcontext";
import Students from "../pages/alumno";
import HomePage from "../pages/HomePage/HomePage"
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Perfil from "../pages/perfil";

const Routes = () => {
    const {token,setUser}=useUser();
    useEffect(()=>{
        if(token){
            setUser(token);
        }
    },[token,setUser])
    return (
        <>
            {/* validar las rutas con el token */}
            {token?
            <>
                <Route exact path="/home">
                    <HomePage />
                </Route>
                <Route exact path="/statistics">
                    <Dashboard />       
                </Route>
                <Route exact path="/customers">
                    <Students />
                </Route>
                <Route exact path="/perfil">
                    <Perfil />
                </Route>
                </>
            :
            <Login setUser={useUser} />   
        }
        </>
    );
};

export default Routes;
