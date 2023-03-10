import React from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton, Button } from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTiktok, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position="static" color="transparent" style={{ top: '100vh', bottom: -10,  }}>
      <Toolbar style={{backgroundColor:'#f5f5f5', padding: '1rem'}}>
        <Container style={{display: "flex", flexDirection: "column", justifyContent: 'flex-start', height: '100%', marginLeft: '3rem'}}>
        <Typography variant="h4" align="left">
          Follow Us On 
        </Typography>
       <div style={{width: '30%', display:'flex', justifyContent:'space-between'}}>
        <IconButton >
          <a href="https://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'black', }}><FontAwesomeIcon icon={faFacebook} style={{}}/></a>
        </IconButton>
        
        
        <IconButton>
          <a href="https://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'black'} }><FontAwesomeIcon icon={faInstagram} style={{}}/></a>
        </IconButton>
        
        
        <IconButton>
          <a href="https://www.google.com" target="_blank" style={{textDecoration: 'none', color: 'black'}}><FontAwesomeIcon icon={faTiktok} style={{}}/></a>
        </IconButton>
        </div>
        </Container>
        <Container style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
        <Typography variant="h4" align="center">
          Our Products 
        </Typography>
        <Button variant="text" color="inherit" component={Link} to="/products" style={{width: '50%'}}>
            Lacha Paratha
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/products" style={{width: '50%'}}>
            Kimchi
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/products" style={{width: '50%'}}>
            Timoor Choop
          </Button>
        </Container>
        <Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4" align="center">
          Quick Links 
        </Typography>
        <Button variant="text" color="inherit" component={Link} to="/" style={{width: '50%'}}>
            Home
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/about" style={{width: '50%'}}>
            About
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/contact" style={{width: '50%'}}>
            Contact
          </Button>

        </Container>

      </Toolbar>
    </AppBar>
  );
}

export default Footer;