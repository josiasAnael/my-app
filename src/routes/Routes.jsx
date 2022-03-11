import React from "react";
import { Route, Router ,Link} from "react-router-dom";
import Students from "../pages/alumno";
import HomePage from "../pages/HomePage/HomePage"

const Routes = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
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
