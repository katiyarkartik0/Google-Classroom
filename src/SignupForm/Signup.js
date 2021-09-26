import React from 'react'
import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import firebase from 'firebase'
import 'firebase/firestore'
import { useContext } from 'react'
import { authContext } from '../AuthProvider';
import { Redirect } from 'react-router';


export const Signup = () => {
    let [displayName, setDisplayName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let user = useContext(authContext);

    let signingUp = ()=>{
        auth.createUserWithEmailAndPassword(email, password).then((user) =>{
            auth.onAuthStateChanged (user => {
              if (user) {
                user.updateProfile({ 
                  displayName: displayName
                })}})})
    }

    return (

        <div>
            {user ? <Redirect to="/" /> : ""}

            <form
                className="col-4 offset-4">
                <h1>Sign up !</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={displayName}
                        onChange={(e) => {
                            setDisplayName(e.target.value)
                        }}
                    />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                    />
                </div>
                <button onClick={(e) => {
                    
                    e.preventDefault();
                    if (password === confirmPassword) {
                     signingUp()
                    }
                    else {
                        alert("password did not match");
                    }
                }}
                    type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}