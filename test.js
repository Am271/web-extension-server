const express = require("express");
const bodyParser = require("body-parser");
const port = Number(process.argv[2]) //port number as first argument: node server.js <port>

app = express();
app.use(express.json());

app.get("/", function(req, res) {
	console.log('Request received!');
	res.json({'message' : 'Good day!'});
});

app.post("/auth", function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	console.log('Auth Request received!');	
    if(req.body.token == 'b15621f9df4cf25f')
    	res.json({'user' : 'KOVPwh7gZl', 'pass' : 'EpNstXzaUh', 'host' : 'remotemysql.com', 'db' : 'KOVPwh7gZl'});
    else {
    	res.status(400);
    	res.send('Invaid token!');
    }
});

app.post("/query", function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	console.log(req.body);
	//res.json({'message' : 'Good day!'})
});

app.listen(port,() => {
	console.log("Started on PORT " + port);
});
