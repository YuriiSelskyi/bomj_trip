const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bomj-trip'
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  connection.query('SELECT * FROM testTable;', function (err, rows, fields) {
    if (err) throw err
    console.log(rows[0])
    res.send({ data: rows });
  });
});