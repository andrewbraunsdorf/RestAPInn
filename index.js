const express = require('express');


// set up express app
const app = express();


app.use("/api", require("./routes/api"));
// initialize routes


// listen for requests
app.listen(process.env.PORT || process.env.IP, function(){
	console.log('now listening for requests');
});


// // initialize routes
// app.use('/api', require('./routes/api'));