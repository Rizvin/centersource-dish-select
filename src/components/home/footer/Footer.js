import React from "react";
import "./footer.css";
import logobig from "./logobig.png";
import fb from "./fb.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import whatsapp from "./whatsapp.png";
import youtube from "./youtube.png";
const Footer = () => {
    return (
        <div className="footercontainer">

            <div className="image">
                <img src={logobig} />
            </div>
            <div className="footrcontent">
                <div className="title">ADDRESS</div>
                <div className="subcontent">Edible Kitchen Services JN Stadium, Kaloor Kochi - 6806644</div>
            </div>
            <div className="footrcontent">
                <div className="title">PHONE</div>
                <div className="subcontent">0124 398 6371</div>
            </div>
            <div className="footrcontent">
                <div className="title">QUICK LINKS</div>
                <div className="subcontent">My Account</div>
                <div className="subcontent">About Us</div>
                <div className="subcontent">Keto Plans</div>
                <div className="subcontent">Our Dishes</div>
            </div>
            <div className="footrcontent">
                <div className="title">FOLLOW US</div>
                <div className="subcontent">
                    <img className="imageicon" src={fb}/>
                    <img className="imageicon" src={whatsapp}/>
                    <img className="imageicon" src={twitter}/>
                    <img className="imageicon" src={insta}/>
                    <img className="imageicon" src={youtube}/>
                </div>
            </div>
        </div>
    )
}
export default Footer;