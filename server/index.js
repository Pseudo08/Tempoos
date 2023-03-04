require('dotenv').config();
const express = require('express');
// const db  = require('./database/index.js');
const morgan = require('morgan');

const {LOCAL_URL, PORT} = process.env;

const app = express();

app.use(express.static('client/dist'));

app.use(morgan('dev'));
app.use(express.json());

app.get('/home', (req,res) => {
  res.status(200).send('HEllo world');
})

app.listen(PORT);
console.log(`Server listening at ${LOCAL_URL}:${PORT}`);

