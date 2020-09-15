/*const express = require('express');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MyNewPass',
    port: 3307

});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE GardenGoods';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
})
*/
const mysql = require('mysql');

function connect1()
{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'MyNewPass',
        database: 'gardengoods',
        port: 3307
    })

    connection.connect()
    return connection
}

module.exports = {
    connect1: connect1
}

