import Home from "../components/home/Home";
import Login from "../components/login/Login";

const Routepath = [
    {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
];
export default Routepath;