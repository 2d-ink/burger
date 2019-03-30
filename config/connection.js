// var mysql = require("mysql"); 
// var connection = mysql.createConnection({
//     host:"localhost", 
//     user: "root", 
//     password: "Formulad1", 
//     database: "burgers_db"
// })

// connection.connect(function(err){
//     if(err) throw err; 
//     console.log("connected as id: " + connection.threadId)
// });

// module.exports = connection; 

// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "Formulad1",
    database: "burgers_db"
  });
};


connection.connect()


module.exports = connection;