import React from "react";
import { Route,useNavigate } from "react-router-dom";



const PrivateRoute = ({
    component: Component,
}) =>{
    const navigate = useNavigate();
    return(
      <Route render = {()=> localStorage.getItem("token") ? <Component/>:navigate("/login")}/>
          
      
    )
}
export default PrivateRoute;