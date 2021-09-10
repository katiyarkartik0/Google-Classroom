import React from 'react'
import { signInWithGoogle } from "./lib/firebase"
import { authContext } from "./AuthProvider"
import { useContext } from 'react'
import { useHistory, Redirect } from "react-router-dom";
import './Login.css'
export const Login = () => {
    let user = useContext(authContext);
    console.log(user);
    let history = useHistory();

    return (
        <>
            <div className="logo">
                {user ? <Redirect to="/" /> : ""}
                <img src="https://9to5google.com/wp-content/uploads/sites/4/2020/01/google-classroom-cover.jpg?quality=82&strip=all&w=1000" alt="" />

            </div>
            <div className="login-option">
                <form className="col-4">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign IN</button>


                </form>
            </div>
            <h5 className="login-option">OR</h5>
            <div className="login-option">

                <button
                    onClick={() => {
                        signInWithGoogle()
                    }}
                    className="btn btn-primary">Login with Google</button>
            </div>
            <hr />
            <h5 className="login-option">Don't have an account?</h5>
            <div className="login-option">
                <button
                    onClick={()=>{
                        history.push("/signup")
                    }}
                    
                    className="btn btn-primary">Sign UP</button>
            </div>
        </>
    )
}

export default Login