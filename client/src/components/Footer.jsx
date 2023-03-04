import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Button } from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTiktok, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position="static" color="transparent" style={{ top: '100vh', bottom: 0 }}>
      <Toolbar>
        <Container style={{display: "flex", flexDirection: "column"}}>
        <Typography variant="h4" align="left">
          Follow Us On 
        </Typography>
        <span style={{display : "block"}}>
        <IconButton>
          <a href="https://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'black'}}><FontAwesomeIcon icon={faFacebook} style={{marginRight: '.5rem'}}/> Facebook</a>
        </IconButton>
        </span>
        <span style={{display : "block"}}>
        <IconButton>
          <a href="https://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'black'} }><FontAwesomeIcon icon={faInstagram} style={{marginRight: '.5rem'}}/> Instagram</a>
        </IconButton>
        </span>
        <span style={{display : "block"}}>
        <IconButton>
          <a href="https://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'black'}}><FontAwesomeIcon icon={faTiktok} style={{marginRight: '.5rem'}}/> Tiktok</a>
        </IconButton>
        </span>
        </Container>
        <Container style={{display: "flex", flexDirection: "column"}}>
        <Typography variant="h4" align="center">
          Our Products 
        </Typography>
        <Button variant="text" color="inherit" component={Link} to="/">
            Lacha Paratha
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/about">
            Kimchi
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/contact">
            Timoor Choop
          </Button>
        </Container>
        <Container style={{display: "flex", flexDirection: "column"}}>
        <Typography variant="h4" align="center">
          Quick Links 
        </Typography>
        <Button variant="text" color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/contact">
            Contact
          </Button>

        </Container>

      </Toolbar>
    </AppBar>
  );
}

export default Footer;