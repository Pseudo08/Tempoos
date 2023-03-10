import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = ()=> {
  return (
    <AppBar position="static" color="transparent">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between',backgroundColor:'#f5f5f5' }}>
          {/* <IconButton edge="start" color="inherit"> */}
          <div >
          <img src="./assets/logo.jpeg" style={{width: "50px", borderRadius: "50%"}}></img>
          </div>
          {/* </IconButton> */}
          <div>
          <Typography variant="h6" align="center" style={{marginLeft: '6rem' }}>
            Tempoos Food Products
          </Typography>
          </div>
          <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;