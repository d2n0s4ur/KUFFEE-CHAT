const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//const cookieParser = require('cookie-parser')
const path = require("path");
//const session = require('express-session');
let bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());
//app.use('/static', express.static(__dirname + '/front/public'));
app.use('/static', express.static(path.join(__dirname, '..','front')));
//app.use(express.static('front'));
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser());
//app.use(express.json());

app.use(require("./app/category-router"));
app.use(require("./app/myInfo-router"));
app.use(require("./app/myList-router"));
app.use(require("./app/users-router"));
app.use(require("./auth/login-router"));
app.use(require("./auth/signup-router"));

app.get("/app", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "/front/public/index.html"));
});

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});

/*
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,  '..', "/front/public/index.html"));
  });
*/