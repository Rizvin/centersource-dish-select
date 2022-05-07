import React from "react";
import { Route,useNavigate } from "react-router-dom";



const PrivateRoute = ({
    component: Component,
}) =>{
    const navigate = useNavigate();
    return(
      <Route>
          {
              localStorage.getItem("token") ? <Component/>:navigate("/login")
          }
      </Route>  
    )
}
export default PrivateRoute;