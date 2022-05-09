import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerForm from "./bannerform/BannerForm";
import DishSelect from "./dishselect/DishSelect";
import Footer from "./footer/Footer";
import "./home.css"
import Navbar from "./navbar/Navbar";
import underline from "./underline.png"
const Home = () =>{
    const navigate =useNavigate();
    useEffect(()=>{
       if (localStorage.getItem("token"))
       {
        navigate("/")
       }
       else
       {
           navigate("/login")
        }
    },[])
    return(
        <div className="homecontainer">
            <Navbar/>
            <div className="subcontainer1">
                <div className="title">Choose Your Dishes</div>
                <div className="underline">
                <img src={underline} />
                </div>
                <div className="textnormal">As per your recomented calorie, choose your dishes from below</div>
            </div>
            <DishSelect/>
            <BannerForm/>
            <Footer/>
            <hr className="divider-solid" /> 
            <div className="bottomcontent">Copyright 2020-2021 Edibles - All Rights Reserved</div>
        </div>
    )
}
export default Home;