const mysql = require("mysql");

const db_info = {
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
};

const db = mysql.createConnection(db_info);
db.connect();

module.exports = db;