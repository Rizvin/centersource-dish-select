import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "../components/home/Home";

import Routepath from "./Routepath";


const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {Routepath && Routepath.map((item, key) => {
                    return (
                        <Route key={key} path={item.path} element={<item.component/>}></Route>
                    )
                })}     
            </Routes>
         </BrowserRouter>

    )
}
export default AppRoute;