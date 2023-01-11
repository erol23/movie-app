import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar"
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRouter = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/movie-app" element={<Main/>}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;