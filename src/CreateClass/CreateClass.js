import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useContext } from 'react';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { authContext } from '../AuthProvider';
import { firestore } from '../lib/firebase';


export default function FormDialog(props) {

  const [className, setClassName] = useState("")
  const [section, setSection] = useState("")
  const [subject, setSubject] = useState("")
  const [Room, setRoom] = useState("")

  let user = useContext(authContext);
  let creatorEmail = user?user.email:"";




  const addClass = (e) => {
    e.preventDefault();
    console.log("this is called");
    const id = uuidv4();

    firestore.collection('Created Classes')
      .doc(creatorEmail)
      .collection('classes')
      .doc(id).set({
        owner: creatorEmail,
        className: className,
        section: section,
        subject: subject,
        room: Room,
        id: id,
      })
      .then(()=>{
        props.value.handleClose()
      })
  }



  return (
    <div>

      <Dialog
        open={props.value.open} onClose={props.value.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a Class</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Class Name"
            type="email"
            fullWidth
            value={className}
            onChange={(e) => {
              setClassName(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Section"
            type="email"
            fullWidth
            value={section}
            onChange={(e) => {
              setSection(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="email"
            fullWidth
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room"
            type="email"
            fullWidth
            value={Room}
            onChange={(e) => {
              setRoom(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={addClass}
            color="primary">
            Create
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

