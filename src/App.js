import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Login from "./Login";
import Home from "./Home";
import AuthProvider from "./AuthProvider"
import { Signup } from "./SignupForm/Signup";
import { EnteredClass } from "./EnteredClass/EnteredClass";
import { useState } from "react";


export const App = () => {
    let [reqCreatedClassObj, setreqCreatedClassObj] = useState([]);
    let [reqJoinedClassObj, setreqJoinedClassObj] = useState([]);
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/" >
                            <Home funk={(reqCreatedClassObj) => setreqCreatedClassObj(reqCreatedClassObj)} funk2={(reqJoinedClassObj) => setreqJoinedClassObj(reqJoinedClassObj)} />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                        {reqCreatedClassObj.map((item, index) => {
                            return (
                            <Route key={index} exact path={`/enteredClass/${item.id}`} >
                                <EnteredClass cardDetails={item}/>
                            </Route>)}
                        )}
                         {reqJoinedClassObj.map((item, index) => {
                            return (
                            <Route key={index} exact path={`/enteredClass/${item.id}`} >
                                <EnteredClass cardDetails={item}/>
                            </Route>)}
                        )}
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    )
}
