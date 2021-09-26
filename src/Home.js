import Header from "./Header/Header"
import React, { useEffect, useState } from 'react'
import CreateClass from "./CreateClass/CreateClass"
import JoinClass from "./JoinClass/JoinClass"
import { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Redirect } from "react-router";
import { firestore } from "./lib/firebase";
import { CardUI } from "./ClassCardUI/CardUI"
import './Home.css';
import { ListItem } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EnteredClass } from "./EnteredClass/EnteredClass";

export const Home = (props) => {
  //console.log(props);
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
  //console.log(user);
  let value = { open, setOpen, handleClickOpen, handleClose }
  let valueJoin = { openJoin, setOpenJoin, handleClickOpenJoin, handleCloseJoin }
  let combinedValue = { value, valueJoin }


  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);
  props.funk(createdClasses);
  props.funk2(joinedClasses);
  console.log(user);

  useEffect(() => {
    if (user) {
      let unsub = firestore.collection('Created Classes')
        .doc(user.email)
        .collection('classes')
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()))
        })
      return () => {
        unsub();
      }
    }
  }, [user])

  useEffect(() => {
    if (user) {
      let unsub = firestore.collection('Joined Classes')
        .doc(user.email)
        .collection('classes')
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData))
        })
      return () => {
        unsub();
      }
    }
  }, [user])

  //console.log(createdClasses);
  return (

    <div>
      <>
      </>
      {user ? "" : <Redirect to="/login" />}

      <Header combinedValue={combinedValue} />
      <CreateClass value={value} />
      <JoinClass valueJoin={valueJoin} />
      <div className="dashboard">
        {joinedClasses.map((item) => {
          return <CardUI data={item} status="Joined Class" />;
        }
        )}
        {createdClasses.map((item) => {
          return <CardUI data={item} status="Created Classes" />;
        }
        )}
      </div>
    </div>
  )
}

export default Home;