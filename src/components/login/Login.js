import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ onblur: "blur" })
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        if(data.userName==="user" && data.password === "password"){
            localStorage.setItem("token","gtsghcfvghsacvhgsvhgcv564516jgchvschg")
            navigate("/")
        }
console.log(data)

    }
    return (
        
        <div className="logincontainer">
            <div className="card">

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">Login</div>
                    <div className="field">
                    {/* <label>Email Address</label> */}
                        <input className="input"
                            type="text"
                            name='userName'
                            placeholder="Username"
                            {...register("userName", { required: true })}
                        />
                        {errors.userName && <span className="error">* Username required</span>}
                        
                    </div>
                    <div className="field">
                    {/* <label>Password</label> */}
                        <input
                        className="input"
                            type="password"
                            name='password'
                            placeholder="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="error">* Password required</span>}
                        
                    </div>
                    <div className="field">
                        <button className="button" type="submit" >Submit</button>
                    </div>
                </form>
            
            </div>




        </div>
     
    )
}
export default Login;