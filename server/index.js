require('dotenv').config();
const express = require('express');
// const db  = require('./database/index.js');
const path = require('path')
const cors = require('cors');
const morgan = require('morgan');

const {LOCAL_URL, PORT} = process.env;

const app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.static('client/dist'));

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
  res.status(200).send('HEllo world');
})
app.get('/contact', (req,res) => {
  res.status(200).send('HEllo world');
})
app.get('/products', (req,res) => {
  res.status(200).send('HEllo world');
})
app.get('/about', (req,res) => {
  res.status(200).send('HEllo world');
})


app.listen(PORT);
console.log(`Server listening at ${LOCAL_URL}:${PORT}`);

