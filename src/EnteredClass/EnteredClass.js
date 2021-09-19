import React from 'react'
import { useContext } from 'react';
import { authContext } from '../AuthProvider';
import './EnteredClass.css';
import { useLocation } from 'react-router-dom';

export const EnteredClass = (props) => {
    const location = useLocation();
    let user = useContext(authContext);
    console.log(props);
    console.log(location);

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <nav class="navbar">
                    <a class="navbar-brand" href="#">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                        Bootstrap
                    </a>
                </nav>

            </nav>
            <div className="themeDiv">
            <img className = "theme" src={location.state.background}/></div>
        
        
            <h1>{location.state.detail.room}</h1>

        </div>
    )
}
