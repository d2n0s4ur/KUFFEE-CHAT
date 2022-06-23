const mysql = require("mysql");

const db_info = {
  host: process.env.HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.USER,
  password: process.env.PASEWORD,
  database: process.env.DB,
};

const db = mysql.createConnection(db_info);

db.connect();

module.exports = db;