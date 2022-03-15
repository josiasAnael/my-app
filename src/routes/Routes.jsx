import React from "react";
import { Route, Router ,Link} from "react-router-dom";
import { useUser } from "../context/authcontext";
import Students from "../pages/alumno";
import HomePage from "../pages/HomePage/HomePage"
import Login from "../pages/login";

const Routes = () => {
    const {token}=useUser();
    console.log('token', token)
    return (
        <>
            <Route exact path="/">
                {token ? <HomePage /> : <Login />}
            </Route>
            <Route exact path="/statistics">
            <h1>Statistics Page</h1>
            </Route>
            <Route exact path="/customers">
                <Students/>
            </Route>
            <Route exact path="/diagrams">
                <h1>Diagrams Page</h1>
            </Route>
        </>
    );
};

export default Routes;
