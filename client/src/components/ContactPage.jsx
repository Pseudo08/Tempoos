
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  Box,
  Container,
  IconButton,
  Toolbar,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const ContactPage = () => {
  return (
    
      <Container maxWidth="md" style={{ marginTop: '2rem',marginBottom: '5rem', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Phone: XXXXXXXXX
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Email: testing@gmail.com
        </Typography>
        <Typography variant="h3" align="center" gutterBottom>
          Have other Enquiry?
        </Typography>
        <Box component="form" onSubmit={(e) => {e.preventDefault();
          console.log("UOLO");}} sx={{
            width: 0.6,
            height: '40vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            rowGap: '1rem',
            marginTop: '2rem'
          }}>
          <div>
            <TextField required label="First Name" sx={{marginRight: '1rem'}}></TextField>
            <TextField required label="Last Name"></TextField>
          </div>
          <div>
          <TextField required label="Phone" sx={{width: 0.3, marginRight: '1rem'}}></TextField>
          <TextField required label="Email" sx={{width: 0.66}}></TextField>
          </div>
          <Typography variant="caption">What are you enquiring us about?</Typography>
          <Select>
            <MenuItem value={1}>Online Order</MenuItem>
            <MenuItem value={10}>Sales</MenuItem>
            <MenuItem value={20}>Wholesale/Vendor</MenuItem>
            <MenuItem value={30}>Quality Assurance</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
          <TextField required multiline label="Message" sx={{width: 1}} ></TextField>
          <Button type="submit" variant="outline">Submit</Button>
        </Box>
      </Container>
  );
}

export default ContactPage;
