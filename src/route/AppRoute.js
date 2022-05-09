import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import PrivateRoute from "./PrivateRoute";
import { RequireAuth } from "./RequireAuth";
import Routepath from "./Routepath";


const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route  path="/login" element={<Login/>}></Route>
                {Routepath && Routepath.map((item, key) => {
                    return (
                         <Route key={key}  path={item.path} element={    
                         <item.component/>
                        }></Route>
                    )
                })}     
            </Routes>
         </BrowserRouter>

    )
}
export default AppRoute;