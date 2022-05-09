import React from "react";
import "./bannerForm.css";

const BannerForm = () => {
    return (
        <div className="bannercontainer">
            <div className="title">
                Feel Free to contact us for your customized meal plan
            </div>
            <div className="formcontainer">
                <div className="formcard">
                    <div className="firstrow">
                        <div className="firstitem">
                            <div><label>Your Name *</label></div>
                            <input className="input" />
                        </div>
                        <div className="seconditem">
                            <div><label>Your Email</label></div>
                            <input className="input" />
                        </div>

                    </div>
                    <div className="secondrow">
                        <div className="firstitem">
                            <div><label>Your Mobile No *</label></div>
                            <input className="input" />
                        </div>
                        <div className="seconditem">
                            <div><label>Message</label></div>
                            <input className="input" />
                        </div>

                    </div>
                </div>
                <div className="Submitbutton"> <div className="test">Send now</div></div>
            </div>
            
        </div>
    )
}
export default BannerForm;