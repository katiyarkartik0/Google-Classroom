import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { auth } from '../lib/firebase';

import "./Header.css"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { authContext } from '../AuthProvider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let user = useContext(authContext);


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
          <Typography variant="h6" color="inherit">
            Classroom
          </Typography>
          <div className="Header-add-apps-acc">
            <AddIcon onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} onClick={props.combinedValue.valueJoin.handleClickOpenJoin}>Join Class</MenuItem>
              <MenuItem onClick={handleClose} onClick={props.combinedValue.value.handleClickOpen}>Create Class</MenuItem>

            </Menu>

            <AppsIcon />
            <Avatar src={user ? user.photoURL : ""} />
            <button
              onClick={() => {
                auth.signOut();
              }}
              type="button" className="btn btn-danger">LOGOUT</button>

          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}

