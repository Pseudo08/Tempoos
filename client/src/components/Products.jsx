import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Button,
  Grid,
  IconButton,
  Toolbar,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Products = () => {
  return (
    <div style={{marginBottom: '6rem'}}>
    <Typography variant="h2" style={{textAlign: 'center',  marginTop: '2rem'}}>Our Products</Typography>
      <Grid container spacing={2} style={{ marginTop: '2rem', textAlign: 'center', justifyContent: 'center', columnGap: '1rem', rowGap: '2rem', marginBottom: '3rem'}}>
        <Grid xs={5}>
          <img src="./assets/logo.jpeg" style={{width: "60%"}}></img>
        </Grid>
        <Grid xs={5} sx={{display:'flex', alignItems:'flex-start', flexDirection:'column', marginTop: '2rem'}}>
        <Typography variant="h3" style={{fontWeight: 300}} gutterBottom>Lacha Paratha</Typography>
        <div style={{display: 'flex'}}>
        <Rating name="no-value" value={null} style={{alignSelf: 'flex-start', marginBottom: '1rem'}}/>
        <Typography component="legend" sx={{marginLeft: '2rem'}}>No rating given</Typography>
        </div>
        <Typography variant="body1" style={{fontSize: '1.2rem'}} align="left" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.
        </Typography>
        </Grid>
        <Grid xs={5}>
          <img src="./assets/logo.jpeg" style={{width: "60%"}}></img>
        </Grid>
        <Grid xs={5} sx={{display:'flex', alignItems:'flex-start', flexDirection:'column',marginTop: '2rem'}}>
        <Typography variant="h3" style={{fontWeight: 300}} gutterBottom>Kimchi</Typography>
        <div style={{display: 'flex'}}>
        <Rating name="no-value" value={null} style={{alignSelf: 'flex-start'}}/>
        <Typography component="legend" sx={{marginLeft: '2rem', marginBottom: '1rem'}}>No rating given</Typography>
        </div>
        <Typography variant="body1" style={{fontSize: '1.2rem'}} align="left" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.
        </Typography>
        </Grid>
        <Grid xs={5}>
          <img src="./assets/logo.jpeg" style={{width: "60%"}}></img>
        </Grid>
        <Grid xs={5} sx={{display:'flex', alignItems:'flex-start', flexDirection:'column', marginTop: '2rem'}}>
        <Typography variant="h3" style={{fontWeight: 300}} gutterBottom>Timur Choop</Typography>
        <div style={{display: 'flex'}}>
        <Rating name="no-value" value={null} style={{alignSelf: 'flex-start', marginBottom: '1rem'}}/>
        <Typography component="legend" sx={{marginLeft: '2rem'}}>No rating given</Typography>
        </div>
        <Typography variant="body1" style={{fontSize: '1.2rem'}} align="left" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus et elit
          ullamcorper commodo.
        </Typography>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Products;
