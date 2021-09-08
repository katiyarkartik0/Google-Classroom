import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './JoinClass.css';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';
import { useContext } from 'react';
import { authContext } from '../AuthProvider';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



export default function FullScreenDialog(props) {
    const classes = useStyles();
    let user = useContext(authContext);


    return (
        <div>
            <Dialog fullScreen open={props.valueJoin.openJoin} onClose={props.valueJoin.handleCloseJoin} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.valueJoin.handleCloseJoin} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Join Class
                        </Typography>
                        <Button autoFocus color="inherit" onClick={props.valueJoin.handleCloseJoin}>
                            JOIN
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className="joinClass">
                    <div className="joinClass__form">
                        <p className="joinClass__formText">
                            You're currently signed in as logged in mail
                        </p>
                        <div className="joinClass__loginInfo">
                            <div className="joinClass__classLeft">
                                <Avatar src={user?user.photoURL:""} />
                                <div className="joinClass__loginText">
                                    <div className="joinClass__loginName">
                                        {user?user.displayName:""}
                                    </div>
                                    <div className="joinClass__loginEmail">
                                        {user?user.email:""}
                                    </div>
                                </div>
                            </div>
                            <Button variant="outlined" color="primary">
                                Logout
                            </Button>
                        </div>

                    </div>
                    <div className="joinClass__form">
                        <h5>Class code</h5>
                        <div>ask your teacher/owner for class code</div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Class Code"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Owner's Email"
                            type="email"
                            fullWidth
                        />

                    </div>
                </div>

            </Dialog>


        </div>
    );
}
