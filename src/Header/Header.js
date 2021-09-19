import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import { auth } from '../lib/firebase';
import LetteredAvatar from 'lettered-avatar'
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
  const [anchorE2, setAnchorE2] = React.useState(null);


  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };


  let user = useContext(authContext);



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Classroom
          </Typography>
          <div className="Header-add-apps-acc">
            <AddIcon onClick={handleClick1} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose1}
            >
              <MenuItem onClick={props.combinedValue.valueJoin.handleClickOpenJoin}>Join Class</MenuItem>
              <MenuItem onClick={props.combinedValue.value.handleClickOpen}>Create Class</MenuItem>

            </Menu>

            <AppsIcon />
            <div>
              <div className="dropdown">
                <div className="container">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <LetteredAvatar
                      name={user && !(user.photoURL) ? `${user.displayName}` : ""}
                      imgSrc={user ? user.photoURL : ""} />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >

                    <li><a className="dropdown-item">
                    <LetteredAvatar
                      name={user && !(user.photoURL) ? `${user.displayName}` : ""}
                      imgSrc={user ? user.photoURL : ""} />
                      </a></li>
                    <li><a className="dropdown-item"><h5>{user?user.email:""}</h5></a></li>
                    <li><a className="dropdown-item">
                    <button
                      onClick={() => {
                        auth.signOut();
                      }}
                      type="button" className="btn btn-danger">LOGOUT</button>
                      </a></li>

            
                  </ul>
                </div>
              </div>


            </div>

          </div>


        </Toolbar>
      </AppBar>
    </div>
  );
}

