var mysql = require('mysql');

var con = mysql.createConnection({
  host: "wildcry.c8vcpeuwbjfj.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "rakhulkarthick",
  database: "wildcry"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tables", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});