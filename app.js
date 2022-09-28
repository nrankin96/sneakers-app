//Require application dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const ejs = require('ejs');

//Sneaks API
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

// Setting up express app and body-parser configurations
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log();
    
});



app.listen(3000, (req, res) => {
    console.log('Server started on port 3000');
    
});