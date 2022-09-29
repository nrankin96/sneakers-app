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

let newShoes = document.querySelector('.newShoes');


// Setting up express app and body-parser configurations
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log();
    
});


  app.get('/newreleases', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
        qs: {limit: '10', releaseYear: '2022'},
        headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
          useQueryString: true
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        console.log(body);
    });
  });
  
 


app.listen(3000, (req, res) => {
    console.log('Server started on port 3000');
    
});