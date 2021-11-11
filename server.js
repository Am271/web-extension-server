const express = require("express");
const bodyParser = require("body-parser");
const port = Number(process.argv[2]) //port number as first argument: node server.js <port>

app = express();
app.use(express.json());

app.post("/auth", function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    if(req.body.token == 'b15621f9df4cf25f')
    	res.json({'user' : 'KOVPwh7gZl', 'pass' : 'EpNstXzaUh', 'host' : 'remotemysql.com', 'db' : 'KOVPwh7gZl'});
    else {
    	res.status(400);
    	res.send('Invaid token!');
    }
});

app.listen(port,() => {
	console.log("Started on PORT " + port);
});