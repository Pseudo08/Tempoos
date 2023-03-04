import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function HomePage() {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <img src="./assets/back.jpeg"   style={{ marginTop: '2rem',  width: "90%", alignSelf: "center", borderRadius: "10px" }}></img>
      <Container  maxWidth="md" style={{ marginTop: '2rem' }}>
        
        <Typography variant="h2" align="center" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" align="center" paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minima, in neque atque necessitatibus saepe quasi quae perspiciatis!
          Sapiente veniam ex labore officiis delectus recusandae quas nobis
          quibusdam nulla laborum! Unde corrupti rerum voluptates, non,
          dignissimos tempora et consequuntur possimus laboriosam neque hic,
          cupiditate cumque facilis iure sit blanditiis asperiores expedita ad
          obcaecati! Reprehenderit beatae quae eaque impedit, numquam at.
        </Typography>
        
      </Container>
    </div>
    <div>
      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Our Products
        </Typography>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Lacha Paratha
        </Typography>
        <img src="./assets/chop.jpeg" width="80%" style={{alignSelf: "center", borderRadius: "10px"}}></img>
        <Typography variant="body1" align="center" paragraph style={{ margin: '1rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minima, in neque atque necessitatibus saepe quasi quae perspiciatis!
          Sapiente veniam ex labore officiis delectus recusandae quas nobis
          quibusdam nulla laborum! Unde corrupti rerum voluptates, non,
          dignissimos tempora et consequuntur possimus laboriosam neque hic.
        </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Kimchi
        </Typography>
        <img src="./assets/kimchi.jpeg" width="80%"  style={{alignSelf: "center", borderRadius: "10px"}}></img>
        <Typography variant="body1" align="center" paragraph style={{ margin: '1rem'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minima, in neque atque necessitatibus saepe quasi quae perspiciatis!
          Sapiente veniam ex labore officiis delectus recusandae quas nobis
          quibusdam nulla laborum! Unde corrupti rerum voluptates, non,
          dignissimos tempora et consequuntur possimus laboriosam neque hic.
        </Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h4" align="center" gutterBottom>
          Timur Choop
        </Typography>
        <img src="./assets/chop.jpeg" width="80%" style={{alignSelf: "center", borderRadius: "10px"}}></img>
        <Typography variant="body1" align="center" paragraph style={{ margin: '1rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minima, in neque atque necessitatibus saepe quasi quae perspiciatis!
          Sapiente veniam ex labore officiis delectus recusandae quas nobis
          quibusdam nulla laborum! Unde corrupti rerum voluptates, non,
          dignissimos tempora et consequuntur possimus laboriosam neque hic.
        </Typography>
        </div>
        </div>
      </Container>
    </div>
    </>
  );
}

export default HomePage;
