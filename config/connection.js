// Set up MySQL connection.
var mysql = require("mysql");




// local connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
