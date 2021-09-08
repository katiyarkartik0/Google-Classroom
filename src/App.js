import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import Login from "./Login";
import Home from "./Home";
import AuthProvider from "./AuthProvider"
import { Signup } from "./SignupForm/Signup";

export const App = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path ="/signup">
                            <Signup/>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    )
}
