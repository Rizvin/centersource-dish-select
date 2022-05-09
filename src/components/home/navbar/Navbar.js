import React from "react";
import "./navbar.css"
import logo from "./logo.png"
const Navbar = () => {
    return (
        <div className="navbarcontainer">
            <ul className="leftbar">
                <li className="item">
                    <button className="emptybutton">HOME </button>
                </li>
                <li className="item">
                    <button className="emptybutton"> ABOUT US </button>
                </li>
                <li className="item">
                    <button className="emptybutton"> DIET PLAN </button>
                </li>
                <li className="item">
                    <button className="colorbutton">SELECT YOUR PLAN </button>
                </li>
            </ul>
            <div className="middlebar">
                <img src={logo} className="image" />
            </div>
            <ul className="rightebar">
                <li className="item">
                    <button className="emptybutton">Sign In</button>
                </li>
                <li className="item">
                    <button className="colorbutton"> Register</button>
                </li>
            </ul>

        </div>
    )
}
export default Navbar;