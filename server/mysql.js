var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'mydb',
  password: 'mydbmydb',
  database: 'my_db'
})

//connection.connect()


//connection.end();

module.exports = connection

