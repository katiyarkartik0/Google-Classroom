import React from 'react'
import { useContext } from 'react';
import { authContext } from '../AuthProvider';

export const EnteredClass = (props) => {


    let user = useContext(authContext);
    //console.log(user);
    console.log(props);
    return (
        <div>
            You just entered the class, WELCOME
            <h1>{props.cardDetails.owner}</h1>
            <h1>{props.cardDetails.subject}</h1>

        </div>
    )
}
