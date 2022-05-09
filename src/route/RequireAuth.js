import { useNavigate } from "react-router-dom";
export const RequireAuth = ({ children }) => {
   const navigate = useNavigate();
  console.log("data")
    // if token exists
    if (localStorage.getItem("token")) {
        console.log("data2")
        return children; // children is the passed component
    }
   else {
    console.log("data3")
    navigate("/login");
   }
  };
  