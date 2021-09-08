import Header from "./Header/Header"
import React from 'react'
import CreateClass  from "./CreateClass/CreateClass"
import JoinClass from "./JoinClass/JoinClass"
import { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Redirect } from "react-router";
export const Home = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [openJoin, setOpenJoin] = React.useState(false);

    const handleClickOpenJoin = () => {
      setOpenJoin(true);
    };
  
    const handleCloseJoin = () => {
      setOpenJoin(false);
    };

    let user = useContext(authContext);
    console.log(user);


    let value = { open, setOpen, handleClickOpen, handleClose}
    let valueJoin = { openJoin, setOpenJoin, handleClickOpenJoin, handleCloseJoin }
    let combinedValue = {value, valueJoin}
    return (
        <div>
          {user?"":<Redirect to= "/login" />}

            <Header combinedValue = {combinedValue}/>
            <CreateClass value = {value}/>
            <JoinClass valueJoin = {valueJoin}/>
        </div>
    )
}

export default Home;