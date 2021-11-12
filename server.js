const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
var mysql = require('mysql');

const port = Number(process.argv[2]) //port number as first argument: node server.js <port>

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "KOVPwh7gZl",
  password: "EpNstXzaUh",
  database: "KOVPwh7gZl"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Remote MySQL Server...");
});

app = express();
app.use(express.json());
app.use(cors());

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
	// console.log(req.body.domain);
	con.query("SELECT * FROM phishing_domains WHERE name='" + req.body.domain + "';", function (err, result) {
		if (err) throw err;
		if(result.length > 0) { // console.log(result);
			res.json({'safe' : false});
		}
		else {
			res.json({'safe' : true});
		}
 	});	
});

app.listen(port,() => {
	console.log("Started on PORT " + port);
});
