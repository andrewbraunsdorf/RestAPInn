const express = require('express');
const bodyParser = require("body-parser");
// const bodyParser = require('body-parser');

// set up express app
const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.PORT || process.env.IP, function(){
	console.log('now listening for requests');
});

// // use body-parser middleware
// app.use(bodyParser.json());