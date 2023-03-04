import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const AboutPage = () => {
  return (
    <div>
      <Container maxWidth="lg" style={{ marginTop: '2rem', backgroundImage: 'src(./assets/back.jpeg)' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.
        </Typography>
      </Container>
      <Typography variant="h4" align="center" gutterBottom sx={{marginTop: '2rem'}}>
          Our Story
        </Typography>
      <Grid container spacing={2} style={{ marginTop: '2rem', textAlign: 'center', justifyContent: 'center', columnGap: '1rem', rowGap: '1.5rem'}}>
        <Grid xs={5}>
          <img src="./assets/logo.jpeg" style={{width: "60%"}}></img>
        </Grid>
        <Grid xs={5}>
        <Typography variant="subtitle1" gutterBottom>How it Started</Typography>
        <Typography variant="body1" align="center" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.
        </Typography>
        </Grid>
        <Grid xs={5}>
        <Typography variant="subtitle1" gutterBottom>Where we are at now</Typography>
        <Typography variant="body1" align="center" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.
        </Typography>
        </Grid>
        <Grid xs={5}>
        <img src="./assets/logo.jpeg" style={{width: "60%"}}></img>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default AboutPage;
