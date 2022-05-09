import React, { useState } from "react";
import "./dishselect.css";
import verified from "./verified.png";
import food from "./food.png";
import food2 from "./foodsecond.jpg"
import DatePicker from "sassy-datepicker";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const DishSelect = () => {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedBr, setSelectedBr] = useState("A");
    const [selectedLn, setSelectedLn] = useState("A");
    const [selectedEv, setSelectedEv] = useState("A");
    const [selectedSu, setSelectedSu] = useState("A");
    const [selectedBrImage, setSelectedBrImage] = useState(food);
    const [selectedLnImage, setSelectedLnImage] = useState(food);
    const [selectedEvImage, setSelectedEvImage] = useState(food);
    const [selectedSuImage, setSelectedSuImage] = useState(food);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const onChange = newDate => {
        console.log(`New date selected - ${newDate.toString()}`);
        setDate(newDate);
      };

    return (
        <div className="dishselectcontainer">


            <Backdrop
                sx={{ color: '#0000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <DatePicker onChange={onChange}  />
            </Backdrop>

            <div className="buttondiv">
                <button className="defaultbutton">
                    <img src={verified} />
                    <div> Choose Default Menu</div>
                </button>
            </div>
            <div className="dishcontainer">
                <div className="datecontainer">
                    <button className="dateitem">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</button>
                    <button className="dateitem">{`${date.getDate()+1}/${date.getMonth()}/${date.getFullYear()}`}</button>
                    <button className="dateitem">{`${date.getDate()+2}/${date.getMonth()}/${date.getFullYear()}`}</button>
                    <button className="dateitem">{`${date.getDate()+3}/${date.getMonth()}/${date.getFullYear()}`}</button>
                    <button className="dateitem">{`${date.getDate()+4}/${date.getMonth()}/${date.getFullYear()}`}</button>
                    <button className="dateitem">{`${date.getDate()+5}/${date.getMonth()}/${date.getFullYear()}`}</button>
                    <button className="customnDate" onClick={handleToggle} >Select Custom Dates</button>
                </div>
                <div className="dishitem">
                    <div className="dishtime"> Break Fast</div>
                    <img className="dishimage" src={selectedBrImage} />
                    <div className="btn">
                        <button
                            className={selectedBr === "A" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedBr("A")
                                setSelectedBrImage(food)
                            }}>
                            A</button>
                        <button
                            className={selectedBr === "B" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedBr("B")
                                setSelectedBrImage(food2)
                            }}>
                            B</button>
                    </div>
                    <div className="dishtime"> {selectedBr === "A" ?"Asian Beef Salad" :"Beef Salad-Mozzarela"}</div>
                </div>
                <div className="dishitem">
                    <div className="dishtime"> Lunch</div>
                    <img className="dishimage" src={selectedLnImage} />
                    <div className="btn">
                        <button className={selectedLn === "A" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedLn("A")
                                setSelectedLnImage(food)
                            }}>
                            A</button>
                        <button className={selectedLn === "B" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedLn("B")
                                setSelectedLnImage(food2)
                            }}>
                            B</button>
                    </div>
                    <div className="dishtime"> {selectedLn === "A" ?"Asian Beef Salad" :"Beef Salad-Mozzarela"}</div>
                </div>
                <div className="dishitem">
                    <div className="dishtime"> Evening Meal</div>
                    <img className="dishimage" src={selectedEvImage} />
                    <div className="btn">
                        <button className={selectedEv === "A" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedEv("A")
                                setSelectedEvImage(food)
                            }}>
                            A</button>
                        <button className={selectedEv === "B" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedEv("B")
                                setSelectedEvImage(food2)
                            }}>
                            B</button>
                    </div>
                    <div className="dishtime"> {selectedEv === "A" ?"Asian Beef Salad" :"Beef Salad-Mozzarela"}</div>
                </div>
                <div className="dishitem">
                    <div className="dishtime"> Supper</div>
                    <img className="dishimage" src={selectedSuImage} />
                    <div className="btn">
                        <button className={selectedSu === "A" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedSu("A")
                                setSelectedSuImage(food)
                            }}>
                            A</button>
                        <button className={selectedSu === "B" ? "selectd" : "notselected"}
                            onClick={() => {
                                setSelectedSu("B")
                                setSelectedSuImage(food2)
                            }}>
                            B</button>
                    </div>
                    <div className="dishtime"> {selectedSu === "A" ?"Asian Beef Salad" :"Beef Salad-Mozzarela"}</div>
                </div>
            </div>
            <button className="proceedbutton">
                Proceed
            </button>
        </div>

    )
}
export default DishSelect;